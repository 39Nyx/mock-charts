app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['建设项目个数','施工项目个数','竣工项目个数']
    },
    series: [
        {
            name:'建设项目',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:3356, name:'建设项目个数'},
                {value:3116, name:'施工项目个数'},
                {value:1951, name:'竣工项目个数'},
            ]
        }
    ]
};
