package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Urn;
import pl.codecoolproject.ultimaporta.offer.services.UrnService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/urns")
public class UrnController {

    private final UrnService urnService;

    public UrnController(UrnService urnService) {
        this.urnService = urnService;
    }
    @GetMapping
    public ResponseEntity<List<Urn>> getAllUrns() {
        List<Urn> urns = urnService.findAllUrns();
        return ResponseEntity.ok(urns);
    }
    @PostMapping
    public ResponseEntity<Urn> addUrn(@Valid @RequestBody Urn urn) {
        Urn newUrn = urnService.addUrn(urn);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUrn);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Urn> updateUrn(@PathVariable Long id, @Valid @RequestBody Urn urn) {
        Urn updatedUrn = urnService.updateUrn(id, urn);
        return ResponseEntity.ok(updatedUrn);
    }
    @DeleteMapping("/{id}")
    public void deleteUrn(@PathVariable Long id) {
        urnService.delete(id);
    }

}
