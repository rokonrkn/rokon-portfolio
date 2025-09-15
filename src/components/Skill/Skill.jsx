import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json') // ✅ Important: leading slash if file is inside public/
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.error("Failed to load skills.json", err));
    }, []);

    const tabsItem = ["Front-End", "Back-End", "Tools & Others"];

    const frontEndSkills = skills.filter(s => s.catagory === 'frontend');
    const backEndSkills = skills.filter(s => s.catagory === 'backend');
    const toolsSkills = skills.filter(s => s.catagory === 'tools');

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
                        {tabsItem.map((item, index) => (
                            <Tab key={index}>{item}</Tab>
                        ))}
                    </TabList>

                    {/* Front-End */}
                    <TabPanel>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8 ">
                            {frontEndSkills.length > 0 ? (
                                frontEndSkills.map(skill => (
                                    <div className="bg-[#222222] p-4 rounded-xl flex flex-col items-center  space-y-4" key={skill.id}>
                                        <img width={100} height={100} src={skill?.icon} alt={skill?.title} />
                                        <p className='text-xl'>{skill?.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No front-end skills found</p>
                            )}
                        </div>
                    </TabPanel>

                    {/* Back-End */}
                    <TabPanel>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                            {backEndSkills.length > 0 ? (
                                backEndSkills.map(skill => (
                                    <div className="bg-[#222222] p-4 rounded-xl flex flex-col items-center  space-y-4" key={skill.id}>
                                        <img width={100} height={100} src={skill?.icon} alt={skill?.title} />
                                        <p className='text-xl'>{skill?.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No back-end skills found</p>
                            )}
                        </div>
                    </TabPanel>

                    {/* Tools */}
                    <TabPanel>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                            {toolsSkills.length > 0 ? (
                                toolsSkills.map(skill => (
                                    <div className="bg-[#222222] p-4 rounded-xl flex flex-col items-center  space-y-4" key={skill.id}>
                                        <img width={100} height={100} src={skill?.icon} alt={skill?.title} />
                                        <p className='text-xl'>{skill?.title}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No tools & others found</p>
                            )}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Skill;
