option = {
    title : {
        text: 'Boys and Girls Club of Greater Redlands-Riverside  ',
        subtext: 'Structer of Programs',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : '5%,5%',
        y : '30,30',
        data:['Career Development Programs:1','Academic Success Programs:9','Character &Leadership Programs:6','Health & Life Skills:5','The Arts Programs:4','Sports, Fitness and Recreation:1']
    },
   
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
             restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'Structure of Programs',
            type:'pie',
            radius : '30%',
            center: ['50%', '55%'],
            data:[
                {value:1, name:'Career Development Programs:1'},
                {value:9, name:'Academic Success Programs:9'},
                {value:6, name:'Character &Leadership Programs:6'},
                {value:5, name:'Health & Life Skills:5'},
                {value:4, name:'The Arts Programs:4'},
                {value:1, name:'Sports, Fitness and Recreation:1'}
            ]
        }
    ]
};