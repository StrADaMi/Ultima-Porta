package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Cremation;
import pl.codecoolproject.ultimaporta.offer.repos.CremationRepository;

import javax.transaction.Transactional;

@Service
@Transactional
public class CremationService {

    private final CremationRepository cremationRepository;

    public CremationService(CremationRepository cremationRepository) {
        this.cremationRepository = cremationRepository;
    }
    public Cremation updateCremation(Long id, Cremation cremation) {
        return cremationRepository.save(cremation);
    }
}
