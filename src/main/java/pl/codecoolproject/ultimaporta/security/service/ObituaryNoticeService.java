package pl.codecoolproject.ultimaporta.security.service;

import lombok.Getter;
import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;
import pl.codecoolproject.ultimaporta.repository.ObituaryNoticeRepository;

import java.util.List;

@Getter
@Service
public class ObituaryNoticeService {
    private final ObituaryNoticeRepository obituaryNoticeRepository;

    public ObituaryNoticeService(ObituaryNoticeRepository obituaryNoticeRepository) {
        this.obituaryNoticeRepository = obituaryNoticeRepository;
    }

    public ObituaryNotice createObituaryNotice(ObituaryNotice obituaryNotice){
        return obituaryNoticeRepository.save(obituaryNotice);
    }

    public List<ObituaryNotice> showAllObituary(){
        return obituaryNoticeRepository.findAll();
    }

    public void deleteObituary(Long id){
        obituaryNoticeRepository.deleteById(id);
    }

    public ObituaryNotice updateObituary(Long id, ObituaryNotice obituaryNotice){
        return obituaryNoticeRepository.save(obituaryNotice);
    }







}
