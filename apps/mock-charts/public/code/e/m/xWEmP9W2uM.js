option = {
    backgroundColor: '#141845',
    color:['#FF9913','#063F84'],
    title: {
        text: '人均处理量\n2012件',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#FF9913',
            fontSize: '12',
        }
    },
    // color: ['rgba(176, 212, 251, 1)'], 
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['70%', '90%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 2012,
            name: '01',
            itemStyle: {
                normal: {
                    // color:'#FF9913',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 6000
        }]
    }]
};