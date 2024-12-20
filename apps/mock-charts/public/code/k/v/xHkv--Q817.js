option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: 'Sales Revenue of CAN-LAX 2016-2017',
        textStyle:{
            fontSize:14
        }
    },
   tooltip: {                          // 提示框组件
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['2016', '2017','Growing Rate'],
        top:'18'
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        show: false                 // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,          // 坐标轴两边留白
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: [                            // 双y坐标轴
        {
        name: 'Revenue(10k)',
        type: 'value',
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    },
    {
            name: 'Growing\nRate (%)',
            //nameLocation: 'start',
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            },
            min:0,
            max: 300,                       // growing rate upper limit
            type: 'value',
            //top:10,
            inverse: false,
            axisLine: {
                lineStyle: {
                    color: '#2f4554'
                }
        }
    }],
    
    series: [
        {
            name:'2016',
            type:'bar',
            color:'#00BFFF',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            data:[1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, 1711.7, 1921.2, 2609.6, 3332.6, 3647.3, 2498.1]
        },
        {
            name:'2017',
            type:'bar',
            color: '#DC143C',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            data:[2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, 3956.1, 3691.1, 4637.6, 4603.8, 6401.1, 4988.4]
        },
        {
            name:'Growing Rate',
            type:'line',
            yAxisIndex: 1,              // yAxisIndex 1 表示第二个y轴，默认为0
            color: '#FFD700',
            //stack: '总量',
            markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                    //{type : 'min', name : '最小值'}
                ]
            },
            data:[49.8, 19, 68.9, 261.6, 212.6, 250.1, 131.1, 92.1, 77.7, 38.1, 75.5, 99.7]
        }
        ]
}