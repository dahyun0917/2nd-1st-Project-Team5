package com.gdsc.coby.controller;

import com.gdsc.coby.dto.TokenDto;
import com.gdsc.coby.dto.request.UserRequestDto;
import com.gdsc.coby.dto.response.UserResponseDto;
import com.gdsc.coby.service.AuthService;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthController {
    private final AuthService authService;

    @ExceptionHandler(value = EntityExistsException.class)
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return ResponseEntity.ok(e.getMessage());
    }

    @PostMapping("/signup")
    public ResponseEntity<UserResponseDto> signup(UserRequestDto requestDto) {
        return ResponseEntity.ok(authService.signup(requestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(UserRequestDto requestDto) {
        return ResponseEntity.ok(authService.login(requestDto));
    }
}
