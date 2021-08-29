// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description

  ${data.Description}

  ## Table of Contents 

  * [Installation](#installation) 
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
  * [Contact](#questions)
 
  
  ## Installation

  The following necessary dependencies must be installed to run the application properly:
  
  **${data.Dependencies}**
  

  ## Tests

  The application will be invoked by using the following command:
  
  **${data.Test}**

  ## License

  License under the **${data.License}** license.

  ## Contributing

  ​Contributors: **${data.Contribution}**

  To run tests, you need to run the following command: **${data.Test}**

  ## Repository

  **${data.Repo}**

  ## Questions

  Contact **${data.Username}** by email at **${data.Email}**.
`;
}

module.exports = generateMarkdown;
