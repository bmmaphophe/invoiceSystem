package za.co.digitalplatoon.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import za.co.digitalplatoon.model.Invoice;
import za.co.digitalplatoon.repositories.IinvoiesRepository;

@Service
public class InvoicesServices  {
	
	@Autowired
	private IinvoiesRepository invoiesReposotory;
	
	
	
	public List<Invoice> viewAllInvoices(){
	

		List<Invoice> list = new ArrayList<>();
		invoiesReposotory.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	public Invoice viewInvoice(long invoiceNumber) {
		
		Invoice obj =invoiesReposotory.findById(invoiceNumber).get();
		return obj;
		
	}
	
	public void AddInvoice(Invoice invoice) {
		
		 invoiesReposotory.save(invoice);
	}
	
	
	

}
