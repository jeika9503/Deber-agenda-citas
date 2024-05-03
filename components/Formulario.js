import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Formulario() {

    //DataPicker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    // DataPicker
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    // manejar la confirmación de la fecha seleccionada
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    // Renderizado de los componentes de la interfaz de usuario
    return (
        <>
            <View style={styles.formulario}>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Teléfono de contacto: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Síntomas: </Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                />
            </View>

            <View>
                <Button title="Mostrar Selector de Fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,

    },

});
