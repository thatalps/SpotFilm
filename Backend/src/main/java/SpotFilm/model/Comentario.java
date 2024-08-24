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
    public int idAvaliacao;
    public int idFilme;

    public Comentario(LocalDateTime dataCriacao, String descricao, int idUsuario, int idAvaliacao, int idFilme) {
        this.dataCriacao = dataCriacao;
        this.conteudo = descricao;
        this.idUsuario = idUsuario;
        this.idAvaliacao = idAvaliacao;
        this.idFilme = idFilme;
    }

    @Override
    public String toString() {
        return String.format(
                "Comentário[id=%s, dataCriacao='%s', descricao='%s', idUsuario='%s', idAvaliacao='%s']",
                id, dataCriacao, conteudo, idUsuario, idAvaliacao);
    }

}
