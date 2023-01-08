//modaloverlay it is just the black background 

import {  Modal, ModalBody , ModalCloseButton, ModalContent, ModalFooter, ModalHeader  } from "@chakra-ui/modal";
import { Button, ModalOverlay, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextField from "../TextField";
import  * as Yup from "yup";
import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { FriendContext, SocketContext } from "./Home";

const AddFriendModal = ({ isOpen, onClose }) => {

    const [error, setError] = useState("");
    const closeModal = useCallback(() => {
        setError("");
        onClose();
    },[onClose]);
    const { setFriendList } = useContext(FriendContext);
    const { socket } = useContext(SocketContext);
    return (
        <Modal isOpen={ isOpen } onClose={ closeModal }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>add a friend! </ModalHeader>
                <ModalCloseButton />
                <Formik 
                    initialValues={{ friendName: "" }} 
                    onSubmit = {values => {
                        socket.emit(
                            "add_friend", 
                            values.friendName,
                            ({ errorMsg, done , newFriend }) => {
                                if(done){
                                    setFriendList(c => [newFriend, ...c]);
                                    closeModal();
                                    return;
                                }
                                setError(errorMsg);
                                //console.log(values);
                            }
                        );
                    }}
                    validationSchema = { Yup.object({
                        friendName : Yup.string().required("Username required").min(6 ,"Invalid username").max(28 , "Invalid username"),
                        }) 
                    }
                >
                    <Form>
                        <ModalBody>
                            <Heading  color="red.500" fontSize="xl" textAlign="center">{error}</Heading>
                            <TextField label= "Friend's name" placeholder="enter Friends username" name="friendName" />
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme ="blue" type="submit">
                                submit
                            </Button>
                        </ModalFooter>
                    </Form>
                </Formik>
            </ModalContent>
        </Modal>
    );
};

export default AddFriendModal;