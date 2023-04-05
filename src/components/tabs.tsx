import React from 'react';
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';


const ChakraTabs = () => {

return (
    <>
    <Tabs >
        <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>One!</TabPanel>
            <TabPanel>Two!</TabPanel>
            <TabPanel>Three!</TabPanel>
        </TabPanels>
    </Tabs>

    </>
)



}

export default ChakraTabs