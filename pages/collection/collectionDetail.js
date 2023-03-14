import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import React from "react";

import { SimpleLineIcons } from '@expo/vector-icons';
import Header from '../../components/header';

const icons ={
  "homes": "home",
  "wallets" :"wallet"
}
export default function CollectionDeatil() {
  const handlePress = () => {
    console.log('link to solana pay');
  };
    return (
      <>
      <View style={styles.container}>
        <View style={styles.content}>
        <StatusBar style="light" />
        <Header/>
          <View style={styles.elemone}>
            <View style={styles.userInfo}>
            <Image
            style={styles.profile}
            source={require('../assets/character.png')}
          />
            </View>
            <View style={styles.user}>
              <Text style={styles.username}>Seobin Won</Text>
              <Text style={styles.id}>@won_seobin_</Text>
            </View>
          </View>
          <View style={styles.elemtwo}>
            <View style={styles.userComment}>
              <Text style={styles.nfttitle}>NFTs</Text>
              <Text style={styles.nftnum}>2</Text>
            </View>
            <View style={styles.userComment}>
              <Text style={styles.tumtitle}>Tumbler</Text>
              <Text style={styles.tumnum}>15</Text>
            </View>
          </View>
          <View style={styles.border}>
          <Image
            style={styles.mintimg}
            source={require('../assets/mint.png')}
          />
          </View>
          <View style={styles.solanapay}>
          
          <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handlePress}>
          <Image
            style={styles.solanaimage}
            source={require('../assets/solanapay.png')}
          />
          </TouchableOpacity>
          </View>
          </View>
          <View style={styles.upload}>
            <TouchableOpacity>
             <View style={styles.nftcollection}>
              <Text style={styles.nftusername} >Seobin Won's</Text>
              <Text style={styles.nftcollectiontitle}>NFT Collection</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.picture}>
             <SimpleLineIcons name="picture" size={50} color="white"/>
            </View>              
            </TouchableOpacity>

          </View>
      </View>
    </View></>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
  },
  border:{
    flex:0.2,
    backgroundColor:"white",
    alignItems:"center",
  },
  mintimg:{
    height:70,
    width:400,
  },
  content: {
    flex:1,
  },
  user : {
    marginLeft:20,
    padding :10,
    backgroundColor:"black",
  },
  username :{
    fontSize:25,
    color:"white",
    fontWeight: "800",
    borderRightColor:"white",
  },
  id :{
    fontSize : 10,
    color:"white",
    marginLeft :2,
  },
  elemone: {
    flex:0.17,
    backgroundColor:"black",
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "left",
    borderBottomWidth:0.5,
    padding: 13,
  },
  elemtwo: {
    flex:0.2,
    backgroundColor:"black",
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    borderColor:'black',
    borderBottomWidth:0.5,
    padding: 18,
  },
  nfttitle:{
    fontSize : 20,
    color :"white",
    fontWeight:"800",
    
  },
  tumtitle:{
    fontSize : 20,
    color :"white",
    fontWeight:"800",

  },
  nftnum:{
    fontSize : 30,
    color:"white",
    fontWeight: "500",
    marginLeft: 10, 
  },
  tumnum:{
    fontSize : 30,
    color:"white",
    fontWeight: "500",
    marginLeft: 20, 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'black',
  },

  profile: {
    marginLeft:10,
    padding : 10,
    width: 80,
    height: 80,
    borderRadius: 40, 
  },
  upload:{
    flex:0.3,
    backgroundColor:"white",
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    borderColor:"white",
    padding: 18,
    marginBottom:100,
  },
  solanapay:{
    flex:0.6,
    backgroundColor:"white",
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
    borderColor:"white",
    borderBottomWidth:0.5,
    padding: 18,
  },
  solanaimage:{
    width:300,
    height:130,
    borderRadius: 6,
  },
  nftcollection:{
    rowGap:-20,
    backgroundColor:"black",
    borderRadius: 4,
    height: 120,
    width:180,
    
  },
  picture:{
    height: 120,
    alignItems: 'center',
    justifyContent:"center",
    width:100,
    backgroundColor:"black",
    borderRadius: 4,
    borderColor:"black",
  },
  nftusername:{
    fontSize:17,
    color:"white",
    fontWeight: "500",
    marginLeft:-10,
    padding :30,
  },
  nftcollectiontitle:{
    marginLeft:10,
    padding :10,
    fontSize:22,
    color:"white",
    fontWeight:"800",
  },

});