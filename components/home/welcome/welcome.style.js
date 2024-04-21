"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var constants_1 = require("../../../constants");
var styles = function (_a) {
    var activeJobType = _a.activeJobType, item = _a.item;
    return react_native_1.StyleSheet.create({
        container: {
            width: "100%",
        },
        userName: {
            fontFamily: constants_1.FONT.regular,
            fontSize: constants_1.SIZES.large,
            color: constants_1.COLORS.secondary,
        },
        welcomeMessage: {
            fontFamily: constants_1.FONT.bold,
            fontSize: constants_1.SIZES.xLarge,
            color: constants_1.COLORS.primary,
            marginTop: 2,
        },
        searchContainer: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: constants_1.SIZES.large,
            height: 50,
        },
        searchWrapper: {
            flex: 1,
            backgroundColor: constants_1.COLORS.white,
            marginRight: constants_1.SIZES.small,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: constants_1.SIZES.medium,
            height: "100%",
        },
        searchInput: {
            fontFamily: constants_1.FONT.regular,
            width: "100%",
            height: "100%",
            paddingHorizontal: constants_1.SIZES.medium,
        },
        searchBtn: {
            width: 50,
            height: "100%",
            backgroundColor: constants_1.COLORS.tertiary,
            borderRadius: constants_1.SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
        },
        searchBtnImage: {
            width: "50%",
            height: "50%",
            tintColor: constants_1.COLORS.white,
        },
        tabsContainer: {
            width: "100%",
            marginTop: constants_1.SIZES.medium,
        },
        tab: {
            paddingVertical: constants_1.SIZES.small / 2,
            paddingHorizontal: constants_1.SIZES.small,
            borderRadius: constants_1.SIZES.medium,
            borderWidth: 1,
            borderColor: activeJobType === item ? constants_1.COLORS.secondary : constants_1.COLORS.gray2,
        },
        tabText: {
            fontFamily: constants_1.FONT.medium,
            color: activeJobType === item ? constants_1.COLORS.secondary : constants_1.COLORS.gray2,
        },
    });
};
exports.default = styles;
