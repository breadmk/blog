package com.breadmk.blog.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.breadmk.blog.dto.UserDto;
import com.breadmk.blog.model.Board;
import com.breadmk.blog.model.RoleType;
import com.breadmk.blog.model.User;
import com.breadmk.blog.repository.BoardRepository;
import com.breadmk.blog.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

// 스프링이 컴포넌트 스캔을 통해서 Bean에 등록을 해줌. ( IoC) 
@Service
@Slf4j
public class BoardService {

	
	@Autowired
	private BoardRepository boardRepository;
	

	@Transactional
	public void save(Board board,User user) { //title,content
		board.setCount(0);
		board.setUser(user);
		boardRepository.save(board);
	}
	
//	@Transactional(readOnly = true) //select 할때 트랜잭션이 시작. 서비스 종료 트랜잭션 종료 (정합성 유지)
//	public User login(User entity) {
//		return userRepository.findByUsernameAndPassword(entity.getUsername(), entity.getPassword());
//		
//	}
}
