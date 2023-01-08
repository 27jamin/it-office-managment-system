import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AccountContext } from "../AccountContext";
import TextField from "../TextField";
//instance of passing it has argument to a function we are passing it has object to props to ha components


const SignUp = () => {

    const { setUser } = useContext(AccountContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    return (
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .required("Username required")
              .min(6, "Username too short")
              .max(28, "Username too long!"),
            password: Yup.string()
              .required("Password required")
              .min(6, "Password too short")
              .max(28, "Password too long!"),
          })}
          onSubmit={(values, actions) => {
            const vals = { ...values };
            actions.resetForm();
            fetch(`http://localhost:4000/auth/signup`, {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            }).catch(err => {
                return;
              }).then(res => {
                if(!res || !res.ok || res.status >= 400){
                   return;
                }
                return res.json();
              }).then(data => {
                if(!data) return;
                setUser({ ...data });
                if (data.status){
                  setError(data.status);
                }else if (data.loggedIn){
                  localStorage.setItem("token", data.token);
                  navigate("/home");  
                }
              });
            }}
        >
            
                <VStack as={Form} w={{ base: "90%", md : "500px" }} m="auto" justify="center" h= "100vh" spacing="1rem" >
            
                    <Heading> Sign Up </Heading>

                    <Text as="p" color="red.500">{error}</Text>
                    
                    <TextField name = "username" placeholder="Enter Username" label="Username" />
        
                    <TextField name = "password" placeholder="Enter Password" type="password" label="Password" />
        
                    <ButtonGroup pt="1rem">
                        <Button colorScheme="teal" type="submit">Create Account</Button>
                        <Button onClick={() => navigate("/")} leftIcon ={<ArrowBackIcon />} > Back</Button>
                    </ButtonGroup>
                </VStack>
           
        </Formik>
    );
}

export default SignUp;