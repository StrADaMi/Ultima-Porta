package pl.codecoolproject.ultimaporta.controller;

import org.hibernate.bytecode.enhance.internal.bytebuddy.EnhancerImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;
import pl.codecoolproject.ultimaporta.security.service.ObituaryNoticeService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/auth/obituary")
public class ObituaryNoticeController {

    private final ObituaryNoticeService obituaryNoticeService;


    public ObituaryNoticeController(ObituaryNoticeService obituaryNoticeService) {
        this.obituaryNoticeService = obituaryNoticeService;
    }

    @PostMapping
    public ResponseEntity addObituary(@Valid @RequestBody ObituaryNotice obituaryNotice){
        ObituaryNotice obituaryNotice1 = obituaryNoticeService.createObituaryNotice(obituaryNotice);
        return ResponseEntity.status(HttpStatus.CREATED).body(obituaryNotice1);
    }

    @GetMapping
    public ResponseEntity<List<ObituaryNotice>> getAllObituaryNotice(){
        List<ObituaryNotice> listObituary = obituaryNoticeService.showAllObituary();
        return ResponseEntity.ok(listObituary);
    }

    @DeleteMapping("/{id}")
    public void deleteObituary(@PathVariable Long id){
        obituaryNoticeService.deleteObituary(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ObituaryNotice> updateObituary(@PathVariable Long id, @Valid @RequestBody ObituaryNotice obituaryNotice){
        ObituaryNotice updateObituaryNotice = obituaryNoticeService.updateObituary(id,obituaryNotice);
        return ResponseEntity.ok(updateObituaryNotice);
    }

}
