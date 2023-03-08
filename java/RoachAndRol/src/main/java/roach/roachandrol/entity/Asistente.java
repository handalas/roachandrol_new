package roach.roachandrol.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(schema = "roachandrol", name = "asistente")
public class Asistente {
    
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "apellidos")
    private String apellidos;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "cp")
    private Long cp;
    
    @Column(name = "edad")
    private Long edad;
    
    @Column(name = "asociacion")
    private String asociacion;
    
    @Column(name = "pulsera")
    private Long pulsera;
    
    @Column(name = "acudido")
    private Boolean acudido;
    
}
