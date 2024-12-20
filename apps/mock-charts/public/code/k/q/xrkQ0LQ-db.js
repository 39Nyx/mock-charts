var labeltextSize = { normal:{ textStyle:{ fontSize:14 } } };
var labellineStyle = { normal:{ lineStyle:{color:'#fff'} } };
var labeltextStyle =  {normal:{ position: 'outside', formatter: '{c}%', textStyle: { color: '#ffffff', fontSize: 14 }}};
var nonelabel = { normal:{ show:false}};
var nonelabelColor = { normal:{ color:'transparent'}};
var itemStyle = {normal: {color: '#F7F88B'},emphasis: {shadowBlur: 10,shadowOffsetX: 0,shadowColor: 'rgba(0, 0, 0, 0.5)'}};
option = {
    tooltip : {
        show:false
    },
    grid: [
        {x: '0',y: '35%', width: '100%', height: '30%'},
    ],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel:{
            margin:50,
            textStyle:{
                fontSize:"22",
                color:"#333",
                baseline:'top'
            }
        },
        data: ['禅城区','南海区','顺德区','高明区','三水区']}
    ],
    yAxis: [
        {gridIndex: 0,name:'年级',show:false
        },
    ],
    series : [
        {
            name: '',
            type: 'pie',
            radius : '22%',
            hoverAnimation:'false',
            stillShowZeroSum:'false',
            startAngle:80,
            center: ['10%', '41%'],
            data:[
                {
                    value:19.51, 
                    name:'', 
                    selected:true,
                    label:labeltextSize,
                    labelLine:labellineStyle
                },
                {
                    value:(100-19.51), 
                    name:'',
                    label:nonelabel,
                    labelLine:nonelabel,
                    itemStyle:nonelabelColor
                }
            ],
            z:2,
            label:labeltextStyle,
            itemStyle: itemStyle
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            hoverAnimation:'false',
            stillShowZeroSum:'false',
            startAngle:340,
            center: ['30%', '41%'],
            data:[
                {
                    value:34.85, 
                    name:'', 
                    selected:true,
                    label:labeltextSize,
                    labelLine:labellineStyle
                },
                {
                    value:(100-34.85), 
                    name:'',
                    label:nonelabel,
                    labelLine:nonelabel,
                    itemStyle:nonelabelColor
                }
            ],
            z:2,
            label:labeltextStyle,
            itemStyle: itemStyle
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            hoverAnimation:'false',
            stillShowZeroSum:'false',
            startAngle:180,
            center: ['50%', '41%'],
            data:[
                {
                    value:32.87, 
                    name:'', 
                    selected:true,
                    label:labeltextSize,
                    labelLine:labellineStyle
                },
                {
                    value:67.13, 
                    name:'',
                    label:nonelabel,
                    labelLine:nonelabel,
                    itemStyle:nonelabelColor
                }
            ],
            z:2,
            label:labeltextStyle,
            itemStyle: itemStyle
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            hoverAnimation:'false',
            stillShowZeroSum:'false',
            startAngle:240,
            center: ['70%', '41%'],
            data:[
                {
                    value:4.03, 
                    name:'', 
                    selected:true,
                    label:labeltextSize,
                    labelLine:labellineStyle
                },
                {
                    value:95.97, 
                    name:'',
                    label:nonelabel,
                    labelLine:nonelabel,
                    itemStyle:nonelabelColor
                }
            ],
            z:2,
            label:labeltextStyle,
            itemStyle: itemStyle
        },
        {
            name: '',
            type: 'pie',
            radius : '22%',
            hoverAnimation:'false',
            stillShowZeroSum:'false',
            startAngle:90,
            center: ['90%', '41%'],
            data:[
                {
                    value:5.51, 
                    name:'', 
                    selected:true,
                    label:labeltextSize,
                    labelLine:labellineStyle
                },
                {
                    value:93.48, 
                    name:'',
                    label:nonelabel,
                    labelLine:nonelabel,
                    itemStyle:nonelabelColor
                }
            ],
            z:2,
            label:labeltextStyle,
            itemStyle: itemStyle
        }
    ]
}; 
var pieA = {
    name: '',
    type: 'pie',
    radius : '21.5%',
    center: ['12%', '40%'],
    data:[
        {
            value:100, 
            selected:true,
            label:{
                normal:{
                    show:false
                }
            },
            labelLine:{
                normal:{
                    show:false
                }
            }
        }
    ],
    animation:false,
    labelLine:{
        normal:{
            show:false
        }
    },
    label: {
        normal: {
            position: 'outside',
            formatter: '{c}%',
            textStyle: {
                color: '#ffffff',
                fontSize: 22
            }
        },
        emphasis:{
            show:false
        }
    },
            silent:true,
    itemStyle: {
        normal:{
            color:'#038D98'
        }
    }
};
var pieB = {
    name: '',
    type: 'pie',
    radius : '20%',
    center: ['12%', '40%'],
    data:[
        {
            value:100, 
            name:'', 
            selected:true,
            label:{
                normal:{
                    show:false
                }
            },
            labelLine:{
                normal:{
                    show:false
                }
            }
        }
    ],
    animation:false,
            silent:true,
    label: {
        normal: {
            position: 'outside',
            formatter: '{c}%',
             textStyle: {
                color: '#ffffff',
                fontSize: 22
            }
        },
        emphasis:{
            show:false
        }
    },
    itemStyle: {
        normal:{
            color:'#07A5FB'
        }
    }
}

var arr = [];
var arrb = [];
let defaultLeft = 110;
for(let i = 0;i<5;i++) {
	arr.push(JSON.parse(JSON.stringify(pieA)));
	arrb.push(JSON.parse(JSON.stringify(pieB)));
	defaultLeft -= 20;
	arr[i].center[0] = defaultLeft+'%';
	arrb[i].center[0] = defaultLeft+'%';
}
for(var i = 0;i<arr.length;i++){
	option.series.unshift(arrb[i]);
	option.series.unshift(arr[i]);
}