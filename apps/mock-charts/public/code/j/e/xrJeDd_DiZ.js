document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      var Maps = new HMap('map', {
        controls: {
          loading: true,
          zoomSlider: true,
          fullScreen: false
        },
        view: {
          center: [13442207.605459828, 3600600.2028761804],
          extent: [-2.0037507067161843E7, -3.0240971958386254E7, 2.0037507067161843E7, 3.0240971958386205E7],
          projection: 'EPSG:102100',
          tileSize: 256,
          zoom: 12, // resolution
        },
        baseLayers: [
          {
            layerName: 'vector',
            isDefault: true,
            layerType: 'TileXYZ',
            tileGrid: {
              tileSize: 256,
              extent: [-2.0037507067161843E7, -3.0240971958386254E7, 2.0037507067161843E7, 3.0240971958386205E7],
              origin: [-2.0037508342787E7, 2.0037508342787E7],
              resolutions: [
                156543.03392800014,
                78271.51696399994,
                39135.75848200009,
                19567.87924099992,
                9783.93962049996,
                4891.96981024998,
                2445.98490512499,
                1222.992452562495,
                611.4962262813797,
                305.74811314055756,
                152.87405657041106,
                76.43702828507324,
                38.21851414253662,
                19.10925707126831,
                9.554628535634155,
                4.77731426794937,
                2.388657133974685
              ]
            },
            layerUrl: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
          }
        ]
      });
      // 处理数据
      function convertData (sourceData) {
        return [].concat.apply([], $.map(sourceData, function (busLine, index) {
          var prevPoint = null;
          var points = [];
          var value = busLine.shift();
          for (var i = 0; i < busLine.length; i += 2) {
            var point = [busLine[i], busLine[i + 1]];
            if (i > 0) {
              point = [
                prevPoint[0] + point[0],
                prevPoint[1] + point[1]
              ];
            }
            prevPoint = point;
            points.push([point[0] / 1e5, point[1] / 1e5]);
          }
          return {
            value: value,
            coords: points
          };
        }));
      }
      // 创建图表实例
      var echartslayer = undefined
      if (echartslayer !== undefined) {
        return false
      } else {
        echartslayer = new ol3Echarts(Maps.map, '.ol-overlaycontainer');
      }
      // 配置项
      var option = {
        HMap: {},
        visualMap: {
          type: "piecewise",
          left: 'right',
          top: 'top',
          /*            pieces: [
           {min: 15}, // 不指定 max，表示 max 为无限大（Infinity）。
           {min: 12, max: 15},
           {min: 9, max: 12},
           {min: 6, max: 9},
           {min: 3, max: 6},
           {max: 3}     // 不指定 min，表示 min 为无限大（-Infinity）。
           ],*/
          min: 0,
          max: 15,
          splitNumber: 5,
          maxOpen: true,
          color: ['red', 'yellow', 'green']
        },
        tooltip: {
          formatter: function (params, ticket, callback) {
            return "拥堵指数:" + params.value;
          },
          trigger: 'item'
        },
        series: [
          {
            type: 'lines',
            coordinateSystem: 'HMap',
            polyline: true,
            lineStyle: {
              normal: {
                opacity: 1,
                width: 4
              },
              emphasis: {
                width: 6
              }
            },
            effect: {
              show: true,
              symbolSize: 2,
              color: "white"
            }
          }
        ]
      };
      echartslayer.chart.showLoading()
      $.get('https://www.easy-mock.com/mock/593aabdf8ac26d795fc563b1/echarts/traffic', function (res) {
        if (res && res['success']) {
          echartslayer.chart.hideLoading()
          option.series[0].data = convertData(res['data']);
          echartslayer.chart.setOption(option);
        }
      });
    }
  }