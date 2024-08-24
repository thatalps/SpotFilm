package SpotFilm.repository;

import SpotFilm.model.Avaliacao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvaliacaoRepository extends CrudRepository<Avaliacao, Long> {

    @Query(value = "SELECT id_avaliacao " +
            "FROM avaliacao " +
            "WHERE id_filme LIKE :idFilme ", nativeQuery = true)
    List<Avaliacao> buscaAvaliacaoPorFilme(long idFilme);

}
