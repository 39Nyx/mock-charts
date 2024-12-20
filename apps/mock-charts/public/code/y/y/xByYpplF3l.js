option = {
    grid:[
        {x:200,y:150,width:800,height:300,containLabel:true,},
        {x:20,y2:20,width:80,height:600,containLabel:true,},
        
        ],
    xAxis: [{
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        gridIndex:0,
    },{gridIndex:1,type:'category',name:'category',data:[]}],
    yAxis: [{
        gridIndex:0
    },{
        gridIndex:1,name:'value'
    }],
    series: [{
        gridIndex:0,
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },{
        gridIndex:1,
        type:'bar',
        name:'bar2',
        right:10,
        width:100,
        height:100,
        data:[],
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function (params) {
        myChart.setOption({
            series: [{
                name: 'bar2',
                xAxisIndex:1,
                yAxisIndex:1,
                // 通过饼图表现单个柱子中的数据分布
                data: [{name:params.name,value:params.data}]
            }]
    });
});