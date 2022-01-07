import React from 'react';
import { StyleSheet, ActivityIndicator, View, Alert, Modal } from 'react-native';

const LoadingScreen = () => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
        >
            <View style={styles.centeredView} >
                <View style={styles.centeredcontainer}>
                    <ActivityIndicator size="large" color="#085D7A" />
                </View>
            </View>
        </Modal>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    // Modal View style
    centeredcontainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
