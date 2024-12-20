app.title = '坐标轴刻度与标签对齐';
var currentBarVal = 0;
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        formatter: function(bar){
            currentBarVal = bar[0].data
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
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

document.addEventListener('click',function(){
    alert(currentBarVal)
})