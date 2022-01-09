package com.breadmk.blog.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.filter.CorsFilter;

import com.breadmk.blog.config.auth.PrincipalDetail;
//import com.breadmk.blog.config.auth.PrincipalDetailService;
import com.breadmk.blog.security.JwtAuthenticationFilter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration //빈등록(IoC 관리)
@EnableWebSecurity //필터 추가 = 스프링 시큐리티가 활성화가 되어 있는데 어떤 설정을 해당 파일에서 하겠다
@EnableGlobalMethodSecurity(prePostEnabled = true) //특정 주소로 접근을 하면 권한 및 인증을 미리 체크하겠다는 뜻.
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtAuthenticationFilter jwtAuthenticationFilter;
	
//	@Autowired
//	private PrincipalDetailService principalDetailService;
//	
	@Bean //IoC 가 관리해줌
	public BCryptPasswordEncoder encodePWD() {
		return new BCryptPasswordEncoder();
	}
	
	/*
	   시큐리티가 대신 로그인해주는데 password를 가로채서, 해당 password가 
	   어떤 해쉬로 회원가입이 되었는지 알아야 같은 해쉬로 DB에 있는 해쉬랑 비교할 수 있다.
	 */
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(principalDetailService).passwordEncoder(encodePWD());
//	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// http 시큐리티 빌더
		http.cors()
				.and()
				.csrf()
					.disable() //csrf 토큰 비활성화 (테스트시 걸어두는게 좋음)
				.httpBasic()
					.disable()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
				.and()
				.authorizeRequests()
				.antMatchers("/auth/**").permitAll()
				.anyRequest()
				.authenticated()
				.and()
				.formLogin()
					.loginPage("/auth/loginForm")
					.loginProcessingUrl("/auth/loginProc") // 스프링 시큐리티가 해당 주소로 요청오는 로그인을 가로채서 대신 로그인 해준다.
					.defaultSuccessUrl("/");
		http.addFilterAfter(jwtAuthenticationFilter, CorsFilter.class);
	}

}
