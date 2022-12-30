import { useState } from 'react';
import logo from '../logo.png';
import {
    Input, FormControl, FormHelperText, FormErrorMessage,
    Center, VStack, HStack, Button
} from '@chakra-ui/react';

const Query = () => {
    const [input, setInput] = useState('');
    const handleInputChange = (e) => setInput(e.target.value);
    const submitSong = () => {
        if (input == null) {
            setInput('');
        }
        //  Get song Name Here
    }
    const isError = input === '';

    return (
        <div>
            <Center h='500px'>
                <VStack spacing={10}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <FormControl isInvalid={isError}>
                        <HStack w='403px'>
                            <Input value={input} onChange={handleInputChange} />
                            <Button colorScheme='green' onClick={submitSong}>
                                submit
                            </Button>
                        </HStack>
                        {!isError ? (
                            <FormHelperText>
                                Enter a song to search for...
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Song name is required.</FormErrorMessage>
                        )}
                    </FormControl>
                </VStack>
            </Center>
        </div>
    );
}


export default Query;