// 类目轴折线图

var data = {
    // x轴类目数据
    cate: [1, 2, 3, 4, 5, 6, 7, 8],
    // 左侧y中的系列
    yAxisLeft: {
        // 系列值与cate个数一致，则可以省略x下标
        '人数': [1 ,2 ,3, 4, 5, 6, 7, 8],
        // 系列值与cate个数不一致，则不能省略x下标
        '人数二': [ [2, 3], [3, 3], [6, 8] ]
    },
    // 右侧y中的系列
    yAxisRight: {
         // 系列值与cate个数一致，则可以省略x下标
        '个数': [1 ,2 ,3, 4, 5, 6, 7, 8],
        // 系列值与cate个数不一致，则不能省略x下标
        '个数二': [ [2, 3], [3, 3], [6, 8] ]
    }
}

var leftLegends = Object.keys(data.yAxisLeft)
var rightLegends = Object.keys(data.yAxisRight)

var leftSeries = leftLegends.map(key => {
    return {
        name: key,
        data: data.yAxisLeft[key],
        yAxisIndex: 0,
        type: 'scatter'
    }
})

var rightSeries = rightLegends.map(key => {
    return {
        name: key,
        data: data.yAxisRight[key],
        yAxisIndex: 1,
        type: 'scatter'
    }
})

option = {
    legend: {
        data: leftLegends.concat(rightLegends)
    },
    xAxis: {
        name: 'xAxis',
        data: data.cate
    },
    yAxis:  [{
        type: 'value',
        name: '人数',
        min: 0,
        position: 'left'
    }, {
        type: 'value',
        name: '个数',
        min: 0,
        position: 'right'
    }],
    tooltip: {
        show: true  
    },
    series: leftSeries.concat(rightSeries)
}