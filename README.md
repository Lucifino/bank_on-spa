# bank_on-spa


frontend deployment:
https://kind-sand-099505e10.2.azurestaticapps.net/admin

backend deployment:
https://bankon-api.azurewebsites.net

graphql layer:
https://bankon-api.azurewebsites.net/graphql

api layer:
https://bankon-api.azurewebsites.net/api

local frontend:
http://localhost:4200/admin

local backend:
https://localhost:7177
https://localhost:5177

local graph layer:
https://localhost:7177/graphql/
https://localhost:5177/graphql/

local swagger:
https://localhost:7177/swagger/index.html
https://localhost:5177/swagger/index.html

Steps to access on deployed web app
1.) go to https://kind-sand-099505e10.2.azurestaticapps.net/admin

Steps to run locally
1.) clone the following:
https://github.com/Lucifino/bank_on-sql
https://github.com/Lucifino/bank_on-api
https://github.com/Lucifino/bank_on-spa

2.) import all .sql files to your database

3.) in the cloned bank_on-api, if using local database instead of azure sql database, change connectionstring in appsettings.json

4.) _IMPORTANT_ if using azure sql database for testing instead, email your I.P. Address to my email gbperezconcepcion@gmail.com so I can give you access

5.) using powershell/editor/ide input dotnet restore first to restore dependencies in the terminal, then dotnet run (should be inside the cloned folder)

backend server should be running.

6.) Swagger was used as a third-party to access the endpoint which returns a url
https://localhost:7177/swagger/index.html
https://localhost:5177/swagger/index.html

7.) in the cloned bank_on-spa, run npm install first using powershell/editor/ide then input ng serve

8.) the spa is accessible through http://localhost:4200/admin

Pages:
Finance Overview
Shows a table of all Finance Requests. Paginated, filterable, and sorted by date of application.
Can add new finance requests through the add new finance request buttons. Can use rest or graphql for this.

Finance Settings
Shows form array tables for Finance Status, Finance Products, and BlackList Groups. Finance Status are used
to define the state of finance requests. Finance Products dictate the packages the customer is applying for.
BlackList Groups are cases to deny a finance request.

Finance Calculate
Autopopulates forms with existing customer data. First page where customer gets to choose the package.
package details are displayed on the right side. Calculate Quote calculates total and monthly repayment.

Finance Quotation
The application page for finacne requests. shows an the breakdown of financing and expenses as well as 
customer information and package details. gives customers one last chance to edit their profile.

Finance Viewer
Applications are either set as submitted if valid or set as denied if there are alarming information about
the customer. page also allows admin to edit every attribute of the specific finance request as well as 
redirect themselves to the finance calculate page of the finance request again
