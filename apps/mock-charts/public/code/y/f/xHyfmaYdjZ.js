var color = ['black','rgba(198, 89, 17,0.5)','rgba(255, 242, 204, 0.51)',  'rgba(155, 194, 230,0.51)','rgba(255, 0, 0,10)','rgba(84, 130, 93,0.7)'];
option = {

    title: {
        text: '三类分公司各级督办工单数量',
       textStyle: {
        fontSize: 35,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            
            saveAsImage: {}
        }
    },
    legend: {
         left: '50%',
         data: ['密云','怀柔','平谷','延庆'],
        textStyle: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    series: [
        {
            name: '密云',
            type: 'funnel',
            left: '1%',
            width: '80%',
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                  
                     borderColor: 'black',
                   color:color[1],
                    borderWidth: 2
                   
                }
            },
            data: [
               {value: 384, name: '一级督办'},	{value: 214, name: '二级督办'},	{value: 107, name: '三级督办'},	{value: 74, name: '四级督办'},	{value: 0, name: '五级督办'},		

            ]
        },
        {
            name: '怀柔',
            type: 'funnel',
            left: '1%',
            width: '80%',
            label: {
            
                normal: {
                     padding: [3, 4, 1, 6],
                    formatter: '{b}数量',
                    color:color[0],
                    textStyle: {
         fontSize:22,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
                },
               
            },
            
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[2],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
              {value: 186, name: '一级督办'},	{value: 166, name: '二级督办'},	{value: 123, name: '三级督办'},	{value: 117, name: '四级督办'},	{value: 3, name: '五级督办'},		

            ]
        },
        {
            name: '平谷',
            type: 'funnel',
            left: '1%',
            width: '80%',
           
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[3],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
             {value: 229, name: '一级督办'},	{value: 117, name: '二级督办'},	{value: 73, name: '三级督办'},	{value: 59, name: '四级督办'},	{value: 2, name: '五级督办'},		


            ]
        },
        {
            name: '延庆',
            type: 'funnel',
            left: '1%',
            width: '80%',
           
           label: {
                normal: {
                    opacity: 1,
                    formatter: ''
                },
                
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color:color[4],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
             {value: 108, name: '一级督办'},	{value: 45, name: '二级督办'},	{value: 11, name: '三级督办'},	{value: 1, name: '四级督办'},	{value: 0, name: '五级督办'},		


            ]
        }
    ]
};
