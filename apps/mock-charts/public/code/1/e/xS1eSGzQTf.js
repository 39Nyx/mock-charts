option = {
    title : {
        text: '星座人数分布',
         x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座',] 
    },
    series : [
        {
            name: '星座人数分布',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:361, name:'白羊座'},
                {value:365, name:'金牛座'},
                {value:370, name:'双子座'},
                {value:337, name:'巨蟹座'},
                {value:375, name:'狮子座'},
                {value:373, name:'处女座'},
                {value:495, name:'天秤座'},
                {value:364, name:'天蝎座'},
                {value:349, name:'射手座'},
                {value:258, name:'摩羯座'},
                {value:350, name:'水瓶座'},
                {value:408, name:'双鱼座'}
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
