var prodCode = ['品种1', '品种2', '品种3', '品种4', '品种5'];
var prodCodeX = prodCode.map(function(str) {
    return str + ' ';
});
var timeData = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
var pieData = [{value: 335,name: '品种1'}, {value: 310,name: '品种2'}, {value: 234,name: '品种3'}, {value: 135,name: '品种4'}, {value: 1548,name: '品种5'}];
pieData =  pieData.map(function(data) {
    data.name = data.name+' ';
    return data;
});
var barData =  [{name: '品种1',type: 'bar',data: [25, 52, 200, 334, 190, 224, 220]}, {name: '品种2',type: 'bar',data: [50, 58, 66, 115, 89, 111, 210]}, {name: '品种3',type: 'bar',data: [120, 152, 155, 156, 100, 140, 112]}, {name: '品种4',type: 'bar',data: [210, 252, 200, 202, 142, 190, 198]}, {name: '品种5',type: 'bar',data: [92, 88, 120, 86, 132, 140, 77]}];
option = {
    title: {
        text: '订货分析',
        x: 'left',
        show: false,
        left: '1%',
        textStyle: {
            color: '#333'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: [{
        orient: 'vertical',
        right: '5%',
        itemWidth: 9,
        itemHeight: 8,
        data: prodCodeX
    }, {
        orient: 'horizontal',
        bottom: '5%',
        right: '5%',
        itemWidth: 9,
        itemHeight: 8,
        data: prodCode
    }],
    grid: [{
        top: '45%',
        bottom: '15%',
        right: '8%',
        left: '8%'
    }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        data: timeData,
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'value'
    }],
    series: [{
        name: '订货量占比',
        type: 'pie',
        radius: '35%',
        center: ['50%', '20%'],
        data: pieData,
        label: {
            normal: {
                show: false,
                position: 'outside'
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        tooltip: {
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    }]
}
for (var i = 0; i < barData.length; i++) {
    option.series.push(barData[i]);
}