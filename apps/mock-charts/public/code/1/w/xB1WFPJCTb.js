var isper=false;
var xdata=['周一','周二','周三','周四'];
var ydata=['自费1', '医保1','自费2','医保2','医保3'];
var vdata=[ [101, 201, 301, 401],
            [111, 211, 311, 411],
            [102, 202, 302, 402],
            [112, 212, 312, 412],
            [113, 213, 313, 413]];

var category=[ 
    {name:'医保',data:['医保1','医保2', '医保3']}
]
var arr_series=[]
$.each(vdata,function(i,v){
    arr_series.push({
        name:ydata[i],
        type:'bar',
        stack:'all',
        data:v
    })
    
})

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox:{
        feature:{
            myTool2: {
                show: true,
                title: '自定义扩展方法',
                icon: 'image://http://echarts.baidu.com/images/favicon.png',
                onclick: function(obj,e){
                    debugger
                    if(!isper){
                        var newseries=[];
                        var newyd=[];
                        var clone_ydata=$.extend(true,[], ydata);
                        var clone_series=$.extend(true,[], arr_series);
                        //父级分类
                        $.each(category,function(ic,cate){
                            var cvd=[];
                            var delcount=0;
                            newyd.push(cate.name);
                            $.each(ydata,function(iy,v){
    
                                if($.inArray(v,cate.data)!=-1){
                                    //合并
                                    $.each(vdata[iy],function(ind,v){
                                        if(cvd[ind]==null)
                                        {cvd[ind]=0;}
                                        cvd[ind]+=v;
                                    })
                                    
                                    //删除合并的数据
                                    clone_ydata.splice(iy-delcount,1);
                                    clone_series.splice(iy-delcount,1);
                                    delcount++;
                                }
                                
                            })
                            
                            newseries.push({
                                name:cate.name,
                                type:'bar',
                                stack:'all',
                                data:cvd
                            });
                        })
                        //合并array （1.原始分类，2.新的合并分类）
                        newyd=clone_ydata.concat(newyd);
                        newseries=clone_series.concat(newseries);
                        echarts.getInstanceByDom(e.getDom()).setOption({
                            yAxis:{data:newyd},
                            legend:{data:newyd}
                        })
                        var newoption=e.getOption();
                        newoption.series=newseries;
                        echarts.getInstanceByDom(e.getDom()).setOption(newoption,true)
                        
                        isper=!isper;
                    }else{

                        echarts.getInstanceByDom(e.getDom()).setOption({
                            series: arr_series,
                            yAxis:{data:ydata},
                            legend:{data:ydata}
                        })
                        isper=!isper;
                    }
                }
            }


        }
        
    },
    legend: {
        data: ydata
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        data: xdata
        
    },
    yAxis: {
        type: 'value'
    },
    series: arr_series
};