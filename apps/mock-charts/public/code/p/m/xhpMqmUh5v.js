let innerFontColor = '#FFFFFF';
let outerFontColor = '#666666';

let innerColor = ['#2872c7', '#42a9e3', '#2cbdb8', '#8cca43', '#cda949', '#c96d3c'];

let outColor = ['#3e8be3', '#2db1c6', '#19a08f', '#eee'];
//'#3e8be3',
let scale = 1;
let echartData = {
    inner: [{
            value: 700,
            unit: '个',
            name: '行业大类1'
        },
        {
            value: 679,
            unit: '个',
            name: '行业大类2'
        },
        {
            value: 1548,
            unit: '个',
            name: '行业大类3'
        }
    ],
    outer: [
        {
            value: 335,
            unit: '个',
            name: '新疆联通'
        },
        {
            value: 548,
            unit: '个',
            name: 'CDN'
        },
        {
            value: 0,
            unit: '个',
            name: 'Cache'
        },
        {
            value: 0,
            unit: '个',
            name: 'idc'
        }
    ]
}

let legend1 = echartData.inner.map(v => v.name);
let legend2 = echartData.outer.map(v => v.name);
let legendData = [...legend1, ...legend2];

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        position:['50%','50%'],
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            color:innerColor,
            radius: [0, '35%'],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    color: "#fff" ,
                    fontStyle: 'normal' ,
                    fontWeight: 'normal' ,
                    fontFamily: 'sans-serif' ,
                    fontSize: 12 
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            name: '访问来源',
            type: 'pie',
            color:outColor,
            radius: ['45%', '55%'],
            data: echartData.outer,
            labelLine: {
                normal: {
                    // length: 20,
                    // length2: 140,
                    
                }
            },
            label: {
                normal: {
                    formatter: function(params) {

                         var item= params.name + params.percent.toFixed(1) +'%';
                         if (params.name=='新疆联通') {
                            return item 
                         }
                         return item;
                    },
                    show: true,

                }
            },
        }
    ]
};