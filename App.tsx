import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import CardJob from './components/CardJob';
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F7F7F7'}}>
      <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          padding: 15,
          paddingTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Image source={require('./assets/img/profile.png')}></Image>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 0,
              paddingLeft: 5,
            }}>
            <Text style={{color: '#2C2727', fontWeight: 'bold', fontSize: 14}}>
              Good morning
            </Text>
            <Text style={{color: '#2C2727', fontSize: 12}}>Imam Ngoding</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}>
            <Image source={require('./assets/img/Search.png')}></Image>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}>
            <Image source={require('./assets/img/Notification.png')}></Image>
          </View>
        </View>
      </View>
      {/* Reminder */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: '#FFDC62',
          marginHorizontal: 15,
          borderRadius: 15,
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Remainder
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'medium',
              color: '#000',
              marginTop: 5,
            }}>
            Interview at Zoom in 2 hours
          </Text>
        </View>
        <View>
          <Text style={{color: '#000'}}>19.30</Text>
        </View>
      </View>
      {/* FeaturedJob */}
      <View style={{flexDirection: 'column', paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
            Featured Job
          </Text>
          <Text style={{color: '#F2994A'}}>See all</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text>IT</Text>
          </View>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text>IT</Text>
          </View>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text>IT</Text>
          </View>
        </View>
      </View>
      {/* Card Job */}
      <CardJob />
      <CardJob />
      <CardJob />
      <CardJob />
      </ScrollView>
      <View style={{position: 'absolute', flexDirection: 'row', flexWrap: 'wrap', bottom: 0, width: '100%', paddingVertical: 30, paddingHorizontal: 30, backgroundColor: '#fff', zIndex: 100}}>
        <View style={{width: '25%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./assets/img/Home.png')} style={{width: 25, height: 25}}></Image>
        </View>
        <View style={{width: '25%',justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./assets/img/Search.png')} style={{width: 25, height: 25}}></Image>
        </View>
        <View style={{width: '25%', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./assets/img/Setting.png')} style={{width: 25, height: 25}}></Image>
        </View>
        <View style={{width: '25%', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./assets/img/logoProfile.png')} style={{width: 25, height: 25}}></Image>
        </View>
        
       
      </View>
    </SafeAreaView>
  );
};

export default App;
