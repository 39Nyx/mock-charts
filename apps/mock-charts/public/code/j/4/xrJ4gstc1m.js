var color = ['#a6c84c', '#ffa022', '#46bee9'];
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


/*

var nodes1 = [
   {name:"Tapianbalai",size:189,xy:[116.0282,-4.0306]},
   {name:"PantaiAsmara",size:149,xy:[115.1584,-4.1077]}
];


var nodes = [
   ["Tapianbalai",189,116.0282,-4.0306],
   ["PantaiAsmara",149,115.1584,-4.1077]
];


var edges = [
    
    ["Tapianbalai","PantaiAsmara",300]
    
    ];


var convertData = function (data) {
    var res = [];
    
    for (var i = 0; i < data.length; i++) {
        if(i==1)
        {
            //alert([data[i].xy,data[i].value]);
        }
        
            res.push({
                name: data[i].name,
                value: [data[i].xy,data[i].value]
            });

    }
    return res;
};



*/






var nodes = [
   ['Tapianbalai',189,116.0282,-4.0306],
['PantaiAsmara',149,115.1584,-4.1077],
['Satui',1129,115.6093,-3.9141],
['Sekapung',50,116.4234,-3.6995],
['Banjarmasin',3163,114.4939,-3.506],
['Sarungga',1802,116.2228,-3.2337],
['TlkKumai',452,111.7073,-2.8817],
['TanjungPandan',109,107.6044,-2.8241],
['Sangbewai',13,116.2352,-2.5303],
['Manggar',35,108.1944,-2.6041],
['Sampit',369,113.1032,-3.0804],
['Mangkui',55,110.1394,-2.5491],
['PangkalPinang',162,106.1609,-2.0998],
['Sungsang',718,104.9053,-2.2558],
['Tanahgrogot',113,116.2253,-1.8003],
['Ketapang',49,109.876,-1.7825],
['Balikpapan',4762,116.9106,-1.3341],
['Pontianak',1332,109.2345,0.0268],
['Samarinda',5891,117.3852,-0.8483],
['SINGAPORE',46480,104.016,1.306],
['Sepasu',230,117.7852,0.7239],
['Kuching',580,110.4344,1.5844],
['Belawai',491,111.2862,2.1254],
['Tanjungselor',119,117.9252,2.8008],
['Matak',123,106.2344,3.2959],
['Tarakan',865,117.7307,3.2414],
['Bunyu',254,118.0346,3.495],
['TanjungKidurong',4,113.2994,3.5859],
['Bintulu',1292,112.7391,3.2289],
['Sebatik',116,117.8823,3.9893],
['Tawau',707,117.8595,4.246],
['Paka',118,103.5072,4.5818],
['Mostyn',80,118.2686,4.7028],
['Silibukan',375,118.3931,4.9914],
['Sabahat',68,119.0768,5.0563],
['Sipitang',3703,115.3545,5.1755],
['KualaTerengganu',28,103.1408,5.3955],
['Sandakan',680,118.0738,5.8196],
['Kinarut',523,116.0975,6.0317],
['LungsodngGeneralSantos',721,125.2447,6.0898],
['Songkhla',100,101.8319,6.4534],
['Zamboanga',299,122.0744,6.8959],
['Parang',39,124.228,7.3502],
['Dabaw',2079,125.666,7.1633],
['BOYANG',739,100.6755,7.3626],
['Ozamiz',146,123.8491,8.1344],
['Sinacaban',66,123.8654,8.3225],
['Iligan',334,124.2457,8.2734],
['Bataraza',112,117.5494,8.4259],
['CagayandeOro',1602,124.7118,8.555],
['Mindanao',365,123.2194,8.5209],
['carmen1',277,125.3375,8.9763],
['Pulot',30,118.1044,8.9959],
['LungsodsaZamboanguita',15,123.0218,9.042],
['BayanngNarra',31,118.3044,9.1309],
['Cabadbaran',91,125.5226,9.1762],
['SiquijorIsland',146,123.5652,9.2464],
['LungsodngDumaguete',819,123.2965,9.325],
['BayanngQuezon',17,118.1783,9.4657],
['BayanngOslob',8,123.4645,9.5524],
['Jagna',123,124.3326,9.6196],
['BanNaBo',642,99.7294,9.3959],
['DakabayansaTagbilaran',218,123.847,9.6754],
['Boljoon',95,123.5181,9.7318],
['CanalBay',492,125.6759,9.7211],
['Sibonga',17,123.6275,9.9507],
['HoChiMinh',13498,107.258,10.1294],
['PuertoPrincesa',101,118.717,9.7359],
['LungsodngCebu',4096,123.9704,10.3229],
['Dinagat',529,125.6065,10.2326],
['DakbayansaSanCarlos',5,123.4229,10.4621],
['DakbayansaToledo',186,123.6631,10.4251],
['Carmen2',60,124.03,10.5759],
['LungsodngBacolod',573,122.9251,10.6815],
['Iloilo',486,122.5942,10.6972],
['BayanngIsbel',162,124.4305,10.8986],
['KampongSaom',156,103.5851,10.7297],
['Ormoc',164,124.5746,11.0028],
['Chumphon',50,99.613,11.2015],
['VinhLong',11,108.8283,11.2973],
['KrongKhemaraPhoumin',148,102.9137,11.4168],
['EINidoBay',59,119.1444,11.4909],
['PhanRangThapCham',17,109.0494,11.5459],
['LungsodngRoxas',49,122.7144,11.6159],
['CATICLAN',52,121.9644,11.9209],
['CamRanh',46,109.1925,11.8746],
['SemiraraIsland',109,121.3944,12.0609],
['BANGKOK',15373,100.8626,13.0505],
['NhaTrang',70,109.3394,12.5759],
['PoliquiBay',36,123.8145,13.109],
['Pasacao',60,123.0394,13.4959],
['CabugaoBay',12,124.2344,13.5709],
['QuiNhon',76,109.2586,13.7572],
['PagbilaoGrandeIsland',46,121.7969,13.8609],
['BalayanBay',153,120.4644,13.5159],
['ManilaBay',8821,120.7577,14.5616],
['SubicBay',1819,120.1877,14.7565],
['TamKy',105,108.6569,15.4759],
['DaNang',1571,108.2294,16.2159],
['LingayenGulf',115,120.2344,16.1559],
['QUANGDONG',173,106.3644,18.1459],
['Sanya',2154,109.1744,18.2209],
['CuraLo',162,105.7577,18.7612],
['MianqianBay',228,108.5394,19.0909],
['HoangMai',361,105.8699,19.3151],
['BeibuGulf',8246,109.1051,19.7534],
['Haikou',16929,110.1747,20.1734],
['HaiPhong',4223,106.7849,20.8128],
['Zhanjiang',12285,110.6691,21.1523],
['Maoming',5753,111.0951,21.4262],
['Beihai',6564,108.8848,20.8399],
['YangjiangHabor',4785,111.9058,21.5232],
['Fangchenggang',18772,108.5047,21.5044],
['JieshiBay',2006,115.3619,22.7109],
['Tainan',23246,120.3816,22.4591],
['HongKong',82047,113.5962,22.4982],
['Mailiao',843,120.0944,23.7759],
['TaichungCity',11248,120.4626,24.2883],
['Xinbei',5026,121.2511,25.2175],
['Keelung',8086,121.8273,25.2649],
['Beserch',2174,103.427,3.9555],
['Chukai',823,103.5045,4.2492],
['Shantou',19658,116.9576,23.2987],
['DongshanHarbour',3319,117.4953,23.7407],
['DongshanBay',1130,117.5619,23.8275],
['HoujiangHarbor',1055,117.7384,23.935],
['Chiyugang',95,117.9541,24.1728],
['XiamenPort',30595,118.1559,24.562],
['ZhangzhouHarbor',25720,117.8974,24.427],
['Neibaiyu',11905,118.4765,24.6006],
['ShenhuBay',1685,118.679,24.6471],
['TigerJuyu',1580,118.7232,24.7046],
['HuluoIslet',455,118.7704,24.7436],
['DashanIslet',1841,118.7565,24.7765],
['QuanzhouBay',6337,118.7032,24.842],
['Xishadao',783,118.9094,24.8827],
['SanyuIslet',1046,118.9546,24.8782],
['MeizhouBay',7993,118.9732,25.1166],
['PinghaiBay',666,119.1752,25.125],
['DonggangHarbour',820,119.3773,25.446],
['BeixiangluIslet',2128,119.6681,25.5672],
['XiaoyuIslet',944,119.6142,25.7855],
['XiaoxiangIsland',344,119.8341,25.5637],
['BatangasBay',1562,121.004,13.5758],
['Legazpi',28,123.7627,13.3481],
['UluganBay',9,118.7695,10.0787],
['CarrascalBay',266,125.96,9.382],
['HinadkabanBay',233,125.9494,9.5378],
['BecebosBay',227,125.7524,9.5673],
['LungsodngSurigao',496,125.5482,9.8022],
['Bontang',537,117.6619,0.5008],
['Muntok',135,105.103,-2.0537],
['Sipitang',3703,115.0934,5.051],
['KualaBaram',1337,113.9821,4.5493],
['KualaBaram',1337,114.1619,4.6444]
];


