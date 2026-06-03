const fs = require('fs');

const updateJson = (filePath, isZh) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Title & Meta
  data.meta.title = isZh ? "断椅 (Broken Chair) – 日内瓦, 瑞士" : "Broken Chair – Geneva, Switzerland";
  data.meta.description = isZh ? "日内瓦断椅完整旅游指南。" : "Complete travel guide to Broken Chair in Geneva.";
  
  // Hero
  data.hero.title = "Broken Chair";
  data.hero.subtitle = isZh ? "断椅" : "Broken Chair";
  data.hero.rating = "4.5";
  data.hero.reviewCount = isZh ? "9,193 条评价" : "9,193 reviews";
  data.hero.type = isZh ? "旅游胜地" : "Tourist Attraction";
  data.hero.mapsLink = "https://maps.app.goo.gl/ox5EXQDdKs4Yc7Nb7";
  
  // Map Section
  data.mapSection.subtitle = isZh ? "1202 Geneva, 瑞士 (64FQ+4G 日内瓦瑞士)" : "1202 Geneva, Switzerland (64FQ+4G Geneva, Switzerland)";

  // Basic Info
  data.basicInfo.officialNameValue = "Broken Chair";
  data.basicInfo.typeValue = isZh ? "旅游胜地" : "Tourist Attraction";
  data.basicInfo.countryValue = isZh ? "瑞士 (Switzerland)" : "Switzerland";
  data.basicInfo.cityValue = isZh ? "日内瓦 (Geneva)" : "Geneva";
  data.basicInfo.googleRatingValue = "4.5 (9,193)";
  data.basicInfo.addressValue = "1202 Geneva, Switzerland";
  data.basicInfo.plusCodeValue = "64FQ+4G Geneva, Switzerland";

  // Gallery
  data.gallery.viewAll = isZh ? "在Google地图上查看位置" : "View on Google Maps";
  
  // Footer
  data.footer.brandName = "Broken Chair";
  data.footer.brandSubtitle = isZh ? "断椅" : "Broken Chair";
  
  // Replace Official Links
  data.footer.officialLinks = {
    "myswitzerland": isZh ? "瑞士国家旅游局" : "Switzerland Tourism",
    "geneve": isZh ? "日内瓦州旅游局" : "Geneva Tourism",
    "geneve_ch": isZh ? "日内瓦市政府官方政务系统" : "Geneva City Government",
    "hi": "Handicap International",
    "visa": isZh ? "瑞士在线签证系统 (Swiss-Visa)" : "Swiss-Visa System"
  };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

updateJson('src/messages/en.json', false);
updateJson('src/messages/zh.json', true);
updateJson('src/messages/de.json', false);
updateJson('src/messages/fr.json', false);
updateJson('src/messages/it.json', false);
updateJson('src/messages/rm.json', false);
