var fontSize = 10;
var echartData = [{
    value: 2154,
    name: '新办事项数'
}, {
    value: 3854,
    name : '其他类型办理事项'
}]
var rich = {
    yellow: {
        color: "#00cc99",
        fontSize: fontSize * 2,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ccc",
        fontSize: fontSize * 4,
        align: 'center'
    },
    blue: {
        color: '#49dff0',
        fontSize: fontSize * 1.4,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
};
var percent =(echartData[0].value/(echartData[1].value+echartData[0].value)).toFixed(4);
option = {
    backgroundColor: '#fff',
    title: {
        subtext: (percent * 100) + '%',
        text: '新办率',
        x: 'center',
        y: '45%',
        textStyle: {
            color: '#f2c967',
            fontSize: 24
        },
        subtextStyle: {
            color: '#f2c967',
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
        textStyle: {
            fontSize: fontSize * 1.6
        }
    },
    series: [{
        name: 'pie',
        type: 'pie',
        radius: ['30%', '42%'],
        hoverAnimation: false,
        color: ['#00cc99', '#ccc'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; 
                    var percent = 0; 
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{yellow|' + params.value + '}';
                },
                rich: rich
            },
        },
        data: echartData
    }]
};