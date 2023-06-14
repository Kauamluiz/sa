import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton'
import { Context } from '../../context/dataContext'

const Setors = ({navigation}) => {

  const { state, dispatch } = useContext(Context);


  const [setors, setSetors] = useState({});

  useEffect(() => {
      const onScreenLoad = async () => {
          const list = await api.get('/setor/find');
          setSetors(list.data.setors)
          dispatch({type: "update", payload: false})
      }
      onScreenLoad();
  }, [state.update]
  )

  const seeReview = async (item) => {
      await dispatch({type: 'setRestaurant', payload: item});
      //navigation.navigate('RestaurantReviews');
  }

  const newReview = async (item) => {
      await dispatch({type: 'setRestaurant', payload: item});
      console.log(item)
      navigation.navigate('SalasDoSetor');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setores</Text>

        {state.isAdmin ? (

        <CustomButton text='cadastrar novo setor' onPress={() => navigation.navigate("NovoSetor")} />

          ) : (
          
            <></>
          
          )
        }

      <FlatList
          data={setors}
          renderItem={({ item }) => {
              return (
                  <View style={styles.containers}>
                      <TouchableOpacity style={styles.texts} onPress={() => seeReview(item)}>
                              <Text style={styles.title}>{item.setor}</Text>
                              <Text style={styles.item}>{item.sala}</Text>
                      </TouchableOpacity>
                      <Entypo
                          name="squared-plus"
                          size={60}
                          color="green"
                          style={styles.icon}
                          onPress={() => newReview(item)}
                      />
                  </View>
              )
          }
          }
          keyExtractor={(item) => item.id}
      />


    
    </View>
  )
}

export default Setors

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
    text:{
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 20
    },
    containers: {
      flexDirection: "row",
      flexWrap: "wrap",
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      minWidth: 335
    },
    texts: {
        height: 120,
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    item: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        margin: 0
    }
});