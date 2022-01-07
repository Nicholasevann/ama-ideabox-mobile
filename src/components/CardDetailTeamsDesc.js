import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardDetailTeamDesc = props => {
    return (
        <View style={styles.cardContent}>
            <View style={styles.title}>
                <Text>1</Text>
            </View>
            <View style={styles.email}>
                <Text>Karyawantelkom @telkom.id</Text>
            </View>
            <View style={styles.email}>
                <Text>79120</Text>
            </View>
            <View style={styles.email}>
                <Text>Telekomunikasi Indonesia (Persero) Tbk, PT</Text>
            </View>
        </View>
    );
};

export default CardDetailTeamDesc;

const styles = StyleSheet.create({
    title: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto-Regular',
    },
    email: {
        flex: 2,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto-Regular',
    },
    cardContent: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    rightSwipeItem: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        marginBottom: 10,
        marginTop: 10,
    },
});
