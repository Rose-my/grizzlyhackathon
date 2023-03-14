import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function Header () {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
          <TouchableOpacity>
          <Entypo name="home" size={34} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesome5 name="wallet" size={34} color="white" />
          </TouchableOpacity>
          </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      width:"100%",
      backgroundColor:"black",
      alignItems: 'center',
      justifyContent:'space-between',
      padding:30,
      
      flexDirection:"row",
    }
});