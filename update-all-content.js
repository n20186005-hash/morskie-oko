const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'src', 'messages');

const content = {
  zh: {
    intro: {
      title: "探索 Morskie Oko (海洋之眼)",
      description: "Morskie Oko（海洋之眼）是塔特拉山脉最大的湖泊，面积34.5公顷，海拔1395米。它完全属于波兰境内的塔特拉国家公园。湖泊由冰河时代的冰川雕刻而成，水质清澈，能见度可达15米。",
      visitGuide: {
        title: "游览建议",
        items: [
          "Morskie Oko 是塔特拉山脉最受欢迎的景点，旺季每天可能有上万人到访，建议尽早出发。",
          "您可以从扎科帕内 (Zakopane) 出发，徒步前往。",
          "除了 Morskie Oko，附近的 Czarny Staw pod Rysami 也是非常受欢迎的徒步目的地。",
          "湖畔的木屋建于 1907-1908 年，是波兰塔特拉山脉目前仍在运营的最古老的避难所。"
        ]
      },
      alsoKnownAs: {
        title: "亮点",
        items: [
          "塔特拉山脉最大的湖泊 (34.5公顷)",
          "海拔 1395 米，最深处达 50.8 米",
          "波兰塔特拉山脉唯一天然有鱼的湖泊 (褐鳟)",
          "属于波兰塔特拉国家公园 (Tatrzański Park Narodowy)"
        ]
      }
    },
    knowledge: {
      title: "关于 Morskie Oko",
      sections: [
        {
          id: "history",
          title: "历史与起源",
          content: "湖泊是由上一次冰河时代的冰川雕刻而成。随着冰川融化，盆地逐渐被水填满。“Morskie Oko”（海洋之眼）这个名字是由游客取的，而当地高地人则称其为“Rybi Staw”（鱼塘），因为这里是波兰塔特拉山脉中唯一天然有鱼（褐鳟）的湖泊。"
        },
        {
          id: "geography",
          title: "地理与归属",
          content: "尽管塔特拉山脉是波兰与斯洛伐克的天然国界，Morskie Oko 完全位于波兰一侧的小波兰省境内。整个湖泊及其所在的 Rybi Potok 山谷深处波兰的塔特拉国家公园腹地。因此，这是一个不折不扣的波兰景点。"
        }
      ]
    },
    faq: {
      title: "常见问题解答",
      items: [
        {
          question: "Morskie Oko 在波兰还是斯洛伐克？",
          answer: "Morskie Oko 完全位于波兰境内，属于塔特拉国家公园，尽管它距离斯洛伐克边境很近。"
        },
        {
          question: "湖水有多深？",
          answer: "Morskie Oko 的最大深度为 50.8 米，总蓄水量约为 990 万立方米。"
        },
        {
          question: "可以在湖里游泳吗？",
          answer: "不可以。为了保护塔特拉国家公园脆弱的生态系统，严格禁止游泳、洗澡和喂鱼。"
        },
        {
          question: "徒步到湖边需要多长时间？",
          answer: "从 Palenica Białczańska 停车场出发，沿着柏油路单程步行大约需要 2 到 2.5 小时。"
        },
        {
          question: "有吃东西的地方吗？",
          answer: "有的。湖边有一座历史悠久的 PTTK 避难所（建于1907-1908年），供应热食和饮料。"
        }
      ]
    },
    hours: {
      title: "开放时间",
      park: "塔特拉国家公园",
      parkTime: "每天从黎明到黄昏开放",
      bestTime: "最佳游览时间",
      bestTimeSpring: "春季：融雪形成美丽的瀑布，但步道可能湿滑",
      bestTimeSummer: "夏季：非常适合徒步，但游客很多，请尽早出发",
      bestTimeAutumn: "秋季：令人惊叹的秋色，天气通常比较稳定",
      bestTimeWinter: "冬季：美丽的雪景，但需要适当的冬季装备并注意雪崩风险",
      tip: "出发前请务必查看天气预报和 TOPR (塔特拉志愿搜救队) 的警告。"
    },
    tickets: {
      title: "门票与停车",
      park: "国家公园门票",
      parkPrice: "进入塔特拉国家公园需要购买门票（普通票约 9 PLN）",
      parking: "Palenica Białczańska 停车场",
      parkingPrice: "必须提前在网上预订（根据季节约 45-55 PLN/天）",
      guided: "马车服务",
      guidedPrice: "从停车场到 Włosienica（距湖约 1.5 公里）提供马车服务，价格另计"
    },
    transport: {
      title: "交通指南",
      fromCenter: "从扎科帕内 (Zakopane)",
      fromCenterDesc: "从扎科帕内汽车站乘坐小巴前往 Palenica Białczańska 停车场，车程约 30-40 分钟。",
      fromStation: "自驾",
      fromStationDesc: "开车前往 Palenica Białczańska 停车场。请务必提前在网上预订车位，旺季很快就会售罄。",
      fromAirport: "徒步路线",
      fromAirportDesc: "从停车场出发，需要沿着柏油路徒步约 9 公里（约 2 小时）才能到达湖边。",
      publicTransport: "公共交通",
      publicTransportDesc: "小巴是从扎科帕内到达步道起点的最便捷方式，特别是在旺季停车场爆满的时候。",
      walking: "步道状况",
      walkingDesc: "通往 Morskie Oko 的步道是一条平缓的柏油路，适合大多数人的体力水平，包括推婴儿车的家庭。",
      driving: "无障碍设施",
      drivingDesc: "马车可以带您走完大部分路程，但最后 1.5 公里仍需步行。"
    },
    route: {
      title: "推荐路线",
      overview: "经典的塔特拉山脉徒步之旅",
      steps: [
        "从 Palenica Białczańska 停车场出发",
        "沿着风景优美的森林柏油路徒步",
        "途径 Wodogrzmoty Mickiewicza 瀑布",
        "抵达 Morskie Oko (海洋之眼) 欣赏美景",
        "可选：继续向上徒步前往 Czarny Staw pod Rysami"
      ]
    },
    officialManagement: {
      title: "塔特拉国家公园 (Tatrzański Park Narodowy)",
      text: "Morskie Oko 位于波兰塔特拉国家公园 (TPN) 内。该公园保护着塔特拉山脉独特的高山景观、植物和动物。游客必须遵守公园规定，包括留在标记的步道上、带走所有垃圾以及不打扰野生动物。"
    },
    gallery: {
      title: "照片画廊",
      subtitle: "Otoczenie Morskiego Oka / Morskie Oko Lake",
      captions: [
        "Morskie Oko 湖景",
        "Czarny Staw pod Rysami / Morskie Oko widziane z Zazieleńca",
        "塔特拉山脉",
        "湖水倒影",
        "历史悠久的木屋",
        "森林步道",
        "清澈的湖水",
        "高山风光",
        "冬季的海洋之眼",
        "秋季色彩",
        "步道沿途",
        "山峰环绕",
        "游客与自然",
        "壮丽的岩壁",
        "宁静的早晨",
        "波兰国家公园",
        "徒步者",
        "美丽的自然景观"
      ],
      viewAll: "在谷歌地图上查看位置",
      showAll: "显示完整照片",
      showLess: "收起照片"
    }
  },
  en: {
    intro: {
      title: "Explore Morskie Oko",
      description: "Morskie Oko (Eye of the Sea) is the largest lake in the Tatra Mountains, covering 34.5 hectares at 1,395 meters above sea level. Located entirely within Poland's Tatra National Park, the glacier-formed lake boasts crystal-clear waters with visibility up to 15 meters.",
      visitGuide: {
        title: "Visit Tips",
        items: [
          "Morskie Oko is the most popular destination in the Tatras. In the busiest season, several thousand people visit daily, so start your trip early.",
          "The lake is accessible from Zakopane via a scenic hike.",
          "Don't miss Czarny Staw pod Rysami, another beautiful lake located just up the valley.",
          "The lodge at Morskie Oko, built in 1907–1908, is the oldest operating shelter in the Polish Tatras."
        ]
      },
      alsoKnownAs: {
        title: "Highlights",
        items: [
          "Largest lake in the Tatra Mountains (34.5 ha)",
          "Located at 1,395 meters above sea level, 50.8m deep",
          "Natural habitat for brown trout",
          "Part of Polish National Parks (Polskie Parki Narodowe)"
        ]
      }
    },
    knowledge: {
      title: "About Morskie Oko",
      sections: [
        {
          id: "history",
          title: "History & Formation",
          content: "The lake was formed by the sculpting processes of the last ice age. Glaciers slowly carved the basin, which gradually filled with water. The name 'Morskie Oko' (Eye of the Sea) was invented by tourists, while locals called it 'Rybi Staw' (Fish Pond) because it's the only naturally stocked lake in the Polish Tatras."
        },
        {
          id: "geography",
          title: "Geography & Borders",
          content: "Although the Tatra Mountains serve as a natural border between Poland and Slovakia, Morskie Oko belongs entirely to Poland. It is located deep within the Tatra National Park in the Lesser Poland Voivodeship, making it a purely Polish attraction."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is Morskie Oko in Poland or Slovakia?",
          answer: "Morskie Oko is located entirely within Poland, in the Tatra National Park, though it is close to the Slovak border."
        },
        {
          question: "How deep is the lake?",
          answer: "The maximum depth of Morskie Oko is 50.8 meters, containing about 9.9 million cubic meters of water."
        },
        {
          question: "Can you swim in Morskie Oko?",
          answer: "No, swimming, bathing, and feeding the fish are strictly prohibited to protect the delicate ecosystem."
        },
        {
          question: "How long is the hike?",
          answer: "The walk from the Palenica Białczańska parking lot takes about 2 to 2.5 hours one way along an asphalt road."
        },
        {
          question: "Are there places to eat?",
          answer: "Yes, there is a historic PTTK mountain shelter by the lake that serves hot meals and drinks."
        }
      ]
    },
    hours: {
      title: "Visiting Hours",
      park: "Tatra National Park",
      parkTime: "Open daily from dawn to dusk",
      bestTime: "Best Time to Visit",
      bestTimeSpring: "Spring: Melting snows create beautiful waterfalls, but trails may be slippery",
      bestTimeSummer: "Summer: Perfect for hiking, but very crowded. Start early in the morning",
      bestTimeAutumn: "Autumn: Stunning autumn colors and generally stable weather",
      bestTimeWinter: "Winter: Beautiful snowy landscapes, requires proper winter gear",
      tip: "Always check the weather forecast and TOPR avalanche warnings before your hike."
    },
    tickets: {
      title: "Admission & Parking",
      park: "National Park Entrance",
      parkPrice: "A ticket to the Tatra National Park is required (approx. 9 PLN)",
      parking: "Palenica Białczańska Parking",
      parkingPrice: "Must be booked online in advance (approx. 45-55 PLN per day)",
      guided: "Horse-drawn Carriages",
      guidedPrice: "Available from the parking lot to Włosienica (approx. 1.5 km from the lake)"
    },
    transport: {
      title: "How to Get Here",
      fromCenter: "From Zakopane",
      fromCenterDesc: "Take a frequent minibus from Zakopane bus station to the Palenica Białczańska parking lot (30-40 mins).",
      fromStation: "By Car",
      fromStationDesc: "Drive to Palenica Białczańska. Book your parking spot online well in advance.",
      fromAirport: "The Hike",
      fromAirportDesc: "From the parking lot, it's a 9km hike (about 2 hours) on an asphalt road to reach the lake.",
      publicTransport: "Public Transport",
      publicTransportDesc: "Minibuses are the most convenient way to reach the trail head, especially in high season.",
      walking: "Trail Conditions",
      walkingDesc: "The trail to Morskie Oko is an easy, paved road suitable for most fitness levels.",
      driving: "Accessibility",
      drivingDesc: "Horse carriages can take you most of the way, but you still need to walk the last 1.5 kilometers."
    },
    route: {
      title: "Recommended Route",
      overview: "A Classic Tatra Mountain Hike",
      steps: [
        "Start at Palenica Białczańska parking lot",
        "Hike the scenic asphalt road through the forest",
        "Pass the Wodogrzmoty Mickiewicza waterfalls",
        "Arrive at Morskie Oko and enjoy the view",
        "Optional: Continue the hike up to Czarny Staw pod Rysami"
      ]
    },
    officialManagement: {
      title: "Tatra National Park (Tatrzański Park Narodowy)",
      text: "Morskie Oko is located within the Polish Tatra National Park (TPN). The park protects the unique alpine landscapes, flora, and fauna of the Tatra Mountains. Visitors must adhere to park rules, including staying on marked trails, carrying out all trash, and not disturbing wildlife."
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Otoczenie Morskiego Oka / Morskie Oko Lake",
      captions: [
        "Morskie Oko View",
        "Czarny Staw pod Rysami / Morskie Oko widziane z Zazieleńca",
        "Tatra Mountains",
        "Lake Reflections",
        "Historic Lodge",
        "Forest Trail",
        "Clear Waters",
        "Alpine Scenery",
        "Winter at Morskie Oko",
        "Autumn Colors",
        "Along the Trail",
        "Surrounding Peaks",
        "Visitors and Nature",
        "Majestic Cliffs",
        "Peaceful Morning",
        "National Park Nature",
        "Hikers",
        "Beautiful Landscapes"
      ],
      viewAll: "View on Google Maps",
      showAll: "View All Photos",
      showLess: "Show Less"
    }
  }
};

