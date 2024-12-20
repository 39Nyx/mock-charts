 var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            color: ['#32c6ca'],

            grid: {
                top: "5%",
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                show: false,
                axisLabel: {
                    margin: 0
                },
            },
            yAxis: {
                type: 'category',
                position: 'left',
                boundaryGap: true,
                axisLabel: {
                    margin: 18,
                    textStyle: {
                        color: '#9ab5c2',
                        fontSize: '15'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                data: ['万科金色领域', '海城新村', '西芸城', '海滨新村', '领丽花园']
            },
            series: [
                {
                    name: '地区流量数',
                    type: 'bar',
                    barWidth: 15,
                    data: [84, 100, 134, 189, 203]
                },

            ]
        };