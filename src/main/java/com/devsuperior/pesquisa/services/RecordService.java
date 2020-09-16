package com.devsuperior.pesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.pesquisa.dto.RecordDTO;
import com.devsuperior.pesquisa.dto.RecordInsertDTO;
import com.devsuperior.pesquisa.entities.Game;
import com.devsuperior.pesquisa.entities.Record;
import com.devsuperior.pesquisa.repositories.GameRepository;
import com.devsuperior.pesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
			entity.setName(dto.getName());
			entity.setAge(dto.getAge());
			entity.setMoment(Instant.now());
			// recebendo o id do game;
			Game game = gameRepository.getOne(dto.getGameId());
			entity.setGame(game);
			
			entity = recordRepository.save(entity);
			
			return new RecordDTO(entity);
			
	}
}