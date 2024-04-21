"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var welcome_style_1 = require("./welcome.style");
var constants_1 = require("../../../constants");
var Welcome = function () {
    var _a = (0, react_1.useState)('Full time'), activeJobType = _a[0], setActiveJobType = _a[1];
    var router = (0, expo_router_1.useRouter)();
    var jobTypes = ['Full-time', 'Part-time', 'Contractor'];
    return (<react_native_1.View>
            <react_native_1.View style={(0, welcome_style_1.default)({}).container}>
                <react_native_1.Text style={(0, welcome_style_1.default)({}).userName}>Hello Abel</react_native_1.Text>
                <react_native_1.Text style={(0, welcome_style_1.default)({}).welcomeMessage}>Find your perfect job here</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View style={(0, welcome_style_1.default)({}).searchContainer}>
                <react_native_1.View style={(0, welcome_style_1.default)({}).searchWrapper}>
                    <react_native_1.TextInput style={(0, welcome_style_1.default)({}).searchInput} value='' onChange={function () { }} placeholder='What jobs are you looking for ?'/>
                </react_native_1.View>
                <react_native_1.TouchableOpacity style={(0, welcome_style_1.default)({}).searchBtn} onPress={function () { }}>
                    <react_native_1.Image source={constants_1.icons.search} resizeMode='contain' style={(0, welcome_style_1.default)({}).searchBtnImage}/>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>
            <react_native_1.View style={(0, welcome_style_1.default)({}).tabsContainer}>
                <react_native_1.FlatList data={jobTypes} renderItem={function (_a) {
            var item = _a.item;
            return (<react_native_1.TouchableOpacity style={(0, welcome_style_1.default)({ activeJobType: activeJobType, item: item }).tab} onPress={function () {
                    setActiveJobType(item);
                    // @ts-ignore
                    router.push("/search/".concat(item));
                }}>
                            <react_native_1.Text style={(0, welcome_style_1.default)({ activeJobType: activeJobType, item: item }).tabText}>{item}
                            </react_native_1.Text>
                        </react_native_1.TouchableOpacity>);
        }} keyExtractor={function (item) { return item; }} contentContainerStyle={{ columnGap: constants_1.SIZES.small }} horizontal>
                </react_native_1.FlatList>
            </react_native_1.View>
        </react_native_1.View>);
};
exports.default = Welcome;
