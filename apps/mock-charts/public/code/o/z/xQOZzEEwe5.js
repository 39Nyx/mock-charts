option = {
    backgroundColor: "#ffffff",
    color: ["#635586", "#8FE6D3", "#F9E000", "#F55B53", "#E9E6DD", "#E9E6DD"],
    series: [{
            label: {
                show: false,
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '50%'],
            roseType: '',
            startAngle: '180',
            zlevel: 1,
            data: [{
                    value: 55,
                    name: '北京'
                },
                {
                    value: 20,
                    name: '武汉'
                },
                {
                    value: 10,
                    name: '杭州'
                },
                {
                    value: 20,
                    name: '广州'
                },
                {
                    value: 38,
                    name: '上海'
                }
            ],
            itemStyle: {
                color: function(e, option) {
                    console.log(e.dataIndex);
                    if (e.dataIndex === 0) {
                        return "#635586";
                    } else {
                        return "rgba(0,0,0,0)";
                    }
                }
            }
        },
        {
            label: {
                show: false,
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '47%'],
            roseType: '',
            startAngle: '180',
            zlevel: 6,
            data: [{
                    value: 55,
                    name: '北京'
                },
                {
                    value: 20,
                    name: '武汉'
                },
                {
                    value: 10,
                    name: '杭州'
                },
                {
                    value: 20,
                    name: '广州'
                },
                {
                    value: 38,
                    name: '上海'
                }
            ],
            itemStyle: {
                color: function(e, option) {
                    console.log(e.dataIndex);
                    if (e.dataIndex === 1) {
                        return "#8FE6D3";
                    } else {
                        return "rgba(0,0,0,0)";
                    }
                }
            }
        },
        {
            label: {
                show: false,
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '44%'],
            roseType: '',
            startAngle: '180',
            zlevel: 6,
            data: [{
                    value: 55,
                    name: '北京'
                },
                {
                    value: 20,
                    name: '武汉'
                },
                {
                    value: 10,
                    name: '杭州'
                },
                {
                    value: 20,
                    name: '广州'
                },
                {
                    value: 38,
                    name: '上海'
                }
            ],
            itemStyle: {
                color: function(e, option) {
                    console.log(e.dataIndex);
                    if (e.dataIndex === 2) {
                        return "#F9E000";
                    } else {
                        return "rgba(0,0,0,0)";
                    }
                }
            }
        },
        {
            label: {
                show: false,
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '41%'],
            roseType: '',
            startAngle: '180',
            zlevel: 6,
            data: [{
                    value: 55,
                    name: '北京'
                },
                {
                    value: 20,
                    name: '武汉'
                },
                {
                    value: 10,
                    name: '杭州'
                },
                {
                    value: 20,
                    name: '广州'
                },
                {
                    value: 38,
                    name: '上海'
                }
            ],
            itemStyle: {
                color: function(e, option) {
                    console.log(e.dataIndex);
                    if (e.dataIndex === 3) {
                        return "#F55B53";
                    } else {
                        return "rgba(0,0,0,0)";
                    }
                }
            }
        },
        {
            label: {
                show: false,
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '39%'],
            roseType: '',
            startAngle: '180',
            zlevel: 6,
            data: [{
                    value: 55,
                    name: '北京'
                },
                {
                    value: 20,
                    name: '武汉'
                },
                {
                    value: 10,
                    name: '杭州'
                },
                {
                    value: 20,
                    name: '广州'
                },
                {
                    value: 38,
                    name: '上海'
                }
            ],
            itemStyle: {
                color: function(e, option) {
                    console.log(e.dataIndex);
                    if (e.dataIndex === 4) {
                        return "#E9E6DD";
                    } else {
                        return "rgba(0,0,0,0)";
                    }
                }
            }
        },
    ]
};