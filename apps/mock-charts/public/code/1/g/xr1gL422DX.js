option = {
  backgroundColor:'rgba(46, 199, 201, 0)',
  color:['#94C833', '#FE6918'],
    title: {
     //   text: '阶梯瀑布图',
     //   subtext: 'From ExcelHome',
       // sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },  toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '20%',
        top:'8%',
         height: '40%',
         width:'60%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
      
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data:['新增','减少'],
       textStyle: {
                                    color: "#fff"
                                }
    },
    xAxis : [
        {
            type : 'category',
            splitLine: {show:false},
            axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
          axisLabel: {
                                show: true,
                                textStyle: {
                                    color: "#fff"
                                }
                            },
            data :  function (){
                var list = [];
                for (var i = 1; i <= 10; i++) {
                    list.push('9月' + i + '日');
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
           axisLabel: {
                                show: true,
                                textStyle: {
                                    color: "#fff"
                                }
                            },
        }
    ],
    series : [
        {
            name:'总计',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name:'新增',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {
                  show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFCA36'
                    }, {
                        offset: 0.5,
                        color: '#FA5801'
                    }, {
                        offset: 1,
                        color: '#FB3800'
                    }]),
                     barBorderRadius: 8,
                    borderWidth: 0,
                    borderColor: '#333',
                label : {show: true, 
                textStyle: {
                        color: "#fff"
                         },
                                position: 'top'}}},
            data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name:'减少',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {
                show: true,
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#30E602'
                    }, {
                        offset: 1,
                        color: '#8FFD17'
                    }, {
                        offset: 1,
                        color: '#8FFD17'
                    }]),
                     barBorderRadius: 8,
                    borderWidth: 0,
                    borderColor: '#333',
                label : {show: true, 
                textStyle: {
                        color: "#fff"
                         },
                         position: 'bottom'}}},
            data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361]
        }
    ]
};