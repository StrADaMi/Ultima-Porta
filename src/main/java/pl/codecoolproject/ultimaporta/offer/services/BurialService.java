package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Burial;
import pl.codecoolproject.ultimaporta.offer.repos.BurialRepository;

import javax.transaction.Transactional;

@Service
@Transactional
public class BurialService {

    private final BurialRepository burialRepository;

    public BurialService(BurialRepository burialRepository) {
        this.burialRepository = burialRepository;
    }
    public Burial updateBurial(Long id, Burial burial) {
        return burialRepository.save(burial);
    }
}
