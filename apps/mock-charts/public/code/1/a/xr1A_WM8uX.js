option = {
    backgroundColor: '#154274',
    title : {
        text: '深圳市各区企业数据统计',
        x:'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color : 'white'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: '0%',
        padding: 130,
        data:['福田','罗湖','南山','龙岗','龙华'],
        textStyle: {
            color: "white",
            fontWeight:'normal'
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            color: ['#9fd727', '#8f82bc', '#00b7ee', '#ea68a2', '#ffd929','#ff9c32', '#32b16c', '#ff3b52'],
           center :  ['40%', '50%'],
           radius: '65%',
           itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                }
           },
            data:[
                {value:335, name:'福田'},
                {value:310, name:'罗湖'},
                {value:234, name:'南山'},
                {value:234, name: '龙岗'},
                 {value:234, name:'龙华'},
            ]
        }
    ]
};