// myChart.showLoading();
var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];

var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];

var series = (new Array(1).fill({
            name:'',
            
            type:'treemap',
          label:{
              formatter: "我aaaaaaaaaaaaaaaaaaaaaaaaa",
              color: 'green',
              backgroundColor:'red',
              lineHeight:9,
              fontSize: 14,
              margin: [0,0,0,0],
              padding:[0,0,0,0],
          },
        width: '10%',
        left: '20%',
        bottom: '0%',
        roam: false,
        height: 19,
            itemStyle: {
             
                normal: {
                    show: false,
                    borderWidth: 0,
                    borderColor: 'transparent',
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                // {
                //     name: '三星',
                //     value: 6,
                // },
            ],
            breadcrumb:{
                show: false
            }
        }) ).map( function(obj ,i) { var obj = Object.assign({},obj); obj.left = (i*10) +'%'; return obj;} );

option = {
    backgroundColor:'transparent',
     xAxis: {
        data: dataAxis
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [{
        type: 'bar',
        data:[10, 52, 200, 334, 390, 330, 220],
    }, ...series],
        
    
    
};
                
       