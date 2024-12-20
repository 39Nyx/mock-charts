var colors = ['#00CED1', '#00FA9A'];
var data1=[345,274,382,278,352,397,235,432,462,264,353,454,293,487,243,468,415,219,474,395,292,314];
var data2=[917,889,1264,1127,950,1153,920,861,996,866,898,1314,866,1053,850,1177,1171,923,804,1253,1265,1345];
option = {
    title:{
        text:'检查企业覆盖情况',
        textStyle:{
             fontSize: '18'
        }
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '20%',
        top:80,
        bottom: 85
    },
    
    legend: {
        data:['检查提供者数','已检查企业数'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市','贺州市','河池市','来宾市','崇左市','岑溪市','东兴市','桂平市','北流市','靖西市','宜州市','合山市','凭祥市']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ], "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [
        {
            name:'检查提供者数',
            type:'bar',
            data:data2
        },
        {
            name:'已检查企业数',
            type:'bar',
            data:data1
        }
    ]
};
