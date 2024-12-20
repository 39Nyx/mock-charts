





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

            
     legend: {
            left: 'left',
            data: ['台山市','开平市',
            '恩平市','新会区','江海区','蓬江区','鹤山市','热力图',
            '集团信息','5级ID',],
            textStyle: {
                color: '#ccc'
            },

            
        },
        
     series:[

        //集团信息
            {
                name:'鹤山市',
                type: 'scatter',
                symbol:'pin',
                coordinateSystem: 'bmap',
                data: convertData(jituanCoord,jituanName),
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

            ]
   
            
},

            




myChart.setOption(option)