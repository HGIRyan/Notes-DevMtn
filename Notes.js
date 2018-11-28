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


    
    
    
    CSS & HTML
    
    CSS
    -CSS specifity (Specifif (starting with most))
        -Inline styling(1000)
        -id(100)
        -class, pseudo-class(10)
        -element(1)
        -DRY(DO NOT REPEAT YOURSELF)
        -consolidate your tags -- i.e
        -Do not
            -.post1 {info}
            -.post1 h2 {info}
            -.post2 {same info as post1}
            -.post2 h2{same as post1 h2}
        -Do
            -.post {info}
            -.post h2 {info}
        -use classes to style many elemenets
        -style as generally as you can, then make any adjustments 
        to more specific selections
        -semantic HTML can help you name elements more intuitively 
        and have fewer classs overlaps
    -Reset CSS
        -reset.css or normalize.css
        -reset.css
        -removes built in default browser styles
        -normalize.css
        -helps have more consistant style across broswers
    -META tags
        -located normaly in the <head></head>
        -name='description' content ='description of website'
        -name='keywords' content = 'ha,lol,no'
        -name='author' content= 'author'
        -name ='viewport' conten='scale'
    -Display Property
        -display:inline -- make divs from columns to row, elements 
        do not get their own height or width, they share those properties
        -display:inline-block -- modify individual properties
        -default is (display:block) there by default no need to add -- divs in columns
        -Text Properties
        -font-size -- em(basesize),px(pixels),vh(percent of viewer height)
        -color -- color to text
        -line-height:em,px
        -background color -- highlight
        -text-alighnment -- right, center, left
        -font-family -- font style
        -letter spacing -- em,px
    
        -Apply through normal CSS styling editors
        -headers
        -Background Properties
        -background-image -- :url('string to path for image'), relative path to something 
        local on computer or online link
        -background-position -- top center, cover
        -background-size --
        -background
        -background-color -- color for background
        -Width and Height
        -number px;
        -view height/width -- percent of viewer screen.

    -Beth HTML & CSS Lecture
                -


    -REACT
                -Components
                    -Always capitalize react components -- html is lower case so it makes it easier for program to know when component is threre.
                    -can use components to use other components
                -JSX 
                    -to evaluate using javascript 
                        var variableName = 'Love Ryan'
                        text={variableName}
                    
                -Terms
                    -text='write here'
                    -
                -Import and Export
                    -Import
                        -Import at top
                    -Export
                        -Export at the bottom
                
                -State
                    -Can have state or no state depending on if we want them to
                    -two components will not share data but will stay private
                    -use state for data that changes in a component
                    -set state in constructor function
                    -
                    -   -this.state = {
                        things you want to keep track of
                    -state is a way of passing data
                        -used to keep track of changing data in a component
                    -
                    }
                -Prop
                    -Dont change probs but display the data in props
                    -if our component needs to keep track of data it would be state, if it something that needs to be data passed down from a parent component thats a prop
                    -
                -React-Router
                    -import {HashRouter as Router, Route, Switch} from 'react-router-dom';
                        <Router>
                         <Switch>
                            <Route exact path='/' component={Home}/>            Use exact for the home page and use switch if you want only 1 active
                            <Route path='/about' component={About}/>
                            <Rout path='/store' render={()=> (
                                <Store>
                                    <Switch>
                                        <Route component={StoreLanding}
                                        <Route path='/store/nails' component={Nails}
                                        <Route path='/store/drills' component={Drills}
                                        <Route path='/store/hammers' component={Hammers} 
                                    </Switch>
                                </Store>
                                )}/>
                         </Switch>
                        </Router>

                        Routes.md Notes
                            -Route/Home
                            -Route /about About
                            -Route /store Store
                                -Store
                                -Route /store/nails nails
                                -Route /store/hammers hammers
                                -Route /store/drills drills
                            
    -SQL 
        -The Concept
            -Relational Databases are like giant excel spreadsheets
            -modern databases have millions/billions of individual data on a single table
            -Applications that are really good at storing big tables and communicate very fast
            
        -Primary Keys
            -Another column with an Id that only 1 person will have assigned
            -key assigned to identify each row: Must be unique and Constant
            
        -Schemas
            -columns
                -id
                -student_name
                -grade
                -teacher_id
            -type
                -INT
                -VARCHAR(60)
                -DECIMAL
                -INT
            -Modifiers
                -Primary Key
                -Auto Increment
                -References Teachers(id)

        -Select Statements
            -Queary 
            -Select*From Cites;
                -Select(Search)
                -*(All Columns)
                -From(What table you want to choose from)
                -Cities(name of example table)
            -SELECT [column] FROM [table]

        -WHERE Keyword for Conditional Selects
            -WHERE [Criteria]
                -'=','>=','>','<','!='
                -Uses 'AND','OR' as well as posible Criteria
                -Using 'LIKE' is not casesensitive by default
                -Where Statements are CaseSensitive by default
                -=Null wont work but IS NULL Will
                -'BETWEEN' Is just a shortcut 
                - IN(Value) NOT IN(value)
        -Adding, Updating, Removing
            -Adding
                -INSERT INTO [Table Name] (valueColumn,valueColumn2)
                                -VALUES(info, info2)
            -Updating
                -UPDATE [Table Name]
                    SET[columnName] = 'example'
                    WHERE id = [id]
            -Delete
                -DELETE FROM [table]
                    WHERE [table] [operator] [Number]

    
    
    
    to-do
       
    */
