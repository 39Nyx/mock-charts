/**
 * 仪表
 * param1  echarts的初始化id  echarts.init(document.getElementById('xxx'))
 * param2  value值  数值型
 */
function Meter(id,value){
    // var size = $("#"+id).css('fontSize');;
    var size = '16'
    var background = "#202624";//背景
    // var Myecharts = "mycharts_"+id;
    // Myecharts = echarts.init(document.getElementById(id));
    option = {
        backgroundColor:background,
        series: [{
            type: 'gauge',
            axisLine: {
                show: true,
                lineStyle: {
                    width: parseInt(size)*2.5,
                    shadowBlur: 0,
                    color: [
                        [0.2, '#90ee90'],
                        [0.4, '#ffa500'],
                        [0.6, '#87ceeb'],
                        [0.8, '#87ceeb'],
                        [1, '#ff4500']
                    ]
                }
            },
            splitLine:{
                length:parseInt(size)*2.5,
                lineStyle:{
                    width:1
                }
            },
            axisLabel: {
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0";
                        case "20":
                            return "20";
                        case "40":
                            return "40";
                        case "80":
                            return "80";
                        case "100":
                            return "100";
                        default:
                            return "";
                    }
                },
                distance:1,
                textStyle: {
                    fontSize: parseInt(size)*1,
                    fontWeight: ""
                }
            },
            pointer:{
                width:parseInt(size)*0.7
            },
            startAngle: 140,
            endAngle: -140,
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#C7FBFC",
                    width: parseInt(size)*0.1
                },
                length: parseInt(size)*0.8,
                splitNumber: 10
            },
            detail: {
                formatter: '{value}℃',
                textStyle: {
                    fontSize: parseInt(size)*1.5,
                    fontWeight: ""
                }
            },
            data: [{
                value: value,
                //name: '仪表盘'
            }]
        }]
    };
    myChart.setOption(option);
    this.update_Meter = function(message){
        myChart.setOption({
            series:[{
                data: [{
                    value: message
                }]
            }]
        })
    }
}
Meter("main",56)