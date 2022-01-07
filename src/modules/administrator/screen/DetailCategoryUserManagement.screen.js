import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Back } from '../../../assets/icon';
import DetailCategory from '../../../components/DetailCategory';
import SearchHeader from '../../../components/SearchHeader';

const DetailCategoryUserManagement = ({ navigation, route }) => {
    const data = route.params.data;
    return (
        <View style={styles.container}>
            <SearchHeader />
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Back />
                    </TouchableOpacity>
                    <Text style={styles.textEdit}>Detail User</Text>
                </View>
                <ScrollView >
                    <View style={styles.inputContainer}>
                        <DetailCategory />
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

export default DetailCategoryUserManagement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentContainer: {
        margin: 20,
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        paddingBottom: 70,
    },
    titleContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    textEdit: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#085D7A',
        alignSelf: 'center',
        marginLeft: 120,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: '35%',
        height: 35,
        borderRadius: 10,
        backgroundColor: '#085D7A',
        alignSelf: 'flex-end',
    },
    save: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
