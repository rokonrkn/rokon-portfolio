import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skill = () => {

    const tabsItem =["Front-End", "Back-End", "Tools & Others"];

    return (
        <div>
            <div className="page-name">
                <h1 className="lg:text-3xl sm:text-2xl">Skills</h1>
                <hr className="w-20" />
                <hr className="mt-2 w-10" />
            </div>
            <div className="md:mt-16">
                <Tabs>
                    <TabList>
                        {
                            tabsItem.map((item, index) => <Tab key={index}>{item}</Tab>)
                        }
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Skill;