/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Icon } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
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
            </View>
            <View style={styles.sectionContainer}>
              <Text style={[styles.sectionTitle, { fontSize: 20, backgroundColor: '#39a342', padding:5, textAlign: 'center', borderRadius: 5, fontWeight: '800' }]}>Today Report</Text>
            </View>
            <View style={styles.sectionContainer}>
              <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                <View style={{ paddingRight:6, paddingLeft: 6, alignItems:'center' }}>
                  <ProgressCircle
                    percent={30}
                    radius={30}
                    borderWidth={4}
                    color="#39a342"
                    shadowColor="#dbd9d9"
                    bgColor="#dbd9d9"
                  >
                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                  </ProgressCircle>
                  <Text style={{ fontSize: 16, paddingTop: 5 }}>Food</Text>
                </View>
                <View style={{ paddingRight:6, paddingLeft: 6, alignItems:'center' }}>
                  <ProgressCircle
                    percent={50}
                    radius={30}
                    borderWidth={4}
                    color="#39a342"
                    shadowColor="#dbd9d9"
                    bgColor="#dbd9d9"
                  >
                    <Text style={{ fontSize: 18 }}>{'50%'}</Text>
                  </ProgressCircle>
                  <Text style={{ fontSize: 16, paddingTop: 5 }}>Health</Text>
                </View>
                <View style={{ paddingRight:6, paddingLeft: 6, alignItems:'center' }}>
                  <ProgressCircle
                    percent={70}
                    radius={30}
                    borderWidth={4}
                    color="#39a342"
                    shadowColor="#dbd9d9"
                    bgColor="#dbd9d9"
                  >
                    <Text style={{ fontSize: 18 }}>{'70%'}</Text>
                  </ProgressCircle>
                  <Text style={{ fontSize: 16, paddingTop: 5 }}>Fitness</Text>
                </View>
                <View style={{ paddingRight:6, paddingLeft: 6, alignItems:'center' }}>
                  <ProgressCircle
                    percent={40}
                    radius={30}
                    borderWidth={4}
                    color="#39a342"
                    shadowColor="#dbd9d9"
                    bgColor="#dbd9d9"
                  >
                    <Text style={{ fontSize: 18 }}>{'40%'}</Text>
                  </ProgressCircle>
                  <Text style={{ fontSize: 16, paddingTop: 5 }}>Mind</Text>
                </View>
              </View>
              
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
