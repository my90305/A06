#include <Arduino.h>
#include <ESP8266WiFi.h>

void setup() {
  Serial.begin(115200);
}
void loop() {
  Serial.println("Hello world");
  delay(2000);
  Serial.println("Test");
  delay(2000);
}
/*int ledred = 14;     // LED pin
int ledgreen = 13;
int button1 = 16; // push button is connected
int buttonred = 5;
int buttongreen = 4;
int temp1 = 0;    // temporary variable for reading the button pin status
int temp2 = 0;
int temp3 = 0;

void setup() {
  pinMode(ledred, OUTPUT);
  pinMode(ledgreen, OUTPUT);
  pinMode(button1, INPUT); 
  pinMode(buttonred, INPUT);
  pinMode(buttongreen, INPUT);
  Serial.begin(115200);
}

void loop() {
  temp1 = digitalRead(button1);
  temp2 = digitalRead(buttonred);
  temp3 = digitalRead(buttongreen);
     
     if (temp1 == HIGH) {
        if(temp2==HIGH)
        {
          digitalWrite(ledred, HIGH);
          Serial.println("LEDRED Turned ON");
          delay(100);
          }
        else
        {
          digitalWrite(ledred, LOW);
          Serial.println("LEDRED Turned OFF");
          delay(100);
          }
        if(temp3==HIGH)
        {
          digitalWrite(ledgreen, HIGH);
          Serial.println("LEDGREEN Turned ON");
          delay(100);
          }
        else
        {
          digitalWrite(ledgreen, LOW);
          Serial.println("LEDGREEN Turned OFF");
          delay(100);
          }
       }
       
     else {
        digitalWrite(ledred, LOW);
        digitalWrite(ledgreen, LOW);
        Serial.println("LEDRED Turned OFF");
        Serial.println("LEDGREEN Turned OFF");
        delay(100);
       }
       
}*/

