const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "rongzheng-2026-secret-key";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "rz123456";

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "public")));

// ── Database setup ──────────────────────────────────────────────
const db = new Database(path.join(__dirname, "rongzheng.db"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'worker',
      display_name TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contract_no TEXT UNIQUE NOT NULL,
      customer TEXT,
      product_name TEXT,
      quantity TEXT,
      qty_num INTEGER DEFAULT 0,
      proofs TEXT,
      sheets TEXT,
      size TEXT,
      binding TEXT,
      deadline TEXT,
      status TEXT DEFAULT 'pending',
      remark TEXT DEFAULT '',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS order_processes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
      process_name TEXT NOT NULL,
      done INTEGER DEFAULT 0,
      status TEXT DEFAULT '',
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      emp_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      role TEXT,
      dept TEXT,
      phone TEXT
    );

    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      emp_id TEXT NOT NULL,
      date TEXT NOT NULL,
      check_in TEXT,
      check_out TEXT,
      UNIQUE(emp_id, date)
    );

    CREATE TABLE IF NOT EXISTS machines (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mac_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      type TEXT,
      status TEXT DEFAULT 'idle',
      last_maintain TEXT,
      next_maintain TEXT,
      dept TEXT
    );

    CREATE TABLE IF NOT EXISTS inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      inv_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      category TEXT,
      qty REAL DEFAULT 0,
      unit TEXT,
      min_stock REAL DEFAULT 0,
      location TEXT
    );

    CREATE TABLE IF NOT EXISTS work_reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contract_no TEXT,
      process TEXT,
      done INTEGER DEFAULT 1,
      operator TEXT,
      time TEXT DEFAULT (datetime('now','localtime'))
    );

    CREATE TABLE IF NOT EXISTS schedules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contract_no TEXT,
      machine_id TEXT,
      date TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);
}
initDB();

// ── Seed default admin ──────────────────────────────────────────
(function seedAdmin() {
  const existing = db.prepare("SELECT id FROM users WHERE username = ?").get("admin");
  if (!existing) {
    const hash = bcrypt.hashSync(ADMIN_PASSWORD, 10);
    db.prepare("INSERT INTO users (username, password_hash, role, display_name) VALUES (?,?,?,?)").run("admin", hash, "admin", "管理员");
    console.log("Admin user seeded (admin / " + ADMIN_PASSWORD + ")");
  }
})();

// ── Seed demo data ──────────────────────────────────────────────
(function seedData() {
  const count = db.prepare("SELECT COUNT(*) as c FROM orders").get();
  if (count.c > 0) return;
  console.log("Seeding initial data...");

  const fs = require("fs");
  const ordersData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "_orders.json"), "utf-8"));
  const insertOrder = db.prepare("INSERT OR IGNORE INTO orders (contract_no, customer, product_name, quantity, qty_num, proofs, sheets, size, binding, deadline, status, remark) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
  const insertProc = db.prepare("INSERT OR IGNORE INTO order_processes (order_id, process_name, done, status) VALUES (?,?,?,?)");
  const tx = db.transaction(() => {
    ordersData.forEach(o => {
      insertOrder.run(o.contractNo, o.customer, o.productName, o.quantity, o.qtyNum || 0, o.proofs || "", o.sheets || "", o.size || "", o.binding || "", o.deadline || "", o.status, o.remark || "");
      const orderId = db.prepare("SELECT id FROM orders WHERE contract_no = ?").get(o.contractNo).id;
      (o.processes || []).forEach(p => {
        insertProc.run(orderId, p.name, p.done ? 1 : 0, p.status || "");
      });
    });
  });
  tx();

  const empData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "_employees.json"), "utf-8"));
  const insertEmp = db.prepare("INSERT OR IGNORE INTO employees (emp_id, name, role, dept, phone) VALUES (?,?,?,?,?)");
  empData.forEach(e => { insertEmp.run(e.id, e.name, e.role, e.dept, e.phone); });

  const macData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "_machines.json"), "utf-8"));
  const insertMac = db.prepare("INSERT OR IGNORE INTO machines (mac_id, name, type, status, last_maintain, next_maintain, dept) VALUES (?,?,?,?,?,?,?)");
  macData.forEach(m => { insertMac.run(m.id, m.name, m.type, m.status, m.lastMaintain, m.nextMaintain, m.dept); });

  const invData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "_inventory.json"), "utf-8"));
  const insertInv = db.prepare("INSERT OR IGNORE INTO inventory (inv_id, name, category, qty, unit, min_stock, location) VALUES (?,?,?,?,?,?,?)");
  invData.forEach(i => { insertInv.run(i.id, i.name, i.category, i.qty, i.unit, i.minStock, i.location); });

  console.log("Seed complete: " + ordersData.length + " orders, " + empData.length + " employees, " + macData.length + " machines, " + invData.length + " inventory");
})();

