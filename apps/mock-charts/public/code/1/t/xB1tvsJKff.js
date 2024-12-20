


convertData = function(data,qname) {
    len = data.length
    res = []
    for (var i = 0; i < len; i++) {
        res.push({
            name: qname[i],
            value: data[i]
        })
    }
    return res

};

option={
     bmap: {
                center: [113.091431,22.587007],
                zoom: 12,
                roam: true,
                mapStyle: {
                    'styleJson': [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#031628'
                        }
                    }, {
                        'featureType': 'land',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000102'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#0b3d51'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#08304b'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'lightness': -70
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'all',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#857f7f'
                        }
                    }, {
                        'featureType': 'all',
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#022338'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#062032'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#465b6c'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#022338'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }]
                },
            },
     visualMap: {
        min: 1,
        max: 15001,
        seriesIndex:7,
        splitNumber: 5,
        right:0,
        align:'right',
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
        },
        textStyle: {
            color: '#fff'
        }
    },
     legend: {
            type:'scroll',
            left: 'left',
            bottom: 260,
            orient: 'vertical',
            pageIconColor:'white',
            pageTextStyle:{
              color:'white',  
            },
            
            
            data: ['台山市','开平市',
            '恩平市','新会区','江海区','蓬江区','鹤山市','热力图',
            '5级ID','集团信息1','集团信息2','集团信息3','集团信息4',
            '集团信息5','集团信息6','集团信息7','集团信息8','集团信息9',
            '集团信息10','集团信息11','集团信息12','集团信息13','集团信息14',],
            selected:{
              '5级ID':false,
              '集团信息2':false,
              '集团信息3':false,
              '集团信息4':false,
              '集团信息5':false,
              '集团信息6':false,
              '集团信息7':false,
              '集团信息8':false,
              '集团信息9':false,
              '集团信息10':false,
              '集团信息11':false,
              '集团信息12':false,
              '集团信息13':false,
              '集团信息14':false,
            },
            textStyle: {
                color: '#ccc'
            },
            emphasis:{
                show:false
            }
            
        },
     series:[
        //台山市
            {
                name:'台山市',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(TSCoord,TSName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(253, 66, 56)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //开平市
            {
                name:'开平市',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                
                data: convertData(KPCoord,KPName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(146,38,178)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //恩平市
            {
                name:'恩平市',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(EPCoord,EPName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(0,159,223)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //新会区
            {
                name:'新会区',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(XHCoord,XHName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(82,218,63)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //江海区
            {
                name:'江海区',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(JHCoord,JHName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(255,153,58)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //蓬江区
            {
                name:'蓬江区',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(PJCoord,PJName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(239,63,172)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //鹤山市
            {
                name:'鹤山市',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(HSCoord,HSName),
                symbolSize:15,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(249,178,198)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 2,
            },
        //热力图层
            {
                name:'热力图',
                type: 'heatmap',
                coordinateSystem: 'bmap',
                data:data2
            },
        //集团信息P1
            {
                name:'集团信息1',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[0],jituanName[0]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p2
            {
                name:'集团信息2',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[1],jituanName[1]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p3
            {
                name:'集团信息3',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[2],jituanName[2]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p4
            {
                name:'集团信息4',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[3],jituanName[3]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p5
            {
                name:'集团信息5',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[4],jituanName[4]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,},            
        //集团信息p6
            {
                name:'集团信息6',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[5],jituanName[5]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p7    
            {
                name:'集团信息7',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[6],jituanName[6]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,},       
        //集团信息p8
            {
                name:'集团信息8',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[7],jituanName[7]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,}, 
        //集团信息p9
            {
                name:'集团信息9',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[8],jituanName[8]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,},           
        //集团信息p10
            {
                name:'集团信息10',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[9],jituanName[9]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },            
        //集团信息p11
            {
                name:'集团信息11',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[10],jituanName[10]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,}, 
        //集团信息p12
            {
                name:'集团信息12',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[11],jituanName[11]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,}, 
        //集团信息p13
            {
                name:'集团信息13',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[12],jituanName[12]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //集团信息p14
            {
                name:'集团信息14',
                type: 'scatter',
                symbol:'arrow',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord[13],jituanName[13]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(251,227,0)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
         
        //5级ID p1
            {
                name:'5级ID',
                type: 'scatter',
                symbol:'diamond',
                coordinateSystem: 'bmap',
                data: convertData(flCoord[0],flName[0]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(65,218,197)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //5级ID p2
            {
                name:'5级ID',
                type: 'scatter',
                symbol:'diamond',
                coordinateSystem: 'bmap',
                data: convertData(flCoord[1],flName[1]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(65,218,197)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
        //5级ID p3
            {
                name:'5级ID',
                type: 'scatter',
                symbol:'diamond',
                coordinateSystem: 'bmap',
                data: convertData(flCoord[2],flName[2]),
                symbolSize:7,
                large:true,
                
                itemStyle:{
                  normal:{
                     
                      color: 'rgb(65,218,197)'
                  },
                emphasis:{
                        label:{  
                            position:['50%', '50%'],
                            distance:3,
                            fontSize:20,
                            backgroundColor:'white',
                            fontWeight:'bolder',
                            fontStyle:'oblique',
                            color:'red',
                            show:true,
                            borderColor:'white',
                            formatter: function(param) {
                            return param.name
                            }
                    }
                },
                  
                },
                zlevel: 1,
            },
            

            ]
   
            
},

            




myChart.setOption(option)