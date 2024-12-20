option = {
      tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                return params[0].name + '<br/>'
                       + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                       + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
            }
        },
        legend: {
            selectedMode: false,
            data: ['供热量', '发电量']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['五官科医院', '虹桥能源站', '虹桥2号能源站', '浦东东方医院']
            }
        ],
        yAxis: [
            {
                type: 'value',
                boundaryGap: [0, 0.1]
            }
        ],
        series: [
            {
                name: '供热量',
                type: 'bar',
                stack: 'sum',
                barCategoryGap: '50%',
                itemStyle: {
                    normal: {
                        color: '#4C8FDE',
                        barBorderColor: '#4C8FDE',
                        barBorderWidth: 6,
                        barBorderRadius: 0
                      
                    }
                },
                data: [260, 200, 220, 120]
            },
            {
                name: '发电量',
                type: 'bar',
                stack: 'sum',
                itemStyle: {
                    normal: {
                        color: '#E70012',
                        barBorderColor: '#4C8FDE',
                        barBorderWidth: 6,
                        barBorderRadius: 0,
                        label: {
                            show: true,
                            position: 'top',
                           
                            textStyle: {
                                color: '#4C8FDE'
                            }
                        }
                    }
                },
                data: [40, 80, 50, 80]
            }
        ]
};