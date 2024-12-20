option = {
    backgroundColor:'#FFF',
   /* title : {
        text: '事项申请对比分析',
        subtext: '2017年'
    },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['食品生产','食品经营','食品生产企业','食品添加剂生产企业','食品销售','餐饮服务','单位食堂',]
    },
    series: [
        {
            name:'各类型主体事项申请占比',
            type:'pie',
            selectedMode: 'single',
            center:['300','130'],
            radius: [0, '20%'],
            color: ['#ccc', '#91e1e0',],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                //{value:335, name:'食品生产', selected:true},
                {value:3500, name:'食品生产'},
                {value:6500, name:'食品经营'}
            ]
        },
        {
            name:'各类型主体事项申请占比',
            type:'pie',
             radius: ['25%', '40%'],
            center:['300','130'],
            color: ['#669999','#33CC99','#CC6666', '#FF9966', '#3399CC'],
            label: {
                normal: {
                    formatter: '{b}\n  {c} ({d}%)'
                }
            },
            data:[
                {value:1500, name:'食品生产企业'},
                {value:2000, name:'食品添加剂生产企业'},
                {value:2500, name:'食品销售'},
                {value:2500, name:'餐饮服务'},
                {value:1500, name:'单位食堂'}
            ]
        }
    ]
};