// ── Auth Middleware ──────────────────────────────────────────────
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "未登录" });
  try {
    const token = header.split(" ")[1];
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ error: "登录已过期" });
  }
}

// ── Auth Routes ─────────────────────────────────────────────────
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (!user) return res.status(401).json({ error: "用户名或密码错误" });
  if (!bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: "用户名或密码错误" });
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role, display_name: user.display_name }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { id: user.id, username: user.username, role: user.role, display_name: user.display_name } });
});

app.get("/api/me", auth, (req, res) => {
  res.json(req.user);
});

// ── Orders ─────────────────────────────────────────────────────
app.get("/api/orders", auth, (req, res) => {
  try {
    const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all();
    for (let o of orders) {
      o.processes = db.prepare("SELECT * FROM order_processes WHERE order_id = ? ORDER BY id").all(o.id);
    }
    res.json(orders);
  } catch(e) {
    console.error("Orders error:", e.message);
    res.status(500).json({error: e.message});
  }
});

app.post("/api/orders", auth, (req, res) => {
  const { contract_no, customer, product_name, quantity, qty_num, proofs, sheets, size, binding, deadline, status, remark, processes } = req.body;
  const tx = db.transaction(() => {
    db.prepare("INSERT INTO orders (contract_no, customer, product_name, quantity, qty_num, proofs, sheets, size, binding, deadline, status, remark) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)").run(contract_no, customer, product_name, quantity, qty_num || 0, proofs || "", sheets || "", size || "", binding || "", deadline || "", status || "pending", remark || "");
    const orderId = db.prepare("SELECT id FROM orders WHERE contract_no = ?").get(contract_no).id;
    (processes || []).forEach(p => {
      db.prepare("INSERT INTO order_processes (order_id, process_name, done, status) VALUES (?,?,?,?)").run(orderId, p.name, p.done ? 1 : 0, p.status || "");
    });
  });
  tx();
  res.json({ ok: true });
});

app.put("/api/orders/:id", auth, (req, res) => {
  const { id } = req.params;
  const { contract_no, customer, product_name, quantity, qty_num, proofs, sheets, size, binding, deadline, status, remark } = req.body;
  db.prepare("UPDATE orders SET contract_no=?, customer=?, product_name=?, quantity=?, qty_num=?, proofs=?, sheets=?, size=?, binding=?, deadline=?, status=?, remark=?, updated_at=datetime('now') WHERE id=?").run(contract_no, customer, product_name, quantity, qty_num || 0, proofs || "", sheets || "", size || "", binding || "", deadline || "", status || "pending", remark || "", id);
  res.json({ ok: true });
});

app.put("/api/orders/:id/process", auth, (req, res) => {
  const { id } = req.params;
  const { process_name, done } = req.body;
  db.prepare("UPDATE order_processes SET done=?, status=?, updated_at=datetime('now') WHERE order_id=? AND process_name=?").run(done ? 1 : 0, done ? "完" : "", id, process_name);
  // Update order status
  const procs = db.prepare("SELECT * FROM order_processes WHERE order_id = ?").all(id);
  const allDone = procs.every(p => p.done);
  const anyDone = procs.some(p => p.done);
  const newStatus = allDone ? "done" : anyDone ? "wip" : "pending";
  db.prepare("UPDATE orders SET status=?, updated_at=datetime('now') WHERE id=?").run(newStatus, id);
  res.json({ ok: true, orderStatus: newStatus });
});

