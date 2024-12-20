var color = ['black', 'rgba(217, 0, 0,0.5)','rgba(255, 242, 204, 1)', 'rgba(155, 194, 230,0.5)'];
option = {

    

title: {
        text: '网运中心和建设中心各级督办工单数量',
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
       data: ['网运中心','建设中心'],
       textStyle: {
        fontSize: 20,
        fontWeight: 

'bolder',
        color: '#333'          // 主标题文字颜色
    }
    },
    series: [
        {
            name: '网运中心',
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
                    opacity: 0.7,
                     

borderColor: 'black',
                   color:color[1]
                   
                }
            },
            

data: [
             {value: 394, name: '一级督办'},	{value: 388, name: '二级督办'},	{value: 379, name: '三级督办'},	{value: 22, name: '四级督办'},	{value: 0, name: '五级督办'},		

            ]
        },
        {
  

          name: '建设中心',
            type: 'funnel',
            left: '1%',
            width: '80%',
           

label: {
               
                normal: {
                    formatter: '{b}数量',
                    color:color[0],
        padding: [3, 4, 6, 40],

             textStyle: {
        fontSize: 25,
        fontWeight: 'bolder',
        color: '#333'          
    }
                }
                
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
                    borderColor: 

'black',
                    borderWidth: 2
                }
            },
            data: [
             {value: 491, name: '一级督办'},	{value: 462, name: '二级督办'},	{value: 354, name: '三级督办'},	{value: 335, name: '四级督办'},	{value: 5, name: '五级督办'},		

            ]
        },
       
    ]
};
