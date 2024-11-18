package gf.grocerlist.back.controllers;

import org.springframework.security.core.Authentication;

import java.net.http.HttpResponse;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@RestController
@RequestMapping("/demo")
@CrossOrigin(origins = {"http://localhost:4200"})
public class LoginController {

	@PostMapping(value = "demo")
	public String welcome() {
		return "welcome";
	}
	
}
