package com.example.myclubapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyHomeController {

	@RequestMapping("/home")
	public String home() {
		return "index";
	}
        
        @RequestMapping("/admin")
	public String admin() {
		return "admin";
	}
        
        @RequestMapping("/colleges")
	public String colleges() {
		return "colleges";
	}
        
        @RequestMapping("/club")
	public String club() {
		return "club";
	}
        
        @RequestMapping("/clubdetail")
	public String clubdetail() {
		return "clubdetail";
	}
        
        @RequestMapping("/frontclubdetail")
	public String frontclubdetail() {
		return "frontclubdetail";
	}
        
        @RequestMapping("/clubgallery")
	public String clubgallery() {
		return "clubgallery";
	}
        
        @RequestMapping("/")
	public String frontallclub() {
		return "frontallclub";
	}
        
        @RequestMapping("/frontclubgallery")
	public String frontclubgallery() {
		return "frontclubgallery";
	}
        
        @RequestMapping("/frontclubreview")
	public String frontclubreview() {
		return "frontclubreview";
	}
        
        
       
        
}