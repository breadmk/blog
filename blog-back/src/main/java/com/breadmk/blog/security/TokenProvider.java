package com.breadmk.blog.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.breadmk.blog.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TokenProvider {

	private static final String SECRET_KEY = "NMA8JWctFuna59a5";
//	private static final String SECRET_KEY = "NMA8JPctFuna59f5";
	
	public String create(User user) {
		Date expiryDate = Date.from(
				Instant.now()
				.plus(1, ChronoUnit.DAYS));

		return Jwts.builder()
				.signWith(SignatureAlgorithm.HS512, SECRET_KEY)
				.setSubject(user.getUsername())
				.setIssuer("blog-back")
				.setIssuedAt(new Date())
				.setExpiration(expiryDate)
				.compact();
				
		/* 
		 
		 { //header
		 	"alg" : "HS512"
		 },
		 { //payload
		 	"sub" : "40288093784915d201784916a40c0001",
		 	"iss" :  "blog-back",
		 	"iat" :  1595733657,
		 	"exp" : 1596597657
		 	}.
		 	
		 	ASDweqpiowqpofqipofjioqrfjqwriforeqjif
		  
		 */
	}
	
	public String validateAndGetUsername(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(SECRET_KEY.getBytes())
				.parseClaimsJws(token)
				.getBody();
		
		return claims.getSubject();
	}
	
	
	
}
