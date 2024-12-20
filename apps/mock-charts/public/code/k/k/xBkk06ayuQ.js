var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend:{
        show:  true,
        right: 20,
        top: '35%',
        orient: 'vertical',
        itemWidth:25,
        itemHeight: 25,
        textStyle:{
            color: '#fff',
            fontSize: 18
        },
      data: ['发还金额', '收款金额']
    },
    series: [
        {
            type:'pie',
            center:['30%', '50%'],
            radius: '50%',
            avoidLabelOverlap: false,
            startAngle: 127,
            data:[
                {
                    value:335, 
                    name: '收款金额',
                    label:{
                        normal:{
                            show: false
                            
                        }  
                    },
                    labelLine:{
                        normal:{
                            show: false
                        }  
                    },
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                            offset: 0,
                            color: '#588ec5'
                        }, {
                            offset: 1,
                            color: '#93bbd8'
                        }])
                    }
                    
                },
                {
                    value:475, 
                    itemStyle: placeHolderStyle
                },
                {
                    value:140, 
                    name: '发还金额',
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: function(){
                                return  '收发案款比'
                            },
                            textStyle:{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 22
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: '#d4a26a'
                        }, {
                            offset: 1,
                            color: '#dec399'
                        }])
                    }
                }
            ]
        }
    ]
};