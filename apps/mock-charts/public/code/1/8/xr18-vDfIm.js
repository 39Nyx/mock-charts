

            //dataCS,dataHCI,dataMT,dataOther为数据集,数据的前两个数字表示坐标,即决定了在坐标轴的位置,后面数字可以任自己选择写几个,根据具体需要
            var  dataCS = [
                [33, 13, 3, 10, 8, 72, 'Hannah Abbott '],
                [19, 14, 3, 6, 8, 60, 'Katie Bell '],
            ];

            var dataHCI = [
                [4, 26, 2, 3, 9, 51, 'Ludo Bagman'],
                [26, 15, 7, 9, 5, 76, 'Frank Bryce'],
            ];

            var dataMT = [
                [16, 21, 2, 8, 9, 60, 'Cuthbert Binns'],
                [25, 18, 4, 8, 8, 71, 'Terry Boot'],
            ];

            var dataOther = [
                [11, 21, 2, 5, 8, 56, 'Bathilda Bagshot'],
                [16, 16, 5, 7, 6, 63, 'Dean Thomas'],
            ];

            //schema为json格式,主要是为后面的formatter服务,formatter可以在鼠标移到散点上时显示所需要的信息.
            var schema = [
                {name: 'coder',  text: 'Coder'},
                {name: 'designer', text: 'Desginer'},
                {name: 'visualization',  text: 'Visualization'},
                {name: 'computer usage',  text: 'Computer usage'},
                {name: 'collaboration',  text: 'Collaboration'},
                {name: 'overallratings',  text: 'Overallratings'},
                {name: 'name', text: 'Name'}
            ];

            //设置series里的itemStyle属性,
            var itemStyle = {
                    opacity: 0.8,     //图形透明度 取值0-1
                    shadowBlur: 10,   //图形阴影的模糊大小。
                    shadowOffsetX: 0,  //阴影水平方向上的偏移距离。
                    shadowOffsetY: 0,  //阴影垂直方向上的偏移距离。
                    shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
            };

            var option = {
                backgroundColor:'#1B2D3B',
                
                title : {
                    text: '散点图',
                    x:'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                color: ['#dd4444', '#426ab3', '#fec42c', '#80F1BE'],  //不同图例的颜色
                // legend: {
                //     y: 'top',
                //     data: ['Computer Science','Human Computer Interaction','Media Technology', 'Other related majors'],
                //     textStyle: {
                //         color: '#fff',
                //         fontSize: 16
                //     }
                // },

                //图形位置
                grid: {
                    x: '10%',
                    x2: 150,
                    y: '18%',
                    y2: '10%'
                },

                //鼠标移到散点上面,会显示function函数返回的值
                tooltip: {
                    backgroundColor: '#100',
                    borderColor: '#777',
                    borderWidth: 1,
                    formatter: function (obj) {
                        var value = obj.value;
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + obj.seriesName + '：'
                            + '</div>'
                            + schema[0].text + '：' + value[0] + '<br>'
                            + schema[1].text + '：' + value[1] + '<br>'
                            + schema[2].text + '：' + value[2] + '<br>'
                            + schema[3].text + '：' + value[3] + '<br>'
                            + schema[4].text + '：' + value[4] + '<br>'
                            + schema[5].text + '：' + value[5] + '<br>'
                            + schema[6].text + '：' + value[6] + '<br>';
                    }

                },
                //axisLine指的是坐标轴线也就是x轴,splitLine指的是平行于y轴的线,false则是不显示
                xAxis: {
                    type: 'value',
                    name: '',
                    nameGap: 10,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 11
                    },
                    //max: 50,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    }
                },


                //axisLine指的是坐标轴线也就是y轴,splitLine指的是平行于x轴的线,false则是不显示
                yAxis: {
                    type: 'value',
                    name: '',
                    nameGap: 10,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#eee'
                        }
                    },

                    splitLine: {
                        show: false
                    }
                },
                //symbolSize: 10可设置散点大小
                series: [
                    {
                        name: 'CS',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataCS,
                        symbolSize: 15,
                    },
                    {
                        name: 'HCI',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataHCI,
                        symbolSize: 15,
                    },
                    {
                        name: 'MT',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataMT,
                        symbolSize: 15,
                    },
                    {
                        name: 'Other',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: dataOther,
                        symbolSize: 15,
                    }
                ]
            };

