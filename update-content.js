const fs = require('fs');

const updateJson = (filePath, isZh) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Intro
  data.intro.description = isZh 
    ? "断椅 (Broken Chair) 是一座位于瑞士日内瓦万国宫（联合国欧洲总部）广场上的巨大木制雕塑。它由瑞士艺术家丹尼尔·伯塞特（Daniel Berset）设计，由木匠路易·日内瓦（Louis Genève）制作。雕塑高12米，重5.5吨，其特点是有一条断掉的腿，象征着对地雷和集束炸弹受害者的纪念和支持。"
    : "The Broken Chair is a monumental wooden sculpture located across the street from the Palace of Nations (United Nations European Headquarters) in Geneva, Switzerland. Designed by the Swiss artist Daniel Berset and constructed by carpenter Louis Genève, the 12-metre-high, 5.5-ton sculpture features a broken leg, symbolizing opposition to land mines and cluster bombs.";
  
  data.intro.visitGuide.items = isZh
    ? [
        "雕塑位于公共广场，全天24小时免费开放参观。",
        "这里是拍照留念的绝佳地点，背景是壮观的万国宫喷泉。",
        "广场周边经常有和平集会和示威活动。",
        "建议结合万国宫（需提前预约）和日内瓦国际区一起游览。"
      ]
    : [
        "The sculpture is located in a public square and is free to visit 24/7.",
        "It's a perfect spot for photography, with the spectacular Palace of Nations fountains in the background.",
        "The square is frequently used for peaceful assemblies and demonstrations.",
        "Recommended to combine with a tour of the Palace of Nations (booking required) and the International District."
      ];

  data.intro.alsoKnownAs.items = isZh
    ? [
        "反地雷和集束炸弹的标志",
        "日内瓦国际区的地标性建筑",
        "12米高的巨型木制雕塑",
        "紧邻联合国欧洲总部"
      ]
    : [
        "Symbol against landmines and cluster bombs",
        "Landmark of Geneva's International District",
        "12-metre-high monumental wooden sculpture",
        "Located right next to the UN European Headquarters"
      ];

  // Knowledge
  data.knowledge.sections[0] = {
    id: "history",
    title: isZh ? "历史与起源" : "History & Origins",
    content: isZh 
      ? "断椅最初是由国际助残组织（Handicap International）于1997年委托制作的，目的是为了呼吁所有国家签署《渥太华禁雷公约》。它原本计划只在万国宫前放置三个月，但由于其产生的巨大影响力和公众的强烈支持，最终被永久保留了下来。"
      : "The Broken Chair was originally commissioned by Handicap International in 1997 to urge all nations to sign the Ottawa Treaty banning landmines. It was initially planned to remain in front of the Palace of Nations for only three months, but due to its profound impact and strong public support, it was kept permanently."
  };
  
  data.knowledge.sections[1] = {
    id: "symbolism",
    title: isZh ? "象征意义" : "Symbolism",
    content: isZh
      ? "这座由5.5吨木材制成的巨椅有着一条断裂的椅腿，它代表着地雷和集束炸弹造成的毁灭性伤害。同时，那三条稳固的腿和高耸的椅背也象征着受害者的坚韧与尊严，以及人类对和平的期盼。"
      : "The massive chair, made of 5.5 tons of wood, features a broken leg that represents the devastating injuries caused by landmines and cluster munitions. At the same time, its three solid legs and towering backrest symbolize the resilience and dignity of the victims, as well as humanity's hope for peace."
  };

  // FAQ
  data.faq.items = isZh
    ? [
        {
          question: "参观断椅需要门票吗？",
          answer: "不需要。断椅位于日内瓦的公共广场（万国宫广场）上，全天24小时免费向公众开放。"
        },
        {
          question: "晚上可以去参观吗？",
          answer: "可以的，晚上广场会有照明，且氛围更加宁静。不过如果您想拍摄清晰的照片，白天光线会更好。"
        }
      ]
    : [
        {
          question: "Do I need a ticket to see the Broken Chair?",
          answer: "No. The Broken Chair is located on a public square (Place des Nations) in Geneva and is free to visit 24/7."
        },
        {
          question: "Can I visit at night?",
          answer: "Yes, the square is illuminated at night and offers a more peaceful atmosphere. However, daytime provides better lighting for photography."
        }
      ];

  // Basic Info
  data.basicInfo.addressValue = isZh ? "1202 Geneva, 瑞士" : "1202 Geneva, Switzerland";
  data.basicInfo.plusCodeValue = isZh ? "64FQ+4G 日内瓦瑞士" : "64FQ+4G Geneva, Switzerland";
  data.basicInfo.typeValue = isZh ? "旅游胜地" : "Tourist Attraction";
  
  // Hours
  data.hours.parkTime = isZh ? "全天 24 小时开放" : "Open 24 hours a day";
  data.hours.bestTimeSpring = isZh ? "春季：气候宜人，适合在日内瓦湖畔漫步" : "Spring: Pleasant weather, perfect for walking along Lake Geneva";
  data.hours.bestTimeSummer = isZh ? "夏季：阳光明媚，喷泉开启，非常适合拍照" : "Summer: Sunny days, fountains are on, excellent for photography";
  data.hours.bestTimeAutumn = isZh ? "秋季：日内瓦的秋景十分美丽" : "Autumn: Beautiful autumn scenery in Geneva";
  data.hours.bestTimeWinter = isZh ? "冬季：可以结合周边的博物馆一起参观" : "Winter: Can be combined with visits to nearby museums";
  data.hours.tip = isZh ? "喷泉开启时，与万国宫和断椅一起构成了极佳的摄影画面。" : "When the fountains are on, they make a perfect photographic composition with the UN building and the Broken Chair.";

  // Tickets
  data.tickets.park = isZh ? "门票价格" : "Entrance Fee";
  data.tickets.parkPrice = isZh ? "免费开放" : "Free admission";
  data.tickets.parkingPrice = isZh ? "周边地下停车场按小时收费（Parking des Nations）" : "Hourly rates apply at the nearby underground parking (Parking des Nations)";
  data.tickets.guidedPrice = isZh ? "参观联合国万国宫内部需提前在官网预约购票" : "Guided tours of the UN Palace of Nations require advance booking on their official website";

  // Route
  data.route.overview = isZh ? "探索日内瓦国际区" : "Explore Geneva's International District";
  data.route.steps = isZh 
    ? [
        "抵达万国宫广场 (Place des Nations)",
        "欣赏并拍摄断椅雕塑",
        "观看广场上的喷泉阵列",
        "参观联合国欧洲总部 (需提前预约)",
        "漫步前往附近的国际红十字与红新月博物馆"
      ]
    : [
        "Arrive at Place des Nations",
        "Admire and photograph the Broken Chair sculpture",
        "Watch the fountain display on the square",
        "Visit the UN European Headquarters (booking required)",
        "Walk to the nearby International Red Cross and Red Crescent Museum"
      ];

  // Gallery
  data.gallery.captions = isZh
    ? [
        "断椅全景",
        "万国宫广场",
        "断掉的椅腿",
        "仰视视角",
        "喷泉与雕塑",
        "日内瓦国际区",
        "巨大的木制结构",
        "和平的象征",
        "晴空下的断椅",
        "细节特写",
        "纪念碑",
        "周边建筑",
        "人与雕塑的比例",
        "广场风貌",
        "艺术与反思",
        "日内瓦地标",
        "公共艺术空间",
        "夜晚的雕塑"
      ]
    : [
        "Broken Chair Panorama",
        "Place des Nations",
        "The Broken Leg",
        "Looking Up",
        "Fountains and Sculpture",
        "Geneva International District",
        "Massive Wooden Structure",
        "Symbol of Peace",
        "Broken Chair in Sunny Day",
        "Close-up Details",
        "The Monument",
        "Surrounding Architecture",
        "Scale of the Sculpture",
        "Square View",
        "Art and Reflection",
        "Geneva Landmark",
        "Public Art Space",
        "Sculpture at Night"
      ];

  // Reviews
  data.reviews.items = isZh
    ? [
        {
          "name": "Sarah J.",
          "rating": 5,
          "date": "2026-05-10",
          "text": "非常震撼的雕塑！了解了它背后的反地雷意义后，更觉得意义非凡。"
        },
        {
          "name": "Mark T.",
          "rating": 5,
          "date": "2026-04-22",
          "text": "日内瓦必打卡的地标之一。就在联合国门口，广场上的喷泉也很好看。"
        },
        {
          "name": "Elena R.",
          "rating": 5,
          "date": "2026-03-15",
          "text": "巨大而壮观。站在它下面能感受到一种强烈的视觉冲击力。"
        },
        {
          "name": "David L.",
          "rating": 4,
          "date": "2026-02-05",
          "text": "很有教育意义的公共艺术品。交通非常方便，坐电车直接到。"
        },
        {
          "name": "Paula W.",
          "rating": 5,
          "date": "2025-10-12",
          "text": "为了和平与尊严的象征。来到日内瓦一定要来看看。"
        },
        {
          "name": "Sarai M.",
          "rating": 5,
          "date": "2025-09-05",
          "text": "不可思议的木制结构，而且传递的信息非常强大。100%推荐。"
        },
        {
          "name": "Kathy B.",
          "rating": 5,
          "date": "2025-08-20",
          "text": "美丽的纪念碑！！来联合国参观前必定会经过的地方。"
        },
        {
          "name": "Thomas G.",
          "rating": 4,
          "date": "2025-07-15",
          "text": "不仅是一个拍照点，更是对世界和平的呼吁。周围的氛围很好。"
        }
      ]
    : [
        {
          "name": "Sarah J.",
          "rating": 5,
          "date": "2026-05-10",
          "text": "A very powerful sculpture! Learning about its anti-landmine message makes it even more meaningful."
        },
        {
          "name": "Mark T.",
          "rating": 5,
          "date": "2026-04-22",
          "text": "A must-see landmark in Geneva. It's right in front of the UN, and the fountains in the square are beautiful too."
        },
        {
          "name": "Elena R.",
          "rating": 5,
          "date": "2026-03-15",
          "text": "Massive and spectacular. Standing underneath it gives you a strong visual impact."
        },
        {
          "name": "David L.",
          "rating": 4,
          "date": "2026-02-05",
          "text": "A very educational piece of public art. Very easy to get to, the tram stops right there."
        },
        {
          "name": "Paula W.",
          "rating": 5,
          "date": "2025-10-12",
          "text": "A symbol of peace and dignity. You must come and see it when in Geneva."
        },
        {
          "name": "Sarai M.",
          "rating": 5,
          "date": "2025-09-05",
          "text": "Incredible wooden structure, and the message it conveys is very powerful. 100% recommended."
        },
        {
          "name": "Kathy B.",
          "rating": 5,
          "date": "2025-08-20",
          "text": "Beautiful monument!! You'll definitely pass by it before taking the UN tour."
        },
        {
          "name": "Thomas G.",
          "rating": 4,
          "date": "2025-07-15",
          "text": "Not just a photo spot, but an appeal for world peace. The atmosphere around it is great."
        }
      ];

  // Official Management
  data.officialManagement.text = isZh
    ? "断椅由国际助残组织（Handicap International，现称为 Humanity & Inclusion）委托制作并拥有。该组织是一个致力于为残疾人和弱势群体提供支持的国际非政府组织，特别关注地雷和集束弹药受害者。雕塑的存在持续提醒着国际社会对《渥太华禁雷公约》和《奥斯陆集束弹药公约》的承诺。"
    : "The Broken Chair was commissioned and is owned by Handicap International (now Humanity & Inclusion). The organization is an international NGO dedicated to supporting people with disabilities and vulnerable populations, with a particular focus on victims of landmines and cluster munitions. The sculpture's presence serves as a constant reminder to the international community of their commitments to the Ottawa Treaty and the Oslo Convention on Cluster Munitions.";

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

updateJson('src/messages/en.json', false);
updateJson('src/messages/zh.json', true);
