var unitName = '月份';
xAxisData = ["01","02","03","04","05","06","07","08","09","10","11","12"];
seriesDataNow = ["2","2","1","","","","","","","","",""]
seriesDataLastYear = ["1","1","1","1","1","1","1","1","2","2","1","1"]
seriesDataLast = ["1","2","2","1","","","","","","","",""]


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['当前', '同比', '环比'],
        top: '0%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        name: unitName,
        data: xAxisData
    },
    grid: {
        containLabel: true,
        top: '14%',
        left: '5%',
        bottom: '5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var returnHtml = params[0].name + unitName;
            for (var i = 0; i < params.length; i++) {
                var returnData = params[i].value;
                switch (returnData) {
                    case '1':
                    case 1:
                        returnData = 'I类';
                        break;
                    case '2':
                    case 2:
                        returnData = 'II类';
                        break;
                    case '3':
                    case 3:
                        returnData = 'III类';
                        break;
                    case '4':
                    case 4:
                        returnData = 'IV类';
                        break;
                    case '5':
                    case 5:
                        returnData = 'V类';
                        break;
                    default:
                        break;
                }
                returnHtml += '<br>' + params[i].seriesName + '水质：' + returnData;
            }
            return returnHtml;

        }
    },
    yAxis: {
        type: 'value',
        name: '水质级别',
        axisLabel: {
            formatter: function(e) {
                var returnData = '';
                switch (e) {
                    case '1':
                    case 1:
                        returnData = 'I';
                        break;
                    case '2':
                    case 2:
                        returnData = 'II';
                        break;
                    case '3':
                    case 3:
                        returnData = 'III';
                        break;
                    case '4':
                    case 4:
                        returnData = 'IV';
                        break;
                    case '5':
                    case 5:
                        returnData = 'V';
                        break;
                }
                return returnData;
            }
        }
    },
    color: ['#FA7A78', '#27BAE6', '#79C628'],
    series: [{
            name: '当前',
            data: seriesDataNow,
            type: 'bar',
            barGap: 0.1,
            barWidth: 15
        },
        {
            name: '同比',
            data: seriesDataLastYear,
            type: 'bar',
            barGap: 0.1,
            barWidth: 15
        },
        {
            name: '环比',
            data: seriesDataLast,
            type: 'bar',
            barGap: 0.1,
            barWidth: 15
        }
    ]
}