import { Alert, AlertTitle } from '@chakra-ui/react'
import React from 'react'


const AlertMsg = ({ status, icon, msg}) =>  {
  return (
    <Alert status={`${status ? status : "info"}`}>
      {icon}
    <AlertTitle m1={20}> {msg}</AlertTitle>
  </Alert>
  );
};

export default AlertMsg