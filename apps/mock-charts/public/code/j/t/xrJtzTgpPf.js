var data = [];
var data2 = [];
var now = new Date();
var date,num;
for(var i = 0,leni=750;i<leni;i++){
    date = now.getTime()+i*1000*60*60;
    num = Math.round(153*Math.random());
    data.push({
        name:date,
        value: [date,num]
    });
    num = Math.round(152*Math.random());
    data2.push({
        name:date,
        value: [date,num]
    });
    
}

var timeFormat = function(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
var gauge_value = data[data.length-1].value[1];
var gauge_value2 = data2[data2.length-1].value[1];
var unit = '根/分';
var color = ['#e29304','#75b228'];
var name = ['装药机1','装药机2'];

option = {
    legend: {
        data:name,
        orient: 'vertical',
        x: 'left',
        top:20,
        left:20
    },
    title: [{
        text: gauge_value,
        textStyle: {
            color: '#ddd',
            fontSize: 50
        },
        left: 150,
        subtext: unit,
        subtextStyle: {
            fontSize: 14
        } 
    },{
        text: gauge_value2,
        textStyle: {
            color: '#ddd',
            fontSize: 50
        },
        left: 300,
        subtext: unit,
        subtextStyle: {
            fontSize: 14
        } 
    }],
    grid: {
        right: 20,
        left: 20,
        top: 70,
        bottom:70
    },
    dataZoom: {
        show:true,
        realtime: true,
        start: 30,
        end: 70
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, '5%'],
        splitLine: {
            show: false
        }
    },
    color:color,
    series: [
    	{
            name: name[0],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        },
    	{
            name: name[1],
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2,
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }
    ]
};