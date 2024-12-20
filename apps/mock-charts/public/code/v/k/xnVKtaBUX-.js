var option = {
    tooltip: {
        show: true
    },
    xAxis: {
         name:"日期",
         nameTextStyle:{
                    //  padding:[0,0,0,-30],
                     color:'#666666',
                     fontSize:'16',
                    },
        type: 'category',
        boundaryGap: true,
        // boundaryGap: '0%',
        min: 0,
        // max: 9,
        axisLine: {
            lineStyle: {
                color: '#8c8c8c',
                // shadowColor: 'rgba(75, 211, 255, 0.5)',
                // shadowBlur: 5
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#666666',
            fontSize: 16
        },
        splitLine: {
            show: false
        },
        data: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'],

    },
    yAxis: [{
        name:"次数",
         nameTextStyle:{
                     padding:[0,0,0,-30],
                     color:'#666666',
                     fontSize:'16',
                    },
        // max: 50,
        // min: 0,
        axisLine: {
            lineStyle: {
                color: '#8c8c8c',
                // shadowColor: 'rgba(75, 211, 255, 0.5)',
                // shadowBlur: 5
            }
        },
        axisLabel: {
            color: '#666666',
            fontSize: 16
        },
          axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#ccc',
                // type: 'dashed'
            }
        }
    }],
    series: [{
        name: '次数',
        type: 'pictorialBar',
         barCategoryGap: '40%',
         color: '#01f6f8',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            show: false,
            position: 'top',
            color: '#01f6f8',
            fontSize: 14
        },
        data:[10,50,60,70,80,120,5,70,60]
    }],
    backgroundColor: "",
};


