// LogoutModal.js
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

import {logout} from '../Redux/authSlice'

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
   
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Logout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to logout?
        </ModalBody>
        <ModalFooter>
         <Link to='/log-in'>
          <Button colorScheme="blue" mr={3} onClick={onLogout}>
            Logout
          </Button>
         
         </Link>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