var edges = [
    
   ['HongKong','SINGAPORE',5376],
['SINGAPORE','HongKong',4051],
['ZhangzhouHarbor','XiamenPort',3343],
['Tainan','HongKong',3173],
['XiamenPort','ZhangzhouHarbor',2953],
['HongKong','Shantou',2843],
['BANGKOK','SINGAPORE',2838],
['SINGAPORE','BANGKOK',2774],
['Haikou','Fangchenggang',2528],
['Shantou','HongKong',2426],
['HongKong','Tainan',2348],
['HongKong','Haikou',2085],
['Fangchenggang','Haikou',1968],
['ZhangzhouHarbor','HongKong',1948],
['TaichungCity','Tainan',1871],
['Fangchenggang','HongKong',1852],
['XiamenPort','HongKong',1817],
['Tainan','TaichungCity',1756],
['HongKong','XiamenPort',1712],
['Zhanjiang','HongKong',1704],
['HongKong','Zhanjiang',1674],
['Neibaiyu','XiamenPort',1496],
['HongKong','Fangchenggang',1463],
['Haikou','HongKong',1452],
['XiamenPort','Neibaiyu',1428],
['HongKong','ZhangzhouHarbor',1336],
['SINGAPORE','HoChiMinh',1297],
['HoChiMinh','SINGAPORE',1208],
['HoChiMinh','BANGKOK',1153],
['Keelung','TaichungCity',1147],
['Shantou','ZhangzhouHarbor',1113],
['Keelung','Tainan',1072],
['HoChiMinh','HongKong',1068],
['BANGKOK','HongKong',1045],
['Shantou','XiamenPort',987],
['HongKong','HoChiMinh',983],
['SINGAPORE','Tainan',925],
['BANGKOK','HoChiMinh',924],
['HongKong','BANGKOK',918],
['Neibaiyu','HongKong',905],
['HongKong','Neibaiyu',887],
['Tainan','Keelung',817],
['XiamenPort','Shantou',791],
['ZhangzhouHarbor','Shantou',776],
['TaichungCity','Keelung',760],
['BeibuGulf','HongKong',685],
['Neibaiyu','ZhangzhouHarbor',679],
['HongKong','Keelung',645],
['ZhangzhouHarbor','Neibaiyu',642],
['Tainan','SINGAPORE',638],
['HongKong','BeibuGulf',625],
['QuanzhouBay','HongKong',585],
['SINGAPORE','Fangchenggang',562],
['BeixiangluIslet','HongKong',545],
['ManilaBay','LungsodngCebu',540],
['Beihai','HongKong',529],
['Keelung','HongKong',513],
['HongKong','Maoming',510],
['BeibuGulf','Fangchenggang',503],
['HaiPhong','HoChiMinh',503],
['SINGAPORE','Banjarmasin',503],
['Fangchenggang','SINGAPORE',500],
['HongKong','QuanzhouBay',492],
['Tainan','Xinbei',489],
['Haikou','BeibuGulf',482],
['HongKong','ManilaBay',480],
['HoChiMinh','HaiPhong',473],
['HongKong','HaiPhong',467],
['QuanzhouBay','ZhangzhouHarbor',457],
['LungsodngCebu','ManilaBay',448],
['XiamenPort','Tainan',448],
['Samarinda','SINGAPORE',441],
['XiamenPort','QuanzhouBay',435],
['TaichungCity','Xinbei',434],
['Xinbei','Tainan',432],
['Haikou','Zhanjiang',430],
['Zhanjiang','Haikou',429],
['XiamenPort','Keelung',428],
['Banjarmasin','SINGAPORE',428],
['HongKong','Beihai',424],
['HongKong','YangjiangHabor',417],
['Xinbei','Keelung',410],
['QuanzhouBay','XiamenPort',403],
['Xinbei','TaichungCity',400],
['Fangchenggang','Beihai',399],
['Tainan','XiamenPort',384],
['Fangchenggang','BeibuGulf',378],
['SINGAPORE','Samarinda',361],
['Beihai','Fangchenggang',360],
['ZhangzhouHarbor','QuanzhouBay',359],
['Shantou','QuanzhouBay',357],
['Sipitang','SINGAPORE',356],
['HongKong','Xinbei',354],
['Maoming','HongKong',350],
['YangjiangHabor','HongKong',349],
['SINGAPORE','Sipitang',349],
['Haikou','Beihai',347],
['ManilaBay','HongKong',344],
['HaiPhong','HongKong',341],
['Fangchenggang','Shantou',340],
['TaichungCity','HongKong',340],
['HoChiMinh','Tainan',340],
['HongKong','TaichungCity',339],
['Maoming','Zhanjiang',338],
['QuanzhouBay','Shantou',338],
['Tainan','ZhangzhouHarbor',332],
['Tainan','ManilaBay',322],
['SINGAPORE','ZhangzhouHarbor',318],
['SINGAPORE','Beserch',318],
['ManilaBay','Tainan',311],
['SINGAPORE','ManilaBay',307],
['MeizhouBay','HongKong',298],
['Xinbei','HongKong',294],
['Shantou','Neibaiyu',283],
['SINGAPORE','Zhanjiang',280],
['HongKong','BeixiangluIslet',272],
['ManilaBay','Dabaw',272],
['Zhanjiang','Maoming',269],
['ZhangzhouHarbor','Tainan',267],
['Sanya','Fangchenggang',265],
['Zhanjiang','Fangchenggang',263],
['HongKong','MeizhouBay',261],
['SINGAPORE','XiamenPort',260],
['SINGAPORE','Satui',255],
['Beihai','Haikou',246],
['LungsodngCebu','CagayandeOro',245],
['Keelung','XiamenPort',243],
['Shantou','Haikou',241],
['Beserch','SINGAPORE',241],
['HongKong','JieshiBay',241],
['ManilaBay','SINGAPORE',241],
['TaichungCity','XiamenPort',238],
['Zhanjiang','SINGAPORE',234],
['HaiPhong','SINGAPORE',229],
['Neibaiyu','Shantou',221],
['BANGKOK','Tainan',220],
['Shantou','BeixiangluIslet',216],
['HoChiMinh','DaNang',211],
['XiamenPort','SINGAPORE',206],
['Satui','SINGAPORE',206],
['HongKong','Sanya',206],
['JieshiBay','HongKong',200],
['ManilaBay','HoChiMinh',195],
['Keelung','Xinbei',188],
['Tainan','BANGKOK',187],
['Neibaiyu','QuanzhouBay',186],
['BANGKOK','ManilaBay',184],
['TaichungCity','SINGAPORE',183],
['Balikpapan','SINGAPORE',182],
['SINGAPORE','HaiPhong',182],
['XiamenPort','Xinbei',181],
['Sarungga','SINGAPORE',181],
['DaNang','HoChiMinh',179],
['BeibuGulf','Haikou',178],
['HongKong','Samarinda',177],
['Fangchenggang','Zhanjiang',176],
['Tainan','HoChiMinh',176],
['Haikou','Shantou',174],
['Xinbei','XiamenPort',174],
['HoujiangHarbor','HongKong',171],
['QuanzhouBay','Neibaiyu',170],
['Dabaw','ManilaBay',164],
['SINGAPORE','Dabaw',164],
['XiamenPort','TaichungCity',163],
['SINGAPORE','Balikpapan',163],
['Dabaw','SINGAPORE',163],
['Tainan','LungsodngCebu',162],
['HongKong','DongshanHarbour',161],
['Fangchenggang','Sanya',155],
['ManilaBay','BANGKOK',153],
['SubicBay','SINGAPORE',152],
['Balikpapan','Samarinda',151],
['CagayandeOro','ManilaBay',143],
['Bontang','SINGAPORE',138],
['CagayandeOro','LungsodngCebu',137],
['Fangchenggang','ZhangzhouHarbor',137],
['Neibaiyu','Haikou',136],
['SubicBay','ManilaBay',135],
['SINGAPORE','TaichungCity',134],
['SINGAPORE','Sarungga',134],
['BeixiangluIslet','Shantou',133],
['SINGAPORE','Keelung',132],
['Fangchenggang','Neibaiyu',132],
['DashanIslet','QuanzhouBay',131],
['XiamenPort','ManilaBay',131],
['Fangchenggang','YangjiangHabor',130],
['Haikou','Neibaiyu',129],
['ZhangzhouHarbor','SINGAPORE',126],
['XiamenPort','HoChiMinh',126],
['Shantou','MeizhouBay',125],
['Bintulu','SINGAPORE',125],
['Haikou','QuanzhouBay',125],
['Dabaw','LungsodngGeneralSantos',124],
['SINGAPORE','Pontianak',124],
['Xinbei','SINGAPORE',123],
['DaNang','HongKong',122],
['ManilaBay','SubicBay',122],
['HongKong','HoujiangHarbor',120],
['SINGAPORE','Xinbei',119],
['HaiPhong','Fangchenggang',119],
['SINGAPORE','SubicBay',119],
['Balikpapan','Banjarmasin',118],
['TaichungCity','HoChiMinh',118],
['MeizhouBay','Shantou',117],
['Samarinda','Balikpapan',117],
['Banjarmasin','Balikpapan',116],
['XiamenPort','BANGKOK',116],
['Keelung','SINGAPORE',115],
['MeizhouBay','XiamenPort',115],
['TigerJuyu','HongKong',114],
['QuanzhouBay','Haikou',114],
['ZhangzhouHarbor','MeizhouBay',113],
['Sanya','HongKong',112],
['Tainan','HaiPhong',111],
['Maoming','Fangchenggang',111],
['SINGAPORE','Bintulu',111],
['DaNang','SINGAPORE',111],
['ManilaBay','XiamenPort',110],
['Pontianak','SINGAPORE',109],
['XiamenPort','MeizhouBay',109],
['Banjarmasin','HongKong',108],
['SINGAPORE','Sungsang',108],
['XiaoyuIslet','HongKong',108],
['Xinbei','ZhangzhouHarbor',108],
['HongKong','DongshanBay',108],
['HongKong','DonggangHarbour',107],
['Dabaw','HongKong',107],
['HaiPhong','Tainan',107],
['MeizhouBay','ZhangzhouHarbor',106],
['XiamenPort','Haikou',105],
['Samarinda','HongKong',105],
['HongKong','Banjarmasin',104],
['YangjiangHabor','Fangchenggang',104],
['LungsodngCebu','Dabaw',103],
['SINGAPORE','DaNang',101],
['Sungsang','SINGAPORE',101],
['LungsodngCebu','Tainan',101],
['ZhangzhouHarbor','Xinbei',100],
['MeizhouBay','Neibaiyu',99],
['Neibaiyu','MeizhouBay',99],
['BeibuGulf','Shantou',99],
['HongKong','TigerJuyu',98],
['ZhangzhouHarbor','Haikou',97],
['QuanzhouBay','Tainan',94],
['Shantou','Fangchenggang',92],
['LungsodngGeneralSantos','Dabaw',92],
['Zhanjiang','Shantou',91],
['SINGAPORE','Bontang',91],
['Shantou','HoujiangHarbor',91],
['DongshanBay','HongKong',91],
['Banjarmasin','Samarinda',90],
['Fangchenggang','HoChiMinh',89],
['ManilaBay','CagayandeOro',88],
['Samarinda','Banjarmasin',87],
['Fangchenggang','HaiPhong',86],
['BeibuGulf','HoangMai',85],
['DongshanHarbour','XiamenPort',85],
['HoangMai','BeibuGulf',85],
['XiamenPort','BeixiangluIslet',84],
['HongKong','DaNang',84],
['Maoming','Haikou',84],
['Haikou','Maoming',83],
['XiaoxiangIsland','HongKong',83],
['SINGAPORE','Belawai',83],
['HoChiMinh','ManilaBay',83],
['Samarinda','TaichungCity',81],
['DongshanHarbour','HongKong',81],
['Satui','HongKong',81],
['Samarinda','BANGKOK',80],
['DonggangHarbour','HongKong',79],
['LungsodngDumaguete','ManilaBay',79],
['TigerJuyu','ZhangzhouHarbor',78],
['SINGAPORE','QuanzhouBay',78],
['SINGAPORE','Kuching',76],
['Shantou','DongshanBay',75],
['HongKong','Satui',75],
['Sipitang','KualaBaram',75],
['KualaBaram','Sipitang',74],
['DaNang','HaiPhong',73],
['QuanzhouBay','MeizhouBay',73],
['ZhangzhouHarbor','TigerJuyu',73],
['YangjiangHabor','Zhanjiang',72],
['ManilaBay','Iloilo',72],
['Beihai','SINGAPORE',71],
['SubicBay','HongKong',71],
['LungsodngGeneralSantos','ManilaBay',71],
['Shantou','TigerJuyu',70],
['Zhanjiang','Beihai',70],
['SINGAPORE','BatangasBay',70],
['HaiPhong','DaNang',69],
['HongKong','XiaoyuIslet',68],
['CanalBay','LungsodngSurigao',68],
['HongKong','Sipitang',68],
['LungsodngSurigao','CanalBay',68],
['LungsodngBacolod','ManilaBay',68],
['YangjiangHabor','Haikou',68],
['Tainan','SubicBay',68],
['BANGKOK','Fangchenggang',67],
['MeizhouBay','QuanzhouBay',67],
['HoujiangHarbor','XiamenPort',67],
['Fangchenggang','Maoming',66],
['Fangchenggang','XiamenPort',66],
['BANGKOK','BanNaBo',66],
['Kuching','SINGAPORE',66],
['HaiPhong','Zhanjiang',65],
['TigerJuyu','Haikou',65],
['Shantou','DongshanHarbour',65],
['Keelung','ZhangzhouHarbor',65],
['Dabaw','LungsodngCebu',65],
['XiamenPort','HoujiangHarbor',64],
['SubicBay','Tainan',64],
['KrongKhemaraPhoumin','SINGAPORE',64],
['Neibaiyu','Fangchenggang',64],
['LungsodngSurigao','Dinagat',64],
['HoChiMinh','XiamenPort',63],
['BeibuGulf','Zhanjiang',63],
['Fangchenggang','Samarinda',63],
['SINGAPORE','YangjiangHabor',62],
['Dinagat','LungsodngSurigao',62],
['Haikou','ZhangzhouHarbor',61],
['Zhanjiang','BeibuGulf',61],
['ManilaBay','DakabayansaTagbilaran',61],
['XiamenPort','DongshanHarbour',60],
['Sanya','BeibuGulf',59],
['ZhangzhouHarbor','BeixiangluIslet',59],
['Shantou','Zhanjiang',59],
['Belawai','SINGAPORE',59],
['TaichungCity','BANGKOK',58],
['Dinagat','CanalBay',58],
['TigerJuyu','Shantou',57],
['Tainan','Neibaiyu',57],
['BANGKOK','BOYANG',57],
['Tainan','Samarinda',56],
['BANGKOK','HaiPhong',56],
['DongshanHarbour','ZhangzhouHarbor',55],
['Bunyu','SINGAPORE',55],
['ZhangzhouHarbor','Fangchenggang',55],
['Iloilo','ManilaBay',55],
['BatangasBay','ManilaBay',55],
['TaichungCity','Samarinda',54],
['XiamenPort','TigerJuyu',54],
['TaichungCity','Neibaiyu',54],
['CanalBay','Dinagat',54],
['ManilaBay','LungsodngBacolod',53],
['HongKong','DashanIslet',53],
['LungsodngCebu','SINGAPORE',53],
['Dabaw','Tainan',52],
['DongshanHarbour','Shantou',52],
['Kinarut','Sipitang',52],
['Tainan','QuanzhouBay',52],
['XiamenPort','Fangchenggang',52],
['HoChiMinh','Fangchenggang',52],
['Maoming','YangjiangHabor',52],
['Sipitang','HongKong',52],
['HongKong','Dabaw',51],
['Haikou','XiamenPort',51],
['Beihai','Zhanjiang',51],
['SINGAPORE','LungsodngCebu',50],
['Samarinda','MeizhouBay',50],
['Tarakan','SINGAPORE',50],
['Haikou','Sanya',50],
['ManilaBay','BatangasBay',50],
['Zhanjiang','YangjiangHabor',50],
['Tainan','DaNang',50],
['YangjiangHabor','Shantou',50],
['Maoming','Beihai',50],
['ShenhuBay','HongKong',50]


    
    ];





