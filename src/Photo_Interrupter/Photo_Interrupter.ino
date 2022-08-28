#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <SPI.h>
#include "WIFI_SET.h"

int Led = 13; // define LED pin
int P_I = 14; // define photo interrupter signal pin
int val; //define a numeric variable
int val1;

void setup()
{
    Serial.begin(115200);
    WIFI();
    Serial.println("");
    Serial.print("Connecting to ");
    Serial.println(ssid);
    Serial.println("WiFi connected");
    Serial.print("Connected to WiFi network with IP Address: ");
    Serial.println(WiFi.localIP());
    delay(5000);
    pinMode(Led, OUTPUT); // LED pin as output
    pinMode(P_I, INPUT); //photo interrupter pin as input
}

void loop()
{
    val=digitalRead(P_I); //read the value of the sensor
    val1 = analogRead(P_I);
    if(val == HIGH) // turn on LED when sensor is blocked
    {
        digitalWrite(Led,HIGH);
        Serial.println(val1);
    }
    else
    {
        digitalWrite(Led,LOW);
        Serial.println(val1);
    }
}
