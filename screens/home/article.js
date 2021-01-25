import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../common/styles/styles';

const Article = (props) => {

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
        <View style={{ marginTop: 23 }}>
            {props.articles.map((value) => {
                return (<View key={value.id} style={{ ...styles.boxWithShadow, backgroundColor: 'white', flexDirection: 'row', flex: 1, flexWrap: 'wrap', padding: 10, borderRadius: 8 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: '#ededed', alignSelf: 'flex-start', padding: 3, borderRadius: 3 }}>
                            <Text style={{ color: 'black', fontWeight: '700', color: '#7d7d7d', fontSize: 12 }}>
                                {value.categoryName}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 5, fontWeight: '700', fontSize: 16 }}>
                                {value.description}
                                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                                    <Icon
                                        name="remove-red-eye"
                                        size={19}
                                        color="gray"
                                    />
                                    <Text>{value.viewsCount}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                                    <Icon
                                        name="share"
                                        size={16}
                                        color="gray"
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                                    <Icon
                                        name="star-border"
                                        size={19}
                                        color="gray"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Image
                            style={{ width: 100, height: '100%', borderRadius: 8 }}
                            source={require('../../assets/images/img3.png')}
                        />
                    </View>
                </View>);
            })}
        </View>
    </>)
}

export default Article;