 var years = ['2020-11', '2020-12', '2021-01','2021-02', '2021-03', '2021-04', '2021-05','2021-06', '2021-07', '2021-08', '2021-09','2021-10', '2021-11'];
        var jdData =['深圳', '中山',  '东莞',  '珠海', '佛山']
        var jdData2 =[ '福州', '杭州', '天津',  '武汉', '长春', '北京', '南宁', '株洲', '厦门', '长沙']


  myChart.setOption(
    (option = {
    title: [ {
        text: '湾区',
        left: '0%',
        textStyle: {
            fontSize: 16
        }
    },
        {
            text: '非湾区',
            left: '50%',
            textStyle: {
                fontSize: 16
            }
        }],
    legend: [
        {
            left:'5%',
            right:'45%',
            data:jdData
        },
        {
            left:'55%',
            right:'5%',
            data: jdData2
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        left: '5%',
        right: '55%', // 网格部分
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
        {
            gridindex: 1,
            left: '50%',
            right: '5%',
            top: '10%',
            bottom: '5%',
            containLabel: true
        }
    ],

    xAxis: [{
        type: 'category',
        data: years

    },
        {
            type: 'category',
            data:years,
            gridIndex: 1
        }],
    yAxis: [{
        type: 'value'
    },{
        type: 'value',
        gridIndex: 1
    }],
    series: [
        {
            name:'深圳',
            type: 'line',
            smooth: true,
            animationDuration: 3000,
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
        },
        {
            type: 'line',
            name:'中山',
            smooth: true,
            animationDuration: 3000,
            data: [220, 282, 201, 234, 290, 430, 410,220, 282, 201, 234, 290, 430, 410]
        },
        {
            type: 'line',
            name:'东莞',
            smooth: true,
            animationDuration: 3000,
            data: [450, 432, 401, 454, 590, 530, 510,450, 432, 401, 454, 590, 530, 510],

        },
        {
            type: 'line',
            name:'珠海',
            smooth: true,
            animationDuration: 3000,
            data: [550,632, 601, 554, 690, 630,610,550,632, 601, 554, 690, 630,610],

        },
        {
            type: 'line',
            name:'佛山',
            smooth: true,
            animationDuration: 3000,
            data: [750, 732, 701, 754, 790, 730, 710,750, 732, 701, 754, 790, 730, 710],

        },
        {
            name: '福州',
            type: 'line',
            smooth: true,
            animationDuration: 3000,
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'line',
            name: '杭州',
            smooth: true,
            animationDuration: 3000,
            data: [220, 282, 201, 234, 290, 430, 410,220, 282, 201, 234, 290, 430, 410],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'line',
            name: '天津',
            smooth: true,
            animationDuration: 3000,
            data: [450, 432, 401, 454, 590, 530, 510,450, 432, 401, 454, 590, 530, 510],
            xAxisIndex: 1,
            yAxisIndex: 1
        }

    ]
})
  )
setInterval(function () {
    myCharts.setOption(option)
}, 5000)