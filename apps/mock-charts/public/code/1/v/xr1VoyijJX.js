// 动态数据与图表分离
var legend_data = ['服装鞋包', '家用电器', '居家生活', '美食厨房', '美妆洗护', '母婴用品', '其他', '手机数码', '书籍', '运动户外', '道路'],
    series_data = [{
            value: 1959,
            name: '服装鞋包'
        },
        {
            value: 1239,
            name: '家用电器'
        },
        {
            value: 2844,
            name: '居家生活'
        },
        {
            value: 1802,
            name: '美食厨房'
        },
        {
            value: 1576,
            name: '美妆洗护'
        },
        {
            value: 19,
            name: '母婴用品'
        },
        {
            value: 107,
            name: '其他'
        },
        {
            value: 292,
            name: '手机数码'
        },
        {
            value: 136,
            name: '书籍'
        },
        {
            value: 27,
            name: '运动户外'
        },
        {
            value: 196,
            name: '水果蔬菜'
        },
    ];

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: legend_data
    },
    series: [{
        name: '类目',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            normal: {
                show: false // 取消模块的注释
            }
        },
        data: series_data,
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    // 将配色与 series.data 配置区分
                    var colorList = [
                        '#EA9294', '#949494', '#A4D2D5', '#F1C0B1', '#BAD7CB',
                        '#8B99A1', '#E6B9C0', '#A9B9C6', '#A9A9A9', '#60C0DD',
                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};