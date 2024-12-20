option = {
    backgroundColor:'#091c3d',
    width:300,
    height:300,
    title : {
        text: '收发文',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['已签收','未处理','已拒收'],
        textStyle:{
            color:'white'
        }
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '25%',
            center: ['19%', '25%'],
            data:[
                {value:89, name:'已签收',itemStyle:{normal:{color:'#11f428'}}},
                {value:31, name:'未处理'},
                {value:20, name:'已拒收',itemStyle:{normal:{color:'#FF6600'}}},
            ],
            /*
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },*/
            label:{
                normal:{
                    color:'white'
                }
            }
        }
    ]
};
