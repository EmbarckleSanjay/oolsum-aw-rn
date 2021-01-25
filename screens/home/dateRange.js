import React from 'react';
import DropDownPicker from "react-native-dropdown-picker";

const DateRange = () => {
    return (<><DropDownPicker
        items={[
            { label: "Today's Report", value: 'today', hidden: true },
            { label: "Yesterday's Report", value: 'yesterday' },
            { label: "Last Week", value: 'lastweek' },
            { label: "Last Month", value: 'lastmonth' },
        ]}
        defaultValue='today'
        containerStyle={{ height: 40 }}
        labelStyle={{
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'left',
            color: '#000',
            alignItems: 'center',
            textAlign: 'center',
        }}
        style={{ backgroundColor: '#11b6c3', borderColor: 'white', fontSize: 25, zIndex: 1 }}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => {
            console.log('On Change');
        }}
    /></>)
}

export default DateRange;