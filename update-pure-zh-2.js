const fs = require('fs');

const zhPath = 'src/messages/zh.json';
const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

zhData.hero.openMaps = "在谷歌地图上查看位置";
zhData.basicInfo.addressValue = "1202 日内瓦, 瑞士";
zhData.basicInfo.plusCodeValue = "64FQ+4G 日内瓦, 瑞士";
zhData.tickets.parkingPrice = "周边地下停车场按小时收费（万国宫广场地下停车场）";
zhData.transport.fromCenterDesc = "乘坐15路有轨电车，在“万国宫广场”站下车，步行约1分钟即可到达。";
zhData.transport.fromStationDesc = "在火车站外乘坐15路有轨电车（方向：万国宫广场），在终点站“万国宫广场”下车，全程约10-15分钟。";
zhData.transport.fromAirportDesc = "乘坐5路或28路公交车，在“万国宫广场”站下车，车程约15-20分钟。";
zhData.transport.drivingDesc = "景点附近设有地下停车场（万国宫广场地下停车场）。由于周边是国际组织集中区，路面停车位可能比较紧张，建议优先使用公共交通。";
zhData.route.steps[0] = "抵达万国宫广场";
zhData.mapSection.subtitle = "1202 日内瓦, 瑞士 (64FQ+4G 日内瓦, 瑞士)";
zhData.officialManagement.text = "断椅由国际助残组织（现称为“人类与包容”组织）委托制作并拥有。该组织是一个致力于为残疾人和弱势群体提供支持的国际非政府组织，特别关注地雷和集束弹药受害者。雕塑的存在持续提醒着国际社会对《渥太华禁雷公约》和《奥斯陆集束弹药公约》的承诺。";

fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2));
