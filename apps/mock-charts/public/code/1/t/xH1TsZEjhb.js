//////////////////////////////////////////////////////
function support_webgl() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
    return true;
}
// alert(support_webgl());
/////////////////////////////////////////////////
// var n = 1000,
//     nodes = d3.range(n).map(function(i) {
//         return {
//             name: 'p' + i,
//             index: i,
//             x:i,y:i
//         };
//     }),
//     links = d3.range(n).map(function(i) {
//         return {
//             source: i,
//             target: (i + 3) % n
//         };
//     });
// var simulation = d3.forceSimulation(nodes)
//     .force("charge", d3.forceManyBody().strength(-80))
//     .force("link", d3.forceLink(links).distance(20).strength(1).iterations(10))
//     .force("x", d3.forceX())
//     .force("y", d3.forceY());
///////////////////////////////////////////////
var n = 20;

var nodes = d3.range(n * n).map(function(i) {
  return {
    index: i
  };
});

var links = [];

for (var y = 0; y < n; ++y) {
  for (var x = 0; x < n; ++x) {
    if (y > 0) links.push({source: (y - 1) * n + x, target: y * n + x});
    if (x > 0) links.push({source: y * n + (x - 1), target: y * n + x});
  }
}
// simulation.alphaDecay(0.01);
var simulation = d3.forceSimulation(nodes).stop()
    .force("charge", d3.forceManyBody().strength(-30))
    .force("link", d3.forceLink(links).strength(1).distance(20).iterations(10));
var percent = 0;

function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: '#f2c967',
                shadowBlur: 10,
                shadowColor: '#f2c967'
            }
        }
    }, {
        value: 1 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}
var ri = 0,
    rn = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
fallBlockT = function() {
    if(ri==rn){
        return ;
    }
    ri++;
    simulation.tick();
    percent = (ri+0.0)/rn;
    ticked();
    setTimeout(fallBlockT);
};
var pp = 10;
var ii = 0;

function ticked() {
    var opt2 = {
        series: [{
            data: nodes
        }, {}, {
            data: getData()
        }]
    };
    myChart.setOption(opt2);
    if (ii < pp) {
        if(ii==8){
            // alert(nodes[0].x);
        }
        ii++;
    }
}
//////////////////////////////////////////////////////////
// var dt=new Date();
// for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
//     simulation.tick();
// }
// alert("time:"+((new Date()).getTime()-dt.getTime()));
// for (var i = 0; i < nodes.length; i++) {
//     var nd = nodes[i];
//     alert("x:" + nd.x + "\ny:" + nd.y);
// }
var links2 = [];
for (var i = 0; i < links.length; i++) {
    links2.push({
        source: links[i].source.index,
        target: links[i].target.index
    });
}
var option = {
    tooltip: {
        show: false
    },
    animation: false,
    series: [{
        type: 'graph',
        symbolSize: 10,
        layout:'none',
        roam: true, //禁止用鼠标滚轮缩小放大效果
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        // 连接线上的文字
        edgeLabel: {
            normal: {
                show: false,
                textStyle: {
                    fontSize: 20
                }
            }
        },
        lineStyle: {
            normal: {
                opacity: 1,
                width: 2,
                curveness: 0.1
            }
        },
        // 圆圈内的文字
        label: {
            normal: {
                show: false
            }
        },
        data: nodes,
        // links: [],
        links: links2
    }, {
        type: 'pie',
        radius: ['28%', '33%'],
        silent: true,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#3da1ee',
                    shadowBlur: 2,
                    shadowColor: '#3da1ee'
                }
            }
        }]
    }, {
        name: 'main',
        type: 'pie',
        radius: ['35%', '42%'],
        label: {
            normal: {
                show: false
            }
        },
        data: getData()
    }]
};
myChart.setOption(option);
fallBlockT();