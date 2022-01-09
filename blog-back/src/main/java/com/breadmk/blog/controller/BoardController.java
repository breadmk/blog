package com.breadmk.blog.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	
	@GetMapping("/")
	public  ResponseEntity<?> index() {
		
		Map<String,String> aa = new HashMap<String, String>();
		aa.put("dd","test");
		return new ResponseEntity<Map<String,String>>(aa,HttpStatus.OK);
	}
	
	@GetMapping("/api/hello")
	public String hello(){
	return "안녕하세요. 현재 서버시간은 "+new Date() +"입니다. \n";
	}
	

}
