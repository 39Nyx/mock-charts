//  数据配置
const source = [
    ['日期', '正向消息', '中性消息', '负向消息'],
    ['2019/10/01', 338, 110, 206],
    ['2019/10/02', 416, 45, 113],
    ['2019/10/03', 452, 56, 79],
    ['2019/10/04', 129, 84, 99],
    ['2019/10/05', 383, 71, 256],
    ['2019/10/06', 461, 28, 126],
    ['2019/10/07', 377, 60, 76],
    ['2019/10/08', 423, 73, 238],
    ['2019/10/09', 252, 98, 130],
    ['2019/10/10', 40, 119, 67],
    ['2019/10/11', 267, 70, 257],
    ['2019/10/12', 290, 101, 254],
    ['2019/10/13', 295, 41, 51],
    ['2019/10/14', 53, 110, 151],
    ['2019/10/15', 447, 47, 54]
];
const pietheme = '消息情感';
const piedata = [{
        name: '正向消息',
        value: 1834
    },
    {
        name: '中性消息',
        value: 123
    },
    {
        name: '负向消息',
        value: 325
    }
];
myChart.resize({
    height: 320,
    width: 1112
})

// 图表配置

option = {
    // backgroundColor: '#fff',
    dataset: {
        source: source
    },
    grid: {
        left: 408,
        right: 40,
        top: 64,
        bottom: 64
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        // backgroundColor:'rgba(255,255,255,0.7)',
        padding:16,
        formatter:params => {
            var result = params[0].axisValue
            console.log(params)
            return params.reduce((acc, cur) => {
                    const {
                        data: data,
                        seriesIndex: seriesIndex,
                        seriesName: seriesName,
                        marker: marker,
                        componentSubType: componentSubType
                    } = cur;
                    const num = componentSubType === "line" ?
                        `${data[seriesIndex+1]}` :
                        `${data[seriesIndex+1]}`;
                    return [...acc,
                        `${marker} ${seriesName}：${num}`]
                }, [
                    `<span style="font-size: 14px; color: #FFFFFF; font-weight: bold; padding-bottom: 8px; display: inline-block;">${params[0].name}</span>`])
                .join("</br>")
        },
    },
    legend: {
        show: true,
        left: 372,
        top: 16,
        itemWidth: 12,
        itemHeight: 12
    },
    dataZoom: {
        height: 16,
        bottom: 8
    },
    color: ['#15B374 ', '#1574B3', '#D96969'],
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitNumber:4,
        axisLabel:{
            color:'#8C8C8C'
        },
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        }
    },
    series: [{
            type: 'bar',
            name:source[0][1],
            barWidth:'50%',
            stack:true,
            encode: {
                x: 0,
                y: 1
            },
        },{
            type: 'bar',
            name:source[0][2],
            barWidth:'50%',
            stack:true,
            encode: {
                x: 0,
                y: 2
            },
        },{
            type: 'bar',
            name:source[0][3],
            barWidth:'50%',
            stack:true,
            encode: {
                x: 0,
                y: 3
            },
        },
        {
            name: pietheme,
            type: 'pie',
            z: 100,
            radius: ['40%', '60%'],
            center: [180, '55%'],
            data: piedata,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}  ({d}%)"
            },
            label: {
                show: true,
                fontSize: 12,
                formatter: "{b}\n{d}%",
                color:'#A3A3A3'
            },
        }
    ]
};