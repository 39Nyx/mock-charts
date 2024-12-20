option = {
    backgroundColor:'#ffffff',//设置背景色
    title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    //提示框组件
    //当trigger为’item’时只会显示该点的数据，
    //为’axis’时显示该列下所有坐标轴所对应的数据。
    tooltip : {
        //？触发类型item/axis
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    
    
       visualMap: {//用visualMap组件将数值的大小映射到明暗度
            show:false,//不显示组件，只用于明暗度映射
            min:0,//映射的最小值为80
            max:0,//映射的最大值为600
            inRange: {
              colorLightness: [0,1]//明暗度范围是0到1
            }
          },
    
    
    
    
    //图例组件      
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    //
    //工具栏组件，右上角工具
    toolbox: {
        show : true,  //是否显示工具箱
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},  //数据预览  
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},  //复原  
            saveAsImage : {show: true}  //是否保存图片  
        }
    },
    calculable : true,  //折线图、柱状图是否叠加
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',   //半径模式
            //？label与lableline的区别
            label: {
                normal: {
                    show: false   //不展示线
                },
                emphasis: {
                    show: true    //移上去展示线
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',  //面积模式
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
};
