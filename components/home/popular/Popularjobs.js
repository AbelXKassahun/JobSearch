"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var useFetch_1 = require("../../../hook/useFetch");
var popularjobs_style_1 = require("./popularjobs.style");
var constants_1 = require("../../../constants");
var PopularJobCard_1 = require("../../common/cards/popular/PopularJobCard");
var Popularjobs = function () {
    var router = (0, expo_router_1.useRouter)();
    var _a = (0, useFetch_1.default)('search', {
        query: 'React Developer',
        page: '1',
        num_pages: '1'
    }), data = _a.data, isLoading = _a.isLoading, error = _a.error, refetch = _a.refetch;
    return (<react_native_1.View style={popularjobs_style_1.default.container}>
            <react_native_1.View style={popularjobs_style_1.default.container}>
                <react_native_1.Text style={popularjobs_style_1.default.headerTitle}>Popular Jobs</react_native_1.Text>
                <react_native_1.TouchableOpacity>
                    <react_native_1.Text style={popularjobs_style_1.default.headerBtn}>Show all</react_native_1.Text>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>

            <react_native_1.View style={popularjobs_style_1.default.cardsContainer}>
                {
        // @ts-ignore
        isLoading ? (<react_native_1.ActivityIndicator size="large" colors={constants_1.COLORS.primary}/>)
            : error ? (<react_native_1.Text>Something went wrong</react_native_1.Text>) : (<react_native_1.FlatList data={[1, 2, 3, 4]} renderItem={function (_a) {
                    var item = _a.item;
                    return (<PopularJobCard_1.default item={item}/>);
                }} 
            // @ts-ignore
            keyExtractor={function (item) { return item; }} //?.job_id
             contentContainerStyle={{ columnGap: constants_1.SIZES.medium }} horizontal/>)}
            </react_native_1.View>
        </react_native_1.View>);
};
exports.default = Popularjobs;
