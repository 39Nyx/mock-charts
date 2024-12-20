option = {
    title : {
        text: '星座',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯','水瓶','双鱼']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:361, name:'白羊'},
                {value:365, name:'金牛'},
                {value:370, name:'双子'},
                {value:337, name:'巨蟹'},
                {value:375, name:'狮子'},
                {value:373, name:'处女'},
                {value:495, name:'天秤'},
                {value:364, name:'天蝎'},
                {value:349, name:'射手'},
                {value:350, name:'水瓶'},
                {value:408, name:'双鱼'}
            ]
        },
    ]
};
