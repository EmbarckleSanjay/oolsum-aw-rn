import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import styles from '../../common/styles/styles';

const HomeTitle = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.sectionTitle}>Awarness</Text>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name='search'
                />
                <Icon
                    name='star-border'
                />
            </View>
        </View>
    );
}

export default HomeTitle;
