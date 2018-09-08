/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    SOME_CONSTANTS: false, // some constant


    // Application Constructor
    initialize: function () {
        console.log("console log init");
        this.bindEvents();
        this.initFastClick();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    initFastClick: function () {
        window.addEventListener('load', function () {
            FastClick.attach(document.body);
        }, false);
    },
    // Phonegap is now ready...
    onDeviceReady: function () {
        console.log("device ready, start making you custom calls!");

    }
};

function onfailure (message) {
     alert("OSC Send Error " + message); 
 };

function sendOscMsg() {
    var host = document.getElementById("host").value;
    var port = document.getElementById("port").value;
    var address = document.getElementById("address").value;
    var data = document.getElementById("args").value;
    var sender = new OSCSender(host, port);
    sender.send(address, data, null, onfailure);
    sender.close();
}

function sendRandomCurveOsc() {
    var host = document.getElementById("host").value;
    var port = document.getElementById("port").value;
    var address = document.getElementById("address").value;
    var data = [];

    for (var i = 0; i < 50 * 4; i = i + 4) {
        data [i] = (Math.random() * 2) - 1;
        data [i + 1] = (Math.random() * 2) -1 ;
        data [i + 2] = (Math.random() * 2) - 1;
        data [i + 3] = i/4;
    }
    var sender = new OSCSender(host, port);
    sender.sendnodouble(address, data, null, onfailure);
    sender.close();
}