option = {
    backgroundColor: '#02063a',
    color: ['#297dc5','#b65137', '#b6af46', '#828a96'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: 'center',
        textStyle: {
            color: '#fff'
        },
        data: ['三级钢','角钢','混泥土','其他']
    },
    series : [
        {
            name: '累计送货统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:3456, name:'三级钢'},
                {value:2976, name:'角钢'},
                {value:1956, name:'混泥土'},
                {value:2888, name:'其他'}
            ]
        }
    ]
};
