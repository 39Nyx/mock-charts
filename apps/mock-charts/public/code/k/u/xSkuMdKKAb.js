var values = [220, 12, 91, 234];
var datas = [];

option = {
    title: {
        text: 'xxxxxxxxxx',
        left: 'center',
        top: 'top',
        textStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            color: '#A6CAE2'
        }
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#021F66'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            rotate: 20,
            color: '#A6CAE2'
        },
        splitLine: {
            show: false
        },
        data: ['Susfafsfsafdsn', 'Msfsafsafdsaon', 'Tsafsfsaue', 'Wsfsadfsfed']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#A6CAE2'
        },
        splitLine: {
            lineStyle: {
                color: '#021F66'
            }
        }
    },
    series: [{
        type: 'pictorialBar',
        data: [220, 12, 91, 234],
        symbol: 'triangle',
        itemStyle: {
            normal: {
                color: '#59FD4D'
            }
        },
        symbolRepeat: false,
        symbolSize: [25, '100%'],
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontFamily: '',
                color: '#FFA03F',
                position: 'insideTopLeft',
                offset: [-5, 0],
                formatter: '{c} %'
            }
        },
    }]
};