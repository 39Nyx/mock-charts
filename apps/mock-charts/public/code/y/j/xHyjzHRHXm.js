var input=[2000,1900]

var colorList =[]
var color1="#F82728";
var color2="#2BBC33";
colorList=[color1,color2]

option = {
            backgroundColor: '#262D45',
            animation: true,
            grid:{
              top:10  
            },
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'shadow'
            //     },
            //     formatter:function(params){
            //         var res='<div><p>'+ params[0].name+'</p></div>'
            //           for(var i=0;i<params.length;i++){
            //             res += '<p>'+params[i].seriesName+':'+input[i]+'&nbsp;</p>'
            //           }
            //         return res;
            //     }
            // },
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'cross'
            //     },
            //     backgroundColor: 'rgba(245, 245, 245, 0.8)',
            //     borderWidth: 1,
            //     borderColor: '#ccc',
            //     padding: 10,
            //     textStyle: {
            //         color: '#000'
            //     },
            //     position: function (pos, params, el, elRect, size) {
            //         var obj = {top: 10};
            //         obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            //         return obj;
            //     },
            //     extraCssText: 'width: 170px'
            // },
            xAxis: {
                splitNumber: 25,
                type: 'category',
                axisLine: {
                    lineStyle: {
                        width:2,
                        type: 'solid',
                        color:'#DFDFDF'
                    }
                },
                axisLabel: {
                    show: true,
                    rotate: 0,
                    textStyle: {
                        color: '#DFDFDF',
                        fontSize:42
                    }
                },
                axisTick: {
                    show: true,
                    length:8,
                    lineStyle:{
                        width:2,
                        type:'solid',
                        color:'#DFDFDF'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width:6,
                        type: 'solid',
                        color: '#DFDFDF'
                    }
                },
                data: ['投入', '产出']
            },
            yAxis: {
                show:false
            },
            series: [{
                name: '目标',
                type: 'bar',
                silent: true,
                barGap: '-100%',
                barWidth: '30%',
                itemStyle: {
                    color: '#262D45',
                    borderWidth: 2,
                    borderColor: '#FFFFFF'
                },
                data: [1,1]
            }, {
                name: '实际',
                type: 'bar',
                silent: false,
                barGap: '-100%',
                barWidth: '30%',
                data: [1,0.72],
                itemStyle: {
                    normal: {
                        color:function(obj){
                            // var colorList = ['#F82728','#2BBC33'];
                            return colorList[obj.dataIndex]
                        },
                        borderWidth: 2,
                        borderColor: '#FFFFFF'
                    }
                },
            }]
        }