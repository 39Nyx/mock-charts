var dataStyle = { 
    normal: {
        label: {show:false},
        labelLine: {show:false},
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};

option = {
    backgroundColor: '#000',
    color: ['yellow','green','red'],
    tooltip : {
        show:false,
    },
    series : [
        {
            name:'Line 1',
            type:'pie',
            // clockWise:false,
            radius : [140,160],
            itemStyle : dataStyle,
            hoverAnimation: false,
            data:[
                {
                    value:300,
                    name:'01',
                    tooltip:{
                        show:true
                    }
                },
                {
                    value:200,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:100,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
         
            ]
        }, 
        {
            name:'Line 2',
            type:'pie',
            // clockWise:false,
            radius : [150, 170],
            itemStyle : dataStyle,
            hoverAnimation: false,
           
            data:[
                {
                    value:300,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:200, 
                    name:'02',
                    tooltip:{
                        show:true
                    }
                },
                {
                    value:100,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 3',
            type:'pie',
            // clockWise:false,
            hoverAnimation: false,
            radius : [160, 180],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:300,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:200,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                },
                {
                    value:100, 
                    name:'03',
                    tooltip:{
                        show:true
                    }
                },
            ]
        },
    ]
};