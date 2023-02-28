package pl.codecoolproject.ultimaporta.offer.init;

import pl.codecoolproject.ultimaporta.offer.model.Car;

import java.math.BigDecimal;

public class Cars extends Car {
    Car car1 = new Car("Chrysler 300C", BigDecimal.valueOf(500.00), "Standard");
    Car car2 = new Car("Mercedes W210", BigDecimal.valueOf(750.00), "Medium");
    Car car3 = new Car("Maserati Ghibli", BigDecimal.valueOf(1000.00), "Exclusive");
    Car car4 = new Car("Mercedes-Benz Vito", BigDecimal.valueOf(850.00),"Standard+");
}
