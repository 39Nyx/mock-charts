app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Raw material','Other expenses','Salary','Rent']
    },
    series: [
        {
            name:'Operating Expenses (monthly)',
            type:'pie',
            radius: ['35%', '70%'],
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
                {value:500, name:'Raw material'},
                {value:600, name:'Other expenses'},
                {value:2000, name:'Salary'},
                {value:8000, name:'Rent'}
            ]
        }
    ]
};