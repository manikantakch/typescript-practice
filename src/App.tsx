import React from 'react'
import './App.css';
import AccordionComponent from './components/accordion';
import ChakraTabs from './components/tabs';
import {ChakraProvider,Box,Text} from '@chakra-ui/react';
import { theme } from './thems';
import AuthorsList from './components/authorsList.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
    {/* <div className="App">
   <div>This is dev</div>
   <AccordionComponent />
   <ChakraTabs />

<Box as="span" className='my-box'>
  here you can
   <Box as="span" color="red.500"   sx={{'.my-box:hover &': {
          color: 'green.500',
        }}}> And I will turn green</Box>

</Box> */}

{/* <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
  textAlign={[ 'left','center' ]}
>
  Quotes App
</Text> */}

<AuthorsList />





   
    {/* </div> */}
    </ChakraProvider>
  );
}

export default App;
