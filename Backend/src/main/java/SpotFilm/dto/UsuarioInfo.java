package SpotFilm.dto;

import SpotFilm.model.Genero;
import lombok.Getter;
import lombok.Setter;

public class UsuarioInfo {
    @Setter
    @Getter
    private long id;

    @Setter
    @Getter
    private String nome;

    @Setter
    @Getter
    private int generoFav1;

    @Setter
    @Getter
    private int generoFav2;

    public UsuarioInfo(long id, String nome, int generoFav1, int generoFav2) {
        super();
        this.id = id;
        this.nome = nome;
        this.generoFav1 = generoFav1;
        this.generoFav2 = generoFav2;
    }
}
