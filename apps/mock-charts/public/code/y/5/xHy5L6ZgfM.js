app.title = '柱状图框选';

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}


option = {
    backgroundColor: '#eee',
    
  
    xAxis: [{
        data: [],
    },{
        data: [],
    }],
    yAxis: {
       
   
    },
    

    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            data: data1,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "yellow",
                    }
                }
            },
            
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            data: data2,   label: {
                normal: {
                    show: true,
                    position: "bottom",
                    textStyle: {
                        color: "green",
                    }
                }
            },
           
        }
    ]
};
