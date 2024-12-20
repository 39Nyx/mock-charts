let data = {
    dateTimes: ["12-01", "12-02", "12-03", "12-04", "12-05", "12-06", "12-07"],
    classScoreRates: [0.60, 0.80, 0.90, 0.60, 0.70, 0.80, 0.90],
    personalScoreRates: [0.30, 0.45, 0.9, 1, 1, 0.70, 0.80],
    totalScores: [30, 45, 90, 100, 100, 70, 80],
    fullMarks: [100, 100, 100, 100, 100, 100, 100],
}

option = {
    title: [{
        text: " \n班级得分率\n我的得分\n试卷满分",
        bottom: 35,
        left: 10,
        textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: "normal",
            formatter: function(value) {
                return "{table|" + value + "}";
            },
            rich: {
                table: {
                    align: "center"
                }
            }
        }
    }],
    legend: {
        data: [{
                name: "班级得分率",
                icon: "emptyCircle",
            },
            {
                name: "我的得分率",
                icon: "circle"
            }
        ],
        itemWidth: 10,
        itemHeight: 10,
        right: 30,
        top: 30,
        itemGap: 20
    },
    grid: {
        top: 100,
        bottom: 80,
        left: 100,
        right: 40
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        data: data.dateTimes,
        axisLabel: {
            formatter: function(value, index) {
                return (
                    "{table|" +
                    data.classScoreRates[index] +
                    "}\n{table|" +
                    data.totalScores[index] +
                    "}\n{table|" +
                    data.fullMarks[index] +
                    "}"
                );
            },
            rich: {
                table: {
                    lineHeight: 20,
                    align: "center"
                }
            }
        }
    }],
    yAxis: [{
        type: "value",
        scale: true,
        name: "得分率",
        max: 1,
        min: 0,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    }],
    series: [{
            name: "班级得分率",
            type: "scatter",
            label: {
                show: false,
                position: "top",
                formatter: "{c}"
            },
            symbol: 'emptyCircle',
            symbolSize: 10,
            data: data.classScoreRates
        },
        {
            name: "我的得分率",
            type: "line",
            label: {
                show: true,
                position: "top",
                formatter: "{c}"
            },
            symbol: 'circle',
            symbolSize: 10,
            data: data.personalScoreRates
        }
    ]
};