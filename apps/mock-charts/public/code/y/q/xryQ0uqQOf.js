var data = [{
    value: 1000,
    name: '北京'
}, {
    value: 900,
    name: '天津'
}, {
    value: 800,
    name: '上海'
}, {
    value: 700,
    name: '广东'
}, {
    value: 600,
    name: '厦门'
}, {
    value: 500,
    name: '江苏'
}, {
    value: 400,
    name: '浙江'
}, {
    value: 300,
    name: '河北'
}, {
    value: 200,
    name: '山东'
}, {
    value: 100,
    name: '河南'
}];
var a = 0;
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}

console.log(data);
option = {
    backgroundColor:'#22263F',
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center',
        textStyle:{
            color:'#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}"
    },
    legend: {

        top: '65%',
        data: ['直接访问', '邮件营销', ]
    },
    

    series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        radius: ['45%', '90%'],
        center: ['50%', '60%'],
        data: data,
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor: '#5F4C89',
                color: '#00000000'
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        label: {
            normal: {
                position: 'inner',
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            }
        },
    }]
};
data.push({
    value: a,
    tooltip: {
        show: false
    },
    label: {
        normal: {
           
            color: 'rgba(0,0,0,0.8)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    },
    itemStyle: {
        normal: {
             borderWidth: 3,
            borderColor: '#00000000',
            color: 'rgba(255,0,0,0)'
        },
        emphasis: {
            color: 'rgba(255,0,0,0)',

        },
    }
});