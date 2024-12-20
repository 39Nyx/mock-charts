//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 右图可视化聚类算法动态分割的过程（聚类算法可以支持多维数值属性）


var uploadedDataURL = "/asset/get/s/data-1487209466925-BJQZVKGYx.json";

$.getJSON(uploadedDataURL, function(data) {
    var clusterNumber = 6;
    var step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
    var result;
    var option = {
        timeline: {
            top: 'center',
            right: 35,
            height: 300,
            width: 10,
            inverse: true,
            playInterval: 2500,
            symbol: 'none',
            orient: 'vertical',
            axisType: 'category',
            autoPlay: true,
            label: {
                normal: {
                    show: false
                }
            },
            data: []
        },
        baseOption: {
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'scatter'
            }]
        },
        options: []
    };

    for (var i = 0; !(result = step.next()).isEnd; i++) {

        option.options.push(getOption(result, clusterNumber));
        option.timeline.data.push(i + '');

    }

    myChart.setOption(option);

    function getOption(result, k) {
        var clusterAssment = result.clusterAssment;
        var centroids = result.centroids;
        var ptsInCluster = result.pointsInCluster;
        var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
        var series = [];
        for (i = 0; i < k; i++) {
            series.push({
                name: 'scatter' + i,
                type: 'scatter',
                label: {
                    emphasis: {
                        show: true
                    }
                },
                animation: false,
                data: ptsInCluster[i],
                markPoint: {
                    symbolSize: 29,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            position: 'top',
                            formatter: function(params) {
                                return Math.round(params.data.coord[0] * 100) / 100 + '  ' +
                                    Math.round(params.data.coord[1] * 100) / 100 + ' ';
                            },
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.7
                        }
                    },
                    data: [{
                        coord: centroids[i]
                    }]
                }
            });
        }

        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            series: series,
            color: color
        };
    }
});