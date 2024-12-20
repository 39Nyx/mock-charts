
var seriesData = [20, 30, 15, 23, 30, 15, 23, 30, 15, 23.2, 15, 23];
var colorList = [];
var date = new Date();
var month=date.getMonth()+1;
for(var i = 1 ; i <= 12 ; i++){
    if(i < month){
        colorList.push('#5490CB');
    }else if(i == month){
        colorList.push('#0059B2');
    }else{
        colorList.push('#ccc');
    }
}
option = {
    color: ['#5490CB','#CCCCCC'],
    tooltip : {
        trigger: 'item',
       formatter: '数量:{c0}',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor:'#458CDC',
        borderWidth: 1,
        borderRadius:0,
        textStyle:{
            color:'#333',
        },
        triggerOn:'mousemove',
        enterable :true,
         position: function(point, params, dom, rect, size){
        //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
        var x = point[0];//
        var y = point[1];
        var viewWidth = size.viewSize[0];
        var viewHeight = size.viewSize[1];
        var boxWidth = size.contentSize[0];
        var boxHeight = size.contentSize[1];
        var posX = 0;//x坐标位置
        var posY = 0;//y坐标位置
        
        if(x<boxWidth){//左边放不开
            posX = 5;    
        }else{//左边放的下
            posX = x-boxWidth; 
        }
        
        if(y<boxHeight){//上边放不开
            posY = 5; 
        }else{//上边放得下
            posY = y-boxHeight;
        }
        
        return [posX,posY];
 
 }



  
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name: '数量',
            type : 'value',
            splitLine: {
            }
        }
    ],
    series: [{
        type: 'bar',
        data: [20, 30, 15, 23, 30, 15, 23, 30, 15, 23.2, 15, 23],
        barWidth: '20%',
        barGap:'200%',
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        barMaxWidth: '40px',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        }
    }],
};

myChart.on('click',function(params){
    var index = params.dataIndex;

    for(var i = 0 ; i < seriesData.length ; i++){
        if(seriesData[i].value){
                seriesData[i] = seriesData[i].value;
            }
        if(index == i){
            seriesData[i] = {
                value : seriesData[i],
                itemStyle:{
                    normal:{
                        color : '#0059B2'
                    }
                }
            }
        }else{
            var date = new Date();
            var month=date.getMonth();
            if(i <= month){
                seriesData[i] = {
                    value : seriesData[i],
                    itemStyle:{
                        normal:{
                            color : '#5490CB'
                        }
                    }
                }
            }else{
                seriesData[i] = {
                    value : seriesData[i],
                    itemStyle:{
                        normal:{
                            color : '#CCC'
                        }
                    }
                }
            }
        }
    }
    option.series[0].data=seriesData
    myChart.setOption(option,true);

})