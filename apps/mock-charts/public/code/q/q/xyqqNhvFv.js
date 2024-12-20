option = {
    backgroundColor: '#FFFFFF',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    title: [{
            bottom: '20%',
            text: '2016年12月31日 ',
            textStyle: {
                color: '#000000',
                fontSize: 18,
                align: 'center',
            },
            left: '8%',
        },
        {
            bottom: '20%',
            text: '2016年12月31日 ',
            textStyle: {
                color: '#000000',
                fontSize: 18,
                align: 'center',
            },
            left: '32%',
        }, {
            bottom: '20%',
            text: '2016年12月31日 ',
            textStyle: {
                color: '#000000',
                fontSize: 18,
                align: 'center',
            },
            left: '54%',
        }

    ],
    legend: {
        orient: 'vertical',
        show: true,
        x: '80%',
        y: '50%',
        textStyle: {
            color: '#000000'
        },
        data: [{
            name: '负债合计',
            value: '100.00',
        }, {
            name: '股东合计',
            value: '200.00',
        }]
    },
    series: [{
            color: ['#F78233', '#4777CC'],
            type: 'pie',
            radius: ['0%', '22%'],
            center: ['14%', '50%'],
            data: [{
                name: '负债合计',
                value: '100.00',
            }, {
                name: '股东合计',
                value: '200.00',
            }],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                    fontSize: 20
                },
            },
            labelLine: {
                normal: {
                    show: false,
                }
            },
        },
        {
            color: ['#F78233', '#4777CC'],
            type: 'pie',
            radius: ['0%', '22%'],
            center: ['38%', '50%'],
            data: [{
                name: '负债合计',
                value: '100.00',
            }, {
                name: '股东合计',
                value: '200.00',
            }],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%',
                    fontSize: 20
                },
            },
            labelLine: {
                normal: {
                    show: false, //true,//set true if use "position: 'outside',"
                }
            },
        },
        {
            color: ['#F78233', '#4777CC'],
            type: 'pie',
            radius: ['0%', '22%'],
            center: ['62%', '50%'],
            data: [{
                name: '负债合计',
                value: '100.00',
            }, {
                name: '股东合计',
                value: '200.00',
            }],
            label: {
                normal: {
                    show: true,
                    position: 'inside', //'outside',//'inside',
                    formatter: '{d}%',
                    fontSize: 20,
                },
            },
            labelLine: {
                normal: {
                    show: false, //true,//set true if use "position: 'outside',"
                }
            },
        },

    ]
};