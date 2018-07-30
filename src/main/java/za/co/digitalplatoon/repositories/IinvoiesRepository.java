package za.co.digitalplatoon.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import za.co.digitalplatoon.model.Invoice;
@Repository
@Transactional
public interface IinvoiesRepository extends CrudRepository<Invoice, Long> {
	
	
	
	

}
