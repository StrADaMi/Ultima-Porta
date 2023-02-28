package pl.codecoolproject.ultimaporta.controller;

import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.codecoolproject.ultimaporta.model.GetUserResponse;
import pl.codecoolproject.ultimaporta.security.service.UserDetailsImpl;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @GetMapping("/getUser")
    public ResponseEntity<GetUserResponse> getCurrentUser(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new GetUserResponse(userDetails.getUsername(), userDetails.getEmail(), roles));
    }
}
