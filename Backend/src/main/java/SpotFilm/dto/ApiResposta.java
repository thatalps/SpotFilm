package SpotFilm.dto;

import lombok.Getter;
import lombok.Setter;

public class ApiResposta <T>{

    @Getter @Setter
    private String mensagem;

    @Getter @Setter
    private T data;

    public ApiResposta(String mensagem, T data) {
        this.mensagem = mensagem;
        this.data = data;
    }

}
