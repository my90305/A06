import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Camera from './Camera';
import ElevatorController from './ElevatorController';
import ImgLink from './ImgLink';
import MainPage from './MainPage';
import PrismaClear from './PrismaClear';

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
        <Box>
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
        sx={{ borderRight: 1, borderColor: 'divider',width: 'auto'}}
      >
        <Tab label="首頁" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(0)} />
        <Tab label="監控畫面" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(1)} />
        <Tab label="電梯控制" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(2)} />
        <Tab label="相關連結" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(3)} />
        <Tab label="資料庫清空" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <h2>首頁</h2>
        <MainPage/>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <h2>監控畫面</h2>
        <Camera/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>電梯控制</h2>
        <ElevatorController/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>相關連結</h2>
        <ImgLink/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h2>資料庫清空</h2>
        <PrismaClear/>
      </TabPanel>
    </Box>
  );
}
