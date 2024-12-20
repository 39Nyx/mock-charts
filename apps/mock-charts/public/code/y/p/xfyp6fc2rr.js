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
            max: 400,
            interval: 50
        },
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['minqinchen','diwu','zhentaotan','yiwenhuang','qingqishi','jiaweili','geyongtao','maolei','zhouxingyu','maolei1','huixue','zuweihuang1','mingzhang','xingyuzhou','zuweihuang','xiaozhang','zhichengsun','changweilin','liuchang']
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
            data:[1,4,1,8,2,1,7,1,4,2,1,8,6,10,4,1,16,16,1]
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
            data:[0.5,72,23,192,48,24,168,24,96,48,24,192,144,238,96,23,384,96,24]
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
            data:[-0.0,-3.59,-5.59,-9.94,-10.93,-14.07,-15.15,-33.75,-39.80,-43.31,-46.56,-55.20,-61.14,-70.63,-74.16,-84.34,-90.23,-91.27,-99.33]
        }
    ]
};
