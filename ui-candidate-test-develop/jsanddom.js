     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) 
     {
          var a = '';
            for (var i = s.length - 1; i >= 0; i--)
            a += str[i];
          return a;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue() 
     {
         var a = 10, y =5;
         var z = Math.min(x,y);
         console.log(z);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues({"name": "John" "age": 20},{"name": "Bob" "age": 40} ) 
     {
         var a = [], b = [], l = array.length, i;
         for( i=0; i<l; i++) 
         {
         if( a[array[i].age]) continue;
         a[array[i].age] = true;
        b.push(array[i].age);
        }
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz()
      {
        for (var i = 1; i <= 100; i++) 
        {
            var isDivByThree = i%3 == 0;
            var isDivByFive = i%5 == 0;
    if (isDivByThree && isDivByFive) {
        console.log('FizzBuzz');
    }
        else if (isDivByFive) {
        console.log('Buzz');
    }
        else if (isDivByThree) {
        console.log('Fizz');
       }
        else {
        console.log(i);
     }
    }
     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         for( var i=fruits.length - 1; i>=0; i--)
         {
         for( var j=0; j<fruitsToRemove.length; j++)
         {
         if(fruits[i] && (fruits[i].name == fruitsToRemove[j].name))
         {
            fruits.slice(i, 1);
                 }
            }
        }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         var string = "Hello";
         var result = string.split("");
         console.log(result);
     }

     // Write a function that will take any number of arguments and return their sum
     function sum(var_args) {
        var a = 0;
        for (var i = 0, n = arguments.length; i < n; ++i) {
        a += +arguments[i];
        this.a = a;
    }
        var output = new sum(10, 25, 5, 84, 8, 44);
        console.log("output=%o, sum=%d", output, output.a);
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(Str) {
         if(/^[\Str]*$/.test(data.toString())
         {
            return true;
         }
     }

     // write an example of a javascript closure
     function add(x)
     {
        return function(y)
        {
            return x+y;
        };
     }
     var output = add(7);
     var result = add(5);
     console.log(output(3));
     console.log(result(10));

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     {"persons":[
    {
      "FirstName" : "ABC", "LastName" : "XYZ", 
      "age": 30, "address": { 
        "city": "Edison",
        "state": "New Jersey",
        "zip": "07080"
        },
         "phoneNumber": [
        {   "type": "home",
            "number": "123-456-789"
        },
        {  "type": "work",
            "number": "987-654-321"
        }
        ]
        }

        {
         "FirstName" : "EFG", "LastName" : "JKL", 
      "age": 22, "address": { 
        "city": "Parsipanny",
        "state": "New Jersey",
        "zip": "07080"
    }, "phoneNumber": [
        {   "type": "home",
            "number": "789-456-123"
        },
        {
            "type": "work",
            "number": "321-654-987"   
        }
    ]}



     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     function car (name){
        var make = "Ford";
        this.getMake = function(){
            return make;
        };
        this.name = name;
     }
     car.prototype.getName = function(){
        return this.name;
     };

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     var choose = document.getElementById("select");
     var arr = ["Apple", "Mango", "Cherry"];
     var btn = document.createElement("BUTTON");
     document.body.appendChild(btn);
     var list = document.createElement("select");
     list.id ="Selection";
     choose.appendChild(list);
     for(var i=0; i<arr.length; i++)
     {
        var menu = document.createElement("menu");
        menu.value=arr[i];
        menu.text = arr[i];
        list.appendChild(menu);
     }


     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     1) $(".") - selects class elements
     2) $("#") - selects id elements
     3) $("*") - selects all emements
     4) $("this") - selects current html element
     5) $(":button") - selects all button elements.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var vehicles = [car, airplane, motorcycle];
     var vehicles [0] = [Ford, Nissan, Hyundai];
     var vehicles [1] = [Warner, Vought, Boeing];
     var vehicles [2] = [Honda, Berang, Royal Enfiled];

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     <!DOCTYPE html>
     <html>
     <body>
     Checkbox: <input type="checkbox" id="foobar">
        <a href="" onclick="check()">Click to Check </a>
        <a href="" onclick="uncheck()">Click to Uncheck</a>
    <script>
        function check() {
        document.getElementById("foobar").checked = true;
    }
        function uncheck() {
        document.getElementById("foobar").checked = false;
    }
    </script>
    </body>
    </html>

    

    
