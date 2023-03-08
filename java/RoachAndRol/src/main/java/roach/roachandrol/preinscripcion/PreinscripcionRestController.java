package roach.roachandrol.preinscripcion;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import roach.roachandrol.entity.Asistente;
import roach.roachandrol.preinscripcion.dto.AsistenteRequest;
import roach.roachandrol.preinscripcion.dto.AsistentesDTO;
import roach.roachandrol.preinscripcion.services.InscripcionServices;

@Slf4j
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST})
@RequiredArgsConstructor
@RequestMapping(value="/v1/preinscripcion")
public class PreinscripcionRestController {
    
    private final InscripcionServices inscripcionServices;
    
    @PostMapping(value = "/registraAsistente")
    public ResponseEntity<?> addAsistente(@RequestBody AsistenteRequest request){
        try{
            inscripcionServices.inscribir(request);
        }catch (Exception e){
            log.error("Error en la inscripcion de asistente ", e);
            throw e;
        }
        
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    
    @GetMapping(value = "/getAsistentes")
    public ResponseEntity<List<AsistentesDTO>> getAsistentes(){
        
        List<AsistentesDTO> asistentesDTOS = new ArrayList<>();
        
        try{
            asistentesDTOS = inscripcionServices.getAsistentes();
        }catch (Exception e){
            log.error("Error en la inscripcion de asistente ", e);
            throw e;
        }
        
        
        return ResponseEntity.ok(asistentesDTOS);
    }
    
    
}
