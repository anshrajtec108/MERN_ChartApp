import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const[name,setname]=useState()
  const [email, setemail] = useState()
  const [confirmpassword, setconfirmpassword] = useState()
  const [password, setpassword] = useState()
  const [pic, setpic] = useState()
  const postDetails=()=>{}
  const submitHandler=()=>{}
  return (
   <VStack spacing="5px">
    <FormControl id="frist-name" isRequired>
      <FormLabel>Name</FormLabel>
      <Input 
      placeholder='Enter your Name'
      onChange={(e)=>setname(e.target.value)}
      />
    </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input 
        type="email"
         placeholder='Enter your Email Address'
          onChange={(e) => setemail(e.target.value)}
           />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        
      >
        Sign Up
      </Button>

   </VStack>
  )
}

export default Signup
