   var data = [{
        value: 3661,
        name: '<10w'
    }, {
        value: 5713,
        name: '10w-50w'
    }, {
        value: 9938,
        name: '50w-100w'
    }, {
        value: 17623,
        name: '100w-500w'
    }, {
        value: 3299,
        name: '>500w'
    }];
    option = {
        backgroundColor: '#fff',

        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            bottom: '0%',
            data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
        },
        series: [{
            type: 'pie',
            selectedMode: 'single',

            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

            label: {
                normal: {
                    position: 'inner',
                    formatter: '{d}%',

                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }]
    };