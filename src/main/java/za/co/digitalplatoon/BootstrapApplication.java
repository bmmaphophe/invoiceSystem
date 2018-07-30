package za.co.digitalplatoon;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import za.co.digitalplatoon.model.Invoice;
import za.co.digitalplatoon.model.LineItem;
import za.co.digitalplatoon.services.InvoicesServices;
import za.co.digitalplatoon.services.LineItemServices;

public class BootstrapApplication implements ApplicationRunner {
	
	@Autowired
	private InvoicesServices invoicesServices;
	
	private LineItemServices lineItemservices;
	
	@Override
	public void run(ApplicationArguments aa) {
		
//		
		Invoice invoice = new Invoice("AirPays",15 , new Date());
		
		LineItem lineItem1 = new LineItem(4, "Oranges", new BigDecimal("100"), invoice);
		LineItem lineItem1One = new LineItem(4, "Apples", new BigDecimal("1000"), invoice);
		LineItem lineItem1Two = new LineItem(4, "Peach", new BigDecimal("20000"), invoice);
		
		invoice.addNewLineItem(lineItem1);
		invoice.addNewLineItem(lineItem1One);
		invoice.addNewLineItem(lineItem1Two);
		
//		invoice.setLineItem(new HashSet<LineItem>(){{
//            add(lineItem1);
//            add(lineItem1One);
//            add(lineItem1Two);
//
//        }});
		
		invoicesServices.AddInvoice(invoice);
		
		Invoice invoiceOne = new Invoice("IT Works",15 , new Date());
		
		LineItem lineItem = new LineItem(4, "PC", new BigDecimal("2500"), invoiceOne);
		LineItem lineItemOne = new LineItem(4, "USBS", new BigDecimal("200"), invoiceOne);
		LineItem lineItemTwo = new LineItem(4, "Printers", new BigDecimal("3000"), invoiceOne);
		
		invoiceOne.addNewLineItem(lineItem);
		invoiceOne.addNewLineItem(lineItemOne);
		invoiceOne.addNewLineItem(lineItemTwo);
		
//		invoiceOne.setLineItem(new HashSet<LineItem>(){{
//            add(lineItem);
//            add(lineItemOne);
//            add(lineItemTwo);
//
//        }});
//	
		
		invoicesServices.AddInvoice(invoiceOne);

	}

}
