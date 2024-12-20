option = {
   /*   title: {
                     text: '用户留存（万）',
                     top:10
                     },*/
                    tooltip: {
                        trigger: 'axis',
                        formatter: function (a) {
                            // console.log(a)
                            return (
                                a[0]['axisValueLabel'] + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[0]['color'] + '"></span>' +
                                a[0]['seriesName'] + ':' + a[0]['value'] + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[1]['color'] + '"></span>' +
                                a[1]['seriesName'] + ':' + a[1]['value'] + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: ' + a[2]['color'] + '"></span>' +
                                a[2]['seriesName'] + ':' + a[2]['value'] + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; "></span>七日' + ':' + Math.round(100 * (a[1]['value']) / a[0]['value']) + "%" + "<br>" +
                                '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; "></span>' +
                                '次日' + ':' + Math.round(100 * (a[2]['value']) / a[0]['value']) + "%"
                            );
                        },
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    color: ['#fbad0a', '#0f8fe9', '#01ae45'],
                    legend: {
                        bottom: 0,
                        left: 'center',
                        itemWidth: 10,
                        itemHeight: 10,
                        data: [
                            {
                                name: '新增',
                                icon: 'roundRect',
                            },
                            {name: '七日留存', icon: 'roundRect',},
                            {name: '次日留存', icon: 'roundRect',}
                        ]
                    },


                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07', '12/08']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '新增',
                            type: 'line',
                            smooth: true,
                            areaStyle: {normal: {}},
                            data: [120, 132, 101, 234, 190, 230, 210, 120, 132, 101, 134, 90, 230, 210, 228]
                        },
                        {
                            name: '七日留存',
                            type: 'line',
                            smooth: true,
                            areaStyle: {normal: {}},
                            data: [20, 82, 91, 34, 90, 30, 10, 20, 82, 91, 34, 90, 30, 10, 52]
                        },
                        {
                            name: '次日留存',
                            type: 'line',
                            smooth: true,
                            areaStyle: {normal: {}},
                            data: [50, 23, 20, 54, 90, 30, 10, 50, 32, 20, 54, 90, 30, 10, 20]
                        },

                    ]
};