option = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    series : [
        {
            type: 'pie',
            radius : ['40%','50%'],
            center: ['50%', '50%'],
            color:['#c245f6','#7f53f2','#5098f0','#58ffc5','#0000ff'],
            data:[
                {
                    value:335, 
                    name:'大众'
                },
                {value:310, name:'奥迪'},
                {value:234, name:'宝马'},
                {value:135, name:'保时捷'},
                {value:1548, name:'奔驰'}
            ],
            labelLine:{
                normal:{
                    show:true,
                    length:20,
                    length2:20,
                    lineStyle:{
                        color:'#4681ec',
                        width:2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}:}{c|{c}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 20,
                            color:'#73bfff',
                            align:'left',
                            padding:4
                        },
                        hr: {
                            borderColor: '#4681ec',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d:{
                            fontSize: 20,
                            color:'#fff',
                            align:'left',
                            padding:4
                        },
                        c:{
                          fontSize: 20,
                          color:'#73bfff',
                          align:'left',
                          padding:4
                        }
                    }
                }
            }
        }
    ]
};
