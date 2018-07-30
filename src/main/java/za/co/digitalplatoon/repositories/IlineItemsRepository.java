package za.co.digitalplatoon.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import za.co.digitalplatoon.model.LineItem;
@Repository
@Transactional
public interface IlineItemsRepository extends CrudRepository<LineItem, Long> {

}
