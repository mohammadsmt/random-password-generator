"use strict"

var yourPassword = document.getElementsByClassName("yourPassword");
var btn = document.getElementsByClassName("btn");
var str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789!@#$%^&*-)(_=+*\/";
var Length = str.length;
var i;


function click_gnrate_passworde() {
    var pass0 = str.charAt(Math.random() * Length + 1);
    var pass1 = str.charAt(Math.random() * Length + 1);
    var pass2 = str.charAt(Math.random() * Length + 1);
    var pass3 = str.charAt(Math.random() * Length + 1);
    var pass4 = str.charAt(Math.random() * Length + 1);
    var pass5 = str.charAt(Math.random() * Length + 1);
    var pass6 = str.charAt(Math.random() * Length + 1);
    var pass7 = str.charAt(Math.random() * Length + 1);
    var pass8 = str.charAt(Math.random() * Length + 1);
    var pass9 = str.charAt(Math.random() * Length + 1);

    alert(pass0 + pass1 + pass2 + pass3 + pass4 + pass5 + pass6 + pass7 + pass8 + pass9);
};
