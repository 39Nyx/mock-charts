option = {
    backgroundColor: '#ffffff',
    title:{
        text:'单位办理事项排名',
         subtext: '区县级',
        left:'left'
    },
    
    grid: {
        left: '3%',
        right: '4%',
        top:55,
        bottom: '10%',
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
            },data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局',
            '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟行政审批局','东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
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
           data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局', '上林县局',
            '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','东盟行政审批局','东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']}

    ],
    series: [{
            name: '事项申请数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [110,119,125,132,132,134,135,150,157,160,166,171,171,178,178,179,185]
        }]
};