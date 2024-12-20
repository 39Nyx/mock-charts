
        var xAxisData = [];
        var data1 = [];
        var data2 = [];


        for (var i = 0; i < 24; i++) {
            xAxisData.push('Class' + i);
            data1.push((Math.random() * 2).toFixed(2));
            data2.push(Math.random().toFixed(2));
        }

        var itemStyle = {
            normal: {
            },
            emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        };

        option = {
            backgroundColor: '#eee',
            legend: {
                data: ['bar', 'bar2', 'bar3', 'bar4'],
                align: 'left',
                left: 10
            },
            brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
            },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {}
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                name: 'X Axis',
                silent: false,
                axisLine: {onZero: true},
                splitLine: {show: false},
                splitArea: {show: false}
            },
            yAxis: {
                inverse: true,
                splitArea: {show: false}
            },
            grid: {
                left: 100
            },
            // 左侧柱状功能
            visualMap: {
                type: 'continuous',
                dimension: 1,
                text: ['High', 'Low'],
                inverse: true,
                itemHeight: 200,
                calculable: true,
                min: -2,
                max: 6,
                top: 60,
                left: 10,
                inRange: {
                    colorLightness: [0.4, 0.8]
                },
                outOfRange: {
                    color: '#bbb'
                },
                controller: {
                    inRange: {
                        color: '#2f4554'
                    }
                }
            },
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data1
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data2
                }
            ]
        };
        

        myChart.on('brushSelected', renderBrushed);

        function renderBrushed(params) {
            var brushed = [];
            var brushComponent = params.batch[0];

            for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                var rawIndices = brushComponent.selected[sIdx].dataIndex;
                brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
            }

            myChart.setOption({
                title: {
                    backgroundColor: '#333',
                    text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                    bottom: 0,
                    right: 0,
                    width: 100,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }
            });
        }