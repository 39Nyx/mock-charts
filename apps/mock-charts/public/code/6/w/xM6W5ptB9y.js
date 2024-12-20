data = [];
data[0] = [           0 , 11738341.67,  12058557.33 ,  12591492.22     ,    12645168.12 ,   0];
data[1] = [ 11738341.67 , 320215.66  ,    532934.89 ,  53675.90        ,    138046.82  ,   12507121.3];
xLabel =  [   '历史工资', '涨幅工资' , '外部招聘预估',  '职级调整预估', '员工离职预估', '预估总和'];
option = {
    title: {
        text: '天津丰咖啡餐饮管理有限公司',
        x:"45%",
        y:"93%"
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top:'10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: xLabel
    },
    yAxis: {
        name:'门店数量',
        type: 'value',
        axisLine: {
            symbol: ['none', 'arrow'], //两端都显示箭头
            symbolOffset: [0, 10] //箭头距离两端的距离,可为负数
        }
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: data[0]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'inside'
            },
            data: data[1],
            itemStyle: {
                //通常情况下：
                normal: {
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function(params) {
                        var colorList = ['#516b91', '#edafda', '#93b7e3', '#516b91','#516b91', '#edafda', '#93b7e3', '#516b91'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        },
    ]
};