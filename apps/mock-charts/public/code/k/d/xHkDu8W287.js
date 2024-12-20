var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = { 
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}%'
        }
    }
};
option = {
    title: {
        text: '多维条形图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
   //     formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
    },
    legend: {
        y: 55,
        itemGap : document.getElementById('main').offsetWidth / 8,
        data:['男', '女']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid: {
        y: 80,
        y2: 30
    },
    xAxis : [
        {
            type : 'value',
            position: 'top',
            splitLine: {show: false},
            axisLabel: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            splitLine: {show: false},
            data : ['FE-3AC', 'FE-3AD', 'FE-4KA', 'FE-5']
        }
    ],
    series : [
        {
            name:'男',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[11424, 15534, 4119, 10356]
        },        
        {
            name:'女',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[46701, 75232, 8898, 27082]
        }
    ]
};
                    