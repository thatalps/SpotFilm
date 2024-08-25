package SpotFilm.dto;

import lombok.Getter;
import lombok.Setter;

public class UsuarioLoginRequest {

    @Getter @Setter
    private String email;
    @Getter @Setter
    private String senha;

    public UsuarioLoginRequest() {}

    public UsuarioLoginRequest(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

}
