package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Burial;
import pl.codecoolproject.ultimaporta.offer.services.BurialService;

import javax.validation.Valid;

@RestController
@RequestMapping("/burial")
public class BurialController {

    private final BurialService burialService;

    public BurialController(BurialService burialService) {
        this.burialService = burialService;
    }
    @PutMapping("/{id}")
    public ResponseEntity<Burial> updateBurial(@PathVariable Long id, @Valid @RequestBody Burial burial) {
        Burial updatedBurial = burialService.updateBurial(id, burial);
        return  ResponseEntity.ok(updatedBurial);
    }
}
