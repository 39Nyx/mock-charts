app.title = '堆叠柱状图';


var testArr = [
  {
    "cloud": "阿里云",
    "project": "虚拟战争",
    "cost": 511.58162662154535,
    "month": 201710,
    "product": "vm"
  },
  {
    "cloud": "金山云",
    "project": "虚拟战争",
    "cost": 911.04,
    "month": 201710,
    "product": "KEC"
  }
]


option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['vm','KEC']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['阿里云','金山云']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'vm',
            type:'bar',
            stack: '总量',
            data:[511.58162662154535,0]
        },
        {
            name:'KEC',
            type:'bar',
            stack: '总量',
            data:[0,112]
        }
    ]
};