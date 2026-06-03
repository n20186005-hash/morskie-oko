const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'src', 'messages');

const transportUpdates = {
  zh: {
    transport: {
      title: "交通指南",
      fromCenter: "从扎科帕内市中心",
      fromCenterDesc: "从扎科帕内汽车站 (Zakopane Bus Station) 或火车站附近乘坐前往 Morskie Oko (Palenica Białczańska 停车场) 的小巴，车程约 30-40 分钟。小巴班次密集，几乎坐满即走。",
      fromStation: "自驾",
      fromStationDesc: "开车前往 Palenica Białczańska 停车场。请务必提前在塔特拉国家公园 (TPN) 官网上预订停车位。未提前预订可能导致无法进入停车场。",
      fromAirport: "从机场出发",
      fromAirportDesc: "距离最近的国际机场是克拉科夫-巴里斯保罗二世国际机场 (KRK) 或斯洛伐克的波普拉德-塔特拉机场 (TAT)。从克拉科夫机场，您可以乘坐大巴或火车前往扎科帕内，然后再转乘小巴前往景点。",
      publicTransport: "公共交通",
      publicTransportDesc: "在扎科帕内，小巴（通常标有 'Morskie Oko' 字样）是到达步道起点最便捷、最经济的方式，尤其在旺季停车场爆满时更是首选。",
      walking: "徒步路线",
      walkingDesc: "从 Palenica Białczańska 停车场到 Morskie Oko 湖边需要沿着柏油路徒步约 9 公里（单程约 2 到 2.5 小时）。这条路线平缓易行，适合各个年龄段和体力水平的游客，包括推婴儿车的家庭。",
      driving: "马车服务",
      drivingDesc: "如果您不想全程徒步，可以在停车场乘坐由当地高地人驾驶的传统马车到达 Włosienica，剩下的 1.5 公里（约 30 分钟）仍需步行到达湖边。"
    }
  },
  en: {
    transport: {
      title: "How to Get Here",
      fromCenter: "From Zakopane Center",
      fromCenterDesc: "Take a frequent minibus from Zakopane bus station or near the train station heading to Morskie Oko (Palenica Białczańska parking lot). The ride takes about 30-40 minutes. Minibuses depart frequently when full.",
      fromStation: "By Car",
      fromStationDesc: "Drive to the Palenica Białczańska parking lot. You must book your parking spot online in advance through the Tatra National Park (TPN) website. Without a reservation, you may be turned away.",
      fromAirport: "From the Airport",
      fromAirportDesc: "The nearest international airports are Kraków John Paul II (KRK) and Poprad-Tatry (TAT) in Slovakia. From Kraków airport, you can take a bus or train to Zakopane, then transfer to a minibus to the trail head.",
      publicTransport: "Public Transport",
      publicTransportDesc: "Minibuses (usually marked 'Morskie Oko') are the most convenient and economical way to reach the trail head from Zakopane, especially highly recommended during the busy season when the parking lot fills up quickly.",
      walking: "The Hike",
      walkingDesc: "From the Palenica Białczańska parking lot, it's a 9km hike (about 2 to 2.5 hours one way) on an asphalt road to reach the lake. The trail is easy, gradual, and suitable for all fitness levels, including families with strollers.",
      driving: "Horse-drawn Carriages",
      drivingDesc: "If you prefer not to walk the entire way, traditional horse-drawn carriages operated by local highlanders can take you from the parking lot to Włosienica. From there, you still need to walk the last 1.5 km (about 30 minutes) to the lake."
    }
  }
};

const langs = ['zh', 'en', 'pl', 'ru', 'de'];

langs.forEach(lang => {
  const filePath = path.join(messagesDir, `${lang}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const updateData = transportUpdates[lang] || transportUpdates.en;
  
  data.transport = { ...data.transport, ...updateData.transport };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
});

console.log("Transport sections updated.");
