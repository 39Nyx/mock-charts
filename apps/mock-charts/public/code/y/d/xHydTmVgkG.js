 var giftImageUrl = "data:image/png;base64,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";

 //label样式
 var labelStyle = {
     show: true,
     //  fontSize: 12,
     position: 'inside',
     backgroundColor: 'pink',
     formatter: function(params) {
          if (params.data.name.length < 10) { 
              return '{popup|' + params.data.name + '}' 
         }else if(params.data.name.length >= 10 && params.data.name.length <13){
               return '{popupMid|' + params.data.name + '}'
         }else {
             return [
                 '{popupbr|' + params.data.name.slice(0, 10) + '}',
                 '{popupbr|' + params.data.name.slice(10) + '}'
             ].join('\n')
         }
     },
     rich: {
         popup: {
             align: 'center',
             color: 'yellow',
             backgroundColor: 'blue',
             borderColor: 'green',
             width: 160,
            // lineHeight:60,
             height: 60, //文字块的 width 和 height 指定的是内容高宽，不包含 padding。
             fontSize: 18,
              padding:5,
            //  borderWidth: 2
         },
         popupMid: {
             align: 'center',
             color: 'yellow',
             backgroundColor: 'blue',
             borderColor: 'green',
             width: 160,
            // lineHeight:60,
             height: 60, //文字块的 width 和 height 指定的是内容高宽，不包含 padding。
             fontSize: 14,
              padding:5,
            //  borderWidth: 2
         },
         popupbr: {
             align: 'center',
             color: '#fff',
             backgroundColor: 'blue',
             width: 160, 
             lineHeight:30,
             height:30,
             fontSize: 14,
             padding:5,
            //  borderWidth: 2
         }
     },
 }
 //  数据
 var nodes = [{
    //   name: '节点1',
     name: '溧阳市水利（水务）局水务局',
    // draggable: true, // 是否可以拖拽，默认false
     //category: 0, // 这是种类
     //number: 10, // 这是编号 非必须，目的仅为方便编写line
     // value: 450, //图形大小
    // showNum: 25, //节点需要显示的额外内容
     x: 10,
     y: 250,
      heigth:100,
     label: {
         show: true,
         normal: labelStyle
     },

 }, {
     name: '溧阳市水利（水务）局',
     x: 200,
     y: 250,
     label: {
         show: true,
         normal: labelStyle

     },
 }, {
     name: '成员单位管理组',
     x: 300,
     y: 350,
      label: {
         show: true,
         normal: labelStyle

     },
 }, {
     name: '节点2-1',
     x: 400,
     y: 350
 }, {
     name: '节点3',
     x: 450,
     y: 300,
     symbolSize: 20,
     label: {
         show: true,
         normal: {
             show: false,
         }
     },
 }];
 // 节点连接
 var sources = [{
     source: '节点1',
     target: '节点1-2',
 }, {
     source: '节点2',
     target: '节点2-1',
 }, {
     source: '节点1-2',
     target: '节点2',
 }, {
     source: '节点2-1',
     target: '节点3',
 }]
 option = {
     series: [{
         name: 'linksData',
         type: 'graph',
         //图的布局;
         //'force' 采用力引导布局;'circular' 采用环形布局;'none' 不采用任何布局
         // layout: 'circular',
         zlevel: 3,
         //关系图节点标记的图形
         //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
         symbol: 'rect',
         silent: false,
         //  symbolSize: function(size) {     return size; },
         symbolSize: 0.1,
         //边两端的标记类型
         edgeSymbol: ['image://' + giftImageUrl, 'arrow'],
         edgeSymbolSize: [30, 0],

         //focusNodeAdjacency: true,
         //roam: true,
         right: 100,
         left: 100,
         //关系边的公用线条样式
         lineStyle: {
             normal: {
                 width: 2,
                 opacity: 0.3,
                 color: 'pink',
                 curveness: 0.3, //边的曲度，支持从 0 到 1 的值，值越大曲度越大。

             }
         },
         data: nodes,
         links: sources,
     }]
 };