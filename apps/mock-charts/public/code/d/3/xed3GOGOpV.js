option = {
    xAxis: {
        type: 'category',

        axisLabel: {
            // interval: 0,
            // formatter: function(value) {
            //     //判断开始数据最接近5还是0结尾
            //     if (value == "5/1" || value == "5/7" || value == "5/14" 
            //     || value == "5/14"|| value == "5/21"|| value == "5/28") {
            //         return value;
            //     } else {
            //         return "";
            //     }
            // }
        }, 
        axisTick:{
        //   show:false  
        },
        data: ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6', '5/7', '5/8', '5/9',
            '5/10', "5/11", '5/12', '5/13', '5/14', "5/15", '5/16', '5/17',
            '5/18', '5/19', '5/20', '5/21', '5/22',
            '5/23', '5/24', '5/25', "5/26", '5/27', '5/28', '5/29', '5/30'
        ]
    },
    yAxis: {
        type: 'value',
        trigger: "axis"
    },
    tooltip: {
        show: true,
        trigger:"axis"
    },
    series: [{
        data: [920, 1090, "", "", "", 1330, 1320, 1200, 1260, 1290],
        type: 'line',
        smooth: true
    }]
};