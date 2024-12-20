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
            data : ['diwu','zhengxinkang','minqinchen','zhentaotan','qingqishi','geyongtao','jiaweili','maolei','zhouxingyu','maolei1','yiwenhuang','huixue','xiaozhang','zuweihuang1','mingzhang','xingyuzhou','zuweihuang','zhichengsun','changweilin','liuchang']
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
            data:[4,1,1,1,1,7,1,1,4,2,8,1,2,8,6,10,16,16,4,1]
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
            data:[49,0.2,24,23,24,168,24,24,96,48,192,24,45,192,144,238,94,384,96,24]
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
            data:[-0.0,-0.0,-0.0,-5.58,-15.23,-16.00,-16.86,-33.67,-39.77,-41.55,-44.53,-45.50,-57.37,-60.51,-68.60,-69.45,-76.20,-90.37,-94.59,-98.89]
        }
    ]
};
