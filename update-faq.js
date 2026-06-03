const fs = require('fs');

// zh.json FAQ update
const zhPath = 'src/messages/zh.json';
const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

zhData.faq.items = [
  ...zhData.faq.items,
  {
    "question": "如何乘坐公共交通到达？",
    "answer": "您可以乘坐15路有轨电车，或者5、8、11、22、28路公交车，在“万国宫广场”站下车，步行1分钟即可到达。入住日内瓦酒店的游客可使用免费的日内瓦交通卡。"
  },
  {
    "question": "附近有停车场吗？",
    "answer": "有的。紧邻广场地下设有“万国宫广场地下停车场”，按小时收费。不过由于周边是国际组织集中区，建议优先使用公共交通。"
  },
  {
    "question": "断椅到底代表什么意义？",
    "answer": "它那条断裂的腿象征着地雷和集束炸弹造成的毁灭性伤害，而稳固的三条腿和高耸的椅背则象征着受害者的坚韧尊严以及对和平的呼吁。"
  },
  {
    "question": "参观断椅大约需要多长时间？",
    "answer": "参观雕塑本身及在广场拍照大约需要15到30分钟。建议您将其与对面的联合国欧洲总部（万国宫）或周边的国际红十字博物馆结合起来安排半日游。"
  }
];

fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2));

// en.json FAQ update
const enPath = 'src/messages/en.json';
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

enData.faq.items = [
  ...enData.faq.items,
  {
    "question": "How to get there by public transport?",
    "answer": "You can take tram 15, or buses 5, 8, 11, 22, 28 to the 'Nations' stop. It's a 1-minute walk from there. Tourists staying in Geneva hotels can use the free Geneva Transport Card."
  },
  {
    "question": "Is there parking nearby?",
    "answer": "Yes, the underground 'Parking des Nations' is located right next to the square and charges hourly rates. However, public transport is recommended as street parking is limited in the International District."
  },
  {
    "question": "What does the Broken Chair symbolize?",
    "answer": "The broken leg represents the devastating injuries caused by landmines and cluster munitions, while the three solid legs and backrest symbolize the resilience and dignity of victims and the call for peace."
  },
  {
    "question": "How much time should I spend visiting the Broken Chair?",
    "answer": "Visiting the sculpture and taking photos at the square usually takes 15 to 30 minutes. We recommend combining it with a tour of the UN European Headquarters opposite the square or the nearby Red Cross Museum for a half-day trip."
  }
];

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
