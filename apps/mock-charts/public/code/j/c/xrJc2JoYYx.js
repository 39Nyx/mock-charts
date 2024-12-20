var TmpData = (function(){
    var data = [];
    Date.prototype.getHM = function (format) {
        return this.getHours()+":"+this.getMinutes();
    }
    var date=new Date(); 
    for(var i=1;i<21;i++){
        var tmp = {};
        date.setMinutes(date.getMinutes()+1);
        tmp['time'] = date.getHM();
        tmp['client'] = Math.floor(Math.random()*20)+30;
        tmp['rx'] = Math.floor(Math.random()*10+Math.random()*2*15);
        tmp['tx'] = Math.floor(Math.random()*8+Math.random()*2*18);

        data.push(tmp);
    }
    return data;
})();
// var xData = function() {
//     var data = [];
//     Date.prototype.getHM = function (format) {
//         return this.getHours()+":"+this.getMinutes();
//     }
//     var date=new Date(); 
//     for (var i = 1; i < 100; i++) {
//         date.setMinutes(date.getMinutes()+1);
//         data.push(date.getHM());
//     }
//     return data;
// }();


var xData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['time']);
    }
    return data;
}();

var rxData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['rx']);
    }
    return data;
}();

var txData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['tx']);
    }
    return data;
}();

var clientData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['client']);
    }
    return data;
}();

option = {
    //backgroundColor: "#344b58",
    "title": {
        "text": "接入速率",
        x: "4%",
        textStyle: {
            color: '#000',
            fontSize: '12'
        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 40,
        "bottom": 40,
        left:30,
        right:30,
        textStyle: {
            color: "#fff"
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    "legend": {
        x: '40%',
        top: '5%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['RX', 'TX', '终端数量']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            formatter: '{value}'
        },
        "splitArea": {
            "show": false
        }
    }/*,{
            type: 'value',
            name: '终端数量',
            min: 0,
            max: 300,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: "#5793f3"
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        }*/],
    /*"dataZoom": [{
        "show": true,
        "height": 10,
        "xAxisIndex": [
            0
        ],
        bottom: 10,
        "start": 75,
        "end": 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 10,
        "start": 1,
        "end": 35
    }],*/
    "series": [/*{
            "name": "终端数量",
            "type": "bar",
            "barMaxWidth": 25,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(23,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            yAxisIndex: 1,
            "data": clientData,
            
        },*/{
            "name": "RX",
            "type": "line",
            "stack": "RX",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(23,230,45,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": rxData
        },{
            "name": "TX",
            "type": "line",
            "stack": "TX",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,0,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": txData
        }
    ]
}