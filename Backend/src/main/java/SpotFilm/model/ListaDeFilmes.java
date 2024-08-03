package SpotFilm.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "lista")
public class ListaDeFilmes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_lista")
    private Long id;

    @Column(name = "nome_lista", nullable = false, length = 100)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "usuario_idUsuario", nullable = false)
    private Usuario usuario;

    // Construtor padrão
    public ListaDeFilmes() {}

    // Construtor com parâmetros
    public ListaDeFilmes(String nome, Usuario usuario) {
        this.nome = nome;
        this.usuario = usuario;
    }

    // Getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}