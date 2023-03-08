package roach.roachandrol.preinscripcion.services;

import java.util.List;

import roach.roachandrol.preinscripcion.dto.AsistenteRequest;
import roach.roachandrol.preinscripcion.dto.AsistentesDTO;

public interface InscripcionServices {
    
    /**
     * Guarda preinscrito
     * @param request
     */
    public void inscribir(AsistenteRequest request);
    
    public List<AsistentesDTO> getAsistentes();
}
