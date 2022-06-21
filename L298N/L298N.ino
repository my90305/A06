#include <ESP8266WiFi.h>

const char* ssid = "好了啦文書機"; // 設定欲連接無線網路名稱
const char* password = "00001111"; // 設定欲連接無線網路密碼

int ENB = 15;
int IN3 = 0;
int IN4 = 2;

WiFiServer server(80);

void setup() {
  Serial.begin(115200);
  
  pinMode(ENB, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

  // 連接wifi
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  server.begin();
  Serial.println("Server started");
 
  // 輸出IP位置
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
}

void loop() {
  // 確認是否連接
  WiFiClient client = server.available();
  if (!client) 
  {
    return;
  }
 
  // 等待發送資料
  Serial.println("new client");
  while(!client.available())
  {
    delay(1);
  }

  // 讀取請求
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();
 
  // 依照請求去做連接
  int value = 1;
  if (request.indexOf("/MOTOR=FRONT") != -1)  
  {
    Serial.println("MOTOR=FRONT");
    analogWrite(ENB, 255);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    delay(2000);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    value = 1;
  }
  if (request.indexOf("/MOTOR=BACK") != -1)  
  {
    Serial.println("MOTOR=BACK");
    analogWrite(ENB, 255);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    delay(2000);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    value = 0;
  }
  if (request.indexOf("/MOTOR=STOP") != -1)  
  {
    Serial.println("MOTOR=STOP");
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    value = 2;
  }
  //回復
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println(""); //  this is a must
  client.println("<!DOCTYPE HTML>");
  client.println("<html>");
  client.println("<head><title>ESP8266 MOTOR Control</title></head>");
  client.print("Motor is now: ");
 
  if(value == 1) 
  {
    client.print("FRONT");
  } 
  else if(value == 0)
  {
    client.print("BACK");
  }
  else
  {
    client.print("STOP");
  }
  client.println("<br><br>");
  client.println("Turn <a href=\"/MOTOR=FRONT\">FRONT</a> MOTOR<br>");
  client.println("Turn <a href=\"/MOTOR=BACK\">BACK</a> MOTOR<br>");
  client.println("Turn <a href=\"/MOTOR=STOP\">STOP</a> MOTOR<br>");
  client.println("</html>");
 
  delay(1);
  Serial.println("Client disonnected");
  Serial.println("");
}
