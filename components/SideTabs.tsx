import * as React from 'react';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ElevatorController from './ElevatorController';
import ImgLink from './ImgLink';
import MainPage from './MainPage';
import PrismaClear from './PrismaClear';
import styles from './sideTabs.module.css'
import Tabs, { tabsClasses } from '@mui/material/Tabs';

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
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Box 
         justifyContent="center"
         display="flex"
         width='100%'
         sx={{ bgcolor: 'rgb(243, 241, 238)'}}>
        <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons
            aria-label="visible arrows tabs example"
            className={styles.tab}
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
        >
          <Tab label="首頁" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(0)} />
          <Tab label="電梯控制" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(1)} />
          <Tab label="相關連結" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(2)} />
          <Tab label="資料庫清空" sx={{ typography: 'h6' ,fontWeight: 400}} {...a11yProps(3)} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0} >
        <h2  className={styles.title}>
            首頁</h2>
        <Box sx={{ minWidth: 900,
               minHeight: 450,}}
               alignItems="center"
               justifyContent="center"
               display="flex"
               margin= "auto">
          <MainPage/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h2  className={styles.title}>
            電梯控制</h2>
        <Box sx={{ minWidth: 900,
               minHeight: 450,}}
               alignItems="center"
               justifyContent="center"
               display="flex"
               margin= "auto">
          <ElevatorController/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2  className={styles.title}>
            相關連結</h2>
        <Box sx={{ minWidth: 900,
               minHeight: 450,}}
               alignItems="center"
               justifyContent="center"
               display="flex"
               margin= "auto">
          <ImgLink/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h2  className={styles.title}>
            資料庫清空</h2>
        <Box sx={{ minWidth: 900,
               minHeight: 450,}}
               alignItems="center"
               justifyContent="center"
               display="flex"
               margin= "auto">
          <PrismaClear/>
        </Box>
      </TabPanel>
    </Box>
  );
}
