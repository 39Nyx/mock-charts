option = {
    legend: {
        data:['News','Social','Tickets','Vertical','Video']
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Total','Logan','The Lego Batman Movie', 'Beauty and the Beast', 'A Dog’s Purpose', 'Resident Evil: The Final Chapter']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
       
        {
            name:'News',
            type:'bar',
            barWidth:60,
            stack: '1',
            label:{
                normal:{
                    show:true,
                    position:'inside',
                    formatter:function(p){
                        
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                    
                }
            },
            trueData:[3274, 1580, 275,267,653,499],
            data:[10, 10, 10,10,10,10]
        },
        {
            name:'Social',
            type:'bar',
            barWidth:60,
            stack: '1',
            label:{
                normal:{
                    show:true,
                    position:'inside',
                    formatter:function(p){
                        
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                    
                }
            },
            trueData:[40565, 24373, 2642,8980,1838,2732],
            data:[30, 30, 30,30,30,30]
        },
        {
            name:'Tickets',
            type:'bar',
            barWidth:60,
            label:{
                normal:{
                    show:true,
                    position:'inside',
                    formatter:function(p){
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                    
                }
            },
            
            trueData:[6430, 1880, 894,156,2288,1212],
            stack: '1',
            data:[30, 30, 30,30,30,30]
        },
        {
            name:'Vertical',
            type:'bar',
            barWidth:60,
            label:{
                normal:{
                    show:true,
                    position:'inside',
                    formatter:function(p){
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                    
                }
            },
            
            trueData:[17455, 9104, 1437,179,5055,1680],
            stack: '1',
            data:[20, 20, 20,20,20,20]
        },
        {
            name:'Video',
            type:'bar',
            barWidth:60,
            label:{
                normal:{
                    show:true,
                    position:'inside',
                    formatter:function(p){
                        return option.series[p.seriesIndex].trueData[p.dataIndex]/10*10;
                    }
                    
                }
            },
            
            trueData:[4596, 3276, 58,515,293,454],
            stack: '1',
            data:[10, 10, 10,10,10,10]
        }
    ]
};
