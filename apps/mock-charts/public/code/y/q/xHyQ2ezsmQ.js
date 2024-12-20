option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)",
        padding: [5, 15],
    },
    color:['#fa8c6a', '#4acffa'],
    series : [
        {
            name: '报警占比',
            type: 'pie',
            radius : '55%',
            data:[
                {value:330, name:'电源箱报警'},
                {value:150, name:'其它运行设备报警'},
            ],
            label: {
              fontSize: 18,  
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            }
        }
    ]
};
