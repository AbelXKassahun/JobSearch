import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }: any) => {
    return (
        <TouchableOpacity
            style={styles({selectedJob, item}).container}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity
                style={styles({selectedJob, item}).logoContainer}
            >
                <Image 
                    source={{uri: item.employer_logo}}
                    resizeMode='contain'
                    style={styles({}).logoImage}
                />
            </TouchableOpacity>
            
            <Text style={styles({}).companyName} numberOfLines={1}>{item.employer_name}</Text>

            <View style={styles({}).infoContainer}>
                <Text 
                    style={styles({selectedJob, item}).jobName}
                    numberOfLines={1}
                >{item.job_title}</Text>
                <Text style={styles({}).location}>
                    {item.job_country}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default PopularJobCard;