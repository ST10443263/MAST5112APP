import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment"; // for date formatting

const ReservationPlatform = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleSubmit = () => {
    if (!date || !time || !people) {
      Alert.alert("Please complete all fields.");
      return;
    }

    navigation.navigate("Payment", {
      date,
      time,
      people,
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(moment(selectedDate).format("YYYY-MM-DD"));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    setTime(moment(selectedTime).format("HH:mm"));
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Reservation Platform</Text>

      {/* Date Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text style={styles.inputText}>{date || "Select Date"}</Text>
        </TouchableOpacity>
      </View>

      {/* Time Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Time:</Text>
        <TouchableOpacity style={styles.input} onPress={showTimePicker}>
          <Text style={styles.inputText}>{time || "Select Time"}</Text>
        </TouchableOpacity>
      </View>

      {/* Number of People */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of People:</Text>
        <TextInput
          style={styles.input}
          value={String(people)}
          onChangeText={(text) => setPeople(Number(text) || 1)}
          placeholder="Number of People"
          keyboardType="numeric"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Reservation</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      {/* Time Picker Modal */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080", // Updated page background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    padding: 10,
    backgroundColor: "#cccccc", // Updated background color for slots
    borderColor: "#555555", // Darker border color
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  inputText: {
    color: "#000",
  },
  button: {
    padding: 15,
    backgroundColor: "#000", // Updated button background
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReservationPlatform;
