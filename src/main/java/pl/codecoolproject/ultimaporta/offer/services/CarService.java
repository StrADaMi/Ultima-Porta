package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Car;
import pl.codecoolproject.ultimaporta.offer.repos.CarRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CarService {
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }
    public List<Car> findAllBrumBrum() {
        return carRepository.findAll();
    }
    public Car addCar (Car car) {
        return carRepository.save(car);
    }
    public Car updateCar(Long id, Car car) {
        return carRepository.save(car);
    }
    public void delete(Long id) {
        carRepository.deleteById(id);
    }
}
