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
 
- **SLA 1:**
  - Latência -> 99.89ms
  - Vazão -> 4.618 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 20

- **SLA 2:**
  - Latência -> 424.87ms
  - Vazão -> 7.779,6 requisições por segundo
  - Concorrência (limite de requisições simultâneas) -> 100
 
- **SLA 3:**
  - Latência -> 1.72s
  - Vazão -> 7.920 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 500

- **Métricas de Teste de Carga:**
  - threshold -> 500ms

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

- **SLA 1:**
  - Latência -> 5.8ms
  - Vazão -> 613,8 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 20 requisições simultaneas
 
- **SLA 2:**
  - Latência -> 11.56ms
  - Vazão -> 2.520 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 100 requisições simultaneas

- **SLA 3:**
  - Latência -> 65.48ms
  - Vazão -> 12.180 requisições por minuto
  - Concorrência (limite de requisições simultâneas) -> 500 requisições simultaneas
    
- **Métricas de Teste de Carga:**
  - threshold -> 500ms


- **Potenciais gargalos do sistema:**
- DTO com usuário e as informações de comentários.
