const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, 'src', 'messages');

function updateJsonFile(filePath, isZh) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let data = JSON.parse(content);

  // Update meta
  data.meta.title = isZh ? "海洋之眼 (Morskie Oko) – 扎科帕内, 波兰" : "Morskie Oko – Zakopane, Poland";
  data.meta.description = isZh ? "海洋之眼 (Morskie Oko) 完整旅游指南。" : "Complete travel guide to Morskie Oko.";

  // Update header
  // Let's keep existing header translations

  // Update hero
  data.hero.title = "Morskie Oko";
  data.hero.subtitle = isZh ? "塔特拉山脉的明珠" : "The Pearl of the Tatra Mountains";
  data.hero.rating = "4.8";
  data.hero.reviewCount = isZh ? "6,615 条评价" : "6,615 reviews";
  data.hero.type = isZh ? "旅游胜地" : "Tourist Attraction";
  data.hero.mapsLink = "https://maps.app.goo.gl/EkjxMAqKNf9H8NCb6";

  // Update basic info
  data.basicInfo.officialNameValue = "Morskie Oko";
  data.basicInfo.typeValue = isZh ? "旅游胜地" : "Tourist Attraction";
  data.basicInfo.countryValue = isZh ? "波兰" : "Poland";
  data.basicInfo.cityValue = isZh ? "扎科帕内" : "Zakopane";
  data.basicInfo.googleRatingValue = "4.8 (6,615)";
  data.basicInfo.addressValue = isZh ? "Dolina Rybiego Potoku, 34-500 Zakopane, 波兰" : "Dolina Rybiego Potoku, 34-500 Zakopane, Poland";
  data.basicInfo.plusCodeValue = isZh ? "53WC+V2 札科帕内 波兰" : "53WC+V2 Zakopane, Poland";

  // Update mapSection
  data.mapSection.subtitle = isZh ? "Dolina Rybiego Potoku, 34-500 Zakopane, 波兰 (53WC+V2 札科帕内 波兰)" : "Dolina Rybiego Potoku, 34-500 Zakopane, Poland (53WC+V2 Zakopane, Poland)";

  // Update footer links
  data.footer.brandName = "Morskie Oko";
  data.footer.brandSubtitle = "Morskie Oko";
  
  data.footer.officialLinks = {
    "gov": isZh ? "波兰共和国外交与签证" : "Ministry of Foreign Affairs Republic of Poland",
    "poland_travel": isZh ? "波兰国家旅游局" : "Polish Tourism Organisation",
    "visitmalopolska": isZh ? "小波兰省官方旅游门户 - 塔特拉山脉与海洋之眼" : "Małopolska Tourist Portal - Tatra Mountains & Morskie Oko",
    "zakopane": isZh ? "扎科帕内市政府 - 城市档案与自然概况" : "Zakopane City Hall",
    "tpn": isZh ? "塔特拉国家公园法定管理数据库" : "Tatra National Park"
  };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

updateJsonFile(path.join(messagesDir, 'zh.json'), true);
updateJsonFile(path.join(messagesDir, 'en.json'), false);
updateJsonFile(path.join(messagesDir, 'pl.json'), false);
updateJsonFile(path.join(messagesDir, 'ru.json'), false);
updateJsonFile(path.join(messagesDir, 'de.json'), false);

console.log("JSON files updated.");
