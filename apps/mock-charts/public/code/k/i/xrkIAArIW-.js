option = {
    title : [{
        text: 'Issues数量报告',
        // subtext: '南丁格尔玫瑰图',
        x:'center'
    },{
        text:'总数',
        x:'center',
        top: '46%',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 14
        }
    },{
        text:'1000',
        x:'center',
        top: '50%',
        textStyle: {
            color: '#666',
            fontWeight: 'normal',
            fontSize: 18
        }
    }],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['虎彩影像 2622','IT运维 1107','SAP支持 754','OA支持 726','虎彩影印 587','服务器运维 405','数码生产管理系统 403','移动APP(简印) 388','出版业务 288','Unlimax实施 170']
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
            name:'Issues数量',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:[
                {value:2622, name:'虎彩影像 2622'},
                {value:1107, name:'IT运维 1107'},
                {value:754, name:'SAP支持 754'},
                {value:726, name:'OA支持 726'},
                {value:587, name:'虎彩影印 587'},
                {value:405, name:'服务器运维 405'},
                {value:403, name:'数码生产管理系统 403'},
                {value:388, name:'移动APP(简印) 388'},
                {value:288, name:'出版业务 288'},
                {value:168, name:'Unlimax实施 170'},
                
            ]
        }
    ]
};
