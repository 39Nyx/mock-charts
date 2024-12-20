option = {
    backgroundColor: '#ffffff',
    title:{
        text:'单位检查情况',
         subtext: '市级',
        left:'left'
    },
    legend: {
        top: 50,
        left:30,
        textStyle: {
            color: '#000000',
        },
        data: ['违法违规企业数','检查企业数','完成整改企业数']
    },
    grid: {
        left: '3%',
        right: '4%',
        top:75,
         bottom: '1%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['区局', '南宁市局', '柳州市局', '桂林市局', '梧州市局', 
         '北海市局',  '防城港市局', '钦州市局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']

        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
           data: ['区局',  '南宁市局', '柳州市局',  '桂林市局', '梧州市局', 
         '北海市局', '防城港市局', '钦州市局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
}

    ],
    series: [
        {
            name: '检查企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5793f3',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data:[347,486,389,467,498,437,311,326,302,394,310,440,394,394,494]
        },{
            name: '违法违规企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#999',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [207,232,160,204,228,221,204,195,192,192,176,187,233,170,241]
        },{
            name: '完成整改企业数',
            type: 'bar',
            barWidth : 8,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#7eccf1',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60,73,70,69,71,72,54,54,72,61,79,72,71,79,66]
        }]
};