var data = [
	{name:'北京',value:334},
	{name:'天津',value:189},
	{name:'上海',value:297},
	{name:'重庆',value:383},
	{name:'石家庄',value:160},
	{name:'唐山',value:121},
	{name:'秦皇岛',value:51},
	{name:'邯郸',value:109},
	{name:'邢台',value:99},
	{name:'保定',value:144},
	{name:'张家口',value:65},
	{name:'承德',value:38},
	{name:'沧州',value:126},
	{name:'廊坊',value:87},
	{name:'衡水',value:59},
	{name:'太原',value:95},
	{name:'大同',value:49},
	{name:'阳泉',value:27},
	{name:'长治',value:47},
	{name:'晋城',value:29},
	{name:'朔州',value:25},
	{name:'忻州',value:35},
	{name:'吕梁',value:31},
	{name:'晋中',value:48},
	{name:'临汾',value:59},
	{name:'运城',value:84},
	{name:'呼和浩特',value:53},
	{name:'包头',value:51},
	{name:'乌海',value:17},
	{name:'赤峰',value:41},
	{name:'呼伦贝尔',value:29},
	{name:'通辽',value:33},
	{name:'乌兰察布',value:22},
	{name:'鄂尔多斯',value:37},
	{name:'巴彦淖尔',value:22},
	{name:'沈阳',value:111},
	{name:'大连',value:88},
	{name:'鞍山',value:33},
	{name:'抚顺',value:30},
	{name:'本溪',value:16},
	{name:'丹东',value:26},
	{name:'锦州',value:35},
	{name:'营口',value:31},
	{name:'阜新',value:35},
	{name:'辽阳',value:19},
	{name:'盘锦',value:22},
	{name:'铁岭',value:25},
	{name:'朝阳',value:28},
	{name:'葫芦岛',value:25},
	{name:'长春',value:105},
	{name:'吉林',value:42},
	{name:'四平',value:27},
	{name:'辽源',value:11},
	{name:'通化',value:28},
	{name:'白山',value:14},
	{name:'白城',value:24},
	{name:'松原',value:26},
	{name:'哈尔滨',value:101},
	{name:'齐齐哈尔',value:36},
	{name:'牡丹江',value:23},
	{name:'佳木斯',value:33},
	{name:'大庆',value:45},
	{name:'伊春',value:5},
	{name:'鸡西',value:14},
	{name:'鹤岗',value:8},
	{name:'双鸭山',value:17},
	{name:'七台河',value:10},
	{name:'绥化',value:29},
	{name:'黑河',value:17},
	{name:'南京',value:133},
	{name:'无锡',value:115},
	{name:'徐州',value:98},
	{name:'常州',value:88},
	{name:'苏州',value:213},
	{name:'南通',value:124},
	{name:'连云港',value:62},
	{name:'淮安',value:49},
	{name:'盐城',value:67},
	{name:'扬州',value:69},
	{name:'镇江',value:55},
	{name:'泰州',value:71},
	{name:'宿迁',value:60},
	{name:'杭州',value:150},
	{name:'宁波',value:152},
	{name:'温州',value:125},
	{name:'绍兴',value:106},
	{name:'湖州',value:68},
	{name:'嘉兴',value:79},
	{name:'金华',value:114},
	{name:'衢州',value:36},
	{name:'台州',value:102},
	{name:'丽水',value:25},
	{name:'舟山',value:16},
	{name:'合肥',value:126},
	{name:'芜湖',value:38},
	{name:'蚌埠',value:39},
	{name:'淮南',value:21},
	{name:'马鞍山',value:33},
	{name:'淮北',value:28},
	{name:'铜陵',value:22},
	{name:'安庆',value:45},
	{name:'黄山',value:28},
	{name:'阜阳',value:58},
	{name:'宿州',value:44},
	{name:'滁州',value:27},
	{name:'六安',value:50},
	{name:'宣城',value:49},
	{name:'池州',value:17},
	{name:'亳州',value:45},
	{name:'福州',value:78},
	{name:'莆田',value:33},
	{name:'泉州',value:109},
	{name:'厦门',value:74},
	{name:'漳州',value:47},
	{name:'龙岩',value:41},
	{name:'三明',value:24},
	{name:'南平',value:25},
	{name:'宁德',value:20},
	{name:'南昌',value:84},
	{name:'赣州',value:75},
	{name:'宜春',value:55},
	{name:'吉安',value:46},
	{name:'上饶',value:53},
	{name:'抚州',value:38},
	{name:'九江',value:47},
	{name:'景德镇',value:24},
	{name:'萍乡',value:24},
	{name:'新余',value:18},
	{name:'鹰潭',value:12},
	{name:'济南',value:145},
	{name:'青岛',value:163},
	{name:'淄博',value:76},
	{name:'枣庄',value:50},
	{name:'东营',value:46},
	{name:'烟台',value:123},
	{name:'潍坊',value:156},
	{name:'济宁',value:105},
	{name:'泰安',value:66},
	{name:'威海',value:56},
	{name:'日照',value:59},
	{name:'滨州',value:77},
	{name:'德州',value:67},
	{name:'聊城',value:74},
	{name:'临沂',value:163},
	{name:'菏泽',value:72},
	{name:'莱芜',value:24},
	{name:'郑州',value:192},
	{name:'开封',value:46},
	{name:'洛阳',value:77},
	{name:'平顶山',value:47},
	{name:'安阳',value:56},
	{name:'鹤壁',value:20},
	{name:'新乡',value:78},
	{name:'焦作',value:44},
	{name:'濮阳',value:39},
	{name:'许昌',value:59},
	{name:'漯河',value:30},
	{name:'三门峡',value:28},
	{name:'商丘',value:85},
	{name:'周口',value:51},
	{name:'驻马店',value:54},
	{name:'南阳',value:86},
	{name:'信阳',value:60},
	{name:'武汉',value:149},
	{name:'黄石',value:27},
	{name:'十堰',value:43},
	{name:'荆州',value:43},
	{name:'宜昌',value:71},
	{name:'襄阳',value:59},
	{name:'鄂州',value:6},
	{name:'荆门',value:31},
	{name:'黄冈',value:36},
	{name:'孝感',value:39},
	{name:'咸宁',value:26},
	{name:'随州',value:26},
	{name:'长沙',value:148},
	{name:'株洲',value:42},
	{name:'湘潭',value:35},
	{name:'衡阳',value:58},
	{name:'邵阳',value:51},
	{name:'岳阳',value:54},
	{name:'张家界',value:18},
	{name:'益阳',value:30},
	{name:'常德',value:47},
	{name:'娄底',value:38},
	{name:'郴州',value:39},
	{name:'永州',value:40},
	{name:'怀化',value:35},
	{name:'广州',value:194},
	{name:'深圳',value:162},
	{name:'珠海',value:43},
	{name:'汕头',value:39},
	{name:'佛山',value:140},
	{name:'韶关',value:40},
	{name:'湛江',value:38},
	{name:'肇庆',value:37},
	{name:'江门',value:55},
	{name:'茂名',value:35},
	{name:'惠州',value:65},
	{name:'梅州',value:30},
	{name:'汕尾',value:9},
	{name:'河源',value:27},
	{name:'阳江',value:30},
	{name:'清远',value:33},
	{name:'东莞',value:137},
	{name:'中山',value:76},
	{name:'潮州',value:25},
	{name:'揭阳',value:30},
	{name:'云浮',value:22},
	{name:'南宁',value:128},
	{name:'柳州',value:67},
	{name:'桂林',value:60},
	{name:'梧州',value:20},
	{name:'北海',value:25},
	{name:'崇左',value:12},
	{name:'来宾',value:16},
	{name:'贺州',value:17},
	{name:'玉林',value:35},
	{name:'百色',value:35},
	{name:'河池',value:29},
	{name:'钦州',value:24},
	{name:'防城港',value:5},
	{name:'贵港',value:27},
	{name:'成都',value:288},
	{name:'绵阳',value:62},
	{name:'自贡',value:32},
	{name:'攀枝花',value:27},
	{name:'泸州',value:51},
	{name:'德阳',value:49},
	{name:'广元',value:27},
	{name:'遂宁',value:29},
	{name:'内江',value:25},
	{name:'乐山',value:40},
	{name:'资阳',value:26},
	{name:'宜宾',value:43},
	{name:'南充',value:62},
	{name:'达州',value:47},
	{name:'雅安',value:22},
	{name:'广安',value:25},
	{name:'巴中',value:27},
	{name:'眉山',value:27},
	{name:'贵阳',value:92},
	{name:'六盘水',value:27},
	{name:'遵义',value:77},
	{name:'铜仁',value:31},
	{name:'毕节',value:22},
	{name:'安顺',value:29},
	{name:'昆明',value:142},
	{name:'昭通',value:26},
	{name:'曲靖',value:62},
	{name:'玉溪',value:41},
	{name:'普洱',value:26},
	{name:'保山',value:33},
	{name:'丽江',value:31},
	{name:'临沧',value:17},
	{name:'西安',value:137},
	{name:'铜川',value:13},
	{name:'宝鸡',value:45},
	{name:'咸阳',value:37},
	{name:'渭南',value:59},
	{name:'汉中',value:32},
	{name:'安康',value:18},
	{name:'商洛',value:9},
	{name:'延安',value:32},
	{name:'榆林',value:58},
	{name:'兰州',value:85},
	{name:'嘉峪关',value:10},
	{name:'金昌',value:9},
	{name:'白银',value:22},
	{name:'天水',value:29},
	{name:'酒泉',value:24},
	{name:'张掖',value:28},
	{name:'武威',value:30},
	{name:'定西',value:23},
	{name:'陇南',value:10},
	{name:'平凉',value:26},
	{name:'庆阳',value:30},
	{name:'西宁',value:59},
	{name:'海东',value:1},
	{name:'银川',value:80},
	{name:'石嘴山',value:8},
	{name:'吴忠',value:16},
	{name:'固原',value:13},
	{name:'中卫',value:8}
];

