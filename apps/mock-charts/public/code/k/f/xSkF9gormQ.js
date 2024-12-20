var _manfen = [100, 100, 100, 100, 100, 100, 100, 100];
var _zwylnl3 = [1, 0, 0, 1, 0, 1, 0, 1];
var _zhanghao = ['父母世界', '肌萌研究所', '妈妈的朋友圈', '假妈爱测评', '母婴百科', '育儿者联盟', '神奇妈力奥', '试试']
option = {
    title: {
        text: '站外引流能力对比',
        x: '25%',
        top: 10
    },
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(0,0,0,0)',
            }
        },
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        x: '10%',
        y: '15%',
        width: '50%',
        height: '50%'
    },
    legend: {
        show: true,
        data: ['得分', '满分'],
        selectedMode: false,
        left: '50%',
        top: 50

    },
    xAxis: [{
        type: 'category',
        data: _zhanghao,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        z: 2,
        axisLabel: {
            textStyle: {
                'color': '#333333'
            },
            rotate: 20,
            margin: 5,
            interval: 0
        }
    }, {
        show: false,
        type: 'category',
        data: _zhanghao
    }],
    yAxis: {
        type: 'value',
        scale: true,
        max: 100,
        min: 0,
        z: 2,
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [{
        name: '满分',
        type: 'bar',
        xAxisIndex: 1,
        z: 1,
        itemStyle: {
            normal: {
                color: '#aaa',
            }
        },

        data: _manfen
    }, {
        name: '得分',
        type: 'bar',
        z: 3,
        label: {
            normal: {
                show: 'true',
                position: 'top',
                color: '#ffffff'
            }
        },
        data: _zwylnl3
    }]
}