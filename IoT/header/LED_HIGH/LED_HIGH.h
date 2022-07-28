#ifndef LED_HIGH
#define LED_HIGH
#include "Arduino.h"

void LED_High()
{
  digitalWrite(D8, HIGH);
  delay(100);
  digitalWrite(D8, LOW);
  delay(100);
  digitalWrite(D8, HIGH);
  delay(100);
  digitalWrite(D8, LOW);
  delay(100);
  digitalWrite(D8, HIGH);
  delay(100);
  digitalWrite(D8, LOW);
  delay(100);
}; // end switch
#endif
