demo = [ 
    {value:32, name:'情感励志类'},
    {value:122, name:'科研技术类'},
    {value:92, name:'人物传记类'}
]
options = 
   [
        {
        backgroundColor: '#001121',
        title : {
            text: '本年度阅读书籍类别',
            textStyle:{
                color:"#fff"
            },
            subtext: '2019年'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
    
        },
        
        series: [
            {
                name:'内圈',
                type:'pie',
                hoverAnimation: false,
                legendHoverLink:false,
                radius: ['33%', '34%'],
               // color: ['#7154EB', '#7154EB', '#7154EB'],
                color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                    offset: 0,
                    color: '#1c76ec'
                }, {
                    offset: 1,
                    color: '#63c9f7'
                }]),
                label: {
                    
                    normal: {
                        show:false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                   
                },
                data:getTotal(),
            },
            {
                name:'书籍分类',
                type:'pie',
                radius: ['35%', '45%'],
                color: ['#54B5EB', '#7154EB', '#54EB92'],
              
                label: {
                    normal: {
                        formatter: "{a|{b}}\n{hr|}\n{b|{c}}{c|本}",
    					rich: {
    						a:{
    							color: 'rgba(255, 255, 255, 0.8)',
    							fontSize: 23,
    							padding:10,
    							align:"left"
    						},
    						hr:{
    						    borderColor: '#12EABE',
                                width: '100%',
                                borderWidth: 2,
                                height: 0
    						},
    						b:{
    							color: '#f4b741',
    							fontSize: 28,
    							padding:6,
    							align:"center"
    						},
    						c:{
    							color: '#fff',
    							fontSize: 23,
    							padding:6,
    							align:"center"
    						}
    					}
                    },
              
                },
                data:demo
            }
        ]
}
];

function getTotal(){
    let nu = 0;
    let arr = [];
    demo.map((item,i)=>{
        nu += Number(item.value)
    })
    
    let obj ={ 
            value: nu,
            name:"内圈"
    }
    arr.push(obj)
    return arr
   
}



