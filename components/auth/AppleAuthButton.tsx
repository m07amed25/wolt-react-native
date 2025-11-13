import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
        <Ionicons name='logo-apple' size={18} color={'#fff'} />
      <Text style={styles.appleStyletext}>Sign in with apple</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    appleButton: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4
    },
    appleStyletext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
})

export default GoogleAuthButton