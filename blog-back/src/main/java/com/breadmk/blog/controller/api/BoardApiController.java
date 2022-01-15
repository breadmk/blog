package com.breadmk.blog.controller.api;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.breadmk.blog.config.auth.PrincipalDetail;
import com.breadmk.blog.dto.ResponseDto;
import com.breadmk.blog.model.Board;
import com.breadmk.blog.model.User;
import com.breadmk.blog.repository.UserRepository;
import com.breadmk.blog.service.BoardService;
import com.breadmk.blog.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class BoardApiController {
	
	@Autowired
	private BoardService boardService;
	
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/api/write")
	public ResponseDto<Integer> save(@RequestBody Board board) throws ParseException {
		log.info("BoardApiController : save 호출됨");
		User user = userRepository.getById(board.getId());
		boardService.save(board,user);

		return new ResponseDto<Integer>(HttpStatus.OK.value(),1);
	}	
}
