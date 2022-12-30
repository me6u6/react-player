import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Info.css';

const Info = () => {
	return (
		    <Tabs className="Info">
		        <TabList>
		            <Tab>概要</Tab>
		        </TabList>

		        <TabPanel>
		            <p>概要欄です</p>
		            <p>概要欄です</p>
		            <p>概要欄です</p>
		        </TabPanel>
		    </Tabs>
	);
};

export default Info;
