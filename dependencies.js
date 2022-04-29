// ==UserScript==
// @name         !) Epic Dependencies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.mope.io/*
// @grant        none
// ==/UserScript==

var oldV;

window.epicDepend = true;

function checkClient(callBack) {
    typeof Animal != 'undefined' ? setTimeout(callBack,100) : setTimeout(checkClient,100,callBack);
}

function checkInput() {
    if (localStorage.getItem('nick') != null) {
        setTimeout(function(){oldV = localStorage.getItem('nick')},100);
    } else {
        setTimeout(checkInput,100);
    }
}

checkClient(checkInput);

window.checkNameInput = function(after) {
    setTimeout(function(){
        if (localStorage.getItem('nick') != oldV) {
            oldV = localStorage.getItem('nick');
            return;
        } else {
            after();
        }
    },10);
}

window.showPopup = function(msg, msgType, timeout) {
    removePopup();
    var body = document.getElementsByTagName("body")[0];
    if (body) {
        var gameAreaWrapper = document.getElementById('gameAreaWrapper');
        var pop = createDiv("mopeshop-popup");
        var m = createDiv("msg", msgType);
        var text = createDiv("text");
        text.innerHTML = msg;
        var c = createDiv("closeMsg", "");
        c.onclick = function() {
            removePopup()
        };
        m.appendChild(c);
        m.appendChild(text);
        pop.appendChild(m);
        body.insertBefore(pop, gameAreaWrapper);
        if (timeout !== undefined && timeout > 0) {
            console.log("timeout:" + timeout);
            setTimeout(removePopup, timeout * 1000)
        }
    }
}

function removePopup() {
    var oldPop = document.getElementById('mopeshop-popup');
    if (oldPop) oldPop.parentNode.removeChild(oldPop)
}

function createDiv(id, cls) {
    var itemDiv = createElem("div", id, cls);
    return itemDiv
}

function createElem(tag, id, cls) {
    if (tag == undefined) return null;
    var elem = document.createElement(tag);
    if (id !== undefined) elem.id = id;
    if (cls !== undefined) elem.className = cls;
    return elem
};
