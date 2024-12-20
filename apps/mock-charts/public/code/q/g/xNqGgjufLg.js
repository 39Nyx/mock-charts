// 水球图学习 from Ovilia 1024
//基本显示 修改样式 文字大小 颜色调整

var option = {
    backgroundColor:'white',
    series: [{
        color:['#e62739','#f94032','#ED5314'],
        type: 'liquidFill',
        name: '1024',
        radius:'60%',
        shape:"path://M18.98 5.7c-.24-2.36-2.24-4.2-4.66-4.2-1.95 0-3.6 1.18-4.32 2.87-.7-1.7-2.37-2.87-4.32-2.87-2.42 0-4.42 1.84-4.66 4.2L1 6.18c0 5.7 6.98 8.38 9 12.17 2.02-3.8 9-6.48 9-12.17 0-.16 0-.32-.02-.48z",
        data: [{'name':'Frist','value':'0.7'},0.5,0.3],  //datat
        
        outline: {
            show: false,
            },  
        backgroundStyle: {
            borderColor: '#ff432e',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20,
            color:'#ffb5ba'
        },
        
        label:{

            normal:{
                position:['50%','20%'],
                formatter:  '{a}\n节日快乐',
                textStyle:{
                    fontSize:20,
                    
                }
            }
        }
    }]
};
