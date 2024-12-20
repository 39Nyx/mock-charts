

option = {
    title:{
        text:'嵌套环形图'
    },
    tooltip: {
        show:true,
        trigger: 'item',
    //     position: "insideTopRight",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    //    formatter:"{b} ({d})"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['第二批次','第一批次']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    formatter:"{b} ({d}%)"
                }
                
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                
                {value:679, name:'第二批次'},
                {value:1548, name:'第一批次'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['55%', '70%'],
            label:{
                normal:{
                position:'inside',
                formatter:"{b} ({c})"
                }
            },
            data:[
                
                {name:'第一批次',value:123},
                {value:234, name:'二批次未到货金额'},
              
                {value:1048, name:'一批次未到货金额'},
                {value:251, name:'一批次到货金额'}
            ]
        }
    ]
};