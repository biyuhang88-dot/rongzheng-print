
var ALL_PROCESSES = ["封印","工艺","内印","折页","锁线","胶订","骑订","配书","塑封"];
var orderFilter = "全部";
var orderSearch = "";

function pn(p) { return p.process_name || p.name; }
function pd(p) { return p.done === 1 || p.done === true; }
function ps(p) { return p.status || ""; }
function eid(e) { return e.emp_id || e.id; }

function reloadData(fn) {
  return Promise.all([
    api("/api/orders").then(function(d) { state.orders = d; }),
    api("/api/employees").then(function(d) { state.employees = d; }),
    api("/api/machines").then(function(d) { state.machines = d; }),
    api("/api/inventory").then(function(d) { state.inventory = d; }),
    api("/api/attendance").then(function(d) {
      state.attendance = {};
      d.forEach(function(r) { if(!state.attendance[r.date]) state.attendance[r.date]={}; state.attendance[r.date][r.emp_id]=r; });
    }),
    api("/api/reports").then(function(d) { state.workReports = d; }),
    api("/api/schedules").then(function(d) { state.scheduleItems = d; })
  ]).then(function() { if(fn) fn(); });
}
