"use strict";
var App = (function () {
    function App() {
        var shop = new Shop();
        var channel = new Channel();
        var c = new Client(shop);
        var a = new Arno(shop);
        var cc = new Client(channel);
        var aa = new Arno(channel);
        shop.sendMessage();
        channel.sendMessage();
    }
    return App;
}());
window.addEventListener("load", function () { return new App(); });
var Channel = (function () {
    function Channel() {
        this.observers = [];
    }
    Channel.prototype.subscribe = function (c) {
        this.observers.push(c);
    };
    Channel.prototype.unsubscribe = function (c) {
    };
    Channel.prototype.sendMessage = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var c = _a[_i];
            c.notify("nieuwe video");
        }
    };
    return Channel;
}());
var Client = (function () {
    function Client(s) {
        this.shop = s;
        this.shop.subscribe(this);
    }
    Client.prototype.notify = function (p) {
        console.log(p + " is in shop");
    };
    return Client;
}());
var Arno = (function () {
    function Arno(s) {
        this.shop = s;
        this.shop.subscribe(this);
    }
    Arno.prototype.notify = function (p) {
        console.log("Arno krijgt een " + p);
    };
    return Arno;
}());
var Shop = (function () {
    function Shop() {
        this.observers = [];
    }
    Shop.prototype.subscribe = function (c) {
        this.observers.push(c);
    };
    Shop.prototype.unsubscribe = function (c) {
    };
    Shop.prototype.sendMessage = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var c = _a[_i];
            c.notify("game card");
        }
    };
    return Shop;
}());
//# sourceMappingURL=main.js.map