option = {
    series: [
    {
        name: "CPU分配率 内圈",
        center: ["50%","50%"],
        radius: ["48%","50%"],
        hoverAnimation: false,
        type: "pie",
        data: [
            {
                value: 84,
                name: "",
                label: {
                    normal: {
                        show: true,
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 28,
                            fontWeight: "bold"
                        },
                        position: "center"
                    }
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: "#5886f0",
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00a2ff'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]),
                        borderWidth: 25
                    },
                    emphasis: {
                        color: "#5886f0",
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#85b6b2'
                        }, {
                            offset: 1,
                            color: '#6d4f8d'
                        }]),
                        borderWidth: 25
                    }
                },
            },
            {
                name: '',
                value: 16,
                itemStyle: {
                    normal: {
                        label: {"show": false},
                        labelLine: {"show": false},
                        color: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)',
                        // borderWidth: 0
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)',
                        // borderWidth: 0
                    }
                }
            }
        ],
        zlevel: 2
    },
    {
        type: "pie",
        center: ["50%","50%"],
        radius: ["45%","53%"],
        clockWise: false,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false}
            }
        },
        data: [
            {value:100, name:''}
        ],
        zlevel: 1
    }
]
};