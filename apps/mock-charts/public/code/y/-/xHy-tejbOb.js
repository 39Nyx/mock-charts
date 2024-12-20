var data = [
    {
    value: 2905,
    name: '无照经营'
}, {
    value: 132,
    name: '超经营范围'
}, {
    value: 116,
    name: '无许可证经营'
}, {
    value: 103,
    name: '其他违反登记管理行为'
}, {
    value: 95,
    name: '擅自改变登记事项'
}, {
    value: 26,
    name: '登记时弄虚作假'
}, {
    value: 11,
    name: '违反名称管理规定'
}, {
    value: 6,
    name: '其他违反登记管理行为'
}
]
var datasname =[];
for(var i = 0;i<data.length;i++) {
    datasname.push(data[i].name)
}
    
option = {
    color:['#58C1DA','#0BA1FC','#41D5F2','#ADDD8E','#467EFF','#FF7145','#76FFE7','#FFD376'],
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        padding:10,
        data: datasname,
        itemWidth: 20,
        itemHeight: 10,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    series: [{
        name: '消费',
        type: 'pie',
        selectedMode: 'single',
        radius: ['30%', '70%'],
        center: ['50%', '50%'],
        label: {
            normal: {
                formatter: '{d}%',
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 22
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        data:data
    }]
};