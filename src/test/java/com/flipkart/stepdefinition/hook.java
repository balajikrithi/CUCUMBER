package com.flipkart.stepdefinition;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import com.flipkart.resources.CommonActions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class hook extends CommonActions{
	
	 CommonActions comm = new  CommonActions();
	
	@Before
	
	public void beforeScenario() {
		
		comm.launch("https://www.flipkart.com/");
	
        
        
        
	}
		
		
   @After
   public void afterScenrio() {
	   
	   driver.quit();

}
		

	
	

}
