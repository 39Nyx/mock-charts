option = {
    title: {
        show: true,
        text: "我的第一个echart示例",
        textStyle: {
            color: "#f00",
            fontSize: 30,
            fontWeight: "lighter"
        }
    },
    grid: {
        show: true
    },
    tooltip: {},
    legend: {
        data: ["示例"]
    },
    xAxis: {
        show: false,
        data: ["项一", "项二", "项三", "项四"]
    },
    yAxis: {
        show: false
    },
    series: [{
        name: "示例",
        type: "bar",
        data: [10, 20, 30, 40]
    }]
};