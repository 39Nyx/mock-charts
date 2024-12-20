        const minLng = 120.9337719797137;
        const minLat = 30.85610622801201;
        const maxLat = 31.452846278953274;
        const maxLng = 121.69631352726838;
        const scale = 400;

        let averageLng = (maxLng - minLng) / 50;
        let averageLat = (maxLat - minLat) / 50;


        var img = new Image();
        img.src = '/asset/get/s/data-1530256582420-BkApn87MX.png'
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        img.onload = function() {
            var width = canvas.width = img.width / 2;
            var height = canvas.height = img.height / 2;
            averageLng = (maxLng - minLng) / width;
            averageLat = (maxLat - minLat) / height;
            ctx.drawImage(img, 0, 0, width, height);
            var imgData = ctx.getImageData(0, 0, width, height);

            var data = [];
            for (var i = 0; i < imgData.data.length / 4; i++) {
                var r = imgData.data[i * 4];
                var g = imgData.data[i * 4 + 1];
                var b = imgData.data[i * 4 + 2];

                var lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b);
                lum = (lum - 125) / 20 + 50;
                data.push([i % width, height - Math.floor(i / width), lum]);
            }
            var bardata = [];
            for (let i = 0; i < data.length; i++) {
                let d = data[i];
                let x = d[0],
                    y = d[1],
                    z = d[2];
                let lng = minLng + averageLng * x;
                let lat = minLat + averageLat * y;
                let height = z * scale;
                bardata.push([lng, lat, height])
            }

            console.log(data)
            initChart(imgData, bardata);
        }


        function initChart(imgData, data) {
            let option = {
                tooltip: {},
                maptalks3D: {
                    center: [121.4693, 31.123070],
                    zoom: 10,
                    pitch: 50,
                    // bearing: -10,
                    postEffect: {
                        enable: true,
                        FXAA: {
                            enable: true
                        }
                    },
                    light: {
                        main: {
                            shadow: true,
                            intensity: 2
                        },
                        ambientCubemap: {
                            texture: '/asset/get/s/data-1530248984324-SyeXJSmM7.hdr',
                            exposure: 2,
                            diffuseIntensity: 0.2,
                            specularIntensity: 1
                        }
                    }
                },
                series: [{
                    type: 'bar3D',
                    shading: 'realistic',
                    coordinateSystem: 'maptalks3D',
                    barSize: 1,
                    wireframe: {
                        show: false
                    },
                    itemStyle: {
                        color: function(params) {
                            var i = params.dataIndex;
                            var r = imgData.data[i * 4];
                            var g = imgData.data[i * 4 + 1];
                            var b = imgData.data[i * 4 + 2];
                            return 'rgb(' + [r, g, b].join(',') + ')';
                        }
                    },
                    data: data
                }]
            }
            myChart.setOption(option)
        }