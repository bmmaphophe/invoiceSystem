package za.co.digitalplatoon.controllres;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import za.co.digitalplatoon.model.Invoice;
import za.co.digitalplatoon.services.InvoicesServices;


@RestController
public class InvoiceController {

	@Autowired
	private InvoicesServices invoicesservices;
	
	 @RequestMapping("/api/invoices")
	public List<Invoice> viewAllInvoices() {
		return invoicesservices.viewAllInvoices();
	}
	 @RequestMapping(value = "/api/invoices/{invoiceId}", method = RequestMethod.GET)
	public Invoice viewInvoice(@PathVariable long invoiceId) {
		 System.out.print("invoiceId "+invoiceId);
		return invoicesservices.viewInvoice(invoiceId);
		
	}
	
	 @RequestMapping(value ="/api/invoices", method = RequestMethod.POST )
	public void addInvoice( @RequestBody  Invoice invoices) {
		 invoices.setInvoiceDate(new Date());
		invoicesservices.AddInvoice(invoices);
	}
}
