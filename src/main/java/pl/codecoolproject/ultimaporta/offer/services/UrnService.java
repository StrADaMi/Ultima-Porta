package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.repos.UrnRepository;
import pl.codecoolproject.ultimaporta.offer.model.Urn;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UrnService {

    private final UrnRepository urnRepository;

    public UrnService(UrnRepository urnRepository) {
        this.urnRepository = urnRepository;
    }
    public List<Urn> findAllUrns (){
        return urnRepository.findAll();
    }
    public Urn addUrn (Urn urn) {
        return urnRepository.save(urn);
    }
    public Urn updateUrn (Long id, Urn urn) {
        return urnRepository.save(urn);
    }
    public void delete(Long id) {
        urnRepository.deleteById(id);
    }
}
