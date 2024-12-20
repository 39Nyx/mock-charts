var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var num = Math.random()*400;
var data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var number = [10, 52, 200, 334, 390, 330, 220];
function add(str){
    num = Math.random()*400;
    data.push(week[0]);
    number.push(num);
    week.push(week[0]);
    if(str){
        data.shift();
        number.shift();
        week.shift();
    }
}
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
            data : data,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:number
        }
    ]
};

setInterval(function () {
    add(true);
    myChart.setOption({
        xAxis: {
            data: data
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [{
            name:'成交',
            type:'bar',
            barWidth: '60%',
            data: number
        }]
    });
},1000);