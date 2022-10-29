package stepdefinition;

import cucumber.api.java.en.Given;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StudentRegistrationSteps {
	
	WebDriver driver;


	@Given("^user enter url of the page$")
	public void user_enter_url_of_the_page() throws Throwable {
	   
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://demoqa.com/automation-practice-form");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}

	@Given("^sends student firstname and last name$")
	public void sends_student_firstname_and_last_name() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"firstName\"]")).sendKeys("divya");
	    driver.findElement(By.xpath("//*[@id=\"lastName\"]")).sendKeys("sarang");
	
	}

	@When("^enters the email id$")
	public void enters_the_email_id() throws Throwable {
	   
		driver.findElement(By.xpath("//*[@id=\"userEmail\"]")).sendKeys("divyas94@gmail.com");
		
	}

	@Then("^quit the browser$")
	public void quit_the_browser() throws Throwable {
	    
		driver.quit();
		
	}


	
	
}
