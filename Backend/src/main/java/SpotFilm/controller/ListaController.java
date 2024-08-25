package SpotFilm.controller;


import SpotFilm.dto.ApiResposta;
import SpotFilm.dto.ListaRespostaApi;
import SpotFilm.service.ListaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/lista")
public class ListaController {

    @Autowired
    ListaService listaService;

    @PostMapping("/criacao/")
    public ResponseEntity<ApiResposta> criacaoDeLista(@RequestParam String nomeLista,
                                                  @RequestParam int idFilme,
                                                  @RequestParam int idUsuario) {
        Integer resposta = listaService.criacaoDeLista(nomeLista, idFilme, idUsuario);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ApiResposta<>("criação da lista feita com sucesso!", resposta));
    }

    @PutMapping("/insercao/")
    public ResponseEntity<ApiResposta> inserirFilmeEmLista(@RequestParam int idLista,
                                                           @RequestParam int idFilme) {
        int resposta = listaService.inserirFilmeEmLista(idLista, idFilme);
        if(resposta==0) {
            ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(
                    new ApiResposta<>("Filme já inserido na lista!", null));
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ApiResposta<>("Inserção do filme feita com sucesso!", null));
    }

    @GetMapping("/")
    public ResponseEntity<List<ListaRespostaApi>> getListasPorIdUsuario(@RequestParam int idUsuario) {
        List<ListaRespostaApi> resposta = listaService.getListasPorIdUsuario(idUsuario);
        return ResponseEntity.status(HttpStatus.OK).body(resposta);
    }

}
