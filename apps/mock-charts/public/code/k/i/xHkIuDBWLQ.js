const arr = ["1%", "11%", "21%", "31%", "41%", "51%", "61%"]
option = {
    title: {
        text: 'demo Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        //boundaryGap: false,
        "min": 0
        
    },
    yAxis: {
        "min": 0,
    },
    series: [
        {
            type: 'bar',
            name:'linedemo',
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'bar',
            name:'bar_2',
            tooltip:{
                show:false
            },
            animation:false,
            barWidth:5,
            hoverAnimation:false,
            data:[-20, 82, 91, -34, 90, 30, 10],
            itemStyle:{
                normal:{
                    color:'#f17a52',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#FEC201',
                    fontSize: 18,
                    fontWeight: 'bold'
                },
                formatter: (params) => {
                    const { data, dataIndex } = params
                    return arr[dataIndex] + '\n' + data
                    
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        

    ]
};