package stepdefinition;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BookStoreLoginDetails {

	WebDriver driver;

	@Given("^user enters bookstore page$")
	public void user_enters_bookstore_page() throws Throwable {

		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://demoqa.com/login");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@When("^\"([^\"]*)\" and \"([^\"]*)\" are given$")
	public void and_are_given(String username, String password, DataTable arg3) throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"userName\"]")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(password);

	}

	@When("^submit button$")
	public void submit_button() throws Throwable {

		driver.findElement(By.cssSelector(#'login')).click();
		/*
		 * JavascriptExecutor js = (JavascriptExecutor) driver;
		 * js.executeScript("arguments(0).click()", element);
		 */
				
				
				
	}

	@Then("^loged in to the account$")
	public void loged_in_to_the_account(DataTable arg1) throws Throwable {

		boolean status =driver.findElement(By.xpath("//label[contains(text(),'divyas94')]")).isDisplayed();
		
		Assert.assertTrue(status);
		System.out.println("succefuuly loged in !");
	}


}
