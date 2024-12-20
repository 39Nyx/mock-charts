var pbName=['品牌A', '品牌B', '品牌C', '品牌D'];
var pbValue= [120, 200, 150, 80];

option = {
    title : {
        text: '品牌生产统计',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    grid:{
        top:60,
        left:40,
        right:30,
        bottom:30
    },
    xAxis: {
        type: 'category',
        data: pbName,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        data:pbValue,
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle:{
                    color:'#ff0000',
                    fontSize:20
                }
            }
            
        },
    }]
};
