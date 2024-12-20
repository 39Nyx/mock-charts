option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        calculable: false,
        series: [
            {
                type: 'treemap',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{b}"
                        },
                        borderWidth: 2,
                        borderColor: 'rgba(0, 0, 0, 0)'
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [
                    {
                        name: '分中心1',
                        value: 6,
                
                    },
                    {
                        name: '分中心2',
                        value: 4
                    },
                    {
                        name: '分中心3',
                        value: 4
                    },
                    {
                        name: '分中心4',
                        value: 2
                    },
                    {
                        name: '分中心3',
                        value: 2
                    },
                    {
                        name: '分中心5',
                        value: 1
                    },
                    {
                        name: '分中心6',
                        value: 1
                    },
                    {
                        name: '分中心7',
                        value: 1
                    },
                    {
                        name: '分中心8',
                        value: 1
                    },
                    {
                        name: '分中心9',
                        value: 1
                    },
                    {
                        name: '分中心10',
                        value: 1
                    }
                ]
            }
        ]
    };
