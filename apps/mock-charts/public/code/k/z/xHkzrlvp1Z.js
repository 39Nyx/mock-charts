app.title = '折柱混合';
//已修正
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
        data: ['Time', 'speed3(m/min)','speed','group','group3']
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
    }, 
  {
        type: 'value',
        name: 'speed3(m/min)',
        min: 0,
        max: 1000,
        axisLabel: {
            formatter: '{value}m/min '
        }
    }],
    series: [
        {
        name: 'group3',
        type: 'bar',
        
        data: [1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 58, 65, 62, 52, 45, 30, 26, 22, 16, 16, 9, 6, 4, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 1, 5, 8, 17, 31, 40, 72, 72, 101, 120, 121, 133, 151, 145, 146, 155, 157, 146, 147, 132, 114, 127, 117, 121, 111, 113, 105, 110, 98, 94, 99, 88, 86, 85, 83, 87, 88, 89, 85, 95, 95, 107, 106, 111, 118, 109, 127, 120, 139, 142, 140, 137, 141, 143, 146, 135, 131, 133, 123, 114, 108, 102, 100, 91, 78, 79, 68, 69, 62, 47, 39, 32, 21, 16
]  },
        {
        name: 'group',
        type: 'bar',
        
        data: [3, 3, 4, 5, 4, 3, 4, 4, 5, 5, 9, 8, 4, 5, 11, 448, 407, 356, 311, 263, 221, 166, 135, 90, 63, 43, 33, 25, 11, 9, 8, 8, 8, 8, 9, 8, 9, 9, 9, 10, 9, 9, 10, 8, 8, 20, 53, 114, 197, 279, 367, 476, 565, 655, 744, 822, 862, 885, 898, 909, 914, 913, 914, 897, 885, 865, 852, 827, 792, 768, 738, 708, 679, 641, 617, 591, 584, 566, 547, 536, 549, 558, 570, 577, 599, 606, 630, 670, 691, 719, 750, 786, 801, 836, 847, 875, 878, 873, 876, 857, 851, 830, 813, 777, 738, 700, 663, 613, 569, 527, 471, 432, 390, 339, 301, 244, 197, 150, 103
]  },
        {
        name: 'speed',
        type: 'line',
        yAxisIndex: 1,
        data: [253.9734907510981, 235.54831366835643, 250.31807063524312, 338.3823156454367, 246.8646812184349, 100.434876639221, 78.22663423381975, 241.67603101631184, 191.4977570378912, 193.64519868898952, 150.55979239779185, 111.42178994784695, 296.6383264251839, 254.67971779151648, 222.3327448802633, 221.86519400910052, 223.03147033202143, 217.30620561252846, 216.0567157632596, 197.2244212654872, 178.94341403070587, 161.0874318381493, 144.62773561149146, 136.84734907170065, 142.42879498342447, 91.85960034437616, 37.023343821065446, 37.95019765002607, 41.557348193600106, 17.631745438593786, 6.817404904442616, 28.385845576047902, 38.073798408780384, 39.09291634953579, 36.99156744032026, 43.93972015901073, 36.11669118669581, 47.15421561260351, 62.49464509890057, 119.22960453932187, 78.54423699258952, 58.16983048093468, 64.07473446442393, 37.05320397863589, 34.801778078067585, 22.780367329795308, 55.79453039842562, 119.18522295618438, 160.65913004856276, 200.88415855620823, 219.9968008224415, 226.93919623604475, 232.72699439685812, 242.76530856145553, 242.0682548216885, 240.24092630814948, 238.34611247354658, 234.24507414153356, 225.96659452862227, 227.1920128638927, 223.61530557109975, 225.2887028089762, 225.03528301878472, 223.18692604710097, 219.9543273746285, 220.76934780383834, 214.80941746433626, 213.7487363449829, 222.31420069252692, 220.26745099032152, 216.4194680792956, 218.1381324141931, 220.17442330690142, 223.8570784820254, 218.77865480183698, 225.84581862525346, 215.58814810370112, 218.3250485776944, 224.73875514885086, 218.663938038818, 217.74224612768185, 220.8673528742453, 219.84988716753963, 225.5376535081905, 228.26395613356377, 231.76216543015752, 232.2126205156995, 224.3429058289424, 231.0142658138277, 226.99188568514506, 234.9298486649732, 230.25799524745796, 230.5919977302406, 236.44828406912174, 230.8506612397642, 233.7227363585253, 225.0614544960104, 225.9239066822264, 217.4173635690263, 223.35703714247964, 221.07326261272033, 223.3241086515098, 224.18711921221535, 223.4178525052176, 228.21875323915623, 221.72758958729665, 216.54904367378995, 228.43467516837967, 227.07267533109496, 229.25085165936716, 229.7823288137422, 231.50255935837274, 233.1398522122924, 231.77159060857488, 218.48536585257472, 207.7289906955486, 180.66901968324726, 164.4886378332216, 131.10125429580012
]},        {
        name: 'speed3(m/min)',
        type: 'line',
        yAxisIndex: 1,
        data: [415.4139884701683, 407.82358433898526, 0, 168.1638694921253, 0, 0, 0, 0, 0, 0, 0, 0, 195.05457706979715, 515.9517361261246, 0, 251.55849735095836, 273.43268484796596, 251.16105725719925, 245.12048967310085, 259.05186216141414, 188.52356503433109, 256.06224989705476, 322.88740044008176, 233.7375503230422, 205.73397777957848, 95.56417774739846, 40.83802186136286, 1.1117617370212567, 0.2957115523396505, 0.33029781514035805, 0.24335091442407814, 0.3057456091643497, 0.32940121976510933, 53.817108552296524, 131.8984847117118, 146.3145578012598, 18.687549608579168, 0.393164310893275, 0.40990745282378277, 289.0677362469412, 0.3010256078388199, 120.2154481045207, 260.8802911524879, 123.91911719431937, 61.29956687943011, 0.3495591343775847, 2.2764134971459, 26.68690210706904, 220.6782549248822, 232.13435785530146, 226.24364022072027, 269.53702229383174, 260.45642942529975, 274.7427300302695, 269.2141514462822, 280.9744197005345, 260.94200306676737, 257.9708926420103, 236.62300489700638, 249.32003185489467, 239.23892816320824, 251.15752099158266, 241.15354416447585, 251.84766099434063, 251.63378732094404, 254.1730431722156, 263.15542769572716, 241.5152040203234, 255.49506867512716, 279.44860707567875, 238.30898595212358, 250.63853968595237, 247.0008237786118, 251.55416238037975, 256.7425735660173, 260.2038985976158, 258.6248591431699, 247.0679698920031, 249.17793905921644, 237.79985067454345, 250.94440448851813, 250.2367265450952, 291.9384319288101, 256.0807206947981, 243.01091629324168, 249.8458410728156, 280.0663805638301, 252.75284911271677, 268.1213031464059, 254.95498721906796, 258.60666792535545, 259.4218104510903, 238.08635613946197, 260.40556556716274, 253.93697385687088, 236.79037820657436, 251.84734661890192, 232.74430400301182, 232.1924621642086, 251.32581383835213, 249.85634349777172, 267.73449352855425, 265.1512675116656, 266.063380976374, 265.56497276084343, 273.8569228481604, 254.3066515893237, 280.5399684619293, 269.29358354216737, 304.7056556494847, 264.52256543232005, 287.51114700797024, 273.8893893406207, 270.59833036553897, 231.72854513782423, 251.10541635647294, 254.85075321463597, 206.14076143814881, 195.39605124934138
]   }]
};