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
        data:['监督检查','投诉/举报','上级交办','下级报请','监督抽检','移送','其他',]
    },
    series: [
        {
            name:'案件来源占比',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center:['40%','20%'],
            color: ['#669999','#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966',],
            label:  {
                normal: {
                    formatter: '{b}\n  {c} ({d}%)'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
           
            data:[
                //{value:335, name:'食品生产', selected:true},
                {value:3500, name:'监督检查'},
                {value:6500, name:'投诉/举报'},
                {value:3500, name:'上级交办'},
                {value:6500, name:'下级报请'},
                {value:3500, name:'监督抽检'},
                {value:3500, name:'移送'},
                {value:6500, name:'其他'}
            ]
        },
    ]
};