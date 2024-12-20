let data = [];
for(let i = 0 ; i < 20 ; i++){
    data.push({
        time:i,
        value:(Math.random() * 120).toFixed(0)
    })
}
let time=[],val=[];
data.forEach((v)=>{
    time.push(v.time);
    val.push(v.value);
})
color = (val) =>{
    let color = ['rgb(47,114,205)','rgb(144,198,163)','rgb(230,194,183)','rgb(212,130,101)','rgb(235,179,79)','rgb(169,189,209)','rgb(127,195,204)']
    return color[val.dataIndex]
}
option = {
    xAxis: {
        data:time,
        axisTick:{
            alignWithLabel:true
        }
    },
    yAxis: {},
    grid:{
        x:'3%',
        x2:'3%',
        Y2:'3%',
        y:'3%'
    },
    series: [{
        type: 'bar',
        data:val,
        itemStyle:{
            normal:{
                color:(params)=>{
                    return color(params)
                }
            }
        },
        markArea:{
            data:[
                [
                    {
                        name: '历史',
                        itemStyle:{
                            color:'rgba(0,0,0,0)'
                        },
                        label:{
                            color:'#000'
                        },
                        x: '0%'
                    }, {
                        x: '50%'
                    }
                ],[
                    {
                        name: '预测',
                        itemStyle:{
                            color:'rgba(0,0,0,.2)'
                        },
                        label:{
                            color:'#000'
                        },
                        x: '50%'
                    }, {
                        x: '100%'
                    }
                ]
            ]
        }
    }]
};
