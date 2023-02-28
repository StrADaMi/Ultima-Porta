package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Clothes;
import pl.codecoolproject.ultimaporta.offer.repos.ClothesRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ClothesService {

    private final ClothesRepository clothesRepository;

    public ClothesService(ClothesRepository clothesRepository) {
        this.clothesRepository = clothesRepository;
    }
    public List<Clothes> findAllClothes() {
        return clothesRepository.findAll();
    }
    public Clothes addClothes (Clothes clothes) {
        return clothesRepository.save(clothes);
    }
    public Clothes updateClothes (Long id, Clothes clothes) {
        return  clothesRepository.save(clothes);
    }
    public void delete(Long id) {
        clothesRepository.deleteById(id);
    }
}
