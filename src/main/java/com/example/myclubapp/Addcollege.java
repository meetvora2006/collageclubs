package com.example.myclubapp;

import javax.persistence.*;

@Entity
@Table(name = "tbl_colleges")
public class Addcollege {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    @Column(name="id")
    private Long Id;

    @Column(name = "collegename")
    private String collegeName; 
    
        public Long getid() {
		return Id;
	}

	public void setid(Long id) {
		this.Id = id;
	}
	
        public Addcollege(){
		
	}
	
	public Addcollege(Addcollege ac) {
	        this.Id = ac.Id;
	        this.collegeName = ac.collegeName;
	}
        
	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
}