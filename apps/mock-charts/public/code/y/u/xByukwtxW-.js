option = {
    title : {
        text: '一天的信息来源',
        subtext: '青橘子',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['微信信息','电话','QQ','网页','面谈']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 500
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'一天的信息来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:367, name:'微信信息'},
                {value:17, name:'电话'},
                {value:34, name:'QQ'},
                {value:290, name:'网页'},
                {value:153, name:'面谈'}
            ]
        }
    ]
};
                    