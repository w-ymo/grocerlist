package gf.grocerlist.back.controllers;

import org.springframework.security.core.Authentication;

import java.net.http.HttpResponse;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@RestController
public class LoginController {
//
//	private final AuthenticationManager authenticationManager;
//
//	public LoginController(AuthenticationManager authenticationManager) {
//		this.authenticationManager = authenticationManager;
//	}
//
//	/*
//	 * @PostMapping("/login") public ResponseEntity<Void> login(@RequestBody
//	 * LoginRequest loginRequest) { Authentication authenticationRequest =
//	 * UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.username(),
//	 * loginRequest.password()); Authentication authenticationResponse =
//	 * this.authenticationManager.authenticate(authenticationRequest); return
//	 * authenticationResponse; }
//	 */
//
//	public record LoginRequest(String username, String password) {
//		
//	}

}