//序列化为对象
var nodesobj = function(nodes)
{
    var dic = new Array();
    for (var i = 0; i < nodes.length; i++) {
        dic[nodes[i][0]] = nodes[i];
        dic[nodes[i][0]].xy = [nodes[i][2] , nodes[i][3]];
        dic[nodes[i][0]].value = nodes[i][1];
    }
    
    return dic;
    
    
};



function myFunction(nodesobj, edges) {
    var coord_data = [];
    
    
    for (var i = 0; i < edges.length; i++) {
        var fromID = edges[i][0];
        var toID = edges[i][1];
        var weight = edges[i][2];

        //alert(nodesobj[fromID].xy);
        
        if (weight > 100) {
            coord_data.push({
                coords: [nodesobj[fromID].xy, nodesobj[toID].xy]
            });
        }
    }
    return coord_data;
}


var convertData = function (data) {
    var res = [];
    
    for (var i = 0; i < data.length; i++) {
        if(i==1)
        {
            //alert([data[i][2],data[i][3], data[i][1]]);
        }
        
            res.push({
                name: data[i],
                value: [data[i][2],data[i][3], data[i][1]]
            });

    }
    return res;
};


var aaa = nodesobj(nodes);

exampleData2 = myFunction(aaa, edges);

exampleData3 = convertData(nodes);


option = {
    title: {
        text: '南海航运网络港口间交通流可视化',
        left: 'center',
        textStyle: {
            color: 'rgb(255, 255, 255)'
        }
    },
    bmap: {
        center: [113, 15],
        zoom: 6,
        roam: true,
        mapStyle: {
            'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
            }, {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#08304b'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -70
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }]
        }
    },
    series: [{
            name: ' Top10',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 0
            },
            lineStyle: {
                normal: {
                    color: color[2],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: exampleData2
        },
        {
            name: ' Top10',
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            symbol: ['none', 'none'],
            symbolSize: 5,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: color[2],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: exampleData2
        }
        ,
        {
            name: '前5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: exampleData3,
            symbolSize: function (val) {
                return 7;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
        }
        
        
    ]
};