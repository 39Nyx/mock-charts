var data = 200.4;

data += '';
data = data.split("");
var numberStr = '';
data.forEach(function(item) {
    if (item !== '.') {
        numberStr += '{' + item + '|} ';
    } else {
        numberStr += '{d|} ';
    }
});
numberStr += '{unit|}';

var num_fontSize = 80;
var d_fontSize = 10;
var num_lineHeight = 80;
var unit_fontSize = 60;
var unit_img = 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/db96cf98a5bd45d3739236bf87ef4546/RH_.png';
var title_img = 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/b15beb6930239aec4d765aab74974391/humidity.png';

option = {
    backgroundColor: "#24273e",
    title: [{
        text: '{img|}{title| 湿度}',
        textStyle: {
            rich: {
                img: {
                    fontSize: 20,
                    backgroundColor: {
                        image: title_img
                    }
                },
                title: {
                    fontSize: 18,
                    color: '#fff',
                }
            }
        }
    }, {
        text: numberStr,
        left: 'center',
        top: 'center',
        textStyle: {

            rich: {
                0: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/1c838159f66cc82a73439492e8f7202b/0.png'
                    }
                },
                1: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/205474ef86eddf291bfc32373cfd6967/1.png'
                    }
                },
                2: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/f705135c0b8a1f9fb605751ecff1b48d/2.png'
                    }
                },
                3: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/911b62022388b537a2d7ac441bb10444/3.png'
                    }
                },
                4: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/3481c324410071b393e9cd5f1d52b665/4.png'
                    }
                },
                5: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/2f367598bd8e8b15767b55882bd5ab7f/5.png'
                    }
                },
                6: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/34abe9437ba6046ea6bbfd678b2dc58f/6.png'
                    }
                },
                7: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/eb33bb965ad340f857e1e52ef8d39168/7.png'
                    }
                },
                8: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/dcf7b023d7172b0baf4d6d1fb697f2f0/8.png'
                    }
                },
                9: {
                    color: '#fff',
                    fontSize: num_fontSize,
                    lineHeight: num_lineHeight,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/0d1ab019ee3a8577f64b6824ca009e65/9.png'
                    }
                },
                d: {

                    color: '#fff',
                    fontSize: d_fontSize,
                    lineHeight: d_fontSize,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: 'https://gitlab.dasudian.net/customer/demo/flowcodes/uploads/f8a19f981d6c1b77988c40e78ecd2fe8/dot..png'
                    }
                },
                unit: {
                    fontSize: unit_fontSize,
                    lineHeight: 100,
                    verticalAlign: 'bottom',
                    backgroundColor: {
                        image: unit_img
                    }
                }

            }
        }
    }]
};