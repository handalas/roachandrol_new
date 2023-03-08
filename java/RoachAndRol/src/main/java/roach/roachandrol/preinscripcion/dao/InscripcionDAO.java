package roach.roachandrol.preinscripcion.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import roach.roachandrol.entity.Asistente;
@Repository
public interface InscripcionDAO extends JpaRepository<Asistente, Long>, JpaSpecificationExecutor<Asistente> {}
