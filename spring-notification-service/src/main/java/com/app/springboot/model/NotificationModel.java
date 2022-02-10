package com.app.springboot.model;


import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class NotificationModel {

	@NotEmpty(message = "empty first name field")
	@Pattern(regexp="^[A-Za-z]*$",message = "Invalid Input")
	private String fname;
	
	@NotEmpty(message = "empty last name field")
	@Pattern(regexp="^[A-Za-z]*$",message = "Invalid Input")
	private String lname;

	@Digits(integer = 10, fraction = 0, message = "phone number must be 10 digits long")
	private String phone;
	
	@Email(message = "invalid email")
	private String email;
	
	@NotEmpty(message = "empty supervisor field")
	private String supervisor;
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSupervisor() {
		return supervisor;
	}
	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}
	
	

	
}