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
            yAxisIndex: 1,
            data:[ 3, 3, 3, 3, 7, 5, 5, 5, 8, 7, 9, 9, 9, 9, 1237, 1121, 916, 750, 605, 449, 320, 209, 144, 84, 49, 30, 25, 31, 22, 24, 19, 33, 40, 45, 40, 35, 15, 14, 17, 17, 17, 24, 43, 113, 269, 495, 778, 1122, 1581, 2007, 2477, 2865, 3186, 3478, 3647, 3781, 3875, 3924, 3879, 3888, 3839, 3791, 3740, 3635, 3571, 3488, 3437, 3387, 3308, 3269, 3213, 3157, 3105, 3069, 3028, 2971, 2946, 2931, 2916, 2942, 2922, 2955, 2948, 2988, 3030, 3059, 3061, 3157, 3201, 3294, 3377, 3462, 3554, 3618, 3642, 3626, 3624, 3575, 3516, 3458, 3322, 3233, 3086, 2904, 2702, 2512, 2253, 2032, 1776, 1557, 1313, 1085, 875, 703, 568, 423, 280, 171, 115
]},
        {
            name:'speed(m/min)',
            type:'line',
            data:[46.91591320408571, 181.8565388479473, 306.37925851627017, 336.08776719768997, 119.97539825756809, 186.83114284601479, 170.1689513261087, 273.68345135959726, 114.94104110056662, 156.57919191118032, 245.99620551731994, 317.80110410876057, 282.2241754450939, 219.29651203532367, 367.67533419041007, 363.25637785108023, 366.2462558008463, 349.23399658565285, 347.88230609453666, 342.9774036416905, 340.0236207830367, 315.43987413780474, 272.184706572845, 272.7489358473758, 240.76386387229448, 178.44034698375745, 116.7051392677822, 71.00758627485011, 42.07806121758009, 52.76050025016133, 94.49869414308543, 84.09481408768634, 48.67395385326235, 71.99495807417834, 85.74087885823829, 79.64371477801991, 248.92783378823358, 215.9978339504537, 248.7338773498294, 281.8587940652098, 190.48341622703524, 224.62762846988554, 190.2333429497725, 142.14871802579088, 165.6959155210873, 234.3893177289973, 276.11904419740443, 317.41391228105664, 329.72859056364297, 359.3173046785358, 373.82955097577803, 387.9250528122632, 391.9145180809447, 397.87355077823656, 408.9835857921592, 406.32447489145477, 396.1354011319696, 387.8695547243496, 387.7286061594121, 384.1918240463398, 386.024478999997, 382.17319986092554, 380.0257488020391, 370.9500689787405, 373.18413510624396, 368.29907018895216, 370.87653798042203, 372.35310354002365, 378.43557141560103, 376.8072957475695, 386.9053687552488, 391.13244569673, 384.5239329699783, 392.7517349008445, 386.4283161754022, 385.6008257312551, 382.95452305795703, 381.1533379196011, 380.47395468175245, 376.40773936658377, 373.0400747012574, 370.03089073570874, 379.41200537709636, 381.38405566656235, 378.73707640596155, 381.6989281024203, 384.1419130760319, 374.91080965462794, 378.133134267352, 380.3846603171139, 379.81641281524037, 382.65895576590606, 386.8708573316054, 386.1464310578876, 384.95838634185617, 390.91326633927235, 387.44349309893175, 387.7137341361272, 386.2112176503432, 385.83930280531456, 397.76543260421863, 404.53408422476974, 404.61270727799075, 401.8670733764843, 393.2218594890654, 387.2205454485456, 390.159720849186, 382.52781490106076, 381.4929413549176, 370.546832569433, 373.53278350566137, 372.90622940725035, 383.123662598061, 376.2256472787338, 361.0551436846998, 349.97353135109114, 329.82341090173725, 325.2062579870843, 265.36527963040044
]}
    ]
};