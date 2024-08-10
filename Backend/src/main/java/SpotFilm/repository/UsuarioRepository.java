package SpotFilm.repository;

import java.util.List;

import SpotFilm.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
    Usuario findById(long id);
    Usuario findByEmail(String email);
}
