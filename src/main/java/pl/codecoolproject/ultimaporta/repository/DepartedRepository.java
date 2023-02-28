package pl.codecoolproject.ultimaporta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.codecoolproject.ultimaporta.model.Departed;
@Repository
public interface DepartedRepository extends JpaRepository<Departed,Long> {

   // Optiona<Departed> findBy
}
