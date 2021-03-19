package com.tts.Takemefishingapp.service;

import com.tts.Takemefishingapp.model.Response;
import com.tts.Takemefishingapp.model.ZipCode;
import com.tts.Takemefishingapp.repository.ZipCodeRepository;
import com.tts.Takemefishingapp.repository.ZipCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class WeatherService {

    @Value("${api_key}")
    private String apiKey;

    @Autowired
    ZipCodeRepository zipCodeRepository;

    public Response getForecast(String zipCode) {
        String url = "http://api.openweathermap.org/data/2.5/weather?zip=" +
                zipCode + "&units=imperial&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();


        try {
            ZipCode newZip = new ZipCode();
            newZip.setZipCode(zipCode);
            zipCodeRepository.save(newZip);
            return restTemplate.getForObject(url, Response.class);
        } catch (HttpClientErrorException ex) {
            Response response = new Response();
            response.setName("error");
            return response;
        }
    }

    public List<ZipCode> getRecentSearches() {
        List<ZipCode> recentSearches =
                zipCodeRepository.findAll(
                        PageRequest.of(
                                0,
                                5,
                                Sort.by("createdAt").descending()))
                        .getContent();
        return recentSearches;
    }

}

