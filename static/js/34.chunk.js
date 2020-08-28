(this["webpackJsonpark-tool"]=this["webpackJsonpark-tool"]||[]).push([[34],{1079:function(N,A,I){"use strict";I.r(A),I.d(A,"default",(function(){return U}));var t=I(479);function U(N){return Object.keys(t.a).forEach((function(A){var I=t.a[A];I.evolveCost.forEach((function(A){A&&A.forEach((function(A){A.id in N&&(N[A.id]+=A.count)}))})),I.allSkillLvlup&&I.allSkillLvlup.forEach((function(A){return A.forEach((function(A){A.id in N&&(N[A.id]+=A.count)}))})),I.masterSkillCost&&I.masterSkillCost.forEach((function(A){return A.forEach((function(A){return A.forEach((function(A){A.id in N&&(N[A.id]+=A.count)}))}))}))})),N}},406:function(N,A,I){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(N){return typeof N}:function(N){return N&&"function"==typeof Symbol&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},U=I(407),r=null,n=void 0;function o(N){return N||null===r?("object"===("undefined"==typeof Intl?"undefined":t(Intl))&&Intl.Collator?(n=new Intl.Collator(["zh-Hans-CN","zh-CN"]),r=1===Intl.Collator.supportedLocalesOf(["zh-CN"]).length):r=!1,r):r}function e(N){var A=U.UNIHANS,I=U.PINYINS,t=U.EXCEPTIONS,r={source:N};if(N in t)return r.type=2,r.target=t[N],r;var o=-1,e=void 0;if(N.charCodeAt(0)<256)return r.type=1,r.target=N,r;if((e=n.compare(N,"\u963f"))<0)return r.type=3,r.target=N,r;if(0===e)r.type=2,o=0;else{if((e=n.compare(N,"\u9fff"))>0)return r.type=3,r.target=N,r;0===e&&(r.type=2,o=A.length-1)}if(r.type=2,o<0)for(var G=0,E=A.length-1;G<=E;){var H=A[o=~~((G+E)/2)];if(0===(e=n.compare(N,H)))break;e>0?G=o+1:E=o-1}return e<0&&o--,r.target=I[o],r.target||(r.type=3,r.target=r.source),r}function G(N){if("string"!=typeof N)throw new Error("argument should be string.");if(!o())throw new Error("not support Intl or zh-CN language.");return N.split("").map((function(N){return e(N)}))}N.exports={isSupported:o,parse:G,patchDict:function(N){N&&("function"==typeof N&&(N=[N]),N.forEach&&N.forEach((function(N){"function"==typeof N&&N(U)})))},genToken:e,convertToPinyin:function(N,A,I){return G(N).map((function(N){return I&&2===N.type?N.target.toLowerCase():N.target})).join(A||"")}}},407:function(N,A,I){"use strict";N.exports={PINYINS:["A","AI","AN","ANG","AO","BA","BAI","BAN","BANG","BAO","BEI","BEN","BENG","BI","BIAN","BIAO","BIE","BIN","BING","BO","BU","CA","CAI","CAN","CANG","CAO","CE","CEN","CENG","CHA","CHAI","CHAN","CHANG","CHAO","CHE","CHEN","CHENG","CHI","CHONG","CHOU","CHU","CHUA","CHUAI","CHUAN","CHUANG","CHUI","CHUN","CHUO","CI","CONG","COU","CU","CUAN","CUI","CUN","CUO","DA","DAI","DAN","DANG","DAO","DE","DEN","DENG","DI","DIAN","DIAO","DIE","DING","DIU","DONG","DOU","DU","DUAN","DUI","DUN","DUO","E","EI","EN","ENG","ER","FA","FAN","FANG","FEI","FEN","FENG","FIAO","FO","FOU","FU","GA","GAI","GAN","GANG","GAO","GE","GEI","GEN","GENG","GONG","GOU","GU","GUA","GUAI","GUAN","GUANG","GUI","GUN","GUO","HA","HAI","HAN","HANG","HAO","HE","HEI","HEN","HENG","HM","HONG","HOU","HU","HUA","HUAI","HUAN","HUANG","HUI","HUN","HUO","JI","JIA","JIAN","JIANG","JIAO","JIE","JIN","JING","JIONG","JIU","JU","JUAN","JUE","JUN","KA","KAI","KAN","KANG","KAO","KE","KEN","KENG","KONG","KOU","KU","KUA","KUAI","KUAN","KUANG","KUI","KUN","KUO","LA","LAI","LAN","LANG","LAO","LE","LEI","LENG","LI","LIA","LIAN","LIANG","LIAO","LIE","LIN","LING","LIU","LO","LONG","LOU","LU","LV","LUAN","LVE","LUN","LUO","M","MA","MAI","MAN","MANG","MAO","ME","MEI","MEN","MENG","MI","MIAN","MIAO","MIE","MIN","MING","MIU","MO","MOU","MU","N","NA","NAI","NAN","NANG","NAO","NE","NEI","NEN","NENG","NI","NIAN","NIANG","NIAO","NIE","NIN","NING","NIU","NONG","NOU","NU","NV","NUAN","NVE","NUN","NUO","O","OU","PA","PAI","PAN","PANG","PAO","PEI","PEN","PENG","PI","PIAN","PIAO","PIE","PIN","PING","PO","POU","PU","QI","QIA","QIAN","QIANG","QIAO","QIE","QIN","QING","QIONG","QIU","QU","QUAN","QUE","QUN","RAN","RANG","RAO","RE","REN","RENG","RI","RONG","ROU","RU","RUA","RUAN","RUI","RUN","RUO","SA","SAI","SAN","SANG","SAO","SE","SEN","SENG","SHA","SHAI","SHAN","SHANG","SHAO","SHE","SHEN","SHENG","SHI","SHOU","SHU","SHUA","SHUAI","SHUAN","SHUANG","SHUI","SHUN","SHUO","SI","SONG","SOU","SU","SUAN","SUI","SUN","SUO","TA","TAI","TAN","TANG","TAO","TE","TENG","TI","TIAN","TIAO","TIE","TING","TONG","TOU","TU","TUAN","TUI","TUN","TUO","WA","WAI","WAN","WANG","WEI","WEN","WENG","WO","WU","XI","XIA","XIAN","XIANG","XIAO","XIE","XIN","XING","XIONG","XIU","XU","XUAN","XUE","XUN","YA","YAN","YANG","YAO","YE","YI","YIN","YING","YO","YONG","YOU","YU","YUAN","YUE","YUN","ZA","ZAI","ZAN","ZANG","ZAO","ZE","ZEI","ZEN","ZENG","ZHA","ZHAI","ZHAN","ZHANG","ZHAO","ZHE","ZHEN","ZHENG","ZHI","ZHONG","ZHOU","ZHU","ZHUA","ZHUAI","ZHUAN","ZHUANG","ZHUI","ZHUN","ZHUO","ZI","ZONG","ZOU","ZU","ZUAN","ZUI","ZUN","ZUO",""],UNIHANS:["\u963f","\u54ce","\u5b89","\u80ae","\u51f9","\u516b","\u6300","\u6273","\u90a6","\u52f9","\u9642","\u5954","\u4f3b","\u5c44","\u8fb9","\u706c","\u618b","\u6c43","\u51ab","\u7676","\u5cec","\u5693","\u5072","\u53c2","\u4ed3","\u64a1","\u518a","\u5d7e","\u66fd","\u53c9","\u8286","\u8fbf","\u4f25","\u6284","\u8f66","\u62bb","\u9637","\u5403","\u5145","\u62bd","\u51fa","\u6b3b","\u63e3","\u5ddb","\u5205","\u5439","\u65fe","\u9034","\u5472","\u5306","\u51d1","\u7c97","\u6c46","\u5d14","\u90a8","\u6413","\u5491","\u5446","\u4e39","\u5f53","\u5200","\u561a","\u6265","\u706f","\u6c10","\u7538","\u5201","\u7239","\u4e01","\u4e1f","\u4e1c","\u543a","\u53be","\u8011","\u5796","\u5428","\u591a","\u59b8","\u8bf6","\u5940","\u97a5","\u513f","\u53d1","\u5e06","\u531a","\u98de","\u5206","\u4e30","\u8985","\u4ecf","\u7d11","\u592b","\u65ee","\u4f85","\u7518","\u5188","\u768b","\u6208","\u7ed9","\u6839","\u522f","\u5de5","\u52fe","\u4f30","\u74dc","\u4e56","\u5173","\u5149","\u5f52","\u4e28","\u5459","\u54c8","\u548d","\u4f44","\u592f","\u8320","\u8bc3","\u9ed2","\u62eb","\u4ea8","\u5677","\u53ff","\u9f41","\u4e4e","\u82b1","\u6000","\u6b22","\u5ddf","\u7070","\u660f","\u5419","\u4e0c","\u52a0","\u620b","\u6c5f","\u827d","\u9636","\u5dfe","\u5755","\u5182","\u4e29","\u51e5","\u59e2","\u5658","\u519b","\u5494","\u5f00","\u520a","\u5ffc","\u5c3b","\u533c","\u808e","\u52a5","\u7a7a","\u62a0","\u625d","\u5938","\u84af","\u5bbd","\u5321","\u4e8f","\u5764","\u6269","\u5783","\u6765","\u5170","\u5577","\u635e","\u808b","\u52d2","\u5d1a","\u54e9","\u4fe9","\u5941","\u826f","\u64a9","\u6bdf","\u62ce","\u4f36","\u6e9c","\u56d6","\u9f99","\u779c","\u565c","\u9a74","\u5a08","\u63a0","\u62a1","\u7f57","\u5463","\u5988","\u57cb","\u5ada","\u7264","\u732b","\u4e48","\u5445","\u95e8","\u753f","\u54aa","\u5b80","\u55b5","\u4e5c","\u6c11","\u540d","\u8c2c","\u6478","\u54de","\u6bea","\u55ef","\u62cf","\u8149","\u56e1","\u56d4","\u5b6c","\u7592","\u5a1e","\u6041","\u80fd","\u59ae","\u62c8","\u5a18","\u9e1f","\u634f","\u56dc","\u5b81","\u599e","\u519c","\u7fba","\u5974","\u5973","\u597b","\u759f","\u9ec1","\u632a","\u5594","\u8bb4","\u5991","\u62cd","\u7705","\u4e53","\u629b","\u5478","\u55b7","\u5309","\u4e15","\u56e8","\u527d","\u6c15","\u59d8","\u4e52","\u948b","\u5256","\u4ec6","\u4e03","\u6390","\u5343","\u545b","\u6084","\u767f","\u4eb2","\u9751","\u536d","\u4e18","\u533a","\u5cd1","\u7f3a","\u590b","\u5465","\u7a63","\u5a06","\u60f9","\u4eba","\u6254","\u65e5","\u8338","\u53b9","\u909a","\u633c","\u5827","\u5a51","\u77a4","\u637c","\u4ee8","\u6be2","\u4e09","\u6852","\u63bb","\u95aa","\u68ee","\u50e7","\u6740","\u7b5b","\u5c71","\u4f24","\u5f30","\u5962","\u7533","\u5347","\u5c38","\u53ce","\u4e66","\u5237","\u8870","\u95e9","\u53cc","\u813d","\u542e","\u8bf4","\u53b6","\u5fea","\u635c","\u82cf","\u72fb","\u590a","\u5b59","\u5506","\u4ed6","\u56fc","\u574d","\u6c64","\u5932","\u5fd1","\u71a5","\u5254","\u5929","\u65eb","\u5e16","\u5385","\u56f2","\u5077","\u51f8","\u6e4d","\u63a8","\u541e","\u4e47","\u7a75","\u6b6a","\u5f2f","\u5c23","\u5371","\u6637","\u7fc1","\u631d","\u4e4c","\u5915","\u8672","\u4ed9","\u4e61","\u7071","\u4e9b","\u5fc3","\u661f","\u51f6","\u4f11","\u5401","\u5405","\u524a","\u5743","\u4e2b","\u6079","\u592e","\u5e7a","\u503b","\u4e00","\u56d9","\u5e94","\u54df","\u4f63","\u4f18","\u625c","\u56e6","\u66f0","\u6655","\u5e00","\u707d","\u5142","\u5328","\u50ae","\u5219","\u8d3c","\u600e","\u5897","\u624e","\u635a","\u6cbe","\u5f20","\u4f4b","\u8707","\u8d1e","\u4e89","\u4e4b","\u4e2d","\u5dde","\u6731","\u6293","\u62fd","\u4e13","\u5986","\u96b9","\u5b92","\u5353","\u4e72","\u5b97","\u90b9","\u79df","\u94bb","\u539c","\u5c0a","\u6628","\u5159"],EXCEPTIONS:{\u66fe:"ZENG",\u6c88:"SHEN",\u55f2:"DIA",\u78a1:"ZHOU",\u8052:"GUO",\u7094:"QUE",\u86b5:"KE",\u7809:"HUA",\u5b24:"MO",\u5b37:"MO",\u8e52:"PAN",\u8e4a:"XI",\u4e2c:"PAN",\u9730:"XIAN",\u8398:"XIN",\u8c49:"CHI",\u9967:"XING",\u7b60:"JUN",\u957f:"CHANG",\u5e27:"ZHEN",\u5cd9:"SHI",\u90cd:"NA",\u828e:"XIONG",\u8c01:"SHUI"}}},408:function(N,A,I){"use strict";(N.exports=function(N){N.EXCEPTIONS={\u55f2:"DIA",\u78a1:"ZHOU",\u8052:"GUO",\u7094:"QUE",\u86b5:"KE",\u7809:"HUA",\u5b37:"MO",\u8e4a:"XI",\u4e2c:"PAN",\u9730:"XIAN",\u8c49:"CHI",\u9967:"XING",\u5e27:"ZHEN",\u828e:"XIONG",\u8c01:"SHUI",\u94b6:"KE"},N.UNIHANS[91]="\u4f15",N.UNIHANS[347]="\u4eda",N.UNIHANS[393]="\u8bcc",N.UNIHANS[39]="\u5a64",N.UNIHANS[50]="\u8160",N.UNIHANS[369]="\u6538",N.UNIHANS[123]="\u4e6f",N.UNIHANS[171]="\u5215",N.UNIHANS[102]="\u4f5d",N.UNIHANS[126]="\u72bf",N.UNIHANS[176]="\u5217",N.UNIHANS[178]="\u5222",N.UNIHANS[252]="\u5a1d",N.UNIHANS[330]="\u5078"}).shouldPatch=function(N){return"function"==typeof N&&"FOU"===N("\u4f15").target&&"XIA"===N("\u4eda").target&&"ZHONG"===N("\u8bcc").target&&"CHONG"===N("\u5a64").target&&"CONG"===N("\u8160").target&&"YONG"===N("\u6538").target&&"HOU"===N("\u4e6f").target&&"LENG"===N("\u5215").target&&"GONG"===N("\u4f5d").target&&"HUAI"===N("\u72bf").target&&"LIAO"===N("\u5217").target&&"LIN"===N("\u5222").target&&"E"===N("\u94b6").target}},420:function(N,A,I){"use strict";var t=I(406),U=I(408);t.isSupported()&&U.shouldPatch(t.genToken)&&t.patchDict(U),N.exports=t}}]);