// Report work
app.post("/api/report", auth, (req, res) => {
  const { contract_no, process, done } = req.body;
  db.prepare("INSERT INTO work_reports (contract_no, process, done, operator) VALUES (?,?,?,?)").run(contract_no, process, done !== false ? 1 : 0, req.user.display_name || req.user.username);
  // Also update process
  const order = db.prepare("SELECT id FROM orders WHERE contract_no = ?").get(contract_no);
  if (order) {
    db.prepare("UPDATE order_processes SET done=?, status=?, updated_at=datetime('now') WHERE order_id=? AND process_name=?").run(done !== false ? 1 : 0, done !== false ? "完" : "", order.id, process);
    const procs = db.prepare("SELECT * FROM order_processes WHERE order_id = ?").all(order.id);
    const allDone = procs.every(p => p.done);
    const anyDone = procs.some(p => p.done);
    const newStatus = allDone ? "done" : anyDone ? "wip" : "pending";
    db.prepare("UPDATE orders SET status=?, updated_at=datetime('now') WHERE id=?").run(newStatus, order.id);
  }
  res.json({ ok: true });
});

app.get("/api/reports", auth, (req, res) => {
  const reports = db.prepare("SELECT * FROM work_reports ORDER BY id DESC LIMIT 50").all();
  res.json(reports);
});

// ── Employees ───────────────────────────────────────────────────
app.get("/api/employees", auth, (req, res) => {
  res.json(db.prepare("SELECT * FROM employees ORDER BY id").all());
});

app.post("/api/employees", auth, (req, res) => {
  const { emp_id, name, role, dept, phone } = req.body;
  db.prepare("INSERT OR REPLACE INTO employees (emp_id, name, role, dept, phone) VALUES (?,?,?,?,?)").run(emp_id, name, role, dept, phone);
  res.json({ ok: true });
});

app.delete("/api/employees/:id", auth, (req, res) => {
  db.prepare("DELETE FROM employees WHERE emp_id = ?").run(req.params.id);
  res.json({ ok: true });
});

// ── Attendance ──────────────────────────────────────────────────
app.get("/api/attendance", auth, (req, res) => {
  const { date } = req.query;
  if (date) {
    res.json(db.prepare("SELECT * FROM attendance WHERE date = ?").all(date));
  } else {
    res.json(db.prepare("SELECT * FROM attendance ORDER BY date DESC, id ASC LIMIT 200").all());
  }
});

app.post("/api/attendance", auth, (req, res) => {
  const { emp_id, date, type } = req.body;
  const existing = db.prepare("SELECT * FROM attendance WHERE emp_id = ? AND date = ?").get(emp_id, date);
  if (type === "checkin") {
    if (existing && existing.check_in) return res.status(400).json({ error: "今日已签到" });
    db.prepare("INSERT INTO attendance (emp_id, date, check_in) VALUES (?,?,datetime('now','localtime')) ON CONFLICT(emp_id,date) DO UPDATE SET check_in = datetime('now','localtime')").run(emp_id, date);
  } else if (type === "checkout") {
    if (!existing || !existing.check_in) return res.status(400).json({ error: "请先签到" });
    db.prepare("UPDATE attendance SET check_out = datetime('now','localtime') WHERE emp_id = ? AND date = ?").run(emp_id, date);
  }
  res.json({ ok: true });
});

// ── Machines ────────────────────────────────────────────────────
app.get("/api/machines", auth, (req, res) => {
  res.json(db.prepare("SELECT * FROM machines ORDER BY id").all());
});

app.put("/api/machines/:id", auth, (req, res) => {
  const { id } = req.params;
  const { status, last_maintain, next_maintain } = req.body;
  db.prepare("UPDATE machines SET status=?, last_maintain=?, next_maintain=? WHERE id=?").run(status, last_maintain, next_maintain, id);
  res.json({ ok: true });
});

// ── Inventory ───────────────────────────────────────────────────
app.get("/api/inventory", auth, (req, res) => {
  res.json(db.prepare("SELECT * FROM inventory ORDER BY id").all());
});

app.put("/api/inventory/:id", auth, (req, res) => {
  const { id } = req.params;
  const { qty } = req.body;
  db.prepare("UPDATE inventory SET qty=? WHERE id=?").run(qty, id);
  res.json({ ok: true });
});

// ── Schedules ───────────────────────────────────────────────────
app.get("/api/schedules", auth, (req, res) => {
  res.json(db.prepare("SELECT * FROM schedules ORDER BY date DESC, id DESC").all());
});

