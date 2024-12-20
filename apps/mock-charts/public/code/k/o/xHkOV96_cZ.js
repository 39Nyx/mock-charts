var randomData = function() {
    var index = [];
    for (i = 0; i < data.length; i++) {
        if (data[i][2] === 0) {
            index.push(i);
        }
    }
    var idx = Math.floor(Math.random() * index.length);
    i = index[idx];
    var val = (Math.round(Math.random()) + 1);
    data[i][2] = val;
};
var isOver = function() {
    for (i = 0; i < X; i++) {
        if (data[i * Y][2] === 0) {
            return 0;
        }
    }
    for (i = 0; i < X; i++) {
        for (j = 1; j < Y; j++) {
            if (data[i * Y + j][2] === 0) {
                return 0;
            }
            if (data[i * Y + j][2] == data[i * Y + j - 1][2]) {
                return 0;
            }
        }
    }
    for (j = 0; j < Y; j++) {
        for (i = 1; i < X; i++) {
            if (data[i * Y + j][2] == data[(i - 1) * Y + j][2]) {
                return 0;
            }
        }
    }
    is_over = true;
};
var vecMerge = function(i, j) {
    if (data[i * Y + j][2]) {
        if (val_vec.length) {
            if (data[i * Y + j][2] == val_vec[val_vec.length - 1]) {
                score += Math.pow(2, val_vec[val_vec.length - 1]);
                val_vec[val_vec.length - 1] += 1;
                val_vec.push(0);
                return 0;
            }
        }
        val_vec.push(data[i * Y + j][2]);
    }
};
var leftFcn = function() {
    for (j = 0; j < Y; j++) {
        val_vec = [];
        for (i = 0; i < X; i++) {
            vecMerge(i, j);
        }
        var idx = 0;
        for (k = 0; k < val_vec.length; k++) {
            if (val_vec[k]) {
                val_arr[idx * Y + j] = val_vec[k];
                idx += 1;
            }
        }
    }
};
var rightFcn = function() {
    for (j = 0; j < Y; j++) {
        val_vec = [];
        for (i = X - 1; i >= 0; i--) {
            vecMerge(i, j);
        }
        var idx = X - 1;
        for (k = 0; k < val_vec.length; k++) {
            if (val_vec[k]) {
                val_arr[idx * Y + j] = val_vec[k];
                idx -= 1;
            }
        }
    }
};
var upFcn = function() {
    for (i = 0; i < X; i++) {
        val_vec = [];
        for (j = Y - 1; j >= 0; j--) {
            vecMerge(i, j);
        }
        var idx = Y - 1;
        for (k = 0; k < val_vec.length; k++) {
            if (val_vec[k]) {
                val_arr[i * Y + idx] = val_vec[k];
                idx -= 1;
            }
        }
    }
};
var downFcn = function() {
    for (i = 0; i < X; i++) {
        val_vec = [];
        for (j = 0; j < Y; j++) {
            vecMerge(i, j);
        }
        var idx = 0;
        for (k = 0; k < val_vec.length; k++) {
            if (val_vec[k]) {
                val_arr[i * Y + idx] = val_vec[k];
                idx += 1;
            }
        }
    }
};
document.onkeydown = function(event) {
    if (is_over) {
        return 0;
    }
    if (event && (event.keyCode < 37 || event.keyCode > 40)) {
        return 0;
    }
    for (i = 0; i < X; i++) {
        for (j = 0; j < Y; j++) {
            val_arr[i * Y + j] = 0;
        }
    }
    // left
    if (event && event.keyCode === 37) {
        leftFcn();
    }
    // right
    if (event && event.keyCode === 39) {
        rightFcn();
    }
    // up
    if (event && event.keyCode === 38) {
        upFcn();
    }
    // down
    if (event && event.keyCode === 40) {
        downFcn();
    }
    var changed = false;
    for (i = 0; i < X; i++) {
        for (j = 0; j < Y; j++) {
            if (data[i * Y + j][2] != val_arr[i * Y + j]) {
                changed = true;
                data[i * Y + j][2] = val_arr[i * Y + j];
            }
        }
    }
    if (changed) {
        randomData();
        isOver();
        if (is_over) {
            score = 'OVER';
        }
    }
    option.series.data = data;
    option.title.text = score + '';
    myChart.setOption(option, true);
}

// 定义变量
var X = 4;
var Y = X;
var score = 0;
var data = [];
for (var i = 0; i < X; i++) {
    for (var j = 0; j < Y; j++) {
        data.push([i, j, 0])
    }
}
var val_arr = [];
var val_vec;
var is_over = false;

// 初始化
randomData();
randomData();

// 基于准备好的dom，初始化echarts实例
var axisType = {
    type: 'category',
    data: ['0', '1', '2', '3'],
    axisLine: {
        show: false
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        show: false
    }
};
var option = {
    title: {
        text: score + '',
        left: 'center',
        top: 15
    },
    tooltip: {
        formatter: function(params) {
            return '[' + params.value[0] + ', ' + params.value[1] + ']: ' + params.value[2]
        }
    },
    // animation: false,
    grid: {
        left: 60,
        right: 60
    },
    xAxis: axisType,
    yAxis: axisType,
    visualMap: {
        min: 0,
        max: 14,
        show: false
    },
    series: {
        name: '2048',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true,
                fontSize: 18,
                formatter: function(params) {
                    if (params.value[2]) {
                        return Math.pow(2, params.value[2])
                    } else {
                        return ''
                    }
                }
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: "#FFF"
            }
        }
    }
};