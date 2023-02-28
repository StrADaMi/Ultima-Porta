package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Cremation;
import pl.codecoolproject.ultimaporta.offer.services.CremationService;

import javax.validation.Valid;

@RestController
@RequestMapping("/cremation")
public class CremationController {

    private final CremationService cremationService;

    public CremationController(CremationService cremationService) {
        this.cremationService = cremationService;
    }
    @PutMapping("/{id}")
    public ResponseEntity<Cremation> updateCremation(@PathVariable Long id, @Valid @RequestBody Cremation cremation) {
        Cremation updatedCremation = cremationService.updateCremation(id, cremation);
        return ResponseEntity.ok(updatedCremation);
    }
}
