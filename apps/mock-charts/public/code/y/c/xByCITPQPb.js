option = {
    title : [
        {
        text: '成都与苏州变电容量及最高负荷对比',
        textStyle:
        {fontSize:28},
       // subtext: '单位：万元',
        x:'20%',
    },
        {
        text: '2016年最高负荷：万kW',
        //subtext: '南丁格尔玫瑰图',
        x:'15%',
        y:'15%'
    },
    {
        text: '现有变电容量：万KVA',
        //subtext: '南丁格尔玫瑰图',
        x:'62%',
        y:'15%'
        
    }
   ],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['草本 2976','木本 1092','藤本 241','菌藻 59']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            //roseType : 'area',
            radius : [60, 110],
            center : ['25%', '55%'],
            //roseType : 'radius',
            data:[
                {value:3108, name:'苏州 3108'},
                {value:1083, name:'成都 1083'},
               
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            //roseType : 'area',
            radius : [60, 110],
            center : ['70%', '55%'],
           // roseType : 'area',
           
            data:[
                {value:78793, name:'苏州 78793'},
                {value:41350, name:'成都 41350'},
               
            ]
        }
    ]
};