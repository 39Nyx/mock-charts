var bgColor = '#10286C';
option = {
    backgroundColor: bgColor,
    color: ['#0085FA', '#25E65F', '#F9D236'],
    tooltip: {
        show: false,
    },
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true
    },
    series: [{
        legendHoverLink: false,
        hoverAnimation: false,
        selectedMode: 'single' || 'multiple',
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['50%', '50%'],
        data: [{
                value: 651212,
                name: '哈罗APP',
                selected: true,
                label: {
                    formatter: [
                        '{name|{b}}',
                        '{ratio|{d}%}'
                    ].join('\n'),
                    lineHeight: 15,
                    color: '#fff',
                    rich: {
                        name: {
                            width: 50,
                            color: '#fff',
                            alignt: 'center',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                        ratio: {
                            width: 50,
                            color: '#fff',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                    },
                },

            },
            {
                value: 302112,
                name: '支付宝',
                label: {
                    formatter: [
                        '{name|{b}}',
                        '{ratio|{d}%}'
                    ].join('\n'),
                    lineHeight: 15,
                    color: '#fff',
                    rich: {
                        name: {
                            width: 35,
                            color: '#fff',
                            alignt: 'center',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                        ratio: {
                            width: 35,
                            color: '#fff',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                    },
                },
            },
            {
                value: 5121,
                name: '其他',
                label: {
                    formatter: [
                        '{name|{b}}',
                        '{ratio|{d}%}'
                    ].join('\n'),
                    lineHeight: 15,
                    color: '#fff',
                    rich: {
                        name: {
                            width: 25,
                            color: '#fff',
                            alignt: 'center',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                        ratio: {
                            width: 25,
                            color: '#fff',
                            fontFamily: 'PingFangSC',
                            fontSize: 11,
                            align: 'center',
                        },
                    },
                },
            },

        ],
        // label: {

        //     color: "#fff",
        //     fontFamily: 'PingFangSC',
        //     lineHeight: 20,
        //     fontSize: 12,
        //     formatter: (val) => {
        //         console.log(val);
        //         return `${val.name}\n${val.percent}%`;
        //     },
        //     align: 'left'

        // },
        labelLine: {
            smooth: true,
            length: 10,
            length2: 10
        },

    }]
};