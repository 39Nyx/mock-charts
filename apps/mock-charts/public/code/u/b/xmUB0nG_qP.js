var myColor=['#fff600','#316fc0','#41b3ee'];
var datas=[78,59,15]
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '0',
            top:'0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                splitLine:'none',
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        verticalAlign:'bottom',
                        align: 'left',
                        padding: [0,0,10,8],
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
                data: ['日活人数','月活人数','实时人数']
            }, {
                splitLine:'none',
                axisTick:'none',
                axisLine:'none',
                data: datas,
                axisLabel: {
                        show:true,
                        verticalAlign:'bottom',
                        align: 'right',
                        padding: [0,8,10,0],
                        textStyle: {
                            color:'#fff',
                            fontSize:'16',
                        },
                        formatter:'{y|{value}} {x|人}',
                        rich:{
                            y:{
                                color:'#fffa6f',
                                fontSize:16
                            },
                            x:{
                                fontSize:12
                            }
                        }
                    },
                
                
               
            },{
                splitLine:'none',
                axisTick:'none',
                axisLine:'none',
                data:[]
            }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: datas,
            label:{
                
                  normal:{
                    show:false,
                    position:'right',
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    fontSize:16,
                    fontFamily:'arial',
                    formatter:'{c}人'
                  }
            },
            barWidth:6,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 2
        },{
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100,100,100],
            barWidth:6,
            itemStyle: {
                normal: {
                    color:'rgba(255,255,255,.1)',
                    barBorderRadius: 5,
                }
            },
            z: 0
        }, 
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data:datas,
            yAxisIndex: 2,
            symbolSize:9,
            itemStyle: {
                normal: {
                    color:'#fff',
                    opacity: 1,
                }
            },
            z: 2
        }]
    };