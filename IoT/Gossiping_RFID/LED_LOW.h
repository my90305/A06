#ifndef LED_LOW
#define LED_LOW
#include "Arduino.h"

void LED_Low()
{
  digitalWrite(D8, HIGH);
  delay(2000);
  digitalWrite(D8, LOW);
}; // end switch
#endif
