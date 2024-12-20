// 颜色
const CommonColor = [
    "#1668FF",
    "#4974FF",
    "#299EFF",
    "#29CAFF",
    "#00FFFF",
    "#FF9711",
    "#FFD34E",
    "#FFE44E",
    "#1668FF",
    "#F0FF4E"
]
// dataZoom
const commonDataZoom = [{
        type: "slider",
        show: true,
        xAxisIndex: [0],
        handleSize: 15, //滑动条的 左右2个滑动条的大小
        height: 8, //组件高度
        left: "9%", //左边的距离
        right: "9%", //右边的距离
        bottom: "5%", //右边的距离
        handleColor: "#ddd", //h滑动图标的颜色
        handleStyle: {
            borderColor: "#cacaca",
            borderWidth: "1",
            shadowBlur: 2,
            background: "#ddd",
            shadowColor: "#ddd"
        },
        fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                //给第一个设置0，第四个设置1，就是垂直渐变
                offset: 0,
                color: "#1eb5e5"
            },
            {
                offset: 1,
                color: "#5ccbb1"
            }
        ]),
        backgroundColor: "#ddd", //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        filterMode: "filter"
    },
    //下面这个属性是里面拖到
    {
        type: "inside",
        show: true,
        xAxisIndex: [0],
        start: 1,
        end: 100
    }
]

option = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Step Start', 'Step Middle', 'Step End']
    },
    grid: {
        y: "5%",
        x: "3%",
        x2: "6%",
        y2: "12%",
        containLabel: true
    },
    dataZoom: commonDataZoom,
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
        }
    ]
};