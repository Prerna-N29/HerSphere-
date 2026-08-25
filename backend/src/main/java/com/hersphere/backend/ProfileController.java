package com.hersphere.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profiles")
public class ProfileController {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;

    public ProfileController(
            ProfileRepository profileRepository,
            UserRepository userRepository) {

        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> createProfile(
            @PathVariable Long userId,
            @RequestBody Profile profile) {

        User user = userRepository.findById(userId).orElse(null);

        if (user == null) {
            return ResponseEntity
                    .badRequest()
                    .body("User not found.");
        }

        Profile existingProfile = profileRepository
                .findByUserId(userId)
                .orElse(null);

        if (existingProfile != null) {
            return ResponseEntity
                    .badRequest()
                    .body("Profile already exists.");
        }

        profile.setUser(user);
        profile.setProfileCompleted(true);

        return ResponseEntity.ok(
                profileRepository.save(profile));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getProfile(
            @PathVariable Long userId) {

        Profile profile = profileRepository
                .findByUserId(userId)
                .orElse(null);

        if (profile == null) {
            return ResponseEntity
                    .notFound()
                    .build();
        }

        return ResponseEntity.ok(profile);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateProfile(
            @PathVariable Long userId,
            @RequestBody Profile updatedProfile) {

        Profile existingProfile = profileRepository
                .findByUserId(userId)
                .orElse(null);

        if (existingProfile == null) {
            return ResponseEntity
                    .notFound()
                    .build();
        }

        existingProfile.setAge(
                updatedProfile.getAge());

        existingProfile.setHealthInterests(
                updatedProfile.getHealthInterests());

        existingProfile.setLastPeriodDate(
                updatedProfile.getLastPeriodDate());

        existingProfile.setCycleLength(
                updatedProfile.getCycleLength());

        existingProfile.setPeriodDuration(
                updatedProfile.getPeriodDuration());

        existingProfile.setDietType(
                updatedProfile.getDietType());

        existingProfile.setFoodPreferences(
                updatedProfile.getFoodPreferences());

        existingProfile.setWellnessPreferences(
                updatedProfile.getWellnessPreferences());

        existingProfile.setProfileCompleted(true);

        return ResponseEntity.ok(
                profileRepository.save(existingProfile));
    }
}