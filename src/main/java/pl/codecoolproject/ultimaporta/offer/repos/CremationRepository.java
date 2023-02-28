package pl.codecoolproject.ultimaporta.offer.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.codecoolproject.ultimaporta.offer.model.Cremation;

@Repository
public interface CremationRepository extends JpaRepository<Cremation, Long> {
}
