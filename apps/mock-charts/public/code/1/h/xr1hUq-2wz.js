option = {
    title : {
        text: '类目',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: ['服装鞋包','家用电器','居家生活','美食厨房','美妆洗护','母婴用品','其他','汽配摩托','手机数码','书籍','文化玩乐','艺术品','运动户外','珠宝饰品']
    },
    series : [
        {
            name: '类目',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:683, name:'服装鞋包',itemStyle: {normal:{color: '#EA9294'}}},
                {value:1027, name:'家用电器',itemStyle: {normal:{color: '#EEA9A9'}}},
                {value:999, name:'居家生活',itemStyle: {normal:{color: '#949494'}}},
                {value:2986, name:'美食厨房',itemStyle: {normal:{color: '#A9A9A9'}}},
                {value:2472, name:'美妆洗护',itemStyle: {normal:{color: '#A4D2D5'}}},
                {value:98, name:'母婴用品',itemStyle: {normal:{color: '#B6DBDD'}}},
                {value:231, name:'其他',itemStyle: {normal:{color: '#F1C0B1'}}},
                {value:2, name:'汽配摩托',itemStyle: {normal:{color: '#F4CDC1'}}},
                {value:156, name:'手机数码',itemStyle: {normal:{color: '#BAD7CB'}}},
                {value:1153, name:'书籍',itemStyle: {normal:{color: '#C8DFD5'}}},
                {value:1, name:'文化玩乐',itemStyle: {normal:{color: '#8B99A1'}}},
                {value:15, name:'艺术品',itemStyle: {normal:{color: '#A2ADB4'}}},
                {value:144, name:'运动户外',itemStyle: {normal:{color: '#E6B9C0'}}},
                {value:33, name:'珠宝饰品',itemStyle: {normal:{color: '#EBC7CD'}}}
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
