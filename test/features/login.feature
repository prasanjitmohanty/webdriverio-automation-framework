Feature: Jewellery Maker: Login: - Returning Customer
    As a user 
    I want to Login to  Jewellery Maker Website using my credentials

   Scenario: User can login with valid email address and password
        Given User navigates to www.jewellerymaker.com
        And   Clicks on Login/Register
        And   Enters a valid email address "validemail" in the Email address field
        And   Enters password: "password" in the pasword field 
        When  Clicks on Sign in
        Then  User is successfully logged in

    Scenario: User can not login with valid email address and invalid password
        Given User navigates to www.jewellerymaker.com
        And   Clicks on Login/Register
        And   Enters a valid email address "validemail" in the Email address field
        And   Enters invalid password: "password" in the pasword field 
        When  Clicks on Sign in
        Then  User can not log in with an error message "The email address or password you entered has not been found. Please enter them again." 

   Scenario: User can not login with invalid email address and a valid password
        Given User navigates to www.jewellerymaker.com
        And   Clicks on Login/Register
        And   Enters a invalid email address "validemail" in the Email address field
        And   Enters valid password: "password" in the pasword field 
        When  Clicks on Sign in
        Then  User can not log in with an error message "The email address or password you entered has not been found. Please enter them again." 
     
     Scenario: User can not login with invalid email address and  invalid password
        Given User navigates to www.jewellerymaker.com
        And   Clicks on Login/Register
        And   Enters a invalid email address "validemail" in the Email address field
        And   Enters invalid password: "password" in the pasword field 
        When  Clicks on Sign in
        Then  User can not log in with an error message "The email address or password you entered has not been found. Please enter them again." 
            