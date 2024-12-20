let dataArr = [  
    {value:3, name:'申请'}, 
    {value:5, name:'项目评估'},
    {value:10, name:'审批合格提交计划'},
    {value:12, name:'合同签署'},
    {value:15, name:'缴清费用'},
    {value:10, name:'确认工期安排施工'},
    {value:12, name:'确定开业时间里程'},
    {value:8, name:'招募员工安排培训'},
    {value:12, name:'工程延后运营验收'}, 
    {value:13, name:'促销计划正式开业'},
    // {value:50,name:'高速50KM',itemStyle:{normal:{color:'#FE0000'}}},  
    // {value:150,name:'一级150KM',itemStyle:{normal:{color:'#F29700'}}},  
    // {value:150,name:'二级150KM',itemStyle:{normal:{color:'#02B0ED'}}}, 
    // {value:100,name:'三级100KM',itemStyle:{normal:{color:'#55E87D'}}},
    // {value:50,name:'四级50KM',itemStyle:{normal:{color:'#FFE200'}}},
];
option = {  
        title : {  
            text: '',   
            x:'left',
        },  
        tooltip : {  
            trigger: 'item',  
            formatter: "{b} : {c} "  // "{a} <br/>{b} : {c} "  
        },  
        legend: {  
            x : '1%',
            y: '90%',
            formatter: '{name}', 
        },
        calculable : true,  
        series : [  
        {
            name:'进度占比',  
            type:'pie',  
            radius : '70%',//饼图的半径大小  
            center: ['50%', '40%'],//饼图的位置 
            label:{            //饼图图形上的文本标签
                    normal:{
                        show:true,
                        position:'inner', //标签的位置
                        formatter:'{d}%'
                    }
                },
            data: dataArr,
            itemStyle: {
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }  
    ]  
};