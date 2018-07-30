package za.co.digitalplatoon.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import za.co.digitalplatoon.model.LineItem;
import za.co.digitalplatoon.repositories.IlineItemsRepository;

@Service
public class LineItemServices {
	
	@Autowired
	private IlineItemsRepository ilineItemsRepository;
	
	
	public List<LineItem> getAllInvoices(){
		
		List<LineItem> list = new ArrayList<>();
		ilineItemsRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	
	public LineItem AddLineItems(LineItem invoice) {
		
		 return ilineItemsRepository.save(invoice);
	}

}
