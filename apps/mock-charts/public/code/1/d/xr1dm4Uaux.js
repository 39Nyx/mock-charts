var data = [{
    value: 6,
    name: '三星'
}, {
    value: 15,
    name: '苹果'
},{
    value: 18,
    name: '华为'
}, {
    value: 4,
    name: '小米'
}, {
    value: 5,
    name: 'oppo'
}, {
    value: 4,
    name: 'ViVo'
}, {
    value: 2,
    name: '联想'
//}, {
//    value: 1,
//    name: '魅族'
}, {
    value: 15,
    name: '其他'
}];

var legendData = (function(){
    var ret = [];
    for(var i=0;i<data.length;i++){
        ret.push(data[i].name);
    }
    return ret;
})();

var pose = ['50%','40%'];

option = {
    backgroundColor: '#fff',
    title: {
        text: '终端品牌',
        //subtext: '2016年1月',
        //x: 'center',
        //y: '37%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: legendData
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        //radius: ['25%', '58%'],
        radius:'58%',
        //color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
        center:pose,
        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 10
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        center:pose,
        radius: ['58%', '78%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 10
                }
            }
        },
        data: data
    }]
};