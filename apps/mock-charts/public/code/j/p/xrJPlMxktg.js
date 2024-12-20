option = {
    title:{
        text:'终端分类',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
    legend: {
        orient: 'vertical',
        y: 30,
        x: 'right',
        data: ['Android', 'iOS', '其他手机', 'Windows', 'Mac OS', 'Linux', '其他PC']
    },
    series: [{
        name: '终端分类',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '25%'],
        center:['40%','50%'],
        label: {
            normal: {
                position: 'inner',
                formatter: '{b}:{c}',
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 188,
            name: '移动端'
        },{
            value: 39,
            name: 'PC'
        }]
    }, {
        name: '操作系统',
        type: 'pie',
        radius: ['40%', '70%'],
        center:['40%','50%'],
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },

        data: [{
            value: 55,
            name: 'iOS'
        }, {
            value: 112,
            name: 'Android'
        }, {
            value: 21,
            name: '其他手机'
        }, {
            value: 22,
            name: 'Windows'
        }, {
            value: 3,
            name: 'Linux'
        }, {
            value: 12,
            name: 'Mac OS'
        }, {
            value: 2,
            name: '其他PC'
        }]
    }]
};