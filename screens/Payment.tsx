import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";

const ReservationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(""); // Added field
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [reservationDetails, setReservationDetails] = useState(null);

  const selectedDishes = [
    { name: "Dish 1", price: 150 },
    { name: "Dish 2", price: 200 },
  ];

  const totalDishesPrice = selectedDishes.reduce((sum, dish) => sum + dish.price, 0);
  const averagePrice = numberOfGuests
    ? totalDishesPrice / parseInt(numberOfGuests, 10)
    : 0;

  const handleFormSubmit = () => {
    if (!firstName || !lastName || !phoneNumber || !email || !roomType || !numberOfGuests) {
      Alert.alert("Please fill in all the details.");
      return;
    }
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = () => {
    if (!cardNumber || !cardExpiry || !cardCVV || !cardHolderName) {
      Alert.alert("Please complete the payment details.");
      return;
    }
    Alert.alert("Payment Successful!", "You can now submit your reservation.");
  };

  const handleFinalSubmit = () => {
    setReservationDetails({
      name: `${firstName} ${lastName}`,
      phone: phoneNumber,
      email: email,
      roomType: roomType,
      numberOfGuests: numberOfGuests,
      cardNumber,
      cardExpiry,
      cardCVV,
      cardHolderName,
      dishes: selectedDishes,
      totalDishesPrice,
      averagePrice,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Reservation Form</Text>

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Room Type/Preferences:</Text>
        <TextInput
          style={styles.input}
          value={roomType}
          onChangeText={setRoomType}
          placeholder="Enter room type or preferences"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Guests:</Text>
        <TextInput
          style={styles.input}
          value={numberOfGuests}
          onChangeText={setNumberOfGuests}
          placeholder="Enter the number of guests"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>

      {/* Payment Form */}
      {showPaymentForm && (
        <View style={styles.paymentForm}>
          <Text style={styles.paymentHeader}>Payment Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Card Number:</Text>
            <TextInput
              style={styles.input}
              value={cardNumber}
              onChangeText={setCardNumber}
              placeholder="Enter your card number"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Card Expiry Date:</Text>
            <TextInput
              style={styles.input}
              value={cardExpiry}
              onChangeText={setCardExpiry}
              placeholder="MM/YY"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Card CVV:</Text>
            <TextInput
              style={styles.input}
              value={cardCVV}
              onChangeText={setCardCVV}
              placeholder="Enter your CVV"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cardholder Name:</Text>
            <TextInput
              style={styles.input}
              value={cardHolderName}
              onChangeText={setCardHolderName}
              placeholder="Enter cardholder name"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handlePaymentSubmit}>
            <Text style={styles.buttonText}>Complete Payment</Text>
          </TouchableOpacity>
        </View>
      )}

      {showPaymentForm && (
        <TouchableOpacity style={styles.button} onPress={handleFinalSubmit}>
          <Text style={styles.buttonText}>Submit Reservation</Text>
        </TouchableOpacity>
      )}

      {/* Display Reservation Details */}
      {reservationDetails && (
        <View style={styles.reservationSummary}>
          <Text style={styles.summaryText}>Reservation Details:</Text>
          <View style={styles.slot}>
            <Text>Name: {reservationDetails.name}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Phone: {reservationDetails.phone}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Email: {reservationDetails.email}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Room Type: {reservationDetails.roomType}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Number of Guests: {reservationDetails.numberOfGuests}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Total Price of Dishes: R{reservationDetails.totalDishesPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.slot}>
            <Text>Average Price Per Person: R{reservationDetails.averagePrice.toFixed(2)}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  paymentForm: {
    marginTop: 30,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  paymentHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  reservationSummary: {
    marginTop: 30,
    padding: 20,
  },
  summaryText: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 18,
  },
  slot: {
    backgroundColor: "#cccccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ReservationForm;
