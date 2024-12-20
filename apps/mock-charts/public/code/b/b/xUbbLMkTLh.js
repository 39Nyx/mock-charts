option = {
        color: ['#E98F6F', '#6AB0B8', '#334B5C'],
        title: {
            text: '流量(m³/h)',
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            }
        },
        tooltip: {
            trigger: 'axis',
            //formatter: "{b} <br> 合格率: {c}%"
        },
        legend: {
            data: ['流量'],
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            },
            axisLabel: {

            },

        },


        xAxis: {
            type: 'category',
            name: '小时',
            axisLabel: {
                textStyle: {
                    color: '#28FF28',
                    fontSize: 15,
                    fontFamily: '宋体'
                }
            },

            //boundaryGap: false,
            data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#28FF28',
                    fontSize: 15,
                    fontFamily: '宋体'
                }
            },
        },
        series: [{
            name: '风流',
            type: 'line',
            smooth: true,
            textStyle: {
                color: '#28FF28',
                fontSize: 15,
                fontFamily: '宋体'
            },
            data: [23.87,24.21,23.98,20.07,23.28,24.79,21.16,24.41,22.83,24.59,21.03,20,23.02,23.27,22.5,22.54,21.4,20.61,22.21,21.63,24.09,24.7,23.94,23.5]
        }
        ]
    };