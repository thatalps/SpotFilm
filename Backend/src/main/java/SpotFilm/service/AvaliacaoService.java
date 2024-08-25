package SpotFilm.service;

import SpotFilm.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    public void postaAvaliacao(int idFilme, int idUsuario, int pontuacao) {
      avaliacaoRepository.postaAvaliacao(pontuacao,idFilme,idUsuario);
    }
    public int getAvaliacao(int idFilme, int idUsuario) {
        return avaliacaoRepository.buscaAvaliacao(idFilme, idUsuario);
    }

}
