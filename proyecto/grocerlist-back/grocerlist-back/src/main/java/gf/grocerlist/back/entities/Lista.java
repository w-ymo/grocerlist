package gf.grocerlist.back.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "lista")
@Data
public class Lista {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_lista")
	private Long idLista;

	@Column(name = "nombre_lista")
	private String nombreLista;
	
	//many to many a lista
	@ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	@JoinTable(name = "incluye", joinColumns = { @JoinColumn(name = "id_lista") }, inverseJoinColumns = {
			@JoinColumn(name = "id_producto") })
	private Set<Producto> productos = new HashSet<>();
	
	//many to many a lista
	@ManyToMany(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
	@JoinTable(name = "tiene", joinColumns = { @JoinColumn(name = "id_lista") }, inverseJoinColumns = {
			@JoinColumn(name = "nombre_usuario") })
	@JsonIgnore
	private Set<Usuario> usuarios = new HashSet<>();
	
}
