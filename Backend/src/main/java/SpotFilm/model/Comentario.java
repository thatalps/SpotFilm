package SpotFilm.model;
import org.springframework.data.annotation.Id;

import java.time.*;
import java.util.*;

public class Comentario {
    @Id
    public String id;

    public LocalDateTime dataCriacao;
    public String descricao;
    public int idUsuario;
    public int idAvaliacao;

    public Comentario(LocalDateTime dataCriacao, String descricao, int idUsuario, int idAvaliacao) {
        this.dataCriacao = dataCriacao;
        this.descricao = descricao;
        this.idUsuario = idUsuario;
        this.idAvaliacao = idAvaliacao;
    }

    @Override
    public String toString() {
        return String.format(
                "Comentário[id=%s, dataCriacao='%s', descricao='%s', idUsuario='%s', idAvaliacao='%s']",
                id, dataCriacao, descricao, idUsuario, idAvaliacao);
    }

}
