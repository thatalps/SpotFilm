package SpotFilm.controller;

import SpotFilm.dto.ApiResposta;
import SpotFilm.service.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/avaliacao")
public class AvaliacaoController {

    @Autowired
    AvaliacaoService avaliacaoService;

    @PutMapping("/postar/")
    public ResponseEntity<ApiResposta> postaAvaliacao(@RequestParam int idFilme,
                                                             @RequestParam int idUsuario,
                                                             @RequestParam int pontuacao)
    {
        int resposta = avaliacaoService.postaAvaliacao(idFilme, idUsuario, pontuacao);
        if(resposta==0) {
            return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(
                    new ApiResposta<>("Ja foi feita avalição desse filme!", null));
        }
        return ResponseEntity.status(HttpStatus.OK).body(
            new ApiResposta<>("Avaliação do filme feita com sucesso!", null));
    }

    @GetMapping("/buscar/")
    public ResponseEntity<ApiResposta> buscaAvaliacao(@RequestParam int idFilme,
                                                      @RequestParam int idUsuario)
    {
        int resposta = avaliacaoService.getAvaliacao(idFilme, idUsuario);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ApiResposta<>("Busca de avaliação feita com sucesso!", resposta));
    }
}
