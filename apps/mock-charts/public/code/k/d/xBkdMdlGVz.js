var generateData = function() {
    return Array.apply(null, {
        length: 25
    }).map(function(item, index) {
        return Math.round(Math.random() * 50 + 50);
    });
}
option = {
    backgroundColor:'#fff',
    grid:{
        height:300,
        bottom:150
    },
    legend: {
        bottom:30,
        itemGap:30,
        itemWidth:20,
        itemHeight:10,
        data: [{name:'攻击量',icon:'rect'},{name: '被攻击IP量',icon:'rect'},{name:'高危',icon:'rect'},{name: '中危',icon:'rect'},{name:'低危',icon:'rect'}]
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        boundaryGap: false,
        axisTick:{show:false},
        axisLine:{lineStyle:{color:'#ccc'}},
        axisLabel:{color:'#333',interval:0},
        data: ['11.04', '11.05','11.06', '11.07','11.08', '11.09','11.10', '11.11', '11.12', '11.13','11.14', '11.15','11.16', '11.17','11.18', '11.19','11.20', '11.21','11.22', '11.23','11.24', '11.25','11.26', '11.27', '11.28']
    },
    yAxis: {
       interval:50,
      axisTick:{show:false},
      axisLine:{show:false}
       
    },
     dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        bottom:80,
        backgroundColor:'#fff',
        borderColor:'#fff',
     //   fillerColor:'#ff0000',
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        name: '攻击量',
        type: 'line',
      //  z:5,
        stack: '总量',
        itemStyle: {
            normal: {
                 opacity:0
            }
        },
         lineStyle:{
            normal:{
                color:'#1874f0'
               // opacity:0
            }
        },
        areaStyle: {
            normal: {
                color: '#1875f0',
                opacity:1
             //   shadowColor: 'rgba(0, 0, 0, 0.5)',
            //    shadowBlur: 10
            }
        },
        data: generateData()
    }, {
        name: '被攻击IP量',
        type: 'line',
      //  z:4,
        stack: '总量',
        itemStyle: {
            normal: {
                 opacity:0
            }
        },
        lineStyle:{
            normal:{
                color:'#40d760'
               // opacity:0
            }
        },
        areaStyle: {
            normal: {
                color: '#4ecf69',
                 opacity:1
        //        shadowColor: 'rgba(0, 0, 0, 0.5)',
        //        shadowBlur: 10
            }
        },
        data: generateData()
    },{
        name: '高危',
        type: 'line',
      //  z:3,
        stack: '总量',
        itemStyle: {
            normal: {
                opacity:0
            }
        },
         lineStyle:{
            normal:{
                color:'#ff0000'
               // opacity:0
            }
        },
        areaStyle: {
            normal: {
                color: '#ff2a00',
                 opacity:1
           //     shadowColor: 'rgba(0, 0, 0, 0.5)',
          //      shadowBlur: 10
            }
        },
        data: generateData()
    }, {
        name: '中危',
        type: 'line',
     //   z:2,
        stack: '总量',
        itemStyle: {
            normal: {
                opacity:0
            }
        },
         lineStyle:{
            normal:{
                color:'#ff8a00'
               // opacity:0
            }
        },
        areaStyle: {
            normal: {
                color: '#ff8400',
                 opacity:1
            //    shadowColor: 'rgba(0, 0, 0, 0.5)',
            //    shadowBlur: 10
            }
        },
        data: generateData()
    }, {
        name: '低危',
        type: 'line',
    //    z:1,
        stack: '总量',
        itemStyle: {
            normal: {
                 opacity:0
            }
        },
         lineStyle:{
            normal:{
                color:'#fbd629'
              //  opacity:0
            }
        },
        areaStyle: {
            normal: {
                color: '#ffdd3f',
                 opacity:1
             //   shadowColor: 'rgba(0, 0, 0, 0.5)',
             //   shadowBlur: 10
            }
        },
        data: generateData()
    }]
};