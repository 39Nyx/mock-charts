var urls = [
    '/asset/get/s/data-1528099243844-ByEhZOMgX.json',
    '/asset/get/s/data-1528099260361-S1Va-_MeQ.json',
    '/asset/get/s/data-1528099274823-r1Q0bdfgm.json',
    '/asset/get/s/data-1528099287938-Hkx1Guzlm.json',
    '/asset/get/s/data-1528099301932-B1R1zOfxX.json',
    '/asset/get/s/data-1528101820599-ByBpjdfl7.json',
    '/asset/get/s/data-1528101944280-rJeBh_MxQ.json',
    '/asset/get/s/data-1528101954050-ry9Sn_zl7.json',
    '/asset/get/s/data-1528101964787-SySIhuMeX.json',
    '/asset/get/s/data-1528101975345-rkkwn_Mxm.json',
    '/asset/get/s/data-1528101988096-BJ2Pn_GeX.json',
    '/asset/get/s/data-1528102643426-rkieyKGlX.json',
    '/asset/get/s/data-1528102648674-SJ-W1YfeQ.json',
    '/asset/get/s/data-1528102652152-r1N-kKfx7.json',
    '/asset/get/s/data-1528102655390-BkPW1FzlQ.json',
    '/asset/get/s/data-1528102658435-Hkq-ktfxm.json',
    '/asset/get/s/data-1528102661925-B1RZJtfeX.json',
    '/asset/get/s/data-1528102666161-HJfMyFflQ.json',
    '/asset/get/s/data-1528102669885-H1Iz1FzgX.json',
    '/asset/get/s/data-1528102673301-BkYG1Ffg7.json',
    '/asset/get/s/data-1528102677514-Bk6G1KGg7.json',
    '/asset/get/s/data-1528102810109-r1fsJFfgX.json',
    '/asset/get/s/data-1528102818771-r1oikYMgQ.json',
    '/asset/get/s/data-1528102825569-BkznkFMeX.json',
    '/asset/get/s/data-1528102832030-HydhJFfx7.json',
    '/asset/get/s/data-1528102837631-HkRhyKfg7.json',
    '/asset/get/s/data-1528102843760-Hk46JKGxX.json',
    '/asset/get/s/data-1528102850877-Sko6JFGg7.json',
    '/asset/get/s/data-1528102858017-rkG01tzgX.json',
    '/asset/get/s/data-1528102864954-S1K01FGl7.json',
    '/asset/get/s/data-1528102868542-SyTCJYzxm.json',
    '/asset/get/s/data-1528103054785-HJvclFGgQ.json',
    '/asset/get/s/data-1528103063150-SkJigFMeQ.json',
    '/asset/get/s/data-1528103068133-Sk4ieFfe7.json',
    '/asset/get/s/data-1528103072887-rJKsxFGlm.json',
    '/asset/get/s/data-1528103077348-S16jgKfxm.json',
    '/asset/get/s/data-1528103083606-HyN3lKzxm.json',
    '/asset/get/s/data-1528103091422-S1sneKMgX.json',
    '/asset/get/s/data-1528103097901-ByzTxFflQ.json',
    '/asset/get/s/data-1528103118931-HJwAgtMxm.json',

    '/asset/get/s/data-1528103464104-S1lNMYfeX.json',
    '/asset/get/s/data-1528103471074-rkDNGKGe7.json',
    '/asset/get/s/data-1528103478006-SJCEfKzlQ.json',
    '/asset/get/s/data-1528103483095-rymSGtGxm.json',
    '/asset/get/s/data-1528103490427-Hy9BMtfeQ.json',
    '/asset/get/s/data-1528103496827-HJZLMFzxm.json',
    '/asset/get/s/data-1528103503893-rJ_UGFMeQ.json',
    '/asset/get/s/data-1528103508857-SJ6LzKGg7.json',
    '/asset/get/s/data-1528103517126-H1rPGYfx7.json',
    '/asset/get/s/data-1528103527927-HkgOGtMlX.json',

    '/asset/get/s/data-1528103707659-Hk47XFfxX.json',
    '/asset/get/s/data-1528103710886-rJwmXYGxX.json',
    '/asset/get/s/data-1528103715677-B13XmYGxm.json',
    '/asset/get/s/data-1528103719545-r1l4QtMeQ.json',
    '/asset/get/s/data-1528103722015-HJMEmKMxQ.json',
    '/asset/get/s/data-1528103725852-HyIEQtGgQ.json',
    '/asset/get/s/data-1528103730183-HkcEXKzl7.json',
    '/asset/get/s/data-1528103733001-B1T4QYfgQ.json',
    '/asset/get/s/data-1528103737427-Sk-BmtMlX.json',
    '/asset/get/s/data-1528103741282-BkHBXtfeX.json',
    '/asset/get/s/data-1528103745537-B15rXFGxm.json',
    '/asset/get/s/data-1528103749852-SkASXKzlm.json',
    '/asset/get/s/data-1528103753098-SkWU7tMgX.json',
    '/asset/get/s/data-1528103756572-rJBUXtfgm.json',
    '/asset/get/s/data-1528103760590-H1t8QKflX.json',
    '/asset/get/s/data-1528103764750-rJp8QKze7.json',
    '/asset/get/s/data-1528103768087-rylD7tGeX.json',
    '/asset/get/s/data-1528103772478-Hk4DmYGlX.json',
    '/asset/get/s/data-1528103777517-H1FvXtfgm.json',
    '/asset/get/s/data-1528103783923-SkldQYGlX.json',
    '/asset/get/s/data-1528103822566-S1v5mKzgm.json',
    '/asset/get/s/data-1528103826987-SkjqQFMx7.json',
    '/asset/get/s/data-1528103831216-BkkjmKGg7.json',
    '/asset/get/s/data-1528103837049-BkBjmtGxm.json',
    '/asset/get/s/data-1528103856949-SJY37FMlQ.json',
    '/asset/get/s/data-1528103860006-r1nnmtzl7.json',
    '/asset/get/s/data-1528103863181-rky6XKMg7.json',
    '/asset/get/s/data-1528103868372-H1467YGx7.json',
    '/asset/get/s/data-1528103873213-Hytp7tMgm.json',
    '/asset/get/s/data-1528103876538-H1pTQFGx7.json',
    '/asset/get/s/data-1528103882762-r1Q0XFGeX.json',
    '/asset/get/s/data-1528104372138-Byn3HKGgQ.json',
    '/asset/get/s/data-1528104362949-SkQ2HKfxX.json',
    '/asset/get/s/data-1528104359151-SJ13Btzx7.json',
    '/asset/get/s/data-1528104355551-S1hiStfeX.json',
    '/asset/get/s/data-1528104351541-ByOjBFGeX.json',
    '/asset/get/s/data-1528104348437-S1NjSFzem.json',
    '/asset/get/s/data-1528104344786-S1-oHFzlm.json',
    '/asset/get/s/data-1528104340595-rJa5SYGgm.json',
    '/asset/get/s/data-1528104335442-ByDcHKMeQ.json',
    '/asset/get/s/data-1528104329269-Syb5rKzgX.json',
    '/asset/get/s/data-1528104325502-HyTKBFGlX.json',
    '/asset/get/s/data-1528104321188-rkKtHYMxm.json',
    '/asset/get/s/data-1528104493034-S1HVItGg7.json',
    '/asset/get/s/data-1528104497859-SJq48Fzxm.json',
    '/asset/get/s/data-1528104509697-SJUHItMeQ.json',
    '/asset/get/s/data-1528104514467-SkcrIFfxX.json',
    '/asset/get/s/data-1528104518161-SkAH8tMlX.json',
    '/asset/get/s/data-1528104522845-HkmLLtzlm.json',
    '/asset/get/s/data-1528104526809-r1v8IKGgm.json',
    '/asset/get/s/data-1528104530741-SkjL8KzxQ.json',
    '/asset/get/s/data-1528104786709-HkoLPKfxQ.json',
    '/asset/get/s/data-1528104790885-ByJPPYMx7.json',
    '/asset/get/s/data-1528104794516-ryzvDKGeQ.json',
    '/asset/get/s/data-1528104797904-BkIvvFMlm.json',
    '/asset/get/s/data-1528104801572-rJ5vvKfeQ.json',
    '/asset/get/s/data-1528104805847-SyRwPKMeQ.json',
    '/asset/get/s/data-1528104809437-r1WuvKzlX.json',
    '/asset/get/s/data-1528104813204-SkBdDFzxQ.json',
    '/asset/get/s/data-1528104745371-SkWNPFMl7.json',
    '/asset/get/s/data-1528104729763-r1zXvFMxm.json',
    '/asset/get/s/data-1528104725104-Hy6zvtMgX.json',
    '/asset/get/s/data-1528104720471-HyuGDFfgm.json',
    '/asset/get/s/data-1528104717608-SJLfvFfeX.json',
    '/asset/get/s/data-1528104714719-SymGDtzlX.json',
    '/asset/get/s/data-1528104710891-r1kMPKzgQ.json',
    '/asset/get/s/data-1528175595366-Symx2c7eQ.json',
    '/asset/get/s/data-1528175610930-HkmW2cQgQ.json',
    '/asset/get/s/data-1528175614323-BkIW3cmxQ.json',
    '/asset/get/s/data-1528175618963-SJoWhcml7.json',
    '/asset/get/s/data-1528175623059-ryJzh9XlQ.json',
    '/asset/get/s/data-1528175627850-rkEM2cXxQ.json',
    '/asset/get/s/data-1528175632390-r1dGh9Qe7.json',
    '/asset/get/s/data-1528175636929-HkTGhcXxm.json',
    '/asset/get/s/data-1528175641739-rkMmnqXxQ.json',
    '/asset/get/s/data-1528175647753-rkum29Xxm.json',
    '/asset/get/s/data-1528175652003-Hy2XhcXxX.json',
    '/asset/get/s/data-1528175656654-B1bV25Xx7.json',
    '/asset/get/s/data-1528175661551-HJLN39XgX.json',
]
// var buildsData=[];

