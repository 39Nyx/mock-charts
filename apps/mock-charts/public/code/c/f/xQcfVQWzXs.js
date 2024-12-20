option = {
    title: {
        text: '冒泡排序'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',

        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [

    ]
};

myChart.setOption(option);

//随机数据
function getRandomData(len) {
    var randomData = [];
    var idx = 0;
    while (idx < len) {
        randomData.push(Math.ceil(Math.random() * 100));
        idx++;
    }
    return randomData;
}

function copyData(data) {
    let cdata = [];
    data.forEach(d => {
        cdata.push(d);
    });
    return cdata;
}


var randomData = getRandomData(40);
var result = [];
const len = randomData.length;
var temp;
result.push(copyData(randomData));
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (randomData[j] > randomData[j + 1]) {
            temp = randomData[j];
            randomData[j] = randomData[j + 1];
            randomData[j + 1] = temp;
            result.push(copyData(randomData));
        }
    }
}

var index = 0;
var id = setInterval(function() {
    if (index < result.length) {
        var d = result[index];
        var data = [];
        for (let i = 0; i < d.length; i++) {
            data.push([i, d[i]]);
        }
        myChart.setOption({
            series: [{
                type: 'bar',
                data: data,
            }]
        })

    } else {
        clearInterval(id);
    }
    index++;
}, 30)