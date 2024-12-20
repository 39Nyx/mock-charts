

var data=[{value:3,name:'发动机'},{value:1,name:'车门生锈'},{value:5,name:'气门室盖漏油'},{value:5,name:'变速箱异响顿挫'},{value:6,name:'4缸失火'},{value:2,name:'安全气囊故障'},{value:0,name:'异响'}]
var labelData = [{value:1,name:'发动机'},{value:1,name:'车门生锈'},{value:1,name:'气门室盖漏油'},{value:1,name:'变速箱异响顿挫'},{value:1,name:'4缸失火'},{value:1,name:'安全气囊故障'},{value:1,name:'异响'}];

option = {
    title: {
        text: '故障分类',
        left: '50%',
        textAlign: 'center',
        top: '20%'
    },
    color: ['#22C3AA'],
    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
            normal: {
                color: 'white',
                borderColor: '#22C3AA'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '100%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#22C3AA',
                borderColor: 'white'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};
