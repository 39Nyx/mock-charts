option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['服装鞋包','家用电器','居家生活','美食厨房','美妆洗护','手机数码','书籍']
    },
    series : [
        {
            name: '类目',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:355, name:'服装鞋包',itemStyle: {normal:{color: '#EA9294'}}},
                {value:382, name:'家用电器',itemStyle: {normal:{color: '#949494'}}},
                {value:1650, name:'居家生活',itemStyle: {normal:{color: '#A4D2D5'}}},
                {value:4719, name:'美食厨房',itemStyle: {normal:{color: '#F1C0B1'}}},
                {value:2626, name:'美妆洗护',itemStyle: {normal:{color: '#BAD7CB'}}},
                {value:25, name:'手机数码',itemStyle: {normal:{color: '#8B99A1'}}},
                {value:243, name:'书籍',itemStyle: {normal:{color: '#E6B9C0'}}},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
