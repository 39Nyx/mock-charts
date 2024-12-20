var uploadedDataURL = "/asset/get/s/data-1622001189102-LtKymh0I0.json";
$.get(uploadedDataURL,function(geoJSON){
  echarts.registerMap("china", getJSON)
 option = {
        selectedMode: "multiple", // 选中效果
        tooltip: {
          // 提示框
          show: true,
          trigger: "item",
          formatter: function (params) {
            return params.name;
          },
        },
        geo3D:{
          map: 'china',
          show:false,
        },
        series: [
          {
            name: "map3D",
            type: "map3D", // map3D / map
            map: 'china',
            zlevel:2,
            boxWidth: 75,
            regionHeight: 5,
            itemStyle: {
              // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
              areaColor: "#0B1D36", // 地图板块的颜色
              opacity: 0.5, // 图形的不透明度 [ default: 1 ]
              borderWidth: 1, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
              borderColor: "#0384DD", // 图形描边的颜色。
            },
             light:{
               ambient:{
                 color: '#92E6FF',
                //  intensity:1,
               },
               main:{
                 color: '#92E6FF',
                 shadow:true,
                 alpha: 50,
                 beta:40
               }
             },
            viewControl: {
              projection: "orthographic",
              alpha: 70,
            },
            emphasis: {
              label: {
                show: false,
              },
              itemStyle: {
                areaColor: "#C2C04D",
                opacity: 0.3,
                borderWidth: 1,
                borderColor: "#C2C04D", // 图形描边的颜色。
              },
            },
            data: [],
          },
        ],
      };
      
})

      