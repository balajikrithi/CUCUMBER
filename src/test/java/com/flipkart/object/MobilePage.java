package com.flipkart.object;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.flipkart.resources.CommonActions;

public class MobilePfactory extends CommonActions{
	
	public MobileFactory() {
		
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath ="//input[@type='text']")
	private WebElement search;
	
    @FindBy(xpath ="//button[@class='_2KpZ6l _2doB4z']")
	private WebElement login;
		
    @FindBy(xpath ="//button[@class='_2KpZ6l _2U9uOA ihZ75k _3AWRsL']")
	private WebElement buy;

	public WebElement getSearch() {
		return search;
	}

	public WebElement getLogin() {
		return login;
	}

	public WebElement getBuy() {
		return buy;
	}
		
	

}
 