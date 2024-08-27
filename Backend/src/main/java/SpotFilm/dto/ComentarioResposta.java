package SpotFilm.dto;

import SpotFilm.model.Avaliacao;
import SpotFilm.model.Comentario;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class ComentarioResposta {

    @Getter @Setter
    public String id;
    @Getter @Setter
    public LocalDateTime dataCriacao;
    @Getter @Setter
    public String conteudo;
    @Getter @Setter
    public int idUsuario;
    @Getter @Setter
    public int idFilme;
    @Getter @Setter
    public String nomeUsuario;

    public ComentarioResposta(String id, LocalDateTime dataCriacao, String conteudo, int idFilme, int idUsuario, String nomeUsuario) {
        this.id = id;
        this.dataCriacao = dataCriacao;
        this.conteudo = conteudo;
        this.idFilme = idFilme;
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
    }


}
