import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Camera from './Camera';
import ElevatorController from './ElevatorController';
import ImgLink from './ImgLink';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        centered
        sx={{ borderRight: 1, borderColor: 'divider',width: 'auto'}}
      >
        <Tab label="監控畫面" sx={{ typography: 'h4' ,fontWeight: 500}} {...a11yProps(0)} />
        <Tab label="電梯控制" sx={{ typography: 'h4' ,fontWeight: 500}} {...a11yProps(1)} />
        <Tab label="相關連結" sx={{ typography: 'h4' ,fontWeight: 500}} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <h2>監控畫面</h2>
        <Camera/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>電梯控制</h2>
        <ElevatorController/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>相關連結</h2>
        <ImgLink/>
      </TabPanel>
    </Box>
  );
}
