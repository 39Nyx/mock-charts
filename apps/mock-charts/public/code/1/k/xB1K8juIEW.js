
option = {
    backgroundColor: '#404a59',
    title: [{
        text: '横纵向分布',
        subtext: 'by lyc',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },],
    tooltip: {
        trigger: 'none', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    /*legend: {
        show: false,
        orient: 'vertical',
        left: 'left',
        data: [''],
        selectedMode: 'single',
    },*/
    visualMap: {
        show: false,
        min: 0,
        max: 180,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#c05050','#e5cf0d','#5ab1ef'],
        dimension: 0
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    grid: [{
        right: 40,
        top: 100,
        bottom: 40,
        width: '20%',
        height:'60%',
        containLabel: true
    },{
        //right: 10,
        top: '78%',
        width: '60%',
        bottom: 10,
        left: '20%',
        height:'20%',
        containLabel: true
    }
    ],
    xAxis: [{
        position: 'top',
        type: 'value',
        boundaryGap: false,
        axisLabel : {
            show:true,
            //interval: ,//,    // {number}
            //rotate: 45,
           // margin: 8
           
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
        },
        axisTick: {
            show: true
        },
    },{
        gridIndex: 1,
        position: 'top',
        
        type: 'category',
        data: ['-180','-179','-178','-177','-176','-175','-174','-173','-172','-171','-170','-169','-168','-167','-166','-165','-164','-163','-162','-161','-160','-159','-158','-157','-156','-155','-154','-153','-152','-151','-150','-149','-148','-147','-146','-145','-144','-143','-142','-141','-140','-139','-138','-137','-136','-135','-134','-133','-132','-131','-130','-129','-128','-127','-126','-125','-124','-123','-122','-121','-120','-119','-118','-117','-116','-115','-114','-113','-112','-111','-110','-109','-108','-107','-106','-105','-104','-103','-102','-101','-100','-99','-98','-97','-96','-95','-94','-93','-92','-91','-90','-89','-88','-87','-86','-85','-84','-83','-82','-81','-80','-79','-78','-77','-76','-75','-74','-73','-72','-71','-70','-69','-68','-67','-66','-65','-64','-63','-62','-61','-60','-59','-58','-57','-56','-55','-54','-53','-52','-51','-50','-49','-48','-47','-46','-45','-44','-43','-42','-41','-40','-39','-38','-37','-36','-35','-34','-33','-32','-31','-30','-29','-28','-27','-26','-25','-24','-23','-22','-21','-20','-19','-18','-17','-16','-15','-14','-13','-12','-11','-10','-9','-8','-7','-6','-5','-4','-3','-2','-1','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179',],
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
            
        },
        axisTick: {
            show: true
        },
        axisLabel : {
            show:true,
            interval: 19//,    // {number}
            //rotate: 45,
           // margin: 8
           
        }
    },],
    yAxis: [{
        
        type: 'category',
        inverse:true,
        data: ['90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1','0','-1','-2','-3','-4','-5','-6','-7','-8','-9','-10','-11','-12','-13','-14','-15','-16','-17','-18','-19','-20','-21','-22','-23','-24','-25','-26','-27','-28','-29','-30','-31','-32','-33','-34','-35','-36','-37','-38','-39','-40','-41','-42','-43','-44','-45','-46','-47','-48','-49','-50','-51','-52','-53','-54','-55','-56','-57','-58','-59','-60','-61','-62','-63','-64','-65','-66','-67','-68','-69','-70','-71','-72','-73','-74','-75','-76','-77','-78','-79','-80','-81','-82','-83','-84','-85','-86','-87','-88','-89','-90',],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
        },
        axisLabel : {
            show:true,
            interval: 9//,    // {number}
            //rotate: 45,
           // margin: 8
           
        }
    },{
        type: 'value',
        boundaryGap: false,
        gridIndex: 1,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
            }
        },
        axisTick: {
            show: true
        },
        inverse: true,
        
    }],
    series: [{
        z: 1,
        name: '纵向分布',
        type: 'map',
        map: 'world',
        left: '20%',
        right: '20%',
        //top: 100,
        //bottom: "35%",
        zoom: 0.75,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        roam: true,
        //data: resultdata0
    },{
        name: '纬向分布',
        z: 2,
        type: 'line',
        smooth: true, //是否平滑曲线显示
        symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
        itemStyle: { //折线拐点标志的样式
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
                borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ] 

            }
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        /*itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },*/
        tooltip: {
            trigger: 'item', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        data:[0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0187,0.0309,0.0160,0.0213,0.0128,0.0570,0.2395,0.7574,0.9551,2.3329,3.0699,4.7374,5.5312,6.2760,6.5013,8.6772,7.5541,7.4287,7.4645,8.3163,9.3063,7.4295,6.2113,6.0143,4.7990,5.1848,6.3116,8.2189,8.2480,6.9975,5.8466,5.4849,4.5586,6.0796,8.4692,9.6849,12.1818,9.6149,8.6559,9.0352,7.7340,5.1794,5.1660,6.6773,6.0658,2.3962,1.8867,2.2767,1.7949,1.6910,2.5316,1.9464,1.7699,0.8962,0.6724,0.7997,0.5852,1.1979,1.5227,1.3569,0.8030,0.5752,0.4545,0.7966,0.5978,0.8414,0.7303,0.7518,1.1235,1.1103,1.4353,0.7483,0.7126,0.9944,1.4917,1.0770,0.7263,0.9461,0.8591,0.8081,1.3984,0.9921,4.4202,4.7219,4.1248,2.5007,2.0597,1.6204,1.5902,1.5501,1.7289,1.1778,0.9646,1.2745,1.1787,0.9878,0.7044,1.3972,1.1452,0.8794,0.7846,0.8103,1.3046,0.4960,0.4829,0.4469,0.3335,0.6654,0.8420,1.2790,0.8180,0.7519,1.1408,0.3606,0.9691,0.6542,0.3845,0.3030,0.1541,0.1627,0.3644,0.2154,0.2372,0.2328,0.1393,0.1433,0.1410,0.2503,0.3119,0.1483,0.2241,0.2328,0.1992,0.1180,0.0655,0.0519,0.1158,0.0210,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,]
    },
     {
        name: '经向面积分布',
        z: 2,
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        tooltip: {
            trigger: 'item', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        data:[0.1135,0.1186,0.1342,0.3170,0.3129,0.6149,0.3655,0.5243,0.5873,0.4600,0.4719,0.7773,1.0659,1.1610,1.1354,1.0728,0.9286,0.9638,0.6326,0.5439,0.5134,0.4517,0.6384,0.6821,0.9519,1.1034,1.7664,2.0187,3.9378,3.0840,3.3732,5.1610,3.9565,3.9436,1.8625,1.1036,1.1481,1.1112,0.4577,0.3194,0.2944,0.6687,0.8695,0.4118,1.0435,0.5610,2.0884,4.2312,7.6169,8.6192,7.9054,6.8351,4.3668,0.8948,0.5009,0.6827,0.8260,0.6287,0.8518,0.5843,0.5884,0.3379,0.2971,0.5143,0.7964,0.6594,1.0329,1.1227,1.2197,1.6352,1.3574,1.0382,1.2574,1.4057,1.1883,1.3908,1.8184,1.4624,1.2023,0.9719,1.5619,0.9210,1.0694,0.8698,0.9551,1.0096,1.2623,1.1610,1.2683,1.3831,0.8137,1.0423,0.8252,0.5425,0.8099,0.6214,0.7086,0.7413,0.8049,1.4938,0.9158,1.0665,0.9751,1.0595,1.1184,0.9519,0.9920,1.1851,1.2409,0.4973,0.7500,0.9031,0.8596,0.6542,0.6128,1.0629,1.2728,1.0191,0.9818,1.0900,0.7549,0.4858,0.6755,0.8987,0.6640,0.5053,0.6678,0.5358,0.3561,0.3391,0.2759,0.7523,0.3458,0.3361,0.4344,0.5531,0.4977,0.5171,1.1752,0.9311,0.8947,0.6878,0.5609,0.5506,0.5190,0.6465,0.4844,0.3436,0.3724,0.4766,0.6307,0.4832,0.3842,0.4269,0.4162,0.3424,0.2575,0.3498,0.3890,0.3504,0.1737,0.0800,0.0386,0.0632,0.0509,0.0924,0.1853,0.1408,0.1199,0.1742,0.1766,0.1032,0.1465,0.1615,0.2351,0.1926,0.1696,0.0895,0.0580,0.0249,0.0445,0.0426,0.0770,0.0657,0.0340,0.0514,0.0295,0.0164,0.0363,0.0204,0.0033,0.0051,0.0309,0.1803,0.4381,0.5315,0.3477,0.3303,0.2870,0.2775,0.2936,0.2705,0.5201,0.4933,0.3926,0.2666,0.1948,0.1786,0.1896,0.1399,0.1159,0.0813,0.1425,0.1118,0.0994,0.0917,0.0707,0.0407,0.1091,0.1344,0.1026,0.1067,0.1059,0.2890,0.5507,0.4073,0.4103,0.3653,0.3438,0.3573,0.3338,0.4316,0.6432,0.7921,0.8569,0.7946,1.0746,1.3844,1.4136,1.3235,1.2769,1.2391,1.3161,1.8653,2.0659,1.8437,2.0634,2.0952,2.3495,2.2778,2.1486,2.1829,2.4016,2.4643,2.0858,2.2611,2.5169,2.4162,2.6457,3.0328,3.6500,3.3087,2.4531,2.5733,2.6774,2.4575,1.9980,2.1613,2.5421,2.3384,2.5314,4.7188,5.0941,3.3863,1.6164,2.1708,3.5368,2.9242,2.3437,1.6881,1.5227,2.1739,3.2209,3.0349,3.5044,3.3182,3.2584,3.3198,2.8730,3.0310,2.6980,2.8393,1.8374,1.8778,1.7959,1.9020,2.2296,1.2328,1.6467,1.5409,1.1127,1.4804,1.3071,1.1494,0.9807,0.8322,1.1351,0.8966,0.9835,0.8343,0.6616,0.2675,0.1611,0.3390,0.1651,0.1125,0.2451,0.2687,0.1534,0.1351,0.2136,0.0963,0.0740,0.0290,0.0108,0.0010,0.0003,0.0005,0.0004,0.0040,0.0054,0.0059,0.0216,0.0080,0.0166,0.0188,0.0358,0.0489,0.0592,0.0409,0.0531,0.0137,0.1125,0.1491,0.0682,0.0568,0.0592,0.0423,0.0714,0.0690,0.1267,0.2000,0.1740,0.2452,0.2280,0.1999,0.1008,0.1737,0.4659,0.5191,]
    },
    {
        name: '经向水域率',
        z: 2,
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            emphasis: {
                color: "rgb(254,153,78)"
            }
        },
        tooltip: {
            trigger: 'item', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        data:[0.0026,0.0028,0.0032,0.0075,0.0068,0.0128,0.0076,0.0104,0.0104,0.0079,0.008,0.0114,0.0137,0.0139,0.0129,0.012,0.0105,0.0107,0.007,0.0057,0.0052,0.0045,0.0066,0.007,0.0098,0.0113,0.0179,0.0211,0.0416,0.0332,0.0371,0.0573,0.045,0.0464,0.0235,0.0141,0.0151,0.0147,0.0064,0.005,0.0048,0.0109,0.0135,0.0059,0.0147,0.0081,0.0308,0.0672,0.1367,0.1817,0.178,0.1601,0.1002,0.0203,0.0113,0.0161,0.02,0.0159,0.0229,0.016,0.016,0.0092,0.0081,0.0141,0.022,0.0182,0.0273,0.0286,0.0295,0.0384,0.0321,0.0253,0.0275,0.0282,0.0225,0.025,0.032,0.026,0.0218,0.0182,0.0313,0.0196,0.0233,0.0192,0.0216,0.0231,0.0298,0.0274,0.03,0.0331,0.0195,0.0235,0.0182,0.0112,0.016,0.0122,0.0134,0.0126,0.0129,0.0247,0.0142,0.0162,0.015,0.017,0.018,0.017,0.0188,0.0235,0.0247,0.0096,0.0145,0.0174,0.0162,0.011,0.0095,0.0158,0.0201,0.0182,0.0177,0.0192,0.0139,0.0099,0.0143,0.0183,0.0132,0.0101,0.0135,0.0115,0.0084,0.0076,0.0062,0.0161,0.0072,0.0072,0.0094,0.0126,0.0119,0.0118,0.0266,0.0201,0.0196,0.0131,0.0126,0.0142,0.0141,0.0189,0.015,0.0122,0.0148,0.0221,0.0352,0.0323,0.0482,0.0694,0.0617,0.0383,0.0265,0.0398,0.0447,0.0406,0.0212,0.0126,0.0084,0.0115,0.0091,0.015,0.0267,0.0195,0.0165,0.0243,0.0255,0.0141,0.0227,0.025,0.0291,0.0312,0.0333,0.021,0.0201,0.0141,0.0288,0.0306,0.0555,0.0472,0.0307,0.0377,0.0256,0.0194,0.0783,0.0841,0.0178,0.0143,0.0255,0.0851,0.1229,0.1333,0.0755,0.0585,0.044,0.0388,0.0413,0.0357,0.066,0.0605,0.0549,0.0403,0.0334,0.0328,0.0339,0.0251,0.0219,0.0166,0.0292,0.0223,0.0193,0.0174,0.0136,0.0079,0.0205,0.0251,0.0186,0.0187,0.018,0.0443,0.0798,0.0554,0.0469,0.0428,0.0382,0.0364,0.0317,0.0361,0.0518,0.0612,0.0562,0.0357,0.0446,0.0529,0.0518,0.0482,0.0456,0.0426,0.0422,0.0567,0.0631,0.0553,0.0592,0.0574,0.0648,0.0616,0.0577,0.0567,0.0601,0.0581,0.0472,0.0508,0.0562,0.0535,0.0575,0.0648,0.0767,0.076,0.0642,0.07,0.0763,0.071,0.0579,0.0608,0.0693,0.0624,0.0696,0.1441,0.1614,0.0974,0.0447,0.0638,0.1099,0.0937,0.0722,0.0515,0.0396,0.0454,0.0608,0.0548,0.0602,0.052,0.0454,0.043,0.0338,0.0339,0.0315,0.0349,0.0235,0.0246,0.025,0.0271,0.0331,0.0192,0.0267,0.0258,0.0191,0.0262,0.0242,0.0219,0.0186,0.0161,0.0229,0.0191,0.022,0.0199,0.017,0.0072,0.0045,0.0096,0.0049,0.0034,0.0076,0.0089,0.0055,0.0056,0.0125,0.0066,0.0059,0.0028,0.0019,0.0002,0.0001,0.0001,0.0001,0.0009,0.0012,0.0014,0.0052,0.002,0.0047,0.0048,0.0095,0.0159,0.0232,0.0181,0.026,0.0072,0.0127,0.0092,0.0036,0.0027,0.0025,0.0017,0.0027,0.0021,0.0031,0.0047,0.004,0.0056,0.0051,0.0043,0.0022,0.0037,0.0099,0.0117,]   
    },
    ]
};