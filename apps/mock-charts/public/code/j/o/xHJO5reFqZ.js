option = 
    {
    title: {
        text: '排名前五位&后五位'
    },
    tooltip:{
      trigger:"item",
      formatter: function(params, ticket, callback) {
            var res =  params.name + ' : ' + params.value;
            return res;
        }
    },
    yAxis: {
        data: ['第一', '第二', '第三', '第四', '第五', '倒数第五', '倒数第四', '倒数第三', '倒数第二', '倒数第一'].reverse()
    },
    xAxis: {
        position:'top',
        interval:500,
    },
    series: [{
        type: 'bar',
        data:[
            {value:3200,name:"第一"}, 
            {value:3100,name:"第二"}, 
            {value:3000,name:"第三"}, 
            {value:2900,name:"第四"}, 
            {value:2800,name:"第五"}, 
            {value:1200,name:"倒数第五"}, 
            {value:1100,name:"倒数第四"},
            {value:1000,name:"倒数第三"},
            {value:900,name:"倒数第二"},
            {value:800,name:"倒数第一"}
        ].reverse()
    }]
}