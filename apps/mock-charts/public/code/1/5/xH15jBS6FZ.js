// 类目轴折线图

var data = {
    // x轴类目数据
    cate: [1, 2, 3, 4, 5, 6, 7, 8],
    // 系列
    series:{
        // 系列值与cate个数一致，则可以省略x下标
        A: [1 ,2 ,3, 4, 5, 6, 7, 8],
        // 系列值与cate个数不一致，则不能省略x下标
        B: [ [2, 3], [3, 3], [6, 8] ]
    }
}

var legends = Object.keys(data.series)
var series = legends.map(key => {
    return {
        name: key,
        data: data.series[key],
        type: 'line'
    }
})

option = {
    legend: {
        data: legends
    },
    xAxis: {
        data: data.cate
    },
    yAxis: {
        show: true
    },
    tooltip: {
        show: true  
    },
    series: series
}