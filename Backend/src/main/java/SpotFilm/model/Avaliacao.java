package SpotFilm.model;

import jakarta.persistence.*;

import java.util.Date;
import java.util.*;

@Entity
@Table(name = "avaliacao")
public class Avaliacao
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_filme")
    private Integer idFilme;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @Column(name = "quantidade_estrelas")
    private Integer quantidadeEstrelas;

    protected Avaliacao() {

    }

    public Avaliacao (int idFilme, int quantidadeEstrelas, List<String> comentarioIds) {
        this.idFilme = idFilme;
        this.quantidadeEstrelas = quantidadeEstrelas;
    }

    public int getQuantidadeEstrelas() {
        return quantidadeEstrelas;
    }

    public Long getId() {return id;}
}