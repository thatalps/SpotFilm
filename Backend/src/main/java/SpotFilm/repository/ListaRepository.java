package SpotFilm.repository;

import SpotFilm.model.ListaDeFilmes;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ListaRepository extends CrudRepository<ListaDeFilmes, Long> {

    @Modifying
    @Transactional
    @Query(value = "insert into lista values (null, :nomeLista, :idUsuario);", nativeQuery = true)
    public void criacaoDeLista(@Param("nomeLista") String nomeLista, @Param("idUsuario") int idUsuario);

    @Query(value = "select LAST_INSERT_ID() from lista;", nativeQuery = true)
    public int buscarUltimoIdListaCriado();

    @Query(value = "select id_lista, nome_lista from lista where usuario_idUsuario = :idUsuario ;", nativeQuery = true)
    public List<Object[]> getListasPorIdUsuario(@Param("idUsuario") int idUsuario);

}

