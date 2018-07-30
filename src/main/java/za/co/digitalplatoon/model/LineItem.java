package za.co.digitalplatoon.model;


import java.math.BigDecimal;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "lineitem")
public class LineItem  {


	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long lineItemId;
	
	@Column
	private long quantity;
	
	@Column
	private String description;
	
	@Column
	private BigDecimal unitPrice;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="invoiceId")
	@JsonBackReference
	private Invoice invoice;
	
	

	public LineItem() {
		super();
	}

	public LineItem( long quantity, String description, BigDecimal unitPrice, Invoice invoice) {
		super();
		this.quantity = quantity;
		this.description = description;
		this.unitPrice = unitPrice;
		this.invoice = invoice;
	}

	public long getLineItemId() {
		return lineItemId;
	}

	public void setLineItemId(long lineItemId) {
		this.lineItemId = lineItemId;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}


	
	public BigDecimal  getLineItemTotal() {
		
		BigDecimal total;
		
		long numberOfItems = getQuantity();
		
		BigDecimal units = getUnitPrice();
		
		return  total = units.multiply( new BigDecimal(numberOfItems));
	
	}
	
}
