"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCoordinateStuttgart = exports.getRandomArrayElement = exports.getRandomHash = exports.getRandomInt = void 0;
const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.getRandomInt = getRandomInt;
const getRandomHash = () => {
    return (Math.random() + 1).toString(36).substring(4);
};
exports.getRandomHash = getRandomHash;
const getRandomArrayElement = (...array) => {
    return array[Math.floor(Math.random() * array.length)];
};
exports.getRandomArrayElement = getRandomArrayElement;
const getRandomCoordinateStuttgart = () => {
    return (0, exports.getRandomArrayElement)(...[...Array((0, exports.getRandomInt)(100, 20))].map(() => [parseFloat(`48.77${(0, exports.getRandomInt)(600)}`), parseFloat(`9.18${(0, exports.getRandomInt)(600)}`)]));
};
exports.getRandomCoordinateStuttgart = getRandomCoordinateStuttgart;
