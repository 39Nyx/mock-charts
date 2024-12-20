option = {
    title : {
        text: "投诉量",
        top: 5,
        left: 10,
        textStyle: {
            color: "#fff",
            fontFamily: "PingFangSC-Semibold",
            fontSize: 18
        }
    },
    legend: {
        x: "right",
        data: ["航班变化数"],
        textStyle: {
            color: "#AAAAAA"
        }
    },
    grid: { top: "26%", left: "10%", bottom: "15%", right: "5%" },
    xAxis: {
        type: "category",
        name: "",
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: "#393B4D",
                opacity: "0.1"
                
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontFamily: "PingFangSC-Regular",
            fontSize: 12,
            color: "#FFFFFF"
        },
        splitLine: {
            //show: true
        },
        data: [ "2017/09", "2017/10", "2017/11", "2017/12", "2018/01", "2018/02(D)" ]
    },
    yAxis: {
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#393B4D",
                opacity: "0.1"
                
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontFamily: "PingFangSC-Regular",
            fontSize: 12,
            color: "#FFFFFF"
        },
    },
    
    tooltip: {
        axisPointer: {
            type: "cross",
            label: {
                show: false
            },
            crossStyle: {
                color: "#777883"
            }
        }
    },
    color:["#F64951"],
    series: [{
        name: "航班变化数",
        type: "line",
        symbol: "circle",
        smooth: false,
        lineStyle: { normal: { width: 2 } },
        label: { normal: { show: false } },
        
        markLine: {
            //silent: true,
            symbol: "",
            symbolSize: 0,
            label: {
                show: false
            },
            data: [
                { yAxis: 64, name: "test" }
            ]
        },
        
        data: [ 90, 90, 93.8, 60, 86.8, 81.5 ]
    } ]

};