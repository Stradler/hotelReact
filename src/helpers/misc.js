"use strict";
exports.__esModule = true;
exports.generateBoolean = function () {
    var randomNaturalNumber = Math.floor((Math.random() * 10));
    return randomNaturalNumber % 2 === 0;
};
function generateWeek() {
    var today = new Date();
    var week = [];
    for (var i = 0; i < 7; i += 1) {
        var tempDay = new Date(Number(today));
        tempDay.setDate(today.getDate() + i);
        week.push(tempDay.getDate() + "." + tempDay.getMonth() + "." + tempDay.getFullYear());
    }
    return week;
}
exports.generateWeek = generateWeek;