var geoCoordMap = {
	'北京':[116.405290,39.904987],
	'天津':[117.190186,39.125595],
	'石家庄':[114.502464,38.045475],
	'唐山':[118.175390,39.635113],
	'秦皇岛':[119.586580,39.942530],
	'邯郸':[114.490685,36.612274],
	'邢台':[114.508850,37.068200],
	'保定':[115.482330,38.867657],
	'张家口':[114.884094,40.811900],
	'承德':[117.939156,40.976204],
	'沧州':[116.857460,38.310580],
	'廊坊':[116.704440,39.523926],
	'衡水':[115.665990,37.735096],
	'太原':[112.549250,37.857014],
	'大同':[113.295260,40.090310],
	'阳泉':[113.583280,37.861187],
	'长治':[113.113556,36.191113],
	'晋城':[112.851270,35.497555],
	'朔州':[112.433390,39.331260],
	'晋中':[112.736465,37.696495],
	'运城':[111.003960,35.022778],
	'忻州':[112.733536,38.417690],
	'临汾':[111.517975,36.084150],
	'吕梁':[111.134340,37.524364],
	'呼和浩特':[111.670800,40.818310],
	'包头':[109.840410,40.658170],
	'乌海':[106.825560,39.673733],
	'赤峰':[118.956800,42.275320],
	'通辽':[122.263120,43.617428],
	'鄂尔多斯':[109.990290,39.817180],
	'呼伦贝尔':[119.758170,49.215332],
	'巴彦淖尔':[107.416960,40.757400],
	'乌兰察布':[113.114540,41.034126],
	'沈阳':[123.429090,41.796770],
	'大连':[121.618620,38.914590],
	'鞍山':[122.995630,41.110626],
	'抚顺':[123.921110,41.875957],
	'本溪':[123.770515,41.297910],
	'丹东':[124.383040,40.124294],
	'锦州':[121.135740,41.119270],
	'营口':[122.235150,40.667430],
	'阜新':[121.648964,42.011795],
	'辽阳':[123.181520,41.269400],
	'盘锦':[122.069570,41.124485],
	'铁岭':[123.844280,42.290585],
	'朝阳':[120.451180,41.576760],
	'葫芦岛':[120.856390,40.755573],
	'长春':[125.324500,43.886840],
	'吉林':[126.553020,43.843580],
	'四平':[124.370790,43.170345],
	'辽源':[125.145350,42.902690],
	'通化':[125.936500,41.721176],
	'白山':[126.427840,41.942505],
	'松原':[124.823610,45.118244],
	'白城':[122.841110,45.619026],
	'哈尔滨':[126.642460,45.756966],
	'齐齐哈尔':[123.957920,47.342080],
	'鸡西':[130.975970,45.300045],
	'鹤岗':[130.277480,47.332085],
	'双鸭山':[131.157300,46.643440],
	'大庆':[125.112720,46.590733],
	'伊春':[128.899400,47.724773],
	'佳木斯':[130.361630,46.809605],
	'七台河':[131.015580,45.771267],
	'牡丹江':[129.618600,44.582962],
	'黑河':[127.499020,50.249584],
	'绥化':[126.992930,46.637394],
	'上海':[121.472640,31.231707],
	'南京':[118.767410,32.041546],
	'无锡':[120.301670,31.574730],
	'徐州':[117.184814,34.261790],
	'常州':[119.946976,31.772753],
	'苏州':[120.619580,31.299380],
	'南通':[120.864610,32.016212],
	'连云港':[119.178820,34.600018],
	'淮安':[119.021260,33.597507],
	'盐城':[120.140000,33.377632],
	'扬州':[119.421005,32.393158],
	'镇江':[119.452750,32.204403],
	'泰州':[119.915180,32.484882],
	'宿迁':[118.275160,33.963010],
	'杭州':[120.153580,30.287458],
	'宁波':[121.549790,29.868387],
	'温州':[120.672110,28.000574],
	'嘉兴':[120.750860,30.762653],
	'湖州':[120.102400,30.867199],
	'绍兴':[120.582115,29.997116],
	'金华':[119.649506,29.089523],
	'衢州':[118.872630,28.941708],
	'舟山':[122.106865,30.016027],
	'台州':[121.428600,28.661379],
	'丽水':[119.921780,28.451994],
	'合肥':[117.283040,31.861190],
	'芜湖':[118.376450,31.326319],
	'蚌埠':[117.363230,32.939667],
	'淮南':[117.018326,32.647575],
	'马鞍山':[118.507904,31.689362],
	'淮北':[116.794660,33.971706],
	'铜陵':[117.816574,30.929935],
	'安庆':[117.043550,30.508830],
	'黄山':[118.317320,29.709238],
	'滁州':[118.316260,32.303627],
	'阜阳':[115.819730,32.896970],
	'宿州':[116.984085,33.633892],
	'六安':[116.507675,31.752890],
	'亳州':[115.782936,33.869340],
	'池州':[117.489160,30.656036],
	'宣城':[118.757996,30.945667],
	'福州':[119.306240,26.075302],
	'厦门':[118.110220,24.490475],
	'莆田':[119.007560,25.431011],
	'三明':[117.635000,26.265444],
	'泉州':[118.589424,24.908854],
	'漳州':[117.661804,24.510897],
	'南平':[118.178460,26.635628],
	'龙岩':[117.029780,25.091602],
	'宁德':[119.527084,26.659240],
	'南昌':[115.892150,28.676493],
	'景德镇':[117.214660,29.292560],
	'萍乡':[113.852190,27.622946],
	'九江':[115.992810,29.712034],
	'新余':[114.930830,27.810835],
	'鹰潭':[117.033840,28.238638],
	'赣州':[114.940280,25.850970],
	'吉安':[114.986374,27.111698],
	'宜春':[114.391136,27.804300],
	'抚州':[116.358350,27.983850],
	'上饶':[117.971180,28.444420],
	'济南':[117.000920,36.675808],
	'青岛':[120.355170,36.082980],
	'淄博':[118.047646,36.814938],
	'枣庄':[117.557960,34.856422],
	'东营':[118.664710,37.434563],
	'烟台':[121.391380,37.539295],
	'潍坊':[119.107080,36.709250],
	'济宁':[116.587240,35.415394],
	'泰安':[117.129070,36.194970],
	'威海':[122.116394,37.509690],
	'日照':[119.461205,35.428590],
	'莱芜':[117.677734,36.214397],
	'临沂':[118.326450,35.065280],
	'德州':[116.307430,37.453968],
	'聊城':[115.980370,36.456013],
	'滨州':[118.016975,37.383540],
	'菏泽':[115.469380,35.246532],
	'郑州':[113.665410,34.757977],
	'开封':[114.341446,34.797050],
	'洛阳':[112.434470,34.663040],
	'平顶山':[113.307720,33.735240],
	'安阳':[114.352486,36.103443],
	'鹤壁':[114.295440,35.748238],
	'新乡':[113.883990,35.302616],
	'焦作':[113.238266,35.239040],
	'濮阳':[115.041300,35.768234],
	'许昌':[113.826065,34.022957],
	'漯河':[114.026405,33.575855],
	'三门峡':[111.194100,34.777336],
	'南阳':[112.540920,32.999080],
	'商丘':[115.650500,34.437054],
	'信阳':[114.075030,32.123276],
	'周口':[114.649650,33.620358],
	'驻马店':[114.024734,32.980167],
	'武汉':[114.298570,30.584354],
	'黄石':[115.077050,30.220074],
	'十堰':[110.787920,32.646908],
	'宜昌':[111.290840,30.702637],
	'襄阳':[112.144150,32.042427],
	'鄂州':[114.890594,30.396536],
	'荆门':[112.204254,31.035420],
	'孝感':[113.926660,30.926422],
	'荆州':[112.238130,30.326857],
	'黄冈':[114.879364,30.447712],
	'咸宁':[114.328964,29.832798],
	'随州':[113.373770,31.717497],
	'长沙':[112.982280,28.194090],
	'株洲':[113.151730,27.835806],
	'湘潭':[112.944050,27.829730],
	'衡阳':[112.607700,26.900358],
	'邵阳':[111.469230,27.237843],
	'岳阳':[113.132860,29.370290],
	'常德':[111.691345,29.040224],
	'张家界':[110.479920,29.127401],
	'益阳':[112.355040,28.570066],
	'郴州':[113.032070,25.793589],
	'永州':[111.608020,26.434517],
	'怀化':[109.978240,27.550081],
	'娄底':[112.008500,27.728136],
	'广州':[113.280640,23.125177],
	'韶关':[113.591545,24.801323],
	'深圳':[114.085945,22.547000],
	'珠海':[113.553986,22.224980],
	'汕头':[116.708466,23.371020],
	'佛山':[113.122720,23.028763],
	'江门':[113.094940,22.590431],
	'湛江':[110.364975,21.274899],
	'茂名':[110.919230,21.659752],
	'肇庆':[112.472530,23.051546],
	'惠州':[114.412600,23.079405],
	'梅州':[116.117584,24.299112],
	'汕尾':[115.364235,22.774485],
	'河源':[114.697800,23.746265],
	'阳江':[111.975105,21.859222],
	'清远':[113.051220,23.685022],
	'东莞':[113.746260,23.046238],
	'中山':[113.382390,22.521112],
	'潮州':[116.632300,23.661701],
	'揭阳':[116.355736,23.543777],
	'云浮':[112.044440,22.929802],
	'南宁':[108.320010,22.824020],
	'柳州':[109.411705,24.314617],
	'桂林':[110.299120,25.274216],
	'梧州':[111.297610,23.474804],
	'北海':[109.119255,21.473343],
	'防城港':[108.345474,21.614632],
	'钦州':[108.624176,21.967127],
	'贵港':[109.602140,23.093600],
	'玉林':[110.154396,22.631360],
	'百色':[106.616290,23.897741],
	'贺州':[111.552055,24.414140],
	'河池':[108.062100,24.695898],
	'来宾':[109.229774,23.733767],
	'崇左':[107.353930,22.404108],
	'重庆':[106.504960,29.533155],
	'成都':[104.065735,30.659462],
	'自贡':[104.773445,29.352764],
	'攀枝花':[101.716000,26.580446],
	'泸州':[105.443350,28.889137],
	'德阳':[104.398650,31.127990],
	'绵阳':[104.741720,31.464020],
	'广元':[105.829760,32.433666],
	'遂宁':[105.571330,30.513311],
	'内江':[105.066140,29.587080],
	'乐山':[103.761260,29.582024],
	'南充':[106.082980,30.795280],
	'眉山':[103.831790,30.048319],
	'宜宾':[104.630820,28.760190],
	'广安':[106.633370,30.456398],
	'达州':[107.502260,31.209484],
	'雅安':[103.001030,29.987722],
	'巴中':[106.753670,31.858809],
	'资阳':[104.641914,30.122211],
	'贵阳':[106.713480,26.578342],
	'六盘水':[104.846740,26.584642],
	'遵义':[106.937260,27.706627],
	'安顺':[105.932190,26.245544],
	'铜仁':[109.191550,27.718346],
	'毕节':[105.285010,27.301693],
	'昆明':[102.712250,25.040610],
	'曲靖':[103.797850,25.501556],
	'玉溪':[102.543910,24.350460],
	'保山':[99.167130,25.111801],
	'昭通':[103.717220,27.337000],
	'丽江':[100.233025,26.872108],
	'普洱':[100.972340,22.777320],
	'临沧':[100.086970,23.886566],
	'西安':[108.948020,34.263160],
	'铜川':[108.979610,34.916580],
	'宝鸡':[107.144870,34.369316],
	'咸阳':[108.705120,34.333440],
	'渭南':[109.502884,34.499382],
	'延安':[109.490810,36.596540],
	'汉中':[107.028620,33.077667],
	'榆林':[109.741196,38.290160],
	'安康':[109.029274,32.690300],
	'商洛':[109.939770,33.868320],
	'兰州':[103.823555,36.058040],
	'嘉峪关':[98.277306,39.786530],
	'金昌':[102.187890,38.514236],
	'白银':[104.173610,36.545680],
	'天水':[105.725000,34.578530],
	'武威':[102.634700,37.929996],
	'张掖':[100.455475,38.932896],
	'平凉':[106.684690,35.542790],
	'酒泉':[98.510796,39.744022],
	'庆阳':[107.638374,35.734220],
	'定西':[104.626300,35.579580],
	'陇南':[104.929380,33.388600],
	'西宁':[101.778915,36.623177],
	'海东':[102.103270,36.502914],
	'银川':[106.278175,38.466370],
	'石嘴山':[106.376175,39.013330],
	'吴忠':[106.199410,37.986164],
	'固原':[106.285240,36.004562],
	'中卫':[105.189570,37.514950]
};

var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '地级市经销商数量',
        //subtext: 'data from PM25.in',
        //sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
    },
    series : [
        {
            name: '经销商数量',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};