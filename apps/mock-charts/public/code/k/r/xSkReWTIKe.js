pieFormat=function (obj) {
    if(obj.name=="别人家的孩子"){
         return obj.seriesName+"："+(obj.percent)+"%";
    }
    return obj.name+"："+(obj.percent)+"%";
};

formatValue=function (obj) {
    return formatNumber(obj.value);
};

formatNameValue=function (obj) {
    return obj.name+"："+formatNumber(obj.value);
};


userFormFormat=function (obj) {
    if(obj.name=="干儿子"||obj.name=="亲儿子"){
         return obj.seriesName+"："+(obj.percent)+"%";
    }
    return (obj.percent)+"%";
};


formatNumber=function(n){
   var b=parseInt(n).toString();
   var len=b.length;
   if(len<=3){return b;}
   var r=len%3;
   return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
};

option ={
  "title" : {
    "text" : "156277\n用户贡献组成20170212-20170218"
  },
  "legend" : {
    "data" : [ "陈一发儿", "冯提莫", "刘飞儿faye", "赵小臭", "萌面酥", "丸子哟", "二个", "三个以上" ]
  },
  "series" : [ {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67", "#5CADAD", "#FF8F59", "#C48888" ],
    "name" : "用户",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "16760"
    }, {
      "name" : "亲儿子",
      "value" : "45594"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : userFormFormat,
        "textStyle" : { }
      }
    },
    "radius" : "20%",
    "center" : [ "35%", "20%" ]
  }, {
    "name" : "用户",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "16760"
    }, {
      "name" : "亲儿子",
      "value" : "45594"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatNameValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "20%", "30%" ],
    "center" : [ "35%", "20%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67", "#5CADAD", "#FF8F59", "#C48888" ],
    "name" : "贡献",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "136134"
    }, {
      "name" : "亲儿子",
      "value" : "264194"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : userFormFormat,
        "textStyle" : { }
      }
    },
    "radius" : "20%",
    "center" : [ "75%", "20%" ]
  }, {
    "name" : "贡献",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "136134"
    }, {
      "name" : "亲儿子",
      "value" : "264194"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatNameValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "20%", "30%" ],
    "center" : [ "75%", "20%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67", "#5CADAD", "#FF8F59", "#C48888" ],
    "name" : "用户明细",
    "type" : "pie",
    "data" : [ {
      "name" : "陈一发儿",
      "value" : "6881"
    }, {
      "name" : "冯提莫",
      "value" : "2228"
    }, {
      "name" : "刘飞儿faye",
      "value" : "1906"
    }, {
      "name" : "赵小臭",
      "value" : "780"
    }, {
      "name" : "萌面酥",
      "value" : "752"
    }, {
      "name" : "丸子哟",
      "value" : "819"
    }, {
      "name" : "二个",
      "value" : "2875"
    }, {
      "name" : "三个以上",
      "value" : "519"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : userFormFormat,
        "textStyle" : { }
      }
    },
    "radius" : "35%",
    "center" : [ "35%", "65%" ]
  }, {
    "name" : "用户明细",
    "type" : "pie",
    "data" : [ {
      "name" : "陈一发儿",
      "value" : "6881"
    }, {
      "name" : "冯提莫",
      "value" : "2228"
    }, {
      "name" : "刘飞儿faye",
      "value" : "1906"
    }, {
      "name" : "赵小臭",
      "value" : "780"
    }, {
      "name" : "萌面酥",
      "value" : "752"
    }, {
      "name" : "丸子哟",
      "value" : "819"
    }, {
      "name" : "二个",
      "value" : "2875"
    }, {
      "name" : "三个以上",
      "value" : "519"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatNameValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "35%", "52%" ],
    "center" : [ "35%", "65%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67", "#5CADAD", "#FF8F59", "#C48888" ],
    "name" : "贡献明细",
    "type" : "pie",
    "data" : [ {
      "name" : "陈一发儿",
      "value" : "65851"
    }, {
      "name" : "冯提莫",
      "value" : "4275"
    }, {
      "name" : "刘飞儿faye",
      "value" : "5348"
    }, {
      "name" : "赵小臭",
      "value" : "1937"
    }, {
      "name" : "萌面酥",
      "value" : "11305"
    }, {
      "name" : "丸子哟",
      "value" : "1537"
    }, {
      "name" : "二个",
      "value" : "44309"
    }, {
      "name" : "三个以上",
      "value" : "1572"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : userFormFormat,
        "textStyle" : { }
      }
    },
    "radius" : "35%",
    "center" : [ "75%", "65%" ]
  }, {
    "name" : "贡献明细",
    "type" : "pie",
    "data" : [ {
      "name" : "陈一发儿",
      "value" : "65851"
    }, {
      "name" : "冯提莫",
      "value" : "4275"
    }, {
      "name" : "刘飞儿faye",
      "value" : "5348"
    }, {
      "name" : "赵小臭",
      "value" : "1937"
    }, {
      "name" : "萌面酥",
      "value" : "11305"
    }, {
      "name" : "丸子哟",
      "value" : "1537"
    }, {
      "name" : "二个",
      "value" : "44309"
    }, {
      "name" : "三个以上",
      "value" : "1572"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatNameValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "35%", "52%" ],
    "center" : [ "75%", "65%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  } ],
  "tooltip" : { },
  "toolbox" : { },
  "color" : [ "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3" ]
}
