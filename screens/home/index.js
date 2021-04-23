import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Dimensions
} from 'react-native';

import { Divider, Icon } from 'react-native-elements'
import styles from '../../common/styles/styles';
import { Button } from 'react-native-elements';
import DateRange from './dateRange';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchStatusData, learnMoreAboutFood, loadArticles } from '../../actions/home';
import ProgressBar from '../../components/home/progressBar';
import BannerAd from './bannerAd';
import LearnMoreFoodImpact from './learnMoreFood';
import Article from './article';


const HomeScreen = () => {

    const dispatch = useDispatch();
    const { width } = Dimensions.get('window');

    useEffect(() => {
        // Load Progress Bar Data
        dispatch(fetchStatusData());
        
        // Load Food Impacts Sections
        dispatch(fetchCategories());

        // Load Learn More ABout Food
        dispatch(learnMoreAboutFood());

        dispatch(loadArticles());
    }, []);

    const progressData = useSelector(state => state.home.progressData);
    const categories = useSelector(state => state.home.categories);
    const foodImpacts = useSelector(state => state.home.foodImpacts);
    const articles = useSelector(state => state.home.articles);

    return (
        <>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                      
                        <View style={{ ...styles.sectionContainer }}>
                            <ProgressBar data={progressData} />
                        </View>
                        <View style={{ ...styles.sectionContainer, paddingHorizontal: 0 }}>
                            <Divider style={{ backgroundColor: '#CCC', height: 5 }} />
                        </View>

                        <View style={styles.sectionContainer}>
                            <View>
                                <Text style={styles.sectionTitle}>Focus on Nutrions Than calorie!</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Button
                                    icon={
                                        <Icon
                                            name="add"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    buttonStyle={{ backgroundColor: '#11b6c3', borderRadius: 5 }}
                                    title="Add Lunch Item"
                                />
                            </View>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Heading</Text>
                            <BannerAd />
                        </View>
                        <View style={{ ...styles.sectionContainer, backgroundColor: '#CCC', paddingTop: 15, paddingBottom: 10 }}>
                            <Text style={styles.sectionTitle}>Learn More</Text>
                            <LearnMoreFoodImpact categories={categories} foodImpacts={foodImpacts} />
                        </View>

                        <View style={{ ...styles.sectionContainer }}>
                            <Article categories={categories} articles={articles} />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HomeScreen;
