var dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var data1 = [20, 12, 11, 24, 20, 30, 30, 13, 42, 31, 90, 19, 20, 12, 13, 34, 98, 23, 25, 20];
var data2 = [203, 162, 151, 24, 220, 30, 30, 13, 42, 31, 90, 519, 20, 12, 13, 34, 98, 23, 25, 20];
var data3 = [20, 152, 11, 24, 20, 430, 30, 13, 42, 31, 90, 159, 250, 12, 13, 354, 98, 23, 25, 20];
var data4 = [240, 152, 211, 244, 240, 30, 30, 13, 42, 31, 950, 19, 20, 12, 13, 34, 958, 23, 25, 20];
var data5 = [20, 142, 11, 224, 20, 30, 30, 13, 42, 31, 90, 19, 250, 152, 153, 34, 98, 23, 25, 20];

var baseStyle = {
                color:'#ccc',
                width:1
            };

option = {
    title: {
        text: '特殊方法实现点击高亮',
    },
    legend:{
        show:false,
        data:['1','2','3','4','5']
    },
    tooltip:{
        trigger:'item'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            type: 'line',
            name:'1',
            lineStyle:baseStyle,
            data: data
        },
        {
            type: 'line',
            name:'2',
            data: data1,
            lineStyle:baseStyle,
        },
        {
            type: 'line',
            name:'3',
            data: data2,
            lineStyle:baseStyle,
        },
        {
            type: 'line',
            name:'4',
            data: data3,
            lineStyle:baseStyle,
        },
        {
            type: 'line',
            name:'5',
            data: data4,
            lineStyle:baseStyle,
        }
    ]
};

// Enable data zoom when user click line.
myChart.on('mouseover', function (params) {
    var activeLine = params.seriesName;
    var lineStyleSet;
    var legendTh = myChart.getOption().legend[0].data;
    var seriesSet = [];
    var seriesGET;
    for(var i = 0;i<legendTh.length;i++){
            if(legendTh[i]===activeLine){
                lineStyleSet = {
                    color:'red',
                    width:5
                }
            }else{
                lineStyleSet = {
                    color:'#ccc',
                    width:1
                }
            }
            seriesGET = {
                name:legendTh[i],
                lineStyle:lineStyleSet
            }
            seriesSet.push(seriesGET)
    }
    myChart.setOption({
        series:seriesSet
    })
});