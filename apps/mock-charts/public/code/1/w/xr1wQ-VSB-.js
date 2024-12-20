option = {
tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#ccc',
                borderColor: '#aaa',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                textStyle: {
                    color: '#222'
                }
            }
        },
        formatter:'{a2}:{c2}'
      
    },

    xAxis: {
        type: 'category',
        boundaryGap : false,
        data:['一周','二周','三周','四周','五周','六周','七周','八周','九周','十周','十一周','十二周','十三周','十四周']
    },
    yAxis: {
      type : 'value'
      
    },
    series: [
    {
        name: 'L',
        type: 'line',
         data:[300, 350, 320, 260, 200, 190, 260,200, 250, 320, 260, 200, 150, 260],
        lineStyle: {
            normal: {
                opacity: 0
            }
        },
        stack: 'confidence-band',
        symbol: 'none',
      
    },
       {
        name: 'U',
        type: 'line',
        data:[200, 200, 210, 220,300,210,120,200, 200, 210, 220,300,210,120],
        lineStyle: {
            normal: {
                opacity: 0
            }
        },
        areaStyle: {
            normal: {
                color: '#ccc'
            }
        },
        stack: 'confidence-band',
        symbol: 'none'
    },
    {
        name:'M',
        type: 'line',
        data:[
            420, 520, 420, 320,420,220, 300,320, 
            {value: 470, symbolSize: 20, itemStyle: {normal: {color: 'blue'}}}, 
            420, 320,420,220, 300
        ],
        symbolSize: 6,
        itemStyle: {
            normal: {
                color: '#c23531'
            }
        },
        
        showSymbol: true
    }
]
}