package roach.roachandrol.preinscripcion.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AsistenteRequest implements Serializable {
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    @JsonProperty
    private String nombre;
    
    @JsonProperty
    private String apellidos;
    
    @JsonProperty
    private String email;
    
    @JsonProperty
    private Long cp;
    
    @JsonProperty
    private Long edad;
    
    @JsonProperty
    private String txtAsociacion;
    
    @JsonProperty
    private Long pulsera;
    
    @JsonProperty
    private Boolean acudido;
    
}
