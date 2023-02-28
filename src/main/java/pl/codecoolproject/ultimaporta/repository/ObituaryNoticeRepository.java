package pl.codecoolproject.ultimaporta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;

@Repository
public interface ObituaryNoticeRepository extends JpaRepository<ObituaryNotice,Long> {
}
