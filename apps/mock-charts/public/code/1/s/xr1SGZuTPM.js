option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['服装鞋包','家用电器','居家生活','美食厨房','美妆洗护','母婴用品','其他','汽配摩托','手机数码','书籍','文化玩乐','运动户外','珠宝饰品']
    },
    series : [
        {
            name: '类目',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:334, name:'服装鞋包',itemStyle: {normal:{color: '#EA9294'}}},
                {value:1707, name:'家用电器',itemStyle: {normal:{color: '#949494'}}},
                {value:882, name:'居家生活',itemStyle: {normal:{color: '#A4D2D5'}}},
                {value:4143, name:'美食厨房',itemStyle: {normal:{color: '#F1C0B1'}}},
                {value:467, name:'美妆洗护',itemStyle: {normal:{color: '#BAD7CB'}}},
                {value:8, name:'母婴用品',itemStyle: {normal:{color: '#8B99A1'}}},
                {value:60, name:'其他',itemStyle: {normal:{color: '#E6B9C0'}}},
                {value:12, name:'汽配摩托',itemStyle: {normal:{color: '#A9B9C6'}}},
                {value:229, name:'手机数码',itemStyle: {normal:{color: '#EEA8A9'}}},
                {value:1766, name:'书籍',itemStyle: {normal:{color: '#A9A9A9'}}},
                {value:8, name:'文化玩乐',itemStyle: {normal:{color: '#B6DBDD'}}},
                {value:359, name:'运动户外',itemStyle: {normal:{color: '#F4CDC1'}}},
                {value:26, name:'珠宝饰品',itemStyle: {normal:{color: '#C8DFD5'}}},
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