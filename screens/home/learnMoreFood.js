import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../common/styles/styles';

const LearnMoreFoodImpact = (props) => {

    const { width } = Dimensions.get('window');

    return (<>
        <ScrollView horizontal={true} style={{ marginTop: 15 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {props.categories.map((value, index) => {
                return (<Button key={value.id}
                    buttonStyle={{ marginRight: 10, backgroundColor: index === 0 ? '#11b6c3' : 'gray', borderRadius: 8 }}
                    title={value.name}
                    type="solid"
                />)
            })}
        </ScrollView>
        <View style={{ backgroundColor: 'white', marginTop: 15, marginBottom: 15, borderRadius: 6 }}>
            <View style={{ padding: 5, marginTop: 5, marginBottom: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ ...styles.sectionTitle, color: 'black' }}>About Food</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ marginRight: 5, fontSize: 12 }}>View More</Text>
                    </View>
                    <View style={{ marginTop: 3 }}>
                        <Icon
                            name="chevron-forward-circle"
                            size={16}
                            type="ionicon"
                            color="gray"
                        />
                    </View>
                </View>
            </View>
            <Divider />
            <View style={{ padding: 5, marginTop: 5, marginBottom: 5 }}>
                <ScrollView
                    // ref={(scrollView) => { this.scrollView = scrollView; }}
                    // style={styles.container}
                    //pagingEnabled={true}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={'fast'}
                    snapToInterval={width - 90}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                    {props.foodImpacts.map((value) => {
                        return (<View key={value.id} style={styles.cards}>
                            <View style={{ position: 'absolute', right: 10, top: 10 }}>
                                <TouchableOpacity>
                                <Icon
                                    name="dots-vertical"
                                    type="material-community"
                                    size={15}
                                />
                                </TouchableOpacity> 
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text>{String(value.name).toUpperCase()}</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                {value.hints.map((hint, index) => {
                                    return (<View key={index} style={{ flexDirection: 'row' }}>
                                    <View style={styles.bullet}>
                                        <Text>{'\u2022' + " "}</Text>
                                    </View>
                                    <View style={styles.bulletText}>
                                        <Text style={styles.boldText}>{hint}</Text>
                                    </View>
                                </View>)
                                })}
                            </View>
                        </View>);
                    })}
                </ScrollView>
            </View>
        </View></>)
}

export default LearnMoreFoodImpact;