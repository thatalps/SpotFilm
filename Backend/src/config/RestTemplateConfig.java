package SpotFilm.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Configuration
public class RestTemplateConfig {

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder
                .additionalMessageConverters(new MappingJackson2HttpMessageConverter(Jackson2ObjectMapperBuilder.json().build()))
                .additionalInterceptors(new BearerTokenInterceptor())
                .build();
    }

    public static class BearerTokenInterceptor implements ClientHttpRequestInterceptor {

        private static final String TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzMyMDBmMmVmZjBjYTcxNGE2YTU3NzE4MzU3OWNmNyIsIm5iZiI6MTcyMjM2NTkyMC45MDYyMTgsInN1YiI6IjY2OWFmNGJmNTRmNWM2YTU4MDc3NTk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5OOtwOAPC_ENS-dtRBSOGhBiWLfKt_uJnv26U925T3Q";

        @Override
        public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
            HttpHeaders headers = request.getHeaders();
            headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + TOKEN);
            return execution.execute(request, body);
        }
    }


}
