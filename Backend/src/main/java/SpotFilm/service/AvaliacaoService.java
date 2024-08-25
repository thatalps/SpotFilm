package SpotFilm.service;

import SpotFilm.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    public int postaAvaliacao(int idFilme, int idUsuario, int pontuacao) {
        Optional<Integer> idAvaliacao= avaliacaoRepository.confereSeAvaliacaoJaExiste(idFilme, idUsuario);
        if(idAvaliacao.isPresent()) {
            return 0;
        }
        avaliacaoRepository.postaAvaliacao(pontuacao,idFilme,idUsuario);
        return 1;
    }
    public int getAvaliacao(int idFilme, int idUsuario) {
        return avaliacaoRepository.buscaAvaliacao(idFilme, idUsuario);
    }

}
