package SpotFilm.controller;

import SpotFilm.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/cometario")
public class AvaliacaoController {

    @Autowired
    AvaliacaoRepository avaliacaoRepository;




}
