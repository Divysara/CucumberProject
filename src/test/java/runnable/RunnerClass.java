package runnable;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="featurefiles/BookStoreLogin.feature",glue="stepdefinition", monochrome=true, dryRun=false,
plugin = { "pretty","html:report/WebReport"},tags="@BookStoreLoginPage")
public class RunnerClass {

}
