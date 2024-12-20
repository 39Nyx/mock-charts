//app.title = '单轴散点图';
// 我的作品
// http://gallery.echartsjs.com/explore.html?u=bd-3190370387&type=work#sort=rank~timeframe=all~author=all

//我的简书一月记：数据可视化
//https://zhuanlan.zhihu.com/p/28989360

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = [ 
    '20170827 点赞',
    '20170828 点赞',
    '20170829 点赞',
    '20170827 关注',
    '20170828 关注',
    '20170829 关注',
];

var data =[
    [0,0,1], [0,9,1], [0,2,1], [0,11,1], [0,23,7],
    [1,0,13], [1,1,7], [1,2,2], [1,5,1], [1,6,9], [1,7,28], [1,8,36], [1,9,36], [1,10,15], [1,11,12], [1,12,3], [1,13,5], [1,14,8], [1,15,2], [1,16,4], [1,17,2], [1,18,2], [1,20,3], [1,21,2], [1,22,2], [1,23,2],
    [2,8,2], [2,1,1], [2,4,1], [2,0,3], [2,15,3],
    [3,9,1], [3,11,1],
    [4,0,8], [4,1,9], [4,2,4], [4,3,1], [4,4,1], [4,5,2], [4,6,6], [4,7,17], [4,8,27], [4,9,28], [4,10,23], [4,11,9], [4,12,7], [4,13,8], [4,14,5], [4,15,4], [4,16,1], [4,17,2], [4,18,1], [4,19,3], [4,21,2], [4,22,2],
    [5,0,1], [5,9,1], [5,10,1], [5,11,1], [5,15,3], [5,20,1],
    
]

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 6 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 6 + 5) + '%',
        height: (100 / 6 - 10) + '%',
        axisLabel: {
            interval: 2
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
         itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
                           '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        
                        ];
                        return colorList[params.dataIndex]
             } 
                }
             },
        symbolSize: function (dataItem) {
        return Math.sqrt(dataItem[1])*10;
    //   return dataItem[1]*2.5;
            //return dataItem[1] * 4; 
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
