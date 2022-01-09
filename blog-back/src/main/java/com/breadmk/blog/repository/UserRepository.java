package com.breadmk.blog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.breadmk.blog.dto.UserDto;
import com.breadmk.blog.model.User;

//DAO
// 자동으로 bean등록이 된다.
@Repository // 생략 가능하다.
public interface UserRepository extends JpaRepository<User, Integer> {

	// 로그인을 위한 함수
	// JPA Naming 쿼리
	// SELECT * FROM user WHERE username =?1(username) and password =?2(password);
	User findByUsernameAndPassword(String username,String password);
	
	User findByEmail(String email);
	
	//SELECT * FROM user WHERE username=1?;
	//	Optional<User> findByUsername(String username);
	User findByUsername(String username);
	
	/*
	
	findByUsernameAndPassword(); 메소드랑 동일하게 작용함. 복잡해지면 네이티브쿼리를 이용함.
	
	@Query(value = "SELECT * FROM user WHERE username =?1 and password =?2" , nativeQuery = true)
	User login(String username,String password);
	*/
}
