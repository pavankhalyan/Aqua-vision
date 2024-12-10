#include <NewPing.h>

#define TRIGGER_PIN  D7        
#define ECHO_PIN     D8       
#define MAX_DISTANCE 200       
#define MOTOR_PIN    D6        
#define DISTANCE_THRESHOLD 150 

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); 

void setup() {
  Serial.begin(115200);        
  pinMode(MOTOR_PIN, OUTPUT);
  digitalWrite(MOTOR_PIN, LOW); 
}

void loop() {
  delay(1000);                   

  int distance = sonar.ping_cm();  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (distance > 0 && distance < DISTANCE_THRESHOLD) {
    digitalWrite(MOTOR_PIN, HIGH);  
  } else {
    digitalWrite(MOTOR_PIN, LOW); 
  }
  
  delay(500);
}