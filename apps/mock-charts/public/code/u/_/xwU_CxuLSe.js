let color = ['#FF9A2A', '#FF4304'];
let chartData = [{
        name: "WEB 攻击次数",
        value: 2230
    },
    {
        name: "CC 攻击次数",
        value: 3230
    },];
let arrName = [];
let arrValue = [];
let sum = 0;
let pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
    sum = sum + v.value;
})

// 图表option整理
chartData.forEach((v, i) => {
    let radius = [50 - i * 15 + '%', 45 - i * 15 + '%']
    pieSeries.push({
        name: '',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: radius,
        center: ["30%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: v.value,
            name: v.name
        }, {
            value: sum ? (v.value / 3 + sum - v.value) : 1,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)"
            }
        }]
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: radius,
        center: ["30%", "50%"],
        label: {
            show: false
        },
        data: [{
            value: 7.5,
            itemStyle: {
                color: "#E3F0FF"
            }
        }, {
            value: 2.5,
            name: '',
            itemStyle: {
                color: "rgba(0,0,0,0)",
                
            }
        }]
    });
    v.percent = (v.value / sum * 100).toFixed(1) + "%";
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5]
                }
            }
        }
    });
})

option = {
    backgroundColor: '#fff',
    color: color,
    grid: {
        top: '22%',
        bottom: '62%',
        left: "30%",
        containLabel: false
    },
    legend: {
        show: true,
        icon:"circle",
        top: "center",
        left: '60%',
        data: arrName,
        width:50,
        padding: [0, 5],
        itemGap: 60,
        formatter: function(name) {
            // let str = ''
            // return "{title|" + name + "}\n{value|" + (objData[name].value) +"}  {title|项}"
            return "{title|" + name + "}"
        },
       
        textStyle: {
            rich: {
                title: {
                    fontSize: 14,
                    lineHeight: 15,
                    color: "#6A829A"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: "#fff"
                }
            }
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(params) {
                let item = chartData[params];
                console.log(item)
                // return '{circle|●}{name|'+ item.name +'}{bd||}{value|'+ item.value+'}'
                return '{circle|●}'
            },
            interval: 0,
            inside: true,
            verticalAlign: 'middle',
            textStyle: {
                color: "#333",
                fontSize: 14,
                rich: {
                    circle: {
                        fontSize: 40,
                    }
                }
            },
            show: true
        },
        data: lineYAxis
    }],
    xAxis: [{
        show: false
    }],
    series: pieSeries
};