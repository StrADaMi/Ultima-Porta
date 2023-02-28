package pl.codecoolproject.ultimaporta.security.service;

import lombok.Setter;
import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;

import java.util.List;
import java.util.Optional;
@Setter
@Service
public class DepartedService {
    private final DepartedRepository departedRepository;

    public DepartedService(DepartedRepository departedRepository) {
        this.departedRepository = departedRepository;
    }

    public Departed createDeparted(Departed departed){
       return departedRepository.save(departed);
    }

    public List<Departed> showAllDeparted(){
        return departedRepository.findAll();
    }

    public void deleteDeparted(Long id){
        departedRepository.deleteById(id);
    }

    public Departed updateDeparted(Long id, Departed departed){
        return departedRepository.save(departed);
    }



}
