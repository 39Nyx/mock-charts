option = {
    series: [{
        name: 'test',
        type: 'pie',
        radius: '50%',
        center: ['35%', '50%'],
        clockwise: false,
        data: [{
            value: 1,
            name: 'test1'
        }, {
            value: 2,
            name: 'test2'
        }, {
            value: 3,
            name: 'test3'
        }, {
            value: 3,
            name: 'test4'
        }, {
            value: 1,
            name: 'test5'
        }]
    }, {
        name: 'rose',
        type:'pie',
        radius: '25%',
        center : ['80%', '20%'],
        data: []
    }]
};
let lastPieSelectIndex = 0
myChart.dispatchAction({
    type: 'pieSelect',
    seriesName: 'test',
    dataIndex: 1
})
option.series[1].data = [
    {value: (Math.random() * 10 + 5), name:'rose1'},
    {value: (Math.random() * 10 + 5), name:'rose2'},
    {value: (Math.random() * 10 + 5), name:'rose3'},
    {value: (Math.random() * 10 + 5), name:'rose4'},
    {value: (Math.random() * 10 + 5), name:'rose5'},
    {value: (Math.random() * 10 + 5), name:'rose6'},
    {value: (Math.random() * 10 + 5), name:'rose7'},
    {value: (Math.random() * 10 + 5), name:'rose8'}
]
myChart.setOption(option)
myChart.on('click', (param) => {
    if (param.seriesName === 'test') {
        myChart.dispatchAction({
            type: 'pieSelect',
            seriesName: 'test',
            dataIndex: param.dataIndex
        })
        myChart.dispatchAction({
            type: 'pieUnSelect',
            seriesName: 'test',
            dataIndex: lastPieSelectIndex
        })
        lastPieSelectIndex = param.dataIndex
        option.series[1].data = [
            {value: (Math.random() * 10 + 5), name:'rose1'},
            {value: (Math.random() * 10 + 5), name:'rose2'},
            {value: (Math.random() * 10 + 5), name:'rose3'},
            {value: (Math.random() * 10 + 5), name:'rose4'},
            {value: (Math.random() * 10 + 5), name:'rose5'},
            {value: (Math.random() * 10 + 5), name:'rose6'},
            {value: (Math.random() * 10 + 5), name:'rose7'},
            {value: (Math.random() * 10 + 5), name:'rose8'}
        ]
        myChart.setOption(option)
    }
    
})