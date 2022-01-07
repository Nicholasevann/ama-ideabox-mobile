import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailCategory = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Category Name :</Text>
            <Text style={styles.text}>New Employee</Text>
            <Text style={styles.h2}>Type :</Text>
            <Text style={styles.text}>Child</Text>
            <Text style={styles.h2}>Parent :</Text>
            <Text style={styles.text}>Area Inovasi</Text>
            <Text style={styles.h2}>Status :</Text>
            <Text style={styles.text}>Active</Text>
            <Text style={styles.h2}>Created By :</Text>
            <Text style={styles.textnoedit}>-</Text>
            <Text style={styles.h2}>Created Date :</Text>
            <Text style={styles.textnoedit}>2021-09-08 14:30:39</Text>
            <Text style={styles.h2}>Updated By :</Text>
            <Text style={styles.textnoedit}>Zaid Zamanda</Text>
            <Text style={styles.h2}>Updated Date</Text>
            <Text style={styles.textnoedit}>2021-09-28 15:00:39</Text>
        </View>
    );
};

export default DetailCategory;

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {
        color: 'black',
        fontSize: 12,
        marginBottom: 10,
    },
    textnoedit: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#DBDBDB',
        borderColor: '#085D7A',
        marginBottom: 10,
        color: 'black',
        height: 20,
        fontSize: 12,
        paddingLeft: 7,
        paddingTop: 2,
    },
    h2: {
        fontSize: 14,
        fontWeight: '200',
        fontFamily: 'Roboto',
    },
});
