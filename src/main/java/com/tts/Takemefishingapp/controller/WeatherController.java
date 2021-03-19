package com.tts.Takemefishingapp.controller;

import com.tts.Takemefishingapp.model.Request;
import com.tts.Takemefishingapp.model.Response;
import com.tts.Takemefishingapp.repository.ZipCodeRepository;
import com.tts.Takemefishingapp.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @GetMapping(value = "/weather")
    public String getIndextwo(Model model) {
        model.addAttribute("request", new Request());
        model.addAttribute("recentSearches", weatherService.getRecentSearches());
        return "indextwo";
    }

    @PostMapping
    public String postIndextwo(Request request, Model model) {
        Response data = weatherService.getForecast(request.getZipCode());
        model.addAttribute("data", data);
        return "indextwo";
    }
}

