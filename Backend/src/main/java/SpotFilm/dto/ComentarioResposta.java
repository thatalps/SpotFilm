package SpotFilm.dto;

import SpotFilm.model.Avaliacao;
import SpotFilm.model.Comentario;
import lombok.Getter;
import lombok.Setter;

public class ComentarioResposta {
    @Getter @Setter
    private Comentario comentario;
    @Getter @Setter
    private Avaliacao avaliacao;

    public ComentarioResposta() {}
}
