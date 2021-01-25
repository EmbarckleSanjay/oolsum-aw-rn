import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

const BannerAd = () => {
    return (<><View style={{ backgroundColor: '#2a475e', padding: 15, paddingBottom: 30, paddingTop: 30, marginTop: 10, borderRadius: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 3.5 }}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require('../../assets/images/img2.png')}
                />
                <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <Text style={{ fontSize: 15, fontWeight: '700', color: 'white' }}>Personalise your Read!</Text>
                    <Text style={{ color: '#CCC' }}>Start your deepen you practise</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    buttonStyle={{ backgroundColor: '#11b6c3', borderRadius: 35, fontSize: 6 }}
                    titleStyle={{ margin: 0, padding: 0, fontSize: 12, padding: 0, margin: 0 }}
                    title="Explore"
                />
            </View>
        </View>
    </View></>)
}

export default BannerAd;