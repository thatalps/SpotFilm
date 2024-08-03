package SpotFilm.repository;

import SpotFilm.model.ListaDeFilmes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListaDeFilmesRepository extends CrudRepository<ListaDeFilmes, Long> {

}
