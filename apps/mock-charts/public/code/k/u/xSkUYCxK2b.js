option = {
    title: {
        text: '26w+简书用户粉丝情况',
        subtext:'瀑布图',
        // 爬取简书26万+用户信息：数据可视化
        // https://zhuanlan.zhihu.com/p/29589608
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data:['人数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data: ['0','1','2-10','10-100','100-1k','1k-1w','1w-10w','10w+']
        /*data :  function (){
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }*/
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总人数',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data:[0,784,77557,183051,246240,258985,260890,261259,261277]
            //data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '人数',
            type: 'bar',
            stack: '总人数',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[784,76773,105494,63189,12745,1905,369,5]
            //data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        }
    ]
};
