    var economicIndicatorList = [["2010/10", 192],["2010/11", 220],["2010/12", 292],
        ["2011/1", 19],["2011/2", 22],["2011/3", 2092],
        ["2011/4", 12],["2011/5", 20],["2011/6", 592],["2011/7", 22],["2011/8", 2092],
        ["2011/9", 12],["2011/10", 20],["2011/11", 592],["2011/12", 22],["2012/1", 2092],
        ["2012/2", 12],["2012/3", 20],["2012/4", 592],["2012/5", 20],["2012/6", 592],
        ["2012/7", 22],["2012/8", 2092],["2012/9", 12],["2012/10", 20],
        ["2012/11", 592],["2012/12", 22],["2013/1", 2092],
        ["2013/2", 12],["2013/3", 20],["2013/4", 592],["2013/5", 20],["2013/6", 592],
        ["2013/7", 22],["2013/8", 2092],["2013/9", 12],["2013/10", 20],
        ["2013/11", 592],["2013/12", 22],["2014/1", 2092],
        ["2014/2", 12],["2014/3", 20],["2014/4", 592],["2014/5", 20],["2014/6", 592],
        ["2014/7", 22],["2014/8", 2092],["2014/9", 12],["2014/10", 20],
        ["2014/11", 592],["2014/12", 22],["2015/1", 2092],
        ["2015/2", 12],["2015/3", 20],["2015/4", 592],["2015/5", 20],["2015/6", 592],
        ["2015/7", 22],["2015/8", 2092],["2015/9", 12],["2015/10", 20],
        ["2015/11", 592],["2015/12", 22]];
option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
           grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        title: {
            show:false,
            left: 'center',
            text: '大数据量面积图',
        },
        toolbox: {
            show:false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'time',
                minInterval: 3600 * 24 * 1000 * 30
            },
            {
                type: 'category',
                sortSeriesIndex:false,
                realtimeSort:false,
                nameLocation:'start',
                position:'bottom',
                offset:83,
                axisLine:{
                    show:false,
                },
                axisTick: {
                    alignWithLabel: true,
                    inside:true, // x轴刻度是否朝内
                    lineStyle:{
                        opacity:0.8,
                        color:"#90979c",
                        width:2,
                    }
                },
                data: ['一','2','3','4','5','6','7','8','9','10','11','12']
            }
        ],
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'slider',
            show:false,
            minValueSpan: 3600 * 24 * 1000 * 30
        }, {
                    show: true,
                    backgroundColor:"#90979c", //组件的背景颜色
                    height: 3,
                    xAxisIndex: 0,
                    radiusAxisIndex:3, //设置 dataZoom-inside 组件控制的 radius 轴,可以用数组表示多个轴
                    bottom:'8%',
                    brushSelect:false,// 区域控制缩放器可移动区域显示
                    start: 10,
                    end: 90,
                    handleIcon:'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
                    handleSize: '10',
                    fillerColor:"#0e88e0", //选中范围的填充颜色。
                    handleStyle:{
                        color:"#ffffff",
                        borderColor:"#0e88e0",
                        backgroundColor:"#0e88e0"

                    },
                    textStyle:{
                        color:"#90979c",
                        // borderColor:"#90979c",
                    }
        }],
        series: [
            {
                name: '模拟数据',
                type: 'bar',
                smooth: true,
                symbol: 'none',
                data: economicIndicatorList
            }
        ]
    };