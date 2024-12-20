    var butterfly = "images/data-1513361750858-Bk1w-5-ff.png";
    var w = 500;
    var h = w / 500 * 400;
    var minsize = w / 500 * 16;
    var maxsize = w / 500 * 70;
    //马卡龙配色
    var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050'
    ];
    var data = redata.data;
    var maskImage = new Image();
    var option = {
        title: {
            text: "标签",
            textStyle: {
                fontSize: 25
            }
        },
        series: [{
            type: 'wordCloud',
            width: w,
            height: h,
            sizeRange: [minsize, maxsize],
            rotationRange: [0, 45, 90, -45],
            rotationStep: 45,
            gridSize: 10,
            shape: 'pentagon',
            maskImage: maskImage,
            textStyle: {
                normal: {
                    color: function(v) {
                        if (v.value > 60) {
                            //alert(v.value)
                            return colorList[0];
                        } else if (v.value > 40) {
                            return colorList[1];
                        } else if (v.value > 30) {
                            return colorList[2];
                        } else if (v.value > 20) {
                            return colorList[3];
                        } else if (v.value > 10) {
                            return colorList[4];
                        } else if (v.value > 50) {
                            return colorList[5];
                        } else {
                            return '#7c4dff';
                        }
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: data
        }],
        graphic: {
            elements: [{
                type: 'image'
            }]
        }
    };
    maskImage.onload = function() {
        // option.series[0].maskImage
        myChart.setOption(option);
    };
    maskImage.src = butterfly;
    myChart.on('click', function(params) {
        location.href = 'tag.html?id=' + params.data.id + '&tag=' + escape(params.data.name)
    });