option = {
    title : {
        text: '员工结构 ',
        subtext: '工作年限',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['<1','3-5','6-10','11-20','>20']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:200, name:'<1'},
                {value:300, name:'3-5'},
                {value:500, name:'6-10'},
                {value:400, name:'11-20'},
                {value:100, name:'>20'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
