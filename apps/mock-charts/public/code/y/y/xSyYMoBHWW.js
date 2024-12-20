option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis',
         formatter: function(params){
             var aa="";
             console.log(params);
             for(var i=0;i<params.length;i++){
               if(params[i].seriesName!="搜索引擎1"){
               aa+=params[i].seriesName+":"+params[i].value+"</br>";
}
             }
             return aa;
         }
      },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日','周一','周二','周三','周四','周五','周六','周日'],
       
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            smooth:true,
            symbol:'image://https://www.baidu.com/img/bd_logo1.png',
            // symbolSize:30,
            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            smooth:true,
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            smooth:true,
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            smooth:true,
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            smooth:true,
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
         {
            name:'搜索引擎1',
            type:'bar',
            
            data:[0, 0, 0, 0,0, 0, 1500,0, 0, 0, 0,0, 0, 1500],
            itemStyle: {
            normal: {
            color: '#000',
            borderColor: '#000',
            borderWidth: 0,
            borderType: 'solid',
            barBorderRadius: 0,
            shadowColor:'#000' ,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 0.5,
            }
        }
         }
    ]
};
