package com.tts.Takemefishingapp.repository;

import com.tts.Takemefishingapp.model.ZipCode;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZipCodeRepository extends PagingAndSortingRepository<ZipCode, Long> {
}
