app.title = '折柱混合';
//已修正2
option = {
    tooltip: {
        trigger: 'axis'
    },
    dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60 // 右边在 60% 的位置。
    }, { // 这个dataZoom组件，也控制x轴。
        type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60 // 右边在 60% 的位置。
    }],
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Time', 'speed(m/min)']
    },
    xAxis: [{
        type: 'category',
        data: [
'2015-08-18 17:35:03',
'2015-08-18 17:50:03',
'2015-08-18 18:05:03',
'2015-08-18 18:20:03',
'2015-08-18 18:35:03',
'2015-08-18 18:50:03',
'2015-08-18 19:05:03',
'2015-08-18 19:20:03',
'2015-08-18 19:35:03',
'2015-08-18 19:50:03',
'2015-08-18 20:05:03',
'2015-08-18 20:20:03',
'2015-08-18 20:35:03',
'2015-08-18 20:50:03',
'2015-08-18 21:05:03',
'2015-08-18 21:20:03',
'2015-08-18 21:35:03',
'2015-08-18 21:50:03',
'2015-08-18 22:05:03',
'2015-08-18 22:20:03',
'2015-08-18 22:35:03',
'2015-08-18 22:50:03',
'2015-08-18 23:05:03',
'2015-08-18 23:20:03',
'2015-08-18 23:35:03',
'2015-08-18 23:50:03',
'2015-08-19 00:05:03',
'2015-08-19 00:20:03',
'2015-08-19 00:35:03',
'2015-08-19 00:50:03',
'2015-08-19 01:05:03',
'2015-08-19 01:20:03',
'2015-08-19 01:35:03',
'2015-08-19 01:50:03',
'2015-08-19 02:05:03',
'2015-08-19 02:20:03',
'2015-08-19 02:35:03',
'2015-08-19 02:50:03',
'2015-08-19 03:05:03',
'2015-08-19 03:20:03',
'2015-08-19 03:35:03',
'2015-08-19 03:50:03',
'2015-08-19 04:05:03',
'2015-08-19 04:20:03',
'2015-08-19 04:35:03',
'2015-08-19 04:50:03',
'2015-08-19 05:05:03',
'2015-08-19 05:20:03',
'2015-08-19 05:35:03',
'2015-08-19 05:50:03',
'2015-08-19 06:05:03',
'2015-08-19 06:20:03',
'2015-08-19 06:35:03',
'2015-08-19 06:50:03',
'2015-08-19 07:05:03',
'2015-08-19 07:20:03',
'2015-08-19 07:35:03',
'2015-08-19 07:50:03',
'2015-08-19 08:05:03',
'2015-08-19 08:20:03',
'2015-08-19 08:35:03',
'2015-08-19 08:50:03',
'2015-08-19 09:05:03',
'2015-08-19 09:20:03',
'2015-08-19 09:35:03',
'2015-08-19 09:50:03',
'2015-08-19 10:05:03',
'2015-08-19 10:20:03',
'2015-08-19 10:35:03',
'2015-08-19 10:50:03',
'2015-08-19 11:05:03',
'2015-08-19 11:20:03',
'2015-08-19 11:35:03',
'2015-08-19 11:50:03',
'2015-08-19 12:05:03',
'2015-08-19 12:20:03',
'2015-08-19 12:35:03',
'2015-08-19 12:50:03',
'2015-08-19 13:05:03',
'2015-08-19 13:20:03',
'2015-08-19 13:35:03',
'2015-08-19 13:50:03',
'2015-08-19 14:05:03',
'2015-08-19 14:20:03',
'2015-08-19 14:35:03',
'2015-08-19 14:50:03',
'2015-08-19 15:05:03',
'2015-08-19 15:20:03',
'2015-08-19 15:35:03',
'2015-08-19 15:50:03',
'2015-08-19 16:05:03',
'2015-08-19 16:20:03',
'2015-08-19 16:35:03',
'2015-08-19 16:50:03',
'2015-08-19 17:05:03',
'2015-08-19 17:20:03',
'2015-08-19 17:35:03',
'2015-08-19 17:50:03',
'2015-08-19 18:05:03',
'2015-08-19 18:20:03',
'2015-08-19 18:35:03',
'2015-08-19 18:50:03',
'2015-08-19 19:05:03',
'2015-08-19 19:20:03',
'2015-08-19 19:35:03',
'2015-08-19 19:50:03',
'2015-08-19 20:05:03',
'2015-08-19 20:20:03',
'2015-08-19 20:35:03',
'2015-08-19 20:50:03',
'2015-08-19 21:05:03',
'2015-08-19 21:20:03',
'2015-08-19 21:35:03',
'2015-08-19 21:50:03',
'2015-08-19 22:05:03',
'2015-08-19 22:20:03',
'2015-08-19 22:35:03',
'2015-08-19 22:50:03',
'2015-08-19 23:05:03',



        ]
    }],
    yAxis: [{
        type: 'value',
        name: 'group',
        min: 0,
        max: 5000,
        axisLabel: {
            formatter: '{value} '
        }
    }, {
        type: 'value',
        name: 'speed(m/min)',
        min: 0,
        max: 1000,
        axisLabel: {
            formatter: '{value}m/min '
        }
    }],
    series: [{
        name: 'group',
        type: 'bar',
        //yAxisIndex: 1,
        data: [3, 4, 4, 7, 8, 6, 7, 5, 10, 8, 11, 12, 15, 14, 1259, 1116, 925, 741, 576, 414, 279, 193, 129, 118, 81, 62, 26, 21, 16, 20, 18, 15, 11, 12, 10, 8, 6, 8, 9, 8, 9, 14, 39, 106, 265, 507, 779, 1109, 1551, 1960, 2420, 2843, 3194, 3497, 3701, 3813, 3902, 3919, 3922, 3932, 3882, 3875, 3828, 3752, 3711, 3651, 3604, 3576, 3519, 3430, 3371, 3312, 3283, 3208, 3144, 3146, 3122, 3110, 3071, 3040, 3071, 3092, 3130, 3167, 3191, 3168, 3195, 3266, 3320, 3378, 3461, 3520, 3594, 3644, 3673, 3680, 3662, 3650, 3581, 3533, 3419, 3272, 3167, 3015, 2823, 2600, 2394, 2150, 1888, 1658, 1421, 1174, 950, 769, 607, 2, 1, 0, 0
]   },
{
        name: 'speed(m/min)',
        type: 'line',
        yAxisIndex: 1,
        data: [0.0, 112.86870218959162, 58.682221003009346, 283.40938522794596, 264.476455986056, 232.20900186838537, 281.19944342221277, 181.9836923321053, 154.32267821566614, 206.45915495063542, 247.25647042057807, 191.1947868619922, 192.64324442214647, 288.88822786676496, 383.52725733398154, 380.55731004018406, 379.3302592173479, 369.1905914251288, 373.7558533275165, 376.47353465552214, 359.5707481869513, 352.90801543454114, 304.7993874097505, 159.49462914028763, 116.84546855670291, 124.96776166160649, 219.6950620574998, 209.05260155068544, 205.73344851170026, 80.16301702899801, 127.9196654066902, 154.22100950401477, 250.0927414523997, 206.42477766541174, 192.1839204046193, 118.63736605291592, 98.21930653602726, 83.72393129403889, 83.03754654028629, 34.68765743152068, 122.95178653516375, 163.32280818599338, 137.7994408617654, 135.98310301966887, 198.94290781810665, 238.8212572710351, 311.0163711871146, 356.6355436026143, 371.32982917207386, 382.6408051785225, 396.7981554759607, 394.7916219782183, 393.7481100632976, 386.6700743815112, 389.41328459468195, 384.4375218482728, 365.6905171909144, 350.46490528821477, 345.4675453363296, 349.51703291906455, 355.6581037627208, 361.9738554678745, 365.5808705514569, 357.86123811983623, 371.895920008509, 373.04366911962717, 374.6785575541525, 372.1963722270591, 375.12929726866565, 369.9398777187067, 374.75280965235254, 375.11370553975763, 379.2227326423628, 381.80424705904005, 387.3608977397955, 384.51991031908375, 389.64447021988076, 390.9628359996296, 380.6389182646728, 377.9986320305075, 369.7505724082297, 367.1038454869228, 369.64080444154536, 368.82211807273023, 375.9242289022967, 379.6270829840461, 383.0929251443204, 377.32619680966644, 378.65227763545147, 377.09693062076354, 381.20301810039166, 388.1438030460803, 390.26607601593156, 389.54868835525247, 390.616105212191, 375.53265357548463, 373.2216579455574, 376.00933420422103, 376.43137740376085, 384.40838573305183, 398.2108166921237, 400.8506487133314, 401.7248135629659, 398.97616907146363, 396.3379374669369, 385.9021397325696, 391.94773498349565, 394.66669121994863, 390.77261028952614, 385.27843707840583, 384.60400859791605, 380.1410765088143, 374.9640988913412, 360.2274674139515, 364.2761903335283, 0, 0, 0, 0
]    }/*{
        name: 'speed(m/min)',
        type: 'line',
        data: [0.0, 69.6529161710857, 318.2759427656147, 171.49001559772893, 188.0268992490197, 339.42986474959537, 240.68967877053342, 228.50624781336145, 206.99801518036665, 193.51226553089253, 225.58319452711575, 167.96146455393202, 207.78988857036606, 188.58765681746493, 298.7391331275312, 282.93869070422693, 244.47751046391227, 233.59993436779317, 222.14070729471592, 211.60267008262753, 181.3836882571177, 157.73613749771587, 140.892409957325, 112.57456275636241, 96.00444016229794, 82.51527499123469, 54.01997691097203, 61.00072150675817, 86.1262637031219, 72.26949680221698, 91.10054778692101, 111.51001362629671, 85.95013622702946, 124.97078909003963, 120.75668890018984, 79.17688140336034, 67.72253077035414, 21.630952118532083, 13.868740251662297, 15.301169617942, 23.439078079223187, 14.458909062731164, 9.16087949739492, 24.45284027956526, 15.05283795207305, 48.46474870936043, 47.85610084975943, 97.57129550502513, 184.37389857704534, 222.58014056938282, 231.68815875812723, 231.39932147696655, 238.47671997185338, 238.87546905148986, 235.64242713521313, 229.80919888768358, 221.94387966483674, 214.05725849474416, 207.08311345825413, 212.2701372738831, 212.80864488834257, 219.91613620383484, 220.27022329740558, 224.04509242087772, 225.01449601304077, 220.3731793557828, 210.82799593178444, 213.29975608273094, 214.74484063308267, 215.88178689878058, 205.72804711117962, 198.925331245655, 214.04087251203904, 217.9074443224964, 222.91771609597927, 224.9940382986558, 214.83893433713985, 221.40014070004023, 215.37582995791854, 205.49335577483603, 210.0592422962401, 214.92983112390482, 214.30009454189027, 214.28226118793685, 220.30338507499926, 215.4903719111466, 223.75497689145928, 227.87885428406508, 233.28011428030646, 227.74694620100695, 230.78557544470902, 230.3629753325236, 231.17969615035753, 235.29749902884956, 227.7914663271955, 225.9199244164338, 213.92924652055794, 217.06271150722284, 210.18727839393847, 216.38219125309706, 221.08342540561705, 220.41826007627475, 225.49379947745103, 223.4434492444689, 224.82149562438062, 220.62095344478942, 222.45910071150982, 226.10031316372715, 227.68183104904, 226.75596835137773, 234.21749453415586, 235.89961933343662, 227.52185492203148, 222.50281614219028, 216.83564670243825, 192.53953459270568, 174.2267833739287, 160.8655363770933, 139.99957928004648
]    }*/]
};