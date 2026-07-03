
function normOrder(o) {
  o.contractNo = o.contract_no;
  o.productName = o.product_name;
  o.qtyNum = o.qty_num || 0;
  if (o.processes) o.processes.forEach(function(p) {
    p.name = p.process_name || p.name;
    p.done = p.done === 1 ? true : (p.done === 0 ? false : p.done);
  });
  return o;
}
function normInventory(i) { i.minStock = i.min_stock; return i; }
function normEmployee(e) { e.id = e.emp_id || e.id; return e; }
function normMachine(m) { m.id = m.mac_id || m.id; return m; }
// ============ DATA ============
const EMBED_ORDERS = [{"id": "26060089", "contractNo": "26060089", "customer": "利云文化", "productName": "学前启蒙规划营：139骑订+4张目录+1张家长信+2套卡片+练习册3胶订1骑订+彩箱周转箱", "quantity": "3000套", "qtyNum": 3000, "proofs": "1", "sheets": "明细", "size": "170*170", "binding": "配装  骑 订  塑封 （10本一套先 塑封）", "deadline": "2026-06-25", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060161", "contractNo": "26060161", "customer": "鸿景印刷", "productName": "《英国儿童正向行为引导绘本》（全10册）  装前样2本", "quantity": "10000", "qtyNum": 10000, "proofs": "10+5+2", "sheets": "28*10", "size": "185*210", "binding": "封面 腰封亮膜 无线胶订 卡片自来袋15000套", "deadline": "2026-07-06", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060142", "contractNo": "26060142", "customer": "作业帮", "productName": "6年级：尖子生动画学练测英语：学透、练透英语+押题卷（2本胶订+1本试卷）", "quantity": "5300套", "qtyNum": 5300, "proofs": "30+2", "sheets": "14.25", "size": "210*285", "binding": "2本胶订+试卷+塑封+贴码", "deadline": "2026-06-30", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060143", "contractNo": "26060143", "customer": "作业帮", "productName": "5年级：尖子生动画学练测英语：学透、练透英语+押题卷（2本胶订+1本试卷）", "quantity": "9500套", "qtyNum": 9500, "proofs": "30+2", "sheets": "12.25", "size": "210*285", "binding": "2本胶订+试卷+塑封+贴码", "deadline": "2026-06-30", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060144", "contractNo": "26060144", "customer": "作业帮", "productName": "2年级：尖子生动画学练测英语：学透、练透英语+押题卷（2本胶订+1本试卷）", "quantity": "2600套", "qtyNum": 2600, "proofs": "30+2", "sheets": "9.25", "size": "210*285", "binding": "2本胶订+试卷+塑封+贴码", "deadline": "2026-06-30", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060141", "contractNo": "26060141", "customer": "作业帮", "productName": "【拉新礼包】sw7270640001：26《低分逆袭108》-终品-套装", "quantity": "10000套盒", "qtyNum": 10000, "proofs": "30+2", "sheets": "75.5+6.25", "size": "210*285", "binding": "套盒 哑膜 配套  胶订6本 试卷1+骑订1", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060136", "contractNo": "26060136", "customer": "中国公路", "productName": "中国交通信息化2026年6月刊", "quantity": "5520", "qtyNum": 5520, "proofs": "明细", "sheets": "9+单页", "size": "215*285", "binding": "光膜 无线胶订", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060112", "contractNo": "26060112", "customer": "童心布马", "productName": "加印：布小心数学开窍了1-6", "quantity": "12100套", "qtyNum": 12100, "proofs": "5", "sheets": "明细", "size": "165*230", "binding": "配装函套 塑封 装箱", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060140", "contractNo": "26060140", "customer": "希望学", "productName": "613319 骑订：新初三-26-27数暑假领跑天天练", "quantity": "3000", "qtyNum": 3000, "proofs": "2+2", "sheets": "3.5", "size": "210*285", "binding": "哑膜 骑订 单本打包", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060147", "contractNo": "26060147", "customer": "希望学", "productName": "613914/613916/613936/613938骑订4款：26年暑假百分秘籍-4、6年级（复习/天天练）", "quantity": "1500*4", "qtyNum": 6000, "proofs": "2+2", "sheets": "4本", "size": "210*285", "binding": "哑膜 骑马订4本 3.5 /3.25/1.5/1.5", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060148", "contractNo": "26060148", "customer": "希望学", "productName": "613948/3950/3954/3956骑订4本：26年暑假百分秘籍语文/英语4、6年级", "quantity": "1500*4", "qtyNum": 6000, "proofs": "2+2", "sheets": "4本", "size": "210*285", "binding": "哑膜 骑马订4本 1.5 /1/0.75/0.75", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060149", "contractNo": "26060149", "customer": "希望学", "productName": "613930/3932胶订：26年暑假百分秘籍讲义-4、6年级", "quantity": "1500*2", "qtyNum": 3000, "proofs": "2+2", "sheets": "2本", "size": "210*285", "binding": "哑膜 无线胶订 2本 5.25+5.5", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060145", "contractNo": "26060145", "customer": "希望学", "productName": "613280 胶订：26-27九月升初三数学菁英营讲义第一版", "quantity": "3000", "qtyNum": 3000, "proofs": "2+2", "sheets": "9.25", "size": "210*285", "binding": "哑膜 无线胶订 单本打包", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060150", "contractNo": "26060150", "customer": "希望学", "productName": "613919/3924/3921/3926胶装试卷：26年暑假百分试卷-复习篇/预习篇4、6年级", "quantity": "1500*4", "qtyNum": 6000, "proofs": "2+2", "sheets": "4本", "size": "210*285", "binding": "哑膜 试卷4款 4本13张+32张+12张+29张", "deadline": "2026-07-01", "remark": "外回", "status": "done", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060127", "contractNo": "26060127", "customer": "豌豆教育", "productName": "豌豆26年秋季：大中小套装", "quantity": "明细", "qtyNum": 0, "proofs": "0", "sheets": "明细", "size": "185*260", "binding": "对折页 配装", "deadline": "2026-07-20", "remark": "白卡不干胶模切", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060151", "contractNo": "26060151", "customer": "中国传媒大学出版社", "productName": "ZHYZ6661：表演基础教程（第2版）2-2", "quantity": "5000", "qtyNum": 5000, "proofs": "3+2", "sheets": "16.75", "size": "185*260", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060152", "contractNo": "26060152", "customer": "中国传媒大学出版社", "productName": "ZHYZ6659：主持人即兴口语表达艺术（第二版） 2-3", "quantity": "6000", "qtyNum": 6000, "proofs": "3+2", "sheets": "16.25", "size": "185*261", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060154", "contractNo": "26060154", "customer": "中国传媒大学出版社", "productName": "ZHYZ6673：普通话语音与科学发声训练教程（第二版）2-5", "quantity": "2500", "qtyNum": 2500, "proofs": "3+2", "sheets": "18.25", "size": "185*262", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060155", "contractNo": "26060155", "customer": "中国传媒大学出版社", "productName": "ZHYZ6670：融媒体实务 1-6", "quantity": "2500", "qtyNum": 2500, "proofs": "3+2", "sheets": "18.5", "size": "185*263", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060156", "contractNo": "26060156", "customer": "中国传媒大学出版社", "productName": "ZHYZ6674：新媒体影视创作 1-6", "quantity": "2000", "qtyNum": 2000, "proofs": "3+2", "sheets": "20", "size": "185*264", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060157", "contractNo": "26060157", "customer": "中国传媒大学出版社", "productName": "ZHYZ6667：播音主持语音发声训练教程（第三版）3-4", "quantity": "3000", "qtyNum": 3000, "proofs": "3+2", "sheets": "18", "size": "185*265", "binding": "哑膜 勒口 无线胶订", "deadline": "2026-07-08", "remark": "装前样2本", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060158", "contractNo": "26060158", "customer": "希望学", "productName": "612995 试卷：数学-初一在读综合测试卷-期末", "quantity": "4000", "qtyNum": 4000, "proofs": "2+2", "sheets": "6+7", "size": "210*285", "binding": "对折、配试卷、配套、装pp袋，条码朝外", "deadline": "2026-07-03", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060159", "contractNo": "26060159", "customer": "希望学", "productName": "612996 试卷：数学-初二在读综合测试卷-期末", "quantity": "2000", "qtyNum": 2000, "proofs": "2+2", "sheets": "7+7", "size": "210*285", "binding": "对折、配试卷、配套、装pp袋，条码朝外", "deadline": "2026-07-03", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060160", "contractNo": "26060160", "customer": "希望学", "productName": "613884 折页：100天巩固计划（2折3页、包心折）", "quantity": "10000", "qtyNum": 10000, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "对折 滚折页", "deadline": "2026-07-03", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060164", "contractNo": "26060164", "customer": "作业帮", "productName": "SW2606090001-2026新高考数学全国卷（外发）", "quantity": "140000", "qtyNum": 140000, "proofs": "10+2", "sheets": "1.5", "size": "420*285", "binding": "哑膜 裱左 分本折本", "deadline": "2026-07-02", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060165", "contractNo": "26060165", "customer": "学而思", "productName": "幼小衔接天天练 4本骑订 1-16", "quantity": "3000", "qtyNum": 3000, "proofs": "20+3+2", "sheets": "3*4本", "size": "210*285", "binding": "单面亮膜，骑马订 配套，塑封", "deadline": "2026-07-07", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": false, "status": "外"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060163", "contractNo": "26060163", "customer": "致诚", "productName": "285# 喷绘书286-1# -2#-3# 锁线书", "quantity": "2455*3", "qtyNum": 7365, "proofs": "", "sheets": "", "size": "150*228", "binding": "1#粘真手签页，2#3#粘烫金手签页+作者页", "deadline": "2026-07-02", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060023", "contractNo": "26060023", "customer": "君达艺彩", "productName": "多宝乐园互动游戏书1（3.2）", "quantity": "20000", "qtyNum": 20000, "proofs": "工单", "sheets": "明细", "size": "210*297", "binding": "打圆角锁线 其余骑订不打多余的书单独放一台入库", "deadline": "等版权页", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060017", "contractNo": "26060017", "customer": "君达艺彩", "productName": "美丽语言3（2.0） 11款骑订《 出装前样 》", "quantity": "6000", "qtyNum": 6000, "proofs": "20", "sheets": "明细", "size": "260*210", "binding": "打版发货+样书20放到大货上标注好；", "deadline": "等版权页", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060018", "contractNo": "26060018", "customer": "君达艺彩", "productName": "美丽语言5（2.0） 11款骑订《 出装前样 》", "quantity": "7000", "qtyNum": 7000, "proofs": "20", "sheets": "明细", "size": "260*210", "binding": "多余的书单独放一台入库", "deadline": "等版权页", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060181", "contractNo": "26060181", "customer": "澜知韵", "productName": "内蒙古味道", "quantity": "1000", "qtyNum": 1000, "proofs": "10", "sheets": "11.5", "size": "170*230", "binding": "封面工艺外发 锁线胶订", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26030072", "contractNo": "26030072", "customer": "9010418", "productName": "数学思维智趣通用礼盒《粘对应条码》", "quantity": "15000", "qtyNum": 15000, "proofs": "45套", "sheets": "配装", "size": "见明细", "binding": "粘条码： 一封信+新盲盒+数学公式大全+多维算法", "deadline": "2026-04-15", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26030074", "contractNo": "26030074", "customer": "9010880", "productName": "数学思维启航通用礼盒2.0版《粘对应条码》", "quantity": "10000", "qtyNum": 10000, "proofs": "30套", "sheets": "配装", "size": "见明细", "binding": "粘条码：一封信+新盲盒+新24类应用题+p2", "deadline": "2026-04-15", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26030075", "contractNo": "26030075", "customer": "9010980", "productName": "数学思维趣算通用礼盒《粘对应条码》", "quantity": "5000", "qtyNum": 5000, "proofs": "15套", "sheets": "配装", "size": "见明细", "binding": "粘条码：新盲盒+新24类应用题", "deadline": "2026-04-15", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26030073", "contractNo": "26030073", "customer": "9010879", "productName": "数学思维益智通用礼盒2.0版《粘对应条码》", "quantity": "10000", "qtyNum": 10000, "proofs": "30套", "sheets": "配装", "size": "见明细", "binding": "粘条码：一封信+魔方+新24类应用题+p1", "deadline": "2026-04-15", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060169", "contractNo": "26060169", "customer": "613942", "productName": "26年暑假周周测-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "1.25", "size": "210*285", "binding": "试卷折页、配套装pp袋，条码朝外", "deadline": "2026-07-03", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060174", "contractNo": "26060174", "customer": "613930", "productName": "26年暑假百分秘籍讲义-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "5.25", "size": "210*285", "binding": "无线胶订", "deadline": "2026-07-03", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060176", "contractNo": "26060176", "customer": "613914", "productName": "26年暑假百分复习秘籍-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "3.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-03", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060176", "contractNo": "26060176", "customer": "613936", "productName": "26年暑假百分秘籍天天练-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-03", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060176", "contractNo": "26060176", "customer": "613948", "productName": "26年暑假百分秘籍语文-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-03", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060176", "contractNo": "26060176", "customer": "613954", "productName": "26年暑假百分秘籍英语-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "0.75", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-03", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060171", "contractNo": "26060171", "customer": "613919", "productName": "26年暑假百分试卷复习篇-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "1.625", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-03", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060171", "contractNo": "26060171", "customer": "613924", "productName": "26年暑假百分试卷预习篇-4年级", "quantity": "2900", "qtyNum": 2900, "proofs": "2+2", "sheets": "4", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-03", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060168", "contractNo": "26060168", "customer": "608247", "productName": "小学通用好评卡", "quantity": "40000", "qtyNum": 40000, "proofs": "2+2", "sheets": "0.125", "size": "140*210", "binding": "裁切单张", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060169", "contractNo": "26060169", "customer": "613943", "productName": "26年暑假周周测-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "试卷折页、配套装pp袋，条码朝外", "deadline": "2026-07-04", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060174", "contractNo": "26060174", "customer": "613931", "productName": "26年暑假百分秘籍讲义-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "5.25", "size": "210*285", "binding": "无线胶订", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060177", "contractNo": "26060177", "customer": "613915", "productName": "26年暑假百分复习秘籍-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "3.25", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060177", "contractNo": "26060177", "customer": "613937", "productName": "26年暑假百分秘籍天天练-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060177", "contractNo": "26060177", "customer": "613949", "productName": "26年暑假百分秘籍语文-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060177", "contractNo": "26060177", "customer": "613955", "productName": "26年暑假百分秘籍英语-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "0.75", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-04", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060172", "contractNo": "26060172", "customer": "613920", "productName": "26年暑假百分试卷复习篇-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "1.375", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-04", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060172", "contractNo": "26060172", "customer": "613925", "productName": "26年暑假百分试卷预习篇-5年级", "quantity": "3900", "qtyNum": 3900, "proofs": "2+2", "sheets": "3.625", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-04", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060169", "contractNo": "26060169", "customer": "613941", "productName": "26年暑假周周测-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "试卷折页、配套装pp袋，条码朝外", "deadline": "2026-07-05", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060169", "contractNo": "26060169", "customer": "613944", "productName": "26年暑假周周测-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "试卷折页、配套装pp袋，条码朝外", "deadline": "2026-07-05", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": true, "status": "完"}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060174", "contractNo": "26060174", "customer": "613929", "productName": "26年暑假百分秘籍讲义-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "5.25", "size": "210*285", "binding": "无线胶订", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060174", "contractNo": "26060174", "customer": "613932", "productName": "26年暑假百分秘籍讲义-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "5.5", "size": "210*285", "binding": "无线胶订", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060178", "contractNo": "26060178", "customer": "613916", "productName": "26年暑假百分复习秘籍-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "3.25", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060178", "contractNo": "26060178", "customer": "613938", "productName": "26年暑假百分秘籍天天练-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060178", "contractNo": "26060178", "customer": "613950", "productName": "26年暑假百分秘籍语文-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "1", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060178", "contractNo": "26060178", "customer": "613956", "productName": "26年暑假百分秘籍英语-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "0.75", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060175", "contractNo": "26060175", "customer": "613913", "productName": "26年暑假百分复习秘籍-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "3.25", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060175", "contractNo": "26060175", "customer": "613935", "productName": "26年暑假百分秘籍天天练-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060175", "contractNo": "26060175", "customer": "613947", "productName": "26年暑假百分秘籍语文-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "1.5", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060175", "contractNo": "26060175", "customer": "613953", "productName": "26年暑假百分秘籍英语-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "0.75", "size": "210*285", "binding": "骑马钉", "deadline": "2026-07-05", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060170", "contractNo": "26060170", "customer": "613918", "productName": "26年暑假百分试卷复习篇-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "1.375", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-05", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060170", "contractNo": "26060170", "customer": "613923", "productName": "26年暑假百分试卷预习篇-3年级", "quantity": "1600", "qtyNum": 1600, "proofs": "2+2", "sheets": "3.25", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-05", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060173", "contractNo": "26060173", "customer": "613921", "productName": "26年暑假百分试卷复习篇-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "1.5", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-05", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060173", "contractNo": "26060173", "customer": "613926", "productName": "26年暑假百分试卷预习篇-6年级", "quantity": "1900", "qtyNum": 1900, "proofs": "2+2", "sheets": "3.625", "size": "420x285", "binding": "无线胶订，试卷", "deadline": "2026-07-05", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060134", "contractNo": "26060134", "customer": "吉林外语", "productName": "Going Places 3级点读《1.23/2.19/1.23》 贴标", "quantity": "5025", "qtyNum": 5025, "proofs": "25", "sheets": "明细", "size": "210*270", "binding": "配套塑封 贴标 装箱打带", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": false, "status": "外"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060153", "contractNo": "26060153", "customer": "吉林外语", "productName": "Places教辅包 点读1级1-21次 3本套", "quantity": "5025", "qtyNum": 5025, "proofs": "25", "sheets": "明细", "size": "210*270", "binding": "配套 塑封   装箱打带", "deadline": "2026-07-01", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": false, "status": "外"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060179", "contractNo": "26060179", "customer": "吉林外语", "productName": "小学英语语法冲刺1-30次", "quantity": "5025", "qtyNum": 5025, "proofs": "25", "sheets": "明细", "size": "210*285", "binding": "光膜 无线胶订", "deadline": "2026-07-07", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": false, "status": "外"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060180", "contractNo": "26060180", "customer": "吉林外语", "productName": "儿童英语分级阅读1级1-10", "quantity": "2025", "qtyNum": 2025, "proofs": "25", "sheets": "明细", "size": "170*230", "binding": "", "deadline": "2026-07-07", "remark": "", "status": "wip", "processes": [{"name": "封印", "done": true, "status": "完"}, {"name": "工艺", "done": false, "status": "外"}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060183", "contractNo": "26060183", "customer": "童心布马", "productName": "加印：布小心数学开窍了1-6（换纸）", "quantity": "10800套", "qtyNum": 10800, "proofs": "5", "sheets": "明细", "size": "165*230", "binding": "配装函套 塑封 装箱", "deadline": "2026-07-07", "remark": "", "status": "pending", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": false, "status": ""}, {"name": "折页", "done": false, "status": ""}, {"name": "锁线", "done": false, "status": ""}, {"name": "胶订", "done": false, "status": ""}, {"name": "骑订", "done": false, "status": ""}, {"name": "配书", "done": false, "status": ""}, {"name": "塑封", "done": false, "status": ""}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}, {"id": "26060182", "contractNo": "26060182", "customer": "作业帮", "productName": "sw260609002-2026新高考数学全国卷真题及解析-腾毅", "quantity": "1900", "qtyNum": 1900, "proofs": "30+2", "sheets": "1.5", "size": "420*285", "binding": "哑膜 试卷龙", "deadline": "2026-07-07", "remark": "外协厂回成品", "status": "wip", "processes": [{"name": "封印", "done": false, "status": ""}, {"name": "工艺", "done": false, "status": ""}, {"name": "内印", "done": true, "status": "完"}, {"name": "折页", "done": true, "status": "完"}, {"name": "锁线", "done": true, "status": "完"}, {"name": "胶订", "done": true, "status": "完"}, {"name": "骑订", "done": true, "status": "完"}, {"name": "配书", "done": true, "status": "完"}, {"name": "塑封", "done": true, "status": "完"}], "qualityPassed": null, "qualityNote": "", "equipment": "", "priority": "normal", "createdAt": "2026-06-01", "createdBy": "导入"}];
const EMBED_EMPLOYEES = [{"id": "emp1", "name": "张伟", "role": "生产主管", "dept": "生产部", "phone": "13800001001"}, {"id": "emp2", "name": "王强", "role": "印刷机长", "dept": "印刷车间", "phone": "13800001002"}, {"id": "emp3", "name": "李刚", "role": "装订组长", "dept": "装订车间", "phone": "13800001003"}, {"id": "emp4", "name": "赵明", "role": "质检员", "dept": "质检部", "phone": "13800001004"}, {"id": "emp5", "name": "陈丽", "role": "印前主管", "dept": "印前部", "phone": "13800001005"}, {"id": "emp6", "name": "刘洋", "role": "印刷助手", "dept": "印刷车间", "phone": "13800001006"}, {"id": "emp7", "name": "周涛", "role": "装订工", "dept": "装订车间", "phone": "13800001007"}, {"id": "emp8", "name": "孙磊", "role": "折页机长", "dept": "装订车间", "phone": "13800001008"}, {"id": "emp9", "name": "吴敏", "role": "仓库主管", "dept": "仓储部", "phone": "13800001009"}, {"id": "emp10", "name": "黄志", "role": "品控员", "dept": "质检部", "phone": "13800001010"}];
const EMBED_MACHINES = [{"id": "mac1", "name": "海德堡CD102-4", "type": "胶印机", "status": "running", "lastMaintain": "2026-05-15", "nextMaintain": "2026-08-15", "dept": "印刷车间"}, {"id": "mac2", "name": "小森LS-440", "type": "胶印机", "status": "running", "lastMaintain": "2026-06-01", "nextMaintain": "2026-09-01", "dept": "印刷车间"}, {"id": "mac3", "name": "马天尼骑马订联动线", "type": "骑订机", "status": "running", "lastMaintain": "2026-04-20", "nextMaintain": "2026-07-20", "dept": "装订车间"}, {"id": "mac4", "name": "精密达胶订联动线", "type": "胶订机", "status": "maintenance", "lastMaintain": "2026-06-25", "nextMaintain": "2026-09-25", "dept": "装订车间"}, {"id": "mac5", "name": "地平线折页机", "type": "折页机", "status": "running", "lastMaintain": "2026-05-10", "nextMaintain": "2026-08-10", "dept": "装订车间"}, {"id": "mac6", "name": "覆膜机YZFM-1080", "type": "覆膜机", "status": "idle", "lastMaintain": "2026-06-10", "nextMaintain": "2026-09-10", "dept": "工艺车间"}, {"id": "mac7", "name": "模切机ML-1300", "type": "模切机", "status": "running", "lastMaintain": "2026-05-20", "nextMaintain": "2026-08-20", "dept": "工艺车间"}, {"id": "mac8", "name": "塑封机SF-800", "type": "塑封机", "status": "running", "lastMaintain": "2026-06-05", "nextMaintain": "2026-09-05", "dept": "装订车间"}];
const EMBED_INVENTORY = [{"id": "inv1", "name": "157g铜版纸", "category": "纸张", "qty": 85000, "unit": "令", "minStock": 10000, "location": "A区1号"}, {"id": "inv2", "name": "80g双胶纸", "category": "纸张", "qty": 120000, "unit": "令", "minStock": 15000, "location": "A区2号"}, {"id": "inv3", "name": "200g白卡纸", "category": "纸张", "qty": 32000, "unit": "令", "minStock": 5000, "location": "A区3号"}, {"id": "inv4", "name": "128g铜版纸", "category": "纸张", "qty": 63000, "unit": "令", "minStock": 8000, "location": "A区4号"}, {"id": "inv5", "name": "黑墨(快干)", "category": "油墨", "qty": 320, "unit": "kg", "minStock": 50, "location": "B区1号"}, {"id": "inv6", "name": "品红墨", "category": "油墨", "qty": 180, "unit": "kg", "minStock": 30, "location": "B区1号"}, {"id": "inv7", "name": "热熔胶", "category": "辅材", "qty": 450, "unit": "kg", "minStock": 80, "location": "B区2号"}, {"id": "inv8", "name": "润版液", "category": "辅材", "qty": 120, "unit": "L", "minStock": 30, "location": "B区3号"}, {"id": "inv9", "name": "亮膜(BOPP)", "category": "辅材", "qty": 68, "unit": "卷", "minStock": 15, "location": "C区1号"}, {"id": "inv10", "name": "哑膜(哑光BOPP)", "category": "辅材", "qty": 42, "unit": "卷", "minStock": 10, "location": "C区2号"}, {"id": "inv11", "name": "塑封袋(大号)", "category": "辅材", "qty": 50000, "unit": "个", "minStock": 10000, "location": "C区3号"}, {"id": "inv12", "name": "装箱胶带", "category": "辅材", "qty": 280, "unit": "卷", "minStock": 50, "location": "C区4号"}];
// const ALL_PROCESSES defined in index.html
// ALL_PROCESSES already defined inline: var ALL_PROCESSES = ["封印", "工艺", "内印", "折页", "锁线", "胶订", "骑订", "配书", "塑封"];

// ============ STATE ============
const STORAGE_KEY = "rongzheng-v3";


var state = {
  orders: [],
  employees: EMBED_EMPLOYEES,
  machines: EMBED_MACHINES,
  inventory: EMBED_INVENTORY,
  attendance: {},
  workReports: [],
  scheduleItems: [],
  qualityRecords: []
};

// ============ HELPERS ============
function gid() { return "id_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8); }
function today() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function nowTime() { var d = new Date(); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0") + ":" + String(d.getSeconds()).padStart(2, "0"); }
function fmtDate(d) { if (!d) return "-"; var p = d.split("-"); return p[1] + "月" + p[2] + "日"; }

function toast(msg) {
  var container = document.getElementById("toastContainer");
  var el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(function () { el.remove(); }, 2500);
}

function saveState() {}

function loadState() { return false; }

function loadRealData() {}

// ============ CLOCK ============
function updateClock() {
  var now = new Date();
  var days = ["日", "一", "二", "三", "四", "五", "六"];
  var str = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日 周" + days[now.getDay()] + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
  var el = document.getElementById("clockDisplay");
  if (el) el.textContent = str;
}

// ============ NAVIGATION ============
var pageTitles = {
  dashboard: "工作台", orders: "工单看板", attendance: "打卡签到",
  scan: "扫码报工", schedule: "排产调度", equipment: "设备管理",
  inventory: "物料库存", stats: "生产报表"
};

function navTo(page) {
  document.getElementById("pageTitle").textContent = pageTitles[page] || page;
  document.querySelectorAll(".sidebar .nav-item").forEach(function (b) { b.classList.remove("active"); });
  var btn = document.querySelector('.sidebar .nav-item[data-page="' + page + '"]');
  if (btn) btn.classList.add("active");
  if (typeof renderers[page] === "function") { renderers[page](); }
}

// ============ MODAL ============
function showModal(title, bodyHTML) {
  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "modalOverlay";
  overlay.innerHTML = '<div class="modal-box"><div class="modal-hd"><span>' + title + '</span><button class="modal-close" onclick="closeModal()">✕</button></div><div class="modal-bd">' + bodyHTML + '</div></div>';
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  document.body.appendChild(overlay);
}

function closeModal() {
  var el = document.getElementById("modalOverlay");
  if (el) el.remove();
}

// ============ ORDERS (工单看板) ============
var orderFilter = "全部";
var orderSearch = "";
renderers.orders = function () {
  var o = state.orders;
  var filtered = o;
  if (orderFilter === "生产中") filtered = o.filter(function (x) { return x.status === "wip"; });
  else if (orderFilter === "已完成") filtered = o.filter(function (x) { return x.status === "done"; });
  else if (orderFilter === "待排产") filtered = o.filter(function (x) { return x.status === "pending"; });
  if (orderSearch) {
    var s = orderSearch.toLowerCase();
    filtered = filtered.filter(function (x) { return x.contractNo.toLowerCase().indexOf(s) >= 0 || x.customer.toLowerCase().indexOf(s) >= 0 || x.productName.toLowerCase().indexOf(s) >= 0; });
  }

  var stats = { done: o.filter(function (x) { return x.status === "done"; }).length, wip: o.filter(function (x) { return x.status === "wip"; }).length, pending: o.filter(function (x) { return x.status === "pending"; }).length };

  var h = '';
  h += '<div class="grid2" style="grid-template-columns:repeat(4,1fr)">';
  h += '<div class="stat-card"><div class="sicon green">✅</div><div class="sinfo"><div class="sval">' + stats.done + '</div><div class="slbl">已完成</div></div></div>';
  h += '<div class="stat-card"><div class="sicon orange">⚙️</div><div class="sinfo"><div class="sval">' + stats.wip + '</div><div class="slbl">生产中</div></div></div>';
  h += '<div class="stat-card"><div class="sicon blue">⏳</div><div class="sinfo"><div class="sval">' + stats.pending + '</div><div class="slbl">待排产</div></div></div>';
  h += '<div class="stat-card"><div class="sicon purple">📊</div><div class="sinfo"><div class="sval">' + o.length + '</div><div class="slbl">总计</div></div></div>';
  h += '</div>';

  h += '<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center">';
  ["全部", "生产中", "已完成", "待排产"].forEach(function (f) {
    h += '<button class="btn btn-sm ' + (orderFilter === f ? "btn-pri" : "btn-out") + '" onclick="orderFilter=\'' + f + '\';renderers.orders()">' + f + '</button>';
  });
  h += '<input placeholder="🔍 搜索合同号/客户/产品..." value="' + orderSearch + '" oninput="orderSearch=this.value;renderers.orders()" style="width:240px;margin-left:auto">';
  h += '</div>';

  h += '<div class="panel"><div style="overflow-x:auto"><table><thead><tr><th>合同号</th><th>客户</th><th>产品名</th><th>数量</th><th>工序进度</th><th>交货日</th><th>状态</th></tr></thead><tbody>';
  filtered.forEach(function (x) {
    var dc = x.processes.filter(function (p) { return p.done; }).length;
    var pct = Math.round(dc / x.processes.length * 100);
    var st = x.status === "done" ? "已完成" : x.status === "wip" ? "生产中" : "待排产";
    var sc = x.status === "done" ? "tag-suc" : x.status === "wip" ? "tag-warn" : "tag-default";
    h += '<tr onclick="showOrderDetail(\'' + x.contractNo + '\')" style="cursor:pointer">';
    h += '<td style="font-weight:500;white-space:nowrap">' + x.contractNo + '</td>';
    h += '<td>' + x.customer + '</td>';
    h += '<td style="max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + x.productName + '</td>';
    h += '<td style="white-space:nowrap">' + x.quantity + '</td>';
    h += '<td><div class="process-flow">';
    x.processes.forEach(function (p) {
      var cls = p.done ? " done" : (p.status === "外" ? " outer" : "");
      h += '<span class="process-step' + cls + '"><span class="ps-dot"></span>' + p.name + '</span>';
    });
    h += '</div></td>';
    h += '<td style="white-space:nowrap;font-size:12px">' + (x.deadline || "-") + '</td>';
    h += '<td><span class="tag ' + sc + '">' + st + '</span></td>';
    h += '</tr>';
  });
  h += '</tbody></table></div></div>';
  h += '<div style="text-align:center;font-size:12px;color:var(--txt2);padding:8px">共 ' + filtered.length + ' 单（总计 ' + o.length + ' 单）</div>';
  C.innerHTML = h;
};

// ============ ORDER DETAIL MODAL ============
function showOrderDetail(contractNo) {
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  if (!o) { toast("工单未找到"); return; }
  var dc = o.processes.filter(function (p) { return p.done; }).length;
  var tp = o.processes.length;
  var pct = tp > 0 ? Math.round(dc / tp * 100) : 0;
  var stLabel = o.status === "done" ? "已完成" : o.status === "wip" ? "生产中" : "待排产";
  var stClass = o.status === "done" ? "tag-suc" : o.status === "wip" ? "tag-warn" : "tag-default";

  var b = '';
  b += '<div class="form-row3">';
  b += '<div><label style="font-size:11px;color:var(--txt2)">合同号</label><div style="font-weight:600">' + o.contractNo + '</div></div>';
  b += '<div><label style="font-size:11px;color:var(--txt2)">状态</label><div><span class="tag ' + stClass + '">' + stLabel + '</span></div></div>';
  b += '<div><label style="font-size:11px;color:var(--txt2)">进度</label><div style="font-weight:600">' + dc + '/' + tp + ' (' + pct + '%)</div></div>';
  b += '</div>';
  b += '<div class="form-row">';
  b += '<div class="form-group"><label>客户</label><div>' + o.customer + '</div></div>';
  b += '<div class="form-group"><label>数量</label><div>' + o.quantity + '</div></div>';
  b += '</div>';
  b += '<div class="form-group"><label>产品名</label><div style="font-size:13px">' + o.productName + '</div></div>';
  b += '<div class="form-row">';
  b += '<div class="form-group"><label>尺寸</label><div>' + (o.size || "-") + '</div></div>';
  b += '<div class="form-group"><label>样书</label><div>' + (o.proofs || "-") + '</div></div>';
  b += '<div class="form-group"><label>贴数</label><div>' + (o.sheets || "-") + '</div></div>';
  b += '<div class="form-group"><label>交货日</label><div>' + fmtDate(o.deadline) + '</div></div>';
  b += '</div>';
  b += '<div class="form-group"><label>装订工艺</label><div>' + (o.binding || "-") + '</div></div>';
  if (o.remark) b += '<div class="form-group"><label>备注</label><div>' + o.remark + '</div></div>';
  b += '<div class="divider"></div>';
  b += '<div style="font-size:14px;font-weight:600;margin-bottom:8px">工序流转 <span style="font-size:11px;color:var(--txt2);font-weight:400">（点击切换完成状态）</span></div>';
  b += '<div class="process-flow" style="gap:6px">';
  o.processes.forEach(function (p) {
    b += '<span class="process-step' + (p.done ? " done" : "") + '" onclick="toggleProcess(\'' + o.contractNo + '\',\'' + p.name + '\')" style="cursor:pointer;padding:5px 10px;font-size:12px">';
    b += '<span class="ps-dot"></span>' + p.name + (p.status && !p.done ? " (" + p.status + ")" : "");
    b += '</span>';
  });
  b += '</div>';
  b += '<div class="progress-bar" style="margin-top:12px"><div class="progress-fill" style="width:' + pct + '%' + (pct === 100 ? ";background:var(--suc)" : "") + '"></div></div>';
  b += '<div style="text-align:center;font-size:11px;color:var(--txt2);margin-top:4px">' + pct + '% 完成</div>';
  b += '<div class="divider"></div>';
  b += '<div style="font-size:14px;font-weight:600;margin-bottom:8px">质检</div>';
  b += '<div class="form-group"><label>质检备注</label><textarea id="qcNote" style="min-height:40px">' + (o.qualityNote || "") + '</textarea></div>';
  b += '<div style="display:flex;gap:8px">';
  b += '<button class="btn btn-suc" onclick="setQC(\'' + o.contractNo + '\',true)" style="flex:1">✅ 合格</button>';
  b += '<button class="btn btn-danger" onclick="setQC(\'' + o.contractNo + '\',false)" style="flex:1">❌ 不合格</button>';
  b += '</div>';
  b += '<div style="margin-top:12px;text-align:right">';
  b += '<button class="btn btn-pri" onclick="saveQcAndClose(\'' + o.contractNo + '\')">💾 保存并关闭</button>';
  b += '</div>';
  showModal("📋 工单详情 - " + o.contractNo, b);
}

function toggleProcess(contractNo, processName) {
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  if (!o) return;
  var p = o.processes.find(function (x) { return x.name === processName; });
  if (!p) return;
  p.done = !p.done;
  p.status = p.done ? "完" : "";
  if (o.processes.every(function (x) { return x.done; })) o.status = "done";
  else if (o.processes.some(function (x) { return x.done; })) o.status = "wip";
  else o.status = "pending";
  // Record work report
  state.workReports.push({ id: gid(), contractNo: contractNo, process: processName, done: p.done, time: today() + " " + nowTime(), operator: "管理员" });
  saveState();
  showOrderDetail(contractNo);
  toast((p.done ? "✅ " : "↩️ ") + processName + (p.done ? " 完成" : " 撤销"));
}

function setQC(contractNo, passed) {
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  if (!o) return;
  o.qualityPassed = passed;
  var note = document.getElementById("qcNote");
  if (note) o.qualityNote = note.value;
  state.qualityRecords.push({ id: gid(), contractNo: contractNo, productName: o.productName, passed: passed, note: o.qualityNote, checker: "管理员", time: today() + " " + nowTime() });
  saveState();
  showOrderDetail(contractNo);
  toast(passed ? "✅ 质检合格已记录" : "❌ 质检不合格已记录");
}

function saveQcAndClose(contractNo) {
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  if (!o) return;
  var note = document.getElementById("qcNote");
  if (note) o.qualityNote = note.value;
  saveState(); closeModal();
  var btn = document.querySelector(".sidebar .nav-item.active");
  if (btn && renderers[btn.dataset.page]) renderers[btn.dataset.page]();
  toast("💾 已保存");
}

// ============ ATTENDANCE (打卡签到) ============
renderers.attendance = function () {
  var td = today();
  var att = state.attendance[td] || {};
  var dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][new Date(td).getDay()];

  var h = '';
  h += '<div class="welcome-card"><h2>🕐 员工打卡签到</h2><p>' + fmtDate(td) + ' 周' + dayOfWeek + ' · 共 ' + state.employees.length + ' 名员工</p></div>';

  // 打卡区
  h += '<div class="panel"><div class="panel-hd">📌 今日打卡</div><div class="panel-bd">';
  h += '<div class="form-row" style="margin-bottom:12px">';
  h += '<div class="form-group"><label>选择员工</label><div style="display:flex;gap:6px"><select id="attEmp" onchange="updateAttStatusUi()" style="flex:1"><option value="">-- 选择员工 --</option>';
  state.employees.forEach(function (e) {
    h += '<option value="' + e.id + '">' + e.name + ' - ' + e.dept + '</option>';
  });
  h += '</select><button class="btn btn-out" style="white-space:nowrap" onclick="showAddEmployee()">＋ 添加员工</button></div></div>';
  h += '<div class="form-group"><label>当前状态</label><div id="attStatus" style="padding:12px;border-radius:var(--r-sm);background:var(--bg);text-align:center;font-weight:500;font-size:14px">--</div></div>';
  h += '</div>';
  h += '<div style="display:flex;gap:8px">';
  h += '<button class="btn btn-suc" style="flex:1;font-size:15px;padding:12px" onclick="doCheckIn()">✅ 签到</button>';
  h += '<button class="btn btn-pri" style="flex:1;font-size:15px;padding:12px" onclick="doCheckOut()">🏁 签退</button>';
  h += '</div></div></div>';

  // 今日记录
  h += '<div class="panel"><div class="panel-hd">📋 今日打卡记录</div><div class="panel-bd"><div style="overflow-x:auto"><table><thead><tr><th>员工</th><th>部门</th><th>角色</th><th>签到时间</th><th>签退时间</th><th>状态</th></tr></thead><tbody>';
  var hasRecords = false;
  state.employees.forEach(function (e) {
    var rec = att[e.id];
    if (rec && rec.checkIn) {
      hasRecords = true;
      h += '<tr><td style="font-weight:500">' + e.name + '</td><td>' + e.dept + '</td><td>' + e.role + '</td>';
      h += '<td style="color:var(--suc)">' + rec.checkIn + '</td>';
      h += '<td>' + (rec.checkOut || '<span style="color:var(--txt3)">未签退</span>') + '</td>';
      h += '<td><span class="tag tag-suc">已签到</span></td></tr>';
    }
  });
  if (!hasRecords) {
    h += '<tr><td colspan="6"><div class="empty-state"><div class="emp-icon">🕐</div><div class="emp-txt">今日暂无打卡记录</div></div></td></tr>';
  }
  h += '</tbody></table></div></div></div>';

  // 本周汇总
  h += renderWeekAttendance();

  C.innerHTML = h;
};

function renderWeekAttendance() {
  var weekDays = [];
  var d = new Date();
  var day = d.getDay();
  var diff = d.getDate() - day + (day === 0 ? -6 : 1);
  var mon = new Date(d.setDate(diff));
  for (var i = 0; i < 7; i++) { var dd = new Date(mon); dd.setDate(mon.getDate() + i); weekDays.push(dd.getFullYear() + "-" + String(dd.getMonth() + 1).padStart(2, "0") + "-" + String(dd.getDate()).padStart(2, "0")); }

  var h = '<div class="panel"><div class="panel-hd">📅 本周出勤汇总</div><div class="panel-bd">';
  var weekCounts = weekDays.map(function (wd) { var a = state.attendance[wd] || {}; return Object.keys(a).filter(function (k) { return a[k].checkIn; }).length; });
  window._statsWeekData = { days: weekDays, counts: weekCounts };
  h += '<div class="chart-canvas-wrap"><canvas id="statsWeekChart"></canvas></div></div></div>';
  return h;
}

function updateAttStatusUi() {
  var sel = document.getElementById("attEmp");
  var stEl = document.getElementById("attStatus");
  if (!sel || !stEl) return;
  var empId = sel.value;
  if (!empId) { stEl.textContent = "-- 请选择员工 --"; stEl.style.background = "var(--bg)"; stEl.style.color = "var(--txt2)"; return; }
  var td = today();
  var att = state.attendance[td] || {};
  var rec = att[empId];
  if (rec && rec.checkIn) {
    stEl.innerHTML = '✅ 已签到 · ' + rec.checkIn + (rec.checkOut ? '<br>🏁 已签退 · ' + rec.checkOut : '<br>⏳ 未签退');
    stEl.style.background = "var(--suc-bg)";
    stEl.style.color = "var(--suc)";
  } else {
    stEl.textContent = "⏳ 未签到";
    stEl.style.background = "var(--warn-bg)";
    stEl.style.color = "var(--warn)";
  }
}

function doCheckIn() {
  var sel = document.getElementById("attEmp");
  if (!sel || !sel.value) { toast("请先选择员工"); return; }
  var empId = sel.value;
  var td = today();
  if (!state.attendance[td]) state.attendance[td] = {};
  if (state.attendance[td][empId] && state.attendance[td][empId].checkIn) { toast("该员工今日已签到"); return; }
  state.attendance[td][empId] = { checkIn: nowTime(), checkOut: null };
  saveState();
  updateAttStatusUi();
  renderers.attendance();
  toast("✅ 签到成功");
}

function doCheckOut() {
  var sel = document.getElementById("attEmp");
  if (!sel || !sel.value) { toast("请先选择员工"); return; }
  var empId = sel.value;
  var td = today();
  if (!state.attendance[td]) state.attendance[td] = {};
  if (!state.attendance[td][empId] || !state.attendance[td][empId].checkIn) { toast("请先签到"); return; }
  state.attendance[td][empId].checkOut = nowTime();
  saveState();
  updateAttStatusUi();
  renderers.attendance();
  toast("🏁 签退成功");
}

// ============ 员工管理 ============
function showAddEmployee() {
  var h = '<div class="form-row">';
  h += '<div class="form-group"><label>姓名 *</label><input id="empName" placeholder="员工姓名"></div>';
  h += '<div class="form-group"><label>工号</label><input id="empId" placeholder="工号（留空自动生成）"></div>';
  h += '</div>';
  h += '<div class="form-row">';
  h += '<div class="form-group"><label>部门</label><select id="empDept"><option value="印刷车间">印刷车间</option><option value="装订车间">装订车间</option><option value="工艺车间">工艺车间</option><option value="印前部">印前部</option><option value="质检部">质检部</option><option value="仓储部">仓储部</option><option value="生产部">生产部</option><option value="外协">外协</option></select></div>';
  h += '<div class="form-group"><label>岗位</label><input id="empRole" placeholder="如：印刷机长、装订工..."></div>';
  h += '</div>';
  h += '<div class="form-row">';
  h += '<div class="form-group"><label>手机号</label><input id="empPhone" placeholder="手机号（选填）"></div>';
  h += '</div>';
  h += '<div style="margin-top:12px"><button class="btn btn-pri" style="width:100%" onclick="saveEmployee()">💾 保存员工</button></div>';
  
  // 员工列表
  h += '<div style="margin-top:20px;border-top:1px solid var(--brd);padding-top:16px"><div style="font-weight:600;font-size:14px;margin-bottom:10px">👥 现有员工（' + state.employees.length + '人）</div>';
  h += '<div style="max-height:300px;overflow-y:auto">';
  state.employees.forEach(function(e) {
    h += '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--brd);font-size:13px">';
    h += '<span><strong>' + e.name + '</strong> <span style="color:var(--txt2)">' + (e.role || '') + '</span> <span style="color:var(--txt3);font-size:11px">[' + e.dept + ']</span></span>';
    h += '<button class="btn btn-sm btn-out" style="color:var(--danger);border-color:var(--danger)" onclick="deleteEmployee(\'' + e.id + '\')">删除</button>';
    h += '</div>';
  });
  h += '</div></div>';
  
  showModal('👤 员工管理', h);
  setTimeout(function() { var inp = document.getElementById('empName'); if (inp) inp.focus(); }, 200);
}

function saveEmployee() {
  var name = document.getElementById('empName').value.trim();
  var empId = document.getElementById('empId').value.trim();
  var dept = document.getElementById('empDept').value;
  var role = document.getElementById('empRole').value.trim();
  var phone = document.getElementById('empPhone').value.trim();
  
  if (!name) { toast('请输入员工姓名'); return; }
  if (!empId) empId = 'emp' + Date.now();
  
  var emp = { id: empId, name: name, role: role, dept: dept, phone: phone };
  
  api('/api/employees', {
    method: 'POST',
    body: { emp_id: empId, name: name, role: role, dept: dept, phone: phone }
  }).then(function() {
    state.employees.push(emp);
    saveState();
    closeModal();
    renderers.attendance();
    toast('✅ 员工 ' + name + ' 已添加');
  }).catch(function(e) {
    toast('❌ 添加失败: ' + e.message);
  });
}

function deleteEmployee(empId) {
  if (!confirm('确定要删除该员工吗？历史打卡记录将保留。')) return;
  api('/api/employees/' + empId, { method: 'DELETE' }).then(function() {
    state.employees = state.employees.filter(function(e) { return e.id !== empId; });
    saveState();
    closeModal();
    renderers.attendance();
    toast('🗑️ 员工已删除');
  }).catch(function(e) {
    toast('❌ 删除失败: ' + e.message);
  });
}

// ============ SCAN (扫码报工) ============
renderers.scan = function () {
  var h = '';
  h += '<div class="welcome-card"><h2>📱 扫码报工</h2><p>扫描工单条码或手动输入合同号，快速完成工序报工</p></div>';

  // 报工区
  h += '<div class="panel"><div class="panel-hd">🔍 扫码/输入报工</div><div class="panel-bd">';
  h += '<div class="form-row">';
  h += '<div class="form-group"><label>合同号 / 扫描条码</label><input id="scanInput" placeholder="输入合同号或扫描条码..." autofocus onkeydown="if(event.key===\'Enter\')scanLookup()"></div>';
  h += '<div class="form-group"><label>工序</label><select id="scanProcess"><option value="">-- 选择工序 --</option>';
  ALL_PROCESSES.forEach(function (p) { h += '<option value="' + p + '">' + p + '</option>'; });
  h += '</select></div>';
  h += '</div>';
  h += '<div style="display:flex;gap:8px">';
  h += '<button class="btn btn-pri" style="flex:1" onclick="scanLookup()">🔍 查找工单</button>';
  h += '<button class="btn btn-suc" style="flex:1" onclick="scanMarkDone()">✅ 标记完成</button>';
  h += '</div>';
  h += '<div id="scanResult" style="margin-top:12px"></div>';
  h += '</div></div>';

  // 最近报工记录
  h += '<div class="panel"><div class="panel-hd">📜 最近报工记录</div><div class="panel-bd"><div style="overflow-x:auto"><table><thead><tr><th>时间</th><th>合同号</th><th>工序</th><th>操作</th></tr></thead><tbody>';
  var reports = (state.workReports || []).slice(-20).reverse();
  if (reports.length === 0) {
    h += '<tr><td colspan="4"><div class="empty-state"><div class="emp-icon">📱</div><div class="emp-txt">暂无报工记录</div></div></td></tr>';
  } else {
    reports.forEach(function (r) {
      h += '<tr><td style="font-size:12px">' + (r.time || "-") + '</td><td><a href="javascript:showOrderDetail(\'' + r.contractNo + '\')" style="color:var(--pri)">' + r.contractNo + '</a></td><td>' + r.process + '</td><td>' + (r.done ? '<span class="tag tag-suc">完成</span>' : '<span class="tag tag-warn">撤销</span>') + '</td></tr>';
    });
  }
  h += '</tbody></table></div></div></div>';

  C.innerHTML = h;
  setTimeout(function () { var inp = document.getElementById("scanInput"); if (inp) inp.focus(); }, 100);
};

function scanLookup() {
  var contractNo = document.getElementById("scanInput").value.trim();
  if (!contractNo) { toast("请输入合同号"); return; }
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  var resultDiv = document.getElementById("scanResult");
  if (!o) {
    resultDiv.innerHTML = '<div class="alert alert-danger">❌ 未找到工单：' + contractNo + '</div>';
    return;
  }
  var dc = o.processes.filter(function (p) { return p.done; }).length;
  var h = '<div style="background:var(--suc-bg);padding:12px;border-radius:var(--r-sm)">';
  h += '<div style="font-weight:600">✅ 找到工单：' + o.contractNo + ' - ' + o.customer + '</div>';
  h += '<div style="font-size:13px;margin-top:4px">' + o.productName + '</div>';
  h += '<div style="margin-top:8px"><div class="process-flow">';
  o.processes.forEach(function (p) {
    h += '<span class="process-step' + (p.done ? " done" : "") + '"><span class="ps-dot"></span>' + p.name + '</span>';
  });
  h += '</div></div>';
  h += '<div style="margin-top:4px;font-size:12px;color:var(--txt2)">进度：' + dc + '/' + o.processes.length + '</div>';
  h += '</div>';
  resultDiv.innerHTML = h;

  // Auto-select the first undone process
  var undone = o.processes.find(function (p) { return !p.done; });
  if (undone) document.getElementById("scanProcess").value = undone.name;
}

function scanMarkDone() {
  var contractNo = document.getElementById("scanInput").value.trim();
  var procName = document.getElementById("scanProcess").value;
  if (!contractNo || !procName) { toast("请输入合同号并选择工序"); return; }
  var o = state.orders.find(function (x) { return x.contractNo === contractNo; });
  if (!o) { toast("工单未找到"); return; }
  var p = o.processes.find(function (x) { return x.name === procName; });
  if (!p) { toast("工序不存在"); return; }
  if (p.done) { toast("该工序已完成，无需重复报工"); return; }
  p.done = true;
  p.status = "完";
  if (o.processes.every(function (x) { return x.done; })) o.status = "done";
  else o.status = "wip";
  state.workReports.push({ id: gid(), contractNo: contractNo, process: procName, done: true, time: today() + " " + nowTime(), operator: "扫码报工" });
  saveState();
  document.getElementById("scanInput").value = "";
  renderers.scan();
  toast("✅ " + contractNo + " " + procName + " 报工完成");
}

// ============ SCHEDULE (排产调度) ============
renderers.schedule = function () {
  var h = '';
  h += '<div class="welcome-card"><h2>📅 排产调度</h2><p>按设备和日期安排生产计划，确保产能合理分配</p></div>';

  // 添加排产
  h += '<div class="panel"><div class="panel-hd">➕ 新增排产计划</div><div class="panel-bd">';
  h += '<div class="form-row3">';
  h += '<div class="form-group"><label>合同号</label><select id="schedOrder"><option value="">-- 选择工单 --</option>';
  state.orders.filter(function (o) { return o.status !== "done"; }).forEach(function (o) {
    h += '<option value="' + o.contractNo + '">' + o.contractNo + ' ' + o.customer + '</option>';
  });
  h += '</select></div>';
  h += '<div class="form-group"><label>设备</label><select id="schedMachine">';
  state.machines.forEach(function (m) { h += '<option value="' + m.id + '">' + m.name + '</option>'; });
  h += '</select></div>';
  h += '<div class="form-group"><label>日期</label><input type="date" id="schedDate" value="' + today() + '"></div>';
  h += '</div>';
  h += '<button class="btn btn-pri" style="width:100%" onclick="addSchedule()">✅ 添加排产</button>';
  h += '</div></div>';

  // 排产列表 - 按日期分组
  var schedByDate = {};
  (state.scheduleItems || []).forEach(function (s) {
    if (!schedByDate[s.date]) schedByDate[s.date] = [];
    schedByDate[s.date].push(s);
  });

  h += '<div class="panel"><div class="panel-hd">📋 排产列表</div><div class="panel-bd">';
  var dates = Object.keys(schedByDate).sort().reverse();
  if (dates.length === 0) {
    h += '<div class="empty-state"><div class="emp-icon">📅</div><div class="emp-txt">暂无排产计划，请添加</div></div>';
  } else {
    dates.forEach(function (dt) {
      h += '<div style="font-weight:600;font-size:14px;margin:12px 0 8px">📌 ' + fmtDate(dt) + '</div>';
      h += '<div style="overflow-x:auto"><table><thead><tr><th>合同号</th><th>客户</th><th>产品</th><th>设备</th><th>日期</th><th>操作</th></tr></thead><tbody>';
      schedByDate[dt].forEach(function (s) {
        var o = state.orders.find(function (x) { return x.contractNo === s.contractNo; });
        var m = state.machines.find(function (x) { return x.id === s.machineId; });
        h += '<tr><td style="font-weight:500">' + s.contractNo + '</td>';
        h += '<td>' + (o ? o.customer : "-") + '</td>';
        h += '<td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (o ? o.productName : "-") + '</td>';
        h += '<td>' + (m ? m.name : "-") + '</td>';
        h += '<td>' + s.date + '</td>';
        h += '<td><button class="btn btn-sm btn-out" onclick="removeSchedule(\'' + s.id + '\')">删除</button></td></tr>';
      });
      h += '</tbody></table></div>';
    });
  }
  h += '</div></div>';

  C.innerHTML = h;
};

function addSchedule() {
  var contractNo = document.getElementById("schedOrder").value;
  var machineId = document.getElementById("schedMachine").value;
  var date = document.getElementById("schedDate").value;
  if (!contractNo) { toast("请选择工单"); return; }
  if (!date) { toast("请选择日期"); return; }
  if (!state.scheduleItems) state.scheduleItems = [];
  state.scheduleItems.push({ id: gid(), contractNo: contractNo, machineId: machineId, date: date, createdAt: today() });
  saveState();
  renderers.schedule();
  toast("✅ 排产已添加");
}

function removeSchedule(id) {
  if (!state.scheduleItems) return;
  state.scheduleItems = state.scheduleItems.filter(function (s) { return s.id !== id; });
  saveState();
  renderers.schedule();
  toast("已删除排产");
}

// ============ EQUIPMENT (设备管理) ============
renderers.equipment = function () {
  var running = state.machines.filter(function (m) { return m.status === "running"; }).length;
  var idle = state.machines.filter(function (m) { return m.status === "idle"; }).length;
  var maint = state.machines.filter(function (m) { return m.status === "maintenance"; }).length;

  var h = '';
  h += '<div class="welcome-card"><h2>⚙️ 设备管理</h2><p>监控设备运行状态、保养提醒和故障报修</p></div>';
  h += '<div class="grid2">';
  h += '<div class="stat-card"><div class="sicon green">🏃</div><div class="sinfo"><div class="sval">' + running + '</div><div class="slbl">运行中</div></div></div>';
  h += '<div class="stat-card"><div class="sicon orange">⏸️</div><div class="sinfo"><div class="sval">' + idle + '</div><div class="slbl">待机</div></div></div>';
  h += '<div class="stat-card"><div class="sicon red">🔧</div><div class="sinfo"><div class="sval">' + maint + '</div><div class="slbl">保养/维修</div></div></div>';
  h += '</div>';

  h += '<div class="panel"><div class="panel-hd">⚙️ 设备清单</div><div class="panel-bd"><div style="overflow-x:auto"><table><thead><tr><th>设备名</th><th>类型</th><th>车间</th><th>状态</th><th>上次保养</th><th>下次保养</th><th>操作</th></tr></thead><tbody>';
  state.machines.forEach(function (m) {
    var sc = m.status === "running" ? "tag-suc" : m.status === "idle" ? "tag-warn" : "tag-danger";
    var sl = m.status === "running" ? "运行中" : m.status === "idle" ? "待机" : "保养中";
    h += '<tr><td style="font-weight:500">' + m.name + '</td><td>' + m.type + '</td><td>' + m.dept + '</td>';
    h += '<td><span class="tag ' + sc + '">' + sl + '</span></td>';
    h += '<td>' + (m.lastMaintain || "-") + '</td><td>' + (m.nextMaintain || "-") + '</td>';
    h += '<td><button class="btn btn-sm btn-out" onclick="toggleMachine(\'' + m.id + '\')">切换状态</button></td></tr>';
  });
  h += '</tbody></table></div></div></div>';

  // 保养提醒
  var todayStr = today();
  var overdue = state.machines.filter(function (m) { return m.nextMaintain && m.nextMaintain < todayStr; });
  if (overdue.length > 0) {
    h += '<div class="panel"><div class="panel-hd">⚠️ 保养到期提醒</div><div class="panel-bd">';
    overdue.forEach(function (m) {
      h += '<div class="alert alert-danger">🔧 ' + m.name + ' - 保养到期：' + m.nextMaintain + '，请尽快安排保养</div>';
    });
    h += '</div></div>';
  }

  C.innerHTML = h;
};

function toggleMachine(id) {
  var m = state.machines.find(function (x) { return x.id === id; });
  if (!m) return;
  var order = ["running", "idle", "maintenance"];
  var idx = order.indexOf(m.status);
  m.status = order[(idx + 1) % 3];
  saveState();
  renderers.equipment();
  toast("⚙️ " + m.name + " 状态已更新");
}

// ============ INVENTORY (物料库存) ============
var invFilter = "全部";
renderers.inventory = function () {
  var lowStock = state.inventory.filter(function (i) { return i.qty <= i.minStock; });
  var h = '';
  h += '<div class="welcome-card"><h2>📦 物料库存</h2><p>管理纸张、油墨、辅材库存，低库存自动预警</p></div>';
  h += '<div class="grid2">';
  h += '<div class="stat-card"><div class="sicon blue">📦</div><div class="sinfo"><div class="sval">' + state.inventory.length + '</div><div class="slbl">物料种类</div></div></div>';
  h += '<div class="stat-card"><div class="sicon red">⚠️</div><div class="sinfo"><div class="sval">' + lowStock.length + '</div><div class="slbl">低库存预警</div></div></div>';
  h += '</div>';

  if (lowStock.length > 0) {
    h += '<div class="alert alert-danger">⚠️ 低库存预警：';
    lowStock.forEach(function (i) { h += '<strong>' + i.name + '</strong>(' + i.qty + i.unit + ') '; });
    h += '</div>';
  }

  // 筛选
  h += '<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">';
  ["全部", "纸张", "油墨", "辅材"].forEach(function (cat) {
    h += '<button class="btn btn-sm ' + (invFilter === cat ? "btn-pri" : "btn-out") + '" onclick="invFilter=\'' + cat + '\';renderers.inventory()">' + cat + '</button>';
  });
  h += '</div>';

  h += '<div class="panel"><div style="overflow-x:auto"><table><thead><tr><th>物料名</th><th>类别</th><th>数量</th><th>最低库存</th><th>库位</th><th>状态</th></tr></thead><tbody>';
  var items = invFilter === "全部" ? state.inventory : state.inventory.filter(function (i) { return i.category === invFilter; });
  items.forEach(function (i) {
    var low = i.qty <= i.minStock;
    h += '<tr style="cursor:pointer" onclick="updateInventory(\'' + i.id + '\')">';
    h += '<td style="font-weight:500">' + i.name + '</td><td>' + i.category + '</td>';
    h += '<td style="font-weight:600;color:' + (low ? 'var(--danger)' : 'var(--txt)') + '">' + i.qty + ' ' + i.unit + '</td>';
    h += '<td>' + i.minStock + ' ' + i.unit + '</td><td>' + i.location + '</td>';
    h += '<td><span class="tag ' + (low ? "tag-danger" : "tag-suc") + '">' + (low ? "⚠️ 低库存" : "✅ 正常") + '</span></td>';
    h += '</tr>';
  });
  h += '</tbody></table></div></div>';

  // 添加物料
  h += '<div class="panel"><div class="panel-hd">➕ 添加/更新物料</div><div class="panel-bd">';
  h += '<div class="form-row">';
  h += '<div class="form-group"><label>物料名</label><input id="invName" placeholder="物料名称"></div>';
  h += '<div class="form-group"><label>类别</label><select id="invCat"><option>纸张</option><option>油墨</option><option>辅材</option></select></div>';
  h += '</div>';
  h += '<div class="form-row3">';
  h += '<div class="form-group"><label>数量</label><input type="number" id="invQty" placeholder="0"></div>';
  h += '<div class="form-group"><label>单位</label><input id="invUnit" placeholder="令/kg/卷/个"></div>';
  h += '<div class="form-group"><label>最低库存</label><input type="number" id="invMin" placeholder="0"></div>';
  h += '</div>';
  h += '<div class="form-group"><label>库位</label><input id="invLoc" placeholder="如：A区1号"></div>';
  h += '<button class="btn btn-pri" onclick="addInventory()" style="width:100%">✅ 添加物料</button>';
  h += '</div></div>';

  C.innerHTML = h;
};

function addInventory() {
  var name = document.getElementById("invName").value.trim();
  var cat = document.getElementById("invCat").value;
  var qty = parseInt(document.getElementById("invQty").value) || 0;
  var unit = document.getElementById("invUnit").value.trim();
  var min = parseInt(document.getElementById("invMin").value) || 0;
  var loc = document.getElementById("invLoc").value.trim();
  if (!name) { toast("请填写物料名"); return; }
  state.inventory.push({ id: gid(), name: name, category: cat, qty: qty, unit: unit, minStock: min, location: loc });
  saveState();
  renderers.inventory();
  toast("📦 " + name + " 已添加");
}

function updateInventory(id) {
  var i = state.inventory.find(function (x) { return x.id === id; });
  if (!i) return;
  var newQty = prompt(i.name + " 当前库存：" + i.qty + " " + i.unit + "，输入新库存量：", i.qty);
  if (newQty !== null) { i.qty = parseInt(newQty) || 0; saveState(); renderers.inventory(); toast("📦 库存已更新"); }
}

// ============ STATS (生产报表) ============
renderers.stats = function () {
  var o = state.orders;
  var done = o.filter(function (x) { return x.status === "done"; });
  var wip = o.filter(function (x) { return x.status === "wip"; });
  var pending = o.filter(function (x) { return x.status === "pending"; });
  var totalGood = o.filter(function (x) { return x.qualityPassed === true; }).length;
  var totalQc = o.filter(function (x) { return x.qualityPassed === true || x.qualityPassed === false; }).length;
  var qcRate = totalQc > 0 ? Math.round(totalGood / totalQc * 100) : "-";
  var completionRate = o.length > 0 ? Math.round(done.length / o.length * 100) : 0;

  var h = '';
  h += '<div class="welcome-card"><h2>📊 生产报表</h2><p>产量统计、良品率、工序完成情况等关键指标</p></div>';

  // 核心指标
  h += '<div class="grid2">';
  h += '<div class="stat-card"><div class="sicon green">✅</div><div class="sinfo"><div class="sval">' + done.length + '</div><div class="slbl">已完成工单</div></div></div>';
  h += '<div class="stat-card"><div class="sicon orange">⚙️</div><div class="sinfo"><div class="sval">' + wip.length + '</div><div class="slbl">生产中</div></div></div>';
  h += '<div class="stat-card"><div class="sicon blue">⏳</div><div class="sinfo"><div class="sval">' + pending.length + '</div><div class="slbl">待排产</div></div></div>';
  h += '<div class="stat-card"><div class="sicon purple">📊</div><div class="sinfo"><div class="sval">' + o.length + '</div><div class="slbl">总工单</div></div></div>';
  h += '</div>';

  // 完成率 + 良品率
  h += '<div class="grid4">';
  h += '<div class="panel"><div class="panel-hd">📈 订单完成率</div><div class="panel-bd"><div style="text-align:center;padding:20px 0">';
  h += '<div style="font-size:48px;font-weight:700;color:var(--pri)">' + completionRate + '%</div>';
  h += '<div style="font-size:13px;color:var(--txt2)">' + done.length + ' / ' + o.length + ' 已完成</div>';
  h += '<div class="progress-bar" style="margin-top:12px"><div class="progress-fill" style="width:' + completionRate + '%"></div></div>';
  h += '</div></div></div>';

  h += '<div class="panel"><div class="panel-hd">🔍 良品率</div><div class="panel-bd"><div style="text-align:center;padding:20px 0">';
  h += '<div style="font-size:48px;font-weight:700;color:' + (qcRate === "-" ? "var(--txt3)" : qcRate >= 90 ? "var(--suc)" : "var(--warn)") + '">' + (qcRate === "-" ? "-" : qcRate + "%") + '</div>';
  h += '<div style="font-size:13px;color:var(--txt2)">合格品率</div>';
  h += '<div style="font-size:11px;color:var(--txt3);margin-top:4px">' + totalGood + ' / ' + totalQc + ' 已质检工单</div>';
  h += '</div></div></div></div>';

  // 各工序完成量
  h += '<div class="panel"><div class="panel-hd">📊 各工序完成量</div><div class="panel-bd">';
  var procCounts = {};
  ALL_PROCESSES.forEach(function (p) { procCounts[p] = 0; });
  o.forEach(function (x) { x.processes.forEach(function (p) { if (p.done) procCounts[p.name] = (procCounts[p.name] || 0) + 1; }); });
  var maxProc = Math.max(1, Math.max.apply(null, Object.values(procCounts)));
  window._statsProcData = procCounts;
  window._statsDoneCount = done.length;
  h += '<div class="chart-canvas-wrap"><canvas id="statsProcessChart"></canvas></div></div></div>';

  // 客户排名
  h += '<div class="panel"><div class="panel-hd">🏢 客户工单排名 TOP10</div><div class="panel-bd">';
  var custCounts = {};
  o.forEach(function (x) { custCounts[x.customer] = (custCounts[x.customer] || 0) + 1; });
  var sorted = Object.entries(custCounts).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 10);
  var maxCust = Math.max(1, sorted.length > 0 ? sorted[0][1] : 1);
  window._statsCustData = sorted;
  h += '<div class="chart-canvas-wrap"><canvas id="statsCustChart"></canvas></div></div></div>';

  // 本周出勤
  h += '<div class="panel"><div class="panel-hd">📅 本周出勤统计</div><div class="panel-bd">';
  var weekDays = [];
  var d = new Date();
  var day = d.getDay();
  var diff = d.getDate() - day + (day === 0 ? -6 : 1);
  var mon = new Date(d.setDate(diff));
  for (var i = 0; i < 7; i++) { var dd = new Date(mon); dd.setDate(mon.getDate() + i); weekDays.push(dd.getFullYear() + "-" + String(dd.getMonth() + 1).padStart(2, "0") + "-" + String(dd.getDate()).padStart(2, "0")); }
  var weekCounts = weekDays.map(function (wd) { var a = state.attendance[wd] || {}; return Object.keys(a).filter(function (k) { return a[k].checkIn; }).length; });
  window._statsWeekData = { days: weekDays, counts: weekCounts };
  h += '<div class="chart-canvas-wrap"><canvas id="statsWeekChart"></canvas></div></div></div>';

  C.innerHTML = h;
  setTimeout(function() {
    try {
      if (window._statsProcData) createStatsProcessChart(window._statsProcData, window._statsDoneCount);
      if (window._statsCustData) createStatsCustChart(window._statsCustData);
      if (window._statsWeekData) createStatsWeekChart(window._statsWeekData.days, window._statsWeekData.counts);
    } catch(e) { console.error('Stats chart error:', e); }
  }, 100);
};

// Stats chart creators
function createStatsProcessChart(procData, doneCount) {
  var ctx = document.getElementById('statsProcessChart');
  if (!ctx) return;
  if (window.chartInstances && window.chartInstances['statsProc']) {
    window.chartInstances['statsProc'].destroy();
  }
  var labels = ALL_PROCESSES;
  var values = labels.map(function(p) { return procData[p] || 0; });
  var colors = values.map(function(v) {
    return v >= doneCount ? 'rgba(5, 150, 105, 0.7)' : 'rgba(37, 99, 235, 0.7)';
  });
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{ label: '完成量', data: values, backgroundColor: colors, borderRadius: 4, borderWidth: 0 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0f172a' } },
      scales: { y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
    }
  });
  if (!window.chartInstances) window.chartInstances = {};
  window.chartInstances['statsProc'] = chart;
}
function createStatsCustChart(sorted) {
  var ctx = document.getElementById('statsCustChart');
  if (!ctx) return;
  if (window.chartInstances && window.chartInstances['statsCust']) {
    window.chartInstances['statsCust'].destroy();
  }
  var labels = sorted.map(function(e) { return e[0]; });
  var values = sorted.map(function(e) { return e[1]; });
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{ label: '工单数', data: values, backgroundColor: 'rgba(37, 99, 235, 0.75)', borderRadius: 4, borderWidth: 0 }]
    },
    options: {
      indexAxis: 'y',
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0f172a' } },
      scales: { x: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: '#f1f5f9' } }, y: { grid: { display: false } } }
    }
  });
  if (!window.chartInstances) window.chartInstances = {};
  window.chartInstances['statsCust'] = chart;
}
function createStatsWeekChart(days, counts) {
  var ctx = document.getElementById('statsWeekChart');
  if (!ctx) return;
  if (window.chartInstances && window.chartInstances['statsWeek']) {
    window.chartInstances['statsWeek'].destroy();
  }
  var labels = days.map(function(d, i) { return '周' + ['一','二','三','四','五','六','日'][i]; });
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '出勤人数', data: counts,
        borderColor: '#059669', backgroundColor: 'rgba(5, 150, 105, 0.1)',
        fill: true, tension: 0.3, pointRadius: 5, pointBackgroundColor: '#059669'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0f172a' } },
      scales: { y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
    }
  });
  if (!window.chartInstances) window.chartInstances = {};
  window.chartInstances['statsWeek'] = chart;
}

