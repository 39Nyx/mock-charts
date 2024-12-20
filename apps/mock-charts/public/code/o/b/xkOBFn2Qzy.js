var data = [
        {value:264272, name:'学历不限', selected:true},
        {value:126797, name:'本科以下'},
        {value:35260, name:'本科'},
        {value:36680, name:'本科以上'}
        
    ];
var count = 0;
option = {
    backgroundColor: '#0d0f16',
    color: ['#3c13a8', '#4d59e6', '#5c63c5', '#0472d9' ],
    series: [
        {
            type:'pie',
            selectedMode: 'single',
            selectedOffset: 20,
            radius: [0, '30%'],
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:data
        },
        {
            type:'pie',
            selectedMode: 'single',
            selectedOffset: 20,
            radius: ['40%', '55%'],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                      fontSize: 24,
                      color: '#ade3ff'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
              normal:{
                 opacity:0.6
              }  
            },
            data:data
        }
    ]
};
app.timeTicket = setInterval(function() {
    var r = count % data.length;
    option.series[0].data[r].selected = false;
    option.series[1].data[r].selected = false;
    count++;
    var s = count % data.length;
    option.series[0].data[s].selected = true;
    option.series[1].data[s].selected = true;
    myChart.setOption(option, true);
}, 1000);