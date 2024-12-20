app.title = '嵌套环形图';


// generate data
var deviceData = [];
for (var c=0; c<5; c++) {
    var deviceItemData = [];
    for (var i=0; i<1000; i++) {
        var color = '#0c96e2';
        var borderColor = i==0?'white':'#333';
        var borderWidth = i==0?2:0.5;
        if (Math.random() < 0.1) {
            if (c == 4) {
                color = 'black';
            } else if (c == 2 || c == 3) {
                color = '#fa240d';
            }
        }
        deviceItemData.push({
            value: 1,
            name: 'name'+i,
            itemStyle: {
                normal: {
                    color: color,
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                }
            }
        })
        
    }
    deviceData.push(deviceItemData);
}



option = {
    backgroundColor: 'linear-gradient(#000135, #0252a3)',

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
        {
            name:'Device',
            type:'pie',
            selectedMode: 'single',
            radius: ['50%', '55%'],
            animation: false,

            label: {
                normal: {
                    show: false,
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: deviceData[0]       
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['55%', '60%'],
            animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[1]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['60%', '65%'],
            animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[2]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['65%', '70%'],
            animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[3]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['70%', '75%'],
            animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[4]         
            
        }
    ]
};

function rotate(){
    for (var i=0; i<5; i++) {
        option.series[i].data[0].itemStyle.normal.borderColor = '#333';
        option.series[i].data[0].itemStyle.normal.borderWidth = 0.5;
        deviceData[i].push(deviceData[i].shift());
        option.series[i].data = deviceData[i];
        console.log(option.series[i].data[0])
        option.series[i].data[0].itemStyle.normal.borderColor = 'white';
        option.series[i].data[0].itemStyle.normal.borderWidth = 2;
        

    }
}

setInterval(function(){
    rotate();
    myChart.setOption(option);
}, 2000);