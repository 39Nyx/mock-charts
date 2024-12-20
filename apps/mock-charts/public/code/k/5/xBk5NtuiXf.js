option = {
     title: {
        text: '抚州统计'
    },
    toolbox:{
        right:20,
        feature:{
            saveAsImage: {},
            restore: {},
            magicType: {
                type: ['line', 'bar', 'stack', 'tiled']
            },
            // brush: {},
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
     color: [
        '#07cdbd', '#ff5700', '#06cd06', '#ff9600', '#00a3d8', '#dce319'
    ],
    legend: {
        data:['AQI','PM2.5','PM10','SO2','NO2','CO','O3']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
             axisLabel:{
                     textStyle:{
                          color: '#000',
                          fontSize:'14',
                     },
                       interval:0,  
                       rotate:-45, 
                    },
            data : ['临川区','东乡区','南城县','黎川县','南丰县','崇仁县','乐安县','宜黄县','金溪县','资溪县','广昌县']
        }
    ],
    yAxis : [
        {
            
            type : 'value',
             name: '单位:μg/m3(CO为mg/m3)',
              axisTick: {
                show: false,
                // color:'#fff',
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
                    //color:'#fff',
            },
            splitLine: {
                show: false,
                // color:'#fff',
            }
        }
    ],
    series : [
        {
            name:'AQI',
            type:'line',
            data:[40, 50, 45, 56, 45, 55,123,156, 129,142,148]
        },
        {
            name:'PM2.5',
            type:'bar',
            data:[30, 45, 73, 34, 58, 70, 60, 54, 63,50, 70]
        },
        {
            name:'PM10',
            type:'bar',
            data:[80, 30, 48, 44, 87, 88, 180, 156,132, 145, 189]
        },
        {
            name:'SO2',
            type:'bar',
            data:[20, 12, 18, 15, 19, 33, 41, 13, 18, 23, 21]
        },
        {
            name:'NO2',
            type:'bar',
            data:[23, 32, 20, 54, 19, 13, 21, 32, 23, 30, 32]
        },
        {
            name:'CO',
            type:'bar',
            data:[1.5, 1.23, 1.01, 1.54, 1.9, 1.3, 1.3, 1.34, 1.04, 1.1, 1.23]
        },
        {
            name:'O3',
            type:'bar',
            data:[12, 33, 20, 15, 19, 33, 41, 13, 16, 23, 21]
        }
    ]
};
