# bank_on-spa

frontend deployment:
https://kind-sand-099505e10.2.azurestaticapps.net/admin

backend deployment:
https://bankon-api.azurewebsites.net

graphql layer:
https://bankon-api.azurewebsites.net/graphql

api layer:
https://bankon-api.azurewebsites.net/api

exposed api:
https://bankon-api.azurewebsites.net/api/BankOn/SaveFinanceRequestAndRedirect

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
