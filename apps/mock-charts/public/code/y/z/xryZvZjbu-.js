var data = [
{name:'环境污染行为',value:3915},
{name:'其他',value:268},
{name:'违反建设项目环境保护管理条例',value:17},
{name:'违反环境保护产品认定管理办法',value:3}
]
var datasname =[];
for(var i = 0;i<data.length;i++) {
    datasname.push(data[i].name)
}
    
option = {
    color:['#0BA1FC','#41D5F2','#ADDD8E','#5B8DFF'],
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        padding:10,
        data: datasname,
        itemWidth: 20,
        itemHeight: 10,
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    series: [{
        name: '',
        type: 'pie',
        selectedMode: 'single',
        radius: ['30%', '70%'],
        center: ['50%', '50%'],
        label: {
            normal: {
                formatter: '{d}%',
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 22
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        data:data
    }]
};