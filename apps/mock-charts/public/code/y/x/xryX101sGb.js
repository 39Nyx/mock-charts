option = {
    series: []
}

//模拟数据，并排序
var data = []
var cnt = Math.ceil(Math.random() * 5) + 3
for (var i = 0; i < cnt; i++) {
    data.push({
        name: "data" + Math.ceil(Math.random() * 1000),
        value: Math.ceil(Math.pow(2, Math.random() * 5))
    })
}
for (var i = 0; i < data.length; i++) {
    for (var j = i + 1; j < data.length; j++) {
        if (data[j].value > data[i].value) {
            var temp = data[j]
            data[j] = data[i]
            data[i] = temp
        }
    }
}

//计算总值，用来算出各数据项的半径
var sum = 0
for (var i = 0; i < data.length; i++) {
    sum += data[i].value
}

//最大半径与最小半径
var maxR = 60,
    minR = 20
for (var i = 0; i < data.length; i++) {
    var serie = {
        type: "pie",
        data: [{
            name: "front",
            value: 0,
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0)"
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            silent: true
        }, {
            name: data[i].name,
            value: data[i].value,
            label: {
                normal: {
                    show: false,
                    position: "center"
                },
                emphasis: {
                    show: true
                }
            }
        }, {
            name: "back",
            value: 0,
            itemStyle: {
                normal: {
                    color: "rgba(0,0,0,0)"
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }]
    }
    for (var j = 0; j < data.length; j++) {
        if (j < i) {
            serie.data[0].value += data[j].value
        }
        if (j > i) {
            serie.data[2].value += data[j].value
        }
    }
    var radius = [(minR + (maxR - minR) / sum * serie.data[2].value) + "%", (maxR - (maxR - minR) / sum * serie.data[0].value) + "%"]
    serie.radius = radius
    option.series.push(serie)
}