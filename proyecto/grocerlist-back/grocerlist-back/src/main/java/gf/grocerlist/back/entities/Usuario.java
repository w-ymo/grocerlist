package gf.grocerlist.back.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="usuario")
@Getter
@Setter
@ToString
public class Usuario {

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
	
	@ManyToMany(mappedBy = "usuarios", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private Set<Lista> listas = new HashSet<>();
	
}
