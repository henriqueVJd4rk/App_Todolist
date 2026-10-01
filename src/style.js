import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(40, 73, 145, 0.67)'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40,
        color: '#fff'
    },
    subtitle: {
        fontSize: 14,
        color: 'rgb(183, 181, 181)',
        marginBottom: 20
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 16
    },
    addButton: {
        backgroundColor: '#4a6cf7',
        width: 50,
        marginLeft: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginTop: 8
    },
    taskLeft:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#4a6cf7',
        borderRadius: 6,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxDone: {
        backgroundColor: '#10b981',
        borderColor: '#10b981'
    },
    checkmark: {
        color: '#fff',
        fontWeight: 'bold'
    },
    taskText: {
        fontSize: 16,
        flexShrink: 1
    },
    taskTextDone: {
        textDecorationLine: 'line-through',
        color: '#999'
    },
    remove: {
        color: '#ef4444',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10
    }

})
