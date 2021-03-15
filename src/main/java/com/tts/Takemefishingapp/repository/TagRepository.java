package com.tts.Takemefishingapp.repository;

import com.tts.Takemefishingapp.model.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends CrudRepository<Tag, Long> {
    Tag findByPhrase(String phrase);
}