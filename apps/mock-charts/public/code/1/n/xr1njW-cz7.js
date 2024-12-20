let originData = {
  name1:'张三',
  name2:'张三',
  name3:'李四',
  name4:'王五',
};
let data=[];
for(var p in originData ){
console.log(p);
 data.push({
    name:p,
    showName:originData[p],
    tooltip: {//此处为tootips转换
      show:true,
      formatter:function(params){
        return params.data.showName;
      }
    }
 });
}
console.log(data)
option = {
    title: {
        text: 'Graph重名节点示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            roam: true,
            force: {
						repulsion: 5000
					},
            label: {
                normal: {
                show: true,
                //position: ['50%', '100%'],
                formatter:function(params){
                return params.data.showName; //此处为label转换
                        }
}
},
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: data,
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: 'name1',
                target: 'name3'
            }, {
                source: 'name2',
                target: 'name3'
            }, {
                source: 'name2',
                target: 'name4'
            }, {
                source: 'name1',
                target: 'name4'
            }]
        }
    ]
};