package SpotFilm.model;
import org.springframework.data.annotation.Id;

import java.time.*;
import java.util.*;

public class Comentario {

    @Id
    public String id;

    public LocalDateTime dataCriacao;
    public String conteudo;
    public int idUsuario;
    public int idFilme;

    public Comentario(LocalDateTime dataCriacao, String descricao, int idUsuario, int idFilme) {
        this.dataCriacao = dataCriacao;
        this.conteudo = descricao;
        this.idUsuario = idUsuario;
        this.idFilme = idFilme;
    }

    @Override
    public String toString() {
        return String.format(
                "Comentário[id=%s, dataCriacao='%s', descricao='%s', idUsuario='%s']",
                id, dataCriacao, conteudo, idUsuario);
    }

}
