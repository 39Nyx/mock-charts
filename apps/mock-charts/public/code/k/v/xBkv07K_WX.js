option = {
    title: {
        text: '预警分析组成（单位:mm）',
        // subtext: 'From ExcelHome',
        // sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['总量','预报降雨','实测降雨','W0','']
    },
    yAxis: [{
        type : 'value',
        position: 'right'
       
    },{
        type:'value',
        
    }],
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 110, 80, 0],
           
           
        },
        {
          
            name: '含水量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[130, 20, 30, 80],
             markPoint: {
                  data: [{
                    name: '最大值',
                    type: 'max',
                    
                    label:{
                        normal: {
                            formatter:'当前（预警）'
                        }
                    }
                }]
             },
             markLine: {
                data: [
                    {yAxis: 50 ,label: {normal:{position:'end',formatter:'0.5Wm'}}},
                    {yAxis: 80 ,label: {normal:{position:'end',formatter:'0.8Wm'}}},
                    {yAxis: 100 ,label: {normal:{position:'end',formatter:'Wm'}}},
                    {yAxis: 110 ,label: {normal:{position:'start',formatter:'黄'}}},
                    {yAxis: 120 ,label: {normal:{position:'start',formatter:'橙'}}},
                    {yAxis: 130 ,label: {normal:{position:'start',formatter:'红'}}}
                ]
            }
        }
    ]
};
