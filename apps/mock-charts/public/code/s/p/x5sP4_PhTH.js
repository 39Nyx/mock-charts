let arr = [];
for(let i = 0 ; i < 10 ; i++){
    arr.push({
        time:i,
        value:(Math.random() * 100).toFixed(0)
    })
}
let time = [],val= [];
arr.forEach((v)=>{
    time.push(v.time);
    val.push(v.value);
})

color = (val) =>{
    let color = ['rgb(47,114,205)','rgb(144,198,163)','rgb(230,194,183)','rgb(212,130,101)','rgb(235,179,79)','rgb(169,189,209)','rgb(127,195,204)']
    return color[val.dataIndex]
}

option = {
    color: ['#3398DB'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip:{
        formatter:'{b} : {c}'
    },
    xAxis : [
        {
            type : 'category',
            data : time,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:val,
            itemStyle:{
                color:(params) =>{
                    return color(params)
                }
            }
        },{
            type:'line',
            barWidth: '60%',
            data:val,
            symbol:'circle',
            itemStyle:{
                color:'#000'
            }
        }
    ]
};