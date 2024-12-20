app.title = '多 Y 轴刻度数一致示例';

var colors = ['#5793f3', '#d14a61'];

var data=[ "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00" ];

var data1= [ 699, 656, 0, 0, 78, 435, 1014, 1129, 747, 1183, 648, 1006, 737, 880, 777, 685, 469, 731, 319, 873, 824, 545, 0, 0 ];

var data2=[ 0, 0, 0, 1, 1, 0, 4, 31, 21, 18, 23, 22, 18, 19, 19, 16, 15, 22, 17, 18, 19, 16, 12, 9 ];


//取数组轴显示最大数
function yAxisMax(arr) {
	var max = Math.max.apply(null, arr);//取数组中的最大值
	var maxint = Math.ceil(max / 10);//去除个位数
	var maxval = maxint * 10;//补上各位十位加1
	return maxval;
}

//y轴间隔刻度数
var splitNumber=5;

var maxdata1 = yAxisMax(data1);
var maxdata2 = yAxisMax(data2);
var interval_left=maxdata1/splitNumber;//刻度间隔距离
var interval_right=maxdata2/splitNumber;//刻度间隔距离


option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['data1','data2']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: data
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'data2',
            min: 0,
            position: 'right',
            max:maxdata2,
            splitNumber:splitNumber,
            interval:interval_right,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: 'data1',
            min: 0,
            position: 'left',
            max:maxdata1,
            splitNumber:splitNumber,
            interval:interval_left,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'data2',
            type:'line',
            yAxisIndex: 0,
            data:data2
        },
        {
            name:'data1',
            type:'line',
            yAxisIndex: 1,
            data:data1
        }
    ]
};
