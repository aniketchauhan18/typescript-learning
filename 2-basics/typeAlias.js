"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "Ani", email: "", isActive: true });
function printCoordinates(pt) {
    console.log("X coordinate: " + pt.x);
    console.log("Y coordinate: ", pt.y);
}
printCoordinates({ x: 10000, y: 23523 });
