option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    color:["#ffc100"],
    backgroundColor:"#137ecd",
    
    legend: {
    
        selectedMode:"single",
       left:"left",
        textStyle:{
            color:"#ffc100",
            borderWidth:1,
            borderColor:"#fff",
            padding:10,
            borderRadius:4,
        
        },
        data:[
            {name:'大唐',icon:"none"}
            ,{name:'前台',icon:"none"},{name:'客房',icon:"none"},
            {name:'餐厅',icon:"none"},{name:'康乐',icon:"none"}],
        selected:{
            "大唐":true,
             "前台":false,
              "客房":false,
               "餐厅":false,
               "康乐":false
        }
    },
    grid: {
        left: '3%',
        right: '20%',
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
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLine:{show:false},
        axisTick:{show:false},
              axisLabel:{
            
                color:"#fff"
            
        }
    },
    yAxis: {
        type: 'value',
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false},
        axisLabel:{
            
                color:"#fff"
            
        }
    },
    series: [
        {
            name:'大唐',
            type:'line',
            symbolSize:20,
            lineStyle:{
                normal:{
                    color:"#ffc100",
                    width:5
                }
            },
            itemStyle:{
                normal:{
                 width:5,   
                color:"#ffc100"
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'前台',
            type:'line',
  
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'客房',
            type:'line',
   
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'餐厅',
            type:'line',
  
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'康乐',
            type:'line',
   
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
