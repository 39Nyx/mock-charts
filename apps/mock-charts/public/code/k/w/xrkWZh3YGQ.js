const targetCoord = [90, 200]
const curveness = 0.25
const linesData = []
const oplinks=[]
//中间圆形
const item = {
    name: "CMHK",
    value: targetCoord,
    active:true,
    symbol:'image://http://39.108.86.242:8080/cmhk.png',
    portin:'40',  //转入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    portout:'30', //流出
    symbolSize: 100,
    itemStyle: {
        normal: {
            color: '#8FC319'
        }
    },
    
    label: {
        normal: {
            show:true,
            formatter:'+100',
            fontSize: '14', 
            color:'black',
            position: ['28%','82%']
        }
    },
}



//周边圆形
const items = [{
    name: "其他",
    category: 0,//分组流入中
    active: true,
    symbol:'image://http://39.108.86.242:8080/hkt.png',
    symbolSize: 80,
    portin: '60',
    portout:'30', //流出，相对于CMHK来说，是流入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    itemStyle: {
        normal: {
            color: '#BC186E'
        }
    },
    label: {
        
        normal: {
            formatter:'+123',
            fontSize: '14', 
            color:'#000',
            position: ['28%','82%']
        }
    },
    
    value: [135, 220]//座标
}, {
    name: "数码通",
    category: 0,
     symbolSize: 80,
    active: true,
    portin: '50', //对香港移动来说，是流出
    portout:'30', //流出，相对于CMHK来说，是流入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    symbol:'image://http://39.108.86.242:8080/smt.png',
    itemStyle: {
        normal: {
            color: '#0087D2'
        }
    },
    label: {
        
        normal: {
            formatter:'-123',
            fontSize: '14', 
            color:'#000',
            position: ['28%','82%']
        }
    },
    value: [120, 135]
}, {
    name: "PCCW",
    category: 1,//分组暂无流入
    active: true,
    symbolSize: 80,
    portin: '50',
    portout:'30', //流出，相对于CMHK来说，是流入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    symbol:'image://http://39.108.86.242:8080/pccw.png',
    itemStyle: {
        normal: {
            color: '#9DDAA2'
        }
    },
     label: {
        
        normal: {
            formatter:'-123',
            fontSize: '14', 
            color:'#000',
            position: ['28%','82%']
        }
    },
    value: [50, 170]
},{
    name: "中国联通",
    category: 1,
    active: true,
    symbolSize: 80,
    portin: '50',
    portout:'30', //流出，相对于CMHK来说，是流入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    symbol:'image://http://39.108.86.242:8080/union.png',
    itemStyle: {
        normal: {
            color: '#E69F9D'
        }
    },
     label: {
        
        normal: {
            formatter:'-123',
            fontSize: '14', 
            color:'#000',
            position: ['28%','82%']
        }
    },
    value: [55, 280]
}, {
    name: "3HK",
    active: true,
    symbolSize: 80,
    portin: '50',
    portout:'30', //流出，相对于CMHK来说，是流入
    yoy:'5',  //year on year 同比
    mom:'-3', //month on month 环比
    symbol:'image://http://39.108.86.242:8080/3hk.png',
    category: 1,
    itemStyle: {
        normal: {
            color: '#D78F1C'
        }
    },
    label: {
        
        normal: {
            formatter:'-123',
            fontSize: '14', 
            color:'#000',
            position: ['28%','82%']
        }
    },
    value: [110, 280]
}]

const data = items.concat([item])

items.forEach(function(el) {
    if (el.active) {
        linesData.push([{
            coord: el.value
        }, {
            coord: targetCoord
        }]),
         linesData.push([{
           coord: targetCoord 
        }, {
            coord: el.value
        }])
        oplinks.push(
         {
            target:el.name,
            source:item.name,
            portin:el.portin,  //相对CMHK来说，流出
            yoy:el.yoy,
            mom:el.mom,
            lineStyle: {
            normal: {
                //color: '#000' ,
                curveness: curveness,
            }
        }
             
         }),
         oplinks.push(
         {
            target:item.name,
            source:el.name,
            portin:el.portout,  //相对CMHK来说，流入
            yoy:el.yoy,
            mom:el.mom,
            lineStyle: {
            normal: {
                //color: '#000' ,
                curveness: curveness,
            }
        }
             
         })
        
    }
}),

console.log(oplinks)



option = {
    backgroundColor:'#fff',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [
        //圆圈动画
        {
        type:"effectScatter",
        data:[{value:targetCoord,symbolSize:48}],
        showEffectOn: 'render',
        rippleEffect: {
            period:9,
            brushType: 'stroke',
            scale:2.3
        },
        label: {
            normal: {  
                show: true,
                formatter:"{b}",
                fontSize:12,
                color:"white",
                offset:[0,0]
            }
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: 'rgba(143,195,31,0)' // 0% 处的颜色
                    }, {
                        offset: 0.4, color: 'rgba(143,195,31,0.1)' // 100% 处的颜色
                    }, {
                        offset: 0.9, color: 'rgba(143,195,31,0.3)' // 100% 处的颜色
                    }, {
                        offset: 1, color:'rgba(143,195,31,0.8)' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                shadowBlur: 0,
                shadowColor: '#25fffb'
            }
        }
    },
        
        {
        type: 'graph',//graph,effectScatter
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        hoverAnimation: true,
        //symbolSize: 100,//周边圆形大小
        z: 3,
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 9,
                    fontFamily:'宋体',
                    color:'#000'  //线上字的颜色
                },
                formatter: function(params) {
                    console.log(params)
                    let txt = ''
                    if (params.data.portin !== undefined) {
                        txt = params.data.portin
                    }
                    return txt
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'bottom',//['20%', '40%'],
                color: '#C7C7C7'//#5e5e5e //字体颜色
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 0,
                shadowColor: '#333'
            },
            emphasis: {

            }
        },
        lineStyle: {
            normal: {
                width: 1,
            },
        },
        edgeSymbol: ['none', 'none'],
        edgeSymbolSize: 1,//箭头大小
        data: data,
        links:oplinks
        //categories: categories
    }, {
        name: 'A',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        polyline: false,
        z: 1,
        effect: {
            show: true,
            smooth: false,
            constantSpeed: 70,
            trailLength: 0.005,
            symbol: "circle",
            color: 'rgba(55,155,255,0.5)',
            symbolSize: 5
        },
        
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#000'
                    }, {
                        offset: 1, color: '#000'
                    }], true),
                width: 1,//线宽
                //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                opacity: 0.05,
                //线条的曲线程度，从0到1
                curveness: 0.25
            }
        },
        data: linesData
    }]
}