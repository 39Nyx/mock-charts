var uploadedDataURL = "/asset/get/s/data-1534168244781-r1ph3-JLm.json";

option = {
    title: {
        text: 'Awesome Chart'
        
    },
    geo:{
        map:'Tina'
    }
    
};
$.getJSON(uploadedDataURL,function(json){
        echarts.registerMap('Tina',json);
        myChart.setOption(Option)
    })