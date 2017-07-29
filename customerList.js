var firstName = document.getElementById("first-name"),
    lastName = document.getElementById("last-name"),
    addToListButton = document.getElementById("add-to-list-button"),
    displayDiv = document.getElementById("display-div"),
    customerList = [];

        //function variable that creates a new object constructor
        var Customer = function Customer(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }

        //looping through array & adding customer to list
        var updateCustomerList = function updateCustomerList(){
            displayDiv.innerText = "";
            
            for(i = 0; i < customerList.length; i++){
                var currentCustomer = customerList[i];
                displayDiv.innerText += i + ": " + currentCustomer + "\n";
            }
        }

        //button, once clicked, will call Customer constructor, create the objects and display 
        //list to page
        addToListButton.addEventListener("click", function(){
            var newCustomer = new Customer(firstName.value, lastName.value);
                customerList.push(newCustomer);
               updateCustomerList();
        });