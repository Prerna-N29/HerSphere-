package com.hersphere.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;

        public UserController(
                        UserRepository userRepository,
                        PasswordEncoder passwordEncoder) {

                this.userRepository = userRepository;
                this.passwordEncoder = passwordEncoder;
        }

        @GetMapping("/users")
        public List<User> getUsers() {
                return userRepository.findAll();
        }

        @PostMapping("/users")
        public User createUser(@RequestBody User user) {

                String hashedPassword = passwordEncoder.encode(user.getPassword());

                user.setPassword(hashedPassword);

                return userRepository.save(user);
        }

        @PostMapping("/login")
        public ResponseEntity<LoginResponse> login(
                        @RequestBody LoginRequest loginRequest) {

                User user = userRepository
                                .findByEmail(loginRequest.getEmail())
                                .orElse(null);

                if (user == null) {

                        return ResponseEntity
                                        .status(HttpStatus.UNAUTHORIZED)
                                        .body(
                                                        new LoginResponse(
                                                                        "Invalid email or password.",
                                                                        null,
                                                                        null,
                                                                        null));
                }

                boolean passwordMatches = passwordEncoder.matches(
                                loginRequest.getPassword(),
                                user.getPassword());

                if (!passwordMatches) {

                        return ResponseEntity
                                        .status(HttpStatus.UNAUTHORIZED)
                                        .body(
                                                        new LoginResponse(
                                                                        "Invalid email or password.",
                                                                        null,
                                                                        null,
                                                                        null));
                }

                return ResponseEntity.ok(
                                new LoginResponse(
                                                "Login successful.",
                                                user.getId(),
                                                user.getName(),
                                                user.getEmail()));
        }
}