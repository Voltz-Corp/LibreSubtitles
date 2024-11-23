package br.com.voltz.projetos.tres.ligadaslegendas.dto.auth;

import br.com.voltz.projetos.tres.ligadaslegendas.models.User;

public record ResponseDTO (String token, User user) {
}
