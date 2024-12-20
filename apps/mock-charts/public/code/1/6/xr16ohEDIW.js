var visibleCount;
    
function getData(percent) {
    var count = 360;
    visibleCount = count*percent;
    var data = [];
    var i;
    for (i = 0; i < visibleCount; i++) {
        data.push([1,i]);
    }
    for (i = visibleCount; i < count; i++) {
        data.push([1,0]);
    }
    return data;
}
var percent = [0.25, 0.5, 0.75, 1];

function getOptions(values){
    var options = [];
    var option, data;
    for (var i = 0; i < values.length; i++ ){
        data = getData(values[i]);
        option = {
            title: {
                text: Math.ceil(values[i] * 100) +'%',
            },
            series: [{
                type: 'pie',
                radius : ['54%', '55%'],
                center: ['50%', '50%'],
                silent: true,
                itemStyle: {
                    normal: {
                        color: 'RGB(0,0,0,0.1)',
                        shadowBlur: 10,
                        shadowColor: '#1b1e25'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            },{
                type: 'pie',
                radius : ['75%', '76%'],
                center: ['50%', '50%'],
                silent: true,
                    itemStyle: {
                        normal: {
                            color: 'RGB(0,0,0,0.1)',
                            shadowBlur: 10,
                            shadowColor: '#1b1e25'
                        }
                    },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            },{
                type: 'pie',
                radius : ['55%', '75%'],
                center: ['50%', '50%'],
                silent: true,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data
            }]
        };

        options.push(option);
    }

    return options;
}


var option = {
    baseOption: {
        timeline : {
            data : [0, 1, 2, 3],
            label: {
                formatter : function(s) {
                    // console.log(s)
                    var data = ['下发指令', '接收指令', '执行指令', '完成'];
                    return data[s];
                }
            },
            left: 30,
            right: 30,
            bottom: 20,
            symbol: 'circle',
            symbolSize: 15,
            symbolRotate :'30',
            playInterval :'2000',
            loop:true,
            axisType:'category',
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#00cc00'
                },
                emphasis: {
                    color: '#fff'
                }
            },
            lineStyle: {
                color: '#49a9ee',
                width: 5
            },
            checkpointStyle: {
                color: '#00cc00',
                symbolSize: 18,
                borderColor: 'rgba(0, 204, 0, 0.5)',
                animationDuration: '1000'
            },
            controlStyle: {
                show: false
            },
            autoPlay:true,
        },
        color: ['#00cc00'],
        title: {
            // text: Math.ceil(values[i] * 100) +'%',
            textStyle:{
                color:'#333',
                fontSize:50,
                fontWeight:'normal',
                fontFamily:'华文细黑',
            },
            x: 'center',
            y: 'center'
        },
        visualMap: [{
            show: false,
            dimension: 1,
            seriesIndex:2,
            inRange: {
                colorAlpha: [0,1]
            }
        }],
    },
    options: getOptions(percent)
};