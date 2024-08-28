# Medições do SLA

## Cadastro do Usuário

- **Tipo de operação:** inserção

- **Arquivos envolvidos:**
  - `Usuario.java`
  - `Admin.java`
  - `UsuarioRepository.java`
  - `UsuarioService.java`
  - `UsuarioController.java`

- **Arquivos com o código fonte de medição do SLA:**
  - `script_usuario_k6.js`

- **Data da medição:** 27/08/2024

- **Descrição das configurações (máquinas/containers utilizadas para o sistema funcionar, ...):**
  - Processador: Ryzen 5 7600
  - Memória: 16GB DDR5
  - MySQL

- **Testes de carga (SLA):**
  - Latência -> 424.87ms
  - Vazão -> 7.779,6 requisições por segundo
  - Concorrência (limite de requisições simultâneas) -> 100

 - **Métricas de Teste de Carga:**
  -      checks.........................: 99.57% ✓ 9048      ✗ 39   
     data_received..................: 3.6 MB 52 kB/s
     data_sent......................: 2.8 MB 40 kB/s
     http_req_blocked...............: avg=12.83µs  min=0s      med=0s       max=3.51ms  p(90)=0s       p(95)=0s      
     http_req_connecting............: avg=10.11µs  min=0s      med=0s       max=3.51ms  p(90)=0s       p(95)=0s      
   ✗ http_req_duration..............: avg=424.87ms min=55.9ms  med=432.66ms max=1.54s   p(90)=694.65ms p(95)=745.49ms
       { expected_response:true }...: avg=423.64ms min=55.9ms  med=431.94ms max=1.53s   p(90)=694ms    p(95)=744.84ms
     http_req_failed................: 0.42%  ✓ 39        ✗ 9048 
     http_req_receiving.............: avg=68.44µs  min=0s      med=0s       max=11.18ms p(90)=0s       p(95)=847.83µs
     http_req_sending...............: avg=13.22µs  min=0s      med=0s       max=5.51ms  p(90)=0s       p(95)=0s      
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=424.78ms min=55.9ms  med=432.24ms max=1.54s   p(90)=694.62ms p(95)=745.48ms
     http_reqs......................: 9087   129.66052/s
     iteration_duration.............: avg=425.21ms min=56.36ms med=432.92ms max=1.54s   p(90)=694.86ms p(95)=745.87ms
     iterations.....................: 9087   129.66052/s
     vus............................: 11     min=3       max=99 
     vus_max........................: 100    min=100     max=100

- **Potenciais gargalos do sistema:**
  

## Funcionalidade de Comentários

- **Tipo de operação:** leitura

- **Arquivos envolvidos:**
  - `ComentarioController.java`
  - `ComentarioResposta.java`
  - `Comentario.java`
  - `ComentarioRepository.java`
  - `ComentarioService.java`

- **Arquivos com o código fonte de medição do SLA:**
  - `script_comentario_k6.js`

- **Data da medição:** 27/08/2024

- **Descrição das configurações (máquinas/containers utilizadas para o sistema funcionar, ...):**
  - Processador: Ryzen 5 7600
  - Memória: 16GB DDR5
  - MongoDB

- **Testes de carga (SLA):**
  - Latência -> 5.8ms
  - Vazão -> 613,8 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 20 requisições simultaneas

- **Métricas de Teste de Carga:**
checks.........................: 100.00% ✓ 622 ✗ 0
data_received..................: 820 kB 14 kB/s data_sent......................: 63 kB 1.0 kB/s http_req_blocked...............: avg=9.58µs min=0s med=0s max=4.35ms p(90)=0s p(95)=0s
http_req_connecting............: avg=2.58µs min=0s med=0s max=539.9µs p(90)=0s p(95)=0s
✓ http_req_duration..............: avg=5.8ms min=3.54ms med=5.78ms max=13.55ms p(90)=6.73ms p(95)=7.08ms
{ expected_response
}...: avg=5.8ms min=3.54ms med=5.78ms max=13.55ms p(90)=6.73ms p(95)=7.08ms
http_req_failed................: 0.00% ✓ 0 ✗ 622 http_req_receiving.............: avg=483.73µs min=0s med=470.8µs max=1.5ms p(90)=960µs p(95)=998.68µs http_req_sending...............: avg=1.13µs min=0s med=0s max=504.7µs p(90)=0s p(95)=0s
http_req_tls_handshaking.......: avg=0s min=0s med=0s max=0s p(90)=0s p(95)=0s
http_req_waiting...............: avg=5.32ms min=3.52ms med=5.07ms max=12.83ms p(90)=6.44ms p(95)=6.55ms
http_reqs......................: 622 10.231624/s iteration_duration.............: avg=1.01s min=1s med=1.01s max=1.02s p(90)=1.01s p(95)=1.01s
iterations.....................: 622 10.231624/s vus............................: 1 min=1 max=20 vus_max........................: 20 min=20 max=20

- **Potenciais gargalos do sistema:**
- DTO com usuário e as informações de comentários.
