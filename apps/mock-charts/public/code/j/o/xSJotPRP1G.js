console.log(window)
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(49, 64, 90, .8)',
        padding: [5, 10],
        confine: true,
        textStyle: {
            color: "#fff",
            align: "left"
        },
        extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)",
        axisPointer: {
            type: "cross",
            lineStyle: {
                color: "#00aeff"
            },
            crossStyle: {
                color: "#00aeff"
            },
            shadowStyle: {
                color: "rgba(200,200,200,0.2)"
            }
        },
        formatter: function(params) {
            console.log('p', params)
            return `<table class="echarts-tooltip">
                <thead>
                    <tr>
                        <td>日期</td>
                        <td>${params[0].name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${params[0].marker}${params[0].seriesName}</td>
                        <td>${params[0].value}</td>
                    </tr>
                    <tr>
                        <td>${params[1].marker}${params[1].seriesName}</td>
                        <td>${params[1].value}</td>
                    </tr>
                    <tr>
                        <td>${params[2].marker}${params[2].seriesName}</td>
                        <td>${params[2].value === 0 ? 0 : params[2].value + '%'}</td>
                    </tr>
                </tbody>
            </table>`
        }
    },
    legend: {
        data: ['流失', '回流', '流失率']
    },
    xAxis: [{
        type: 'category',
        data: ['1-1', '1-2', '1-3', '1-4', '1-5'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            axisLabel: {
                formatter: '{value}'
            }
        }, {
            type: 'value',
            name: '百分比',
            axisLabel: {
                formatter: '{value} %'
            }
        },
    ],
    series: [{
        name: '流失',
        type: 'bar',
        yAxisIndex: 0,
        data: [333, 555, 221, 943, 909]
    }, {
        name: '回流',
        type: 'bar',
        yAxisIndex: 0,
        data: [133, 355, 121, 543, 409]
    }, {
        name: '流失率',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [10, 43, 20, 55, 52]
    }]
};