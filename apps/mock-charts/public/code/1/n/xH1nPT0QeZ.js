app.title = '折柱混合';
//已修正
option = {
    tooltip: {
        trigger: 'axis'
    },
    dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
        },
        {   // 这个dataZoom组件，也控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
        }
    ],
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['Time','speed(m/min)']
    },
    xAxis: [
        {
            type: 'category',
            data: [
'2015-08-15 17:35:03',
'2015-08-15 17:50:03',
'2015-08-15 18:05:03',
'2015-08-15 18:20:03',
'2015-08-15 18:35:03',
'2015-08-15 18:50:03',
'2015-08-15 19:05:03',
'2015-08-15 19:20:03',
'2015-08-15 19:35:03',
'2015-08-15 19:50:03',
'2015-08-15 20:05:03',
'2015-08-15 20:20:03',
'2015-08-15 20:35:03',
'2015-08-15 20:50:03',
'2015-08-15 21:05:03',
'2015-08-15 21:20:03',
'2015-08-15 21:35:03',
'2015-08-15 21:50:03',
'2015-08-15 22:05:03',
'2015-08-15 22:20:03',
'2015-08-15 22:35:03',
'2015-08-15 22:50:03',
'2015-08-15 23:05:03',
'2015-08-15 23:20:03',
'2015-08-15 23:35:03',
'2015-08-15 23:50:03',
'2015-08-16 00:05:03',
'2015-08-16 00:20:03',
'2015-08-16 00:35:03',
'2015-08-16 00:50:03',
'2015-08-16 01:05:03',
'2015-08-16 01:20:03',
'2015-08-16 01:35:03',
'2015-08-16 01:50:03',
'2015-08-16 02:05:03',
'2015-08-16 02:20:03',
'2015-08-16 02:35:03',
'2015-08-16 02:50:03',
'2015-08-16 03:05:03',
'2015-08-16 03:20:03',
'2015-08-16 03:35:03',
'2015-08-16 03:50:03',
'2015-08-16 04:05:03',
'2015-08-16 04:20:03',
'2015-08-16 04:35:03',
'2015-08-16 04:50:03',
'2015-08-16 05:05:03',
'2015-08-16 05:20:03',
'2015-08-16 05:35:03',
'2015-08-16 05:50:03',
'2015-08-16 06:05:03',
'2015-08-16 06:20:03',
'2015-08-16 06:35:03',
'2015-08-16 06:50:03',
'2015-08-16 07:05:03',
'2015-08-16 07:20:03',
'2015-08-16 07:35:03',
'2015-08-16 07:50:03',
'2015-08-16 08:05:03',
'2015-08-16 08:20:03',
'2015-08-16 08:35:03',
'2015-08-16 08:50:03',
'2015-08-16 09:05:03',
'2015-08-16 09:20:03',
'2015-08-16 09:35:03',
'2015-08-16 09:50:03',
'2015-08-16 10:05:03',
'2015-08-16 10:20:03',
'2015-08-16 10:35:03',
'2015-08-16 10:50:03',
'2015-08-16 11:05:03',
'2015-08-16 11:20:03',
'2015-08-16 11:35:03',
'2015-08-16 11:50:03',
'2015-08-16 12:05:03',
'2015-08-16 12:20:03',
'2015-08-16 12:35:03',
'2015-08-16 12:50:03',
'2015-08-16 13:05:03',
'2015-08-16 13:20:03',
'2015-08-16 13:35:03',
'2015-08-16 13:50:03',
'2015-08-16 14:05:03',
'2015-08-16 14:20:03',
'2015-08-16 14:35:03',
'2015-08-16 14:50:03',
'2015-08-16 15:05:03',
'2015-08-16 15:20:03',
'2015-08-16 15:35:03',
'2015-08-16 15:50:03',
'2015-08-16 16:05:03',
'2015-08-16 16:20:03',
'2015-08-16 16:35:03',
'2015-08-16 16:50:03',
'2015-08-16 17:05:03',
'2015-08-16 17:20:03',
'2015-08-16 17:35:03',
'2015-08-16 17:50:03',
'2015-08-16 18:05:03',
'2015-08-16 18:20:03',
'2015-08-16 18:35:03',
'2015-08-16 18:50:03',
'2015-08-16 19:05:03',
'2015-08-16 19:20:03',
'2015-08-16 19:35:03',
'2015-08-16 19:50:03',
'2015-08-16 20:05:03',
'2015-08-16 20:20:03',
'2015-08-16 20:35:03',
'2015-08-16 20:50:03',
'2015-08-16 21:05:03',
'2015-08-16 21:20:03',
'2015-08-16 21:35:03',
'2015-08-16 21:50:03',
'2015-08-16 22:05:03',
'2015-08-16 22:20:03',
'2015-08-16 22:35:03',
'2015-08-16 22:50:03',
'2015-08-16 23:05:03',



]
        }
    ],
    yAxis: [
       {
            type: 'value',
            name: 'group',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: 'speed(m/min)',
            min: 0,
            max: 5000,
            axisLabel: {
                formatter: '{value}m/min '
            }
        }
    ],
    series: [
        {
            name:'group',
            type:'bar',
            //yAxisIndex: 1,
            data:[0, 0, 0, 0, 0, 1, 1, 0, 3, 4, 3, 2, 2, 1, 1, 183, 166, 162, 133, 106, 85, 68, 52, 33, 19, 12, 8, 7, 6, 5, 5, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 4, 4, 5, 11, 26, 45, 68, 93, 132, 167, 208, 241, 268, 297, 320, 351, 382, 406, 417, 430, 444, 451, 441, 435, 429, 407, 415, 405, 394, 383, 363, 334, 317, 307, 306, 292, 298, 303, 306, 314, 314, 318, 339, 362, 370, 391, 400, 413, 413, 428, 420, 426, 405, 391, 385, 367, 362, 362, 336, 329, 326, 300, 295, 276, 271, 261, 253, 236, 214, 192, 179, 155, 131, 107, 80, 62, 47
]},
        {
            name:'speed(m/min)',
            type:'line',
            data:[0, 0, 0, 0, 0, 0.0, 7.989382734729692, 0, 103.43362029844879, 255.64962006388197, 312.34441117868124, 239.54074757212248, 349.0362330939791, 277.7432845638387, 348.63417860006916, 270.0938879983336, 279.80434105077507, 248.06516173296814, 251.6397346515288, 229.6027268064594, 190.26997271893867, 149.673699700126, 102.94948698611125, 72.67823401731245, 69.79882356462207, 37.619362739084686, 52.254050313193616, 109.92972939438536, 98.76384704737178, 60.06839467439278, 70.40118950587954, 2.9623213554798653, 3.7281434513326444, 4.097472667106078, 3.3969125917837295, 2.39344579244341, 40.85356710509428, 53.03220385375437, 73.57428214479296, 77.61052736741767, 43.55555946566067, 3.5706861152117417, 3.6816935814214253, 4.042817521423736, 2.128930860430592, 66.89730749959345, 64.35829843410353, 141.72919838321974, 192.37699003030068, 242.73860776201496, 248.2490387211688, 256.673411243682, 270.2689084067528, 263.0332253363304, 270.13634875675336, 269.07407089595597, 269.39426064859384, 262.95216471437277, 262.61814101457406, 260.5008420085763, 264.8228356812349, 270.72379015737386, 266.6219903344924, 253.71815944946835, 249.68479864722815, 244.8560568554016, 231.63767702449886, 245.52073725516476, 245.361070916403, 238.09202852583059, 236.31015520962717, 235.3965177840162, 244.2301221577465, 250.0566812802588, 238.41001497312146, 232.0831339914495, 241.18263248796947, 244.72008427219268, 242.38867390088376, 238.51177038598013, 241.70246779659075, 241.07616011470853, 242.11630549563748, 252.1128447330634, 250.89502233061347, 254.49502782847992, 258.87784623605216, 252.2634697122193, 255.5277744480828, 253.03260850646927, 260.17406507034343, 265.62082814298566, 261.91598179587515, 255.69876131804423, 248.69059639402647, 254.13895163565167, 246.30232394782757, 251.2981872557514, 252.42891170305444, 245.27325821127917, 240.79358120893835, 246.90406386877967, 250.19291805599914, 244.66453733476504, 232.13655892575733, 238.6767635778727, 237.32296334398805, 239.69188398841007, 240.05525300651232, 244.62453067740907, 250.7460820215149, 248.4530604041773, 251.9194657761141, 253.61273433613425, 229.13596511109435, 200.8274950394566, 183.35507001329898, 135.67412702244704, 83.86741132882548
]}
    ]
};