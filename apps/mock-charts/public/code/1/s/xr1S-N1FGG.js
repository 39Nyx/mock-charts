option = {
  color: ['#3398DB'],
                    /* title: {
                     text: '月累计使用时长（万 小时）',
                     top:10
                     },*/
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['7月', '8月', '9月', '10月', '11月', '12月'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '使用时长',
                            type: 'bar',
                            barWidth: '60%',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data: [10, 52, 200, 334, 390, 330]
                        }
                    ]
};