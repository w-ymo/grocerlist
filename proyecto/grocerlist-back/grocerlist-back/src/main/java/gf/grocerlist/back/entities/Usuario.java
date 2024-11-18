package gf.grocerlist.back.entities;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="usuario", uniqueConstraints = @UniqueConstraint(columnNames = {"nombre_usuario"}))
@Getter
@Setter
@ToString
public class Usuario implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private Long idUsuario;
	
	@Column(name = "nombre_usuario", unique = true)
	private String nombreUsuario;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "apellido1")
	private String apellido1;
 
	@Column(name = "apellido2")
	private String apellido2;
	
	@Column(name = "correo_electronico")
	private String correoElectronico;
	
	@Column(name = "password")
	private String password;
	
	@OneToMany(mappedBy = "usuarioCreador")
	Set<Lista> listasCreadas = new HashSet<>();
	
	@ManyToMany(mappedBy = "usuarios", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Lista> listas = new HashSet<>();

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(("default")));
	}

	@Override
	public String getUsername() {
		return nombreUsuario;
	}
	
}
