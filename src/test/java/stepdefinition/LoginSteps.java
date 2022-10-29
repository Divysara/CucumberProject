package stepdefinition;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {

	WebDriver driver;
	@Given("^user enters url of the page$")
	public void user_enters_url_of_the_page() throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
		Thread.sleep(10);	}

	@When("^credentials are given$")
	public void credentials_are_given(DataTable dataTable) throws Throwable {

		List<String> credentials = dataTable.asList(String.class);
		String username=credentials.get(0);
		String password = credentials.get(1);
		driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input")).sendKeys(password);

	}

	@When("^clicks the submit button$")
	public void clicks_the_submit_button() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();
		boolean  status =driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p")).isDisplayed();
		Assert.assertTrue("Succcess", status);
	}

	@Then("^loged in to the website$")
	public void loged_in_to_the_website() throws Throwable {

		System.out.println("done!");

	}



}
