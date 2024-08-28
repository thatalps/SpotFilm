import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { target: 2, duration: "5s" },  // Reduzido para 2
        { target: 2, duration: "15s" }, // Reduzido para 2
        { target: 0, duration: "5s" }
    ],
    thresholds: {
        "http_req_duration": ["p(95)<100"]
    },
};
export default function () {

    const url = 'http://localhost:8080/usuarios/cadastro';

    const uniqueTimestamp = Date.now(); // Obtém o timestamp atual
    const uniqueEmail = `teste${uniqueTimestamp}@gmail.com`;
    const uniqueNome = `Teste${uniqueTimestamp}`;

    const payload = JSON.stringify({
        id: 0,
        nome: uniqueNome,
        email: uniqueEmail,
        senha: "1234",
        dataNascimento: "02-02-2004",
        generoPreferido1: 18,
        generoPreferido2: 28,
        avaliacoes: []
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    let res;

    try {
        // Tentar fazer a requisição HTTP
        res = http.post(url, payload, params);

        // Verificar se a resposta é um objeto válido
        if (res && typeof res === 'object' && res.status) {
            check(res, { "status is 200": (r) => r.status === 200 });
        } else {
            console.error(`Resposta inválida: ${JSON.stringify(res)}`);
        }
    } catch (error) {
        // Capturar erros e logar a mensagem de erro
        console.error(`Erro na requisição HTTP: ${error.message}`);
    }

    sleep(2);

}
