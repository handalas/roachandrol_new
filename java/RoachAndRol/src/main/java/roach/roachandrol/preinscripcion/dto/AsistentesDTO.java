package roach.roachandrol.preinscripcion.dto;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AsistentesDTO implements Serializable {
    
    private Integer id;
    private String name;
    private String apellidos;
    private String email;
    private Long cp;
    private Long edad;
    private String asociacion;
    private Long pulsera;
    private Boolean acudido;
    
}
