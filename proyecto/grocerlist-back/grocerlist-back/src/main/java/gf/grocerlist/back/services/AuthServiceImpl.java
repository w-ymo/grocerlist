package gf.grocerlist.back.services;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import gf.grocerlist.back.entities.Usuario;
import gf.grocerlist.back.repositories.UsuarioRepository;
import gf.grocerlist.back.request.LoginRequest;
import gf.grocerlist.back.request.RegisterRequest;
import gf.grocerlist.back.security.AuthResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	@Autowired
	private UsuarioRepository userRepo;
	@Autowired
	private JwtService jwtService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Override
	public AuthResponse login(LoginRequest rq) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(rq.getUsername(), rq.getPassword()));
        Usuario user=userRepo.findByNombreUsuario(rq.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();
	}

	@Override
	public AuthResponse register(RegisterRequest rq) {
		Usuario user = new Usuario();
		user.setCorreoElectronico(rq.getEmail());
		user.setNombreUsuario(rq.getUsername());
		user.setPassword(passwordEncoder.encode(rq.getPassword()));
		userRepo.save(user);
		
		return AuthResponse.builder().token(jwtService.getToken(user)).build();
	}

	
	
}
