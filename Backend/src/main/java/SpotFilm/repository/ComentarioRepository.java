package SpotFilm.repository;

import SpotFilm.model.Comentario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ComentarioRepository extends MongoRepository<Comentario, String> {
    List<Comentario> findByIdFilme(Integer idFilme);
}
