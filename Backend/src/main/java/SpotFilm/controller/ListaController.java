package SpotFilm.controller;


import SpotFilm.model.Filme;
import SpotFilm.service.ListaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ListaController {

    @Autowired
    ListaService listaService;

    @GetMapping("/lista/{id}")
    public ResponseEntity<Filme> getListaPorId(@PathVariable long idLista) {
//       busca no service os filmes e formatar pro front
//        Optional<Filme> filmes = listaService.getListaPorId(idLista);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/lista/{nomeLista}")
    public ResponseEntity<Filme> getListaPorNomeLista(@PathVariable String nomeLista) {
//       busca no service os filmes e formatar pro front
//        Optional<Filme> filmes = listaService.getListaPorNomeLista(nomeLista);
        return ResponseEntity.ok(null);
    }

}
