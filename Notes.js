/* 


Terminal

    -touch (fileName.ext) ---- to create new file
    -rm is to remove/delete
    -rm -rf will delete folder


Git
    -git add <filename>
    -git commit -m 'Message'
    -git init, git status, red it not in staging, green is
    -git add . ---- all files go into staging area
    -if you get stuck in vin do :q


Github
    -git hub is an online resource to save your code
    Flow up
    -Githup
    -git
    -computer

    -




Functions
    -

Arrays
    -for(var i =0; i<3; i++) 
        -first -- where in array loop starts
        -second -- checks fo logic
        -third -- runs logic {}
        -fourth -- increments the value of i to loop again until value of i does not meet requirements of step 2
    -.push adds to the end of the array
    -.unshift adds to the beginning of the array
    -.pop removes from the end of the array
    -.shift removes from the beginning of the array
    -.splice is used to remove items from array (where to start in array,how many items to remove) used to add items in (where to start,0 items to remove,'element to insert')
    -.slice used to get copies of an entire array or just peices of it (start at index, what index to stop at) does not modify the array, coppies to get elements out
    -
    -How to make a string numbers only using parseInt()
                            var beeSting = [1,'2',4]
                            function notAString(arr){
                                newArr = [];
                                for( var i = 0; i < arr.length; i++){
                                newArr.push(parseInt(arr[i]))
                                }
                               return newArr;
                            }
                            notAString(beeSting)
                          
    -.indexOf() -- if the search is not in array indexOf will return -1, if search is in array itll return the index of the searched Item
    -.forEach -- go through each item 1 at a time and pass it through a function we give it. -- does not return a value
    -.map works just like a .forEach but returns a value in a new empty array
    -.filter -- filters array through criteria -- 
                                var names = ['suzie', 'Ben', 'mark', 'frankline]
                                var shortNames = names.filter(function(val,i,arr){
                                    return val.length < 5;
                                })
                                shortNames = ['ben', 'mark']
                                names = ['suzie', 'Ben', 'mark', 'frankline]
    -






Objects
    -Example for how to change a object within a function
            -var user = {
                name: 'Sally Rally',
                pwHash: 'U+Ldlngx2BYQk',
                username: 'SallyRally801'
            };

            function personalize(obj) {
            for(var key in user){
                user.name='Ryan',
                user.pwHash='43df90w_h',
                user.username='ryanleeeallred';
            }
            return user;
            }
    -Delete -- delete is a keyword -- delete myObj.property
                var backpack = {
                    oldLaptop: 'slow',
                    oldLunch: 'moldy',
                    pencil:'sharp,
                }
                var oldStuff = ['oldLaptop', 'oldLunch']
                for (var i = 0; i<oldStuff.length; i++){
                    delete backpack [oldStuff[i];]
                }

    -copying with an assign
                -newObj = Object.assign({},obj) (capital 'O' in Object.assign)
    - for in loops
                for(var variable in obj){
                    console.log(obj[variable])
                }
    

callback
    -setTimeout(function,time in milliseconds delayed) 
    -






    to-do
        -objects - For In Loops and the rest of preclass reading
        -3.1 Arrays Practice Problem
        -3.2 Arrays Practice Problem
        -3.3 Arrays Practice Problem
        -3.4 Arrays Practice Problem
        





*/
