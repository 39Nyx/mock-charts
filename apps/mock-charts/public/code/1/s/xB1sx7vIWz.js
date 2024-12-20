var data = [];
for(var i=1 ;i<=60;i++ ){
    if (i<=20) {
          data.push({
            value: 8,
            name: 'CARD'
        })
    } 
    if(i>20&&i<=40){
          data.push({
            value: 8,
            name: 'bb'
        })}
    if(i>40&&i<=60){
        data.push({
            value: 8,
            name: 'bbcc'
        }) 
    }
  
}

option = {
    title:{
        text: '健康值:yellow',
        textAlign: "center",
        x: '50%',
        y: '5%',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '库存情况',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        clockwise: false,
        data: data,
        color: [
        '#7FD421',
        '#fff',
        "#E6E6E6",
        ],
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            normal: {
                show:false,
            },
            emphasis:{
                show:false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
   
    ],
     
    backgroundColor: '#fff'
};