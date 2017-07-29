var firstName = document.getElementById("first-name"),
    lastName = document.getElementById("last-name"),
    addToListButton = document.getElementById("add-to-list-button"),
    resetButton = document.getElementById("reset-button"),
    displayDiv = document.getElementById("display-div"),
    customerList = [],
    nextCustomerId = 0;

        //function variable that creates a new object constructor
        var Customer = function Customer(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = nextCustomerId++;

            //Note to self: function wasn't called during demo & will only work if called.
               this.greetFormally = function greetFormally(){
               return "Greetings, Mr. or Ms. " + this.lastName;
            }  
                this.toString = function toString(){
                return this.firstName + " " + this.lastName;
            }      
        }

        //looping through array & adding customer to list
        var updateCustomerList = function updateCustomerList(){
            displayDiv.innerText = "";
            
            for(i = 0; i < customerList.length; i++){
                var currentCustomer = customerList[i];
                displayDiv.innerText += i + ": " + currentCustomer.toString() + "\n";
            }
        }

        //button, once clicked, will call Customer constructor, create the objects and display 
        //list to page
        addToListButton.addEventListener("click", function(){
            var newCustomer = new Customer(firstName.value, lastName.value);
                customerList.push(newCustomer);
               updateCustomerList();
        });


    resetButton.addEventListener("click", function(){
            displayDiv.innerText = ""; 
            firstName.value = "";
            lastName.value = "";
        });

