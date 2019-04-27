package com.redhat.bfarr.solarvillage.datamodel;

import java.io.Serializable;
import java.util.Date;

public class StructuralPermit implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer structuralPermitId;
	private String firstName;
	private String lastName;
	private Date dob;
	private String addressLine1;
	private String addressLine2;
	private String postCode;
	
	private String status; // None, Approved, Denied, Cancelled
	private Date dateSubmitted;

	public Integer getStructuralPermitId() {
		return structuralPermitId;
	}

	public void setStructuralPermitId(Integer structuralPermitId) {
		this.structuralPermitId = structuralPermitId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDateSubmitted() {
		return dateSubmitted;
	}

	public void setDateSubmitted(Date dateSubmitted) {
		this.dateSubmitted = dateSubmitted;
	}

	@Override
	public String toString() {
		return "StructuralPermit{" +
				"structuralPermitId=" + structuralPermitId +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", dob=" + dob +
				", addressLine1='" + addressLine1 + '\'' +
				", addressLine2='" + addressLine2 + '\'' +
				", postCode='" + postCode + '\'' +
				", status='" + status + '\'' +
				", dateSubmitted=" + dateSubmitted +
				'}';
	}
}
