option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['week', '周一', '周二', '周三', '周四'],
            ['Milk', 86.5, 92.1, 85.7, 83.1],
            ['Tea', 56.5, 0, 99.7, 23.1]
        ]
    },
    
    
    
    grid: {
        left: '5%',
        right: '40%',
        top: '42%',
        bottom: '10%'
    },
    xAxis:  {
        type: 'category'
    },
    yAxis: {
        gridIndex: 0
    },
    
    
    
    series: [{
            type: 'pie',
            radius: '10%',
            center: ['8%', '20%']
            // No encode specified, by default, it is '周一'
        }, {
            type: 'pie',
            radius: '10%',
            center: ['33%', '20%'],
            label: {
                formatter: '{b}: {@周二} ({d}%)'
            },
            encode: {
                itemName: 'week',
                value: '周二',
                tooltip: '周二'
            }
        }, {
            type: 'pie',
            radius: ['4%', '10%'],
            center: ['58%', '20%'],
            label: {
                formatter: '{b}: {@周三} ({d}%)'
            },
            encode: {
                itemName: 'week',
                value: '周三',
                tooltip: '周三'
            }
        }, {
            type: 'pie',
            radius: '10%',
            center: ['82%', '20%'],
            label: {
                formatter: '{b}: {@周一} ({d}%)'
            },
            encode: {
                itemName: 'week',
                value: '周四',
                tooltip: '周四'
            }
        },
        





        {
            name: '访问来源',
            type: 'pie',
            radius: '24%',
            center: ['80%', '65%'],
            avoidLabelOverlap: false,
            data: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                }
            ]
        },



        {
            type: 'line',
            name: '牛奶',
            smooth: true,
            seriesLayoutBy: 'row'   // 指定了 dataset 中用行还是列对应到系列上, 值：['column', 'row']
        },
        {
            type: 'line',
            name: '茶',
            smooth: true,
            seriesLayoutBy: 'row'
        }




        
    ]
};





// 更新数据
setTimeout(function() {
    myChart.setOption({
        dataset: {
            source: [
                ['week', '周一', '周二', '周三', '周四'],
                ['Milk', 186.5, 92.1, 185.7, 83.1],
                ['Tea', 56.5, 137.1, 0, 123.1]
            ]
        }
    })
}, 3000);