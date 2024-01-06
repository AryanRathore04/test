#include <stdio.h>
#include <string.h>


typedef struct {
    char make[50];
    char model[50];
    int year;
} Vehicle;

void initVehicle(Vehicle *vehicle, const char *make, const char *model, int year) {
    strcpy(vehicle->make, make);
    strcpy(vehicle->model, model);
vehicle->year = year;
}

void displayVehicleInfo(const Vehicle *vehicle) {
    printf("%d %s %s\n", vehicle->year, vehicle->make, vehicle->model);
}


typedef struct {
    Vehicle base;
    int numDoors;
} Car;

void initCar(Car *car, const char *make, const char *model, int year, int numDoors) {
    initVehicle(&car->base, make, model, year);
    car->numDoors = numDoors;
}


void displayCarInfo(const Car *car) {
    displayVehicleInfo(&car->base);
    printf("Number of doors: %d\n", car->numDoors);
}

int main() {
  
    Car myCar;
    initCar(&myCar, "Toyota", "Camry", 2023, 4);

    
    displayCarInfo(&myCar);
    return 0;
}