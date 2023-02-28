package pl.codecoolproject.ultimaporta.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;
import pl.codecoolproject.ultimaporta.security.service.DepartedService;
import pl.codecoolproject.ultimaporta.security.service.ObituaryNoticeService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class DepartedController {

    private final DepartedService departedService;

    public DepartedController(DepartedService departedService) {
        this.departedService = departedService;

    }

    @GetMapping("/departed")
    public ResponseEntity<List<Departed>> showAll(){
        List<Departed> departeds = departedService.showAllDeparted();
        return ResponseEntity.ok(departeds);
    }

    @PostMapping("/departed")
    public ResponseEntity<Departed> addDeparted(@Valid @RequestBody Departed departed){
        Departed newDeparted = departedService.createDeparted(departed);
        return ResponseEntity.status(HttpStatus.CREATED).body(newDeparted);
    }

    @DeleteMapping("/departed/{id}")
    public void deleteDeparted(@PathVariable Long id){
        departedService.deleteDeparted(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Departed> updateDeparted(@PathVariable Long id, @Valid @RequestBody Departed departed){
        Departed updatedDeparted = departedService.updateDeparted(id,departed);
       return ResponseEntity.ok(updatedDeparted);
    }





}
