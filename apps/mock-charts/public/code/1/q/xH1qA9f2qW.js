option = {
    color: ['#4472c4','#ed7d31','#264478','#ffc000','#5b9bd5','#70ad47','#9e480e','#a5a5a5'],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    title : {
        text: '2017年度运维问题比占',
        subtext: '数据来源：湖北山洪运维服务记录系统',
        x:'center'
    },
    toolbox: {
        show : true,
        feature : {
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '50%',
            center: ['50%', '40%'],
            data:[
                { name: '山洪系统无法正常访问', value: '136'},
                { name: '水雨情数据上报不全或无数据', value: '169'},
                { name: '有大雨量，但是没有预警产生', value: '7'},
                { name: '水雨情数据异常', value: '16'},
                { name: '服务器频繁宕机或重启', value: '13'},
                { name: '图像数据无法显示', value: '21'},
                { name: '预警人员导入失败', value: '17'},
                { name: '其他', value: '36'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                normal: {
                    formatter: '{b} {d}%'
                }
            }
        }
    ]
};
