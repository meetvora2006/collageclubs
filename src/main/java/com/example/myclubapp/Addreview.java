package com.example.myclubapp;

import javax.persistence.*;

@Entity
@Table(name = "tbl_review")
public class Addreview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    @Column(name="id")
    private Long Id;

    @Column(name = "clbid")
    private Long clbId; 
    
   
    @Column(name = "clb_comment")
    private String clbComment; 
    
        public Long getid() {
		return Id;
	}

	public void setid(Long id) {
		this.Id = id;
	}
        
         public String getClbComment() {
		return clbComment;
	}

	public void setClbComment(String clbComment) {
		this.clbComment = clbComment;
	}
	
        public Long getClbId() {
		return clbId;
	}

	public void setClbId(Long clbId) {
		this.clbId = clbId;
	}
        
        public Addreview(){
		
	}
        
        
        
	
}