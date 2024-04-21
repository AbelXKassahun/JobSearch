import { useState } from 'react';

import { 
    View, Text, Image, TextInput, TouchableOpacity, FlatList 
} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from "../../../constants";


const Welcome = () => {
    const [activeJobType, setActiveJobType] = useState('Full time');
    const router  = useRouter();
    const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

    return (
        <View>
            <View style = {styles({}).container}>
                <Text style = {styles({}).userName}>Hello Abel</Text>
                <Text style = {styles({}).welcomeMessage}>Find your perfect job here</Text>
            </View>
            <View style = {styles({}).searchContainer}>
                <View style = {styles({}).searchWrapper}>
                    <TextInput
                        style = {styles({}).searchInput}
                        value=''
                        onChange={() => {}}
                        placeholder='What jobs are you looking for ?'
                    />
                </View>
                <TouchableOpacity style = {styles({}).searchBtn} onPress={() => {}}>
                    <Image 
                        source={icons.search}
                        resizeMode='contain'
                        style = {styles({}).searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles({}).tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style = {styles({activeJobType, item}).tab}
                            onPress={() => {
                                setActiveJobType(item);
                                // @ts-ignore
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text
                                style = {styles({activeJobType, item}).tabText}
                            >{item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small}}
                    horizontal
                >
                </FlatList>
            </View>
        </View>
    );
}
export default Welcome;