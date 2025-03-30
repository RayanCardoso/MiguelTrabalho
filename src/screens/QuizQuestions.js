import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';

export default function QuizQuestions() {
    const route = useRoute();
    const { subject } = route.params || {};

    return (
        <Text>{subject}</Text>
    )
}