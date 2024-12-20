var names = ['1', '2', '3', '4', '5'];
var values = [220, 182, 191, 234, 290];
var itemStyle = {
    normal: {
        color: '#c23531'
    }
};

option = {
    title: {
        text: 'Awesome Chart'
    },
    legend: {
        show: true,
        data: names
    },
    xAxis: {
        data: names
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: values
    }, {
        type: 'scatter',
        name: '1',
        itemStyle: itemStyle
    }, {
        type: 'scatter',
        name: '2',
        itemStyle: itemStyle
    }, {
        type: 'scatter',
        name: '3',
        itemStyle: itemStyle
    }, {
        type: 'scatter',
        name: '4',
        itemStyle: itemStyle
    }, {
        type: 'scatter',
        name: '5',
        itemStyle: itemStyle
    }]
};

myChart.on('legendselectchanged', function(params) {
    var newNames = [];
    var newValues = [];
    for (var i = 0; i < names.length; i++) {
        if (params.selected[names[i]] == true) {
            newNames.push(names[i]);
            newValues.push(values[i]);
        }
    }

    option.xAxis.data = newNames;
    option.series[0].data = newValues;
    myChart.setOption(option);
});