import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

const ProgressBar = (props) => {
    return (<><View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {props.data.map((value) => {
            return (<View key={value.id} style={{ paddingRight: 6, paddingLeft: 6, alignItems: 'center' }}>
            <ProgressCircle
                percent={value.value}
                radius={30}
                borderWidth={4}
                color="#39a342"
                shadowColor="#dbd9d9"
                bgColor="#dbd9d9"
            >
                <Text style={{ fontSize: 18 }}>{`${value.value}%`}</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 16, paddingTop: 5 }}>{value.name}</Text>
        </View>)
        })}
    </View></>)
}

export default ProgressBar;