// ============ INIT ============

function init() {
  C = document.getElementById("contentArea");
  TOKEN = localStorage.getItem("rz_token");
  var userStr = localStorage.getItem("rz_user");
  if (userStr) { try { USER = JSON.parse(userStr); } catch(e) {} }
  if (!TOKEN) { showLogin(); return; }
  api("/api/me").then(function(user) {
    USER = user;
    var badge = document.querySelector(".user-badge");
    if (badge) badge.textContent = "👤 " + (USER.display_name || USER.username);
  }).catch(function() { logout(); return; });
  Promise.all([
    api("/api/orders"), api("/api/employees"), api("/api/machines"),
    api("/api/inventory"), api("/api/attendance"), api("/api/reports"),
    api("/api/schedules")
  ]).then(function(results) {
    state.orders = results[0]; state.orders.forEach(normOrder);
    state.employees = results[1]; state.employees.forEach(normEmployee);
    state.machines = results[2]; state.machines.forEach(normMachine);
    state.inventory = results[3]; state.inventory.forEach(normInventory);
    state.attendance = {};
    results[4].forEach(function(r) {
      if(!state.attendance[r.date]) state.attendance[r.date]={};
      state.attendance[r.date][r.emp_id] = r;
    });
    state.workReports = results[5];
    state.scheduleItems = results[6];
    updateClock(); setInterval(updateClock, 30000);
    renderers.dashboard();
  }).catch(function(e) {
    console.error(e);
    C.innerHTML = '<div style="padding:40px;text-align:center"><h2>数据加载失败</h2><p>'+e.message+'</p><button onclick="location.reload()" style="margin-top:20px;padding:10px 20px;background:#2563eb;color:#fff;border:none;border-radius:6px;cursor:pointer">重试</button></div>';
  });
}
init();
