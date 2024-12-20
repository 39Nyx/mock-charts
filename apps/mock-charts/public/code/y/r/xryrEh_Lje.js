app.title = '坐标轴刻度与标签对齐';

option = {
    
    tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data :  ['服务类','货物类','服务类','投融资类','其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60px',
            data:[10, 52, 200, 334, 330],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#91c7ae','#c23531', '#2f4554', '#61a0a8',
                            '#d48265'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            }
           
        }
         
    ]
};
