option = {

    title: {},
    tooltip: {
        trigger: 'axis'
    },
    
    grid: {
        show: false,
        left: '10%',
        right: '5%',
        bottom: '20%',
        top: '10%',
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: [
            '金管001号',
            '金管002号',
            '金管003号',
            '金管004号',
            '金管005号',
            '金管006号',
            '金管007号'
        ],
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            // textStyle:{
            //     margin:20,
            //     fontSize: 27,
            //     color:'#fff'
            // }

        }

    }],
    yAxis: {
        type: 'value',
        name: '（PH）',
        nameLocation:'start',
        nameTextStyle:{

            // margin:20,
            // fontSize: 27,
            // color:'#fff'


        },
        axisTick: {
            show: false
        },
        min: 2,
        max: 10,
        splitNumber: 4,
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#2a303e', '#262e3b']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            // textStyle:{
            //     margin:20,
            //     fontSize: 27,
            //     color:'#fff'
            // }

        }
    },
    series: [{
        name: '实时人数',
        type: 'bar',
        data: [6.5, 7, 8.5, 7.5, 8, 6.5, 7.5],
        itemStyle: {
            normal: {
                color: '#5d94ca'
            }
        },
        // barWidth:100
    }]
};