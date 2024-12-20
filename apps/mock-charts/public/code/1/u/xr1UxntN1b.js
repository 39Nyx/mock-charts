option = {
    title : {
        text: '各个消费地点消费金额在总额度中所占比例',
        subtext: '--------------------------------------',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['东一食堂','东二食堂','桂香园餐厅','沁园春食堂','学子餐厅','学子超市','校车','其他']
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
                {value:3078, name:'东一食堂'},
                {value:212, name:'东二食堂'},
                {value:930, name:'桂香园餐厅'},
                {value:2946, name:'学子餐厅'},
                {value:28, name:'沁园春食堂'},
                {value:2483, name:'学子超市'},
                {value:37, name:'校车'},
				{value:399, name:'其他'},
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 200],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:3078, name:'东一食堂'},
                {value:212, name:'东二食堂'},
                {value:930, name:'桂香园餐厅'},
                {value:2946, name:'学子餐厅'},
                {value:28, name:'沁园春食堂'},
                {value:2483, name:'学子超市'},
                {value:37, name:'校车'},
				{value:399, name:'其他'},
            ]
        }
    ]
};