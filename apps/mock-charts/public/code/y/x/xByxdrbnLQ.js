var dataYk=[
                {value:6827, name:'外国游客',itemStyle:{color:"#efb013"}},{value:107954, name:'国内游客',itemStyle:{color:"#0e94eb"}}];
option = {
    tooltip: {
            trigger: 'item',
            //position: ['30%', '50%'],
            confine: true,
            formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
    series: [
        //主要展示
        {
            name:'游客占比',
            type:'pie',
            radius: ['55%', '90%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter:"{b}\n{d}%",
                    textStyle: {
                        fontSize: '120%',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:dataYk
        },
        {
                radius: ['55%', '50%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: dataYk
            
            }
    ]
};
var currentIndex = -1;
setInterval(function () {
    var dataLen = dataYk.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex:0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex:0,
        dataIndex: currentIndex
    });
}, 3000);