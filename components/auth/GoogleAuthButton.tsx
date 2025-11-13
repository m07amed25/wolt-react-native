import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
        <Ionicons name='logo-google' size={18} color={'#fff'} />
      <Text style={styles.googleStyletext}>Continue with google</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: '#4285f4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4
    },
    googleStyletext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
})

export default GoogleAuthButton