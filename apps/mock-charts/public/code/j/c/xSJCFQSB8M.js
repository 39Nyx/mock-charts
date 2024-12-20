var data = [{
    value: 290,
    name: '1'
}, {
    value: 132,
    name: '2'
}, {
    value: 116,
    name: '3'
}, {
    value: 103,
    name: '4'
}, {
    value: 95,
    name: '5'
}]
var datasname = [];
for (var i = 0; i < data.length; i++) {
    datasname.push(data[i].name)
}

option = {

    title: {
        text: '派出所等级统计',
        left: 'center',
        top: '10',
        textStyle: {
            color: 'white'
        }
    },
    // color:['#58C1DA','#0BA1FC','#41D5F2','#ADDD8E','#467EFF','#FF7145','#76FFE7','#FFD376'],
    tooltip: {
        trigger: 'item',
        // formatter: function(params, ticket, callback) {
        //     var res = params.seriesName;
        //     res += '<br/>' + params.name + ' : ' + params.percent + '%';
        //     return res;
        // }
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        padding: 10,
        data: ['1', '2', '3', '4', '5'],
        itemWidth: 20,
        itemHeight: 10,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    series: [{
        name: '消费',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '70%'],
        label: {
            normal: {
                formatter: '{c}',
                position: 'outside',
                textStyle: {
                    // color: '#fff',
                    fontSize: 22
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                lineStyle: {
                    // color:'#fff'
                }
            }
        },
        data: [{
            value: 290,
            name: '1'
        }, {
            value: 132,
            name: '2'
        }, {
            value: 116,
            name: '3'
        }, {
            value: 103,
            name: '4'
        }, {
            value: 95,
            name: '5'
        }]
    }]
};