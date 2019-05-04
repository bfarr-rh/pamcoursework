package com.redhat.bfarr.solarvillage.datamodel;

import java.io.Serializable;
import java.util.Date;

public class HoaApproval implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Date date;
	private String hoaName;
	private Integer newOrderId;
	private String notes;
	private String salesAgentName;
	private String status = Status.NONE.value();

	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getHoaName() {
		return hoaName;
	}
	public void setHoaName(String hoaName) {
		this.hoaName = hoaName;
	}
	public Integer getNewOrderId() {
		return newOrderId;
	}
	public void setNewOrderId(Integer newOrderId) {
		this.newOrderId = newOrderId;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getSalesAgentName() {
		return salesAgentName;
	}
	public void setSalesAgentName(String salesAgentName) {
		this.salesAgentName = salesAgentName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
