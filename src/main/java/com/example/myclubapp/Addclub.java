package com.example.myclubapp;

import javax.persistence.*;

@Entity
@Table(name = "tbl_clubs")
public class Addclub {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)    
    @Column(name="id")
    private Long Id;

    @Column(name = "clgid")
    private Long clgId; 
    
    @Column(name = "userid")
    private Long userId; 
    
    @Column(name = "clb_name")
    private String clbName; 
    
    @Column(name = "clb_about")
    private String clbAbout; 
    
        public Long getid() {
		return Id;
	}

	public void setid(Long id) {
		this.Id = id;
	}
        
         public String getClbAbout() {
		return clbAbout;
	}

	public void setClbAbout(String clbAbout) {
		this.clbAbout = clbAbout;
	}
	
        public Long getClgId() {
		return clgId;
	}

	public void setClgId(Long clgId) {
		this.clgId = clgId;
	}
        public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
        public String getClbName() {
		return clbName;
	}

	public void setClbName(String clbName) {
		this.clbName = clbName;
	}
        public Addclub(){
		
	}
	
	public Addclub(Addclub ac) {
	        this.Id = ac.Id;
	        this.clgId = ac.clgId;
                this.userId = ac.userId;
                this.clbName = ac.clbName;
                this.clbAbout = ac.clbAbout;
	}
        
	
}