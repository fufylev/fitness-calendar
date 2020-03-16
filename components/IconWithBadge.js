import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconWithBadge({ name, badgeCount, color, size }) {
    return (
        <View style={{ width: 30, height: 30, margin: 5 }}>
            <MaterialCommunityIcons name={name} size={size} color={color} />
            {badgeCount > 0 && (
                <View
                    style={{
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
                </View>
            )}
        </View>
    );
}