var len = urls.length;
var index = 0;

function getJson(idx) {
    var url = urls[idx];
    $.getJSON(url, function(buildingsGeoJSON) {
        var builds;
        if (buildingsGeoJSON.features) {
            buildingsGeoJSON = buildingsGeoJSON.features;
            builds = buildingsGeoJSON.map(function(feature) {
                feature.properties.name = feature.id;
                return feature;

            })
        } else {
            builds = buildingsGeoJSON.map(function(feature) {
                return {
                    "type": "Feature",
                    "properties": {
                        "name": Math.random().toString(),
                        "height": feature.height || 100
                    },
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [feature.polygon]
                    }
                }
            })
        }
        var regionsData = builds.map(function(feature) {
            return {
                name: feature.properties.name || feature.properties.id,
                value: Math.random() * 1,
                height: feature.properties.height || 20,
                coords: feature.geometry.coordinates,
                itemStyle: {
                    color: '#0991A9',
                    borderColor: 'red'
                }
            };
        });
        // buildsData=buildsData.concat(regionsData);
        index++;
        if (index < len) {
            myChart.appendData({
                seriesIndex: 0,
                data: regionsData
            });
            getJson(index);
        } else {
            //initCharts(index);
        }
    })
}

function initCharts() {
    myChart.hideLoading();
    // console.log(buildsData.length)
    myChart.setOption({
        maptalks3D: {
            center: [-73.95030490354111, 40.803038109236724],
            zoom: 14,
            pitch: 63.8,
            bearing: -167.2,
            urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            postEffect: {
                enable: true,
                FXAA: {
                    enable: true
                }
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: false,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                }
            }
        },
        series: [{
            type: 'polygons3D',
            coordinateSystem: 'maptalks3D',
            // multiPolygon: true,
            // map: 'buildings',
            data: [], //buildsData,
            shading: 'realistic',
            instancing: true,
            silent: true,
            itemStyle: {
                color: '#000000',
                // borderColor: [0, 2, 10],
                borderWidth: 1
            },
            realisticMaterial: {
                metalness: 1,
                roughness: 0.4
            }

        }]
    });
    window.addEventListener('resize', function() {
        myChart.resize();
    });

}
initCharts();
// myChart.showLoading();
getJson(0)