import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
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

function a11yProps(index: string) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MainPage() {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 600,
               minHeight: 450,}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">標題</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Title"
          onChange={handleChange}
        >
          <MenuItem value={"0"} {...a11yProps("0")}>
            故事大綱
          </MenuItem>
          <MenuItem value={"1"} {...a11yProps("1")}>
            場地規劃圖
          </MenuItem>
          <MenuItem value={"2"} {...a11yProps("2")}>
            實境密室逃脫遊戲是甚麼
          </MenuItem>
          <MenuItem value={"3"} {...a11yProps("3")}>
            甘特圖
          </MenuItem>
          <MenuItem value={"4"} {...a11yProps("4")}>
            設計流程圖
          </MenuItem>
          <MenuItem value={"5"} {...a11yProps("5")}>
            系統流程圖
          </MenuItem>
        </Select>
      </FormControl>
      <TabPanel value={value} index={"0"}>
        <p>
          玩家的身分是文化大學的學生，考完期末考最後一科準備放寒假，但是他們沒有要這麼早離開學校，他們打算留到晚上來夜遊校園。{" "}
          <br />
          <br />
          晚上他們選擇夜遊文化大學最陰森的大仁館，傳說大仁館所在處是陰陽交界，為了鎮邪所以設計成八卦狀，但施工時圖紙拿反，所以意外蓋成容易聚陰的反八卦，電梯也變成通往陰間的入口……。
          <br />
          鐵齒的他們果真在電梯裡被來自陰間的鬼魂困住，他們發現電梯不管怎樣都會超重，他們只好一個一個出去，
          <br />
          直到電梯裡剩下兩個人的時候，超重的聲音才消失，然後電梯內的燈光開始閃爍，電梯門突然自己關上，燈光全暗、發出恐怖音效，數秒後電梯陰間那面的門打開，
          <br />
          一個日記本殘頁和一張女生的學生證還有一還有一台手機出現在他們眼前，且電梯門外一片幽暗中傳出陣陣痛苦的低鳴。{" "}
          <br />
          <br />
          這時原本沉睡在校園的文化大學創辦校長-張曉風校長出現了，祂本來想叫在外面遊蕩的學生快回家睡覺，但發現事情好像不對勁，
          <br />
          所以來到他們中間並且訴說大仁館鬼魂的故事，幫助他們這些學生脫困。原來把他們困在這裡的鬼魂曾經也是文化大學的學生，是他們的學姊，
          <br />
          某天晚上在學校墜樓，自殺了，沒人知道他為什麼自殺，大家本以為這件事就這樣不了了之，但也許活著的人能在時間的流動下拂去她過世帶來的陰霾，
          <br />
          死去的人卻可能不盡然。自殺後墮入陰間的她，身上的痛苦從陽間解脫了，但其實是含冤自殺的祂，內心的仇恨從沒消散過，所以祂時不時會從大仁這個陰陽通道穿越回來想要展開祂的報復。{" "}
          <br />
          <br />
          玩家必須要蒐集全部散布在場內的他的日記殘頁，得知原來她是被霸凌後才自殺，並且將這本日記交給媒體記者公之於眾，
          <br />
          讓大家知道他真正的死因，並讓加害者們受到懲罰，解開祂心上的結就可以通關離開。
        </p>
      </TabPanel>
      <TabPanel value={value} index={"1"}>
        <img
          key={"/Img/SitePlanning.png"}
          src={"/Img/SitePlanning.png"}
          alt={"SitePlanning"}
          width={"100%"}
          height={"100%"}
        />
      </TabPanel>
      <TabPanel value={value} index={"2"}>
        <p>
          真人密室逃脫最初脫胎於一類線上益智類遊戲，玩具需要點擊房間內的物品，找到各個線索之間的聯繫，最終逃出房間。這類小遊戲後來被開發出了線下版本，就是所謂的「實境密室逃脫」了。
          <br/>
          <br/>
          實境遊戲的特色在於「真實」，無論在電視、電腦、電影、甚至幻想中出現的情節，都可以透過實境遊戲的真實呈現，讓參與者感受比以往更身歷其境的體驗，
          <br/>
          不僅如此，在實境遊戲的過程中，人與人之間的互動也是真實的，為了達成目標而共同努力的經歷，將會培養出更深厚的革命情感，加深人與人之間的連結。
          <br/>
          <br/>
          實境密室逃脫最早出現在電腦，真人版的密室逃脫遊戲是由美國矽谷有一群工程師創立一間名為Orgin的工作室，
          <br/>
          最初在2006年，根據知名推理小說作者阿嘉莎˙克莉絲蒂(Agatha Christie)的作品，設計一系列現實場景，來提供給他們的員工來進行的解謎遊戲。
        </p>
      </TabPanel>
      <TabPanel value={value} index={"3"}>
      <img
          key={"/Img/GanttChart.png"}
          src={"/Img/GanttChart.png"}
          alt={"GanttChart"}
          width={"100%"}
          height={"100%"}
        />
      </TabPanel>
      <TabPanel value={value} index={"4"}>
      <img
          key={"/Img/DesignFlowChart.png"}
          src={"/Img/DesignFlowChart.png"}
          alt={"DesignFlowChart"}
          width={"100%"}
          height={"100%"}
        />
      </TabPanel>
      <TabPanel value={value} index={"5"}>
      <img
          key={"/Img/SystemFlowChart.jpg"}
          src={"/Img/SystemFlowChart.jpg"}
          alt={"SystemFlowChart"}
          width={"100%"}
          height={"100%"}
        />
      </TabPanel>
    </Box>
  );
}
