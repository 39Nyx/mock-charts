var data1=[122,150,149,130,142,178,148,180,146,176,113,126,131,169];
option = {
    backgroundColor:'#fff',
    legend: {
        top:'17%',
        data: ['日常检查','专项检查', '飞行检查','督导检查','临时检查']
    },
    grid:{
        bottom:'45%',
        right:'20%',
        left:'20%',
        top:'25%'
    },
    title: {
        text: '受理案件案值分析'
    },
    xAxis: {
         splitLine: {
            lineStyle: {
                show:true,
                type: 'dashed'
            }
        },"axisLabel": {
            "interval": 0,
             rotate:40,
            textStyle:{
                fontSize:12,
                color:'#000'
            },},
        data: ['南宁市', '柳州市', '桂林市', '梧州市', 
         '北海市',  '防城港市', '钦州市'
        ,'贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
    },
    yAxis: {
        name:'违规率',
        axisLabel: {
            formatter: '{value} %'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
     tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{a}:{c}(违规率)'
         
     },
    series: [{
        name:'日常检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 5;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(164,298, 250)'
                }, {
                    offset: 1,
                    color: 'rgb(33, 207, 209)'
                }]),
       data:[9,11,14,18,15,18,21,8,9,11,16,10]
    },{
        name:'飞行检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 5;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#AEC7EB'
                }]),
        data:[8,12,17,19,25,18,9,12,13,9,6,5]
    },{
        name:'督导检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 5;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }]),
        data:[31,15,55,4,12,31,2,5,8,21,15,9,31,12]
    },{
        name:'专项检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 5;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#F2CB64'
                }]),
        data:[13,12,11,9,5,8,11,21,3,9,6,1]
    },{
        name:'临时检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 5;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#98DFBA'
                }]),
        data:[5,3,10,4,8,14,9,12,7,16,8,9,8,5]
    }]
};