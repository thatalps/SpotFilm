package SpotFilm.service;
import SpotFilm.model.Avaliacao;
import SpotFilm.model.Comentario;
import SpotFilm.repository.AvaliacaoRepository;
import SpotFilm.repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;

    public Avaliacao getAvaliacaoComComentarios(Long avaliacaoId) {
        Optional<Avaliacao> avaliacaoOpt = avaliacaoRepository.findById(avaliacaoId);
        if (avaliacaoOpt.isPresent()) {
            Avaliacao avaliacao = avaliacaoOpt.get();
            List<Comentario> comentarios = comentarioRepository.findAllById(avaliacao.getComentarioIds());
            return avaliacao;
        }
        return null;
    }

}
