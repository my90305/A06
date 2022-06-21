int Led = 13; // define LED pin
int HW487 = 14; // define photo interrupter signal pin
int val; //define a numeric variable
int val1;

void setup()
{
pinMode(Led, OUTPUT); // LED pin as output
pinMode(HW487, INPUT); //photo interrupter pin as input
Serial.begin(115200);
}

void loop()
{
val=digitalRead(HW487); //read the value of the sensor
val1 = analogRead(HW487);
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
