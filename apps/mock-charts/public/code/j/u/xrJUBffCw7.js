option = {
    legend:{
        selectedMode:false,
        bottom:20,
        data:['可接受','有待调整']
    },
    series: [{
        type: 'pie',
        silent:true,
        label:{
            color:'#000',
            fontSize:16,
            formatter:'{d}%',
        },
        data:[{
            name:'可接受',//可接受
            value:39,
            itemStyle:{
                color:'#a5e1ff'
            }
        },{
            name:'有待调整',//有待调整
            value:1,
            itemStyle:{
                color:'#fec3c0'
            }
        }]
    }]
};