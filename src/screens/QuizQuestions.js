import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuizQuestions() {
    const route = useRoute();
    const { subject } = route.params || {};

    const questions = [
        {
            "title": " O que é Flutter?",
            "answers": [
                "Um banco de dados para apps mobile",
                "Um sistema operacional para celulares",
                "Um framework do Google para criar aplicativos móveis",
                "Uma linguagem de programação"
            ],
            "indexCorrect": 2
        }
    ]

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerQttQuestions}>
                <Image style={styles.image} source={require("../../assets/brain.png")}/>
                <Text style={styles.textQttQuestions}>1/10</Text>
                <Image style={styles.image} source={require("../../assets/doubt.png")} />
            </View>
            <View style={styles.containerAnswers}>
                <Text style={styles.answersTitle}>{questions[0].title}</Text>
                {
                    questions[0].answers.map(answer => (
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionText}>{answer}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={styles.containerFooter}>
                <Image style={styles.image} source={require("../../assets/brain.png")}/>
                <TouchableOpacity style={styles.seeLaterButton}>
                    <Text style={styles.seeLaterText}>Marcar para rever depois</Text>
                </TouchableOpacity>
                <Image style={styles.image} source={require("../../assets/doubt.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerQttQuestions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth:  1,
        borderBottomColor: '#1D6494'
    },
    containerAnswers: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderTopWidth:  1,
        borderTopColor: '#1D6494'
    },
    image : {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    textQttQuestions: {
        fontSize: 20
    },
    answersTitle: {
        fontSize: 20,
        paddingBottom: 15
    },
    optionText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    optionButton: {
        backgroundColor: '#1565C0',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 50
    },
    seeLaterText: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',

    },
    seeLaterButton: {
        backgroundColor: '#59A8DA',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50
    }
})
    