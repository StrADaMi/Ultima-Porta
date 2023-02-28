package pl.codecoolproject.ultimaporta.security.service;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.model.RepresentOfTheDeath;
import pl.codecoolproject.ultimaporta.repository.RepresentOfTheDeathRepository;

import java.util.List;

@Service
public class RepresentOfTheDeadService {


    private final RepresentOfTheDeathRepository representOfTheDeathRepository;

    public RepresentOfTheDeadService(RepresentOfTheDeathRepository representOfTheDeathRepository) {
        this.representOfTheDeathRepository = representOfTheDeathRepository;
    }

    public List<RepresentOfTheDeath> getAllRepresents(){
        return representOfTheDeathRepository.findAll();
    }

    public RepresentOfTheDeath createRepresent(RepresentOfTheDeath representOfTheDeath){
        return representOfTheDeathRepository.save(representOfTheDeath);
    }

    public void deleteRepresent(Long id){
        representOfTheDeathRepository.deleteById(id);
    }

    public RepresentOfTheDeath updateRepresent(Long id, RepresentOfTheDeath representOfTheDeath){
        return representOfTheDeathRepository.save(representOfTheDeath);
    }
}
