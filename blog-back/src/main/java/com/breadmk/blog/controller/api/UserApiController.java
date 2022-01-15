package com.breadmk.blog.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.breadmk.blog.dto.ResponseDto;
import com.breadmk.blog.dto.UserDto;
import com.breadmk.blog.model.RoleType;
import com.breadmk.blog.model.User;
import com.breadmk.blog.security.TokenProvider;
import com.breadmk.blog.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserApiController {
	
	@Autowired
	private UserService userService; 
	
	@Autowired
	private TokenProvider tokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	


	@PostMapping("/auth/joinProc")
	public ResponseDto<Integer> save(@RequestBody User entity) {
		log.info("UserApiController : save 호출됨");

		userService.join(entity);
		
		return new ResponseDto<Integer>(HttpStatus.CREATED.value(),1);
	}
	
	@PostMapping("/auth/loginForm")
	public ResponseEntity<?> authenticate(@RequestBody User entity) {
		User principal = userService.login(entity,passwordEncoder);
		System.out.println(principal);
		if( principal !=null ) {
			final String token = tokenProvider.create(principal);
			final UserDto responseUserDto = UserDto.builder()
					.username(principal.getUsername())
					.id(principal.getId())
					.token(token)
					.build();
			System.out.println(responseUserDto);
			return ResponseEntity.ok(responseUserDto);
		}else {
			return (ResponseEntity<?>) ResponseEntity.notFound();
		}
	}
	
	//스프링 시큐리티 이용해서 로그인!!!! (아래코드 X )
//	@PostMapping("/api/user/login")
//	public ResponseDto<Integer> login(@RequestBody User entity, HttpSession session){
//		log.info("UserApiController : login 호출됨");
//		
//		User principal = userService.login(entity); //principal (접근주체)
//		
//		if( principal !=null ) {
//			return new ResponseDto<Integer>(HttpStatus.OK.value(),1);
//		}else {
//			return new ResponseDto<Integer>(HttpStatus.NOT_FOUND.value(),0);
//		}
//	}
}
