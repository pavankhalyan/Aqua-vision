#include <avr/io.h>
#include <util/delay.h>


#define TRIGGER_PIN PB0  
#define ECHO_PIN PB1    
#define VIBRATOR_PIN PB2 

void GPIO_Init(void);
void Ultrasonic_Trigger(void);
uint16_t Ultrasonic_ReadDistance(void);
void Vibrator_On(void);
void Vibrator_Off(void);


int main(void) {
    GPIO_Init(); 

    while (1) {
        uint16_t distance = Ultrasonic_ReadDistance();  
        
        if (distance <= 20) { 
            Vibrator_On();    
        } else {
            Vibrator_Off();   
        }
        
        _delay_ms(100);  
    }

    return 0;
}

void GPIO_Init(void) {
    DDRB |= (1 << TRIGGER_PIN);  
    DDRB &= ~(1 << ECHO_PIN);    
    DDRB |= (1 << VIBRATOR_PIN); 
}


void Ultrasonic_Trigger(void) {
    PORTB &= ~(1 << TRIGGER_PIN);
    _delay_us(2);
    PORTB |= (1 << TRIGGER_PIN);
    _delay_us(10);
    PORTB &= ~(1 << TRIGGER_PIN);
}

uint16_t Ultrasonic_ReadDistance(void) {
    uint16_t duration = 0;
    
    Ultrasonic_Trigger();  


    while (!(PINB & (1 << ECHO_PIN)));

    
    TCNT1 = 0;                
    TCCR1 = (1 << CS10);      

  
    while (PINB & (1 << ECHO_PIN));

    duration = TCNT1;        
    TCCR1 = 0;                

  
    uint16_t distance = duration / 58;
    return distance;
}


void Vibrator_On(void) {
    PORTB |= (1 << VIBRATOR_PIN);  
}

void Vibrator_Off(void) {
    PORTB &= ~(1 << VIBRATOR_PIN); 
}