content.pl = JSON.parse(JSON.stringify(content.en));
content.ru = JSON.parse(JSON.stringify(content.en));
content.de = JSON.parse(JSON.stringify(content.en));

// Quick Polish translation for intro text from user prompt
content.pl.intro.description = "Morskie Oko (1395 m n.p.m.) to największe (34,54 ha) jezioro w Tatrach. Jego maksymalna głębokość wynosi 50,8 m. Jezioro zawdzięcza swoje powstanie procesom rzeźbotwórczym epoki lodowej. Woda w jeziorze charakteryzuje się dużą przezroczystością – ok. 15 m.";
content.pl.intro.alsoKnownAs.items[3] = "Tatrzański Park Narodowy / Polskie Parki Narodowe";

const langs = ['zh', 'en', 'pl', 'ru', 'de'];

langs.forEach(lang => {
  const filePath = path.join(messagesDir, `${lang}.json`);
  let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const updateData = content[lang] || content.en;
  
  data.intro = { ...data.intro, ...updateData.intro };
  data.knowledge = { ...data.knowledge, ...updateData.knowledge };
  data.faq = { ...data.faq, ...updateData.faq };
  data.hours = { ...data.hours, ...updateData.hours };
  data.tickets = { ...data.tickets, ...updateData.tickets };
  data.transport = { ...data.transport, ...updateData.transport };
  data.route = { ...data.route, ...updateData.route };
  data.officialManagement = { ...data.officialManagement, ...updateData.officialManagement };
  data.gallery = { ...data.gallery, ...updateData.gallery };
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
});

console.log("All JSON files updated with Morskie Oko detailed info.");
