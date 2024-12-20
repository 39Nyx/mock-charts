function tab(dayNum){
        var oDate = new Date();   //获取当前时间
        var dayArr = [];     //定义一个数组存储所以时间
        for(var i=0;i<dayNum;i++){
            var excDay=new Date(oDate.getFullYear(),oDate.getMonth(),oDate.getDate() - i);
            var dayFomater=  excDay.getFullYear()+"-"+(excDay.getMonth()+1)+"-"+excDay.getDate()+"\n";  
            dayArr.push(dayFomater);  //把未来几天的时间放到数组里
        }
        return dayArr.reverse();   //返回一个数组。
    }
var xDate=tab(7);

option = {
    title: {
        text: '数据可视化', //标题 QL OUTPUT 单引号
        x: 'center',
        textStyle: {
            fontSize: 16,
            color: '#00092A'
        },
        padding: [0, 0, 15, 0]
    },
    tooltip: {
        trigger: 'axis', //item,axis(item鼠標指向圖形顯示單個點數據，axis顯示所有圖形數據)
        axisPointer: {
            lineStyle: {
                color: '#2575C9'
            }
        }
    },
    legend: {
        x: 'left',
        // padding:[0, 0 ,0 ,0],
        data: ['pm2.5'],
        formatter: function(name) {
            return name;
        }
    },
    toolbox: {
        show: true,
        feature: {
            //magicType : {show: true, type: ['line','bar']},  //工具行對應可變換图形
            saveAsImage: {
                show: true
            }
        },
        padding: [0, 20, 15, 0],
        itemSize: 14
    },
    visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        inRange: {
            color: ['#2575C9', '#23A845', '#D07116','#DE452D']
        },
        textStyle: {
            color: '#4F4F4F'
        }
    },
    visualMap: {
            top: 30,
            right: 5,
            pieces: [{
                gt: 0,
                lte: 35,
                color: '#2575C9'
            }, {
                gt: 36,
                lte: 50,
                color: '#23A845'
            }, {
                gt: 51,
                lte: 75,
                color: '#D07116'
            }, {
                gt: 76,
                lte: 100,
                color: '#DE452D'
            }],
            outOfRange: {
                color: '#2575C9'
            }
        },
    xAxis: [{
        name: '天', //坐标轴名字 时间(天)
        type: 'category', //坐标轴类型category|value|time
        data: xDate, //X轴依次显示名字，值加单引号，值间逗号隔开
        axisLine: {
            lineStyle: {
                color: '#333333',
                type: 'solid',
                width: 1
            }
        }
    }],
    yAxis: [{
        name: 'pm2.5', //坐标轴名字 PCS
        type: 'value',
        max: 100,
        splitNumber: 5,
        nameLocation: 'start',
        axisLine: {
            lineStyle: {
                color: '#333333',
                type: 'solid',
                width: 1
            }
        },
        //splitNumber : 10  //分割段數，默認為5
        axisLabel: {
            formatter: '{value} ' //Y坐标轴值后面加文字可以加单位'{value}K'，此处为空
        }
    }],
    series: [{
        name: 'pm2.5',
        type: 'line',
        symbolSize:12,
        //barWidth: 40,   //柱形宽度

        markLine: {
            data: [{
                name: 'Y 轴值为 100 的水平线',
                yAxis: 35,
                label: {
                    normal: {
                        position: 'end',
                        formatter: '优',
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#2575C9'
                    }
                }

            }, {
                name: 'Y 轴值为 100 的水平线',
                yAxis: 50,
                label: {
                    normal: {
                        position: 'end',
                        formatter: '良',
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#23A845'
                    }
                }

            }, {
                name: 'Y 轴值为 100 的水平线',
                yAxis: 75,
                label: {
                    normal: {
                        position: 'end',
                        formatter: '中',
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#D07116'
                    }
                }

            }, {
                name: 'Y 轴值为 100 的水平线',
                yAxis: 100,
                label: {
                    normal: {
                        position: 'end',
                        formatter: '差',
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#DE452D'
                    }
                }

            }]
        },
        itemStyle: { //改变所有bar的颜色
            normal: {
                color: '#2575C9',
                label: { //数值显示在bar上
                    show: true,
                    //position: 'inside',  //数值显示在bar内部
                    textStyle: {
                        fontSize: '20',
                        fontFamily: '微软雅黑',
                        fontWeight: 'normal'
                    }
                },
                lineStyle: {
                    width: 3
                }
            }
        },
        data: ['25','65','85','99','17','48','33'] //图形1数据

    }]
};