const fs = require('fs');

const zhPath = 'src/messages/zh.json';
const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

// Hero
zhData.meta.title = "断椅 – 日内瓦, 瑞士";
// Intro
zhData.intro.description = "断椅是一座位于瑞士日内瓦万国宫（联合国欧洲总部）广场上的巨大木制雕塑。它由瑞士艺术家丹尼尔·伯塞特设计，由木匠路易·日内瓦制作。雕塑高12米，重5.5吨，其特点是有一条断掉的腿，象征着对地雷和集束炸弹受害者的纪念和支持。";
// Knowledge
zhData.knowledge.sections[0].content = "断椅最初是由国际助残组织于1997年委托制作的，目的是为了呼吁所有国家签署《渥太华禁雷公约》。它原本计划只在万国宫前放置三个月，但由于其产生的巨大影响力和公众的强烈支持，最终被永久保留了下来。";
// Basic Info
zhData.basicInfo.officialNameValue = "断椅";
zhData.basicInfo.countryValue = "瑞士";
zhData.basicInfo.cityValue = "日内瓦";
zhData.basicInfo.googleRating = "地图评分";
zhData.basicInfo.plusCode = "地理代码";
// Transport
zhData.transport.fromStation = "从日内瓦科尔纳万火车站";
zhData.transport.fromAirport = "从日内瓦国际机场";
zhData.transport.publicTransportDesc = "日内瓦公共交通非常便利，所有入住日内瓦酒店的游客均可免费获得一张“日内瓦交通卡”，凭此卡可免费无限次乘坐市内的公共交通工具。到达万国宫广场的交通工具包括：15路有轨电车，以及5、8、11、22、28路公交车。";
// Map Section
zhData.mapSection.openMaps = "在地图上查看位置";
// Footer
zhData.footer.officialLinks.hi = "国际助残组织";
zhData.footer.officialLinks.visa = "瑞士在线签证系统";
// Official Management
zhData.officialManagement.text = "断椅由国际助残组织（现称为 Humanity & Inclusion）委托制作并拥有。该组织是一个致力于为残疾人和弱势群体提供支持的国际非政府组织，特别关注地雷和集束弹药受害者。雕塑的存在持续提醒着国际社会对《渥太华禁雷公约》和《奥斯陆集束弹药公约》的承诺。";

fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2));
