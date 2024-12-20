        var data = [53, 85];
        var xMax = 100; //
option = {
    grid:{
        left:0,
        top:10,
        width:'100%',
        height:'20%',
        containLabel:true,  
    },
    xAxis: [{
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
        type: 'category',
        data: ['数据A', '数据B'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: 'black',
            }
        }
    }],
    series: [
        {
            name: ' ',
            type: 'bar',
            barWidth: 16,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}',
                }
            },
            data: [
                {
                    value: 53,
                    itemStyle: {
                        normal: {
                            color: '#2192ff',
                        }
                    }
                },
                {
                    value: 6.3,
                    itemStyle: {
                        normal: {
                            color: '#27D555',
                        }
                    }
                }
            ],
        }
    ]
};
