/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.myclubapp;

import javax.persistence.*;

@Entity
@Table(name = "tbl_images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    @Column(name="id")
    private Long Id;

    @Column(name = "clbid")
    private Long clbId; 
    
    @Column(name = "name")
    private String Name; 
    
        public Long getid() {
		return Id;
	}

	public void setid(Long id) {
		this.Id = id;
	}
        
         public String getName() {
		return Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}
	
        public Long getClbId() {
		return clbId;
	}

	public void setClbId(Long clbId) {
		this.clbId = clbId;
	}
        
        public Image(){
		
	}
	
	public Image(Image i) {
	        this.Id = i.Id;
	        this.clbId = i.clbId;
                this.Name = i.Name;
	}
        
	
}