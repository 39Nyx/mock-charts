var center = {};
var option = null,
    vmax = 1000,
    vmin = 0;
var data1 = [
    { name: '三界镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '下王镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '北漳镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '金庭镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '黄泽镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '三江街道', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '浦口街道', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '剡湖街道', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '仙岩镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '鹿山街道', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '崇仁镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '谷来镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '竹溪乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '雅璜乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '王院乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '石璜镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '通源乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '长乐镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '里南乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '贵门乡', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '甘霖镇', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
    { name: '嵊州经济开发区', value: Math.floor(Math.random() * (vmax - vmin)) + vmin },
];
/*var data2 = [
    { name: '三界镇', value: [120.8411121368, 29.7611045837,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '下王镇', value: [120.92671278, 29.70698739,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '北漳镇', value: [121.04381018, 29.59145681,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '金庭镇', value: [121.03144884, 29.57186647,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '黄泽镇', value: [120.93033665, 29.57728287,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '三江街道', value: [120.82531008, 29.56442083,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '浦口街道', value: [120.85544231, 29.63309728,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '剡湖街道', value: [120.82823427, 29.59762028,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '仙岩镇', value: [120.81369307, 29.67454012,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '鹿山街道', value: [120.80828085, 29.58615358,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '崇仁镇', value: [120.70380833, 29.60602308,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '谷来镇', value: [120.63973026, 29.69042669,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '竹溪乡', value: [120.52562135, 29.65240302,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '雅璜乡', value: [120.54556245, 29.59587170,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '王院乡', value: [120.60292074, 29.63322021,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '石璜镇', value: [120.64942263, 29.54110661,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '通源乡', value: [120.56453254, 29.56053790,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '长乐镇', value: [120.60966513, 29.46401082,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '里南乡', value: [120.68842931, 29.44709833,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '贵门乡', value: [120.60442981, 29.40474694,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '甘霖镇', value: [120.72132730, 29.52748087,Math.floor(Math.random() * (vmax - vmin)) + vmin]},
    { name: '嵊州经济开发区',value: [120.83609115, 29.59439047,Math.floor(Math.random() * (vmax - vmin)) + vmin]}
];*/

echarts.registerMap('js1', json);
option = {
    visualMap: {
        show: false,
        min: vmin,
        max: vmax,
        inRange: {
            color: ['#afb4db', '#6950a1'],
        },
    },
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: '1',
        borderColor: 'rgba(255,255,255,0.3)',
        formatter: '{b0}: {c0}', //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）
        textStyle: { fontSize: '100%', color: '#fff', fontSize: 12, fontFamily: 'Arial' },
        show: true,
    },
    /*geo: {
          map: 'js1',
          zoom: 1.1,
          roam: false,
        },*/
    title: {
        show: true,
        x: 'center',
        y: 'top',
        text: '嵊州市行政区域图',
        textStyle: {
            color: '#2980b9',
            fontSize: 18,
        },
    },

    series: [
        {
            type: 'map',
            map: 'js1', // echarts.registerMap('js1', json);也可以用mapType取代map
            zoom: 1.1, // 默认显示级别
            layoutCenter: ['50%', '50%'], // 定义地图中心在屏幕中的位置
            layoutSize: '75%', // 相对于屏幕宽高的百分比
            data: data1,
            roam: 'scale', // 缩放'scale'或者平移'move'
            //aspectScale: 1,                 // scale 地图的长宽比
            itemStyle: {
                normal: {
                    // 静态的时候展示样式
                    areaColor: '#013C62',
                    shadowColor: '#013C62',
                    shadowBlur: 20,
                    shadowOffsetX: -5,
                    shadowOffsetY: 15,
                },
                emphasis: {
                    areaColor: "#f58220"    //选中区域的背景色
                    // 纹理填充
                    /*areaColor: {
                        image:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                        repeat: 'repeat', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                    },*/
                },
            },
            label: {
                normal: {
                    //静态的时候展示样式
                    show: true, //是否显示地图省份得名称
                    formatter: '{c0}\n{b0}',
                    textStyle: {
                        color: '#fff', // 区域文字 颜色
                        fontSize: 11,
                        fontFamily: 'Arial',
                    },
                },
                emphasis: {
                    //动态展示的样式
                    color: '#fff', //选中区域的字体颜色
                    show: true,
                },
            },

            // 选中状态下的多边形和标签样式
            select: {
                itemStyle: {
                    areaColor: "#f58220"    //选中区域的背景色
                    /*areaColor: {
                        image:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=', // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                        repeat: 'repeat', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
                    },*/
                },
                label: {
                    show: true,
                    color: '#fff',
                },
            },
        },
        /*{
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
              //坐标点动画
              period: 1,
              scale: 6,
              brushType: "fill",
            },
            label: {
              normal: {
                show: false,
                position: "right",
                formatter: "{a}",
                color: "#b3e2f2",
                fontWeight: "400",
                fontSize: 12,
              },
            },

            data: data2,
            itemStyle: {
              //坐标点颜色
              normal: {
                show: false,
                color: "#ff3f3a",
                shadowBlur: 20,
                shadowColor: "#fff",
              },
              emphasis: {
                areaColor: "#f00",
              },
            },
          },
        {
            name: "lable",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [35, 30],
            hoverAnimation: true,
            zlevel: 2,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  lineHeight: 15,
                },
                formatter(params) {
                  return params.data.value[2];
                },
              },
            },

            itemStyle: {
              normal: {
                color: "#6495ED", //标志颜色
                opacity: 0.8,
                borderColor: "#aee9fb",
                borderWidth: 0.6,
              },
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            data: data2,
          },*/
    ],
};
myChart.setOption(option);