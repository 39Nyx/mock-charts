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
'2015-08-12 17:35:03',
'2015-08-12 17:50:03',
'2015-08-12 18:05:03',
'2015-08-12 18:20:03',
'2015-08-12 18:35:03',
'2015-08-12 18:50:03',
'2015-08-12 19:05:03',
'2015-08-12 19:20:03',
'2015-08-12 19:35:03',
'2015-08-12 19:50:03',
'2015-08-12 20:05:03',
'2015-08-12 20:20:03',
'2015-08-12 20:35:03',
'2015-08-12 20:50:03',
'2015-08-12 21:05:03',
'2015-08-12 21:20:03',
'2015-08-12 21:35:03',
'2015-08-12 21:50:03',
'2015-08-12 22:05:03',
'2015-08-12 22:20:03',
'2015-08-12 22:35:03',
'2015-08-12 22:50:03',
'2015-08-12 23:05:03',
'2015-08-12 23:20:03',
'2015-08-12 23:35:03',
'2015-08-12 23:50:03',
'2015-08-13 00:05:03',
'2015-08-13 00:20:03',
'2015-08-13 00:35:03',
'2015-08-13 00:50:03',
'2015-08-13 01:05:03',
'2015-08-13 01:20:03',
'2015-08-13 01:35:03',
'2015-08-13 01:50:03',
'2015-08-13 02:05:03',
'2015-08-13 02:20:03',
'2015-08-13 02:35:03',
'2015-08-13 02:50:03',
'2015-08-13 03:05:03',
'2015-08-13 03:20:03',
'2015-08-13 03:35:03',
'2015-08-13 03:50:03',
'2015-08-13 04:05:03',
'2015-08-13 04:20:03',
'2015-08-13 04:35:03',
'2015-08-13 04:50:03',
'2015-08-13 05:05:03',
'2015-08-13 05:20:03',
'2015-08-13 05:35:03',
'2015-08-13 05:50:03',
'2015-08-13 06:05:03',
'2015-08-13 06:20:03',
'2015-08-13 06:35:03',
'2015-08-13 06:50:03',
'2015-08-13 07:05:03',
'2015-08-13 07:20:03',
'2015-08-13 07:35:03',
'2015-08-13 07:50:03',
'2015-08-13 08:05:03',
'2015-08-13 08:20:03',
'2015-08-13 08:35:03',
'2015-08-13 08:50:03',
'2015-08-13 09:05:03',
'2015-08-13 09:20:03',
'2015-08-13 09:35:03',
'2015-08-13 09:50:03',
'2015-08-13 10:05:03',
'2015-08-13 10:20:03',
'2015-08-13 10:35:03',
'2015-08-13 10:50:03',
'2015-08-13 11:05:03',
'2015-08-13 11:20:03',
'2015-08-13 11:35:03',
'2015-08-13 11:50:03',
'2015-08-13 12:05:03',
'2015-08-13 12:20:03',
'2015-08-13 12:35:03',
'2015-08-13 12:50:03',
'2015-08-13 13:05:03',
'2015-08-13 13:20:03',
'2015-08-13 13:35:03',
'2015-08-13 13:50:03',
'2015-08-13 14:05:03',
'2015-08-13 14:20:03',
'2015-08-13 14:35:03',
'2015-08-13 14:50:03',
'2015-08-13 15:05:03',
'2015-08-13 15:20:03',
'2015-08-13 15:35:03',
'2015-08-13 15:50:03',
'2015-08-13 16:05:03',
'2015-08-13 16:20:03',
'2015-08-13 16:35:03',
'2015-08-13 16:50:03',
'2015-08-13 17:05:03',
'2015-08-13 17:20:03',
'2015-08-13 17:35:03',
'2015-08-13 17:50:03',
'2015-08-13 18:05:03',
'2015-08-13 18:20:03',
'2015-08-13 18:35:03',
'2015-08-13 18:50:03',
'2015-08-13 19:05:03',
'2015-08-13 19:20:03',
'2015-08-13 19:35:03',
'2015-08-13 19:50:03',
'2015-08-13 20:05:03',
'2015-08-13 20:20:03',
'2015-08-13 20:35:03',
'2015-08-13 20:50:03',
'2015-08-13 21:05:03',
'2015-08-13 21:20:03',
'2015-08-13 21:35:03',
'2015-08-13 21:50:03',
'2015-08-13 22:05:03',
'2015-08-13 22:20:03',
'2015-08-13 22:35:03',
'2015-08-13 22:50:03',
'2015-08-13 23:05:03',



        ]
    }],
    yAxis: [{
        type: 'value',
        name: 'group',
        min: 0,
        max: 1000,
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
        data: [3, 3, 4, 5, 4, 3, 4, 4, 5, 5, 9, 8, 4, 5, 11, 448, 407, 356, 311, 263, 221, 166, 135, 90, 63, 43, 33, 25, 11, 9, 8, 8, 8, 8, 9, 8, 9, 9, 9, 10, 9, 9, 10, 8, 8, 20, 53, 114, 197, 279, 367, 476, 565, 655, 744, 822, 862, 885, 898, 909, 914, 913, 914, 897, 885, 865, 852, 827, 792, 768, 738, 708, 679, 641, 617, 591, 584, 566, 547, 536, 549, 558, 570, 577, 599, 606, 630, 670, 691, 719, 750, 786, 801, 836, 847, 875, 878, 873, 876, 857, 851, 830, 813, 777, 738, 700, 663, 613, 569, 527, 471, 432, 390, 339, 301, 244, 197, 150, 103
]   },
{
        name: 'speed(m/min)',
        type: 'line',
        data: [250.2197918351308, 231.87104538702454, 257.8757200191161, 342.2675082312855, 324.194195966831, 114.49390924003114, 98.33083631777076, 235.4995338546914, 245.9563691504356, 220.74963147021998, 146.43759545833743, 184.69193507873567, 296.32969841158274, 279.36356328642586, 277.24533183735815, 228.70309933183498, 231.37160422579535, 227.49668667547934, 232.67005182779533, 206.94437983881033, 200.9308120797289, 175.6246181960441, 166.05729178614052, 150.7522134457272, 155.8638908054895, 102.54663137296761, 32.68541210268073, 33.156620801905596, 39.47727798977061, 13.991217173843285, 6.869457788005775, 28.765909156074738, 38.04118261018438, 39.78850100224868, 41.57653620599877, 43.95678918728557, 33.53611187641656, 48.65060897804266, 56.122097209138, 53.66093414403817, 78.88734441010615, 56.99032331152142, 46.77488918334805, 37.73210251395112, 34.207362732436096, 33.052260087189204, 73.3756132516017, 121.68626791812791, 185.26755375943577, 222.1115549476503, 240.46539834616186, 244.69534333148215, 248.2749600161052, 252.83959864150088, 251.22400138724015, 246.97954112343228, 243.2266454903808, 237.01557067257164, 227.66639609727002, 227.5969701048604, 225.29864263854458, 226.0225444489045, 228.27253376571448, 226.9668573411205, 225.80513776070688, 225.18982716548362, 221.16518057113348, 220.1340595353125, 230.92858051400137, 229.23540049896707, 226.19261242602724, 228.42294420150856, 236.59246703398296, 234.28636995981142, 231.7198937692493, 235.4328197073481, 227.03034432840383, 231.70622750828065, 238.28003414471326, 226.57475289297895, 228.90484357170337, 229.53559501517987, 230.4542166824584, 234.42725704116987, 241.9699663582831, 240.4183761723412, 237.9888574544073, 235.8059992996244, 241.1226424228789, 240.3822614268564, 239.90630249742767, 236.511159365258, 237.12162459122817, 241.50170109757516, 234.82051784906258, 237.5251723815091, 226.76477289189137, 228.61306456843735, 220.36004757016715, 223.12298364053427, 221.5954716897775, 224.2013606237866, 229.81212297504533, 227.08613735479577, 235.51000542294176, 229.73565527456148, 223.33166227835537, 236.04676781709975, 236.32836960399564, 238.02238175260032, 238.914292237957, 239.38504091172956, 249.4248087975167, 250.2346167734031, 235.4599652581296, 223.00037531541193, 202.58530247067145, 185.69282113566726, 155.17762569151606
]    }/*{
        name: 'speed(m/min)',
        type: 'line',
        data: [0.0, 69.6529161710857, 318.2759427656147, 171.49001559772893, 188.0268992490197, 339.42986474959537, 240.68967877053342, 228.50624781336145, 206.99801518036665, 193.51226553089253, 225.58319452711575, 167.96146455393202, 207.78988857036606, 188.58765681746493, 298.7391331275312, 282.93869070422693, 244.47751046391227, 233.59993436779317, 222.14070729471592, 211.60267008262753, 181.3836882571177, 157.73613749771587, 140.892409957325, 112.57456275636241, 96.00444016229794, 82.51527499123469, 54.01997691097203, 61.00072150675817, 86.1262637031219, 72.26949680221698, 91.10054778692101, 111.51001362629671, 85.95013622702946, 124.97078909003963, 120.75668890018984, 79.17688140336034, 67.72253077035414, 21.630952118532083, 13.868740251662297, 15.301169617942, 23.439078079223187, 14.458909062731164, 9.16087949739492, 24.45284027956526, 15.05283795207305, 48.46474870936043, 47.85610084975943, 97.57129550502513, 184.37389857704534, 222.58014056938282, 231.68815875812723, 231.39932147696655, 238.47671997185338, 238.87546905148986, 235.64242713521313, 229.80919888768358, 221.94387966483674, 214.05725849474416, 207.08311345825413, 212.2701372738831, 212.80864488834257, 219.91613620383484, 220.27022329740558, 224.04509242087772, 225.01449601304077, 220.3731793557828, 210.82799593178444, 213.29975608273094, 214.74484063308267, 215.88178689878058, 205.72804711117962, 198.925331245655, 214.04087251203904, 217.9074443224964, 222.91771609597927, 224.9940382986558, 214.83893433713985, 221.40014070004023, 215.37582995791854, 205.49335577483603, 210.0592422962401, 214.92983112390482, 214.30009454189027, 214.28226118793685, 220.30338507499926, 215.4903719111466, 223.75497689145928, 227.87885428406508, 233.28011428030646, 227.74694620100695, 230.78557544470902, 230.3629753325236, 231.17969615035753, 235.29749902884956, 227.7914663271955, 225.9199244164338, 213.92924652055794, 217.06271150722284, 210.18727839393847, 216.38219125309706, 221.08342540561705, 220.41826007627475, 225.49379947745103, 223.4434492444689, 224.82149562438062, 220.62095344478942, 222.45910071150982, 226.10031316372715, 227.68183104904, 226.75596835137773, 234.21749453415586, 235.89961933343662, 227.52185492203148, 222.50281614219028, 216.83564670243825, 192.53953459270568, 174.2267833739287, 160.8655363770933, 139.99957928004648
]    }*/]
};