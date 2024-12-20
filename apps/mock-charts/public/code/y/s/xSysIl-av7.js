
const sourceData = [
    {
        value: 0.06,
        pct: 0.8,
        date: '2018-09-01'
    },
    {
        value: 0.08,
        pct: 0.85,
        date: '2018-09-02'
    },
]

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        formatter: function(data) 
        {   
            const addtionalData = sourceData.map(item => item.pct)
            const date = sourceData.map(item => item.date)
            
            const index = data[0].dataIndex
            return `第一条数据：${data[0].data}<br/>第二条数据：${addtionalData[index]} <br/> 第三条数据${date[index]}`; 
        }

    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'line',
            areaStyle: {normal: {}},
            data:sourceData.map(item => item.value)
        }
    ]
};
