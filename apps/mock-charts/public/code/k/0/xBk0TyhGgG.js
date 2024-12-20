var data = [{
    name: '大浦管理处',
    value: 25,
    checked:140,
    uncheck:881,
    base:1021,
    itemStyle:{
        normal:{
            color:'#fb6e52'
        }
    }
}, {
    name: '官窑管理处',
    value: 42,
    checked:212,
    uncheck:3435,
    base:3647,
    itemStyle:{
        normal:{
            color:'#ffce55'
        }
    }
}, {
    name: '罗村管理处',
    value: 3,
    checked:40,
    uncheck:4415,
    base:4455,
    itemStyle:{
        normal:{
            color:'#48cfae'
        }
    }
}, {
    name: '小塘管理处',
    value: 30,
    checked:160,
    uncheck:2240,
    base:2400,
    itemStyle:{
        normal:{
            color:'#ec87bf'
        }
    }
}];
var dataName = [];
data.forEach(function(ele, index) {
    dataName.push(ele.name)
})

option = {
    backgroundColor:'#000',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        show:false,
        x: 'center',
        y: '2%',
        itemWidth: 24,
        itemGap: 15,
        itemHeight: 14,
        align: 'left',

        data: dataName,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '68%',
        center: ['50%', '50%'],
        clockwise: false,
        data: data,
        label: {
            normal: {
                formatter:function(params){
                    return params.name+'\n已排查：'+params.data.checked+'\n未排查：'+params.data.uncheck+'\n底数：'+params.data.base
                },
                fontSize: 16,
                align:'left'
            }

        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 34
            }
        },
        itemStyle: {
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};