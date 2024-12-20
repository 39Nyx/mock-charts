option = {
    title : {
        text: '按项目状态统计',
       // subtext: '纯属虚构',
        x:'center'
        
    },
     
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
            color: [ '#33ff00','#74ff02','#99ff33','#eafe34','#ffe633','#ffad33','#ff8a33','#ff6633','#ff0000'],
              //          color: [ '#e4e4e4','#c9c9c9','#bcbcbc','#a1a1a1','#949494','#797979','#6b6b6b','#5e5e5e','#434343'],

    legend: {
           bottom:0,
           itemWidth:20,
        left: 'center',
        data: [ '符合计划','进度正常+轻度超支','进度正常+严重超支','进度滞后+预算正常','进度滞后+轻度超支','进度滞后+严重超支','进度延期+预算正常','进度延期+轻度超支','进度延期+严重超支']
    },
    series : [
        {
            name: '项目数',
            type: 'pie',
            radius : '45%',
            center: ['50%', '42%'],
            data:[
                {value:370, name:'符合计划'},
                {value:155, name:'进度正常+轻度超支'},
                {value:67, name:'进度滞后+预算正常'},
                {value:37, name:'进度滞后+轻度超支'},
                {value:73, name:'进度正常+严重超支'},
                {value:67, name:'进度滞后+严重超支'},
                {value:67, name:'进度延期+预算正常'},
                {value:37, name:'进度延期+轻度超支'},
                {value:67, name:'进度延期+严重超支'},
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
