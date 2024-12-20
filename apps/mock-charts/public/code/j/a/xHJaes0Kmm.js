app.title = '堆叠条形图';
const xdata = ['2018/05/06','2018/05/06','2018/05/06','2018/05/06','2018/05/06','2018/05/06','2018/05/06'];
const ydata = {
    energy: [320, 302, 301, 334, 390, 330, 320],
    other: [120, 132, 101, 134, 90, 230, 210],
};
const toPercent = (num1, num2) => {
    const total = num1 + num2;
    return (Math.round(num1 / total * 10000) / 100).toFixed(0) + '%';
};
const formatDate = (date, format = 'YYYY/MM/DD') => {
    if (!date) return '';

    const time = typeof date === 'string' ? new Date(date) : date;
    const year = time.getFullYear(),
    month = time.getMonth() + 1,
    day = time.getDate(),
    hour = time.getHours(),
    min =  time.getMinutes(),
    sec = time.getSeconds();
    const preIndex = Array.apply(null, Array[10]).map((elem, index) => {return `0${index}`});
    return format.replace(/YYYY/g, year)
    .replace(/MM/g, preIndex[month] || month)
    .replace(/DD/g, preIndex[day] || day)
    .replace(/hh/g, preIndex[hour] || hour)
    .replace(/mm/g, preIndex[min] || min)
    .replace(/ss/g, preIndex[sec] || sec);
}
let sum = [];

$.each(ydata.energy, (index, cur) => {
    sum[index] = cur + ydata.other[index];
})


option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            let p1 = toPercent(params[1].data, params[0].data);
            let p2 = toPercent(params[0].data, params[1].data);
            let date = formatDate(params[1].axisValueLabel, 'YYYY年MM月DD日')
            return `
                ${date} <br/>
                ${params[1].marker} ${params[1].seriesName}：${params[1].data}个 （${p1}）<br/>
                ${params[0].marker} ${params[0].seriesName}：${params[0].data}个 （${p2}）<br/>
            `
        },
    },
    legend: {
        data: ['电源箱警报', '其他运行设备警报']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: xdata,
        axisLine: {
            lineStyle: {
                color: '#999',
            }
        },
        axisLabel: {
            color: '#999',
        }
    },
    yAxis:  {
        type: 'value',
        name: '单位/个',
        axisLine: {
            lineStyle: {
                color: '#999',
            }
        },
        splitLine: {
            lineStyle: {
                color: '#999',
            },
        },
        axisLabel: {
            color: '#999',
        }
    },
    dataZoom:[
      {
          id: 'dataZoomX',
          type: 'slider',
          xAxisIndex: [0],
          filterMode: 'filter',
      },
      {
          type: 'inside',
      },
    ],
    series: [
        {
            name: '其他运行设备警报',
            type: 'bar',
            stack: '当天报警总数',
            data: ydata.other,
            itemStyle: {
                color: '#4acffa',
            }
        },
        {
            name: '电源箱警报',
            type: 'bar',
            stack: '当天报警总数',
            data: ydata.energy,
            itemStyle: {
              color: '#fa8c69',
            },
        },
        {
            name: '总报警数',
            type: 'bar',
            barGap: '-100%',
            data: sum,
            show: false,
            itemStyle: {
              color: 'transparent',
            },
            label: {
              show: true,
              position: 'top',
              color: '#999',
            }
        },
    ]
};