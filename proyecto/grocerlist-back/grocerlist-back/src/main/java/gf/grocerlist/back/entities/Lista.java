package gf.grocerlist.back.entities;

import java.util.HashSet;
import java.util.Set;

import org.apache.catalina.User;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "lista")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude="usuarios")
public class Lista {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_lista")
	private Long idLista;

	@Column(name = "nombre_lista")
	private String nombreLista;
	
	@ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "usuario_creador", nullable = false)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Usuario usuarioCreador;
	
	//many to many a lista
	@OneToMany(mappedBy= "lista" ,cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	private Set<Incluye> productos = new HashSet<>();
	
	//many to many a lista
	@ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	@JoinTable(name = "tiene", joinColumns = { @JoinColumn(name = "id_lista") }, inverseJoinColumns = {
			@JoinColumn(name = "id_usuario") })
	@JsonIgnore
	private Set<Usuario> usuarios = new HashSet<>(); 
	
}
