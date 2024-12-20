app.title = '环形图';

option = {
    backgroundColor : 'black',
    series: [
        {
            type:'pie',
            center:['10%','10%'],
            radius: ['10%', '15%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data:[
                {value:310, name:'53%',itemStyle:{normal:{color:"#BEBEBE"}}},
              	{value:335, name:'红色',itemStyle:{normal:{color:'#FF4040'}}},
            ]
        },
        {
            type:'pie',
            center:['30%','10%'],
            radius: ['10%', '15%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data:[
                {value:310, name:'56%',itemStyle:{normal:{color:"#BEBEBE"}}},
              	{value:335, name:'蓝色',itemStyle:{normal:{color:'#000080'}}},
            ]
        },
        {
            type:'pie',
            center:['50%','10%'],
            radius: ['10%', '15%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data:[
                {value:7, name:'30%',itemStyle:{normal:{color:"#BEBEBE"}}},
              	{value:3, name:'怪紫',itemStyle:{normal:{color:'#9932CC'}}},
            ]
        }
    ]
};
