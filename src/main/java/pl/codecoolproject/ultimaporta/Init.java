//package pl.codecoolproject.ultimaporta;
//
//import lombok.AllArgsConstructor;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//import pl.codecoolproject.ultimaporta.model.*;
//import pl.codecoolproject.ultimaporta.repository.DepartedRepository;
//import pl.codecoolproject.ultimaporta.repository.ObituaryNoticeRepository;
//import pl.codecoolproject.ultimaporta.repository.RoleRepository;
//import pl.codecoolproject.ultimaporta.repository.UserRepository;
//
//import javax.annotation.PostConstruct;
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//
//@AllArgsConstructor
//@Component
//public class Init {
//    private final DepartedRepository departedRepository;
//
//    private final ObituaryNoticeRepository obituaryNoticeRepository;
//
//    private UserRepository userRepository;
//
//    private RoleRepository roleRepository;
//
//
//    @PostConstruct
//    public void runList(){
//
//        User user1 = new User("mateo1","mateopadre@gmail.com",new BCryptPasswordEncoder().encode("password"));
//        userRepository.save(user1);
//
//        Role role1 = new Role(ERole.ROLE_MODERATOR);
//        roleRepository.save(role1);
//
//
//
//        Departed departed1 = new Departed(1l,"Jan", "Kowalski", LocalDate.of(2023,2,3));
//        departedRepository.save(departed1);
//        ObituaryNotice obituaryNotice1 = new ObituaryNotice(1l
//                , LocalDateTime.of(2023,2,9,14,00,00,00)
//                ,"Św.Elzbiety", "Kamienna","Cmentarz w Kamiennej");
//
//        obituaryNoticeRepository.save(obituaryNotice1);
//
//
//
//    }
//
//}
