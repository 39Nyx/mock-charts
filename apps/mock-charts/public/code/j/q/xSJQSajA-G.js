options = [{
    title: {
        text: '孕妇跳楼事件分析',
        textStyle: {
            fontSize: 50
        }
    },
    xAxis: {
        data: ['医院倾向', '家属倾向', '孕妇倾向', '社会倾向', '', '', '']
    },
    tooltip: {
        show: true
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [72, 85, 32, 111, 0, 0, 0]
    }, {
        type: 'bar',
        data: [72, 85, 32, 111, 0, 0, 0]
    }]
}];

myChart.on("mousedown",function(e){
    if(e.event.event.button===2){
        showMenu([
            {
            "name": "菜单1",
            "fn": function() {
                alert("触发-菜单1" + e.data);
            }
            }, {
                "name": "菜单2",
                "fn": function() {
                    alert("触发-菜单2" + e.data);
                }
            }
        ]);
    }
})


var style_ul = "padding:0px;margin:0px;border: 1px solid #ccc;background-color: #fff;position: absolute;left: 0px;top: 0px;z-index: 2;display: none;";
var style_li = "list-style:none;padding: 5px; cursor: pointer; padding: 5px 20px;margin:0px;";
var style_li_hover = style_li + "background-color: #00A0E9; color: #fff;";


var menubox = $("<div class='echartboxMenu' style='" + style_ul + "'><ul style='margin:0px;padding:0px;'></ul></div>")
    .appendTo($(document.body));


$(document).click(function() {
    menubox.hide()
});

myChart.getDom().oncontextmenu = menubox[0].oncontextmenu = function(){
	return false;
}

var showMenu = function(menus){
    var menulistbox = $("ul", menubox).empty();
    $(menus).each(function(i, item) {
        var li = $("<li style='" + style_li + "'>" + item.name + "</li>")
            .mouseenter(function() {
                $(this).attr("style", style_li_hover);
            })
            .mouseleave(function() {
                $(this).attr("style", style_li);
            })
            .click(function() {
                item["fn"].call(this);
                menubox.hide();
            });
        menulistbox.append(li);
    });
    menubox.css({
        "left": event.x,
        "top": event.y
    }).show();
}
