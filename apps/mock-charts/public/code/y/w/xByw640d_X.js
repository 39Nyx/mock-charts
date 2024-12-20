var size = 60;
var size1 = 30;
var yy = 200;
var yy1 = 250;

var listdata = [];
var links = [];

//著需要设定一下四个参数
//设定药品名称
var med = "medicine";
//设定传入的疾病
var dieases =["die1","die2","die3"];

function setData(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        listdata.push({
            x: size + i * 50,
            y: size + i * 10,
            "name": arr[i],
            "symbolSize": size,
            "category": n,
            "draggable": "true"
        })
    }
}
function setData2(arr,n){
    for (var i = 0; i < arr.length; i++) {
        listdata.push({
            x: 0,
            y: 0,
            "name": arr[i],
            "symbolSize": size,
            "category": n,
            "draggable": "true"
        })
    }
}
function setLinkData(arr, title) {
    for (var i = 0; i < arr.length; i++) {
        links.push({
            "source": arr[i],
            "target": title,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        })
    }
}

var texts = [];
texts.push({"name":med});
for (var i = 0; i < dieases.length; i++) {
    texts.push({
        "name": dieases[i],
    })
}

var cat4 = [];
cat4.push(med);

setData2(cat4, 0);
setData(dieases,1);

setLinkData(dieases, cat4[0]);

option = {
    title: {
        text: "疾病知识图谱",
        top: "top",
        left: "left",
        textStyle: {
            color: '#f7f7f7'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#00000',
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识图谱',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 60,
            gravity: 0.1,
            edgeLength: 15,
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 16,
                fontStyle: '600',
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1.5,
                curveness: 0
            }
        }
    }]
};
