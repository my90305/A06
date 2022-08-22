#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <SPI.h>
#include <MFRC522.h>
#include "LED_HIGH.h"
#include "LED_LOW.h"
#include "WIFI_SET.h"

constexpr uint8_t RST_PIN = D3;
constexpr uint8_t SS_PIN = D4;
MFRC522 rfid(SS_PIN, RST_PIN);
MFRC522::MIFARE_Key key;
String tag1;
String tag;

/*const char* ssid = "andy";
const char* password = "andy90121";*/

//URL路徑或IP位置
String serverName = "http://192.168.137.1:3000/api/gossiping/1/";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (1000)
unsigned long timerDelay = 1000;

void setup() {
  Serial.begin(115200); 
  WIFI();
  /*WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }*/
  Serial.println("");
  Serial.print("Connecting to ");
  Serial.println(ssid);
  Serial.println("WiFi connected");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
  SPI.begin(); // Init SPI bus
  rfid.PCD_Init(); // Init MFRC522
  pinMode(D8, OUTPUT);
}

void loop() {
  if ( ! rfid.PICC_IsNewCardPresent())
    return;
  if (rfid.PICC_ReadCardSerial()) {
    for (byte i = 0; i < 4; i++) {
      tag += rfid.uid.uidByte[i];
    }

    Serial.println(tag);
    rfid.PICC_HaltA();}
  // Send an HTTP POST request depending on timerDelay
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      if(tag == "163157131167")
      {
        Serial.println("correct");
        serverName = serverName + tag ;
        LED_High();
      }
      else{
        Serial.println("error");
        serverName = serverName + tag;
        LED_Low();
      }
      String serverPath = serverName ;
      serverName=serverName+ "/";
      Serial.println(serverName);
      
      // Your Domain name with URL path or IP address with path
      http.begin(client, serverPath.c_str());
      
      // Send HTTP GET request
      int httpResponseCode = http.GET();
      
      if (httpResponseCode>0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        String payload = http.getString();
        Serial.println(payload);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
    tag = "";
    rfid.PICC_HaltA();
    rfid.PCD_StopCrypto1();
  }
}
