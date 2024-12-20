option = {
    backgroundColor:"#ffff",
    title: [{
        text: '2018年楼宇统计',
        x: '27%',
        y: '84%',
        textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#080808'
        }
    }
    /*, {
        text: '单位：%',
        x: '22%',
        y: '46%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: '#e9e9e9'
        }
        }*/
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{b}</br>{c}({d}%)',
        position:['20%','40%'],
         // backgroundColor:'#147aa6'
    },
   /* legend: {
        orient: 'vertical',
        top: '30%',
        right: '15%',
        itemGap: 40,
        textStyle: {
            fontSize: 12,
            padding: [0, 0, 0, 4],
            color:'#080808'
        },
        data: ['5000万以下','5000万-2亿','2亿以上']
    },*/
    color: [  '#ff4ed8', '#54ffff', '#5afa13'],
    series: [{
        name: '',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['35%', '45%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                formatter: '{b}\n{d}%\n{c}',
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[{
            name:'5000万以下',
            value:56342
        },
            {
                name:'5000万-2亿',
                value:32432
            },
            {
                name:'2亿以上',
                value:18323
            }]
    }]
};