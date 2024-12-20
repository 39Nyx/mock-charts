// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var schema = [
    {name: 'date', index: 0, text: '日'},
    {name: 'AQIindex', index: 1, text: 'AQI指数'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];
var days = ['2017/12/06', '2017/12/06', '2017/12/06', '2017/12/06', '2017/12/06', '2017/12/06', '2017/12/06'];
// var dataBJ = [
//     [1,60*0,49,77,1.46,48,27,"良




//     [2,60*10+30,55,80,1.29,59,29,"良"],
//     [3,60*11,216,280,'-',108,64,"重度污染"],
//     [1,60*12,127,216,2.52,61,27,"中度污染"],
//     [1,60*24,19,38,0.57,31,15,"优"],

// ];
var dataBJ = [
      {
        value: [0, 60, '[120/120]', '[120/120]', 'time'],
        symbolSize:5,
        label: {
        show:true,
        position:[0,0],
        formatter: [
          '[120/120]'
        ].join('\n'),
        backgroundColor:'#444',
        padding:2,
        color:'#fff'
      }
        
      },
    // [1,60*0,49,77,1.46,48,27,"良"],
    // [2,60*10+30,55,80,1.29,59,29,"良"],
    // [3,60*11,216,280,'-',108,64,"重度污染"],
    // [1,60*12,127,216,2.52,61,27,"中度污染"],
    // [1,60*24,19,38,0.57,31,15,"优"],

];

var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    grid: {
        left: '10%',
        right: 200,
        top: '15%',
        bottom: '10%'
    },
    // tooltip: {
    //     padding: 10,
    //     backgroundColor: '#222',
    //     borderColor: '#777',
    //     borderWidth: 1,
    //     formatter: function (obj) {
    //         var value = obj.value;
    //         return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
    //             + obj.seriesName + ' ' + value[0] + '日：'
    //             + value[7]
    //             + '</div>'
    //             + schema[1].text + '：' + value[1] + '<br>'
    //             + schema[2].text + '：' + value[2] + '<br>'
    //             + schema[3].text + '：' + value[3] + '<br>'
    //             + schema[4].text + '：' + value[4] + '<br>'
    //             + schema[5].text + '：' + value[5] + '<br>'
    //             + schema[6].text + '：' + value[6] + '<br>';
    //     }
    // },
    xAxis: {
        type: 'category',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        inverse:true,
        data:['2017/12/12', '2017/12/11', '2017/12/10', '2017/12/09', '2017/12/08', '2017/12/07', '2017/12/06'],
    },
    yAxis: [
        {
            type: 'value',
            // name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 20
            },
            splitLine: {
                show: false
            },
            show:true,
            min:0,
            max:60*24,
        },
        {
            type: 'category',
            offset:-50,
            position:'left',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            onZeroAsisIndex:0,
            nameTextStyle: {
                fontSize: 20
            },
            axisTick:{
              alignWithLabel:true  
            },
            boundaryGap:false,
            data:['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
        }
        ]
    ,
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        }
    ]
};