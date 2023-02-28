package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.FuneralWreath;
import pl.codecoolproject.ultimaporta.offer.services.FuneralWreathService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/flowers")
public class FuneralWreathController {

    private final FuneralWreathService funeralWreathService;

    public FuneralWreathController(FuneralWreathService funeralWreathService) {
        this.funeralWreathService = funeralWreathService;
    }
    @GetMapping
    public ResponseEntity<List<FuneralWreath>> getAllFuneralWreaths() {
        List<FuneralWreath> flowers = funeralWreathService.findAllFlowers();
        return ResponseEntity.ok(flowers);
    }
    @PostMapping
    public ResponseEntity<FuneralWreath> addFlowers(@Valid @RequestBody FuneralWreath funeralWreath) {
        FuneralWreath newFuneralWreath = funeralWreathService.addFuneralWreath(funeralWreath);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFuneralWreath);
    }
    @PutMapping("/{id}")
    public ResponseEntity<FuneralWreath> updateFuneralWreath(@PathVariable Long id, @Valid @RequestBody FuneralWreath funeralWreath) {
        FuneralWreath updatedFuneralWreath = funeralWreathService.updateFuneralWreath(id, funeralWreath);
        return ResponseEntity.ok(updatedFuneralWreath);
    }
    @DeleteMapping("/{id}")
    public void deleteFuneralWreath(@PathVariable Long id) {
        funeralWreathService.delete(id);
    }
}
