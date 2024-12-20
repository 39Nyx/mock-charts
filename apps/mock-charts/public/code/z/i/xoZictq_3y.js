let x = (Math.random() * 100).toFixed(0);
let data = [
    ["Time", 0, 2, 3, 4, 5, 6, 7,8,9,10],
    ["MeasuredValue", 
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0)],
    ["CMAQ",(Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0)],
    ["OPAQ",(Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0),
    (Math.random() * 100).toFixed(0)]
] 
let title = '空气质量AQI'
let SymbolType = ['triangle','circle','emptyCircle']
let color = ['#000','red','blue']
let name = ['实测值','CMAQ','OPAQ']




let series = [];
let source = [];
data.map(v=>{
    source.push(v)
})

SymbolType.map((v,i)=>{
    series.push({
        name:name[i],
        type:'line',
        symbol:v,
        symbolSize:10,
        color:color[i],
        seriesLayoutBy: 'row'
    })
})
option = {
    title: {
        text: title
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 100
        }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    dataset: {
        source: source
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: source[0]
    },
    yAxis: {
        type: 'value'
    },
    series: series
};
