app.title="饼图";
option = {
    backgroundColor:"#263559",//背景色
    color:["#745bfa","#fec178","#72f1da","#4cd1fd","#3faefc","#8b76f9"],//调色盘颜色列表
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'数据汇总',
            type:'pie',
            minAngle:30,//最小角度
            radius: ['53', '95'],
            hoverAnimation:false,//hover时是否放到
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: "{b}\n{d}%",
                    textStyle:{
                        color:"#4c456a"
                    }
                }
            },
            data:[
                {value:20, name:'养殖险'},
                {value:15, name:'农贷险'},
                {value:10, name:'种植险'},
                {value:15, name:'意健险'},
                {value:10, name:'财产险'},
                {value:30, name:'车险'}
            ]
        }
    ]
};
