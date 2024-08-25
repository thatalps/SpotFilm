package SpotFilm.service;

import SpotFilm.dto.ListaRespostaApi;
import SpotFilm.model.Filme;
import SpotFilm.repository.ItemListaRepository;
import SpotFilm.repository.ListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ListaService {

    @Autowired
    ListaRepository listaRepository;

    @Autowired
    ItemListaRepository itemListaRepository;

    @Autowired
    ApiService apiService;

    public Integer criacaoDeLista(String nomeLista, int idFilme, int idUsuario) {
        //pega listas do usuario
        Map<Integer,String> hashLista =  converterParaMap(listaRepository.getListasPorIdUsuario(idUsuario));
        Set<Integer> chaves = hashLista.keySet();
        //percorre lista conferindo se nome da lista já existe
        for (Integer chave : chaves) {
            String nomeListaHash = hashLista.get(chave);
            if(nomeLista.equals(nomeListaHash)) {
                return 0;
            }
        }
        listaRepository.criacaoDeLista(nomeLista, idUsuario);
        int ultimoId = listaRepository.buscarUltimoIdListaCriado();
        itemListaRepository.insereItemLista(ultimoId, idFilme);
        return ultimoId;
    }

    public int inserirFilmeEmLista(int idLista, int idFilme) {
        List<Integer> item =itemListaRepository.buscaFilmesPorIdLista(idLista);
        //se filme não esta na lista, então insere
        if(item.isEmpty()) {
            itemListaRepository.insereItemLista(idLista, idFilme);
            return 1;
        }
        if(item.contains(idFilme))
            return 0;
        itemListaRepository.insereItemLista(idLista,idFilme);
        return 1;
    }

    public List<ListaRespostaApi> getListasPorIdUsuario(int idUsuario) {
        //pegar id lista, nome lista
        Map<Integer,String> hashLista =  converterParaMap(listaRepository.getListasPorIdUsuario(idUsuario));
        Set<Integer> chaves = hashLista.keySet();

        List<ListaRespostaApi> listaRespostaApiFinal = new ArrayList<>();
        for (Integer chave : chaves) {
            //cria objeto de retorno com id e nome lista
            ListaRespostaApi listaResptemp = new ListaRespostaApi();
            listaResptemp.setId(chave);
            listaResptemp.setTitle(hashLista.get(chave));

            //busca filmes da lista
            List<Integer> listaIdFilmes = itemListaRepository.buscaFilmesPorIdLista(chave);

            //busca filmes na API
            List<Filme> listaFilmes = pegaListaDeFilmes(listaIdFilmes);

            //adiciona no objeto a lista de filmes
            listaResptemp.setMovies(listaFilmes);

            // adiciona na lista de respostas da api o objetc lista criado
            listaRespostaApiFinal.add(listaResptemp);
        }
        return listaRespostaApiFinal;
    }

    private List<Filme> pegaListaDeFilmes(List<Integer> listaIdFilmes)
    {
        List<Filme> listaFilmes = new ArrayList<>();
        for (Integer id: listaIdFilmes) {
            listaFilmes.add(apiService.getFilmePorId((id.longValue())));
        }
        return listaFilmes;
    }

    private Map<Integer, String> converterParaMap(List<Object[]> resultados) {
        Map<Integer, String> resultadoMap = new HashMap<>();
        for (Object[] resultado : resultados) {
            Integer idLista = (Integer) resultado[0];
            String nomeLista = (String) resultado[1];
            resultadoMap.put(idLista, nomeLista);
        }
        return resultadoMap;
    }

}
