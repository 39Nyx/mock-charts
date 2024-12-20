var color = ['black','rgba(255, 242, 204, 1)', 'rgba(255, 0, 0,0.5)', 'rgba(155, 194, 230,0.5)'];
option = {

    title: {
        text: '一类分公司各级督办工单数量',
         textStyle: {
        fontSize: 35,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    },
       
        
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
       left: '60%',
       data: ['城一','城二','城三'],
       textStyle: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    series: [
        {
            name: '城一',
            type: 'funnel',
            left: '1%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}数量',
                    color:color[0],
                    textStyle: {
        fontSize: 25,
        fontWeight: 'bolder',
        color: '#333'          // 主标题文字颜色
    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7,
                     borderColor: 'black',
                   color:color[1]
                   
                }
            },
            data: [
               {value: 10612, name: '一级督办'},	{value: 10461, name: '二级督办'},	{value: 9581, name: '三级督办'},	{value: 9113, name: '四级督办'},	{value: 17, name: '五级督办'},		

            ]
        },
        {
            name: '城二',
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
                    color:color[2],
                    opacity: 0.5,
                    borderColor: 'black',
                    borderWidth: 2
                }
            },
            data: [
               {value: 5733, name: '一级督办'},	{value: 5440, name: '二级督办'},	{value: 4101, name: '三级督办'},	{value: 3788, name: '四级督办'},	{value: 25, name: '五级督办'},		

            ]
        },
        {
            name: '城三',
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
              {value: 3880, name: '一级督办'},	{value: 3522, name: '二级督办'},	{value: 2957, name: '三级督办'},	{value: 2726, name: '四级督办'},	{value: 0, name: '五级督办'},		


            ]
        }
    ]
};
