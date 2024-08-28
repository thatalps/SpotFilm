import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { target: 10, duration: "20s" },
        { target: 20, duration: "25s" },
        { target: 0, duration: "15s" }
    ],
    thresholds: {
        "http_req_duration": ["p(95)<100"]
    },
};

export default function () {

    const url = 'http://localhost:8080/comentario/bucarTodos';

    let res;

    try {

        res = http.get(url);

        if (res && typeof res === 'object' && res.status) {
            check(res, { "status is 200": (r) => r.status === 200 });
        } else {
            console.error(`Resposta inválida: ${JSON.stringify(res)}`);
        }
    } catch (error) {

        console.error(`Erro na requisição HTTP: ${error.message}`);
    }

    sleep(1);

}
