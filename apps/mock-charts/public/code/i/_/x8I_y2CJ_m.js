let datas = {
    value: 50,
    name: '完成率',
};
option = {
    backgroundColor: '#04243E',
    title: {
        text: datas.value + '%',
        x: '49%',
        y: '48%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            color: '#fff',
        },
    },
    // legend: {
    //     bottom: 100,
    //     itemWidth: 0,
    //     itemHeight: 0,
    //     formatter: '{a|{name}}',
    //     textStyle: {
    //         color: '#ffffff',
    //         backgroundColor: {
    //             image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAaCAYAAAC0NHJVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RTUzOEVDRTg5QTExRThBMDFCRTJFMEFBRTVCMDNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2RTUzOEVERTg5QTExRThBMDFCRTJFMEFBRTVCMDNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODZFNTM4RUFFODlBMTFFOEEwMUJFMkUwQUFFNUIwM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODZFNTM4RUJFODlBMTFFOEEwMUJFMkUwQUFFNUIwM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kNvmhAAADkklEQVR42uxZz4vNURQ/5/sm8itJQ1OTibKQFDuFUiQSzdJeKUrZUP4CGxulZGHL1k6ysbCxsJGVLITCQgqFMt/j3LpPt+Oce873zZt5b/G99ZmZ93333u+993N+fM4dJCLo23Q37EnqSepbT1JPUt96kvoWJmnhyJn+FKa8zYxhjoYxz9jESG6J+Xd63haf/xmGGE/iOeZx5fiyLyrvKeegSn/tnWjMW/ZtxDNQ5iyf/2B8yOufOElp/O5MkLd4b2MYGN+1jXMuMMjW5t+Y8ZrxZ5IkrWXsy4shwyJrm414lfRAac2oeBEG5oLAeqnyDgh8XsfYwHjJ+D0JkhIxB/NCvE2CcljYIRxZf1tWToEQZpFa6x8hXLbNGc8Z31eTpK2Mo4w1RayubcwiybJ0q1/NWyA4dpQQaBlgzdDKZ8mgTzCeMr6shrrbwTjJGDgH3DXRkyNMQOknDwYVg8FCiETDnOxTihgwvM0Kz6UQSrnpMePdSpK0l3G62HhUCEAgNI1i1VRRfhBM8OMQCeSQXI5bYjxivFoJkg4zThkhTYY8ENYnPUfKait0SULKeawDxMp46Jg/qeIhbdATrT0mop6NKyelyRcZx4pDaosDwUD8L0nTDpUqdZQnNkAYRnmIA7FWrX+jzEfGWlsljIJidJbhle85x5hlPHRCvUtS2uR5xqHKROiosVFDGAWKWHTEhmdA4KjK2vdRhVk7m8VM1L0cBjuTlGqga4wDitWjYqGkWKwVm1slscrvrAq/MUIXKYfUCEsnJZ+ScaNQu+3QjLTmTWD0abMI28a4yfjVhaR0e3CDsUdZpBYeBtkSNA+QuWm40DJ0WqSU72jEoaKS34bzLlWsn8RcYBCHTg7VPI4MgstzIuWMjjPmGNcZ3yLCYTvjFmNnJbFaXiPjuRaStNzk1SFezpRrtCze8hotGkRuO0gpD1DxSHDy3vDZW8YVxqcaSbsYdzJRNTkJgctSCCger9iNFKWR9yynAIagvKYO/Wv9PjMuMd5oJO1n3M1XGMttkY32zW4p5F1kvChJSvL6NmN9B+v0Lj296x/P2r3qPeJR0PGyVuvfwP//bpDzyfotUiuhc530k3GZ8WRI0vssIOT/gNBQJtqVCRmXoXIjlrjAiuT2bqot5anlG0smo6HQZB9rfGsU27LmagOSf/g5CaCrsGXuwQz/mO8jzNS2+/D14ywunL3Q54/pbvhXgAEA1WGvIVWG+pAAAAAASUVORK5CYII=`
    //         },
    //         rich: {
    //             a: {
    //                 align: 'center',
    //                 width: 200,
    //                 height: 32,
    //                 padding: [20, 0, 0, 0],
    //                 fontSize: 32
    //             }
    //         }
    //     }
    // },
    data: [
        {
            name: datas.name,
        },
    ],

    series: [
        {
            // 主圆环
            name: datas.name,
            type: 'pie',
            radius: ['40%', '70%'],
            startAngle: 225,
            color: [
                {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(47,172,234,1)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(47,172,234,.1)', // 100% 处的颜色
                        },
                    ],
                },
                'transparent',
            ],
            hoverAnimation: true,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: (75 * datas.value) / 100,
                },
                {
                    value: 100 - (75 * datas.value) / 100,
                },
            ],
        },
        {
            // 背景圆环
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            silent: true,
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            z: 5,
            data: [
                {
                    value: 75,
                    itemStyle: {
                        color: '#1A3B4C',
                        borderWidth: 2,
                        borderColor: '#1c516b',
                    },
                },
                {
                    value: 25,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            // 底部
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            startAngle: 230,
            labelLine: {
                show: false,
            },
            z: 15,
            silent: true,
            label: {
                show: true,
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 32,
                        padding: [0, -50, -180, 0],
                    },
                    b: {
                        color: '#fff',
                        fontSize: 32,
                        padding: [0, 0, -180, -50],
                    },
                },
                formatter: function (val) {
                    // 底部0和100
                    if (val.dataIndex === 0) {
                        return '{a|0}';
                    }
                    if (val.dataIndex === 2) {
                        return '{b|100}';
                    }
                },
            },
            data: [
                {
                    // 底部两条线
                    value: 1,
                    itemStyle: {
                        color: '#0096e0',
                    },
                },
                {
                    value: 800,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
                {
                    value: 1,
                    itemStyle: {
                        color: '#0096e0',
                    },
                },
                {
                    value: 230,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
        },
        {
            // 背景
            name: '',
            type: 'pie',
            cursor: 'default',
            radius: ['0', '80%'],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(38,64,76,0.8)', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(38,64,76,0)', // 100% 处的颜色
                        },
                    ],
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 1,
                },
            ],
        },
        {
            // 中间圈
            name: '',
            z: 5,
            type: 'pie',
            cursor: 'default',
            radius: ['32%', '32%'],
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(2,144,214,0.8)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(2,144,214,0)', // 100% 处的颜色
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    ],
};
