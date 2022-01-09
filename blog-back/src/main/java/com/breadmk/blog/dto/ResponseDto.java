package com.breadmk.blog.dto;

import org.springframework.http.HttpStatus;

import com.breadmk.blog.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResponseDto<T> {

	int status;
	T data;
}
