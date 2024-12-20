option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    //显示series中信息，提示框组件
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
         //饼图中{a}表示系列名称，{b}表示数据项名称，{c}表示数值，{d}表示百分比
    },
    
    //图例组件
    legend: {
        orient: 'vertical',    //让data信息竖直显示
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',    //图表类型，柱状图：bar
            //饼图：pie  (南丁格尔图在series中加上roseType:’angle’)移开后不显示原来信息
            radius : '55%',    //半径
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {  //itemStyle有正常显示：normal，有鼠标hover的高亮显示：emphasis
                emphasis: {  //normal显示阴影,与shadow有关的都是阴影的设置
                    shadowBlur: 10,  //阴影大小
                    shadowOffsetX: 0,  //阴影水平方向上的偏移
                    shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
                }
            }
        }
    ]
};
