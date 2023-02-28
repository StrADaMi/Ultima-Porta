package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Clothes;
import pl.codecoolproject.ultimaporta.offer.services.ClothesService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/clothes")
public class ClothesController {

    private final ClothesService clothesService;

    public ClothesController(ClothesService clothesService) {
        this.clothesService = clothesService;
    }
    @GetMapping
    public ResponseEntity<List<Clothes>> getAllClothes() {
        List<Clothes> clothes = clothesService.findAllClothes();
        return ResponseEntity.ok(clothes);
    }
    @PostMapping
    public ResponseEntity<Clothes> addClothes(@Valid @RequestBody Clothes clothes) {
        Clothes newClothes = clothesService.addClothes(clothes);
        return ResponseEntity.status(HttpStatus.CREATED).body(newClothes);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Clothes> updateClothes(@PathVariable Long id, @Valid @RequestBody Clothes clothes) {
        Clothes updatedClothes = clothesService.updateClothes(id, clothes);
        return ResponseEntity.ok(updatedClothes);
    }
    @DeleteMapping("/{id}")
    public void deleteClothes (@PathVariable Long id) {
        clothesService.delete(id);
    }
}
