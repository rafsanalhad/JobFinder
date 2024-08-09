import React from 'react'
import {View, Text, Image} from 'react-native'
const CardJob = () => {
  return (
    <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'column',
          backgroundColor: '#fff',
          marginTop: 12,
        }}>
        <View
          style={{backgroundColor: '#fff', padding: 18, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#F7F7F7',
              width: 60,
              height: 60,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../assets/img/Search.png')}></Image>
          </View>
          <View style={{marginLeft: 5}}>
            <Text style={{color: '#000', fontSize: 12}}>Telegram</Text>
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
              Junior UI Designer
            </Text>
            <Text style={{color: '#000', fontSize: 8}}>
              Jakarta-Indonesia onsite
            </Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Image source={require('../assets/img/Notification.png')}></Image>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 0,
            paddingHorizontal: 18,
          }}>
          <View
            style={{
              backgroundColor: '#F7F7F7',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{color: '#000'}}>IT</Text>
          </View>
          <View
            style={{
              backgroundColor: '#F7F7F7',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{color: '#000'}}>IT</Text>
          </View>
          <View
            style={{
              backgroundColor: '#F7F7F7',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{color: '#000'}}>IT</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 18}}>
          <Text style={{color: '#000', fontSize: 10, marginTop: 5, marginBottom: 20}}>Let’s join us and being our Junior UI Designer!</Text>
        </View>
      </View>
  )
}

export default CardJob
