package roach.roachandrol.preinscripcion.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import roach.roachandrol.entity.Asistente;
import roach.roachandrol.preinscripcion.dao.InscripcionDAO;
import roach.roachandrol.preinscripcion.dto.AsistenteRequest;
import roach.roachandrol.preinscripcion.dto.AsistentesDTO;

@Slf4j
@Repository
@RequiredArgsConstructor
public class InscripcionServicesImpl implements InscripcionServices{
    
    private final InscripcionDAO inscripcionDAO;
    @Override
    public void inscribir(AsistenteRequest request) {
    
        Asistente asistente = new Asistente();
        
        asistente.setNombre(request.getNombre());
        asistente.setApellidos(request.getApellidos());
        asistente.setEmail(request.getEmail());
        asistente.setCp(request.getCp());
        asistente.setEdad(request.getEdad());
        asistente.setAsociacion(request.getTxtAsociacion());
        if(request.getPulsera() != null && request.getPulsera() != 0){
            asistente.setPulsera(request.getPulsera());
        }
        if(request.getAcudido() != null && request.getAcudido()){
            asistente.setAcudido(request.getAcudido());
        }
        
        inscripcionDAO.save(asistente);
    }
    
    @Override
    public List<AsistentesDTO> getAsistentes() {
        
        List<Asistente> asistentesList = inscripcionDAO.findAll();
        List<AsistentesDTO> asistentes = new ArrayList<>();
        if(asistentesList != null && !asistentesList.isEmpty()){
            for(Asistente asistente: asistentesList){
                AsistentesDTO asistentesDTO = new AsistentesDTO();
                asistentesDTO.setId(asistente.getId());
                asistentesDTO.setName(asistente.getNombre());
                asistentesDTO.setApellidos(asistente.getApellidos());
                asistentesDTO.setCp(asistente.getCp());
                asistentesDTO.setEdad(asistente.getEdad());
                asistentesDTO.setAsociacion(asistente.getAsociacion());
                asistentesDTO.setPulsera(asistente.getPulsera());
                asistentesDTO.setAcudido(asistente.getAcudido());
    
                asistentes.add(asistentesDTO);
            }
        }
        
        
        return asistentes;
    }
}
