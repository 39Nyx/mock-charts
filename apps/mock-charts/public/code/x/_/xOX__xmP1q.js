var data = {
    series: [{
        value: 30,
        hosCode: "1001"
    }, {
        value: 40,
        hosCode: "1002"
    }, {
        value: 50,
        hosCode: "1003"
    }],
    xAxisType: ["人民医院", "中心医院", "骨科医院"]

}

option = {
    color: ['#409efe'],
    title: {
        text: '***排名',
        left: 'center',
        textStyle: {
            align: 'center',
            color: '#409EFF'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '23%',
        containLabel: true
    },
    xAxis: [{
        name: "医疗机构",
        type: 'category',
        data: data.xAxisType,
        axisLine: {
            lineStyle: {
                color: '#00B3EE',
                width: 2
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    }],
    yAxis: [{
        name: '异常分值',
        type: 'value',
        axisTick: {
            lineStyle: {
                color: '#00B3EE'
            }
        },
        nameTextStyle: {
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: '#00B3EE',
                width: 2
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
    }],
    dataZoom: [{
        id: 'dataZoomX',
        show: true,
        type: 'slider',
        height: 9,
        start: 0,
        end: 50,
        minSpan: 2.5,
        maxSpan: 20,
        borderColor: "#ddd", //边框颜色。
        filterMode: 'filter',
        top: "bottom"
    }],
    series: [{
        name: '异常分值',
        type: 'bar',
        barWidth: '10%',
        data: data.series
    }]
};