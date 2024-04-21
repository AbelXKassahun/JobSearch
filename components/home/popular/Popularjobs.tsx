import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import useFetch from '../../../hook/useFetch';

import { useQuery } from '@tanstack/react-query'
import  {getContentFromAPI, getContentFromJsonServer}  from '../../../api/get';

import styles from './popularjobs.style';
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
    const router = useRouter();
    
    const search = useQuery({
        queryKey: ['repoData'],
        // queryFn: () => getContent('search', {
        //     query: 'Python developer in Texas, USA',
        //     page: '1',
        //     num_pages: '1'
        // })
        queryFn: () => getContentFromJsonServer()
    })

    const result: any = !search.isPending ? !search.isError ? search.data.data.data : 'error' : 'pending'; 
    
    return (
        <View style = {styles.container}>
            <View style = {styles.container}>
                <Text style = {styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style = {styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.cardsContainer}>
                {
                    // @ts-ignore
                    search.isLoading ? (<ActivityIndicator size="large" colors={COLORS.primary}/>)
                    : search.error ? (
                        <Text >{ JSON.stringify(search.error.message) }</Text>
                    ): (

                        <FlatList
                            data={result}
                            renderItem={({ item }: any) => (
                                <PopularJobCard
                                    item={item}
                                />
                            )}
                            keyExtractor={(item: any) => item?.job_id}
                            contentContainerStyle={{columnGap: SIZES.medium}}
                            horizontal
                        />
                    )
                }
            </View>
        </View>
    );
}
export default Popularjobs;