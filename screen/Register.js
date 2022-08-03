import React, {useState} from "react";
import {View, StyleSheet, TextInput, Text, Image, TouchableOpacity, ScrollView, } from "react-native";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const handleSubmit = async () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPhone = /^[0-9\b]+$/;
    if (!fullName || !phone || !email || !password || !confirmPass){
      alert("All field should not be empty");
      setLoading(false);
      return;
    } else if (reg.test(email) === false){
      alert("Email Invalid");
      setLoading(false);
      return;
    } else if (regPhone.test(phone) === false){
      alert("Phone Invalid");
      setLoading(false);
      return;
    } else if (password != confirmPass){
      alert("Password and Confirm Password do not match");
      setLoading(false);
      return;
    }else if(password.length < 6){
      alert("Password must be more than 6 characteristics");
      setLoading(false);
      return;
    }
    try{
      alert("SignUp successfull");
    }catch(err){
      alert("Sign Up fail");
    }
  };

  const showPassword = () => {
    setHidePass(hidePass ? false : true);
  }
  const showPasswordConfirm = () => {
    setHideConfirmPass(hideConfirmPass ? false : true);
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <UserInput 
        name="FullName"
        value={fullName}
        setValue={setFullName}
        autoCapitalize="word" 
      />
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        autoCompleteType="email" 
      />
      <UserInput 
        name="Phone"
        value={phone}
        setValue={setPhone}
        keyboardType="numeric" 
      />
      <UserInput name="Password" secureTextEntry={hidePass ? true : false} value={password}  setValue={setPassword} />
      {/* Hide/Show password button */}
      <View style={styles.logoInput}>
        <TouchableOpacity onPress={() => showPassword()}>
          <Text>{hidePass ? "Show" : "Hide"}</Text>

        </TouchableOpacity>
      </View>

      <UserInput name="Confirm Password" secureTextEntry={hideConfirmPass ? true : false} value={confirmPass}  setValue={setConfirmPass}/>
      {/* Hide/Show password button */}
      <View style={styles.logoInput}>
        <TouchableOpacity onPress={() => showPasswordConfirm()}>
          <Text>{hideConfirmPass ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
        <Text>{loading ? "waiting..." : "Register"}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Do not have account? <Text onPress={() => navigation.navigate("LogIn")} style={{ color: "blue" }}>Login</Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  logo: {
    width: 270,
    height: 150,
    marginBottom: 10,
    marginVertical: 60,
  },
  title: {
    fontSize: 27,
    color: "#2b3494",
    fontWeight: "bold",
    marginBottom: 30,
  },
  submit: {
    backgroundColor: "#FF9900",
    height: 40,
    justifyContent: "center",
    borderRadius: 24,
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  logoInput: {
    position: "relative",
    top: -45,
    right: -130,
  },
  eye: {
    height: 20,
    width: 30,
  }
});
export default Register;
