import React from 'react';
import {View,Text,Dimensions,StyleSheet,Image} from 'react-native';
import { Assets } from '../assets';
import { Colors } from '../common/colors';
export default function Splash(props){
    return(
        <View style={styles.container}>
              <Image source={Assets.feed} style={styles.image}/>
            <Text style={styles.title}>Feeds App</Text>
        </View>    
    )
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: Colors.primaryGreen,
      justifyContent:'center',
      alignItems:'center',
      padding: 5,
    },
    title:{
        fontSize:height*0.1,
        fontWeight:'bold',
        color:Colors.navy
    },
    image:{
        width:width*0.2,
        height:height*0.2,
        resizeMode:'contain'
    }
  });