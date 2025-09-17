import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.IconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#FFF'/>
            <Text style={styles.IconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    IconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconButtonLabel: {
        color: '#FFF',
        marginTop: 12
    }
})