app.post("/api/schedules", auth, (req, res) => {
  const { contract_no, machine_id, date } = req.body;
  db.prepare("INSERT INTO schedules (contract_no, machine_id, date) VALUES (?,?,?)").run(contract_no, machine_id, date);
  res.json({ ok: true });
});

app.delete("/api/schedules/:id", auth, (req, res) => {
  db.prepare("DELETE FROM schedules WHERE id=?").run(req.params.id);
  res.json({ ok: true });
});

// ── User Management (admin only) ───────────────────────────────
app.get("/api/users", auth, (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "无权限" });
  res.json(db.prepare("SELECT id, username, role, display_name, created_at FROM users ORDER BY id").all());
});

app.post("/api/users", auth, (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "无权限" });
  const { username, password, role, display_name } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  db.prepare("INSERT INTO users (username, password_hash, role, display_name) VALUES (?,?,?,?)").run(username, hash, role || "worker", display_name || username);
  res.json({ ok: true });
});

app.delete("/api/users/:id", auth, (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "无权限" });
  db.prepare("DELETE FROM users WHERE id=?").run(req.params.id);
  res.json({ ok: true });
});

// ── Stats ───────────────────────────────────────────────────────
app.get("/api/stats", auth, (req, res) => {
  const stats = {};
  stats.totalOrders = db.prepare("SELECT COUNT(*) as c FROM orders").get().c;
  stats.doneOrders = db.prepare("SELECT COUNT(*) as c FROM orders WHERE status='done'").get().c;
  stats.wipOrders = db.prepare("SELECT COUNT(*) as c FROM orders WHERE status='wip'").get().c;
  stats.pendingOrders = db.prepare("SELECT COUNT(*) as c FROM orders WHERE status='pending'").get().c;
  stats.totalMachines = db.prepare("SELECT COUNT(*) as c FROM machines").get().c;
  stats.runningMachines = db.prepare("SELECT COUNT(*) as c FROM machines WHERE status='running'").get().c;
  stats.lowStock = db.prepare("SELECT COUNT(*) as c FROM inventory WHERE qty <= min_stock").get().c;
  stats.totalInventory = db.prepare("SELECT COUNT(*) as c FROM inventory").get().c;
  res.json(stats);
});

// ── Process counts for charts ───────────────────────────────────
app.get("/api/process-stats", auth, (req, res) => {
  const processes = ["封印", "工艺", "内印", "折页", "锁线", "胶订", "骑订", "配书", "塑封"];
  const result = {};
  processes.forEach(p => {
    result[p] = db.prepare("SELECT COUNT(*) as c FROM order_processes WHERE process_name = ? AND done = 1").get(p).c;
  });
  res.json(result);
});

// ── Week attendance ─────────────────────────────────────────────
app.get("/api/week-attendance", auth, (req, res) => {
  const weekDays = [];
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const mon = new Date(d.setDate(diff));
  for (let i = 0; i < 7; i++) {
    const dd = new Date(mon);
    dd.setDate(mon.getDate() + i);
    weekDays.push(dd.getFullYear() + "-" + String(dd.getMonth() + 1).padStart(2, "0") + "-" + String(dd.getDate()).padStart(2, "0"));
  }
  const result = {};
  weekDays.forEach(wd => {
    result[wd] = db.prepare("SELECT COUNT(*) as c FROM attendance WHERE date = ? AND check_in IS NOT NULL").get(wd).c;
  });
  res.json(result);
});

// ── Customer ranking ────────────────────────────────────────────
app.get("/api/customer-ranking", auth, (req, res) => {
  const rows = db.prepare("SELECT customer, COUNT(*) as c FROM orders GROUP BY customer ORDER BY c DESC LIMIT 10").all();
  res.json(rows);
});

// ── QC rate ─────────────────────────────────────────────────────
app.get("/api/qc-rate", auth, (req, res) => {
  const total = db.prepare("SELECT COUNT(*) as c FROM orders WHERE status='done'").get().c;
  // Assume done orders passed QC (simplified - in real system this would be explicit)
  res.json({ total, good: total, rate: total > 0 ? 100 : 0 });
});

// ── SPA fallback ────────────────────────────────────────────────
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api/")) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

// ── Start ───────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log("融正印刷管理系统 running on http://localhost:" + PORT);
  console.log("Login: admin / " + ADMIN_PASSWORD);
});
