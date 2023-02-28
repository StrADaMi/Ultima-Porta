package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.FuneralWreath;
import pl.codecoolproject.ultimaporta.offer.repos.FuneralWreathRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FuneralWreathService {

    private final FuneralWreathRepository funeralWreathRepository;

    public FuneralWreathService (FuneralWreathRepository funeralWreathRepository) {
        this.funeralWreathRepository = funeralWreathRepository;
    }
    public List<FuneralWreath> findAllFlowers() {
        return funeralWreathRepository.findAll();
    }
    public FuneralWreath addFuneralWreath (FuneralWreath funeralWreath) {
        return funeralWreathRepository.save(funeralWreath);
    }
    public FuneralWreath updateFuneralWreath(Long id, FuneralWreath funeralWreath) {
        return funeralWreathRepository.save(funeralWreath);
    }
    public void delete (Long id) {
        funeralWreathRepository.deleteById(id);
    }
}
