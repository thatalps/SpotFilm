package SpotFilm.repository;

import SpotFilm.model.Avaliacao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AvaliacaoRepository extends CrudRepository<Avaliacao, Long> {

    @Query(value = "select quantidade_estrelas from avaliacao " +
            "where id_filme= :idFilme and id_usuario= :idUsuario ;", nativeQuery = true)
    public int buscaAvaliacao(@Param("idFilme") int idFilme, @Param("idUsuario") int idUsuario);

    @Transactional
    @Modifying
    @Query(value = "insert into avaliacao values(null, :pontuacao, :idFilme, :idUsuario);", nativeQuery = true)
    public void postaAvaliacao(@Param("pontuacao") int pontuacao,
                               @Param("idFilme") int idFilme,
                               @Param("idUsuario") int idUsuario);
}
