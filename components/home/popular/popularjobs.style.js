"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var constants_1 = require("../../../constants");
var styles = react_native_1.StyleSheet.create({
    container: {
        marginTop: constants_1.SIZES.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: constants_1.SIZES.large,
        fontFamily: constants_1.FONT.medium,
        color: constants_1.COLORS.primary,
    },
    headerBtn: {
        fontSize: constants_1.SIZES.medium,
        fontFamily: constants_1.FONT.medium,
        color: constants_1.COLORS.gray,
    },
    cardsContainer: {
        marginTop: constants_1.SIZES.medium,
    },
});
exports.default = styles;
