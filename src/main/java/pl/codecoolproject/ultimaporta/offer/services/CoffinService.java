package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Coffin;
import pl.codecoolproject.ultimaporta.offer.repos.CoffinRepository;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class CoffinService {
    private final CoffinRepository coffinRepository;
    private final CoffinPriceCalculator coffinPriceCalculator;

    public BigDecimal calculateCoffinPrice(String type, String woodType, String size) {
        return coffinPriceCalculator.calculateCoffinPrice(type, woodType, size);
    }
    @Autowired
    public CoffinService(CoffinRepository coffinRepository, CoffinPriceCalculator coffinPriceCalculator) {
        this.coffinRepository = coffinRepository;
        this.coffinPriceCalculator = coffinPriceCalculator;
    }
    public List<Coffin> findAllCoffins() {
        return coffinRepository.findAll();
    }
    public Coffin addCoffin (Coffin coffin) {
        return coffinRepository.save(coffin);
    }
    public Coffin updateCoffin (Long id, Coffin coffin) {
        return coffinRepository.save(coffin);
    }

    public void delete(Long id) {
        coffinRepository.deleteById(id);
    }



}
