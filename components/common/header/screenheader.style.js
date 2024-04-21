"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var constants_1 = require("../../../constants");
var styles = function (_a) {
    var dimension = _a.dimension;
    return react_native_1.StyleSheet.create({
        btnContainer: {
            width: 40,
            height: 40,
            backgroundColor: constants_1.COLORS.white,
            borderRadius: constants_1.SIZES.small / 1.25,
            justifyContent: "center",
            alignItems: "center",
        },
        btnImg: {
            width: dimension,
            height: dimension,
            borderRadius: constants_1.SIZES.small / 1.25
        }
    });
};
exports.default = styles;
