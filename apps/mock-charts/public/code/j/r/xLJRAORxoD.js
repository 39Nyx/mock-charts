app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['gpu', '时长', '利用率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            min: -100,
            max: 300,
            interval: 50
        },
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['wenfeiyang','jiaweili','diwu','yiwenhuang','qingqishi','zhentaotan','maolei','geyongtao','zuweihuang1','maolei1','zuweihuang','huixue','liuchang','zhouxingyu','mingzhang','zhichengsun','changweilin','xingyuzhou','xiaozhang']
        }
    ],
    series : [
        {
            name:'gpu',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[1,1,5,8,3,4,1,5,8,2,5,1,1,4,6,24,8,10,1]
        },
        {
            name:'时长',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[8.3,24,62,192,13,15.5,24,120,192,48,102,24,23.5,96,144,380,96,240,24]
        },
        {
            name:'利用率',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-0.0,-0.0,-0.0,-0.0,-0.23,-0.68,-13.87,-19.14,-25.72,-38.35,-40.34,-44.18,-50.15,-55.80,-62.42,-74.78,-74.97,-77.26,-83.62]
        }
    ]
};
