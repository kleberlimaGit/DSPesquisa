package com.devsuperior.pesquisa.controllers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.pesquisa.dto.RecordDTO;
import com.devsuperior.pesquisa.dto.RecordInsertDTO;
import com.devsuperior.pesquisa.services.RecordService;

@RestController
@RequestMapping(value="/records")
public class RecordController {
	
	@Autowired
	private RecordService recordService;
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto) {
		RecordDTO newDTO = recordService.insert(dto);
		return ResponseEntity.ok().body(newDTO);
		
	}
	
	@GetMapping
	public ResponseEntity<Page<RecordDTO>> findAll(
			@RequestParam(value = "min", defaultValue = "") String min,
			@RequestParam(value = "max", defaultValue = "") String max,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "0") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "moment") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction ) {
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/MM/yyyy");
		LocalDate minDate = ("".equals(min)) ? null : LocalDate.parse(min,formatter);
		LocalDate maxDate = ("".equals(max)) ? null : LocalDate.parse(max,formatter);
		
		if(linesPerPage == 0) {
			linesPerPage = Integer.MAX_VALUE;
		}
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		Page<RecordDTO> list = recordService.findByMoments(minDate, maxDate, pageRequest);
		return ResponseEntity.ok().body(list);
		

	}
	
}
