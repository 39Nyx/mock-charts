var dayDataUrl = "/asset/get/s/data-1530188991524-BydTVUGM7.json";
var minDataUrl = "/asset/get/s/data-1530189001259-rkZAEIMMm.json";

// 'time, open, high, low, close'
var dayData = $.ajax({url:dayDataUrl, async:false}).responseText;  
// 'time, open, high, low, close'
var minData = $.ajax({url:minDataUrl, async:false}).responseText;  

//console.log(minData)

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};