option = {
    title: {
        text: '誉达⑧号量化指数'
    },
    tooltip: {
        trigger: 'axis'
    },
    color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322", "#000000", '#EE7942'],
    legend: {
        data: ['誉达⑧号', '上证指数', '深证指数', '中小板指', '沪深300', '创业板指']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017/1/4','2017/1/5','2017/1/6','2017/1/9','2017/1/10','2017/1/11','2017/1/12','2017/1/13','2017/1/16','2017/1/17','2017/1/18','2017/1/19','2017/1/20','2017/1/23','2017/1/24','2017/1/25','2017/1/26','2017/2/3','2017/2/6','2017/2/7','2017/2/8','2017/2/9','2017/2/10','2017/2/13','2017/2/14','2017/2/15','2017/2/16','2017/2/17','2017/2/20','2017/2/21','2017/2/22','2017/2/23','2017/2/24','2017/2/27','2017/2/28','2017/3/1','2017/3/2','2017/3/3','2017/3/6','2017/3/7','2017/3/8','2017/3/9','2017/3/10','2017/3/13','2017/3/14','2017/3/15','2017/3/16','2017/3/17','2017/3/20','2017/3/21','2017/3/22','2017/3/23','2017/3/24','2017/3/27','2017/3/28','2017/3/29','2017/3/30',]
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        min: 0.895,
        max: 1.05
    }],
    dataZoom: [{
        type: 'inside',
        start: 50,
        end: 100
    }, {
        show: true,
        type: 'slider',
        y: '90%',
        start: 50,
        end: 100
    }],
    series: [{
        name: '誉达⑧号',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,1.000189772,1.000189772,1.000189772,0.997939063,0.992537318,0.989490199,0.974977926,0.947689785,0.949880506,0.939629408,0.938309442,0.954201666,0.961593974,0.953704128,0.960966424,0.966994688,0.961488245,0.974180387,0.969524378,0.977555209,0.985048641,0.979408321,0.98731151,0.987566987,0.982467755,0.984364755,0.974682889,0.978588078,0.990235702,0.992904632,0.995295972,1.001662299,0.997080908,0.99913516,1.002877968,0.998727702,1.002154483,1.013609497,1.02264329,1.016936656,1.011476882,1.011922471,1.016590653,1.014508068,1.014950891,1.025584354,1.021197338,1.021586718,1.020461641,1.012207566,1.010837258,1.013660213,1.011252066,1.008903598,0.998818425,0.974263608,]
    }, {
        name: '上证指数',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,1.002095739,0.998584901,1.003941383,1.000911742,0.993022645,0.987495212,0.985427965,0.982474302,0.984164823,0.985507109,0.981799993,0.988714033,0.993028976,0.994858791,0.997074829,1.000120299,0.994105338,0.999426996,0.998195512,1.002592765,1.007721311,1.012001431,1.01837729,1.018722359,1.017158469,1.022423143,1.013704615,1.025696548,1.029929182,1.032426974,1.029311857,1.029960839,1.022119229,1.02625689,1.027903089,1.02255294,1.018842658,1.023768595,1.026472162,1.025918152,1.018348798,1.017085656,1.024765812,1.025497105,1.026266387,1.034870947,1.02490194,1.029131408,1.032550439,1.027361743,1.028415944,1.035032402,1.034244125,1.029808883,1.026123927,1.016287882,]
    }, {
        name: '深证指数',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,0.998709661,0.990802966,0.994888718,0.992438037,0.98368877, 0.975576006,0.963738593,0.935283735,0.946260281,0.944138925,0.940654048,0.953901204,0.960646595,0.957310973,0.960817035,0.967951452,0.963405416,0.970520575,0.968290407,0.97546912,0.980535144,0.980886617,0.98901864,0.988449542,0.980007453,0.987394161,0.981997849,0.994620058,1.002010617,1.005730452,1.004599961,1.005667861,0.996984074,1.000623022,1.00324992,0.998309078,1.001216192,1.01323175,1.016107087,1.010923584,1.003484878,1.006368881,1.016852402,1.014141727,1.015227923,1.023067212,1.01257021,1.014199504,1.019427301,1.016240935,1.019082569,1.025214567,1.01897472,1.017180764,1.013091161,0.996475642]
    }, {
        name: '沪深300',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,0.99984562,0.993872298,0.998690738,0.997019277,0.989962325,0.98495091,0.985630776,0.985494209,0.987545683,0.991408154,0.988415556,0.996015806,0.998744177,0.998854025,1.002253356,1.005833786,0.9988659,1.001454735,0.999219193,1.004447334,1.008306836,1.013413255,1.020179259,1.020036754,1.015853648,1.021559773,1.015773489,1.030602884,1.033996277,1.036056657,1.031175872,1.031333221,1.023130294,1.025086765,1.026758226,1.019828935,1.017679489,1.023207484,1.025428182,1.023875475,1.017406355,1.017688396,1.026657285,1.026238678,1.028302027,1.033607358,1.023008571,1.024136733,1.029106585,1.024267363,1.027809198,1.036009156,1.032577168,1.030133806,1.028762198,1.020321764,]
    }, {
        name: '创业板指',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,0.996183915,0.98667383,0.984961613,0.979970576,0.972875671,0.969154988,0.953991072,0.919299849,0.937888199,0.926801468,0.925972976,0.944355458,0.947654363,0.934549125,0.939309188,0.947107056,0.942352014,0.954247152,0.948563194,0.955843882,0.961090999,0.956371104,0.960890152,0.958741094,0.95018503,0.952831183,0.945419945,0.951490533,0.964605814,0.964048464,0.96705112,0.973322555,0.967462856,0.967658681,0.970073861,0.964264374,0.968226073,0.985539047,0.993110963,0.986472984,0.981105359,0.979132042,0.989611211,0.983153994,0.983053571,0.987527428,0.978956301,0.981045105,0.984680428,0.978414015,0.978308571,0.986729063,0.977886793,0.976295084,0.968682999,0.950857866,]
    }, {
        name: '中小板指',
        type: 'line',
        lineStyle: {
            normal: {
                width: 2,
            }
        },
        data: [1,0.998019757,0.987854913,0.991880549,0.98953062,0.981986909,0.971996303,0.958230054,0.931312687,0.941663889,0.94031393,0.937300385,0.9492879,0.953963516,0.950740887,0.954563498,0.960786037,0.959904245,0.966881307,0.963942002,0.971902367,0.976520408,0.976073452,0.984771674,0.98557468,0.977099179,0.984674707,0.979583952,0.991826005,0.999478804,1.004351383,1.004192297,1.005313475,0.99999394,1.003848368,1.006117996,1.003577164,1.011981455,1.023061422,1.02445835,1.018207024,1.011525408,1.01786461,1.031509651,1.029009727,1.028274901,1.036323142,1.024181085,1.024525014,1.030397564,1.028162783,1.03178237,1.039547286,1.034761068,1.031980849,1.029324869,1.011601164,]
    }]
};