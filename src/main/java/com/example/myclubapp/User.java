package com.example.myclubapp;

import javax.persistence.*;

@Entity
@Table(name = "tbl_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    @Column(name="id")
    private Long Id;

	@Column(name = "username")
    private String userName;   

	@Column(name = "password")
    private String password;   

	@Column(name = "email")
    private String email;
    
        @Column(name = "clg_id")
    private Long uniId;
        
	public User(){
		
	}
	
	public User(User user) {
	        this.Id = user.Id;
	        this.userName = user.userName;
	        this.email = user.email;       
	        this.password = user.password;
	                
	}
	
	public Long getid() {
		return Id;
	}

	public void setid(Long id) {
		this.Id = id;
	}
        
        public Long getUniId() {
		return uniId;
	}

	public void setUniId(Long uniId) {
		this.uniId = uniId;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	  
}