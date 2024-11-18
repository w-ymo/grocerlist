package gf.grocerlist.back.services;

import gf.grocerlist.back.request.LoginRequest;
import gf.grocerlist.back.request.RegisterRequest;
import gf.grocerlist.back.security.AuthResponse;

public interface AuthService {

	AuthResponse login(LoginRequest rq);
	AuthResponse register(RegisterRequest rq);
	
}
