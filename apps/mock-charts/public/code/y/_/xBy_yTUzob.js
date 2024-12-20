app.title = '堆叠条形图';
var _actual = [50, 100, 150];
var _should = [150, 150, 150];
var _college = ['学院1', '学院2', '学院3'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(data) {
            console.log(data[0].dataIndex);
            var _str = _college[data[0].dataIndex] + "<br>";
            _str += "男应报道： " + _should[data[0].dataIndex] + " 人<br>";
            _str += "男实报道： " + _actual[data[0].dataIndex] + " 人<br>";
            _str += "男报到率： " + (_actual[data[0].dataIndex] * 100 / _should[data[0].dataIndex]).toFixed(2) + " %<br>";
            _str += "女应报道： " + _should[data[0].dataIndex] + " 人<br>";
            _str += "女实报道： " + _actual[data[0].dataIndex] + " 人<br>";
            _str += "女报到率： " + (_actual[data[0].dataIndex] * 100 / _should[data[0].dataIndex]).toFixed(2) + " %";
            return _str;
        }
    },
    legend: {
        show: true,
        top: 10,
        data: ['男', '女']
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        top: 40,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: true,
        max: 130
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: _college
    },
    series: [{
        name: '男应报道人数',
        type: 'bar',
        stack: '人数',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _should[data.dataIndex] + " 人";
                },
                position: 'inside'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: _should.map(function(item, index) {
            return parseInt(item / (item + _actual[index]) * 100)
        })
    }, {
        name: '男',
        type: 'bar',
        stack: '人数',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _actual[data.dataIndex] + " 人";
                },
                position: 'inside'
            }
        },
        itemStyle: {
            normal: {
                color: '#188333'
            }
        },
        data: _actual.map(function(item, index) {
            return parseInt(item / (item + _should[index]) * 100)
        })
    }, {
        name: '男报到率',
        type: 'bar',
        stack: '人数',
        label: {
            normal: {
                formatter: function(data) {
                    return (_actual[data.dataIndex] * 100 / _should[data.dataIndex]).toFixed(2) + " %";
                },
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#000'
                }
            }
        },
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: [30, 30, 30]
    },{
        name: '女应报道人数',
        type: 'bar',
        stack: '人数1',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _should[data.dataIndex] + " 人";
                },
                position: 'inside'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: _should.map(function(item, index) {
            return parseInt(item / (item + _actual[index]) * 100)
        })
    }, {
        name: '女',
        type: 'bar',
        stack: '人数1',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _actual[data.dataIndex] + " 人";
                },
                position: 'inside'
            }
        },
        itemStyle: {
            normal: {
                color: '#c54040'
            }
        },
        data: _actual.map(function(item, index) {
            return parseInt(item / (item + _should[index]) * 100)
        })
    }, {
        name: '女报到率',
        type: 'bar',
        stack: '人数1',
        label: {
            normal: {
                formatter: function(data) {
                    return (_actual[data.dataIndex] * 100 / _should[data.dataIndex]).toFixed(2) + " %";
                },
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#000'
                }
            }
        },
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: [30, 30, 30]
    }]
};