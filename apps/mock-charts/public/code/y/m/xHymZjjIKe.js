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
    "text" : "\n67373观众来源：20170212-20170218"
  },
  "legend" : {
    "data" : [ "亲儿子", "干儿子", "别人家的孩子", null, null, null, null, null, null, null, null, null, null, null, null ]
  },
  "series" : [ {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "女流66",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "9297"
    }, {
      "name" : "别人家的孩子",
      "value" : "53057"
    }, {
      "name" : "亲儿子",
      "value" : "119032"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "20%", "30%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "9297"
    }, {
      "name" : "别人家的孩子",
      "value" : "53057"
    }, {
      "name" : "亲儿子",
      "value" : "119032"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "20%", "30%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "冯提莫",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "8814"
    }, {
      "name" : "别人家的孩子",
      "value" : "113171"
    }, {
      "name" : "亲儿子",
      "value" : "119515"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "50%", "30%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "8814"
    }, {
      "name" : "别人家的孩子",
      "value" : "113171"
    }, {
      "name" : "亲儿子",
      "value" : "119515"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "50%", "30%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "刘飞儿faye",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "4460"
    }, {
      "name" : "别人家的孩子",
      "value" : "44476"
    }, {
      "name" : "亲儿子",
      "value" : "123869"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "80%", "30%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "4460"
    }, {
      "name" : "别人家的孩子",
      "value" : "44476"
    }, {
      "name" : "亲儿子",
      "value" : "123869"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "80%", "30%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "赵小臭",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "3061"
    }, {
      "name" : "别人家的孩子",
      "value" : "29294"
    }, {
      "name" : "亲儿子",
      "value" : "125268"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "20%", "75%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "3061"
    }, {
      "name" : "别人家的孩子",
      "value" : "29294"
    }, {
      "name" : "亲儿子",
      "value" : "125268"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "20%", "75%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "萌面酥",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "2064"
    }, {
      "name" : "别人家的孩子",
      "value" : "45268"
    }, {
      "name" : "亲儿子",
      "value" : "126265"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "50%", "75%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "2064"
    }, {
      "name" : "别人家的孩子",
      "value" : "45268"
    }, {
      "name" : "亲儿子",
      "value" : "126265"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "50%", "75%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  }, {
    "color" : [ "#86D560", "#AF89D6", "#59ADF3", "#FF999A", "#FFCC67" ],
    "name" : "丸子哟",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "1790"
    }, {
      "name" : "别人家的孩子",
      "value" : "29243"
    }, {
      "name" : "亲儿子",
      "value" : "126539"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : pieFormat,
        "textStyle" : { }
      }
    },
    "radius" : "25%",
    "center" : [ "80%", "75%" ]
  }, {
    "name" : "",
    "type" : "pie",
    "data" : [ {
      "name" : "干儿子",
      "value" : "1790"
    }, {
      "name" : "别人家的孩子",
      "value" : "29243"
    }, {
      "name" : "亲儿子",
      "value" : "126539"
    } ],
    "label" : {
      "normal" : {
        "position" : "inner",
        "formatter" : formatValue,
        "textStyle" : {
          "fontSize" : 14,
          "color" : "#777777"
        }
      }
    },
    "radius" : [ "25%", "40%" ],
    "center" : [ "80%", "75%" ],
    "itemStyle" : {
      "normal" : {
        "color" : "#F2F2F2"
      },
      "emphasis" : {
        "color" : "#ADADAD"
      }
    }
  } ],
  "tooltip" : {
    "trigger" : ""
  },
  "toolbox" : { },
  "color" : [ "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3" ]
}