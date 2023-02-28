package pl.codecoolproject.ultimaporta.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.model.RepresentOfTheDeath;
import pl.codecoolproject.ultimaporta.repository.RepresentOfTheDeathRepository;
import pl.codecoolproject.ultimaporta.security.service.RepresentOfTheDeadService;

import javax.validation.Valid;
import java.util.List;

@Controller
public class RepresentOfTheDeathController {


    private final RepresentOfTheDeadService representOfTheDeadService;

    public RepresentOfTheDeathController(RepresentOfTheDeadService representOfTheDeadService) {
        this.representOfTheDeadService = representOfTheDeadService;
    }

    @GetMapping
    public ResponseEntity<List<RepresentOfTheDeath>> getAllRepresents(){
        List<RepresentOfTheDeath> allRepresents = representOfTheDeadService.getAllRepresents();
        return ResponseEntity.ok(allRepresents);
    }

    @PostMapping("/{id}")
    public ResponseEntity<RepresentOfTheDeath> createRepresent(@Valid @RequestBody RepresentOfTheDeath representOfTheDeath){
        RepresentOfTheDeath newRepresentOfTheDeath = representOfTheDeadService.createRepresent(representOfTheDeath);
        return ResponseEntity.status(HttpStatus.CREATED).body(newRepresentOfTheDeath);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RepresentOfTheDeath> updateRepresent(@PathVariable Long id,@Valid @RequestBody RepresentOfTheDeath representOfTheDeath){
        RepresentOfTheDeath newRepresent = representOfTheDeadService.createRepresent(representOfTheDeath);
        return ResponseEntity.ok(newRepresent);
    }

    @DeleteMapping
    public void deleteRepresent(@PathVariable Long id){
        representOfTheDeadService.deleteRepresent(id);
    }


}
