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
            data : ['jiaweili','diwu','wenfeiyang','yunhuiyang','yiwenhuang','zhentaotan','qingqishi','geyongtao','maolei','zuweihuang1','changweilin','huixue','maolei1','zhouxingyu','mingzhang','zuweihuang','xingyuzhou','xiaozhang','zhichengsun','liuchang']
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
            data:[1,5,1,1,8,3,4,10,1,8,12,2,2,4,6,6,10,1,16,1]
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
            data:[24,60,12,10.5,192,38,13,146.5,24,192,96,29,48,96,144,111.5,240,23.5,384,24]
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
            data:[-0.0,-0.0,-0.0,-0.0,-0.0,-0.89,-10.75,-14.41,-19.88,-35.77,-41.79,-41.95,-47.11,-55.64,-59.05,-64.35,-76.62,-85.41,-90.10,-99.52]
        }
    ]
};
