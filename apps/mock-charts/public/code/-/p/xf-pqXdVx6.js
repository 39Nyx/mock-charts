var chart = echarts.init(document.getElementById('chart-panel'));

function loadJSON() {
    var i, o, n, m, l, k, j;
    a = myChart, a.showLoading(), i = $(".panel").find("option:selected").last(), i.attr("selected", !0), 
    o = i.val().split("|"), n = o[0], m = o[1], l = i.text(), k = {
        subdistrict: 1,
        extensions: "all"
    }, j = new AMap.DistrictSearch(k), j.setSubdistrict(1), j.setLevel(n), j.search(l, function(A, z) {
        function y() {
            this.type = "FeatureCollection", this.features = [];
        }
        function x() {
            this.type = "Feature", this.id = "", this.properties = {
                name: "",
                cp: [],
                childNum: 1
            }, this.geometry = {
                type: "Polygon",
                coordinates: []
            };
        }
        function w(H, G) {
            var F, E, D, C = [], B = [], q = [], p = H.boundaries.length;
            if (1 === p) {
                for (F = H.boundaries[0], E = 0; E < F.length; E++) {
                    C[0] = F[E].lng, C[1] = F[E].lat, B.push(C), C = [];
                }
                G.push(B);
            } else {
                for (D = 0; p > D; D++) {
                    for (F = H.boundaries[D], E = 0; E < F.length; E++) {
                        C[0] = F[E].lng, C[1] = F[E].lat, B.push(C), C = [];
                    }
                    q.push(B), B = [], G.push(q), q = [];
                }
            }
        }
        function v(f) {
            f.UTF8Encoding = !0;
            var c = f.features;
            return c ? (c.forEach(function(p) {
                var g = p.geometry.encodeOffsets = [], q = p.geometry.coordinates;
                "Polygon" === p.geometry.type ? q.forEach(function(b, B) {
                    q[B] = u(b, g[B] = []);
                }) : "MultiPolygon" === p.geometry.type && q.forEach(function(b, B) {
                    g[B] = [], b.forEach(function(C, D) {
                        q[B][D] = u(C, g[B][D] = []);
                    });
                });
            }), f) : void 0;
        }
        function u(q, p) {
            var F, E, D = "", C = t(q[0][0]), B = t(q[0][1]);
            for (p[0] = C, p[1] = B, F = 0; F < q.length; F++) {
                E = q[F], D += s(E[0], C), D += s(E[1], B), C = t(E[0]), B = t(E[1]);
            }
            return D;
        }
        function t(b) {
            return Math.ceil(1024 * b);
        }
        function s(f, c) {
            return f = t(f), f -= c, 8232 == 64 + (f << 1 ^ f >> 15) && f--, f = f << 1 ^ f >> 15, 
            String.fromCharCode(f + 64);
        }
        function r(K, J, I) {
            var H, G, F, E = new y(), D = E.features, C = K[0], B = C.districtList, g = C.citycode, f = 0;
            if (g.length) {
                for (H = 0, G = B.length; G > H; H++) {
                    f++, j.search(B[H].name, function(c, L) {
                        function q(N, M) {
                            var T, S, R, Q, P, O;
                            for (T = new x(), S = [], R = [], Q = 0, P = N.length; P > Q; Q++) {
                                if (O = N[Q], O.citycode === M) {
                                    return T.id = O.adcode, T.properties.name = O.name, T.properties.childNum = O.boundaries.length, 
                                    T.properties.childNum > 1 && (T.geometry.type = "MultiPolygon"), S[0] = O.center.lng, 
                                    S[1] = O.center.lat, T.properties.cp = S, S = [], w(O, R), T.geometry.coordinates = R, 
                                    R = [], T;
                                }
                            }
                        }
                        f--;
                        var p = L.districtList, b = q(p, m);
                        b && D.push(b), 0 === f && (J && (E = v(E)), I(E), j.setSubdistrict(1));
                    });
                }
            } else {
                for (H = 0, G = B.length; G > H; H++) {
                    F = B[H].name, f++, j.search(F, function(p, c) {
                        function M(O) {
                            var N, T, S, R, Q, P;
                            for (N = new x(), T = [], S = [], R = 0, Q = O.length; Q > R; R++) {
                                return P = O[R], N.id = P.adcode, N.properties.name = P.name, N.properties.childNum = P.boundaries.length, 
                                N.properties.childNum > 1 && (N.geometry.type = "MultiPolygon"), T[0] = P.center.lng, 
                                T[1] = P.center.lat, N.properties.cp = T, T = [], w(P, S), N.geometry.coordinates = S, 
                                S = [], N;
                            }
                        }
                        f--;
                        var L = c.districtList, q = M(L);
                        D.push(q), 0 === f && (E = v(E), I(E), j.setSubdistrict(1));
                    });
                }
            }
        }
        function h(H, G, F) {
            function E(I, p) {
                var O, N, M, L, K, J;
                for (O = new x(), N = [], M = [], L = 0, K = I.length; K > L; L++) {
                    if (J = I[L], J.citycode == p) {
                        return O.id = J.adcode, O.properties.name = J.name, O.properties.childNum = J.boundaries.length, 
                        O.properties.childNum > 1 && (O.geometry.type = "MultiPolygon"), N[0] = J.center.lng, 
                        N[1] = J.center.lat, O.properties.cp = N, N = [], w(J, M), O.geometry.coordinates = M, 
                        O;
                    }
                }
            }
            function D(I) {
                var p = new x(), K = [], J = [];
                return p.id = I.adcode, p.properties.name = I.name, p.properties.childNum = I.boundaries.length, 
                p.properties.childNum > 1 && (p.geometry.type = "MultiPolygon"), K[0] = I.center.lng, 
                K[1] = I.center.lat, p.properties.cp = K, K = [], w(I, J), p.geometry.coordinates = J, 
                p;
            }
            var C, B = new y(), q = B.features, g = H[0], f = (g.citycode, g.level);
            C = "district" === f ? E(H, m) : D(g), q.push(C), G && (B = v(B)), F(B), j.setSubdistrict(1);
        }
        function e(f) {
            var g = f.features.map(function(b) {
                return {
                    name: b.properties.name,
                    height: 2 * Math.random() + 1
                };
            });
            echarts.registerMap("mapArea", f), $("#" + a.getDom().id).contextmenu(function() {
                return !1;
            }), a.clear(), a.setOption({
                color: [ "#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42" ],
                backgroundColor: "#333",
                textStyle: {
                    color: "#eee",
                    fontFamily: "Microsoft YaHei",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                title: {
                    text: $(".panel select:eq(-2) option:selected").text(),
                    textStyle: {
                        color: "#fff"
                    }
                },
                geo3D: {
                    map: "mapArea",
                    environment: "/asset/get/s/data-1491837999815-H1_44Qtal.jpg",
                    itemStyle: {
                        borderColor: "rgba(100,149,237,1)",
                        borderWidth: 1.5
                    },
                    shading: "lambert",
                    lambertMaterial: {
                        baseTexture: "/asset/get/s/data-1491896059428-B1QbPbq6e.jpg",
                        textureTiling: 20
                    },
                    regions: g
                }
            }), a.on("geoselectchanged", function(b) {
                $(".panel select:last-child option").each(function() {
                    return $(this).text() == b.batch[0].name ? ($(this).attr("selected", !0), void loadJSON()) : void 0;
                });
            }), a.getZr().on("mousedown", function(b) {
                switch (b.event.which) {
                  case 3:
                    $(".panel select").length > 2 && ($(".panel select:last-child").remove(), $(".panel select:last-child").remove(), 
                    loadJSON());
                }
            }), a.hideLoading();
        }
        switch (n) {
          case "district":
          case "biz_area":
            h(z.districtList, !0, e);
            break;

          case "city":
          case "province":
            r(z.districtList, !0, e);

          default:
            var d = $("<select></select>");
            switch (d.change(function() {
                $(this).nextAll().remove(), $(this).val() || $(this).remove(), loadJSON();
            }), d.appendTo($(".panel")), n) {
              case "country":
                d.append($('<option value="">--  所有省(行政区,直辖市)  --</option>'));
                break;

              case "province":
                d.append($('<option value="">--  所有城市  --</option>'));
                break;

              case "city":
                d.append($('<option value="">--  所有区县  --</option>'));
            }
            z.districtList[0].districtList.forEach(function(b) {
                d.append($('<option value="' + b.level + (b.citycode ? "|" + b.citycode : "") + '">' + b.name + "</option>"));
            }), "country" == n && ($(".panel").find("option").last().attr("selected", !0), loadJSON());
        }
    });
}
chart.on('click', function(params) {
    alert("click");
    loadMap(params.name, 10);
});
$("body").append($('<div class="panel" style="position: absolute;background-color: #fff;border: solid 1px silver;box-shadow: 3px 4px 3px 0px silver;right: 10px;top: 10px;padding: 5px 10px;font-size: 12px;border-radius: 4px">请选择区域：<select><option selected="selected" value="country">中国</option></select></div>')), 
loadJSON();