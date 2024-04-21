import { Image, TouchableOpacity, ImageSourcePropType, DimensionValue, GestureResponderEvent } from 'react-native';

import styles from "./screenheader.style";

interface args{
    iconUrl: ImageSourcePropType, 
    dimension: DimensionValue, 
    handlePress?: (arg0: GestureResponderEvent) => void
};

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: args) => {
    
    return (
        <TouchableOpacity style={styles({}).btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode='cover'
                style={styles({dimension}).btnImg}
            />
        </TouchableOpacity>
    );
}
export default ScreenHeaderBtn;