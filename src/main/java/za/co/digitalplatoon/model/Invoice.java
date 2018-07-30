package za.co.digitalplatoon.model;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "invoice")
public class Invoice  {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long Id;

	@Column
	public String client;

	@Column
	private long vatRate;

	@Column
	private Date invoiceDate;

	@OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
	@JoinColumn(name="invoiceId")	
	@JsonBackReference
	private List<LineItem>lineItems=new ArrayList<>();



	public Invoice() {
		super();
	}

	public Invoice(String client, long vatRate, Date invoiceDate) {
		super();
		this.client = client;
		this.vatRate = vatRate;
		this.invoiceDate = invoiceDate;
	}

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public long getVatRate() {
		return vatRate;
	}

	public void setVatRate(long vatRate) {
		this.vatRate = vatRate;
	}

	public Date getInvoiceDate() {
		return invoiceDate;
	}

	public void setInvoiceDate(Date invoiceDate) {
		this.invoiceDate = invoiceDate;
	}

	public List<LineItem> getLineItem() {
		return lineItems;
	}

	public void setLineItem(List<LineItem> lineItems) {
		this.lineItems = lineItems;
	}

	public void addNewLineItem(LineItem li) {
		li.setInvoice(this);
		lineItems.add(li);
	}

	public void removeNewLineItem(LineItem li) {
		li.setInvoice(null);
		lineItems.remove(li);
	}

	BigDecimal grandTotal =new BigDecimal("0");
	BigDecimal subTotal;
	public BigDecimal getSubTotal() {

		

		for (int i=0; i<getLineItem().size(); i++){

			long numberOfItems = getLineItem().get(i).getQuantity();

			BigDecimal units = getLineItem().get(i).getUnitPrice();

			  subTotal  = units.multiply( new BigDecimal(numberOfItems)) ;
			
			grandTotal= grandTotal.add(subTotal);
			
		}
		return (BigDecimal) grandTotal;
	}

	public BigDecimal getVat() {

		BigDecimal vatAmount;
		
		

		float vat = getVatRate();
		
		float percantage =(vat / 100.0f);
		
		String strAmount=String.valueOf(percantage);
		
		vatAmount = getSubTotal().multiply(new BigDecimal(strAmount));

		return vatAmount;
	}
	//	
	public BigDecimal getTotal() {

		Number total = 0;

		total  = getSubTotal().add(getVat());

		return  (BigDecimal)  total ;

	}

}
