var colors = ['#AEC7EB', '#f4d583'];
var data1 = [421, 356, 719, 658, 458];
var data2 = [87, 46, 129, 174, 45];
var xData = ['南宁市行政审批局','柳州市行政审批局','梧州市行政审批局','北海市行政审批局','钦州市行政审批局'];
option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: "axis",
        formatter: '{b}<br/>{a1}-违规率:{c1}%<br/>{a0}-违规率:{c0}%',
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        top: 100,
        right: '20%',
        bottom: '60%'
    },
    legend: {
        data: ['日常检查', '专项检查'],
        align: 'left',
        left: '30%',
        top: 20
    },
    calculable: true,
    xAxis: [{
        type: "category",
        data: xData,
    }],
    yAxis: {
        type: 'value',
        name:'（违规率）',
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
            name: '日常检查',
            type: 'bar',
            color: colors[0],
            data: data1
        },
        {
            name: '专项检查',
            type: 'bar',
            color: colors[1],
            data: data2
        }
    ]
};