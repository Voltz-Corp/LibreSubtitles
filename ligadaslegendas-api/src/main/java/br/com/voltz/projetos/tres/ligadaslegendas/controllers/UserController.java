package br.com.voltz.projetos.tres.ligadaslegendas.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class UserController {
    @GetMapping("/user")
    public ResponseEntity<String> getUser() {
        return ResponseEntity.ok("ok");
    }
}
