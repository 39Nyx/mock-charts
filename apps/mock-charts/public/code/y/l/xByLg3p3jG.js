option = {
    title : {
        text: '南丁格尔玫瑰图',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
                {value:306343, name:'白云区'},
                {value:16994, name:'从化区'},
                {value:191765, name:'番禺区'},
                {value:136782, name:'海珠区'},
                {value:98469, name:'花都区'},
                {value:79679, name:'黄埔区'},
                {value:82196, name:'荔湾区'},
                {value:23323, name:'南沙区'},
                {value:199772, name:'天河区'},
                {value:97800, name:'越秀区'},
                {value:60341, name:'增城区'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:306343, name:'白云区'},
                {value:16994, name:'从化区'},
                {value:191765, name:'番禺区'},
                {value:136782, name:'海珠区'},
                {value:98469, name:'花都区'},
                {value:79679, name:'黄埔区'},
                {value:82196, name:'荔湾区'},
                {value:23323, name:'南沙区'},
                {value:199772, name:'天河区'},
                {value:97800, name:'越秀区'},
                {value:60341, name:'增城区'}
            ]
        }
    ]
};
