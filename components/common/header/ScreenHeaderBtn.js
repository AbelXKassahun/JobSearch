"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var screenheader_style_1 = require("./screenheader.style");
;
var ScreenHeaderBtn = function (_a) {
    var iconUrl = _a.iconUrl, dimension = _a.dimension, handlePress = _a.handlePress;
    return (<react_native_1.TouchableOpacity style={(0, screenheader_style_1.default)({}).btnContainer} onPress={handlePress}>
            <react_native_1.Image source={iconUrl} resizeMode='cover' style={(0, screenheader_style_1.default)({ dimension: dimension }).btnImg}/>
        </react_native_1.TouchableOpacity>);
};
exports.default = ScreenHeaderBtn;
