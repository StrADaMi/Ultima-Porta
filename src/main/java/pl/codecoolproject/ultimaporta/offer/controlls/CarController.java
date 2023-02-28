package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Car;
import pl.codecoolproject.ultimaporta.offer.services.CarService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;
    public CarController(CarService carService) {
        this.carService = carService;
    }
    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = carService.findAllBrumBrum();
        return ResponseEntity.ok(cars);
    }
    @PostMapping
    public ResponseEntity<Car> addCar(@Valid @RequestBody Car car) {
        Car newCar = carService.addCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCar);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @Valid @RequestBody Car car) {
        Car updatedCar = carService.updateCar(id, car);
        return ResponseEntity.ok(updatedCar);
    }
    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.delete(id);
    }
}
