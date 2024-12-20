var legendMap = {'1':'邮件营销', '2':'邮件营销', '3':'视频广告','4':'直接访问','5':'搜索引擎' };

option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var results = [];
            params.forEach(function (item) {
                var name = item.name;
                var seriesName = legendMap[item.seriesName];
                var data = item.data;
                var span = '<span style="display:inline-block;';
                span += 'margin-right:5px;border-radius:10px;';
                span += 'width:9px;height:9px;background-color:';
                span += item.color;
                span += '"></span>';
                span += '<span>' + seriesName + ' : ' + data + '</span>';
                results.push(span);
            });
            return results.join('<br />');
        }
    },
    legend: {
        formatter: function (name) {
            return legendMap[name];
        },
        data:['1','2','3','4','5']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'1',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'2',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'3',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'4',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'5',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};