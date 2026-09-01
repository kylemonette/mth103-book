var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The authors would like to thank the many instructors of MTH 103 at the University of Rhode Island, including full-time faculty, part-time faculty, and graduate teaching assistants, whose feedback has contributed to the improvement of both Applied Precalculus the course and Applied Precalculus the textbook over the years. Very special acknowledgment and boundless gratitude is owed to Kyle Monette, who worked closely with us on reformatting and editing as we prepared the second edition of Applied Precalculus. We also thank Faith Bailey for her contribution of additional exercises to our book.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " As the title of the book suggests, our emphasis is on the real-life meaning of precalculus concepts. We want our students to master the basic concepts of precalculus while building a solid understanding of those concepts in practical contexts and the skills to apply mathematical tools to real-life processes.  To illustrate our approach, take for example the family of linear functions. When talking about linear functions, our emphasis is on the practical meaning and the units of the slope as well as on the units and the practical meaning of the horizontal and vertical intercepts. Such practical understanding is built through many applied examples and their careful analysis. We show how to use linear functions to model real-life processes which are described through tabulated data. At the same time, we try to ensure that students build the algebraic proficiency necessary to successfully work with linear functions.  We present all the main precalculus topics while stressing their practical meaning and their real-life applications. Those topics include:  Functions, their graphs, and their numerical representation;  Linear functions and their applications;  Quadratic functions and quadratic equations;  Algebra of exponential expressions, power functions, and their applications;  Exponential and logarithmic functions, their algebraic properties and their rich variety of applications in the life sciences;  Trigonometric functions and their applications to modeling periodic phenomena.    Our intended audience is primarily students in the life sciences and pharmacy. These students can be divided generally into two groups. The first group consists of students for whom this course is a terminal mathematics course, who wish to learn tools of before-calculus mathematics and to develop solid skills of applying those tools to real-life problems. The second group consists of students who plan to continue their study of mathematics in an applied calculus course.  "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "About the Authors",
  "body": " About the Authors   Erin Denette serves as a Teaching Professor for the University of Rhode Island Department of Mathematics and Applied Mathematical Sciences. She received her Ph.D. and M.S. in Mathematics from the University of Rhode Island. She earned her B.S. in Mathematics from Fitchburg State University.   Barbara Kaskosz serves as a Professor for the University of Rhode Island Department of Mathematics and Applied Mathematical Sciences. She received her Ph.D. in Mathematics from the Institute of Mathematics of the Polish Academy of Sciences and her M.S. in Mathematics from the University of Warsaw.  "
},
{
  "id": "sec_1_1",
  "level": "1",
  "url": "sec_1_1.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Concept of a Function",
  "body": " The Concept of a Function    After completing this section, you should be able to do the following.     Determine whether a correspondence between two numerical variables, given as a formula or in an applied context, represents a function, and identify its independent and dependent variables.    Use function notation to evaluate a function at given inputs, find inputs that produce a given output, and interpret such statements in practical terms.    Determine the domain of a function given algebraically or in an applied context, and determine whether a function is increasing or decreasing.      One of the main concepts in mathematics and in the mathematical modeling of applied processes is that of a function. The formal mathematical definition of a function is abstract and general, but in applied precalculus we can think of a function as a special kind of dependence between two numerical variables.    Suppose you are in Rhode Island and intend to buy a gift from an online store. The amount of money, , that you will have to spend (that is, the total cost to purchase the gift) depends on the list price, , of the item you select. The cost is equal to the list price plus the state of Rhode Island's sales tax plus the rate the store charges for shipping and handling. Assuming that the online store charges a flat rate of for shipping and handling, give a formula for the cost to purchase a gift of list price dollars.    Given the list price , you can calculate the cost , in dollars, as Here, represents of the list price that is, the sales tax on the item.     variable numerical  function notation In the above formula, and are variables their values vary based on the item you select. They are both numerical variables as their possible values are numbers. The cost depends on and, moreover, the cost is uniquely determined by the item's list price . We say in this case that  is a function of . Using function notation , we write The notation is read as equals of . Note that does not stand for the word function here; it is merely a letter used to name the function and another letter could be used instead. The notation represents the value of the function at a given list price ; that is, is the cost corresponding to a list price :   For every , the value of the function gives the cost for a list price . For example,  the value of the function at  gives the cost corresponding to the list price dollars. Similarly, gives the cost corresponding to the list price dollars.    Use the function whose formula was found in to determine the total amount you will spend to purchase a gift with a list price of dollars from the online store.    We are looking for the cost when . In other words, we are looking for  read aloud as of . Using the formula for with , we obtain If you select an item listed at dollars, you will pay dollars. In function notation we could write or, equivalently, .     variable dependent  variable independent Above, the cost variable, , is called the dependent variable or the output variable . The list price, , is the independent variable or the input variable . For each list price or input value input for short we have exactly one cost value. So we have exactly one output value output for short for each input. The formula for the function gives the rule of how to obtain the output corresponding to each possible input .  In general, we define a function as follows.   Informal Definition of a Function   A function is a correspondence between two numerical variables, the input variable and the output variable, that takes input numbers from a certain subset of the real numbers called the domain of the function and prescribes to each exactly one output.    From the mathematical point of view, the domain of the formula for the function consists of all real numbers . This is because is unique and defined for each individual real number inputted for . When we consider the applied context of this formula as presented in and , however, the input is a list price and therefore cannot be negative. For practical reasons, we would restrict the domain of to positive inputs .    Functions in General  In an abstract setting, when variables are not associated any specific real-life meaning, we commonly denote the independent variable by , the dependent variable by , and a function by :     Let where .   What is the domain of ?    Find and .    Find all inputs for which the output is equal to .          For every input number , we can multiply by and add . So the output is defined and is a single number for each . Hence, the domain of consists of all real numbers .    The quantity is the value of the function or the output corresponding to the input . Substituting into the formula for , we find Hence, the value of corresponding to is . Similarly,     We are looking for inputs for which the output . In other words, we are looking for the value (or the values) of which are solutions to the equation or equivalently To find , we use the standard techniques of solving equations: we subtract from both sides of the equation and then we divide both sides of the equation by . These steps are shown below.          Functions in Applied Settings  The previous example illustrates that a function need not be associated with an applied scenario. When an application is involved, it is important to be able to interpret the practical meaning.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of time , in hours, that have passed since the person finished smoking a single cigarette.   Identify the independent variable and the dependent variable of this function.    In the statement , what is the meaning of 3 and 0.71 in terms of time and nicotine? Include units in the answer.    Explain the meaning of the statement in practical terms.          Here, depends on , making a function of . Thus is the dependent variable and is the independent variable.    The number is a value of , so its units are hours; is a value of , so its units are milligrams. In practical terms, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.    Similarly to the prior solution, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.         In cases of strep throat, a daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a child, , in kilograms; that is, is a function of . Denoting the function by results in As a general rule, the daily dose should be 50 milligrams for each kilogram of weight.   Write a formula for the function .    Calculate the daily dose for a child who weighs 8 kilograms.    What does represent in practical terms?          The value represents the dose for the weight of kilograms. Since the dose is 50 milligrams for each kilogram, the dose is given by   Multiplying and simplifying units results in milligrams.    We calculate and arrive at the conclusion that the dose for a child who weighs 8 kilograms is 400 milligrams.    To answer questions like this, it can be useful to assign the appropriate units to each number. Since is a value for , it is measured in kilograms. is a value for or , so it is measured in milligrams. Combining this information with the fact that gives the dose for a child who weighs kilograms, we conclude that the practical meaning of the statement is that a child weighing kilograms should receive a daily dose of milligrams of Amoxicillin when being treated for strep throat.         A man leaves home and drives at miles per hour toward a hospital located miles away from his home. At time hours after he began driving, his distance from the hospital, , in miles, is given by    Let . What is the formula for the function ?    How far from the hospital is the man after 1.5 hours?    When will the man arrive at the hospital?          Since and the formula for was given, .    The man's distance from the hospital at is given by After hours, the man is miles from the hospital.    The man will arrive at the hospital when his distance from the hospital is 0 miles. We are looking for such that or equivalently . Solving for :   The man will arrive at the hospital hours and minutes after he left home.         Increasing and Decreasing Functions  In we considered the function that gives the daily dose of Amoxicillin for a child weighing kilograms. Notice that increases as the weight increases. In , the distance from the hospital decreases as the number of hours spent driving toward the hospital increases.   Increasing and Decreasing Functions  function increasing  function decreasing      A function is increasing if the values of increase as increases.    A function is decreasing if the values of decrease as increases.       Above, the dose of Amoxicillin would be an illustration of an increasing function of weight while the distance from the hospital would be an illustration of a decreasing function of time. We will see later that many functions are neither increasing nor decreasing through their domain; they may increase on some intervals and decrease on other intervals.    Functions as a Sequence of Operations  A function that is presented as a formula can be thought of as sequence of operations performed on an input in order to obtain the corresponding output. For example, the function of takes an input, multiplies the input by , and then adds to the result. The function performs this sequence of operations no matter what the input is. We can write this symbolically as Whatever input we feed into the function , a number, an expression, whatever we like, the function will multiply the input by and add .   In Chapter 7 we'll even consider putting functions into functions.     Let . Evaluate and simplify each of the following.                The function takes any input  whatever it might be multiplies the input by 4, and subtracts the result from 3:      In , the input is an algebraic expression : . In any given context, may stand for a number or for a numerical variable. No matter what represents here, the function takes the input , multiplies it by 4, and then subtracts the result from 3. Thus, To simplify, we use the distributive law to expand : We cannot simplify further. The final answer is .    We consider the whole expression all at once below, though you may find it helpful to separately find each of and and then subtract the two results.   Whatever might be, .         Find a formula for if...   ... takes the square root of the input, multiplies the result by , and subtracts .    ... squares the input, adds , and takes the reciprocal of the result.          We begin with an input . Taking the square root of this input results in . Multiplying the result by results in . Finally, subtracting results in . Therefore, the formula for is     We begin with an input . Squaring the input first results in . Adding next results in . Now, we take the reciprocal of , which is . Therefore, the formula for is          Find the domain of each of the following functions.                Note that neither nor are assigned any specific practical applied meaning. This means that the domain of each function will be all inputs for which the output is defined.     The function is defined at any input that does not lead to division by zero and undefined at any input that does lead to division by zero. To find the value(s) of for which is undefined, we set its denominator equal to zero and solve for :   We can now see that is undefined when and when . The domain of is all real numbers except for these two values. This can be written in a variety of different ways.   The symbol is called a union . Essentially, it means include all these intervals .    domain  set-builder notation  interval notation  union    Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :        The function is defined provided the number under the radical is not negative. That is, it is defined for those values of satisfying that . We can isolate on one side of the inequality   which allows us to conclude that the domain of is all real numbers that are greater than or equal to . As before, this can be written in a variety of different ways.     Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :          Notice that we wrote and not to denote that is included in the domain.       Practice Problems     Let . Evaluate:                                                  The value of a car, , in dollars, is a function of the number of years, , since it was purchased; that is, .  The independent variable is  t   V   g  with units  dollars   years   dollars\/year  .  The dependent variable is  t   V   g  with units  dollars   years   dollars\/year  .                       The independent variable is and has units of years. The dependent variable is and has units of dollars.              The amount of caffeine, , measured in milligrams, in a person's body hours after drinking a cup of coffee is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of time and caffeine? Answer in complete sentences and include units with each number.          The amount of caffeine in a person's body hours after drinking a cup of coffee is 96 mg.           The amount of caffeine in a person's body hours after drinking a cup of coffee is 48 mg.           The amount of caffeine in a person's body hours after drinking a cup of coffee is approximately 0 mg.       The total number of units, , produced after hours of production is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of units of product produced and time? Answer in complete sentences and include units with each number.          A total of 10 units of the product are produced in 1 hour.           A total of 0 units of the product are produced in 0 hours.           A total of approximately 29 units of the product are produced in 3 hours.       The total cost of a meal in a restaurant, , in dollars, as a function of the menu price of the meal, , also in dollars, is given by where the term corresponds to a tip.     What is the input variable and what units is it measured in?     ; dollars      What is the output variable and what units is it measured in?     ; dollars      Calculate the total cost of a meal whose menu price is .            A bakery makes 6 batches of cookies an hour, with a batch typically consisting of 12 cookies. The total number of batches baked, , is measured as function of time , in hours, so that .     What is the independent variable?    The independent variable is , which represents the time spent baking in hours.      What is the dependent variable?    The dependent variable is , which represents the number of batches of cookies made by the bakery after hours have passed.      Evaluate . What is the practical meaning of in the applied context of this problem?     ; The bakery makes 18 batches of cookies (or approximately 216 cookies) in 3 hours.       A driver is heading to a faraway town. The amount of fuel, , in gallons, left in the fuel tank is a function of the number of miles driven during the trip; that is, .     What does the statement tell you in practical terms? What are units of the numbers 70 and 6?    The amount of fuel left in the fuel tank 70 miles into the drive is 6 gallons.      What does the statement tell you in practical terms?    The amount of fuel left in the fuel tank 200 miles into the drive is 1 gallon.        Let . Evaluate and simplify if possible:                                          Let . Evaluate:                                          Let . Evaluate and simplify if possible:                                          Let . Evaluate. If the value is undefined, say so.                      undefined                   Let . Evaluate and simplify if possible.                                          Let . Evaluate and simplify if possible.                                          Let and . Evaluate and simplify if possible.                                          A URI student tutors for MTH 103. The cost of each session in terms of hours, , is given by the function .     What is the cost of a 3 hour session?           If , how many hours was the session?     hours       The value of a car, , in dollars, years after purchase is given by the function , where .     What is the value of the car at the time of purchase?           What is the value of the car years after purchase?           After how many years is the car worth nothing?     years        Since you see lightning immediately and it takes the sound of thunder about 5 seconds to travel a mile, you can calculate the distance between you and the lightning. Count the number of seconds, , between the flash of lightning and the sound of thunder. Then the distance, , in miles, between you and the lightning is given by the function:      Identify the independent and the dependent variable.     is the independent variable; is the dependent variable      How far is the lightning if you counted 4 seconds between the flash and the thunder?     of a mile       The cost of a medium pizza is plus per topping. Write a function to describe the cost of a medium pizza with number of toppings.           Find a formula for a function for each of the following scenarios:      multiplies the input by 7 then adds to the result.            adds to the input and then multiplies the result by 7.            Find a formula for a function for each of the following scenarios:      takes the square of the input, multiplies the result by 5, then subtracts 8.            multiplies the input by 5, takes the square of the result, then subtracts 8.            subtracts 8 from the input, takes the square of the result, then multiplies by 5.            Find a formula for a function for each of the following scenarios:      takes the input, divides it by 3, then adds this to the square root of the input times 4.            takes the reciprocal of the square root of the input, adds to this, and then adds the input squared.            Find the domain of each of the following functions.          all real numbers or in interval notation           all real numbers or in interval notation           all real numbers , or in interval notation           all real numbers or in interval notation           all real numbers or in interval notation       Find the domain of each of the following functions.      , where is a positive integer    all real numbers or in interval notation           all real numbers or in interval notation           all real numbers or in interval notation      "
},
{
  "id": "sec_1_1-2",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine whether a correspondence between two numerical variables, given as a formula or in an applied context, represents a function, and identify its independent and dependent variables.    Use function notation to evaluate a function at given inputs, find inputs that produce a given output, and interpret such statements in practical terms.    Determine the domain of a function given algebraically or in an applied context, and determine whether a function is increasing or decreasing.    "
},
{
  "id": "example-ch1-gift",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-gift",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Suppose you are in Rhode Island and intend to buy a gift from an online store. The amount of money, , that you will have to spend (that is, the total cost to purchase the gift) depends on the list price, , of the item you select. The cost is equal to the list price plus the state of Rhode Island's sales tax plus the rate the store charges for shipping and handling. Assuming that the online store charges a flat rate of for shipping and handling, give a formula for the cost to purchase a gift of list price dollars.    Given the list price , you can calculate the cost , in dollars, as Here, represents of the list price that is, the sales tax on the item.   "
},
{
  "id": "example-ch1-gift2",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-gift2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Use the function whose formula was found in to determine the total amount you will spend to purchase a gift with a list price of dollars from the online store.    We are looking for the cost when . In other words, we are looking for  read aloud as of . Using the formula for with , we obtain If you select an item listed at dollars, you will pay dollars. In function notation we could write or, equivalently, .   "
},
{
  "id": "sec_1_1-3-8",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-3-8",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Informal Definition of a Function.",
  "body": " Informal Definition of a Function   A function is a correspondence between two numerical variables, the input variable and the output variable, that takes input numbers from a certain subset of the real numbers called the domain of the function and prescribes to each exactly one output.   "
},
{
  "id": "example-ch1-equ-solve",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-equ-solve",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Let where .   What is the domain of ?    Find and .    Find all inputs for which the output is equal to .          For every input number , we can multiply by and add . So the output is defined and is a single number for each . Hence, the domain of consists of all real numbers .    The quantity is the value of the function or the output corresponding to the input . Substituting into the formula for , we find Hence, the value of corresponding to is . Similarly,     We are looking for inputs for which the output . In other words, we are looking for the value (or the values) of which are solutions to the equation or equivalently To find , we use the standard techniques of solving equations: we subtract from both sides of the equation and then we divide both sides of the equation by . These steps are shown below.       "
},
{
  "id": "example-ch1-nicotine",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-nicotine",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of time , in hours, that have passed since the person finished smoking a single cigarette.   Identify the independent variable and the dependent variable of this function.    In the statement , what is the meaning of 3 and 0.71 in terms of time and nicotine? Include units in the answer.    Explain the meaning of the statement in practical terms.          Here, depends on , making a function of . Thus is the dependent variable and is the independent variable.    The number is a value of , so its units are hours; is a value of , so its units are milligrams. In practical terms, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.    Similarly to the prior solution, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.      "
},
{
  "id": "example-ch1-amox",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-amox",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  In cases of strep throat, a daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a child, , in kilograms; that is, is a function of . Denoting the function by results in As a general rule, the daily dose should be 50 milligrams for each kilogram of weight.   Write a formula for the function .    Calculate the daily dose for a child who weighs 8 kilograms.    What does represent in practical terms?          The value represents the dose for the weight of kilograms. Since the dose is 50 milligrams for each kilogram, the dose is given by   Multiplying and simplifying units results in milligrams.    We calculate and arrive at the conclusion that the dose for a child who weighs 8 kilograms is 400 milligrams.    To answer questions like this, it can be useful to assign the appropriate units to each number. Since is a value for , it is measured in kilograms. is a value for or , so it is measured in milligrams. Combining this information with the fact that gives the dose for a child who weighs kilograms, we conclude that the practical meaning of the statement is that a child weighing kilograms should receive a daily dose of milligrams of Amoxicillin when being treated for strep throat.      "
},
{
  "id": "example-ch1-drive",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-drive",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  A man leaves home and drives at miles per hour toward a hospital located miles away from his home. At time hours after he began driving, his distance from the hospital, , in miles, is given by    Let . What is the formula for the function ?    How far from the hospital is the man after 1.5 hours?    When will the man arrive at the hospital?          Since and the formula for was given, .    The man's distance from the hospital at is given by After hours, the man is miles from the hospital.    The man will arrive at the hospital when his distance from the hospital is 0 miles. We are looking for such that or equivalently . Solving for :   The man will arrive at the hospital hours and minutes after he left home.      "
},
{
  "id": "sec_1_1-6-3",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-6-3",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Increasing and Decreasing Functions.",
  "body": " Increasing and Decreasing Functions  function increasing  function decreasing      A function is increasing if the values of increase as increases.    A function is decreasing if the values of decrease as increases.      "
},
{
  "id": "sec_1_1-7-4",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-4",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Let . Evaluate and simplify each of the following.                The function takes any input  whatever it might be multiplies the input by 4, and subtracts the result from 3:      In , the input is an algebraic expression : . In any given context, may stand for a number or for a numerical variable. No matter what represents here, the function takes the input , multiplies it by 4, and then subtracts the result from 3. Thus, To simplify, we use the distributive law to expand : We cannot simplify further. The final answer is .    We consider the whole expression all at once below, though you may find it helpful to separately find each of and and then subtract the two results.   Whatever might be, .      "
},
{
  "id": "sec_1_1-7-5",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-5",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Find a formula for if...   ... takes the square root of the input, multiplies the result by , and subtracts .    ... squares the input, adds , and takes the reciprocal of the result.          We begin with an input . Taking the square root of this input results in . Multiplying the result by results in . Finally, subtracting results in . Therefore, the formula for is     We begin with an input . Squaring the input first results in . Adding next results in . Now, we take the reciprocal of , which is . Therefore, the formula for is       "
},
{
  "id": "sec_1_1-7-6",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-6",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Find the domain of each of the following functions.                Note that neither nor are assigned any specific practical applied meaning. This means that the domain of each function will be all inputs for which the output is defined.     The function is defined at any input that does not lead to division by zero and undefined at any input that does lead to division by zero. To find the value(s) of for which is undefined, we set its denominator equal to zero and solve for :   We can now see that is undefined when and when . The domain of is all real numbers except for these two values. This can be written in a variety of different ways.   The symbol is called a union . Essentially, it means include all these intervals .    domain  set-builder notation  interval notation  union    Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :        The function is defined provided the number under the radical is not negative. That is, it is defined for those values of satisfying that . We can isolate on one side of the inequality   which allows us to conclude that the domain of is all real numbers that are greater than or equal to . As before, this can be written in a variety of different ways.     Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :          Notice that we wrote and not to denote that is included in the domain.    "
},
{
  "id": "ww_1_1_1",
  "level": "2",
  "url": "sec_1_1.html#ww_1_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   Let . Evaluate:                                             "
},
{
  "id": "ww_1_1_2",
  "level": "2",
  "url": "sec_1_1.html#ww_1_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   The value of a car, , in dollars, is a function of the number of years, , since it was purchased; that is, .  The independent variable is  t   V   g  with units  dollars   years   dollars\/year  .  The dependent variable is  t   V   g  with units  dollars   years   dollars\/year  .                       The independent variable is and has units of years. The dependent variable is and has units of dollars.       "
},
{
  "id": "exercise_1_1_2",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The amount of caffeine, , measured in milligrams, in a person's body hours after drinking a cup of coffee is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of time and caffeine? Answer in complete sentences and include units with each number.          The amount of caffeine in a person's body hours after drinking a cup of coffee is 96 mg.           The amount of caffeine in a person's body hours after drinking a cup of coffee is 48 mg.           The amount of caffeine in a person's body hours after drinking a cup of coffee is approximately 0 mg.    "
},
{
  "id": "exercise_1_1_3",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The total number of units, , produced after hours of production is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of units of product produced and time? Answer in complete sentences and include units with each number.          A total of 10 units of the product are produced in 1 hour.           A total of 0 units of the product are produced in 0 hours.           A total of approximately 29 units of the product are produced in 3 hours.    "
},
{
  "id": "exercise_1_1_4",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The total cost of a meal in a restaurant, , in dollars, as a function of the menu price of the meal, , also in dollars, is given by where the term corresponds to a tip.     What is the input variable and what units is it measured in?     ; dollars      What is the output variable and what units is it measured in?     ; dollars      Calculate the total cost of a meal whose menu price is .         "
},
{
  "id": "exercise_1_1_5",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  A bakery makes 6 batches of cookies an hour, with a batch typically consisting of 12 cookies. The total number of batches baked, , is measured as function of time , in hours, so that .     What is the independent variable?    The independent variable is , which represents the time spent baking in hours.      What is the dependent variable?    The dependent variable is , which represents the number of batches of cookies made by the bakery after hours have passed.      Evaluate . What is the practical meaning of in the applied context of this problem?     ; The bakery makes 18 batches of cookies (or approximately 216 cookies) in 3 hours.    "
},
{
  "id": "exercise_1_1_6",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  A driver is heading to a faraway town. The amount of fuel, , in gallons, left in the fuel tank is a function of the number of miles driven during the trip; that is, .     What does the statement tell you in practical terms? What are units of the numbers 70 and 6?    The amount of fuel left in the fuel tank 70 miles into the drive is 6 gallons.      What does the statement tell you in practical terms?    The amount of fuel left in the fuel tank 200 miles into the drive is 1 gallon.    "
},
{
  "id": "exercise_1_1_8",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible:                                       "
},
{
  "id": "exercise_1_1_9",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Let . Evaluate:                                       "
},
{
  "id": "exercise_1_1_10",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible:                                       "
},
{
  "id": "exercise_1_1_11",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Let . Evaluate. If the value is undefined, say so.                      undefined                "
},
{
  "id": "exercise_1_1_12",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible.                                       "
},
{
  "id": "exercise_1_1_13",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible.                                       "
},
{
  "id": "exercise_1_1_14",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Let and . Evaluate and simplify if possible.                                       "
},
{
  "id": "exercise_1_1_15",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A URI student tutors for MTH 103. The cost of each session in terms of hours, , is given by the function .     What is the cost of a 3 hour session?           If , how many hours was the session?     hours    "
},
{
  "id": "exercise_1_1_16",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  The value of a car, , in dollars, years after purchase is given by the function , where .     What is the value of the car at the time of purchase?           What is the value of the car years after purchase?           After how many years is the car worth nothing?     years    "
},
{
  "id": "exercise_1_1_17",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_17",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "   Since you see lightning immediately and it takes the sound of thunder about 5 seconds to travel a mile, you can calculate the distance between you and the lightning. Count the number of seconds, , between the flash of lightning and the sound of thunder. Then the distance, , in miles, between you and the lightning is given by the function:      Identify the independent and the dependent variable.     is the independent variable; is the dependent variable      How far is the lightning if you counted 4 seconds between the flash and the thunder?     of a mile    "
},
{
  "id": "exercise_1_1_18",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_18",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  The cost of a medium pizza is plus per topping. Write a function to describe the cost of a medium pizza with number of toppings.        "
},
{
  "id": "exercise_1_1_19",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_19",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:      multiplies the input by 7 then adds to the result.            adds to the input and then multiplies the result by 7.         "
},
{
  "id": "exercise_1_1_20",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_20",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:      takes the square of the input, multiplies the result by 5, then subtracts 8.            multiplies the input by 5, takes the square of the result, then subtracts 8.            subtracts 8 from the input, takes the square of the result, then multiplies by 5.         "
},
{
  "id": "exercise_1_1_21",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_21",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:      takes the input, divides it by 3, then adds this to the square root of the input times 4.            takes the reciprocal of the square root of the input, adds to this, and then adds the input squared.         "
},
{
  "id": "exercise_1_1_22",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_22",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Find the domain of each of the following functions.          all real numbers or in interval notation           all real numbers or in interval notation           all real numbers , or in interval notation           all real numbers or in interval notation           all real numbers or in interval notation    "
},
{
  "id": "exercise_1_1_23",
  "level": "2",
  "url": "sec_1_1.html#exercise_1_1_23",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "  Find the domain of each of the following functions.      , where is a positive integer    all real numbers or in interval notation           all real numbers or in interval notation           all real numbers or in interval notation    "
},
{
  "id": "sec_1_2",
  "level": "1",
  "url": "sec_1_2.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Graph of a Function",
  "body": " The Graph of a Function    After completing this section, you should be able to do the following.     Sketch or interpret the graph of a function given algebraically, numerically, or graphically, including in applied contexts.    Identify the interval(s) on which a function is increasing or decreasing from its graph.    Use the Vertical Line Test to determine whether a given curve is the graph of a function.      One way to visualize a function is by graphing it. The graph of a function is the set of all ordered pairs or points in the -plane such that is in the domain of the function and is the output assigned to the input by .  This graph is often a curve in the -plane. Specifically, it is the set of all ordered pairs for which the second coordinate is the value of the function at the first coordinate ; that is, the graph is the set of all points that satisfy the equation :       It is not always reasonable or even possible to plot the ordered pair associated with each in the domain of a given function . This is because functions can have many (sometimes even infinitely many) possible inputs. When drawing the graph of a function by hand, we customarily take relatively few points , plot the corresponding ordered pairs in the -plane, and then join neighboring ordered pairs with straight line segments. The result is an approximation of the graph of the function. Graphing calculators and other graphing tools do exactly this they just use a greater number of inputs than we typically would when graphing by hand.  It is useful to state a precise definition of the graph of a function as similar definitions appear in other contexts in mathematics.   Graph of a Function  function graph of   The graph of a function is the collection of all points in the -plane for which . In other words, the graph is the collection of points for all inputs in the domain of .      Sketch the graph of the function where by hand. Plot points on the graph for .    The below table gives each input , the corresponding output obtained by calculating , and then the associated point .         pair                                                 Plotting these points on the -plane and joining neighboring points by straight line segments results in the following rough sketch of :   A short description.    This is a decent approximation of the graph of . A better graph of can be obtained from a graphing calculator, graphing software package, or other similar tool.   A short description.      In , the function was given algebraically . That is, we were provided the algebraic formula for the function.  Sometimes, a function is given graphically . That is, we are given only the graph of the function. The following examples illustrate that a great deal of information can be extracted from the graph of a function.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is given in .     A short description.       How much nicotine is absorbed from a single cigarette?  How much nicotine is left in the person's bloodstream hours after smoking a single cigarette? What about after hours?        Note that (as the point belongs to the graph of ). Thus, at hours so immediately after a person finishes smoking a cigarette the amount of nicotine in their bloodstream is milligrams. This is the amount absorbed from the cigarette.   As time goes on, the amount of nicotine decreases. We see from the grid on the -plane that ; in other words, the point lies on the graph. This tells us that hours after smoking a single cigarette there is milligram of nicotine left in the bloodstream.  Similarly, we observe that and conclude that hours after smoking a single cigarette there is only milligram of nicotine left in the bloodstream.         A woman is driving to visit with her family in a town miles from her home. Let be the time, in hours, since she left her home. Let be the distance, in miles, to her destination. Here, is a function of : . The graph of the function is given in .     A short description.       What is her distance from her destination hour after she leaves home?  Estimate the time at which her distance from her destination is miles.  When will she reach her destination?  How fast is she driving?        The point on the graph above is . In function notation, this can be written as . The practical meaning of this notation is that the distance to her destination after hour of driving is miles.  We look for the point on the graph for which the second coordinate is . The -coordinate of that point seems to be at . We conclude that the point lies on the graph, and that the associated function notation is . This means that after hours, the woman is 60 miles from her destination.  The woman reaches her destination when ; that is, when . From the graph, it is clear that . Hence the woman arrives at her destination after hours.  In the first hour of driving, her distance from her destination drops from miles to miles. After the next hour, it drops from miles to miles, and then from miles to miles during the hour after that. This pattern reveals that the woman is traveling at miles per hour.        Graphs of Increasing and Decreasing Functions  In graphical terms:     A function is increasing if its graph climbs as the independent variable increases; that is, as we move from left to right.    A function is decreasing if its graph falls as the independent variable increases; that is, as we move from left to right.     The function in is decreasing its graph is falling as increases. The amount of nicotine decreases as the amount of time after smoking a cigarette increases. In the distance to the destination decreases as the time spent driving increases. The function in is neither increasing nor decreasing in its domain. At first, over the negative -axis the graph is falling; the values decrease as increases. Then, over the positive -axis, the graph is climbing; the values increase as increases. We can say that is decreasing on the interval and increasing on the interval .   We typically require that these intervals be open : . Why? You'll see in calculus.    Functions Increasing or Decreasing on Intervals     function increasing A function is increasing on an interval if the values increase as increases along .  function decreasing A function is decreasing on an interval if the values decrease as increases along .        Identify the interval(s) on which the function depicted below is increasing and the interval(s) on which it is decreasing.   A short description.      The graph of is climbing on the interval and on the interval . Hence, the function is increasing on these intervals. In interval notation, we would write that the function is increasing on .  The graph of is falling and thus is decreasing on the interval . In interval notation, we would write that the function is decreasing on .   Note that we do not use a bracket or around any of the endpoints , , or that appear in the interval notation here. This is because a function is neither increasing nor decreasing at these endpoints it either stops at them, or turns around.        Vertical Line Test  We have established that the graph of a function is often a curve in the -plane. However, not every curve in the -plane is the graph of a function. The definition of a function requires that for each input in the domain there is exactly one output . That is, there cannot be two different outputs corresponding to the same input.  The Vertical Line Test is a simple visual way of determining if a given curve is or is not the graph of a function.   Vertical Line Test  vertical line test   Let a curve in the -plane be given. If there is a vertical line that intersects the curve more than once, then the curve does not represent a function. If every vertical line intersects the curve at most once, then the curve represents the graph of a function.     This test clearly requires having the graph of a curve. In the next section, when a table of values is given, we cannot use this test.     Is the circle of radius centered at the origin in the -plane the graph of a function?    Consider the vertical line corresponding to ; that is, the vertical line passing through the point on the -axis.   A short description.     It takes only one vertical line intersecting the curve twice to conclude that the curve is not a function!   This vertical line intersects the circle at two points with two different values of , meaning there are two outputs corresponding to the input . This violates the definition of a function. Hence, the circle is NOT the graph of a function.    In utilizing the Vertical Line Test, it doesn't matter if the coordinates on the plane are labeled with , , or other letters. The idea is the same.    Is the graph of a straight line segment between the ordered pairs and in the -plane the graph of a function?   A short description.      The line segment is the graph of a function whose domain is the interval . Using the Vertical Line Test, we can see that each individual vertical line that passes through a specific value of with on the horizontal axis crosses the line segment at exactly one point. Any vertical line that passes through a value of outside the interval does not intersect the segment.    Note that, in general, a function can have the same output for two different inputs. In , the function gives the same output for both and . Still, for each , we have only one value of .  Having the same output for two different inputs means that some horizontal lines intersect the graph more than once which is perfectly fine for a function:   A short description.    We will revisit graphs of functions in Section 1.4.      Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                       A short description.        Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                     A short description.        Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                     A short description.        The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                         A short description.        Use the graph of the function below to estimate each of the following.   A short description.                                            For the function whose graph is given in , estimate all values for which .     , , and .      For the function whose graph is given in , estimate all values of for which .     , , and .      Use the graph of the function shown below to estimate each of the following.   A short description.                                            For the function whose graph is given in , estimate all values of for which .     and       For the function whose graph is given in , estimate all values of for which .     , , , and       A driver of a 2019 Toyota Corolla fills his gas tank and embarks on a highway trip. The amount of gas left in the tank, , in gallons, is a function of the number of miles driven, . Use the graph of given below to answer the following questions.   A short description.       What is the fuel tank capacity of the 2019 Toyota Corolla?     gallons.      How much fuel is left after 200 miles?     gallons.      What happens after 528 miles?    The gas tank is empty.      What is the fuel efficiency of the 2019 Toyota Corolla on the highway?    Approximately miles per gallon.       The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below.   A short description.       How much caffeine was absorbed into the bloodstream from the cup of coffee?     mg.      How much caffeine is left after hours? After hours?    After hours, there are mg left. After hours, mg.      Is the function increasing, decreasing or neither on the interval ?    Decreasing.       A man deposited money into a savings account. His balance , in dollars, after years is given by the graph below.   A short description.       What was his initial deposit?     .      How much money was in his account after 10 years? After 20 years?    After 10 years, . After 20 years, .      Is the function increasing, decreasing or neither in the interval ?    Increasing.       Is the curve below the graph of a function ? Explain your answer.   A short description.      No, because it fails the vertical line test (in many places!).      The graph of a function is given below. Use it to find the following.   A short description.       Estimate .     .      Estimate all values of for which .     and .      Estimate all values of for which .     and .       For the function whose graph is depicted below, identify the intervals on the -axis for which the function is increasing and for which the function is decreasing.   A short description.      Increasing on the intervals . Or, write as and .  Decreasing on the interval . Or, write as .     "
},
{
  "id": "sec_1_2-2",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Sketch or interpret the graph of a function given algebraically, numerically, or graphically, including in applied contexts.    Identify the interval(s) on which a function is increasing or decreasing from its graph.    Use the Vertical Line Test to determine whether a given curve is the graph of a function.    "
},
{
  "id": "jsx_1_2_function_graph",
  "level": "2",
  "url": "sec_1_2.html#jsx_1_2_function_graph",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_1_2-3-6",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-3-6",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Graph of a Function.",
  "body": " Graph of a Function  function graph of   The graph of a function is the collection of all points in the -plane for which . In other words, the graph is the collection of points for all inputs in the domain of .   "
},
{
  "id": "example-ch1-plot-points",
  "level": "2",
  "url": "sec_1_2.html#example-ch1-plot-points",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Sketch the graph of the function where by hand. Plot points on the graph for .    The below table gives each input , the corresponding output obtained by calculating , and then the associated point .         pair                                                 Plotting these points on the -plane and joining neighboring points by straight line segments results in the following rough sketch of :   A short description.    This is a decent approximation of the graph of . A better graph of can be obtained from a graphing calculator, graphing software package, or other similar tool.   A short description.     "
},
{
  "id": "example-ch1-nicotine-graph",
  "level": "2",
  "url": "sec_1_2.html#example-ch1-nicotine-graph",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is given in .     A short description.       How much nicotine is absorbed from a single cigarette?  How much nicotine is left in the person's bloodstream hours after smoking a single cigarette? What about after hours?        Note that (as the point belongs to the graph of ). Thus, at hours so immediately after a person finishes smoking a cigarette the amount of nicotine in their bloodstream is milligrams. This is the amount absorbed from the cigarette.   As time goes on, the amount of nicotine decreases. We see from the grid on the -plane that ; in other words, the point lies on the graph. This tells us that hours after smoking a single cigarette there is milligram of nicotine left in the bloodstream.  Similarly, we observe that and conclude that hours after smoking a single cigarette there is only milligram of nicotine left in the bloodstream.      "
},
{
  "id": "example-ch1-driving",
  "level": "2",
  "url": "sec_1_2.html#example-ch1-driving",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  A woman is driving to visit with her family in a town miles from her home. Let be the time, in hours, since she left her home. Let be the distance, in miles, to her destination. Here, is a function of : . The graph of the function is given in .     A short description.       What is her distance from her destination hour after she leaves home?  Estimate the time at which her distance from her destination is miles.  When will she reach her destination?  How fast is she driving?        The point on the graph above is . In function notation, this can be written as . The practical meaning of this notation is that the distance to her destination after hour of driving is miles.  We look for the point on the graph for which the second coordinate is . The -coordinate of that point seems to be at . We conclude that the point lies on the graph, and that the associated function notation is . This means that after hours, the woman is 60 miles from her destination.  The woman reaches her destination when ; that is, when . From the graph, it is clear that . Hence the woman arrives at her destination after hours.  In the first hour of driving, her distance from her destination drops from miles to miles. After the next hour, it drops from miles to miles, and then from miles to miles during the hour after that. This pattern reveals that the woman is traveling at miles per hour.     "
},
{
  "id": "sec_1_2-4-6",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-4-6",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Functions Increasing or Decreasing on Intervals.",
  "body": " Functions Increasing or Decreasing on Intervals     function increasing A function is increasing on an interval if the values increase as increases along .  function decreasing A function is decreasing on an interval if the values decrease as increases along .     "
},
{
  "id": "sec_1_2-4-7",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-4-7",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Identify the interval(s) on which the function depicted below is increasing and the interval(s) on which it is decreasing.   A short description.      The graph of is climbing on the interval and on the interval . Hence, the function is increasing on these intervals. In interval notation, we would write that the function is increasing on .  The graph of is falling and thus is decreasing on the interval . In interval notation, we would write that the function is decreasing on .   Note that we do not use a bracket or around any of the endpoints , , or that appear in the interval notation here. This is because a function is neither increasing nor decreasing at these endpoints it either stops at them, or turns around.     "
},
{
  "id": "sec_1_2-5-4",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-4",
  "type": "Result",
  "number": "1.2.10",
  "title": "Vertical Line Test.",
  "body": " Vertical Line Test  vertical line test   Let a curve in the -plane be given. If there is a vertical line that intersects the curve more than once, then the curve does not represent a function. If every vertical line intersects the curve at most once, then the curve represents the graph of a function.   "
},
{
  "id": "sec_1_2-5-6",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-6",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Is the circle of radius centered at the origin in the -plane the graph of a function?    Consider the vertical line corresponding to ; that is, the vertical line passing through the point on the -axis.   A short description.     It takes only one vertical line intersecting the curve twice to conclude that the curve is not a function!   This vertical line intersects the circle at two points with two different values of , meaning there are two outputs corresponding to the input . This violates the definition of a function. Hence, the circle is NOT the graph of a function.   "
},
{
  "id": "sec_1_2-5-8",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-8",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  Is the graph of a straight line segment between the ordered pairs and in the -plane the graph of a function?   A short description.      The line segment is the graph of a function whose domain is the interval . Using the Vertical Line Test, we can see that each individual vertical line that passes through a specific value of with on the horizontal axis crosses the line segment at exactly one point. Any vertical line that passes through a value of outside the interval does not intersect the segment.   "
},
{
  "id": "exercise_1_2_1",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                       A short description.     "
},
{
  "id": "exercise_1_2_2",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                     A short description.     "
},
{
  "id": "exercise_1_2_3",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                     A short description.     "
},
{
  "id": "exercise_1_2_4",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                         A short description.     "
},
{
  "id": "exercise-1_2-graph1",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-graph1",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Use the graph of the function below to estimate each of the following.   A short description.                                         "
},
{
  "id": "exercise_1_2_6",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values for which .     , , and .   "
},
{
  "id": "exercise_1_2_7",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     , , and .   "
},
{
  "id": "exercise-1_2-graph2",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-graph2",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Use the graph of the function shown below to estimate each of the following.   A short description.                                         "
},
{
  "id": "exercise_1_2_9",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     and    "
},
{
  "id": "exercise_1_2_10",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     , , , and    "
},
{
  "id": "exercise_1_2_11",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  A driver of a 2019 Toyota Corolla fills his gas tank and embarks on a highway trip. The amount of gas left in the tank, , in gallons, is a function of the number of miles driven, . Use the graph of given below to answer the following questions.   A short description.       What is the fuel tank capacity of the 2019 Toyota Corolla?     gallons.      How much fuel is left after 200 miles?     gallons.      What happens after 528 miles?    The gas tank is empty.      What is the fuel efficiency of the 2019 Toyota Corolla on the highway?    Approximately miles per gallon.    "
},
{
  "id": "exercise-1_2-caff",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-caff",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below.   A short description.       How much caffeine was absorbed into the bloodstream from the cup of coffee?     mg.      How much caffeine is left after hours? After hours?    After hours, there are mg left. After hours, mg.      Is the function increasing, decreasing or neither on the interval ?    Decreasing.    "
},
{
  "id": "exercise_1_2_13",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A man deposited money into a savings account. His balance , in dollars, after years is given by the graph below.   A short description.       What was his initial deposit?     .      How much money was in his account after 10 years? After 20 years?    After 10 years, . After 20 years, .      Is the function increasing, decreasing or neither in the interval ?    Increasing.    "
},
{
  "id": "exercise_1_2_14",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Is the curve below the graph of a function ? Explain your answer.   A short description.      No, because it fails the vertical line test (in many places!).   "
},
{
  "id": "exercise_1_2_15",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The graph of a function is given below. Use it to find the following.   A short description.       Estimate .     .      Estimate all values of for which .     and .      Estimate all values of for which .     and .    "
},
{
  "id": "exercise_1_2_16",
  "level": "2",
  "url": "sec_1_2.html#exercise_1_2_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  For the function whose graph is depicted below, identify the intervals on the -axis for which the function is increasing and for which the function is decreasing.   A short description.      Increasing on the intervals . Or, write as and .  Decreasing on the interval . Or, write as .   "
},
{
  "id": "sec_1_3",
  "level": "1",
  "url": "sec_1_3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Functions Given Numerically",
  "body": " Functions Given Numerically    After completing this section, you should be able to do the following.     Express a numerically given table of data as a function and interpret its values in practical terms.    Sketch an approximate graph of a function given numerically by plotting and connecting its tabulated points.    Identify patterns in a table of values to determine a possible formula for the function it represents.     In the previous section, we saw that if a function is given algebraically by a formula we can easily create a table of values for that function. That table of values can then be used to sketch the graph of the function, which in turn provides a visual representation of the function that can allow us to see behavior that may not be readily apparent from the formula alone.  When we study a real-life process, which inevitably involves a function of some kind, we rarely begin with a formula for a function that represents or models  the process. Typically, we take measurements and collect and tabulate numerical data for the process we are studying. We then try to find a formula for a function that fits the numerical information we collected. That is, we start with a table of values and then try to find a formula for a function, not the other way around.   function given numerically Finding a mathematical description of a real-life process is called mathematical modeling . A function that is given by its table of values is said to be given numerically .  If you ever kept overripe bananas in your house a bit too long, you probably experienced an invasion by fruit flies. And you probably noticed how quickly the population of fruit flies in your house was increasing. It is difficult to count the number of fruit flies in a house, but it can be done in a laboratory.  Suppose that a population of fruit flies in a laboratory experiment is initially 100 flies and it begins to grow. The size of the population, , measured in thousands of flies, is a function of the time since the experiment began; that is, . Given how quickly fruit flies multiply, it is reasonable to measure in days. The scientists conducting the experiment do not have a formula for that describes the growth of this fruit fly population and, in general, that growth (and therefore the function ) depends on many factors controlled by the lab the temperature, food provided, etc. Taking into consideration the length of the fruit fly reproductive cycle, the scientists observe the population and take measurements every 14 days. The data they collect is provided in the table below.      (in days)  0  14  28  42  56    (in thousands)  0.1  3.94  155.12  6106.99  240432.20     We see that is an increasing function and it increases very fast. After 56 days, the initial population of 100 flies grew to 240432.2 thousand flies; that is, 240,432,200 flies!  Can we find a formula for a function so that is a table of values for ? In other words, can we find a mathematical model for the population growth exhibited in the fruit fly experiment? It turns out that finding a formula for a function that corresponds to experimental data, even if only approximately, may be difficult. In fact, it can be impossible. A formula corresponding to  can be found, as the growth of the fruit fly population is exponential. You will see how this is done when we cover exponential functions in Chapter 5.  One can obtain a visual representation of a function from a numerical representation by sketching its approximate graph. The function associated with for between 0 and 42 is plotted below. The value at is so large that it squeezes the graph vertically too much and makes it hard to read, which is why we excluded it.   A short description.      On December 31, 2019 the price of ExxonMobil stock (NYSE: XOM) was changing during the day. The price of the stock each hour from 10 am to 4 pm is recorded in the table below.      time  10 am  11 am  12 pm  1 pm  2 pm  3 pm  4 pm    price (dollars)              Let be the function that gives the price of ExxonMobil stock hours after 10 am on December 31, 2019. Rewrite with the first row giving values of and the second values of .  Sketch an approximate graph of .  Does it appear simple to find a formula or mathematical model for the function ?         We denote by the time, in hours, since 10 am on December 31, 2019. This means that 10 am is , 11 am is , 4 pm is , and so on. As the function gives the price of ExxonMobil stock at time , we can express numerically by:                             We use to sketch an approximation of the graph of .   A short description.    Note that the red ordered pairs are guaranteed to be on the graph of , while the line segments used to connect them are not.   The function is neither increasing nor decreasing as the graph sometimes climbs and sometimes falls as increases. Finding a formula for the function that models fluctuations of the price of a stock does not seem simple and we will not attempt to do so.        A woman goes to a gym to exercise. After minutes on a treadmill, her pulse (heart rate), , in beats per minute, is:      (minutes)  0  2  4  6  8  10    (bpm)  80  84  88  92  96  100        Express the above table as a function.    Does it appear simple to find a formula or mathematical model for this function?    Sketch an approximate graph of the function.          The woman's pulse, , is a function of time , which, based on the table, we will measure in minutes since her treadmill workout began. We could write if we chose to name the associated function . For the sake of simplicity, we often denote the dependent variable and the function by the same letter. In this case, we will instead write .    Can we find a formula for ? We haven't developed any specific techniques to do so yet, and hence to answer this question we can only attempt to observe patterns and make educated guesses based on common sense.  Looking at the data in , we can see that the woman's pulse increases as time increases, which we might expect based on our own experience with exercise. How does increase? The initial value of   in function notation is . During the first two minutes from to , her pulse increases by bpm from to . During the next two minutes from to , her pulse increases again by bpm from to . Looking at each of the remaining two-minute intervals, we see that her pulse increases by bpm every two minutes: to , to , and to .  As we attempt to find a possible formula for , we observe that if her pulse is increasing by bpm every two minutes, we could perhaps think of this as bpm every minute instead. So her pulse starts at an initial value of bpm and then we add bpm for every one-minute change in . The formula that reflects that is: Let's check if the values of reflect the data in :     Yes! Our formula produces all the right values and matches the information given in .  Note that the formula gives a possible formula for . It is entirely possible that the woman's actual heart rate at time minutes does not match what the formula suggests it should be. We have no way of knowing, as the table does not tell us anything about the values of at any times other than minutes.    Here is an approximate graph of the function based on the numerical data:   A short description.           Functions and are given numerically below. Find possible formulas for and .                                                             We notice that the values of for each given in the table are negative and have the magnitude equal to . Hence, a possible function represented by is . We can easily check that works by substituting into and calculating the corresponding values. Those are indeed and , respectively.    At , . Then, as increases, decreases in a very regular fashion: for each increase of in , decreases by . A formula that gives exactly such behavior is: We can verify that this function produces the values in :          For now, we can only try to observe patterns and guess formulas for numerically given functions. As we study various families of functions, we will develop more systematic methods for finding formulas of functions given numerically.   Practice Problems     The function is given by the following table of values.                          Use the table to fill in the missing values. Separate multiple answers with a comma.                                                    Use the numerically given function below to find each of the following.                                                              Let be the function given in .     Find all values of for which            Find all values of for which             Use the numerically given function below to find each of the following.                                                              Let be the function given in .     Find all values of for which .     , , and       Find all values of for which .            Determine a formula for the function given numerically in the table below.                                 Determine a formula for the function given numerically in the table below and fill in the missing values.                        ?  ?                         A driver of a Volkswagen Passat fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Fill in the missing numbers and find the gas mileage of the VW Passat; that is, the number of miles the SUV gets per gallon.                     ?  ?  ?                    The gas mileage of the driver's Volkswagen Passat is 24 miles per gallon.      Data regarding the world population between 2010 and 2018, in billions, is recorded in the table below.     Year             Population             The information in the table can be rewritten so that the population, , in billions, is a function of the number of years, , since 2010. This rewriting has been partially completed for you. Fill in the missing values.                   ?      ?                                     Sketch an approximate graph of the population function whose table you completed in .     A short description.        The amount of power a dragon must output to carry a knight depends on how fast it is flying, as shown in the table below.    speed (mph)         power (kW)            Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the data in the table.    The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the table since the values associated with the power required increase as the speed increases.      Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the data in the table.    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the table since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the power required to carry the knight increases by more and more.       Sketch the graph of the function given numerically in and use it to answer the following questions.     Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the graph.     A short description.    The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the graph since it climbs over the interval .      Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the graph.    Using the graph above, the amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the graph since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the graph climbs more and more quickly.      "
},
{
  "id": "sec_1_3-2",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Express a numerically given table of data as a function and interpret its values in practical terms.    Sketch an approximate graph of a function given numerically by plotting and connecting its tabulated points.    Identify patterns in a table of values to determine a possible formula for the function it represents.    "
},
{
  "id": "table-ch1-fruit-flies",
  "level": "2",
  "url": "sec_1_3.html#table-ch1-fruit-flies",
  "type": "Table",
  "number": "1.3.1",
  "title": "",
  "body": "    (in days)  0  14  28  42  56    (in thousands)  0.1  3.94  155.12  6106.99  240432.20    "
},
{
  "id": "sec_1_3-13",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-13",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  On December 31, 2019 the price of ExxonMobil stock (NYSE: XOM) was changing during the day. The price of the stock each hour from 10 am to 4 pm is recorded in the table below.      time  10 am  11 am  12 pm  1 pm  2 pm  3 pm  4 pm    price (dollars)              Let be the function that gives the price of ExxonMobil stock hours after 10 am on December 31, 2019. Rewrite with the first row giving values of and the second values of .  Sketch an approximate graph of .  Does it appear simple to find a formula or mathematical model for the function ?         We denote by the time, in hours, since 10 am on December 31, 2019. This means that 10 am is , 11 am is , 4 pm is , and so on. As the function gives the price of ExxonMobil stock at time , we can express numerically by:                             We use to sketch an approximation of the graph of .   A short description.    Note that the red ordered pairs are guaranteed to be on the graph of , while the line segments used to connect them are not.   The function is neither increasing nor decreasing as the graph sometimes climbs and sometimes falls as increases. Finding a formula for the function that models fluctuations of the price of a stock does not seem simple and we will not attempt to do so.     "
},
{
  "id": "sec_1_3-14",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-14",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  A woman goes to a gym to exercise. After minutes on a treadmill, her pulse (heart rate), , in beats per minute, is:      (minutes)  0  2  4  6  8  10    (bpm)  80  84  88  92  96  100        Express the above table as a function.    Does it appear simple to find a formula or mathematical model for this function?    Sketch an approximate graph of the function.          The woman's pulse, , is a function of time , which, based on the table, we will measure in minutes since her treadmill workout began. We could write if we chose to name the associated function . For the sake of simplicity, we often denote the dependent variable and the function by the same letter. In this case, we will instead write .    Can we find a formula for ? We haven't developed any specific techniques to do so yet, and hence to answer this question we can only attempt to observe patterns and make educated guesses based on common sense.  Looking at the data in , we can see that the woman's pulse increases as time increases, which we might expect based on our own experience with exercise. How does increase? The initial value of   in function notation is . During the first two minutes from to , her pulse increases by bpm from to . During the next two minutes from to , her pulse increases again by bpm from to . Looking at each of the remaining two-minute intervals, we see that her pulse increases by bpm every two minutes: to , to , and to .  As we attempt to find a possible formula for , we observe that if her pulse is increasing by bpm every two minutes, we could perhaps think of this as bpm every minute instead. So her pulse starts at an initial value of bpm and then we add bpm for every one-minute change in . The formula that reflects that is: Let's check if the values of reflect the data in :     Yes! Our formula produces all the right values and matches the information given in .  Note that the formula gives a possible formula for . It is entirely possible that the woman's actual heart rate at time minutes does not match what the formula suggests it should be. We have no way of knowing, as the table does not tell us anything about the values of at any times other than minutes.    Here is an approximate graph of the function based on the numerical data:   A short description.        "
},
{
  "id": "sec_1_3-15",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-15",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  Functions and are given numerically below. Find possible formulas for and .                                                             We notice that the values of for each given in the table are negative and have the magnitude equal to . Hence, a possible function represented by is . We can easily check that works by substituting into and calculating the corresponding values. Those are indeed and , respectively.    At , . Then, as increases, decreases in a very regular fashion: for each increase of in , decreases by . A formula that gives exactly such behavior is: We can verify that this function produces the values in :         "
},
{
  "id": "ww_1_3_1",
  "level": "2",
  "url": "sec_1_3.html#ww_1_3_1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "   The function is given by the following table of values.                          Use the table to fill in the missing values. Separate multiple answers with a comma.                                               "
},
{
  "id": "exercise-1_3-table1",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-table1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Use the numerically given function below to find each of the following.                                                           "
},
{
  "id": "exercise_1_3_2",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Let be the function given in .     Find all values of for which            Find all values of for which          "
},
{
  "id": "exercise-1_3-table2",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-table2",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Use the numerically given function below to find each of the following.                                                           "
},
{
  "id": "exercise_1_3_4",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Let be the function given in .     Find all values of for which .     , , and       Find all values of for which .         "
},
{
  "id": "exercise_1_3_5",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Determine a formula for the function given numerically in the table below.                              "
},
{
  "id": "exercise_1_3_6",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Determine a formula for the function given numerically in the table below and fill in the missing values.                        ?  ?                      "
},
{
  "id": "exercise_1_3_7",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_7",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  A driver of a Volkswagen Passat fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Fill in the missing numbers and find the gas mileage of the VW Passat; that is, the number of miles the SUV gets per gallon.                     ?  ?  ?                    The gas mileage of the driver's Volkswagen Passat is 24 miles per gallon.   "
},
{
  "id": "exercise-1_3-population",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-population",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Data regarding the world population between 2010 and 2018, in billions, is recorded in the table below.     Year             Population             The information in the table can be rewritten so that the population, , in billions, is a function of the number of years, , since 2010. This rewriting has been partially completed for you. Fill in the missing values.                   ?      ?                                  "
},
{
  "id": "exercise_1_3_9",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_9",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Sketch an approximate graph of the population function whose table you completed in .     A short description.     "
},
{
  "id": "exercise-1_3-dragon",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-dragon",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  The amount of power a dragon must output to carry a knight depends on how fast it is flying, as shown in the table below.    speed (mph)         power (kW)            Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the data in the table.    The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the table since the values associated with the power required increase as the speed increases.      Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the data in the table.    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the table since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the power required to carry the knight increases by more and more.    "
},
{
  "id": "exercise_1_3_11",
  "level": "2",
  "url": "sec_1_3.html#exercise_1_3_11",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Sketch the graph of the function given numerically in and use it to answer the following questions.     Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the graph.     A short description.    The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the graph since it climbs over the interval .      Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the graph.    Using the graph above, the amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the graph since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the graph climbs more and more quickly.    "
},
{
  "id": "sec_1_4",
  "level": "1",
  "url": "sec_1_4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vertical and Horizontal Intercepts",
  "body": " Vertical and Horizontal Intercepts    After completing this section, you should be able to do the following.     Find the vertical intercept of a function by evaluating .    Find the horizontal intercept(s) of a function by solving the equation .    Determine the vertical and horizontal intercepts of a function given graphically or numerically, and interpret them in practical terms.     The points where the graph of a function crosses the horizontal axis or the vertical axis are of special interest. They are called the horizontal and the vertical intercepts. If the independent variable is named and the dependent variable is named , the horizontal and vertical intercepts are also called -intercepts and -intercepts, respectively.   A short description.    The plot above illustrates that every point in the -plane that lies on the -axis has the -coordinate , and every point that lies on -axis has the -coordinate . We will use this observation to find the vertical and horizontal intercepts (if they exist).   Vertical Intercept  intercepts vertical   Suppose the graph of the function crosses the -axis at ; that is, at the point . Then is called the -intercept of the function .    Since is on the graph of the function, . So the -intercept is simply the value of the function at .   Why can a function not have more than one vertical intercept? Hint: Consider the vertical line test.   If is in the domain of , we have exactly one -intercept. If is not in the domain, the graph of does not cross the -axis and there is no -intercept.  That is: To find the vertical intercept of , evaluate .   A short description.     Horizontal Intercepts  intercepts horizontal   Suppose that the graph of the function crosses the -axis at ; that is, at the point . Then is called an -intercept of the function .    Since the point is on the graph of the function, . So the -intercepts are the real values of at which . A function may have many -intercepts. They are often called the zeros or roots of a graphed function .  That is: To find horizontal intercepts of , solve for .    A short description.      Consider the function where . Find the vertical intercept and the horizontal intercepts.    To find the -intercept, we evaluate . Therefore, crosses the -axis at ; that is, the vertical intercept is the point .   In describing the vertical intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   To find -intercepts, we have to solve the equation . For our function, the equation we must solve is . We use the standard techniques for solving equations. There are two solutions, and . These are the two horizontal intercepts or zeros of the function. Since and , the associated ordered pairs are and .   In describing a horizontal intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   The graph of the function clearly shows the intercepts and the corresponding points on the -plane:   A short description.        A full tank of water springs a leak. Water is leaking out at the rate of gallons per hour. Let be the amount of water in the tank, in gallons, hours after the leak started. The function is given by Find vertical and horizontal intercepts of the function and interpret them in practical terms. Also graph the function.    For the vertical intercept or the -intercept of the function , we evaluate , which results in . Since is the value of at , it is measured in gallons and it gives the initial amount of water in the tank. We conclude that the vertical intercept of 60 gallons is the initial amount of water in the tank. Note that 60 gallons is also the capacity of the tank as the tank was full when the leak began at time .  To find horizontal intercepts, we have to solve the equation for ; that is, The function has one horizontal intercept at . Thus, hours after the leak started, the amount of water left in the tank is . In practical terms, it will take hours until the tank is empty.  Here is the graph of the function . The intercepts are clearly visible on the graph and their meaning is clear as well.   A short description.      Given the graph of a function, with its formula unknown, we are still able to find the intercepts.    Use the graph of a function below to estimate its vertical and horizontal intercepts.   A short description.      The vertical intercept is where the graph of a function crosses the vertical axis, which is the -axis for the function shown. We can see that this is the ordered pair . Thus, the vertical intercept occurs at .  The graph crosses the -axis at each of . These are the -intercepts (the zeros) of , meaning for each of . The corresponding points are , , and .    Similarly, given a function that is described numerically (i.e., by a table of values), we can find the intercepts by looking for when or .    Every summer the depth of water in a reservoir is measured weekly over the 10-week period beginning with July 1. Let be the depth of water, in meters, and denote the time, in weeks, since July 1. Here, is a function of , which can be written as . The readings from 2019 are provided in the table below.      (weeks)               (meters)                What are the vertical and horizontal intercepts given by the table? What is their practical meaning? Verify your answer on a graph of .    The vertical intercept occurs when and hence has value given by . Per the table, . Hence, the vertical intercept, or -intercept, is . In practical terms, the vertical intercept tells us that the water depth on July 1, 2019 was 10 meters.  The horizontal intercepts are values of for which . The depth is at and . In practical terms, the horizontal intercepts tell us that at both 5 and 9 weeks after July 1, 2019, the reservoir was empty. Below is a graph that fits the data from . We can clearly see the intercepts.   A short description.         Find the horizontal and vertical intercepts or state that they don't exist for each function given below.           horizontal intercept:  ; vertical intercept:              horizontal intercepts:  , ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercepts: none; vertical intercept: none            horizontal intercept: none; vertical intercept:         Identify the horizontal and vertical intercepts for each function given numerically below.                            horizontal intercepts:  , 2; vertical intercept: 2                             horizontal intercepts: none; vertical intercept: 5                             horizontal intercept: 8; vertical intercept: none       Estimate the horizontal and vertical intercepts for each function given graphically below.      A short description.       horizontal intercepts: 0, 4, 8; vertical intercept: 0       A short description.       horizontal intercepts: none; vertical intercept: 3       A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by Find the vertical intercept of the function and the horizontal intercept(s) for which . Give your answers to two decimal places and interpret the intercepts in practical terms.     vertical intercept: 300 this is the number of feet above the lake that the ball is dropped from; horizontal intercept:  this is the number of seconds that it takes after being dropped for the ball to hit the surface of the lake      The value of a car , in dollars, years after the car was purchased is given by Find the vertical and horizontal intercepts of the function and interpret them in practical terms.     vertical intercept: 21500 this is the price in dollars for which the car was purchased; horizontal intercept:  this is the number of years after purchase that it takes for the car's value to depreciate to      "
},
{
  "id": "sec_1_4-2",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Find the vertical intercept of a function by evaluating .    Find the horizontal intercept(s) of a function by solving the equation .    Determine the vertical and horizontal intercepts of a function given graphically or numerically, and interpret them in practical terms.    "
},
{
  "id": "sec_1_4-6",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-6",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Vertical Intercept.",
  "body": " Vertical Intercept  intercepts vertical   Suppose the graph of the function crosses the -axis at ; that is, at the point . Then is called the -intercept of the function .   "
},
{
  "id": "sec_1_4-12",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-12",
  "type": "Definition",
  "number": "1.4.2",
  "title": "Horizontal Intercepts.",
  "body": " Horizontal Intercepts  intercepts horizontal   Suppose that the graph of the function crosses the -axis at ; that is, at the point . Then is called an -intercept of the function .   "
},
{
  "id": "sec_1_4-16",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-16",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Consider the function where . Find the vertical intercept and the horizontal intercepts.    To find the -intercept, we evaluate . Therefore, crosses the -axis at ; that is, the vertical intercept is the point .   In describing the vertical intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   To find -intercepts, we have to solve the equation . For our function, the equation we must solve is . We use the standard techniques for solving equations. There are two solutions, and . These are the two horizontal intercepts or zeros of the function. Since and , the associated ordered pairs are and .   In describing a horizontal intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   The graph of the function clearly shows the intercepts and the corresponding points on the -plane:   A short description.     "
},
{
  "id": "example-ch1-leak",
  "level": "2",
  "url": "sec_1_4.html#example-ch1-leak",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  A full tank of water springs a leak. Water is leaking out at the rate of gallons per hour. Let be the amount of water in the tank, in gallons, hours after the leak started. The function is given by Find vertical and horizontal intercepts of the function and interpret them in practical terms. Also graph the function.    For the vertical intercept or the -intercept of the function , we evaluate , which results in . Since is the value of at , it is measured in gallons and it gives the initial amount of water in the tank. We conclude that the vertical intercept of 60 gallons is the initial amount of water in the tank. Note that 60 gallons is also the capacity of the tank as the tank was full when the leak began at time .  To find horizontal intercepts, we have to solve the equation for ; that is, The function has one horizontal intercept at . Thus, hours after the leak started, the amount of water left in the tank is . In practical terms, it will take hours until the tank is empty.  Here is the graph of the function . The intercepts are clearly visible on the graph and their meaning is clear as well.   A short description.     "
},
{
  "id": "sec_1_4-19",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-19",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Use the graph of a function below to estimate its vertical and horizontal intercepts.   A short description.      The vertical intercept is where the graph of a function crosses the vertical axis, which is the -axis for the function shown. We can see that this is the ordered pair . Thus, the vertical intercept occurs at .  The graph crosses the -axis at each of . These are the -intercepts (the zeros) of , meaning for each of . The corresponding points are , , and .   "
},
{
  "id": "sec_1_4-21",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-21",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Every summer the depth of water in a reservoir is measured weekly over the 10-week period beginning with July 1. Let be the depth of water, in meters, and denote the time, in weeks, since July 1. Here, is a function of , which can be written as . The readings from 2019 are provided in the table below.      (weeks)               (meters)                What are the vertical and horizontal intercepts given by the table? What is their practical meaning? Verify your answer on a graph of .    The vertical intercept occurs when and hence has value given by . Per the table, . Hence, the vertical intercept, or -intercept, is . In practical terms, the vertical intercept tells us that the water depth on July 1, 2019 was 10 meters.  The horizontal intercepts are values of for which . The depth is at and . In practical terms, the horizontal intercepts tell us that at both 5 and 9 weeks after July 1, 2019, the reservoir was empty. Below is a graph that fits the data from . We can clearly see the intercepts.   A short description.     "
},
{
  "id": "exercise_1_4_1",
  "level": "2",
  "url": "sec_1_4.html#exercise_1_4_1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Find the horizontal and vertical intercepts or state that they don't exist for each function given below.           horizontal intercept:  ; vertical intercept:              horizontal intercepts:  , ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercept:  ; vertical intercept:              horizontal intercepts: none; vertical intercept: none            horizontal intercept: none; vertical intercept:      "
},
{
  "id": "exercise_1_4_2",
  "level": "2",
  "url": "sec_1_4.html#exercise_1_4_2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Identify the horizontal and vertical intercepts for each function given numerically below.                            horizontal intercepts:  , 2; vertical intercept: 2                             horizontal intercepts: none; vertical intercept: 5                             horizontal intercept: 8; vertical intercept: none    "
},
{
  "id": "exercise_1_4_3",
  "level": "2",
  "url": "sec_1_4.html#exercise_1_4_3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Estimate the horizontal and vertical intercepts for each function given graphically below.      A short description.       horizontal intercepts: 0, 4, 8; vertical intercept: 0       A short description.       horizontal intercepts: none; vertical intercept: 3    "
},
{
  "id": "exercise_1_4_4",
  "level": "2",
  "url": "sec_1_4.html#exercise_1_4_4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by Find the vertical intercept of the function and the horizontal intercept(s) for which . Give your answers to two decimal places and interpret the intercepts in practical terms.     vertical intercept: 300 this is the number of feet above the lake that the ball is dropped from; horizontal intercept:  this is the number of seconds that it takes after being dropped for the ball to hit the surface of the lake   "
},
{
  "id": "exercise_1_4_5",
  "level": "2",
  "url": "sec_1_4.html#exercise_1_4_5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  The value of a car , in dollars, years after the car was purchased is given by Find the vertical and horizontal intercepts of the function and interpret them in practical terms.     vertical intercept: 21500 this is the price in dollars for which the car was purchased; horizontal intercept:  this is the number of years after purchase that it takes for the car's value to depreciate to    "
},
{
  "id": "sec_1_5",
  "level": "1",
  "url": "sec_1_5.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Average Rate of Change",
  "body": " The Average Rate of Change    After completing this section, you should be able to do the following.     Explain why the average, rather than instantaneous, rate of change is used to describe how a quantity changes over an interval.    Compute the average rate of change of a function between two input values using the formula , given a function algebraically, graphically, or numerically.    Determine and interpret the appropriate units and practical meaning of an average rate of change in an applied context.     The notion of a rate of change is central to mathematics and its applications. Roughly speaking, a rate of change tells us how fast and in what manner a given quantity is changing with respect to another changing quantity. We will consider three examples below.    Suppose that a population of a town grows by people each year. Here, the rate of change of the population with respect to time is constant and equal to people\/year.   Recall . A daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a patient, , in kilograms. More precisely, . How fast does the dose increase as the weight increases? The formula for clearly shows that for each 1 kilogram increase in weight, the dose increases by 50 milligrams. In this case, the rate of change of with respect to weight is milligrams\/kilogram.    Suppose that the value of your car changes at the rate dollars\/year. The rate of change is negative, meaning that the value of the car decreases by dollars each year. In general, a quantity that changes at a negative rate is decreasing while one that changes at a positive rate is increasing.     In the three examples above, the rate of change of the dependent variable with respect to the independent variable is constant. In real-life processes, this is rarely the case.  Consider the following example of two students, Amir and Nick, who went to the library to study for a precalculus exam. After hours of uninterrupted study, Amir mastered pages of new material from the textbook while Nick mastered pages. The graphs of the two functions and are in .      A short description.     A short description.      According to the graphs, both students stayed in the library for 5 hours. We can see that during the 5-hour session, both students learned about 30 new pages, as and .  During the first hour, Amir mastered approximately pages of new material, while Nick mastered approximately pages. Comparatively speaking, Amir learned quickly during the first hour, while Nick learned more slowly.  During the last hour, Amir mastered approximately pages of new material, while Nick mastered approximately pages.  This means that Amir went from learning quickly at the beginning of the study session to learning more slowly as time went on. Nick, on the other hand, got off to a slow start but picked up the pace as time went on. Their learning patterns are clearly not identical.  Does it make sense to ask how quickly or at what rate in pages per hour each student learned during the 5-hour session? Not really. The question is ambiguous. When exactly in the study session should we focus on? The beginning? The end? For both students, the rate at which they were learning during the session changed, with Amir learning more and more slowly over time and Nick learning faster and faster.  What does make sense is to consider how quickly each student learned during the 5-hour session on average . Amir learned quickly at first and then more slowly later, but overall he mastered 30 pages of new material in 5 hours. He learned at an average rate of pages\/hour. Nick, on the other hand, learned slowly at first, then faster, but he also mastered 30 pages in 5 hours. So, he too learned at an average rate of pages\/hour.  Readers who proceed to Calculus will study instantaneous rate of change how quickly a quantity changes at a specific input. For now, the average rate of change is the best we can do.   Average Rate of Change  average rate of change   Let be a function of , . Let and be given. The average rate of change of between and is given by     We'll use to abbreviate Average Rate of Change.  Typically, the symbol (the Greek letter Delta) is used to mean change in. So, stands for a change in while stands for a change in . In the definition above, stands for the change in between and . This can be thought of as the distance between the numbers and , which is given by . The notation stands for the change in that takes place as changes from to . That change is given by . The graph below illustrates the changes in and .         Let . Find the average rate of change of between and .    We use the definition of the average rate of change with , and : Therefore, the average rate of change of between and is .     average rate of change units This is not an applied example so and don't have real-life units. In general, the average rate of change is measured in Were units associated with and in the last example, we would write that the average rate of change of between and is .  Let's revisit about nicotine leaving the body after a cigarette is smoked.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is shown below.   A short description.    Use the graph to find and interpret the average rate of change of between:  and ;  and .  Include units with your answers.       To find the average rate of change between and , we use the graph to find the values of the function at and at . At , we have milligrams. At , milligrams. Thus: Here the variables are associated with units: is measured in milligrams while is measured in hours. Hence, is measured in milligrams and is measured in hours. The average rate of change has units which can be written as .  Therefore, the average rate of change of between and is The rate is negative as the amount of nicotine decreased between and . For the interpretation, we would say that on the interval , nicotine leaves the body at the average rate of milligrams per hour.    We need values and , which are obtained from the graph: and . Hence,   On the interval , nicotine leaves the body at the average rate of milligrams per hour.         A population of a small village at time , measured in years since the year 2010, is given by . Here are the annual readings:      (years)               (people)                   Find the change in the population between and . What are the units of ?    Find the average rate of change in the population between and . What are the units of this rate of change?          The change in between and , , tells us by how much the population changed from and : The population increased by people from to (from 2012 to 2016).    The average rate of change tells us how fast the population was changing between and and is measured in people\/year:          A ball is dropped from the rooftop of a building 150 feet tall. The height of the ball above the ground, , in feet, seconds after the ball is dropped is:    Find the average rate of change of between and .    When will the ball hit the ground?          We use the definition of the average rate of change:   This can also be thought of as the average velocity of the ball between and . The velocity is negative because the height is decreasing.    The ball hits the ground when it falls to a height of feet, so we solve the equation for :   Mathematically, we get two solutions: and . However, only one makes sense in the applied context for our problem. As is the number of seconds after the ball is dropped, a negative answer does not make sense the ball can't hit the ground before it was dropped! Hence, the ball hits the ground seconds after it is dropped.          Find the average rate of change of each function over the indicated interval. Give your answers to two decimal places.      between and .            between and .            between and .            between and .            between and .            In , data about the world population, in billions, between the years 2010 and 2018, was given in the table shown below. Use the data to answer the following questions.    Year             Population                What was the average rate of change of the world population between 2010 and 2012? Between 2016 and 2018? Give your answers to four decimal places and include units with your answers.     billion people per year; billion people per year      Is there a one-year interval in the time period from 2010 to 2018 during which the average rate of change of the population was negative?    No.       A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by      What is the average rate of change in height between and ? Between and ? Give units with your answers.     feet per second; feet per second      Are your answers in part (a) positive or negative? Explain why.    negative; the height of the ball is decreasing as time progresses (as it was dropped)       In , the graph of a function (provided again below) was given.   A short description.    Recall that this graph that models the amount of caffeine, in milligrams, remaining in the body hours after drinking a cup of coffee. Use the graph to do the following.     Estimate the average rate of change of between and . Give units with your answer.     mg\/hr      Estimate the average rate of change of between and . Give units with your answer.     mg\/hr      Compare the magnitudes of your answers in (a) and (b). Can you explain the difference by what you see on the graph?    The average rate of change from to hours is larger than the average rate of change from to hours. It can be seen that the rate at which the amount of caffeine in the bloodstream is changing gets smaller and smaller as time progresses.       The graph of a function is shown below.   A short description.    Without performing any calculations, answer the following questions.     Is the average rate of change of between and positive or negative? Explain your answer.    positive since the graph is increasing on this interval      Is the average rate of change of between and positive or negative? Explain your answer.    negative since the graph is decreasing on this interval       A person's weight, , in pounds, depends on the number of minutes of daily exercise. Hence, is a function of . Below is a numerical representation of :    (minutes)           (pounds)              Find the average rate of change of between and . Give units with your answer.     pounds\/minute      Find the average rate of change of between and . Give units with your answer.     pounds\/minute      Based on your answers and the data in the table, what can you say about the rate of weight loss with increasing amount of exercise?    The rate of weight loss slows as the daily amount of exercise increases.       Worldwide sales of passenger cars fluctuated between 2010 and 2019, as can be seen in the table below.     Year              Cars Sold (millions)                 Calculate the average rate of change in sales of passenger cars between the years 2010 and 2017. Give units with your answer.    approximately 2.124 million cars sold per year      Calculate the average rate of change in sales of passenger cars between the years 2017 and 2019. Give units with your answer.     million cars sold per year      In what one-year intervals was the average rate of change negative?    from 2017 to 2018 and from 2018 to 2019      "
},
{
  "id": "sec_1_5-2",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Explain why the average, rather than instantaneous, rate of change is used to describe how a quantity changes over an interval.    Compute the average rate of change of a function between two input values using the formula , given a function algebraically, graphically, or numerically.    Determine and interpret the appropriate units and practical meaning of an average rate of change in an applied context.    "
},
{
  "id": "fig-ch1-studying",
  "level": "2",
  "url": "sec_1_5.html#fig-ch1-studying",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "    A short description.     A short description.     "
},
{
  "id": "sec_1_5-15",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-15",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Average Rate of Change.",
  "body": " Average Rate of Change  average rate of change   Let be a function of , . Let and be given. The average rate of change of between and is given by    "
},
{
  "id": "fig_1_5_arc_graph",
  "level": "2",
  "url": "sec_1_5.html#fig_1_5_arc_graph",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": "   "
},
{
  "id": "sec_1_5-19",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-19",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Let . Find the average rate of change of between and .    We use the definition of the average rate of change with , and : Therefore, the average rate of change of between and is .   "
},
{
  "id": "sec_1_5-22",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-22",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is shown below.   A short description.    Use the graph to find and interpret the average rate of change of between:  and ;  and .  Include units with your answers.       To find the average rate of change between and , we use the graph to find the values of the function at and at . At , we have milligrams. At , milligrams. Thus: Here the variables are associated with units: is measured in milligrams while is measured in hours. Hence, is measured in milligrams and is measured in hours. The average rate of change has units which can be written as .  Therefore, the average rate of change of between and is The rate is negative as the amount of nicotine decreased between and . For the interpretation, we would say that on the interval , nicotine leaves the body at the average rate of milligrams per hour.    We need values and , which are obtained from the graph: and . Hence,   On the interval , nicotine leaves the body at the average rate of milligrams per hour.      "
},
{
  "id": "sec_1_5-23",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-23",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  A population of a small village at time , measured in years since the year 2010, is given by . Here are the annual readings:      (years)               (people)                   Find the change in the population between and . What are the units of ?    Find the average rate of change in the population between and . What are the units of this rate of change?          The change in between and , , tells us by how much the population changed from and : The population increased by people from to (from 2012 to 2016).    The average rate of change tells us how fast the population was changing between and and is measured in people\/year:       "
},
{
  "id": "sec_1_5-24",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-24",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  A ball is dropped from the rooftop of a building 150 feet tall. The height of the ball above the ground, , in feet, seconds after the ball is dropped is:    Find the average rate of change of between and .    When will the ball hit the ground?          We use the definition of the average rate of change:   This can also be thought of as the average velocity of the ball between and . The velocity is negative because the height is decreasing.    The ball hits the ground when it falls to a height of feet, so we solve the equation for :   Mathematically, we get two solutions: and . However, only one makes sense in the applied context for our problem. As is the number of seconds after the ball is dropped, a negative answer does not make sense the ball can't hit the ground before it was dropped! Hence, the ball hits the ground seconds after it is dropped.      "
},
{
  "id": "exercise_1_5_1",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Find the average rate of change of each function over the indicated interval. Give your answers to two decimal places.      between and .            between and .            between and .            between and .            between and .         "
},
{
  "id": "exercise_1_5_2",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  In , data about the world population, in billions, between the years 2010 and 2018, was given in the table shown below. Use the data to answer the following questions.    Year             Population                What was the average rate of change of the world population between 2010 and 2012? Between 2016 and 2018? Give your answers to four decimal places and include units with your answers.     billion people per year; billion people per year      Is there a one-year interval in the time period from 2010 to 2018 during which the average rate of change of the population was negative?    No.    "
},
{
  "id": "exercise_1_5_3",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_3",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by      What is the average rate of change in height between and ? Between and ? Give units with your answers.     feet per second; feet per second      Are your answers in part (a) positive or negative? Explain why.    negative; the height of the ball is decreasing as time progresses (as it was dropped)    "
},
{
  "id": "exercise_1_5_4",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  In , the graph of a function (provided again below) was given.   A short description.    Recall that this graph that models the amount of caffeine, in milligrams, remaining in the body hours after drinking a cup of coffee. Use the graph to do the following.     Estimate the average rate of change of between and . Give units with your answer.     mg\/hr      Estimate the average rate of change of between and . Give units with your answer.     mg\/hr      Compare the magnitudes of your answers in (a) and (b). Can you explain the difference by what you see on the graph?    The average rate of change from to hours is larger than the average rate of change from to hours. It can be seen that the rate at which the amount of caffeine in the bloodstream is changing gets smaller and smaller as time progresses.    "
},
{
  "id": "exercise_1_5_5",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_5",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  The graph of a function is shown below.   A short description.    Without performing any calculations, answer the following questions.     Is the average rate of change of between and positive or negative? Explain your answer.    positive since the graph is increasing on this interval      Is the average rate of change of between and positive or negative? Explain your answer.    negative since the graph is decreasing on this interval    "
},
{
  "id": "exercise_1_5_6",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  A person's weight, , in pounds, depends on the number of minutes of daily exercise. Hence, is a function of . Below is a numerical representation of :    (minutes)           (pounds)              Find the average rate of change of between and . Give units with your answer.     pounds\/minute      Find the average rate of change of between and . Give units with your answer.     pounds\/minute      Based on your answers and the data in the table, what can you say about the rate of weight loss with increasing amount of exercise?    The rate of weight loss slows as the daily amount of exercise increases.    "
},
{
  "id": "exercise_1_5_7",
  "level": "2",
  "url": "sec_1_5.html#exercise_1_5_7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Worldwide sales of passenger cars fluctuated between 2010 and 2019, as can be seen in the table below.     Year              Cars Sold (millions)                 Calculate the average rate of change in sales of passenger cars between the years 2010 and 2017. Give units with your answer.    approximately 2.124 million cars sold per year      Calculate the average rate of change in sales of passenger cars between the years 2017 and 2019. Give units with your answer.     million cars sold per year      In what one-year intervals was the average rate of change negative?    from 2017 to 2018 and from 2018 to 2019    "
},
{
  "id": "sec_2_1",
  "level": "1",
  "url": "sec_2_1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Properties of Linear Functions",
  "body": " Properties of Linear Functions    After completing this section, you should be able to do the following.     Identify the slope and vertical intercept of a linear function from its formula, table of values, or graph, and interpret them in practical terms as a constant rate of change and an initial value.    Use the slope formula to compute the slope of a line through two given points and use it, together with a point, to find the equation of a linear function.    Graph a linear function given its equation and recognize constant functions and horizontal lines as having slope and vertical lines as having undefined slope and not representing functions.       Linear Function  function linear   A function is called a linear function if it can be written in the form where and are constants. The constant is called the slope of the function . The constant is the initial value of ; it is also the vertical intercept of the function as .    A linear function written in the form or is said to be in slope-intercept form .   Another form of linear functions will be presented in the next section.     Practical Interpretation of the Slope and Vertical Intercept  Applied examples of linear functions will help us understand the practical meaning of the slope and the initial value . In such examples, the input and output variables will often be denoted by letters that correspond to their practical meaning rather than by and .    Maya is saving money to purchase a car. She initially has in savings and for each hour she works at her summer job she is able to put an additional into savings. Find a formula for the function that gives the total amount of money, , that Maya has in savings after working hours.    We begin with a table of values reflecting the total amount of money Maya will have in savings after working a certain number of hours.      If Maya works  Maya's savings will be    0 hours     1 hour     2 hours     3 hours          Recognizing the pattern unfolding, a formula for the amount of money that Maya has in savings as a function of the number of hours that she works is .    The function found in the solution to is a linear function with slope and vertical intercept . Mathematically, the domain of the function consists of all inputs , but in the applied context of the function, it is not possible for Maya to work a negative number of hours. For this reason, we must restrict the domain to .  Observe that, as in most applied examples, the input and output variables have units: is measured in hours worked while is measured in dollars. Likewise, both constants and have units and a practical meaning:      dollars is the initial value of at ; that is, the amount of money that Maya has in savings initially.    The slope indicates that Maya saves per each hour worked. Hence, the slope is measured in dollars per hour and gives the rate at which Maya's savings grow as the number of hours she works increases.     We can additionally observe that the average rate of change between any two distinct inputs for the function is always the same. The below calculations illustrate this.   Recall that average rate of change of a function between and is given by .      Maya's savings grow at a constant rate with respect to the hours that she works, and that constant rate of 5 dollars\/hour is the same as the slope of the linear function In general, for linear functions and only for linear functions the rate of change of the dependent variable with respect to the independent variable is constant and equal to the slope.   Slope as Rate of Change   For every linear function , the rate of change of with respect to is constant and equal to , with units Further, represents the initial value of the function, , and is measured in units of .    The constancy of the rate of change of a linear function can be proven using algebraic properties of linear functions. Take two distinct inputs , and the corresponding outputs , . The average rate of change of between and is given by:       The number of people residing in the town of Linesville years after 2010 is given by the linear function Identify the slope and the initial value of the function. Include units and explain their practical meaning.    From the formula for , we see that the slope of the function is and the initial value is .  The slope is measured in people\/year. In practical terms, the slope tells us that the population of Linesville increases at a constant rate of people per year.  The initial value is measured in number of people. It represents the initial number of residents in the town of Linesville, i.e., the number of residents at . As time corresponds to the year 2010, this means that the population of Linesville was 4500 people in 2010.      A container holding 50 gallons of water has sprung a leak. Water is leaking out at a rate of gallons\/hour. Let be the amount of water in the container, in gallons, hours after the leak began. Find a formula for the function .    Water is leaking out at a constant rate so is a linear function. Hence .  The amount of water in the container is decreasing at a rate 5 gallons\/hour. This means that the rate of change or slope of is gallons\/hour. That is, .  The initial amount of water is gallons, so . The formula for is:       Graphs of Linear Functions  We will next explore the graphs of linear functions.    In , Maya's savings , in dollars, as a function of the number of hours, , was given by Use to create a graph of the function .     contains the points , , , and . By plotting these points, we obtain the following graph. It is clear that the points lie along a straight line.   A short description.       Graph of a Linear Function   The graph of a linear function is a straight line with slope and vertical intercept . The equation of the line in the slope-intercept form is .     If the slope , the function is increasing and its graph is climbing as increases.    If the slope , the function is decreasing and its graph is falling as increases.    If the slope , the function is the constant function , and its graph is the horizontal line .       In the following figure, we can see how the slope and vertical intercept change the graph of the function.        Consider the function from , which gives the amount of water in a container, , in gallons, hours after the container sprang a leak: Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?    The slope is negative, and thus the graph is decreasing: for each 1 hour increase in , decreases by . The vertical intercept is gallons. Using this information, we construct the following graph.   A short description.    The practical significance of vertical and horizontal intercepts is apparent from the graph. The vertical intercept, , gives the initial amount of water in the container. The horizontal intercept, , is the number of hours that must pass for the tank to empty completely. Based upon this, the domain of should be restricted to in order for the formula to make sense in the applied context of this exercise.      The Slope Formula  We are often given multiple points on the graph of a linear function but not provided the formula for the function nor explicitly told its slope. In this case, we have enough information to determine both the slope and the slope-intercept form of the function.  Given two distinct points and on the graph of a linear function , the average rate of change of between and is given by Since the average rate of change between any two points on a linear function is its slope (see ), the above is the value of .   Slope Formula  slope formula   The slope of a linear function whose graph passes through two distinct points and is:     Graphically, the slope formula is often thought of as rise over run. The rise is what we denote by or ; it is the change in -values from the ordered pair to the ordered pair . The run is what we denote by or ; it is the change in the corresponding -values. This is illustrated below.   A short description.      Find the slope of the line passing through each set of points.      and      and      and .          If and then the slope is     If and then the slope is    Because the slope is , the line through the points is horizontal . This will be explained in further detail later on in this section.     If and then the slope is   Here, find a common denominator to simplify and .             Find a linear function such that and .    The two associated points on the graph of the function are Using the slope formula, we find that So, . The value of is not immediately apparent as we were not given the value of the function at . However, we can solve for it by using either one of the function values provided. For instance, we can use the fact that to set up an equation for . Substituting into results in Adding to both sides allows us to conclude that . Therefore, .      Identify the slope and vertical intercept of each line. Then write the equation of the line in slope-intercept form.    A short description.     A short description.          The first line intersects the -axis at the point , so the vertical intercept is . To calculate the slope, find two points on the graph and use the slope formula. We'll use and . Then The equation of the line is . The corresponding linear function is .    For the second line, note that the variable is being used instead of . We must again find two points on the line to substitute into the slope formula. We'll use and to find that Since the vertical intercept is , the equation of the line is . The corresponding linear function is .         Constant Functions, Horizontal and Vertical Lines  In , we encountered a linear function with slope 0 but did not go into great detail about what this means. To further explore the concept, consider the linear function The formula for this function can be rewritten as . The slope of this function is 0 and the -intercept is 3. We can see that for every , the value of the function is the same; that is, for all . We say that the function is constant because it is constantly equal to 3. Using the rate of change interpretation of the slope of a linear function, it is unsurprising that the function is constant — the rate of change or slope of the function being implies that the function doesn't change.  The graph of the function consists of all points on the plane for which , resulting in a horizontal line through the -value 3 as depicted below.   A short description.     Constant Functions and Horizontal Lines  function constant   The linear function with slope and vertical intercept is a constant function with equation given by and its graph is the horizontal line through the -value .    Having established that horizontal lines in the plane are graphs of constant functions, it is natural to wonder if vertical lines in the plane are also associated with a special type of linear function.  Vertical lines lines parallel to the -axis are not graphs of functions. A vertical line consists of all points for which the -coordinate is constant. Take for example the line which is graphed below.   A short description.     A key takeaway here is that vertical lines are not functions, but still have equations , such as . Equations are not the same thing as functions.   This line is not the graph of any function as for the single input there is more than one output infinitely many outputs, in fact. You can reach the same conclusion by using the Vertical Line Test. There exists a vertical line (the line itself) that crosses the graph of more than once (everywhere, actually). Therefore the graph of is not a function.  We conclude that vertical lines are not graphs of functions. Furthermore, slopes of vertical lines are undefined. Why? Take two points on the line , say and . The slope formula gives: which is undefined due to division by .   Vertical Lines  vertical lines   The vertical line with horizontal intercept has equation given by and its slope is undefined.     This is to say: all linear functions are lines, but not all lines are linear functions.   In summary, the graph of every linear function is a line in the -plane while every non-vertical line has an equation of the form and thus is the graph of a linear function. However, not every line in the plane is the graph of a linear function, since vertical lines are not functions. Sometimes people talk about linear functions and lines in the plane interchangeably. Despite the duality between lines and linear functions, it is important to remember that a linear function is a special dependence between two numerical variables that can be visually represented by a line. The converse is not necessarily true.     Slope-Intercept Form   For each of the following, rewrite the linear function in slope-intercept form. Then identify the slope and vertical intercept.           ; slope: ; vertical intercept:             ; slope: ; vertical intercept:             ; slope: ; vertical intercept:             ; slope: ; vertical intercept:       Computing the Slope   For each of the following, find the slope of the line passing through each pair of points.      and             and             and             and             and             and            Finding the Slope   For each of the following, find the slope of the linear function corresponding to the information provided.      and             and             and             and             Identify the slope and vertical intercept of each line. Then write an equation of the line.       A short description.        A short description.          A short description.        A short description.          : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation       Five linear functions are given below. Drag each function on the left to the corresponding line number on the right.   A short description.          Line 1       Line 2       Line 3       Line 4       Line 5     Line 1 is ; Line 2 is ; Line 3 is ; Line 4 is ; Line 5 is .      During the 2019-2020 academic year, a senior lecturer at URI earned a base salary of for a standard teaching load. For each credit taught in excess of the standard load, were added to his salary. Write a linear equation expressing the total amount that the senior lecturer earned for teaching credits in excess of the standard workload during the 2019-2020 academic year.           The elevation in feet, , of a hiker minutes after beginning her hike is given by .     Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The initial elevation of the hiker is 1350 feet.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The hiker's elevation is increasing at a rate of 35 feet per minute.       The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by .     Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The bicyclist's initial distance from the finish line is 50 miles.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The bicyclist's distance from the finish line is decreasing at a rate of 25 miles per hour.      "
},
{
  "id": "sec_2_1-2",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify the slope and vertical intercept of a linear function from its formula, table of values, or graph, and interpret them in practical terms as a constant rate of change and an initial value.    Use the slope formula to compute the slope of a line through two given points and use it, together with a point, to find the equation of a linear function.    Graph a linear function given its equation and recognize constant functions and horizontal lines as having slope and vertical lines as having undefined slope and not representing functions.    "
},
{
  "id": "sec_2_1-3-1",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-3-1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Linear Function.",
  "body": " Linear Function  function linear   A function is called a linear function if it can be written in the form where and are constants. The constant is called the slope of the function . The constant is the initial value of ; it is also the vertical intercept of the function as .   "
},
{
  "id": "example-ch2-maya-car",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-maya-car",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Maya is saving money to purchase a car. She initially has in savings and for each hour she works at her summer job she is able to put an additional into savings. Find a formula for the function that gives the total amount of money, , that Maya has in savings after working hours.    We begin with a table of values reflecting the total amount of money Maya will have in savings after working a certain number of hours.      If Maya works  Maya's savings will be    0 hours     1 hour     2 hours     3 hours          Recognizing the pattern unfolding, a formula for the amount of money that Maya has in savings as a function of the number of hours that she works is .   "
},
{
  "id": "res-ch2-slope-roc",
  "level": "2",
  "url": "sec_2_1.html#res-ch2-slope-roc",
  "type": "Result",
  "number": "2.1.4",
  "title": "Slope as Rate of Change.",
  "body": " Slope as Rate of Change   For every linear function , the rate of change of with respect to is constant and equal to , with units Further, represents the initial value of the function, , and is measured in units of .   "
},
{
  "id": "sec_2_1-4-14",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-4-14",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The number of people residing in the town of Linesville years after 2010 is given by the linear function Identify the slope and the initial value of the function. Include units and explain their practical meaning.    From the formula for , we see that the slope of the function is and the initial value is .  The slope is measured in people\/year. In practical terms, the slope tells us that the population of Linesville increases at a constant rate of people per year.  The initial value is measured in number of people. It represents the initial number of residents in the town of Linesville, i.e., the number of residents at . As time corresponds to the year 2010, this means that the population of Linesville was 4500 people in 2010.   "
},
{
  "id": "example-ch2-water-leak",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-water-leak",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  A container holding 50 gallons of water has sprung a leak. Water is leaking out at a rate of gallons\/hour. Let be the amount of water in the container, in gallons, hours after the leak began. Find a formula for the function .    Water is leaking out at a constant rate so is a linear function. Hence .  The amount of water in the container is decreasing at a rate 5 gallons\/hour. This means that the rate of change or slope of is gallons\/hour. That is, .  The initial amount of water is gallons, so . The formula for is:    "
},
{
  "id": "sec_2_1-5-3",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  In , Maya's savings , in dollars, as a function of the number of hours, , was given by Use to create a graph of the function .     contains the points , , , and . By plotting these points, we obtain the following graph. It is clear that the points lie along a straight line.   A short description.     "
},
{
  "id": "sec_2_1-5-4",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-4",
  "type": "Result",
  "number": "2.1.8",
  "title": "Graph of a Linear Function.",
  "body": " Graph of a Linear Function   The graph of a linear function is a straight line with slope and vertical intercept . The equation of the line in the slope-intercept form is .     If the slope , the function is increasing and its graph is climbing as increases.    If the slope , the function is decreasing and its graph is falling as increases.    If the slope , the function is the constant function , and its graph is the horizontal line .      "
},
{
  "id": "fig_2_1_linear_graph",
  "level": "2",
  "url": "sec_2_1.html#fig_2_1_linear_graph",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "   "
},
{
  "id": "sec_2_1-5-7",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-7",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Consider the function from , which gives the amount of water in a container, , in gallons, hours after the container sprang a leak: Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?    The slope is negative, and thus the graph is decreasing: for each 1 hour increase in , decreases by . The vertical intercept is gallons. Using this information, we construct the following graph.   A short description.    The practical significance of vertical and horizontal intercepts is apparent from the graph. The vertical intercept, , gives the initial amount of water in the container. The horizontal intercept, , is the number of hours that must pass for the tank to empty completely. Based upon this, the domain of should be restricted to in order for the formula to make sense in the applied context of this exercise.   "
},
{
  "id": "sec_2_1-6-4",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-4",
  "type": "Result",
  "number": "2.1.11",
  "title": "Slope Formula.",
  "body": " Slope Formula  slope formula   The slope of a linear function whose graph passes through two distinct points and is:    "
},
{
  "id": "example-ch2-slope0",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-slope0",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "  Find the slope of the line passing through each set of points.      and      and      and .          If and then the slope is     If and then the slope is    Because the slope is , the line through the points is horizontal . This will be explained in further detail later on in this section.     If and then the slope is   Here, find a common denominator to simplify and .          "
},
{
  "id": "sec_2_1-6-8",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-8",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": "  Find a linear function such that and .    The two associated points on the graph of the function are Using the slope formula, we find that So, . The value of is not immediately apparent as we were not given the value of the function at . However, we can solve for it by using either one of the function values provided. For instance, we can use the fact that to set up an equation for . Substituting into results in Adding to both sides allows us to conclude that . Therefore, .   "
},
{
  "id": "sec_2_1-6-9",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-9",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "  Identify the slope and vertical intercept of each line. Then write the equation of the line in slope-intercept form.    A short description.     A short description.          The first line intersects the -axis at the point , so the vertical intercept is . To calculate the slope, find two points on the graph and use the slope formula. We'll use and . Then The equation of the line is . The corresponding linear function is .    For the second line, note that the variable is being used instead of . We must again find two points on the line to substitute into the slope formula. We'll use and to find that Since the vertical intercept is , the equation of the line is . The corresponding linear function is .      "
},
{
  "id": "sec_2_1-7-5",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-7-5",
  "type": "Result",
  "number": "2.1.15",
  "title": "Constant Functions and Horizontal Lines.",
  "body": " Constant Functions and Horizontal Lines  function constant   The linear function with slope and vertical intercept is a constant function with equation given by and its graph is the horizontal line through the -value .   "
},
{
  "id": "sec_2_1-7-12",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-7-12",
  "type": "Result",
  "number": "2.1.16",
  "title": "Vertical Lines.",
  "body": " Vertical Lines  vertical lines   The vertical line with horizontal intercept has equation given by and its slope is undefined.   "
},
{
  "id": "exercise_2_1_1",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "exercise_2_1_2",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "exercise_2_1_3",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "exercise_2_1_4",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "exercise_2_1_5",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_6",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_7",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_8",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_9",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_10",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_11",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_12",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_13",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_14",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_1_15",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Identify the slope and vertical intercept of each line. Then write an equation of the line.       A short description.        A short description.          A short description.        A short description.          : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation    : slope ; vertical intercept ; equation    "
},
{
  "id": "exercise_2_1_16",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Five linear functions are given below. Drag each function on the left to the corresponding line number on the right.   A short description.          Line 1       Line 2       Line 3       Line 4       Line 5     Line 1 is ; Line 2 is ; Line 3 is ; Line 4 is ; Line 5 is .   "
},
{
  "id": "exercise_2_1_17",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  During the 2019-2020 academic year, a senior lecturer at URI earned a base salary of for a standard teaching load. For each credit taught in excess of the standard load, were added to his salary. Write a linear equation expressing the total amount that the senior lecturer earned for teaching credits in excess of the standard workload during the 2019-2020 academic year.        "
},
{
  "id": "exercise_2_1_18",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The elevation in feet, , of a hiker minutes after beginning her hike is given by .     Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The initial elevation of the hiker is 1350 feet.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The hiker's elevation is increasing at a rate of 35 feet per minute.    "
},
{
  "id": "exercise_2_1_19",
  "level": "2",
  "url": "sec_2_1.html#exercise_2_1_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by .     Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The bicyclist's initial distance from the finish line is 50 miles.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The bicyclist's distance from the finish line is decreasing at a rate of 25 miles per hour.    "
},
{
  "id": "sec_2_2",
  "level": "1",
  "url": "sec_2_2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Working with Linear Functions and Linear Equations",
  "body": " Working with Linear Functions and Linear Equations    After completing this section, you should be able to do the following.     Write the equation of a linear function in point-slope form and convert the result to slope-intercept form.    Set up and solve a linear equation in one variable, including in applied contexts, to find inputs or outputs of a linear model such as an intercept or a value where two linear functions are equal.    Determine whether a linear equation in one variable has a single solution, no solution, or infinitely many solutions.      In the last section, we introduced the slope-intercept form of a linear function, which is often used when given the slope and vertical intercept . When given two points on the linear function, the point-slope form is frequently used instead.   Point-Slope Form  point-slope form      The point-slope form of the equation of a line with slope passing through is:     A linear function with slope for which can be written in the point-slope form as:      Note that means that the point is on the graph of the function .    The point-slope form is very useful for finding formulas for linear functions and equations of lines.    Find an equation in point-slope form for the line passing through each set of points. Then rewrite each equation in the slope-intercept form.      and      and      and        In each part, we follow the same steps. We first use the two given points to find the slope. Once we have obtained the value of the slope, we then designate one of the two points as and write an equation in the point-slope form. Finally, we rewrite the equation in the slope-intercept form.     Using the slope formula, we find that   We will next let and use point-slope form. An equation of the line is thus   To convert to slope-intercept form, we begin by expanding the right-hand side, which results in By subtracting from both sides, we obtain the slope-intercept form     The slope is If we take , an equation of the line in slope-intercept form is which simplifies to Adding 3 to both sides (which can be rewritten as to obtain a common denominator) results in the slope-intercept form     The slope is If we take , the resulting point-slope form of the line is which simplifies to the slope-intercept form    Note that is in the form with . This makes sense, as the line passes through the origin , meaning that the -intercept of the line is .          Let be a linear function such that and . Find a formula for the function in the slope-intercept form.    We are given the values of at two inputs, which tells us that the two points and are on the graph of the function. Using these to calculate the slope we find that Recall that the point-slope form for a linear function can alternatively be written as If we take we find that The formula simplifies to the slope-intercept form       Linear Functions and Linear Equations  When working with linear functions, we frequently find ourselves needing to set the formula for the linear function equal to a specific quantity and then to solve the resulting equation. For instance, when tasked with finding the horizontal intercept of the linear function , we would set and solve for . The resulting equation is an illustration of a linear equation in one variable.    Linear Equation in One Variable  linear equations   An equation that can be written in the form where , , and are real numbers with and is the variable is called a linear equation in one variable .    We will explore how such linear equations arise in applications of linear functions and review how to solve them in the examples below.    Mr. Bell is driving through Nevada to Reno at a constant speed of mph. Let be his distance from Reno, in miles, hours after he began driving and suppose that Mr. Bell checks his GPS at to find that his distance from Reno is miles.     Find a formula for the function .    How far from Reno was Mr. Bell when he began driving?    How long from the moment he began driving will it take him to reach Reno?          At first, it may seem that we don't have enough information to find a formula for as we only know the value of the function at a single point: =150. However, we also know that Mr. Bell is driving at the constant speed of 40 mph. In the applied context of this example, this tells us that his distance from Reno is decreasing at the constant rate of 40 mph. A decreasing function has a negative rate of change, so we could say that is changing at the constant rate of mph. Furthermore, since the rate of change of is constant, the function is linear and its slope is the constant rate of change; that is, . With both the slope and the point , we can write the point-slope form for : This can be simplified to slope-intercept form:   or, equivalently, be written as     Mr. Bell began driving at when, according to the formula, his distance from Reno was miles.    Mr. Bell will reach Reno when his distance from Reno is 0 miles; that is, at the value of such that To find such we must solve the equation To solve our equation, we apply the standard methods of algebra, which in that case will involve subtracting from both sides of the equation and then dividing both sides by .     It takes Mr. Bell hours total to reach Reno. Alternatively, we could translate hours into hours and minutes.       Observe that to answer parts (b) and (c) of , we had to find the intercepts of the function . In applied problems, intercepts have an important practical meaning. Here is a graph of the function that serves as a visual illustration of the meaning of the intercepts that we found:   A short description.      During the first ten days after hatching, a chick gains weight at the rate of grams\/day. Let be the weight of the chick days after hatching and suppose that three days after hatching the chick weighs grams.     Find a formula for the function .    What was the weight of the chick when it hatched?    How many days after it hatched will the chick weigh grams?          The function changes at a constant rate so it is linear. As the slope is equal to the constant rate of change, . We are also given the value of the function at : . Hence, the point is on the graph of the function . Using the point-slope form of a linear function we find: In slope-intercept form,     The chick hatched when . Therefore, the weight of the chick when it hatched was     The weight of the chick will reach grams for the value of that satisfies the equation . That is, for satisfying the equation To solve for , subtract from both sides and then divide both sides by      It will take approximately days for the chick to reach the weight of grams.         Twin towns are municipalities in different countries that are paired to encourage human contact and cultural links. The populations of two twin towns one in the Netherlands and one in France are and , respectively, where is the number of years since a twin partnership was established.  Both populations grow linearly according to the formulas:      Which town had a larger population when a twin partnership was initially established?    Which town has a faster growing population? At what rate does it grow?    Will the two populations ever be equal? If yes, when?          The initial population of the Dutch town is people, of the French town . Initially, the population of the Dutch town was larger.    It is the slope of each function that gives its rate of increase. The population of the Dutch town grows at the rate of people\/year while the population of the French town grows faster at the rate of people\/year.    The population of the French town is initially lower than the population of the Dutch town. However, as the populations of both towns grow, the population of the French town grows faster and therefore will at some point surpass the population of the Dutch town. This can be seen clearly when we graph both functions.   A short description.    The population of the French town overtakes the population of the Dutch town where the graphs of and cross. This appears to occur between years 8 and 9. As we have the formulas for both and , we can be more precise than this.  The populations of the two towns are equal when . That is, for the value of satisfying the equation This is a linear equation in the variable . To solve it, we begin by moving all constant terms to one side of the equation and all the terms containing to the other.     Dividing both sides by , we find that years after establishing a twin partnership, the populations of both towns are equal.         The value of a car, in dollars, years after the car was purchased is given by      Find the vertical intercept and the horizontal intercept of the function and explain their meaning in practical terms.    Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?          The vertical intercept is the value of the function at : In practical terms, it is the purchase value of the car.  For the horizontal intercept, we must find the value of for which . That is, we must solve the linear equation :   We find that the horizontal intercept is . In practical terms, the horizontal intercept tells us that the car will have no value 12 years after it was purchased.    The graph of the function , with intercepts clearly visible, is provided below.   A short description.    While the line extends forever in both directions and has a domain of all real numbers, the domain of the function should be limited to for practical reasons. This is because the formula begins to model the applied scenario when the car was purchased at time and ceases to model the applied scenario after 12 years have passed (it does not make sense for the value of the car to be negative).         Number of Solutions to a Linear Equation in One Variable  You may have noticed that each individual linear equation that we set up and solved in the preceding examples resulted in a single solution. It is, however, possible for a linear equation in one variable to result in no solution or an infinite number of solutions. Although you will rarely encounter either of these scenarios when working with linear functions modeling real-life situations, it is important to be familiar with the possibility.    Solve each linear equation, if possible.                          To solve, we begin by expanding the left-hand side:     You may observe that both sides of the equation are identical. Because of this, the equation is true for all values of and hence has an infinite number of solutions .    To solve, we move all terms involving to one side of the equation and all constants to the other:     Dividing both sides by results in the single solution  .    To solve, we move all terms involving to one side of the equation:     We end up with a statement that is never true; is not the same value as . The equation has no solution .          Slope-Intercept Form   For each of the following, write the equation of the line satisfying the given set of conditions in slope-intercept form.     passing through and            passing through and            with slope passing through            with slope passing through            with slope passing through            passing through and            passing through and            with slope and passing through            Slope-Intercept Form   For each of the following, write the formula in slope-intercept form for the linear function satisfying the given set of conditions.      and             and             has slope and its graph passes through             has slope and its graph passes through            the graph of passes through and            the slope of is and its horizontal intercept is            the slope of is and its vertical intercept is            the vertical intercept of is and its horizontal intercept is             Which of the following lines is NOT the graph of a linear function?                             The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by      Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The vertical intercept is the distance in miles that the biker is from the finish line at the start of the race.      Write a complete sentence explaining the practical meaning of the horizontal intercept of this linear function. Include units in your answer.    The horizontal intercept is the number of hours that it takes the biker to complete the race.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The slope indicates that the distance between the biker and the finish line is decreasing at a rate of miles per hour.       The value of an antique lamp, , in dollars, years after its purchase is given by      What was the purchase price of the lamp?           When will the value of the lamp reach ?    The lamp will have a value of dollars years after its purchase.       Two mobile phone companies sell an international roaming plan. Company A charges a dollar fixed monthly fee and per minute for talk. Company B charges a dollar fixed monthly fee and per minute for talk.     Write the linear functions and which give the monthly cost charged by Company A and Company B, respectively, with minutes spent talking on the phone.     ;       For what value of is the cost the same with either company?           Which company gives you a better deal if you plan to talk for hours?           Solving Linear Equations   Solve each linear equation. If there is no solution or infinitely many solutions, say so.                                  no solution           infinite number of solutions      "
},
{
  "id": "sec_2_2-2",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Write the equation of a linear function in point-slope form and convert the result to slope-intercept form.    Set up and solve a linear equation in one variable, including in applied contexts, to find inputs or outputs of a linear model such as an intercept or a value where two linear functions are equal.    Determine whether a linear equation in one variable has a single solution, no solution, or infinitely many solutions.    "
},
{
  "id": "sec_2_2-3-2",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-2",
  "type": "Result",
  "number": "2.2.1",
  "title": "Point-Slope Form.",
  "body": " Point-Slope Form  point-slope form      The point-slope form of the equation of a line with slope passing through is:     A linear function with slope for which can be written in the point-slope form as:      Note that means that the point is on the graph of the function .   "
},
{
  "id": "sec_2_2-3-4",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Find an equation in point-slope form for the line passing through each set of points. Then rewrite each equation in the slope-intercept form.      and      and      and        In each part, we follow the same steps. We first use the two given points to find the slope. Once we have obtained the value of the slope, we then designate one of the two points as and write an equation in the point-slope form. Finally, we rewrite the equation in the slope-intercept form.     Using the slope formula, we find that   We will next let and use point-slope form. An equation of the line is thus   To convert to slope-intercept form, we begin by expanding the right-hand side, which results in By subtracting from both sides, we obtain the slope-intercept form     The slope is If we take , an equation of the line in slope-intercept form is which simplifies to Adding 3 to both sides (which can be rewritten as to obtain a common denominator) results in the slope-intercept form     The slope is If we take , the resulting point-slope form of the line is which simplifies to the slope-intercept form    Note that is in the form with . This makes sense, as the line passes through the origin , meaning that the -intercept of the line is .       "
},
{
  "id": "sec_2_2-3-5",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Let be a linear function such that and . Find a formula for the function in the slope-intercept form.    We are given the values of at two inputs, which tells us that the two points and are on the graph of the function. Using these to calculate the slope we find that Recall that the point-slope form for a linear function can alternatively be written as If we take we find that The formula simplifies to the slope-intercept form    "
},
{
  "id": "sec_2_2-4-3",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-3",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Linear Equation in One Variable.",
  "body": " Linear Equation in One Variable  linear equations   An equation that can be written in the form where , , and are real numbers with and is the variable is called a linear equation in one variable .   "
},
{
  "id": "example-ch2-reno-drive",
  "level": "2",
  "url": "sec_2_2.html#example-ch2-reno-drive",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Mr. Bell is driving through Nevada to Reno at a constant speed of mph. Let be his distance from Reno, in miles, hours after he began driving and suppose that Mr. Bell checks his GPS at to find that his distance from Reno is miles.     Find a formula for the function .    How far from Reno was Mr. Bell when he began driving?    How long from the moment he began driving will it take him to reach Reno?          At first, it may seem that we don't have enough information to find a formula for as we only know the value of the function at a single point: =150. However, we also know that Mr. Bell is driving at the constant speed of 40 mph. In the applied context of this example, this tells us that his distance from Reno is decreasing at the constant rate of 40 mph. A decreasing function has a negative rate of change, so we could say that is changing at the constant rate of mph. Furthermore, since the rate of change of is constant, the function is linear and its slope is the constant rate of change; that is, . With both the slope and the point , we can write the point-slope form for : This can be simplified to slope-intercept form:   or, equivalently, be written as     Mr. Bell began driving at when, according to the formula, his distance from Reno was miles.    Mr. Bell will reach Reno when his distance from Reno is 0 miles; that is, at the value of such that To find such we must solve the equation To solve our equation, we apply the standard methods of algebra, which in that case will involve subtracting from both sides of the equation and then dividing both sides by .     It takes Mr. Bell hours total to reach Reno. Alternatively, we could translate hours into hours and minutes.      "
},
{
  "id": "sec_2_2-4-8",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-8",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  During the first ten days after hatching, a chick gains weight at the rate of grams\/day. Let be the weight of the chick days after hatching and suppose that three days after hatching the chick weighs grams.     Find a formula for the function .    What was the weight of the chick when it hatched?    How many days after it hatched will the chick weigh grams?          The function changes at a constant rate so it is linear. As the slope is equal to the constant rate of change, . We are also given the value of the function at : . Hence, the point is on the graph of the function . Using the point-slope form of a linear function we find: In slope-intercept form,     The chick hatched when . Therefore, the weight of the chick when it hatched was     The weight of the chick will reach grams for the value of that satisfies the equation . That is, for satisfying the equation To solve for , subtract from both sides and then divide both sides by      It will take approximately days for the chick to reach the weight of grams.      "
},
{
  "id": "sec_2_2-4-9",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-9",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  Twin towns are municipalities in different countries that are paired to encourage human contact and cultural links. The populations of two twin towns one in the Netherlands and one in France are and , respectively, where is the number of years since a twin partnership was established.  Both populations grow linearly according to the formulas:      Which town had a larger population when a twin partnership was initially established?    Which town has a faster growing population? At what rate does it grow?    Will the two populations ever be equal? If yes, when?          The initial population of the Dutch town is people, of the French town . Initially, the population of the Dutch town was larger.    It is the slope of each function that gives its rate of increase. The population of the Dutch town grows at the rate of people\/year while the population of the French town grows faster at the rate of people\/year.    The population of the French town is initially lower than the population of the Dutch town. However, as the populations of both towns grow, the population of the French town grows faster and therefore will at some point surpass the population of the Dutch town. This can be seen clearly when we graph both functions.   A short description.    The population of the French town overtakes the population of the Dutch town where the graphs of and cross. This appears to occur between years 8 and 9. As we have the formulas for both and , we can be more precise than this.  The populations of the two towns are equal when . That is, for the value of satisfying the equation This is a linear equation in the variable . To solve it, we begin by moving all constant terms to one side of the equation and all the terms containing to the other.     Dividing both sides by , we find that years after establishing a twin partnership, the populations of both towns are equal.      "
},
{
  "id": "sec_2_2-4-10",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-10",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": "  The value of a car, in dollars, years after the car was purchased is given by      Find the vertical intercept and the horizontal intercept of the function and explain their meaning in practical terms.    Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?          The vertical intercept is the value of the function at : In practical terms, it is the purchase value of the car.  For the horizontal intercept, we must find the value of for which . That is, we must solve the linear equation :   We find that the horizontal intercept is . In practical terms, the horizontal intercept tells us that the car will have no value 12 years after it was purchased.    The graph of the function , with intercepts clearly visible, is provided below.   A short description.    While the line extends forever in both directions and has a domain of all real numbers, the domain of the function should be limited to for practical reasons. This is because the formula begins to model the applied scenario when the car was purchased at time and ceases to model the applied scenario after 12 years have passed (it does not make sense for the value of the car to be negative).      "
},
{
  "id": "sec_2_2-5-3",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-5-3",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  Solve each linear equation, if possible.                          To solve, we begin by expanding the left-hand side:     You may observe that both sides of the equation are identical. Because of this, the equation is true for all values of and hence has an infinite number of solutions .    To solve, we move all terms involving to one side of the equation and all constants to the other:     Dividing both sides by results in the single solution  .    To solve, we move all terms involving to one side of the equation:     We end up with a statement that is never true; is not the same value as . The equation has no solution .      "
},
{
  "id": "exercise_2_2_1",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "exercise_2_2_2",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "exercise_2_2_3",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "exercise_2_2_4",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "exercise_2_2_5",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "exercise_2_2_6",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "exercise_2_2_7",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "exercise_2_2_8",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  with slope and passing through         "
},
{
  "id": "exercise_2_2_9",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_2_10",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_2_2_11",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   has slope and its graph passes through         "
},
{
  "id": "exercise_2_2_12",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   has slope and its graph passes through         "
},
{
  "id": "exercise_2_2_13",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  the graph of passes through and         "
},
{
  "id": "exercise_2_2_14",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  the slope of is and its horizontal intercept is         "
},
{
  "id": "exercise_2_2_15",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  the slope of is and its vertical intercept is         "
},
{
  "id": "exercise_2_2_16",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  the vertical intercept of is and its horizontal intercept is         "
},
{
  "id": "exercise_2_2_17",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Which of the following lines is NOT the graph of a linear function?                          "
},
{
  "id": "exercise_2_2_18",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by      Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.    The vertical intercept is the distance in miles that the biker is from the finish line at the start of the race.      Write a complete sentence explaining the practical meaning of the horizontal intercept of this linear function. Include units in your answer.    The horizontal intercept is the number of hours that it takes the biker to complete the race.      Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.    The slope indicates that the distance between the biker and the finish line is decreasing at a rate of miles per hour.    "
},
{
  "id": "exercise_2_2_19",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The value of an antique lamp, , in dollars, years after its purchase is given by      What was the purchase price of the lamp?           When will the value of the lamp reach ?    The lamp will have a value of dollars years after its purchase.    "
},
{
  "id": "exercise_2_2_20",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Two mobile phone companies sell an international roaming plan. Company A charges a dollar fixed monthly fee and per minute for talk. Company B charges a dollar fixed monthly fee and per minute for talk.     Write the linear functions and which give the monthly cost charged by Company A and Company B, respectively, with minutes spent talking on the phone.     ;       For what value of is the cost the same with either company?           Which company gives you a better deal if you plan to talk for hours?         "
},
{
  "id": "exercise_2_2_21",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_2_2_22",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_22",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_2_2_23",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_23",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "       no solution   "
},
{
  "id": "exercise_2_2_24",
  "level": "2",
  "url": "sec_2_2.html#exercise_2_2_24",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "       infinite number of solutions   "
},
{
  "id": "sec_2_3",
  "level": "1",
  "url": "sec_2_3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Modeling and Numerically Given Functions",
  "body": " Modeling and Numerically Given Functions    After completing this section, you should be able to do the following.     Determine whether a function given numerically by a table of values changes at a constant rate and is therefore appropriate to model with a linear function.    Find the slope and vertical intercept of a linear function matching a table of data, using a given output value or by solving for the intercept algebraically, and write the corresponding formula.    Apply linear modeling to numerically given data in applied contexts such as straight-line depreciation, interpreting the slope as a constant rate of change.     How do we recognize when it is appropriate for a function given numerically through a table of values to be modeled by a linear function? The key is to remember that a function is linear if it changes at a constant rate. We will explore how to determine whether or not a numerically given function changes at a constant rate in the following examples.    In her laboratory, a biologist is studying the growth of the larvae of a certain insect species during the last instar. Her team takes weight measurements of the larvae every 6 hours for 48 hours beginning with . Let denote the average larval weight, in grams, at time . Here are the measurements they record rounded off to two decimal places Data source: http:\/\/www.biology.arizona.edu\/biomath\/tutorials\/Linear\/LinearModels.html , accessed: 6\/12\/20 .    (hours)             (grams)             Is it appropriate for the growth of the larvae to be modeled by a linear function? If it is, find a formula that matches the data.    It would be appropriate to model by a linear function if it changes at a constant rate. A function changes at a constant rate if equal changes in the independent variable correspond to equal changes in the dependent variable.  From the table, we can see that the independent variable increases by the quantity as we move between consecutive inputs. Starting at , we must determine the corresponding change in each time increases by (or, equivalently, the difference between each pair of consecutive outputs in the table).      These calculations indicate that each time increases by , the function increases by .   Hence the function changes at a constant rate. Indeed, the average rate of change in on each of the -hour intervals is   Since it changes at a constant rate, it is appropriate to model by a linear function for some constants and . The vertical intercept is the value of the function at . We have that value in the table: The slope is the constant rate of change which we have just calculated, so grams\/hour. Hence is an appropriate mathematical model for the growth of the larvae.      Decide which of the following tables could represent a linear function. For each table that could represent a linear function, find a formula matching the data in the table.                                                                             The change in between any two consecutive inputs in the table is given by . The change in as increases by (or, equivalently, the change in between each pair of consecutive points in the table) can be calculated as follows:     We can see that each time increases by , changes by ; that is; decreases by .   Since changes in corresponding to equal changes in are all equal, the function is linear, so for some constants and . The slope is given by Hence   In , we could easily find the vertical intercept as we were given the value of the function at 0. The table for does not directly give us the value , so we will use another point given in the table to set up an equation and solve for . Taking the point from the table, we have that      The final formula for the linear function matching the table is      Consecutive values of in the table are equally spaced by . We must check if all the corresponding changes in are equal.   Here, we can see that each time increases by , the corresponding value of becomes larger and larger. That means that the function increases faster and faster by more and more at each next step so increases at an increasing rate unlike a linear function that increases or decreases at a constant rate.    Because the change in the output, , is not the same each time increases by , the function is not linear.     All changes in are equal between consecutive inputs in the table with . The corresponding changes in are also equal: at every step increases by , so . Hence, is a linear function. We find the slope to be We are given the value of at 0: . Hence, . The formula for is:          A company purchased a computer system for . The company accountant decided to depreciate the item over 5 years of its useful life for tax purposes. The depreciated value of the system, , in dollars, reported to the IRS years after the purchase (the so-called carrying value ) is given by:    (years after purchase)          (dollars)             What is the amount of depreciation over each of the five years?    What is an appropriate formula for the carrying value ?          We begin by calculating the change in depreciated value each year:     From the above, we conclude that the computer system depreciates by each of the five years.    Since equal changes of in correspond to equal changes in the depreciated value of the computer system, can be modeled by a linear function with formula:        The depreciation method used by the accountant in is called straight-line depreciation . The 5 years of useful life is prescribed by the IRS for each type of asset. Information about how the value at the end of the asset's useful life, called the salvage value , is prescribed can be found in accounting books.  In the straight-line depreciation method, the fixed annual depreciation amount is calculated by taking the difference between the purchase cost and the salvage value and dividing by the number of years of useful life of the asset. For the computer system from , this calculation results in   The computer system is depreciating by each year, so the slope of the associated line is . The graph of the depreciated value for is the straight line shown below.   A short description.       Decide if each table could represent a linear function and explain your reasoning. For each table that could represent a linear function, find a formula that matches the data given in the table.                       linear with equation                         linear with equation                           not linear                          not linear                        linear with equation        The table below shows for each temperature in degrees Fahrenheit the corresponding approximate temperature in degrees Celsius. Is it appropriate to model by a linear function of ? If it is, find a formula for as a function of .    (degrees Fahrenheit)        (degrees Celsius)          approximately linear with approximate equation       The height of a human individual can be estimated by the length of the femur, as shown for males in the following table.    (length of femur in cm)        (height of human male in cm)           Use the information in this table to find a possible formula for the height of a human male as a function of his femur length .           What would the approximate height of a human male with femur length 46 cm be?     cm      Fernando is 175.4 cm tall. What would you expect the approximate length of his femur to be?    approximately 47.36 cm       The weight of water above a scuba diver as well as the air above the diver exerts pressure on their bodies. The pressure the diver experiences at sea level is PSI (pounds per square inch), and this pressure increases by PSI per each foot of depth.     Write a linear equation expressing the pressure on a diver at a depth of feet below sea level.           The deepest a recreational scuba diver typically dives is feet. What is the pressure on a diver at this depth?     PSI       A hiker is at a trailhead about to climb a mountain. The temperature at the trailhead is F. According to the standard atmosphere model https:\/\/www.grc.nasa.gov\/WWW\/K-12\/airplane\/atmos.html , accessed: 6\/25\/20 the temperature drops by F per each 1 foot increase in altitude. Let be the temperature, in F, feet above the hiker.     Write a formula for the function .           Find the temperature at the mountaintop that is feet above the hiker.      F      Is the function increasing or decreasing?    The function is decreasing.       A man goes to a gym to exercise. After minutes on a treadmill, his pulse (heart rate), , in beats per minute, is:    (minutes)          (bpm)             Is it appropriate to model by a linear function? If yes, find a formula for .    Linear; formula       If the function can be modeled by a linear function, give units for the slope and the vertical intercept of . Then explain their meaning in practical terms.    The slope is bpm per minute; the practical meaning of the slope is that the man's bpm is increasing at a rate of bpm per minute. The vertical intercept is bpm; the practical meaning of the vertical intercept is that the man's resting heart rate (heart rate when performing no exercise on the treadmill) is bpm.      "
},
{
  "id": "sec_2_3-2",
  "level": "2",
  "url": "sec_2_3.html#sec_2_3-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine whether a function given numerically by a table of values changes at a constant rate and is therefore appropriate to model with a linear function.    Find the slope and vertical intercept of a linear function matching a table of data, using a given output value or by solving for the intercept algebraically, and write the corresponding formula.    Apply linear modeling to numerically given data in applied contexts such as straight-line depreciation, interpreting the slope as a constant rate of change.    "
},
{
  "id": "example-ch2-larvae",
  "level": "2",
  "url": "sec_2_3.html#example-ch2-larvae",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": "  In her laboratory, a biologist is studying the growth of the larvae of a certain insect species during the last instar. Her team takes weight measurements of the larvae every 6 hours for 48 hours beginning with . Let denote the average larval weight, in grams, at time . Here are the measurements they record rounded off to two decimal places Data source: http:\/\/www.biology.arizona.edu\/biomath\/tutorials\/Linear\/LinearModels.html , accessed: 6\/12\/20 .    (hours)             (grams)             Is it appropriate for the growth of the larvae to be modeled by a linear function? If it is, find a formula that matches the data.    It would be appropriate to model by a linear function if it changes at a constant rate. A function changes at a constant rate if equal changes in the independent variable correspond to equal changes in the dependent variable.  From the table, we can see that the independent variable increases by the quantity as we move between consecutive inputs. Starting at , we must determine the corresponding change in each time increases by (or, equivalently, the difference between each pair of consecutive outputs in the table).      These calculations indicate that each time increases by , the function increases by .   Hence the function changes at a constant rate. Indeed, the average rate of change in on each of the -hour intervals is   Since it changes at a constant rate, it is appropriate to model by a linear function for some constants and . The vertical intercept is the value of the function at . We have that value in the table: The slope is the constant rate of change which we have just calculated, so grams\/hour. Hence is an appropriate mathematical model for the growth of the larvae.   "
},
{
  "id": "sec_2_3-5",
  "level": "2",
  "url": "sec_2_3.html#sec_2_3-5",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Decide which of the following tables could represent a linear function. For each table that could represent a linear function, find a formula matching the data in the table.                                                                             The change in between any two consecutive inputs in the table is given by . The change in as increases by (or, equivalently, the change in between each pair of consecutive points in the table) can be calculated as follows:     We can see that each time increases by , changes by ; that is; decreases by .   Since changes in corresponding to equal changes in are all equal, the function is linear, so for some constants and . The slope is given by Hence   In , we could easily find the vertical intercept as we were given the value of the function at 0. The table for does not directly give us the value , so we will use another point given in the table to set up an equation and solve for . Taking the point from the table, we have that      The final formula for the linear function matching the table is      Consecutive values of in the table are equally spaced by . We must check if all the corresponding changes in are equal.   Here, we can see that each time increases by , the corresponding value of becomes larger and larger. That means that the function increases faster and faster by more and more at each next step so increases at an increasing rate unlike a linear function that increases or decreases at a constant rate.    Because the change in the output, , is not the same each time increases by , the function is not linear.     All changes in are equal between consecutive inputs in the table with . The corresponding changes in are also equal: at every step increases by , so . Hence, is a linear function. We find the slope to be We are given the value of at 0: . Hence, . The formula for is:       "
},
{
  "id": "example-ch2-depreciation",
  "level": "2",
  "url": "sec_2_3.html#example-ch2-depreciation",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  A company purchased a computer system for . The company accountant decided to depreciate the item over 5 years of its useful life for tax purposes. The depreciated value of the system, , in dollars, reported to the IRS years after the purchase (the so-called carrying value ) is given by:    (years after purchase)          (dollars)             What is the amount of depreciation over each of the five years?    What is an appropriate formula for the carrying value ?          We begin by calculating the change in depreciated value each year:     From the above, we conclude that the computer system depreciates by each of the five years.    Since equal changes of in correspond to equal changes in the depreciated value of the computer system, can be modeled by a linear function with formula:       "
},
{
  "id": "exercise_2_3_1",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  Decide if each table could represent a linear function and explain your reasoning. For each table that could represent a linear function, find a formula that matches the data given in the table.                       linear with equation                         linear with equation                           not linear                          not linear                        linear with equation     "
},
{
  "id": "exercise_2_3_2",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "  The table below shows for each temperature in degrees Fahrenheit the corresponding approximate temperature in degrees Celsius. Is it appropriate to model by a linear function of ? If it is, find a formula for as a function of .    (degrees Fahrenheit)        (degrees Celsius)          approximately linear with approximate equation    "
},
{
  "id": "exercise_2_3_3",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  The height of a human individual can be estimated by the length of the femur, as shown for males in the following table.    (length of femur in cm)        (height of human male in cm)           Use the information in this table to find a possible formula for the height of a human male as a function of his femur length .           What would the approximate height of a human male with femur length 46 cm be?     cm      Fernando is 175.4 cm tall. What would you expect the approximate length of his femur to be?    approximately 47.36 cm    "
},
{
  "id": "exercise_2_3_4",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  The weight of water above a scuba diver as well as the air above the diver exerts pressure on their bodies. The pressure the diver experiences at sea level is PSI (pounds per square inch), and this pressure increases by PSI per each foot of depth.     Write a linear equation expressing the pressure on a diver at a depth of feet below sea level.           The deepest a recreational scuba diver typically dives is feet. What is the pressure on a diver at this depth?     PSI    "
},
{
  "id": "exercise_2_3_5",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  A hiker is at a trailhead about to climb a mountain. The temperature at the trailhead is F. According to the standard atmosphere model https:\/\/www.grc.nasa.gov\/WWW\/K-12\/airplane\/atmos.html , accessed: 6\/25\/20 the temperature drops by F per each 1 foot increase in altitude. Let be the temperature, in F, feet above the hiker.     Write a formula for the function .           Find the temperature at the mountaintop that is feet above the hiker.      F      Is the function increasing or decreasing?    The function is decreasing.    "
},
{
  "id": "exercise_2_3_6",
  "level": "2",
  "url": "sec_2_3.html#exercise_2_3_6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  A man goes to a gym to exercise. After minutes on a treadmill, his pulse (heart rate), , in beats per minute, is:    (minutes)          (bpm)             Is it appropriate to model by a linear function? If yes, find a formula for .    Linear; formula       If the function can be modeled by a linear function, give units for the slope and the vertical intercept of . Then explain their meaning in practical terms.    The slope is bpm per minute; the practical meaning of the slope is that the man's bpm is increasing at a rate of bpm per minute. The vertical intercept is bpm; the practical meaning of the vertical intercept is that the man's resting heart rate (heart rate when performing no exercise on the treadmill) is bpm.    "
},
{
  "id": "sec_3_1",
  "level": "1",
  "url": "sec_3_1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Quadratic Functions",
  "body": " Introduction to Quadratic Functions    After completing this section, you should be able to do the following.     Identify a quadratic function written in standard form and construct its graph.    Use the graph of a quadratic function to identify its - and -intercepts and its vertex, and use the formula for the -coordinate of the vertex as the midpoint of the horizontal intercepts.    Use a quadratic function to model a real-life application, such as a revenue problem, and interpret its intercepts and vertex in that context.      Consider the function . A table of values for this function is provided below.           point                                              We can use this table of values to construct the plot of or we can rely on a graphing utility. In either case, the result is the U -shaped graph in . In the figure below, change the values of to see how the function changes.       From the graph, we can see that has two -intercepts, and , located at the points and , respectively. The -intercept is located at . Furthermore, there is an additional special point on this graph at which it turns around that is referred to as its vertex . The vertex is located at .  The function is an illustration of a quadratic function .   Standard Form for a Quadratic Function   A function that can be written in the form where , , and are real numbers with is called a quadratic function .  The form is referred to as the standard form for a quadratic function.      Graphs of Quadratic Functions  The graph of a quadratic function is U -shaped and called a parabola . To be precise, we will often call it a quadratic parabola to distinguish it from parabola-like graphs of other functions.   You will encounter parabola-like graphs of other functions in Chapter 4.     Use the graph of each quadratic function to identify its intercept(s) and vertex.                       The graph of each quadratic function can be obtained by making a table of values or by using a graphing calculator or utility.     The -intercept is where the graph crosses the -axis; this occurs at . There are no -intercepts, since the graph is located entirely above the -axis. The turning point or vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .   A short description.      The -intercept of this quadratic function is . The graph crosses the -axis at two points so there are two -intercepts. Visual inspection reveals that the approximate values of at which the -intercepts are located are and . The vertex is the highest point on the graph since this is a downward facing quadratic parabola; hence the vertex is .   A short description.      The -intercept of this function is . The graph crosses the -axis at one point only: . Hence, has one horizontal intercept . The vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .   A short description.          indicates that a quadratic function may have two horizontal intercepts, one horizontal intercept, or no horizontal intercepts. Recall that horizontal intercepts of are also called the real zeros of since they are values of where . With this in mind, our observation about the number of horizontal intercepts a quadratic function may have can be used to conclude that the quadratic equation may have two real solutions, one real solution, or no real solution.  The three parts of illustrate several other features of quadratic functions. Observe that the parabolas obtained by graphing and opened up while the parabola obtained by graphing opened down. Whether the parabola associated with a quadratic function will open up or open down is determined entirely by the sign of the leading coefficient . Additionally, it can be seen that each of the quadratic parabolas obtained from graphing the functions listed in is symmetric about the vertical line passing through its vertex.   Special Features of the Graphs of Quadratic Functions   The U -shaped graph of a quadratic function is called a parabola .     If is positive the U opens up and the vertex occurs at the lowest point on the parabola.    If is negative the U opens down and the vertex occurs at the highest point on the parabola.     Furthermore, a quadratic parabola is symmetric about the vertical line passing through its vertex, which is referred to as the axis of symmetry . Because of this symmetry, the -coordinate of the vertex of a quadratic function with two distinct horizontal intercepts occurs at the midpoint of those horizontal intercepts.     The -coordinate of the vertex of a quadratic function with distinct horizontal intercepts and has formula:          Below is the graph of a quadratic function . The horizontal intercepts and the -coordinate of the vertex are given. Find the -coordinate of the vertex and the vertex itself.   A short description.      The -coordinate of the vertex is the midpoint between the horizontal intercepts and . Visually, we may be able to guess that the midpoint is . To ensure precision, we can use the formula for the midpoint of the -intercepts: Hence the -coordinate of the vertex is indeed . As the -coordinate of the vertex is given, the vertex is the ordered pair .      Below is the graph of a quadratic function . One of the two horizontal intercepts and the vertex are given. Find the point on the -axis that corresponds to the other horizontal intercept of .   A short description.      The graph of every quadratic parabola is symmetric with respect to the vertical line passing through its vertex. In this case, we can see that the vertical line through the vertex crosses the -axis at the point .   A short description.    By symmetry, each -intercept must be the same horizontal distance from the point . As is a horizontal distance of units from , the second horizontal intercept must be .  Alternatively, we could use the fact that the -coordinate of the vertex, , is the midpoint between the given horizontal intercept and the second horizontal intercept that we are tasked with finding. Using the formula for the -coordinate of the vertex:     Whether we use a visual approach or the formula, we arrive at the same conclusion: the second horizontal intercept is at the point .      Quadratic Functions and Their Graphs in Applications  Quadratic functions often model real-life scenarios for which the intercepts and vertex have important practical interpretations.    A chair manufacturer finds that the number of chairs that it can sell depends on the price (in dollars) that it charges per chair. Specifically, the number of chairs that will be sold if dollars is charged per chair is given by the formula .     Find the formula for the revenue function and graph .    For what price(s) per chair is the manufacturer's revenue ?    What is the maximum revenue? What price should the chair manufacturer charge per chair in order to maximize revenue?          The revenue is the income that the chair manufacturer makes from selling chairs. This means that     Note that the revenue function is in fact a quadratic function, which can be seen more easily by using the distributive law to rewrite the formula we found above in the standard form :       Here, , , and . The graph of the revenue function can be obtained using a table of values or a graphing utility and the result is the parabola below.   A short description.      The price(s) for which the chair manufacturer's revenue will be can be found by setting the revenue function equal to 0 and solving for : The only way that a product of two factors can be 0 is if one of the factors itself is 0, so the above breaks into the two equations: Solving the latter,     These two values can also be found by visually inspecting the graph of . The revenue is where the graph crosses the horizontal axis, which occurs at the values of and .  Hence if either or is charged per chair, the revenue will be . In the first case, if the chair manufacturer charges nothing for a product, it will of course receive no income. In the second case, charging per chair results in the chair manufacturer pricing itself out of the market; they have set the price too high for customers to be willing to purchase the item.    Since the graph of is a parabola that opens down, answering questions about the maximum revenue involves the vertex. We can find the vertex by visual inspection or by using the midpoint of the two horizontal intercepts and . The formula tells us that the -value of the vertex is 100. The -value of the vertex can be found by substituting into the formula : Since the vertex is , the maximum revenue occurs when a price of is charged per chair. The maximum revenue is .          Standard Form   Write each quadratic function in standard form. Then determine whether its graph will open up or open down without graphing the function.           ; opens up            ; opens down            ; opens up            ; opens down      Intercepts and Vertex   Use the graph of each quadratic function to identify its intercept(s) and vertex.      A short description.      horizontal intercepts: , ; vertical intercept: ; vertex:        A short description.      no horizontal intercepts; vertical intercept: ; vertex:       Horizontal Intercepts   The horizontal intercepts of a quadratic parabola are given. Find the -coordinate of its vertex.      and             and             A quadratic parabola crosses the -axis at the point and has its vertex at the point . Find the second point on the -axis where the parabola crosses the -axis. Does the parabola open up or open down?     ; opens down      A lighting company can sell units of its specialty chandelier if it charges per specialty chandelier.     Find the formula for the revenue generated from specialty chandelier sales and graph it.     or       At what price will the lighting company sell zero of its specialty chandelier?           What is the maximum revenue? What price should the lighting company charge per specialty chandelier in order to maximize revenue?    The maximum revenue is . The lighting company should charge per specialty chandelier to maximize revenue.      "
},
{
  "id": "sec_3_1-2",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify a quadratic function written in standard form and construct its graph.    Use the graph of a quadratic function to identify its - and -intercepts and its vertex, and use the formula for the -coordinate of the vertex as the midpoint of the horizontal intercepts.    Use a quadratic function to model a real-life application, such as a revenue problem, and interpret its intercepts and vertex in that context.    "
},
{
  "id": "fig_3_1_quadratic_basic",
  "level": "2",
  "url": "sec_3_1.html#fig_3_1_quadratic_basic",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_3_1-3-7",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-3-7",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Standard Form for a Quadratic Function.",
  "body": " Standard Form for a Quadratic Function   A function that can be written in the form where , , and are real numbers with is called a quadratic function .  The form is referred to as the standard form for a quadratic function.   "
},
{
  "id": "exercise-ch3-graph-quads",
  "level": "2",
  "url": "sec_3_1.html#exercise-ch3-graph-quads",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Use the graph of each quadratic function to identify its intercept(s) and vertex.                       The graph of each quadratic function can be obtained by making a table of values or by using a graphing calculator or utility.     The -intercept is where the graph crosses the -axis; this occurs at . There are no -intercepts, since the graph is located entirely above the -axis. The turning point or vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .   A short description.      The -intercept of this quadratic function is . The graph crosses the -axis at two points so there are two -intercepts. Visual inspection reveals that the approximate values of at which the -intercepts are located are and . The vertex is the highest point on the graph since this is a downward facing quadratic parabola; hence the vertex is .   A short description.      The -intercept of this function is . The graph crosses the -axis at one point only: . Hence, has one horizontal intercept . The vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .   A short description.        "
},
{
  "id": "res-ch3-quadgraphsresult",
  "level": "2",
  "url": "sec_3_1.html#res-ch3-quadgraphsresult",
  "type": "Result",
  "number": "3.1.4",
  "title": "Special Features of the Graphs of Quadratic Functions.",
  "body": " Special Features of the Graphs of Quadratic Functions   The U -shaped graph of a quadratic function is called a parabola .     If is positive the U opens up and the vertex occurs at the lowest point on the parabola.    If is negative the U opens down and the vertex occurs at the highest point on the parabola.     Furthermore, a quadratic parabola is symmetric about the vertical line passing through its vertex, which is referred to as the axis of symmetry . Because of this symmetry, the -coordinate of the vertex of a quadratic function with two distinct horizontal intercepts occurs at the midpoint of those horizontal intercepts.     The -coordinate of the vertex of a quadratic function with distinct horizontal intercepts and has formula:       "
},
{
  "id": "sec_3_1-4-8",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-4-8",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Below is the graph of a quadratic function . The horizontal intercepts and the -coordinate of the vertex are given. Find the -coordinate of the vertex and the vertex itself.   A short description.      The -coordinate of the vertex is the midpoint between the horizontal intercepts and . Visually, we may be able to guess that the midpoint is . To ensure precision, we can use the formula for the midpoint of the -intercepts: Hence the -coordinate of the vertex is indeed . As the -coordinate of the vertex is given, the vertex is the ordered pair .   "
},
{
  "id": "sec_3_1-4-9",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-4-9",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Below is the graph of a quadratic function . One of the two horizontal intercepts and the vertex are given. Find the point on the -axis that corresponds to the other horizontal intercept of .   A short description.      The graph of every quadratic parabola is symmetric with respect to the vertical line passing through its vertex. In this case, we can see that the vertical line through the vertex crosses the -axis at the point .   A short description.    By symmetry, each -intercept must be the same horizontal distance from the point . As is a horizontal distance of units from , the second horizontal intercept must be .  Alternatively, we could use the fact that the -coordinate of the vertex, , is the midpoint between the given horizontal intercept and the second horizontal intercept that we are tasked with finding. Using the formula for the -coordinate of the vertex:     Whether we use a visual approach or the formula, we arrive at the same conclusion: the second horizontal intercept is at the point .   "
},
{
  "id": "sec_3_1-5-3",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-5-3",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  A chair manufacturer finds that the number of chairs that it can sell depends on the price (in dollars) that it charges per chair. Specifically, the number of chairs that will be sold if dollars is charged per chair is given by the formula .     Find the formula for the revenue function and graph .    For what price(s) per chair is the manufacturer's revenue ?    What is the maximum revenue? What price should the chair manufacturer charge per chair in order to maximize revenue?          The revenue is the income that the chair manufacturer makes from selling chairs. This means that     Note that the revenue function is in fact a quadratic function, which can be seen more easily by using the distributive law to rewrite the formula we found above in the standard form :       Here, , , and . The graph of the revenue function can be obtained using a table of values or a graphing utility and the result is the parabola below.   A short description.      The price(s) for which the chair manufacturer's revenue will be can be found by setting the revenue function equal to 0 and solving for : The only way that a product of two factors can be 0 is if one of the factors itself is 0, so the above breaks into the two equations: Solving the latter,     These two values can also be found by visually inspecting the graph of . The revenue is where the graph crosses the horizontal axis, which occurs at the values of and .  Hence if either or is charged per chair, the revenue will be . In the first case, if the chair manufacturer charges nothing for a product, it will of course receive no income. In the second case, charging per chair results in the chair manufacturer pricing itself out of the market; they have set the price too high for customers to be willing to purchase the item.    Since the graph of is a parabola that opens down, answering questions about the maximum revenue involves the vertex. We can find the vertex by visual inspection or by using the midpoint of the two horizontal intercepts and . The formula tells us that the -value of the vertex is 100. The -value of the vertex can be found by substituting into the formula : Since the vertex is , the maximum revenue occurs when a price of is charged per chair. The maximum revenue is .      "
},
{
  "id": "exercise_3_1_1",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; opens up   "
},
{
  "id": "exercise_3_1_2",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; opens down   "
},
{
  "id": "exercise_3_1_3",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; opens up   "
},
{
  "id": "exercise_3_1_4",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; opens down   "
},
{
  "id": "exercise_3_1_5",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   A short description.      horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "exercise_3_1_6",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   A short description.      no horizontal intercepts; vertical intercept: ; vertex:    "
},
{
  "id": "exercise_3_1_7",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_3_1_8",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_3_1_9",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  A quadratic parabola crosses the -axis at the point and has its vertex at the point . Find the second point on the -axis where the parabola crosses the -axis. Does the parabola open up or open down?     ; opens down   "
},
{
  "id": "exercise_3_1_10",
  "level": "2",
  "url": "sec_3_1.html#exercise_3_1_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A lighting company can sell units of its specialty chandelier if it charges per specialty chandelier.     Find the formula for the revenue generated from specialty chandelier sales and graph it.     or       At what price will the lighting company sell zero of its specialty chandelier?           What is the maximum revenue? What price should the lighting company charge per specialty chandelier in order to maximize revenue?    The maximum revenue is . The lighting company should charge per specialty chandelier to maximize revenue.    "
},
{
  "id": "sec_3_2",
  "level": "1",
  "url": "sec_3_2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Factoring Quadratic Expressions",
  "body": " Factoring Quadratic Expressions    After completing this section, you should be able to do the following.     Factor a general quadratic expression, including special cases such as a difference of squares.    Use factoring to find the horizontal intercepts, or real zeros, of a quadratic function.    Apply factoring of a quadratic function to solve real-world application problems.      In order to algebraically solve for the horizontal intercepts of a quadratic function such as one must set equal to and then solve for ; in other words, one must solve the quadratic equation This equation can be solved by factoring . This process will be explained below.  When we multiply together for some real numbers and , we obtain:    So if one begins with a quadratic expression of the form and wants to find two numbers and such that it must be the case that and .   Factoring Quadratics of the Form   In order to factor a quadratic expression of the form (where , and are constants and is a variable), find two numbers and whose product is and whose sum is . Then       Factor each quadratic expression.                          We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have          Find the horizontal intercepts of each quadratic function.                     To find the horizontal intercepts, we set the function equal to 0 and solve for : We factored the left-hand side of this equation in (a), so      Hence the horizontal intercepts of are and .    Again, we set the quadratic function equal to 0 and solve: In order to factor the left-hand side, we note that , so we need two numbers whose product is and whose sum is . Since and , we obtain      Hence the horizontal intercepts of are and .       The quadratic function in the above example is an example of a difference of squares .   Difference of Squares   The difference of squares factors into :     The above formula can be verified quickly through multiplication:      Factor each difference of squares:                     Here, so     Here, so        Each of the above factoring strategies is a special case of a more general approach to factoring quadratic functions.   Factoring Quadratics of the Form   To factor a trinomial of the form (where , , and are constants with and is a variable), rewrite the term  to factor by grouping. This is done by finding two numbers whose product is and whose sum is . These two numbers can be used to rewrite the term .      Factor each of the following quadratic expressions.                     Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now       Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now            Find the horizontal intercepts of the quadratic function .    We set the quadratic function equal to and solve: In order to factor the left-hand side, we observe that , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now     so we have that      Hence, the horizontal intercepts of are and . The function can be factored in the form . By factoring out from the second term, we can factor the function even further as In this form, the real zeros (horizontal intercepts) of the function are readily apparent.    It is worth mentioning another special case of factoring a quadratic expression : the case when is zero.   Factoring Quadratics of the Form   Consider an expression of the form (where and are constants with and is a variable). To factor the expression, factor out from both terms: or, alternatively, factor out from both terms:     If we rewrite a given expression as the horizontal intercepts of the function are straightforward to find. We want to solve the equation: The product is equal to if or . Since , when . The second term when . Hence, we have two -intercepts for :     Find horizontal intercepts of each of the quadratic functions given below.                     Here, , , and . We factor from both terms: The solutions to the equation are and , which are the two horizontal intercepts of the function.    Here, , , and . We factor out : The horizontal intercepts are and          Quadratic Functions and Projectile Motion  Consider a projectile in a vertical motion straight up or straight down. The height of the projectile above the ground, , in feet, seconds after it has been thrown can be modeled by the quadratic function where is the initial velocity of the object in feet per second and is the initial height of the object in feet.    A model rocket is launched from the ground with an initial velocity of 180 feet per second. Let be the height of the rocket above the ground seconds after launch.     Write a formula for the function .    When will the model rocket hit the ground?    Find the maximum height that the model rocket reaches.          The model rocket is launched from the ground. Hence, the initial height is 0 feet; that is, . The initial velocity is 180 ft\/sec. Hence, . The function that gives the height of the rocket after seconds is:     The rocket travels vertically upwards, reaches its maximum height, and then falls back to the ground. It hits the ground at the time when its height above the ground is zero; that is, when . To find such , we must solve the equation Note that the solutions to this equation are the horizontal intercepts of the quadratic parabola associated with . Factoring the left-hand side of the equation results in , or, equivalently, The horizontal intercepts are thus and . So the height of the rocket is 0 feet above the ground at both time — that is, at the moment of launch — and also at time , which is when the rocket comes back and hits the ground. Hence, the rocket hits the ground 11.25 seconds after launch.    The rocket reaches its maximum height when is at its maximum. The graph of is a parabola opening down. Hence, is at its maximum at the vertex of the parabola. Remember that the -coordinate of the vertex is the midpoint of the horizontal intercepts, and . Hence, the -coordinate of the vertex is . Thus, the maximum height is reached at time . The height at is feet. So at its highest, the rocket reaches 506 feet. The graph of the function explains everything:   A short description.    Note that the graph shows the height of the rocket as a function of time . It does not show the path of the rocket, which travels straight up and down along a vertical line.          Finding Intercepts   Find the intercepts of each quadratic function.          horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: ; vertical intercept:            horizontal intercept: ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:        A model rocket is launched vertically from the ground with an initial velocity of feet per second. Let be the height, in feet, of the rocket seconds after launch.     Write a formula for the function .           Find when the model rocket hits the ground.     seconds      Find the maximum height that the model rocket reaches.    The maximum height that the model rocket reaches is feet.      "
},
{
  "id": "sec_3_2-2",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Factor a general quadratic expression, including special cases such as a difference of squares.    Use factoring to find the horizontal intercepts, or real zeros, of a quadratic function.    Apply factoring of a quadratic function to solve real-world application problems.    "
},
{
  "id": "sec_3_2-3-4",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-4",
  "type": "Result",
  "number": "3.2.1",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(x^2+Bx+C\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   In order to factor a quadratic expression of the form (where , and are constants and is a variable), find two numbers and whose product is and whose sum is . Then    "
},
{
  "id": "exercise-ch3-factor",
  "level": "2",
  "url": "sec_3_2.html#exercise-ch3-factor",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Factor each quadratic expression.                          We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have       "
},
{
  "id": "sec_3_2-3-6",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-6",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Find the horizontal intercepts of each quadratic function.                     To find the horizontal intercepts, we set the function equal to 0 and solve for : We factored the left-hand side of this equation in (a), so      Hence the horizontal intercepts of are and .    Again, we set the quadratic function equal to 0 and solve: In order to factor the left-hand side, we note that , so we need two numbers whose product is and whose sum is . Since and , we obtain      Hence the horizontal intercepts of are and .      "
},
{
  "id": "sec_3_2-3-8",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-8",
  "type": "Result",
  "number": "3.2.4",
  "title": "Difference of Squares.",
  "body": " Difference of Squares   The difference of squares factors into :    "
},
{
  "id": "sec_3_2-3-10",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-10",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Factor each difference of squares:                     Here, so     Here, so       "
},
{
  "id": "sec_3_2-3-12",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-12",
  "type": "Result",
  "number": "3.2.6",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(ax^2 + bx + c\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   To factor a trinomial of the form (where , , and are constants with and is a variable), rewrite the term  to factor by grouping. This is done by finding two numbers whose product is and whose sum is . These two numbers can be used to rewrite the term .   "
},
{
  "id": "sec_3_2-3-13",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-13",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Factor each of the following quadratic expressions.                     Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now       Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now         "
},
{
  "id": "sec_3_2-3-14",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-14",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Find the horizontal intercepts of the quadratic function .    We set the quadratic function equal to and solve: In order to factor the left-hand side, we observe that , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now     so we have that      Hence, the horizontal intercepts of are and . The function can be factored in the form . By factoring out from the second term, we can factor the function even further as In this form, the real zeros (horizontal intercepts) of the function are readily apparent.   "
},
{
  "id": "sec_3_2-3-16",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-16",
  "type": "Result",
  "number": "3.2.9",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(ax^2+bx\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   Consider an expression of the form (where and are constants with and is a variable). To factor the expression, factor out from both terms: or, alternatively, factor out from both terms:    "
},
{
  "id": "sec_3_2-3-18",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-18",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Find horizontal intercepts of each of the quadratic functions given below.                     Here, , , and . We factor from both terms: The solutions to the equation are and , which are the two horizontal intercepts of the function.    Here, , , and . We factor out : The horizontal intercepts are and       "
},
{
  "id": "sec_3_2-4-3",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-4-3",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "  A model rocket is launched from the ground with an initial velocity of 180 feet per second. Let be the height of the rocket above the ground seconds after launch.     Write a formula for the function .    When will the model rocket hit the ground?    Find the maximum height that the model rocket reaches.          The model rocket is launched from the ground. Hence, the initial height is 0 feet; that is, . The initial velocity is 180 ft\/sec. Hence, . The function that gives the height of the rocket after seconds is:     The rocket travels vertically upwards, reaches its maximum height, and then falls back to the ground. It hits the ground at the time when its height above the ground is zero; that is, when . To find such , we must solve the equation Note that the solutions to this equation are the horizontal intercepts of the quadratic parabola associated with . Factoring the left-hand side of the equation results in , or, equivalently, The horizontal intercepts are thus and . So the height of the rocket is 0 feet above the ground at both time — that is, at the moment of launch — and also at time , which is when the rocket comes back and hits the ground. Hence, the rocket hits the ground 11.25 seconds after launch.    The rocket reaches its maximum height when is at its maximum. The graph of is a parabola opening down. Hence, is at its maximum at the vertex of the parabola. Remember that the -coordinate of the vertex is the midpoint of the horizontal intercepts, and . Hence, the -coordinate of the vertex is . Thus, the maximum height is reached at time . The height at is feet. So at its highest, the rocket reaches 506 feet. The graph of the function explains everything:   A short description.    Note that the graph shows the height of the rocket as a function of time . It does not show the path of the rocket, which travels straight up and down along a vertical line.      "
},
{
  "id": "exercise_3_2_1",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_2",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_3",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_4",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       horizontal intercepts: ; vertical intercept:    "
},
{
  "id": "exercise_3_2_5",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       horizontal intercept: ; vertical intercept:    "
},
{
  "id": "exercise_3_2_6",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_7",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_8",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_9",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_10",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_11",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_12",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "exercise_3_2_13",
  "level": "2",
  "url": "sec_3_2.html#exercise_3_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A model rocket is launched vertically from the ground with an initial velocity of feet per second. Let be the height, in feet, of the rocket seconds after launch.     Write a formula for the function .           Find when the model rocket hits the ground.     seconds      Find the maximum height that the model rocket reaches.    The maximum height that the model rocket reaches is feet.    "
},
{
  "id": "sec_3_3",
  "level": "1",
  "url": "sec_3_3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Vertex Form and Completing the Square",
  "body": " Vertex Form and Completing the Square    After completing this section, you should be able to do the following.     Identify the vertex of a quadratic function written in vertex form .    Convert a quadratic function between vertex form and standard form by expanding using special product formulas or by completing the square.    Use vertex form to find the horizontal intercepts of a quadratic function.      Recall that the standard form of a quadratic function is where , , and are real numbers with .  When one first looks upon the function it may not immediately be apparent that this is in fact a quadratic function. This can be seen by expanding the right-hand side:     Hence, can be written in the standard form of a quadratic function as This is the same quadratic function that appeared in where we saw that the vertex was . Notice that these numbers appear in the alternate formula for : This is not a coincidence and brings us to the vertex form of a quadratic function.   Vertex Form   The vertex form of a quadratic function with vertex is given by           Identify the vertex of each of the following quadratic functions.                     The function can be written as It can be seen that and , so its vertex is .    Note that for the function addition is being performed inside the parentheses instead of subtraction, as is required to correctly identify using the vertex form. Recalling that subtracting a negative number is the same as adding, we can rewrite the above as which allows us to identify that and . The vertex is .         Converting from Vertex Form to Standard Form  In the beginning of this section, we converted from vertex form to its standard form by expanding the right-hand side. This is what is done in general to convert a quadratic function from vertex form to standard form. To expedite this process, special product formulas may be used. Note that      Special Product Formulas          Convert each quadratic function from vertex form to standard form and identify , , and .                     Note that     so the standard form is . Here , , and .    Note that     so the standard form is . Here , , and .         Converting from Standard Form to Vertex Form  Converting from standard form to vertex form requires completing the square . This process will be explained below, but first an observation. Note that     by the first special product formula (see ).   Completing the Square for   To complete the square on a quadratic function of the form :    Identify , the coefficient of the term.  Compute .   Add and subtract this quantity from the original quadratic function: Note that by both adding and subtracting the same number from the original function, you have in fact added , which does not change the function.    Factor into and combine constants to finish completing the square.         Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                          The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:   Don't forget that always factors into . This is particularly helpful to remember in more complicated exercises like this one.      Hence, the vertex form of is and the vertex is .        In short: when , create a new quadratic (the one in parentheses) that has its coefficient equal to .    Complete Square on   To complete the square on a quadratic function of the form where :     Factor out of the first two terms to obtain an expression of the form     Complete the square within the parentheses.    Distribute and combine constants to finish completing the square on the original quadratic.         Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                     We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .    We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .         Using Vertex Form to Find Horizontal Intercepts  If a quadratic function is given in vertex form, then its horizontal intercepts can be found by following the process illustrated in the example below.    Find the horizontal intercepts of each of the following functions.                               To find the horizontal or -intercept(s) of this quadratic function, we set equal to and solve for . We could treat the left-hand side as a difference of squares and proceed by factoring, but we also could take an alternate approach:     This equation can be solved by taking the square root of both sides, remembering that there will be both a positive solution and a negative solution since both and :     Hence, the horizontal intercepts of the function and the solutions of the equation are and .    To find the horizontal intercepts, we set equal to and solve for :     We obtain two solutions to our equation and two horizontal intercepts of : and .    To find the horizontal intercepts, we set to and solve for :     Hence, the two solutions and therefore the two horizontal intercepts are and .    Once more, we set the function equal to and solve for :     In this case there is no real solution, since is not a real number. This means that the equation has no real solutions and the function has no horizontal intercepts. If we take a moment to visualize the graph of the function, this makes sense. Its graph is an upward facing parabola with vertex . Since the lowest point (the vertex) of this parabola is above the -axis, there cannot be any horizontal intercepts.          Vertex   For each of the following, identify the vertex of the given quadratic function.                                                     Vertex Form to Standard Form   Convert each quadratic function from vertex form to standard form and identify , , and .           ; , ,             ; , ,             ; , ,             ; , ,       Standard Form to Vertex Form   Convert each quadratic function from standard form to vertex form by completing the square. Then identify the vertex.           ; vertex:             ; vertex             ; vertex             ; vertex             ; vertex             ; vertex       Horizontal Intercepts   Find the horizontal intercepts of each quadratic function. Give exact and approximate values rounded off to three decimal places.           ,             ,             ,             ,            No real solutions.            ,       "
},
{
  "id": "sec_3_3-2",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify the vertex of a quadratic function written in vertex form .    Convert a quadratic function between vertex form and standard form by expanding using special product formulas or by completing the square.    Use vertex form to find the horizontal intercepts of a quadratic function.    "
},
{
  "id": "sec_3_3-3-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-3-5",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Vertex Form.",
  "body": " Vertex Form   The vertex form of a quadratic function with vertex is given by    "
},
{
  "id": "fig_3_3_vertex_form",
  "level": "2",
  "url": "sec_3_3.html#fig_3_3_vertex_form",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": "   "
},
{
  "id": "sec_3_3-3-7",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-3-7",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Identify the vertex of each of the following quadratic functions.                     The function can be written as It can be seen that and , so its vertex is .    Note that for the function addition is being performed inside the parentheses instead of subtraction, as is required to correctly identify using the vertex form. Recalling that subtracting a negative number is the same as adding, we can rewrite the above as which allows us to identify that and . The vertex is .      "
},
{
  "id": "res-ch3-special-products",
  "level": "2",
  "url": "sec_3_3.html#res-ch3-special-products",
  "type": "Result",
  "number": "3.3.4",
  "title": "Special Product Formulas.",
  "body": " Special Product Formulas       "
},
{
  "id": "sec_3_3-4-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-4-5",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": "  Convert each quadratic function from vertex form to standard form and identify , , and .                     Note that     so the standard form is . Here , , and .    Note that     so the standard form is . Here , , and .      "
},
{
  "id": "sec_3_3-5-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-5",
  "type": "Result",
  "number": "3.3.6",
  "title": "Completing the Square for <span class=\"process-math\">\\(x^2+Bx+C\\)<\/span>.",
  "body": " Completing the Square for   To complete the square on a quadratic function of the form :    Identify , the coefficient of the term.  Compute .   Add and subtract this quantity from the original quadratic function: Note that by both adding and subtracting the same number from the original function, you have in fact added , which does not change the function.    Factor into and combine constants to finish completing the square.      "
},
{
  "id": "sec_3_3-5-6",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-6",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                          The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:   Don't forget that always factors into . This is particularly helpful to remember in more complicated exercises like this one.      Hence, the vertex form of is and the vertex is .      "
},
{
  "id": "sec_3_3-5-8",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-8",
  "type": "Result",
  "number": "3.3.8",
  "title": "Complete Square on <span class=\"process-math\">\\(ax^2 + bx + c\\)<\/span>.",
  "body": " Complete Square on   To complete the square on a quadratic function of the form where :     Factor out of the first two terms to obtain an expression of the form     Complete the square within the parentheses.    Distribute and combine constants to finish completing the square on the original quadratic.      "
},
{
  "id": "sec_3_3-5-9",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-9",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": "  Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                     We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .    We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .      "
},
{
  "id": "sec_3_3-6-3",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-6-3",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Find the horizontal intercepts of each of the following functions.                               To find the horizontal or -intercept(s) of this quadratic function, we set equal to and solve for . We could treat the left-hand side as a difference of squares and proceed by factoring, but we also could take an alternate approach:     This equation can be solved by taking the square root of both sides, remembering that there will be both a positive solution and a negative solution since both and :     Hence, the horizontal intercepts of the function and the solutions of the equation are and .    To find the horizontal intercepts, we set equal to and solve for :     We obtain two solutions to our equation and two horizontal intercepts of : and .    To find the horizontal intercepts, we set to and solve for :     Hence, the two solutions and therefore the two horizontal intercepts are and .    Once more, we set the function equal to and solve for :     In this case there is no real solution, since is not a real number. This means that the equation has no real solutions and the function has no horizontal intercepts. If we take a moment to visualize the graph of the function, this makes sense. Its graph is an upward facing parabola with vertex . Since the lowest point (the vertex) of this parabola is above the -axis, there cannot be any horizontal intercepts.      "
},
{
  "id": "exercise_3_3_1",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_3_2",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_3_3",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_3_4",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_3_5",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "exercise_3_3_6",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "exercise_3_3_7",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "exercise_3_3_8",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "exercise_3_3_9",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "        ; vertex:    "
},
{
  "id": "exercise_3_3_10",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "exercise_3_3_11",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "exercise_3_3_12",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "exercise_3_3_13",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "exercise_3_3_14",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "exercise_3_3_15",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "        ,    "
},
{
  "id": "exercise_3_3_16",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "        ,    "
},
{
  "id": "exercise_3_3_17",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "        ,    "
},
{
  "id": "exercise_3_3_18",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "        ,    "
},
{
  "id": "exercise_3_3_19",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "       No real solutions.   "
},
{
  "id": "exercise_3_3_20",
  "level": "2",
  "url": "sec_3_3.html#exercise_3_3_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "        ,    "
},
{
  "id": "sec_3_4",
  "level": "1",
  "url": "sec_3_4.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Quadratic Formula",
  "body": " The Quadratic Formula    After completing this section, you should be able to do the following.     Use the quadratic formula to solve a quadratic equation.    Compute the discriminant of a quadratic equation and use its sign to determine the number of real solutions.    Use the vertex formula to find the vertex of a quadratic function, and write a quadratic function in factored form using its real zeros.      In the previous section, we saw that finding the horizontal intercepts of a quadratic function from the vertex form requires setting and solving. If we wanted to find the horizontal intercepts of a quadratic function given in the standard form , we could first complete the square to convert to vertex form, and then proceed as before. If this process is done in general; i.e., on (without replacing , , and with numbers), we obtain the quadratic formula .   Quadratic Formula   Recall that a quadratic equation in standard form is written in the form The solution(s) to a quadratic equation in standard form are given by the quadratic formula :      Applying the quadratic formula when an equation is not in standard form is a common mistake!     Use the quadratic formula to solve each quadratic equation.                          Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and .    Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and     Since this quadratic equation is not in standard form, we must first expand the left-hand side and then get all terms on one side before we are able to proceed:     Now that the equation is in standard form, we can see that this is similar to part (a), so the solutions are and .         Find the horizontal intercepts of the quadratic function .    To find the horizontal intercepts, we set the quadratic function equal to and solve for : Here , , and , so by the quadratic formula,     Simplifying, the two solutions are and Hence, the horizontal intercepts are and .      The Discriminant  How many solutions a quadratic equation in standard form will have is determined entirely by the quantity under the radical in the quadratic formula; we call this quantity the discriminant .   The Discriminant   For the quadratic equation in standard form , the discriminant  is given by       Given the discriminant of the quadratic equation :     If , then the quadratic equation has two distinct real solutions.    If , then the quadratic equation has one real solution.    If , then the quadratic equation has no real solutions.        Note: The discriminant allows you to state the number of solutions to the quadratic equation without actually finding them .     Use the discriminant to determine how many solutions each quadratic equation has.                          Here, , , and , so . Hence this quadratic equation has one real solution . By the quadratic formula, that solution is     Here, , , and , so . Since , this quadratic equation has no real solutions . This can be seen by using the quadratic formula as well, yielding which is not a real quantity due to the negative number underneath the square root.    Here, , , and , so . Since , this quadratic equation has two distinct real solutions . We found these solutions in part (b) of ; they are and .         Using Horizontal Intercepts to Find the Vertex  In Section 3.1, we noted that the graph of a quadratic function is symmetric about the vertical line passing through the vertex, so the horizontal position of the vertex must be exactly halfway between the horizontal intercepts, or real zeros, of the quadratic function. This was stated in .  The zeros of a quadratic function are found by solving the equation . By the quadratic formula, the solutions of this equation and therefore the zeros of the quadratic function are and . As the -coordinate of the vertex must be located at the average of and , denoting the -coordinate of the vertex by results in Now      As is frequently the case in mathematics, many paths may lead to the same answer. There is another way to show that you may encounter if you go on to study critical points in calculus.   Note that the above formula for is valid when , (i.e., if the quadratic function has a single horizontal intercept). In this case, the single horizontal intercept must also be the vertex. It is also valid when the quadratic function has no real horizontal intercepts, or, equivalently, no real zeros.   Vertex Formula   The vertex of a quadratic function in the standard form is given by       A baseball is thrown straight up with initial speed ft\/sec by a player who is feet tall. Let be the height of the ball above the ground seconds later.     Find a formula for .    When does the ball reach its maximum height, and what is its maximum height?          We use the formula for the vertical motion of a projectile with initial velocity and initial height that was originally presented in Section 3.3: In our example, and . Hence This is a quadratic function in standard form with , , and .    The parabola corresponding to the function opens down so is at its maximum at the vertex of the parabola. Given and , we can calculate , the -coordinate of the vertex: The ball will reach its maximum height at ; that is, seconds into the motion. The height of the ball at is: The maximum height of the ball is feet. Here is the graph of .   A short description.    The graph shows the part of the parabola that is relevant to the motion in our example.         Factored Form of a Quadratic Function  We have previously established that if we can factor a given quadratic function, we can quickly find its zeros (or, equivalently, horizontal intercepts). For example, the zeros of the function: are and .  The other way around is also true: if we have real zeros, and , of a given quadratic function , we can write the function in factored form:    Factored Form   Let be a quadratic function with distinct real zeros and . The factored form of is If has a single real zero, then is called a double root of and we use in the formula for factored form defined above.     Remember, the real zeros of are the real values of for which .    Note: Every quadratic function can be written in standard form and in vertex form. However, not every quadratic function can be written in factored form for real numbers , . In particular, a quadratic function that has no real zeros, or equivalently no horizontal intercepts, cannot be factored over the real numbers and therefore cannot be written in the factored form we have defined.    Find the zeros for a given quadratic function using any method you wish. Express the function in factored form.                          To find the zeros of , we have to solve the quadratic equation: Notice that , , and . So by the quadratic formula:     We simplify and obtain the two solutions: and The function in factored form is     We set up the equation to find the zeros of : We have , , and . So by the quadratic formula:     Hence, the two solutions are and The function in factored form is     The equation we have to solve is: Since , , and , the discriminant is negative: . Hence, the equation has no real solutions and cannot be written in factored form. However, the vertex form of is The vertex is below the -axis at and the parabola opens down. So there cannot be any horizontal intercepts. Here is the graph of .   A short description.           Use the graph of a quadratic function given below to find a formula for the function in factored form and in standard form.   A short description.      The graph gives us the horizontal intercepts or equivalently the zeros of the function : and . Hence, in factored form is: We still don't have the value of the leading coefficient . To find , we will use the vertical intercept of the function. The intercept is clearly seen on the graph. The vertical intercept is the value of the function at . Thus, . We substitute into factored form of and obtain:     We simplify the equation: which gives: and finally: The function in factored form is: To obtain in standard form, we multiply out all terms and simplify:          Quadratic Equations   Find all real solutions to each quadratic equation. Give exact and approximate values rounded to three decimal places.           and             and             and             and             and             and       Intercepts and Vertex   Find the intercepts and vertex of each quadratic function. Give exact and approximate values rounded off to three decimal places.          horizontal intercepts: , ; vertical intercept: ; vertex:            horizontal intercepts: , ; vertical intercept: ; vertex:            horizontal intercepts: , ; vertical intercept: ; vertex:            no horizontal intercepts; vertical intercept: 5; vertex       Discriminant   Calculate the discriminant of each quadratic equation and use it to determine whether the equation will have one real solution, two distinct real solutions, or no real solutions.          0; one real solution           132; two distinct real solutions            ; no real solutions           56; two distinct real solutions       A baseball is thrown straight up with the initial speed of 50 ft\/sec by a player who is 6 feet tall. Let be the height of the ball above the ground seconds later.     Find a formula for .           When does the ball reach its maximum height and what is its maximum height? Round your answers to two decimal places.    The ball reaches its maximum height approximately 1.56 seconds after it is thrown straight up and that maximum height is approximately 45.06 feet.      Factored Form   Rewrite the given quadratic function in factored form. Be sure to use the exact values of the zeros of each function.                              The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;       The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;      "
},
{
  "id": "sec_3_4-2",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Use the quadratic formula to solve a quadratic equation.    Compute the discriminant of a quadratic equation and use its sign to determine the number of real solutions.    Use the vertex formula to find the vertex of a quadratic function, and write a quadratic function in factored form using its real zeros.    "
},
{
  "id": "sec_3_4-3-2",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-3-2",
  "type": "Result",
  "number": "3.4.1",
  "title": "Quadratic Formula.",
  "body": " Quadratic Formula   Recall that a quadratic equation in standard form is written in the form The solution(s) to a quadratic equation in standard form are given by the quadratic formula :    "
},
{
  "id": "exercise-ch3-quad-form",
  "level": "2",
  "url": "sec_3_4.html#exercise-ch3-quad-form",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Use the quadratic formula to solve each quadratic equation.                          Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and .    Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and     Since this quadratic equation is not in standard form, we must first expand the left-hand side and then get all terms on one side before we are able to proceed:     Now that the equation is in standard form, we can see that this is similar to part (a), so the solutions are and .      "
},
{
  "id": "sec_3_4-3-5",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-3-5",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Find the horizontal intercepts of the quadratic function .    To find the horizontal intercepts, we set the quadratic function equal to and solve for : Here , , and , so by the quadratic formula,     Simplifying, the two solutions are and Hence, the horizontal intercepts are and .   "
},
{
  "id": "sec_3_4-4-3",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-3",
  "type": "Definition",
  "number": "3.4.4",
  "title": "The Discriminant.",
  "body": " The Discriminant   For the quadratic equation in standard form , the discriminant  is given by    "
},
{
  "id": "sec_3_4-4-4",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-4",
  "type": "Result",
  "number": "3.4.5",
  "title": "",
  "body": "  Given the discriminant of the quadratic equation :     If , then the quadratic equation has two distinct real solutions.    If , then the quadratic equation has one real solution.    If , then the quadratic equation has no real solutions.      "
},
{
  "id": "sec_3_4-4-6",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-6",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Use the discriminant to determine how many solutions each quadratic equation has.                          Here, , , and , so . Hence this quadratic equation has one real solution . By the quadratic formula, that solution is     Here, , , and , so . Since , this quadratic equation has no real solutions . This can be seen by using the quadratic formula as well, yielding which is not a real quantity due to the negative number underneath the square root.    Here, , , and , so . Since , this quadratic equation has two distinct real solutions . We found these solutions in part (b) of ; they are and .      "
},
{
  "id": "sec_3_4-5-7",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-5-7",
  "type": "Result",
  "number": "3.4.7",
  "title": "Vertex Formula.",
  "body": " Vertex Formula   The vertex of a quadratic function in the standard form is given by    "
},
{
  "id": "sec_3_4-5-8",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-5-8",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": "  A baseball is thrown straight up with initial speed ft\/sec by a player who is feet tall. Let be the height of the ball above the ground seconds later.     Find a formula for .    When does the ball reach its maximum height, and what is its maximum height?          We use the formula for the vertical motion of a projectile with initial velocity and initial height that was originally presented in Section 3.3: In our example, and . Hence This is a quadratic function in standard form with , , and .    The parabola corresponding to the function opens down so is at its maximum at the vertex of the parabola. Given and , we can calculate , the -coordinate of the vertex: The ball will reach its maximum height at ; that is, seconds into the motion. The height of the ball at is: The maximum height of the ball is feet. Here is the graph of .   A short description.    The graph shows the part of the parabola that is relevant to the motion in our example.      "
},
{
  "id": "sec_3_4-6-4",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-4",
  "type": "Definition",
  "number": "3.4.9",
  "title": "Factored Form.",
  "body": " Factored Form   Let be a quadratic function with distinct real zeros and . The factored form of is If has a single real zero, then is called a double root of and we use in the formula for factored form defined above.   "
},
{
  "id": "sec_3_4-6-7",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-7",
  "type": "Example",
  "number": "3.4.10",
  "title": "",
  "body": "  Find the zeros for a given quadratic function using any method you wish. Express the function in factored form.                          To find the zeros of , we have to solve the quadratic equation: Notice that , , and . So by the quadratic formula:     We simplify and obtain the two solutions: and The function in factored form is     We set up the equation to find the zeros of : We have , , and . So by the quadratic formula:     Hence, the two solutions are and The function in factored form is     The equation we have to solve is: Since , , and , the discriminant is negative: . Hence, the equation has no real solutions and cannot be written in factored form. However, the vertex form of is The vertex is below the -axis at and the parabola opens down. So there cannot be any horizontal intercepts. Here is the graph of .   A short description.        "
},
{
  "id": "sec_3_4-6-8",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-8",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  Use the graph of a quadratic function given below to find a formula for the function in factored form and in standard form.   A short description.      The graph gives us the horizontal intercepts or equivalently the zeros of the function : and . Hence, in factored form is: We still don't have the value of the leading coefficient . To find , we will use the vertical intercept of the function. The intercept is clearly seen on the graph. The vertical intercept is the value of the function at . Thus, . We substitute into factored form of and obtain:     We simplify the equation: which gives: and finally: The function in factored form is: To obtain in standard form, we multiply out all terms and simplify:      "
},
{
  "id": "exercise_3_4_1",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_2",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_3",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_4",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_5",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_6",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_3_4_7",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "exercise_3_4_8",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "exercise_3_4_9",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "exercise_3_4_10",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       no horizontal intercepts; vertical intercept: 5; vertex    "
},
{
  "id": "exercise_3_4_11",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       0; one real solution   "
},
{
  "id": "exercise_3_4_12",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       132; two distinct real solutions   "
},
{
  "id": "exercise_3_4_13",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; no real solutions   "
},
{
  "id": "exercise_3_4_14",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       56; two distinct real solutions   "
},
{
  "id": "exercise_3_4_15",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  A baseball is thrown straight up with the initial speed of 50 ft\/sec by a player who is 6 feet tall. Let be the height of the ball above the ground seconds later.     Find a formula for .           When does the ball reach its maximum height and what is its maximum height? Round your answers to two decimal places.    The ball reaches its maximum height approximately 1.56 seconds after it is thrown straight up and that maximum height is approximately 45.06 feet.    "
},
{
  "id": "exercise_3_4_16",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_4_17",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_3_4_18",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;    "
},
{
  "id": "exercise_3_4_19",
  "level": "2",
  "url": "sec_3_4.html#exercise_3_4_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;    "
},
{
  "id": "sec_4_1",
  "level": "1",
  "url": "sec_4_1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Algebra of Powers: Integral Exponents",
  "body": " Algebra of Powers: Integral Exponents    After completing this section, you should be able to do the following.     State the definitions of for zero, positive integer, and negative integer exponents .    Apply the Rules of Exponents to rewrite and simplify expressions involving integer exponents as a single power.    Recognize which operations on power expressions, such as distributing an exponent over a sum, are not valid.     In the next two sections we review algebra of power expressions of the form: where and are given numbers. The number is called the base in the expression and the power that the base is being raised to is called the exponent .  We begin with integral exponents; that is, exponents that are integers. If is a positive integer , then is a short way of writing repeated multiplication: In particular, for ,   This definition can be expanded to the exponent by defining for any number , Note that, by definition, this means We can also extend this definition to negative integer exponents by defining for every and every , In particular:   These definitions lead to the basic properties of power expressions.   Rules of Exponents Integral Exponents   Let and be given numbers, and let and be integers. Then the following equalities hold provided both sides are defined:                Note that an expression in the formulas above may not be defined if there is a zero in the denominator. For example, in Property , is not defined if and . That means that Property holds for any .  The properties of exponents listed above follow from the definitions at the beginning of this section. This is illustrated for Property below:     Rewrite each expression given below as a power of 3; that is, in the form for some constant .                                    By Property : We rewrote the expression as for .    By Property :     By Property and Property :     As we have:     Note that . Using Property :          Use Rules of Exponents to simplify the following expressions if possible:                               Use Property to simplify the expression under the outside exponent , then use Property :     Begin by simplifying the expression under the exponent:     Again, begin by simplifying under the exponent :     There is no rule for the power of a sum or a difference! We cannot simplify using rules of exponents. You certainly cannot distribute the power and write the expression as .         Rewriting Expressions   Rewrite the given expression as a power of ; that is, express it in the form for some .                                                     Rewriting Expressions   Rewrite the given expression as a power of ; that is, express it in the form for some .                                                     Simplifying Expressions   Simplify the given expression if possible. If not possible, state so.                                  Cannot be simplified.                       Cannot be simplified.                       Cannot be simplified.       Let and be positive integers. Use the definition of exponentiation to explain why the following formula is valid:           "
},
{
  "id": "sec_4_1-2",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definitions of for zero, positive integer, and negative integer exponents .    Apply the Rules of Exponents to rewrite and simplify expressions involving integer exponents as a single power.    Recognize which operations on power expressions, such as distributing an exponent over a sum, are not valid.    "
},
{
  "id": "sec_4_1-7",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-7",
  "type": "Result",
  "number": "4.1.1",
  "title": "Rules of Exponents — Integral Exponents.",
  "body": " Rules of Exponents Integral Exponents   Let and be given numbers, and let and be integers. Then the following equalities hold provided both sides are defined:               "
},
{
  "id": "sec_4_1-10",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-10",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Rewrite each expression given below as a power of 3; that is, in the form for some constant .                                    By Property : We rewrote the expression as for .    By Property :     By Property and Property :     As we have:     Note that . Using Property :       "
},
{
  "id": "sec_4_1-11",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-11",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Use Rules of Exponents to simplify the following expressions if possible:                               Use Property to simplify the expression under the outside exponent , then use Property :     Begin by simplifying the expression under the exponent:     Again, begin by simplifying under the exponent :     There is no rule for the power of a sum or a difference! We cannot simplify using rules of exponents. You certainly cannot distribute the power and write the expression as .      "
},
{
  "id": "exercise_4_1_1",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_1",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_2",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_2",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_3",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_4",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_4",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_5",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_5",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_6",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_6",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_7",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_7",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_8",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_8",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_9",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_9",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_10",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_10",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_11",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_11",
  "type": "Exercise",
  "number": "4.1.11",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "exercise_4_1_12",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_12",
  "type": "Exercise",
  "number": "4.1.12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_13",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_13",
  "type": "Exercise",
  "number": "4.1.13",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "exercise_4_1_14",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_14",
  "type": "Exercise",
  "number": "4.1.14",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_1_15",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_15",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "exercise_4_1_16",
  "level": "2",
  "url": "sec_4_1.html#exercise_4_1_16",
  "type": "Exercise",
  "number": "4.1.16",
  "title": "",
  "body": "  Let and be positive integers. Use the definition of exponentiation to explain why the following formula is valid:         "
},
{
  "id": "sec_4_2",
  "level": "1",
  "url": "sec_4_2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Algebra of Powers: Fractional Exponents",
  "body": " Algebra of Powers: Fractional Exponents    After completing this section, you should be able to do the following.     Determine the number and value of real th roots of a given number, and express them using radical notation.    Convert between radical and fractional exponent notation.    Apply the Rules of Exponents and Properties of Radicals to simplify expressions with fractional and arbitrary real exponents, and to solve equations involving roots.      In this section, we will review the concepts of roots and radicals. Please note that in this book the focus is on real numbers complex numbers are not considered. In particular, when we talk about roots, we mean real roots.    Roots and Radicals  We say that a number is a root of order (a square root) of a number if . Similarly, we say that a number is a root of order (a cube root) of if . The definition of a root of order is given below.    Let be a given number and let be a positive integer. We say that is a root of order of , or an th root of , if .    For example, let and . The number has two roots of order : and , since . However, if and , the situation would be different. The number has no roots of order , since there are no real numbers whose square is . We say that the square root of  does not exist .  Now, take and . The number has exactly one root of order 3, which is . Indeed, . Observe that so 4 is not a cube root of .   Roots and Radicals   Let be a given number and be a positive integer.     Suppose is even.   If , then has no th order roots.    If , then has two th roots, one positive and one of the same magnitude but negative. We denote the positive  th root as: (We use the radical symbol to denote a root.) The two th roots can then be written as    We often use the notation to denote the positive and negative roots.       Suppose is odd. Then has exactly one th root which we denote as If is negative, the root is negative; if is positive the root is positive.  If , then has one root of any order: .       When , instead of writing we simply drop the and write . This is the only exception to this notation.     Find all (real) roots specified below and write them in terms of radicals.    All roots of order of  All roots of order of  All roots of order of  All roots of order of         We are looking for all numbers such that . The order, , is even. Hence, we have two roots, one positive and one negative. The positive root is denoted by and the two roots are: The positive number whose th power is is . That is: Hence, the two roots of order of are and . Indeed, .    The number has two roots of order : and . We cannot easily guess them as they are not integers. Using a calculator, though, . The two roots are then approximately and .    The order, , is odd. Hence, there is only one root of order of denoted as . As , we have     A negative number has no roots of even order, and is even. Hence, has no roots of order .       By definition, is a root of order of if is a solution to the equation: Hence, roots and radicals appear naturally when solving equations containing powers of the unknown. You may recall seeing many radicals in Chapter 3 in the context of quadratic equations.    Solve for . Find all (real) solutions and give their exact as well as approximate values.                               We add to both sides of the equation and then divide both sides by to obtain Solutions to the equation are roots of order of . There are two such roots:     We divide both sides of the equation by and obtain: There is one cube root of . Hence, our equation has one solution:     We subtract from both sides of the equation, then divide by . The equation becomes: We are looking for all roots of order of . As is even, we have two such roots:     We begin by solving for . Subtract from both sides and divide both sides by : Hence, is a root of order 2 of 4. There are two such roots: This gives and . We solve each of the two equations for and obtain two solutions:        Here are a few important properties of roots.   Properties of Radicals   Let , be given numbers. Let , be positive integers. Then the following equalities hold provided that the roots involved exist, and both sides are defined:                     if is even     if is odd         Powers with Fractional Exponents and Arbitrary Exponents  So far, we have defined powers for all integer exponents .  To extend the definition to fractional exponents , we will use roots. In the first step, for every positive integer , we define as: Does this make sense? Recall that . Therefore, which is what Rules of Exponents would dictate. In the next step, we define . Here is a precise definition of a power with a fractional exponent.    Let be a given number and let and be positive integers. Assume that exists. We define:       Using properties of exponents, we also have   Note that exists unless is even and is negative. The combination of negative radicands (numbers under radicals) with even roots causes a number of problems for the behavior of fractional exponents, and the Rules of Exponents do not always hold.  For example, is the following equality always true? It seems reasonable at first, but consider the following: The first number is which is undefined. However, Therefore, when we talk about fractional powers, we will most often assume that bases are positive except for some simple cases where no issues arise, such as     Find:               By definition . Note that is the positive of the two square roots of as is .  is undefined. An even-order root of a negative number is undefined. Hence, is undefined.  .  .    .        Depending on your calculator, it may be easier to calculate a fractional power than to enter the corresponding radical. You can simply enter 1700^(1\/20) . Be sure to use parentheses!   We have defined powers for integer and fractional exponents . As you may know, not all real numbers can be expressed as fractions (irrational numbers, for example). Can we define powers for all real numbers ? The answer is yes, provided the base is positive. The construction falls outside the scope of this course. It suffices to know that can be defined for all exponents and Rules of Exponents are preserved. Therefore, we have the following result.   Rules of Exponents Arbitrary Exponents   Let , be given positive numbers, and be real numbers. Then the following equalities hold:                 Rewrite each of the following expressions as a power of 5; that is, in the form for some .                               By definition of fractional powers,     By definition of fractional powers and the properties above,     Use the fact that to simplify the expression:     Note that . Therefore:          Use Rules of Exponents to simplify the following. Write your answers in terms of powers and not radicals. Assume , , , and are all positive.                                    First, compute Applying properties of exponents: .    Applying rules of exponents directly yields:     First, observe that and . This allows us to simplify the fraction as . Since and , then           Solving Equations   Solve the equation for or for . Be sure to list all solutions. Give exact and approximate values rounded off to three decimal places. If there are no solutions say so.           and             and                        No real solutions.            and                   Rewriting Expressions   Rewrite the expression as a power of ; that is, in the form for some . If it is not possible, say so.                                                     Simplifying   Simplify the given expression. If it is not possible, say so. and are assumed to be positive.          Cannot be simplified.                                   Cannot be simplified.      "
},
{
  "id": "sec_4_2-2",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine the number and value of real th roots of a given number, and express them using radical notation.    Convert between radical and fractional exponent notation.    Apply the Rules of Exponents and Properties of Radicals to simplify expressions with fractional and arbitrary real exponents, and to solve equations involving roots.    "
},
{
  "id": "sec_4_2-4-3",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a given number and let be a positive integer. We say that is a root of order of , or an th root of , if .   "
},
{
  "id": "sec_4_2-4-6",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-6",
  "type": "Result",
  "number": "4.2.2",
  "title": "Roots and Radicals.",
  "body": " Roots and Radicals   Let be a given number and be a positive integer.     Suppose is even.   If , then has no th order roots.    If , then has two th roots, one positive and one of the same magnitude but negative. We denote the positive  th root as: (We use the radical symbol to denote a root.) The two th roots can then be written as    We often use the notation to denote the positive and negative roots.       Suppose is odd. Then has exactly one th root which we denote as If is negative, the root is negative; if is positive the root is positive.  If , then has one root of any order: .     "
},
{
  "id": "sec_4_2-4-8",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-8",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Find all (real) roots specified below and write them in terms of radicals.    All roots of order of  All roots of order of  All roots of order of  All roots of order of         We are looking for all numbers such that . The order, , is even. Hence, we have two roots, one positive and one negative. The positive root is denoted by and the two roots are: The positive number whose th power is is . That is: Hence, the two roots of order of are and . Indeed, .    The number has two roots of order : and . We cannot easily guess them as they are not integers. Using a calculator, though, . The two roots are then approximately and .    The order, , is odd. Hence, there is only one root of order of denoted as . As , we have     A negative number has no roots of even order, and is even. Hence, has no roots of order .      "
},
{
  "id": "sec_4_2-4-10",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-10",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Solve for . Find all (real) solutions and give their exact as well as approximate values.                               We add to both sides of the equation and then divide both sides by to obtain Solutions to the equation are roots of order of . There are two such roots:     We divide both sides of the equation by and obtain: There is one cube root of . Hence, our equation has one solution:     We subtract from both sides of the equation, then divide by . The equation becomes: We are looking for all roots of order of . As is even, we have two such roots:     We begin by solving for . Subtract from both sides and divide both sides by : Hence, is a root of order 2 of 4. There are two such roots: This gives and . We solve each of the two equations for and obtain two solutions:       "
},
{
  "id": "sec_4_2-4-12",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-12",
  "type": "Result",
  "number": "4.2.5",
  "title": "Properties of Radicals.",
  "body": " Properties of Radicals   Let , be given numbers. Let , be positive integers. Then the following equalities hold provided that the roots involved exist, and both sides are defined:                     if is even     if is odd      "
},
{
  "id": "sec_4_2-5-4",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-5-4",
  "type": "Definition",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be a given number and let and be positive integers. Assume that exists. We define:      "
},
{
  "id": "sec_4_2-5-8",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-5-8",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Find:               By definition . Note that is the positive of the two square roots of as is .  is undefined. An even-order root of a negative number is undefined. Hence, is undefined.  .  .    .      "
},
{
  "id": "sec_4_2-5-11",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-5-11",
  "type": "Result",
  "number": "4.2.8",
  "title": "Rules of Exponents — Arbitrary Exponents.",
  "body": " Rules of Exponents Arbitrary Exponents   Let , be given positive numbers, and be real numbers. Then the following equalities hold:              "
},
{
  "id": "sec_4_2-5-12",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-5-12",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Rewrite each of the following expressions as a power of 5; that is, in the form for some .                               By definition of fractional powers,     By definition of fractional powers and the properties above,     Use the fact that to simplify the expression:     Note that . Therefore:       "
},
{
  "id": "sec_4_2-5-13",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-5-13",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Use Rules of Exponents to simplify the following. Write your answers in terms of powers and not radicals. Assume , , , and are all positive.                                    First, compute Applying properties of exponents: .    Applying rules of exponents directly yields:     First, observe that and . This allows us to simplify the fraction as . Since and , then       "
},
{
  "id": "exercise_4_2_1",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_4_2_2",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_4_2_3",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_4",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       No real solutions.   "
},
{
  "id": "exercise_4_2_5",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        and    "
},
{
  "id": "exercise_4_2_6",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_7",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_8",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_9",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_10",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_11",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "exercise_4_2_12",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_13",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_4_2_14",
  "level": "2",
  "url": "sec_4_2.html#exercise_4_2_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "sec_4_3",
  "level": "1",
  "url": "sec_4_3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Power Functions: Positive Integral Exponents",
  "body": " Power Functions: Positive Integral Exponents    After completing this section, you should be able to do the following.     Identify whether a given function is a power function with a positive integer exponent, and determine its coefficient and exponent.    Use power functions with positive integer exponents to model and solve applied proportionality problems.    Describe and sketch the graph of for a positive integer exponent , including its symmetry and the effect of the coefficient , distinguishing between even and odd .      In the next two sections we look at the properties and the graphs of the so-called power functions.   Power Function   A function is called a power function if can be expressed in the form where and are constants and . The constant is called the coefficient of the power function and is called the exponent .     Note: When depends on according to the formula , we say that is directly proportional (or proportional) to with the coefficient of proportionality . If , we say that is inversely proportional to with the coefficient of proportionality . So power functions express proportionality of the dependent variable to powers of the independent variable.  As the title suggests, in this section we look at the case when the exponent is a positive integer.    Which of the functions below are power functions? For those which are, rewrite in the standard form . Identify the coefficient and the exponent.                                         The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is a power function as well: The coefficient is and the exponent is .    The function is not a power function. It cannot be rewritten as , since is a sum of two power functions with differing exponents namely and . A function that is a sum of power functions with non-negative integer exponents is called a polynomial function .    The function is a power function. Remember that is just a constant. The coefficient is and the exponent is .    The function is not a power function. Observe that in the base of the power expression is constant and equal to . The exponent is a variable. In a power function, it is the other way around: the base is a variable and the exponent is constant.   Functions like where the variable is in the exponent is the topic of discussion in Chapter 5.          A ball dropped from the Empire State Building has traveled down the distance of feet after seconds where      Is the function a power function? If yes, identify the exponent and the coefficient.    The Empire State Building is ft tall. How long will it take for the ball to hit the ground?           is a power function with and .    The ball will hit the ground when it has traveled feet. That is, for a positive such that: To solve the equation for we divide both sides by : The two solutions to this quadratic equation are: Since has to be positive, then the solution is Hence, the ball will hit the ground after:       Note that in terms of proportionality, we can say that the distance is directly proportional to with the coefficient of proportionality .       Let be the volume of a sphere of radius centimeters. We know from elementary geometry that:      Is a power function? If yes, find the coefficient and the exponent.    What radius is required for the volume to be 25 cm ?          Yes, is a power function. The coefficient is and the exponent is .    We are looking for the radius , in centimeters, such that Dividing both sides by and multiplying by , then Now we take the power of both sides (in other words, the cube root) and obtain: Since , then The volume is when the radius is cm.         Graphs of Power Functions: Positive Integral Exponents  Graphs of power functions with exponents that are positive integers are different for even and for odd.   Even Positive Exponents   If is even, then is positive for all except for where . For example, if then , , , , and so on. Hence, the graph of the power function for any even is symmetric about the -axis as .  Here are the graphs of the functions for and . All graphs are U-shaped and reminiscent of the quadratic parabola .   A short description.    The coefficient in , stretches or shrinks the graph of vertically. Additionally, if , the graph is reflected over the -axis.   A short description.     Odd Positive Exponents   If is odd, then is positive for , it is for , and negative for . For example, let . Then , , , , and so on. Hence, the graph of the power function for any odd is symmetric about the origin as .  Here are the graphs of the functions for and . This time, the graphs are S-shaped.   A short description.    The coefficient in , stretches or shrinks the graph of vertically. Additionally, if , the graph is reflected over the -axis.   A short description.    Here is a summary of how graphs of power functions look for positive integer exponents , even and odd, and for coefficients positive and negative.       even   odd    Positive coefficient,    Graph of a representative power function with even exponent and positive coefficient.     Graph of a representative power function with odd exponent and positive coefficient.      Negative coefficient,    Graph of a representative power function with even exponent and negative coefficient.     Graph of a representative power function with odd exponent and negative coefficient.        Power Functions   Determine whether a given function is a power function. If yes, identify the coefficient and the exponent . If not, say so.           ; ;             ; ;            Not a power function.            ; ;            Not a power function.            ; ;       Braking Distance    Braking distance or stopping distance refers to the distance a car will travel from the point when its brakes are fully applied to when it comes to a complete stop http:\/\/hyperphysics.phy-astr.gsu.edu\/hbase\/crstp.html , accessed: 7\/5\/20 . The braking distance is proportional to the square of the car's speed and it depends on the coefficient of friction, , between the tires and the road surface. Let denote distance, in feet, and speed in mph. The formula for the braking distance is: Note that the braking distance does not include a driver's reaction time https:\/\/en.wikipedia.org\/wiki\/Braking_distance , accessed: 7\/5\/20 .     Is the braking distance a power function of speed? If yes, give the coefficient and the exponent . Assume that is a given constant.    Yes; ;       The coefficient of friction under normal conditions when the road is dry is . What is the braking distance of a car that travels on a dry road at mph? What is the braking distance at mph?     feet; feet      By what factor does the braking distance increase when speed doubles?    Factor of .      The coefficient of friction on a wet road is . Calculate the braking distance of a car traveling at mph on a wet road.     feet       Below are the graphs of four power functions where is a positive integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:     is even and is positive.   is odd and is positive.   is odd and is negative.   is even and is negative.        Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph in the middle.      Which of the following is a graph of ?    A short description.     A short description.     A short description.       The second graph.      Below you see graphs of the functions , , and . Decide which is which.   A short description.      A is ; B is ; C is .      The area, , of an equilateral triangle whose sides have length is given by: Find the side length , in cm, which gives the area equal to . Round off your answer to three decimal places.     cm     "
},
{
  "id": "sec_4_3-2",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify whether a given function is a power function with a positive integer exponent, and determine its coefficient and exponent.    Use power functions with positive integer exponents to model and solve applied proportionality problems.    Describe and sketch the graph of for a positive integer exponent , including its symmetry and the effect of the coefficient , distinguishing between even and odd .    "
},
{
  "id": "sec_4_3-3-2",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-2",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Power Function.",
  "body": " Power Function   A function is called a power function if can be expressed in the form where and are constants and . The constant is called the coefficient of the power function and is called the exponent .   "
},
{
  "id": "sec_4_3-3-5",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-5",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Which of the functions below are power functions? For those which are, rewrite in the standard form . Identify the coefficient and the exponent.                                         The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is a power function as well: The coefficient is and the exponent is .    The function is not a power function. It cannot be rewritten as , since is a sum of two power functions with differing exponents namely and . A function that is a sum of power functions with non-negative integer exponents is called a polynomial function .    The function is a power function. Remember that is just a constant. The coefficient is and the exponent is .    The function is not a power function. Observe that in the base of the power expression is constant and equal to . The exponent is a variable. In a power function, it is the other way around: the base is a variable and the exponent is constant.   Functions like where the variable is in the exponent is the topic of discussion in Chapter 5.       "
},
{
  "id": "sec_4_3-3-6",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-6",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  A ball dropped from the Empire State Building has traveled down the distance of feet after seconds where      Is the function a power function? If yes, identify the exponent and the coefficient.    The Empire State Building is ft tall. How long will it take for the ball to hit the ground?           is a power function with and .    The ball will hit the ground when it has traveled feet. That is, for a positive such that: To solve the equation for we divide both sides by : The two solutions to this quadratic equation are: Since has to be positive, then the solution is Hence, the ball will hit the ground after:       Note that in terms of proportionality, we can say that the distance is directly proportional to with the coefficient of proportionality .    "
},
{
  "id": "sec_4_3-3-7",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-7",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Let be the volume of a sphere of radius centimeters. We know from elementary geometry that:      Is a power function? If yes, find the coefficient and the exponent.    What radius is required for the volume to be 25 cm ?          Yes, is a power function. The coefficient is and the exponent is .    We are looking for the radius , in centimeters, such that Dividing both sides by and multiplying by , then Now we take the power of both sides (in other words, the cube root) and obtain: Since , then The volume is when the radius is cm.      "
},
{
  "id": "exercise_4_3_1",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_3_2",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_3_3",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "exercise_4_3_4",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_3_5",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "exercise_4_3_6",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_3_7",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Is the braking distance a power function of speed? If yes, give the coefficient and the exponent . Assume that is a given constant.    Yes; ;    "
},
{
  "id": "exercise_4_3_8",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The coefficient of friction under normal conditions when the road is dry is . What is the braking distance of a car that travels on a dry road at mph? What is the braking distance at mph?     feet; feet   "
},
{
  "id": "exercise_4_3_9",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  By what factor does the braking distance increase when speed doubles?    Factor of .   "
},
{
  "id": "exercise_4_3_10",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  The coefficient of friction on a wet road is . Calculate the braking distance of a car traveling at mph on a wet road.     feet   "
},
{
  "id": "exercise_4_3_11",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Below are the graphs of four power functions where is a positive integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:     is even and is positive.   is odd and is positive.   is odd and is negative.   is even and is negative.     "
},
{
  "id": "exercise_4_3_12",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph in the middle.   "
},
{
  "id": "exercise_4_3_13",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The second graph.   "
},
{
  "id": "exercise_4_3_14",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Below you see graphs of the functions , , and . Decide which is which.   A short description.      A is ; B is ; C is .   "
},
{
  "id": "exercise_4_3_15",
  "level": "2",
  "url": "sec_4_3.html#exercise_4_3_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The area, , of an equilateral triangle whose sides have length is given by: Find the side length , in cm, which gives the area equal to . Round off your answer to three decimal places.     cm   "
},
{
  "id": "sec_4_4",
  "level": "1",
  "url": "sec_4_4.html",
  "type": "Section",
  "number": "4.4",
  "title": "Power Functions: Fractional and Negative Integral Exponents",
  "body": " Power Functions: Fractional and Negative Integral Exponents    After completing this section, you should be able to do the following.     Identify whether a given function is a power function with a negative integer or fractional exponent, and determine its coefficient and exponent.    Describe and sketch the graph of for a negative integer exponent , including its asymptotes and symmetry, distinguishing between even and odd .    Use power functions with negative integer or fractional exponents, including their restricted domains, to model and solve applied problems.      In the previous section, we considered power functions in the case when is a positive integer. When is a negative integer, power functions behave quite differently.    Negative Integral Exponents  Consider a power function in the case when the exponent is a negative integer. The behavior and graphs of such functions are very different from those of power functions with positive integral exponents.  A negative exponent means the reciprocal . So now the independent variable is in the denominator. The domain of a power function in this case is no longer the set of all real numbers as cannot be .  Let's look more closely at these graphs.    Which of the functions below are power functions? Rewrite those which are in standard form . Identify the coefficient and the exponent.                          The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is not a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The function is not a power function. Indeed, the base of the power expression is constant at , meanwhile the exponent varies.         Body mass index (BMI) is an easy screening method for weight category underweight, healthy weight, overweight, and obesity. BMI is calculated as follows:   A person who weighs 170 lb may fall in any of the above weight categories it depends on their height. Let denote body mass index of a person who weighs 170 lb and whose height is . Then, according to the formula, Note that with the weight fixed at 170 lb, body mass index is a power function of height: . (In terms of proportionality, BMI is inversely proportional to the square of height.) The obese category is defined as BMI of 30.0 or above. The normal weight category corresponds to BMI between 18.5 and 24.9.  Find the height at and below which a person weighing 170 lb is obese.    We want to find such that : After multiplying both sides by and dividing by 30, then which gives: Since in our problem has to be positive, the solution is: At the height inches and below a person weighing 170 lb is obese.  Note that when increases decreases as the denominator of the expression becomes larger. On the other hand, when gets smaller, gets larger. Hence, every person shorter than inches who weighs 170 lb is also obese.      Graphs of Power Functions: Negative Integral Exponents  Graphs of power functions with exponents that are negative integers have a different shape depending on whether is even or is odd.   Odd Negative Exponents   We begin with the case and . The graph of the function looks as follows:   A short description.    Observe that when gets larger and larger, say: the values become very close to 0. Indeed, they are:   In terms of the graph, this behavior translates to the graph getting very close, arbitrarily close , to the -axis as increases. We say that the -axis, or equivalently the horizontal line , is a horizontal asymptote of the function .  Observe that as is getting close to 0 from the right, the values are becoming very large. We test a few positive inputs close to : The corresponding values are: In terms of the graph, this behavior translates to the graph getting very close to the -axis, as approaches from the right, with the values of the function becoming arbitrarily large. We say that the -axis, or equivalently the vertical line , is a vertical asymptote of the function .  The portion of the graph corresponding to negative inputs , is symmetric about the origin to the portion of the graph corresponding to positive inputs. Indeed, when changes sign changes sign:   Graphs of other power functions in which the exponent is an odd negative integer have a similar shape to the graph of . For example:   A short description.    As always, the coefficient in stretches or shrinks the graph of vertically. Additionally, if is negative, the graph is reflected about the -axis.    A short description.     A short description.      Even Negative Exponents   When is a negative even integer, the graph of is entirely above the -axis and it is symmetric about the -axis, since when is even.   A short description.    The graphs of the functions for other even negative integers have a similar shape:   A short description.    The -axis is still a horizontal asymptote and the -axis is a vertical asymptote. The coefficient is responsible for vertical scaling and a reflection about the -axis if is negative. For example:   A short description.     Summary   Here is a summary of how graphs of power functions look for negative integer exponents , even and odd, and for coefficients positive and negative.       even & negative   odd & negative    Positive coefficient,    Graph of a representative power function with even negative exponent and positive coefficient.     Graph of a representative power function with odd negative exponent and positive coefficient.      Negative coefficient,    Graph of a representative power function with even negative exponent and negative coefficient.     Graph of a representative power function with odd negative exponent and negative coefficient.       Fractional Exponents    Which of the functions below are power functions? Those which are, rewrite in standard form . Identify the coefficient and the exponent.                          The function is a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is a power function as well. Using rules of exponents for arbitrary exponents and properties of the square root, we can rewrite:     The coefficient is and the exponent is .         Body surface area (BSA) is the total surface area of the human body. The body surface area is used in many measurements in medicine, including the calculation of drug dosages and the amount of fluids to be administered intravenously. There are several accepted formulas to calculate BSA. One of the most commonly used is the Du Bois formula: where is weight in kilograms (kg) and is height in centimeters (cm). The formula gives BSA in square meters, .     Calculate BSA of a female who stands 158 cm tall and weighs 60 kg. Give units with your answer.    Let weight be fixed at 70 kg. Then BSA depends on height only— with weight fixed at 70, BSA is a function of only. Denote this function by . Find a formula for . Is it a power function? If yes, identify the coefficient and the exponent.    Use your formula for to calculate BSA for a female that weighs 70 kg and is 158 cm tall. Give units with your answer.          We want to calculate BSA for and . We substitute the values into the Du Bois formula: The total body surface area of a person who weighs kg and is cm tall is .    Fix . Then BSA as a function of is:  is a power function of with the coefficient and exponent .    BSA of a female who weighs kg and is cm tall is . The total body surface area of a person who weighs kg and is cm tall is .         Graphs of Power Functions: Fractional Exponents  When considering power functions with fractional exponents or, more generally, with exponents which are not integers, we restrict the domain to (or to if a non-integral exponent is negative). The graphs of and are given below as an example. Traditionally, roots of odd orders like or are considered and graphed for all .    A short description.     A short description.        Power Functions   Determine whether the given function is a power function. If yes, identify the coefficient and the exponent . If not, say so.           ; ;             ; ;             ; ;            Not a power function.            ; ;            Not a power function.       Four power functions are graphed below, where is a negative integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:    is odd; is positive.  is even; is negative.  is odd; is negative.  is even; is positive.        Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the right.      Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the left.      Below you see graphs of the functions , , and . Decide which is which.   A short description.      Graph A is , graph B is , and graph C is .      Find a formula for a power function given numerically by:                                Find a formula for a power function given numerically by:               undefined                  Consider a pendulum depicted below Modified from a public domain image at https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 .   A short description.   When the pendulum is displaced sideways from its resting position called the equilibrium position the force due to gravity will cause the pendulum to oscillate back and forth about the equilibrium position. The time, , needed to execute one full cycle a left swing and the right swing is called the pendulum's period. The period depends on the length of the pendulum https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 and the local acceleration due to gravity :      With fixed, is a power function of ? In other words, is ? If yes, find the coefficient and the exponent.    yes; where the coefficient is and the exponent is .      On the surface of the Earth, the acceleration due to gravity, , is equal to where m stands for meters. Calculate the period of a pendulum of length that happily oscillates in Kingston, RI.    approximately seconds.      An astronaut is standing on the surface of a faraway asteroid wondering about the acceleration due to gravity on the asteroid. The astronaut has a watch and a pendulum whose length is . The astronaut measures the period of the pendulum which turns out to be seconds. What is the acceleration due to gravity on the asteroid?    approximately .      "
},
{
  "id": "sec_4_4-2",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-2",
  "type": "Objectives",
  "number": "4.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify whether a given function is a power function with a negative integer or fractional exponent, and determine its coefficient and exponent.    Describe and sketch the graph of for a negative integer exponent , including its asymptotes and symmetry, distinguishing between even and odd .    Use power functions with negative integer or fractional exponents, including their restricted domains, to model and solve applied problems.    "
},
{
  "id": "sec_4_4-4-5",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-5",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": "  Which of the functions below are power functions? Rewrite those which are in standard form . Identify the coefficient and the exponent.                          The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is not a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The function is not a power function. Indeed, the base of the power expression is constant at , meanwhile the exponent varies.      "
},
{
  "id": "sec_4_4-4-6",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-6",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Body mass index (BMI) is an easy screening method for weight category underweight, healthy weight, overweight, and obesity. BMI is calculated as follows:   A person who weighs 170 lb may fall in any of the above weight categories it depends on their height. Let denote body mass index of a person who weighs 170 lb and whose height is . Then, according to the formula, Note that with the weight fixed at 170 lb, body mass index is a power function of height: . (In terms of proportionality, BMI is inversely proportional to the square of height.) The obese category is defined as BMI of 30.0 or above. The normal weight category corresponds to BMI between 18.5 and 24.9.  Find the height at and below which a person weighing 170 lb is obese.    We want to find such that : After multiplying both sides by and dividing by 30, then which gives: Since in our problem has to be positive, the solution is: At the height inches and below a person weighing 170 lb is obese.  Note that when increases decreases as the denominator of the expression becomes larger. On the other hand, when gets smaller, gets larger. Hence, every person shorter than inches who weighs 170 lb is also obese.   "
},
{
  "id": "sec_4_4-6-2",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-6-2",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Which of the functions below are power functions? Those which are, rewrite in standard form . Identify the coefficient and the exponent.                          The function is a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The coefficient is and the exponent is .    The function is a power function: The coefficient is and the exponent is .    The function is a power function as well. Using rules of exponents for arbitrary exponents and properties of the square root, we can rewrite:     The coefficient is and the exponent is .      "
},
{
  "id": "sec_4_4-6-3",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-6-3",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Body surface area (BSA) is the total surface area of the human body. The body surface area is used in many measurements in medicine, including the calculation of drug dosages and the amount of fluids to be administered intravenously. There are several accepted formulas to calculate BSA. One of the most commonly used is the Du Bois formula: where is weight in kilograms (kg) and is height in centimeters (cm). The formula gives BSA in square meters, .     Calculate BSA of a female who stands 158 cm tall and weighs 60 kg. Give units with your answer.    Let weight be fixed at 70 kg. Then BSA depends on height only— with weight fixed at 70, BSA is a function of only. Denote this function by . Find a formula for . Is it a power function? If yes, identify the coefficient and the exponent.    Use your formula for to calculate BSA for a female that weighs 70 kg and is 158 cm tall. Give units with your answer.          We want to calculate BSA for and . We substitute the values into the Du Bois formula: The total body surface area of a person who weighs kg and is cm tall is .    Fix . Then BSA as a function of is:  is a power function of with the coefficient and exponent .    BSA of a female who weighs kg and is cm tall is . The total body surface area of a person who weighs kg and is cm tall is .      "
},
{
  "id": "exercise_4_4_1",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_4_2",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_4_3",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_4_4",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "exercise_4_4_5",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "exercise_4_4_6",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "exercise_4_4_7",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Four power functions are graphed below, where is a negative integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:    is odd; is positive.  is even; is negative.  is odd; is negative.  is even; is positive.     "
},
{
  "id": "exercise_4_4_8",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the right.   "
},
{
  "id": "exercise_4_4_9",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the left.   "
},
{
  "id": "exercise_4_4_10",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Below you see graphs of the functions , , and . Decide which is which.   A short description.      Graph A is , graph B is , and graph C is .   "
},
{
  "id": "exercise_4_4_11",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Find a formula for a power function given numerically by:                             "
},
{
  "id": "exercise_4_4_12",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Find a formula for a power function given numerically by:               undefined               "
},
{
  "id": "exercise_4_4_13",
  "level": "2",
  "url": "sec_4_4.html#exercise_4_4_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Consider a pendulum depicted below Modified from a public domain image at https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 .   A short description.   When the pendulum is displaced sideways from its resting position called the equilibrium position the force due to gravity will cause the pendulum to oscillate back and forth about the equilibrium position. The time, , needed to execute one full cycle a left swing and the right swing is called the pendulum's period. The period depends on the length of the pendulum https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 and the local acceleration due to gravity :      With fixed, is a power function of ? In other words, is ? If yes, find the coefficient and the exponent.    yes; where the coefficient is and the exponent is .      On the surface of the Earth, the acceleration due to gravity, , is equal to where m stands for meters. Calculate the period of a pendulum of length that happily oscillates in Kingston, RI.    approximately seconds.      An astronaut is standing on the surface of a faraway asteroid wondering about the acceleration due to gravity on the asteroid. The astronaut has a watch and a pendulum whose length is . The astronaut measures the period of the pendulum which turns out to be seconds. What is the acceleration due to gravity on the asteroid?    approximately .    "
},
{
  "id": "sec_5_1",
  "level": "1",
  "url": "sec_5_1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Exponential Functions: Practical Meaning",
  "body": " Exponential Functions: Practical Meaning    After completing this section, you should be able to do the following.     State the definition of an exponential function and identify its initial value and growth factor.    Convert between the growth factor and the percent growth (or decay) rate of an exponential function.    Apply exponential functions to model real-life growth and decay processes, such as compound interest, population growth, and radioactive decay.      Linear functions , which you studied in Chapter 2, change by a constant amount  per unit change in . Exponential functions change by a constant factor .    You deposit into a savings account that pays interest annually. Let be your balance after years.     What are , , , and ?    Find a formula for the function .    What is your balance after years?          Your initial deposit was made at time , so is the amount of the initial deposit.  After year, the bank adds interest on your initial deposit to your balance. Since 5\\% of can be calculated by computing , your balance after year is Since , This means that during the first year, your savings account earned in interest ( of ).  At the end of the second year, the bank will add of to your account the interest from the first year is now earning interest, too! Equivalently, the bank will multiply by . Hence:   Notice that . So during the second year your account earned in interest, which is of .  The amount of money by which your balance increases each year is not constant; but the factor by which it increases is always , which corresponds to a increase. To see a clear pattern, observe that since : Similarly:   Substituting , we get . Your balance after years is .    Each year your current balance is multiplied by the factor . After years, your initial balance will be multiplied times by : So gives your balance after years.    Using the latter formula, we calculate . Your balance after years is .       A function of the form , where the independent variable is in the exponent, is called an exponential function .   Exponential Function   Let and be given constants with , , and . Then the function: is called an exponential function with the base (also called the growth factor ) and initial value .    The function of is an exponential function with the base or equivalently growth factor and initial value .  Notice that for any exponential function , as for any . This means is always the value of an exponential function at , hence the name initial value .  Exponential functions are used very often to model real-life processes of exponential growth and exponential decay.    Exponential Growth  If the base (growth factor) is greater than , the exponential function is increasing. For every unit change in , the current value of the function is multiplied by the factor , so the value increases.  This is the case for the function in since ; the growth of your savings account balance is exponential.  Whenever is greater than , then for some positive number we can write   The constant , when expressed as a percentage, is called the percent growth rate . For , since , the percent growth rate is , or : the percentage of the current balance that is added to your account every year.  Exponential functions are often used to model population growth for populations: human populations, animal populations, or populations of bacteria or insects in laboratory experiments.  Bacteria, which are one-cell organisms, reproduce by each cell dividing into two daughter cells with a frequency that depends on the kind of bacteria. Such a population grows slowly at first when the population consists of a small number of bacteria, and faster and faster with a larger and larger number of bacteria ready to divide. It is reasonable to expect that the population will grow not by a constant number of bacteria per unit of time but by a constant percentage of its current size.  In other words, we expect the population to grow exponentially.    A population of Escherichia coli (E. coli) bacteria in nutrient-rich laboratory conditions grows by 3.53 percent per minute https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/, accessed: 6\/26\/20 . Let be the number of bacteria minutes after the experiment began and suppose that at , there are bacteria.     What is the percent growth rate? What is the growth factor? Write a formula for .    How many bacteria are there at ? At ? At ?          Since the population increases by a constant percent, is an exponential function: . The initial amount is . Every minute the population increases by of its current size, so the percent growth rate is or equivalently . The growth factor is . Hence:     We use the formula obtained in (a) and calculate:   You may notice that the E. coli population approximately doubles during the first minutes, then doubles again during the next minutes, and again after more minutes. This is not a coincidence. Processes of exponential growth have what we call a doubling time ; that is, the time needed for the quantity to double. We will cover this in depth in Section 5.3.         Exponential Decay  If the base of an exponential function is less than , multiplying by decreases the value; hence the exponential function is decreasing. Commonly, is called the growth factor whether or , even though for there is decay rather than growth. The base can still be written as: for some number . However, when , the number is negative. We still call the percent growth rate . This terminology is counterintuitive, although one can argue that a negative growth rate means the quantity is exhibiting the opposite of growth that is, it is exhibiting decay.  Many real-life processes are modeled by decaying exponential functions, including elimination of a drug from the body and processes of radioactive decay.    The common antianxiety medication Diazepam is eliminated from the body at a daily rate of . Suppose that a patient takes a one-time dose of mg of Diazepam. Let be the amount of Diazepam left in his bloodstream days after the dose. Find a formula for .    The initial amount is . During the first day, of the initial dose is eliminated. Hence: During the second day, of is eliminated: and so on. Each next day we multiply the dose from the day before by . The amount left after days is: Hence, is an exponential function. The growth factor is the daily percent growth rate is , and the initial amount is . The final version of the formula is: Every day of the amount from the day before gets eliminated, so of the amount from the day before stays in the body.  The growth factor is less than and the daily percent growth rate of is negative since the amount is decaying. Often we say that the daily percent decay rate is .  Notice that after days, the patient still has mg in his system more than a half of the initial dose. Such a slow elimination rate causes a medication buildup if a daily dose is taken.    For the sake of convenience, let's summarize the relationship between the growth factor and the percent growth rate .    Let an exponential function be given (increasing or decreasing). Then:      is called the growth factor .    The constant such that is called the percent growth rate or simply the growth rate .    Given , we calculate by taking .    Given , we calculate by taking .       Another common real-life application of exponential functions is in the study of radioactivity. All radioactive isotopes decay and they decay exponentially. Some decay extremely slowly and some decay very quickly. Carbon-14, a radioactive isotope of Carbon used in carbon dating, decays so slowly that it takes thousands of years for half of an initial amount to decay. Iodine-131 used in the treatment of thyroid cancer, decays in a matter of days.    The daily percent decay rate of Iodine-131 is . Let be the amount of Iodine-131, in g, left after days if the initial amount is 10 g.     Find a formula for . What is the growth factor? What is the percent growth rate?    Estimate how long it will take for half of initial amount to decay.          The daily percent decay rate is . Hence, and the growth factor is . The initial amount is 10 g. Hence:     We are looking for such that . At this point, we don't have tools other than trial and error, so let's calculate a few values. Since , then days is a bit too long. And, so days is too short. At days, we have which is very close. It will take about days for half of the initial amount to decay.        Note: From now on, we will often use the more common notation as well as the notation .    The following exponential functions describe populations of four towns years after January 1, 2000.                          For each town, identify the initial population at , the growth factor, and the annual percent growth rate. Also determine if the population of each town is increasing or decreasing.       The initial population is people, since , and the growth factor is . The percent growth rate is then . Since the growth factor of is greater than and the growth rate is positive, the population of the town is increasing .    The initial population is people and the growth factor is , so the percent growth rate is . In other words, the decay rate is which implies the population of the town is decreasing .    The initial population is people and the growth factor is , therefore the percent growth rate is . In other words, the decay rate is . The population of the town is decreasing .    The initial population is people and the growth factor is , meaning the percent growth rate is . The growth factor of is greater than and the growth rate is positive so the population of the town is increasing .         Let be the value, in dollars, of an antique lamp years after its purchase. The lamp was purchased for and its value increases by each year.     Find a formula for the function . What kind of function is it?    What is the rate of increase of in dollars per year?    What is the value of the lamp years after its purchase?          The value increases by a fixed amount of dollars each year. Hence, is a linear function:     The slope represents the constant rate of increase of the value in dollars per year.    The value after years is dollars.         Let be the value, in dollars, of an antique lamp, years after its purchase. The lamp was purchased for and its value increases by each year.     Find a formula for the function . What kind of function is it?    What is the growth factor and the annual percent growth rate of ?    What is the value of the lamp years after its purchase?          This time the value of the lamp is increasing not by a constant amount each year but by a constant percentage of the current value each year. An increase of means adding of to itself; that is, multiplying by a constant factor each year. Hence, the function is exponential and equal to:     The growth factor is ; the annual percent growth rate is or .    The value after years is dollars.         Is a given function exponential? If yes, rewrite in the form . Identify and .                               By utilizing appropriate exponent rules, we have . Hence, is exponential with and . Since , in an applied problem we could write .    We can simplify as , so is a power function and therefore not an exponential function. Recall that the independent variable is the base in a power function whereas it is the exponent in an exponential function.     . The function is exponential with and .    Simplifying we get: . The function is exponential with and .          Exponential Growth or Decay   For each of the following, decide if a given exponential function represents a process of exponential growth or decay. For each function identify the initial value and the growth factor.          exponential growth; initial value: ; growth factor:            exponential decay; initial value: ; growth factor:            exponential decay; initial value: ; growth factor:            exponential growth; initial value: ; growth factor:        You deposit dollars into a savings account that pays annually. Let be your balance years later.     Find a formula for in the form .     ; exponential function      Find your balance after years.           Find the growth factor and the percent growth rate of the function .    growth factor: ; growth rate:        Let be the value, in dollars, of an antique desk years after its purchase. The desk was purchased for and its value increases by per year.     Find a formula for the function . What kind of function is it?     ; linear function      What is the rate of increase of in dollars per year?     dollars per year      What is the value of the desk after years?            Let be the value, in dollars, of an antique desk, years after its purchase. The desk was purchased for and its value increases by per year.     Find a formula for the function . What kind of function is it?     ; exponential function      What is the growth factor and the percent growth rate of ?    growth factor: ; growth rate:       What is the value of the desk after years?            Let be the population of a town years after the year . The population was people in , that is, at , and it has been increasing by people each year.     Write a formula for the function . What kind of function is it?     ; linear function      What is the rate of increase of the population in people per year?     people per year       Let be the population of a town years after the year . The population was people in , that is, at , and it has been increasing by the factor each year.     Write a formula for the function . What kind of function is it?     ; exponential function      What is the growth factor and the annual percent growth rate of the population?    growth factor: ; growth rate:        A biologist studies the effects of three different nutrients, , , and , on the growth of a particular kind of bacterium. hours after the experiment began, the number of bacteria in the culture fed nutrient is , the number of bacteria in the culture fed nutrient is , the number of bacteria in the culture fed nutrient is . The biologist observes that the functions , and are given by the following formulas:      Which of the nutrients stimulates growth of the bacteria the most? What is the hourly percent growth rate of the culture fed that nutrient?    nutrient b;       One of the nutrients proves toxic to the bacterium. Which one is it? What is the percent growth rate of the culture fed that nutrient?    nutrient c;        Following a dose of mg, a medication leaves a patient's body at an hourly percent rate of .     Write a formula for the amount of the medication, in mg, left in the body hours after the dose. What is the growth factor of ?     ; growth factor:       How much of the medication remains in the body after hours?    approximately mg       Cesium-137, a radioactive isotope of Cesium, decays very slowly. Let mg of Cesium-137 be present initially and let be the amount, in mg, remaining after years. Then:      What is the growth factor of Cesium-137?           What is the percent growth rate?           How much Cesium-137 remains after years?    approximately mg      Simplifying Exponential Functions   For each of the following, decide whether a given function is exponential. If yes, rewrite the function in the form . Identify the initial value, the growth factor, and decide if the function is increasing or decreasing. Round off your answers to four decimal places.           ; initial value: ; growth factor: ; decreasing            ; initial value: ; growth factor: ; increasing           Not an exponential function.            ; initial value: ; growth factor: ; increasing            ; initial value: ; growth factor: ; increasing            ; initial value: ; growth factor: ; decreasing      "
},
{
  "id": "sec_5_1-2",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of an exponential function and identify its initial value and growth factor.    Convert between the growth factor and the percent growth (or decay) rate of an exponential function.    Apply exponential functions to model real-life growth and decay processes, such as compound interest, population growth, and radioactive decay.    "
},
{
  "id": "example-ch5-savings",
  "level": "2",
  "url": "sec_5_1.html#example-ch5-savings",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  You deposit into a savings account that pays interest annually. Let be your balance after years.     What are , , , and ?    Find a formula for the function .    What is your balance after years?          Your initial deposit was made at time , so is the amount of the initial deposit.  After year, the bank adds interest on your initial deposit to your balance. Since 5\\% of can be calculated by computing , your balance after year is Since , This means that during the first year, your savings account earned in interest ( of ).  At the end of the second year, the bank will add of to your account the interest from the first year is now earning interest, too! Equivalently, the bank will multiply by . Hence:   Notice that . So during the second year your account earned in interest, which is of .  The amount of money by which your balance increases each year is not constant; but the factor by which it increases is always , which corresponds to a increase. To see a clear pattern, observe that since : Similarly:   Substituting , we get . Your balance after years is .    Each year your current balance is multiplied by the factor . After years, your initial balance will be multiplied times by : So gives your balance after years.    Using the latter formula, we calculate . Your balance after years is .      "
},
{
  "id": "sec_5_1-3-4",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-3-4",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Exponential Function.",
  "body": " Exponential Function   Let and be given constants with , , and . Then the function: is called an exponential function with the base (also called the growth factor ) and initial value .   "
},
{
  "id": "example-ch5-ecoli",
  "level": "2",
  "url": "sec_5_1.html#example-ch5-ecoli",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  A population of Escherichia coli (E. coli) bacteria in nutrient-rich laboratory conditions grows by 3.53 percent per minute https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/, accessed: 6\/26\/20 . Let be the number of bacteria minutes after the experiment began and suppose that at , there are bacteria.     What is the percent growth rate? What is the growth factor? Write a formula for .    How many bacteria are there at ? At ? At ?          Since the population increases by a constant percent, is an exponential function: . The initial amount is . Every minute the population increases by of its current size, so the percent growth rate is or equivalently . The growth factor is . Hence:     We use the formula obtained in (a) and calculate:   You may notice that the E. coli population approximately doubles during the first minutes, then doubles again during the next minutes, and again after more minutes. This is not a coincidence. Processes of exponential growth have what we call a doubling time ; that is, the time needed for the quantity to double. We will cover this in depth in Section 5.3.      "
},
{
  "id": "sec_5_1-5-4",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-4",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  The common antianxiety medication Diazepam is eliminated from the body at a daily rate of . Suppose that a patient takes a one-time dose of mg of Diazepam. Let be the amount of Diazepam left in his bloodstream days after the dose. Find a formula for .    The initial amount is . During the first day, of the initial dose is eliminated. Hence: During the second day, of is eliminated: and so on. Each next day we multiply the dose from the day before by . The amount left after days is: Hence, is an exponential function. The growth factor is the daily percent growth rate is , and the initial amount is . The final version of the formula is: Every day of the amount from the day before gets eliminated, so of the amount from the day before stays in the body.  The growth factor is less than and the daily percent growth rate of is negative since the amount is decaying. Often we say that the daily percent decay rate is .  Notice that after days, the patient still has mg in his system more than a half of the initial dose. Such a slow elimination rate causes a medication buildup if a daily dose is taken.   "
},
{
  "id": "sec_5_1-5-6",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-6",
  "type": "Result",
  "number": "5.1.5",
  "title": "",
  "body": "  Let an exponential function be given (increasing or decreasing). Then:      is called the growth factor .    The constant such that is called the percent growth rate or simply the growth rate .    Given , we calculate by taking .    Given , we calculate by taking .      "
},
{
  "id": "sec_5_1-5-8",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-8",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  The daily percent decay rate of Iodine-131 is . Let be the amount of Iodine-131, in g, left after days if the initial amount is 10 g.     Find a formula for . What is the growth factor? What is the percent growth rate?    Estimate how long it will take for half of initial amount to decay.          The daily percent decay rate is . Hence, and the growth factor is . The initial amount is 10 g. Hence:     We are looking for such that . At this point, we don't have tools other than trial and error, so let's calculate a few values. Since , then days is a bit too long. And, so days is too short. At days, we have which is very close. It will take about days for half of the initial amount to decay.      "
},
{
  "id": "sec_5_1-5-10",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-10",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  The following exponential functions describe populations of four towns years after January 1, 2000.                          For each town, identify the initial population at , the growth factor, and the annual percent growth rate. Also determine if the population of each town is increasing or decreasing.       The initial population is people, since , and the growth factor is . The percent growth rate is then . Since the growth factor of is greater than and the growth rate is positive, the population of the town is increasing .    The initial population is people and the growth factor is , so the percent growth rate is . In other words, the decay rate is which implies the population of the town is decreasing .    The initial population is people and the growth factor is , therefore the percent growth rate is . In other words, the decay rate is . The population of the town is decreasing .    The initial population is people and the growth factor is , meaning the percent growth rate is . The growth factor of is greater than and the growth rate is positive so the population of the town is increasing .      "
},
{
  "id": "sec_5_1-5-11",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-11",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": "  Let be the value, in dollars, of an antique lamp years after its purchase. The lamp was purchased for and its value increases by each year.     Find a formula for the function . What kind of function is it?    What is the rate of increase of in dollars per year?    What is the value of the lamp years after its purchase?          The value increases by a fixed amount of dollars each year. Hence, is a linear function:     The slope represents the constant rate of increase of the value in dollars per year.    The value after years is dollars.      "
},
{
  "id": "sec_5_1-5-12",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-12",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": "  Let be the value, in dollars, of an antique lamp, years after its purchase. The lamp was purchased for and its value increases by each year.     Find a formula for the function . What kind of function is it?    What is the growth factor and the annual percent growth rate of ?    What is the value of the lamp years after its purchase?          This time the value of the lamp is increasing not by a constant amount each year but by a constant percentage of the current value each year. An increase of means adding of to itself; that is, multiplying by a constant factor each year. Hence, the function is exponential and equal to:     The growth factor is ; the annual percent growth rate is or .    The value after years is dollars.      "
},
{
  "id": "sec_5_1-5-13",
  "level": "2",
  "url": "sec_5_1.html#sec_5_1-5-13",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Is a given function exponential? If yes, rewrite in the form . Identify and .                               By utilizing appropriate exponent rules, we have . Hence, is exponential with and . Since , in an applied problem we could write .    We can simplify as , so is a power function and therefore not an exponential function. Recall that the independent variable is the base in a power function whereas it is the exponent in an exponential function.     . The function is exponential with and .    Simplifying we get: . The function is exponential with and .      "
},
{
  "id": "exercise-5_1_1",
  "level": "2",
  "url": "sec_5_1.html#exercise-5_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       exponential growth; initial value: ; growth factor:    "
},
{
  "id": "exercise_5_1_2",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       exponential decay; initial value: ; growth factor:    "
},
{
  "id": "exercise_5_1_3",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       exponential decay; initial value: ; growth factor:    "
},
{
  "id": "exercise-5_1_4",
  "level": "2",
  "url": "sec_5_1.html#exercise-5_1_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       exponential growth; initial value: ; growth factor:    "
},
{
  "id": "exercise_5_1_5",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  You deposit dollars into a savings account that pays annually. Let be your balance years later.     Find a formula for in the form .     ; exponential function      Find your balance after years.           Find the growth factor and the percent growth rate of the function .    growth factor: ; growth rate:     "
},
{
  "id": "exercise_5_1_6",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let be the value, in dollars, of an antique desk years after its purchase. The desk was purchased for and its value increases by per year.     Find a formula for the function . What kind of function is it?     ; linear function      What is the rate of increase of in dollars per year?     dollars per year      What is the value of the desk after years?         "
},
{
  "id": "exercise_5_1_7",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Let be the value, in dollars, of an antique desk, years after its purchase. The desk was purchased for and its value increases by per year.     Find a formula for the function . What kind of function is it?     ; exponential function      What is the growth factor and the percent growth rate of ?    growth factor: ; growth rate:       What is the value of the desk after years?         "
},
{
  "id": "exercise_5_1_8",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Let be the population of a town years after the year . The population was people in , that is, at , and it has been increasing by people each year.     Write a formula for the function . What kind of function is it?     ; linear function      What is the rate of increase of the population in people per year?     people per year    "
},
{
  "id": "exercise_5_1_9",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Let be the population of a town years after the year . The population was people in , that is, at , and it has been increasing by the factor each year.     Write a formula for the function . What kind of function is it?     ; exponential function      What is the growth factor and the annual percent growth rate of the population?    growth factor: ; growth rate:     "
},
{
  "id": "exercise_5_1_10",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A biologist studies the effects of three different nutrients, , , and , on the growth of a particular kind of bacterium. hours after the experiment began, the number of bacteria in the culture fed nutrient is , the number of bacteria in the culture fed nutrient is , the number of bacteria in the culture fed nutrient is . The biologist observes that the functions , and are given by the following formulas:      Which of the nutrients stimulates growth of the bacteria the most? What is the hourly percent growth rate of the culture fed that nutrient?    nutrient b;       One of the nutrients proves toxic to the bacterium. Which one is it? What is the percent growth rate of the culture fed that nutrient?    nutrient c;     "
},
{
  "id": "exercise_5_1_11",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Following a dose of mg, a medication leaves a patient's body at an hourly percent rate of .     Write a formula for the amount of the medication, in mg, left in the body hours after the dose. What is the growth factor of ?     ; growth factor:       How much of the medication remains in the body after hours?    approximately mg    "
},
{
  "id": "exercise_5_1_12",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Cesium-137, a radioactive isotope of Cesium, decays very slowly. Let mg of Cesium-137 be present initially and let be the amount, in mg, remaining after years. Then:      What is the growth factor of Cesium-137?           What is the percent growth rate?           How much Cesium-137 remains after years?    approximately mg    "
},
{
  "id": "exercise-5_1_13",
  "level": "2",
  "url": "sec_5_1.html#exercise-5_1_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; initial value: ; growth factor: ; decreasing   "
},
{
  "id": "exercise_5_1_14",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        ; initial value: ; growth factor: ; increasing   "
},
{
  "id": "exercise_5_1_15",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "       Not an exponential function.   "
},
{
  "id": "exercise_5_1_16",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "        ; initial value: ; growth factor: ; increasing   "
},
{
  "id": "exercise_5_1_17",
  "level": "2",
  "url": "sec_5_1.html#exercise_5_1_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "        ; initial value: ; growth factor: ; increasing   "
},
{
  "id": "exercise-5_1_18",
  "level": "2",
  "url": "sec_5_1.html#exercise-5_1_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "        ; initial value: ; growth factor: ; decreasing   "
},
{
  "id": "sec_5_2",
  "level": "1",
  "url": "sec_5_2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Graphs of Exponential Functions",
  "body": " Graphs of Exponential Functions    After completing this section, you should be able to do the following.     Sketch the graph of an exponential function given its formula or a table of values.    Identify the initial value and increasing or decreasing behavior from the graph of an exponential function.    Determine the formula of an exponential function from its graph.     In the previous section we looked at algebraic properties of exponential functions and applied examples involving exponential functions. In this section we study graphs of exponential functions.  The graph of an exponential function depends on whether the growth factor is greater than or less than .    Graph the function of that describes the population of E. coli bacteria in a laboratory culture minutes after the experiment began: The table of values for taken every minutes is as follows:    (minutes)          ( of bacteria)          The graph reflecting the data is:     The function increases, and increasingly fast: the population of E. coli bacteria grows faster and faster over time.  Observe that we drew the graph only for as the experiment begins at , even though the function is defined for all .      Graph the function that shows the amount of Diazepam, in mg, left in the body days after a single mg dose.  Since the growth factor is less than , is a decreasing function. Here are the values of for along with the corresponding graph:    (days)          (mg)             The amount by which the function is decreasing daily is less and less as time goes on. The function decreases daily by of the current amount, so the smaller the current amount the smaller the decrease.    In general, the shape of the graph of an exponential function is different for the base and for :      If , the function is increasing its graph is climbing as it is traced from left to right. If , the function is decreasing its graph is falling as it is traced from left to right. In both cases the values of are always positive, so the graph is entirely above the -axis. The -intercept is always equal to the initial value .    Graph the function   The initial value is and the growth factor (base) is . Since is greater than , the graph is increasing:     Note that for , and increases as increases: For , and becomes smaller and smaller as becomes more and more negative : In fact, as becomes more and more negative , becomes arbitrarily close to without ever reaching it the graph approaches the -axis but never crosses it. We say that the -axis is a horizontal asymptote of the function .      Graph the function .  Note that once again but, in contrast to the last example, the growth factor . As , the graph is decreasing:     Observe that for , and decreases as increases: This means the -axis is a horizontal asymptote of the function .  On the other side, as becomes more and more negative , becomes larger and larger:       For each graph shown below, find the formula for the function in the form :          We have to find the initial value and the growth factor . Since is always the -intercept, we have and so . To find , note that the point is on the graph so the equation must hold. That is, which gives . Thus, the function corresponding to the graph (a) is .  In the second graph, the initial value is . By using the point , we can set up an equation to solve for : This means .      Find a function whose graph contains points and .    Observe that neither given point is the vertical intercept of the function, so unlike the last examples we do not immediately have . Our starting point is recognizing that is on the graph of and so . Similarly, implies . Therefore, the following two equations must hold: To find and , we can divide these two equations to obtain Now we know that , but is still unknown. Using either of the given point on the graph, we can solve for . Suppose we choose to use then which gives . Thus, .       Complete the table of values below and use it to graph the exponential function in the interval .                                                    Complete the table of values below and use it to graph the exponential function in the interval .                                                    Below you see a graph of an exponential function . What is its initial value ? Is its growth factor greater than or less than ?        ;       Which of the graphs below could be a graph of the function ? Explain your answer!                                    Which of the graphs below could be a graph of the function ? Explain your answer!                                    Find a formula in the form for the exponential function whose graph is given below:              Find a formula in the form for the exponential function whose graph is given below:              Find a function whose graph contains points and .           Find a function whose graph contains points and .           A medication is eliminated from the body at the daily percent rate of . A patient takes a single dose of mg of the medication. Let be the amount, in mg, remaining in the patient's body days after the dose.     Find a formula for the function .           Fill in the missing entries in the following table of values:    (days)         mg             (days)         mg             Use the table to plot the points corresponding to that are on the graph of . Sketch a graph of the function in the coordinate system below.               The number of diagnosed cases of a new virus doubles every week. Let be the number of diagnosed cases weeks after an epidemic began. Here are the measurements during the first weeks:    (weeks)          (cases)             Mark the points corresponding to the data in the table on the graph of the function :              Is the function exponential? If yes, find a formula for and check with the table of values.    Yes;       "
},
{
  "id": "sec_5_2-2",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Sketch the graph of an exponential function given its formula or a table of values.    Identify the initial value and increasing or decreasing behavior from the graph of an exponential function.    Determine the formula of an exponential function from its graph.    "
},
{
  "id": "sec_5_2-5",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-5",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": "  Graph the function of that describes the population of E. coli bacteria in a laboratory culture minutes after the experiment began: The table of values for taken every minutes is as follows:    (minutes)          ( of bacteria)          The graph reflecting the data is:     The function increases, and increasingly fast: the population of E. coli bacteria grows faster and faster over time.  Observe that we drew the graph only for as the experiment begins at , even though the function is defined for all .   "
},
{
  "id": "sec_5_2-6",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-6",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Graph the function that shows the amount of Diazepam, in mg, left in the body days after a single mg dose.  Since the growth factor is less than , is a decreasing function. Here are the values of for along with the corresponding graph:    (days)          (mg)             The amount by which the function is decreasing daily is less and less as time goes on. The function decreases daily by of the current amount, so the smaller the current amount the smaller the decrease.   "
},
{
  "id": "fig_5_2_exp_fun",
  "level": "2",
  "url": "sec_5_2.html#fig_5_2_exp_fun",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "   "
},
{
  "id": "sec_5_2-10",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-10",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  Graph the function   The initial value is and the growth factor (base) is . Since is greater than , the graph is increasing:     Note that for , and increases as increases: For , and becomes smaller and smaller as becomes more and more negative : In fact, as becomes more and more negative , becomes arbitrarily close to without ever reaching it the graph approaches the -axis but never crosses it. We say that the -axis is a horizontal asymptote of the function .   "
},
{
  "id": "sec_5_2-11",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-11",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  Graph the function .  Note that once again but, in contrast to the last example, the growth factor . As , the graph is decreasing:     Observe that for , and decreases as increases: This means the -axis is a horizontal asymptote of the function .  On the other side, as becomes more and more negative , becomes larger and larger:    "
},
{
  "id": "sec_5_2-12",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-12",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  For each graph shown below, find the formula for the function in the form :          We have to find the initial value and the growth factor . Since is always the -intercept, we have and so . To find , note that the point is on the graph so the equation must hold. That is, which gives . Thus, the function corresponding to the graph (a) is .  In the second graph, the initial value is . By using the point , we can set up an equation to solve for : This means .   "
},
{
  "id": "sec_5_2-13",
  "level": "2",
  "url": "sec_5_2.html#sec_5_2-13",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "  Find a function whose graph contains points and .    Observe that neither given point is the vertical intercept of the function, so unlike the last examples we do not immediately have . Our starting point is recognizing that is on the graph of and so . Similarly, implies . Therefore, the following two equations must hold: To find and , we can divide these two equations to obtain Now we know that , but is still unknown. Using either of the given point on the graph, we can solve for . Suppose we choose to use then which gives . Thus, .   "
},
{
  "id": "exercise_5_2_1",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_1",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "  Complete the table of values below and use it to graph the exponential function in the interval .                                                 "
},
{
  "id": "exercise_5_2_2",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_2",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "  Complete the table of values below and use it to graph the exponential function in the interval .                                                 "
},
{
  "id": "exercise_5_2_3",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_3",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "  Below you see a graph of an exponential function . What is its initial value ? Is its growth factor greater than or less than ?        ;    "
},
{
  "id": "exercise_5_2_4",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_4",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": "  Which of the graphs below could be a graph of the function ? Explain your answer!                                 "
},
{
  "id": "exercise_5_2_5",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_5",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "",
  "body": "  Which of the graphs below could be a graph of the function ? Explain your answer!                                 "
},
{
  "id": "exercise_5_2_6",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_6",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "",
  "body": "  Find a formula in the form for the exponential function whose graph is given below:           "
},
{
  "id": "exercise_5_2_7",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_7",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "",
  "body": "  Find a formula in the form for the exponential function whose graph is given below:           "
},
{
  "id": "exercise_5_2_8",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_8",
  "type": "Exercise",
  "number": "5.2.8",
  "title": "",
  "body": "  Find a function whose graph contains points and .        "
},
{
  "id": "exercise_5_2_9",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_9",
  "type": "Exercise",
  "number": "5.2.9",
  "title": "",
  "body": "  Find a function whose graph contains points and .        "
},
{
  "id": "exercise_5_2_10",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_10",
  "type": "Exercise",
  "number": "5.2.10",
  "title": "",
  "body": "  A medication is eliminated from the body at the daily percent rate of . A patient takes a single dose of mg of the medication. Let be the amount, in mg, remaining in the patient's body days after the dose.     Find a formula for the function .           Fill in the missing entries in the following table of values:    (days)         mg             (days)         mg             Use the table to plot the points corresponding to that are on the graph of . Sketch a graph of the function in the coordinate system below.            "
},
{
  "id": "exercise_5_2_11",
  "level": "2",
  "url": "sec_5_2.html#exercise_5_2_11",
  "type": "Exercise",
  "number": "5.2.11",
  "title": "",
  "body": "  The number of diagnosed cases of a new virus doubles every week. Let be the number of diagnosed cases weeks after an epidemic began. Here are the measurements during the first weeks:    (weeks)          (cases)             Mark the points corresponding to the data in the table on the graph of the function :              Is the function exponential? If yes, find a formula for and check with the table of values.    Yes;     "
},
{
  "id": "sec_5_3",
  "level": "1",
  "url": "sec_5_3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Exponential Functions Numerically, Modeling",
  "body": " Exponential Functions Numerically, Modeling    After completing this section, you should be able to do the following.     Determine whether a function given by a table of values is exponential.    Find the formula of an exponential function from a table of values.    Use real-world numerical data to construct an exponential model.      How do we recognize that a function given numerically by a table of values is an exponential function? This is an important question in applications. Typically, when you study a real-life process you do not have a formula for a function describing the process ahead of time. You take measurements, tabulate the data, and then you try to find a mathematical model that fits your numerical data.  Fortunately, there is a simple test to check if a numerically given function is exponential.    Consider the exponential function . For a few equally spaced values of , here are the values from the function:                      The values of are equally spaced; that is, the difference between two consecutive values of is constantly equal to : The differences of the corresponding -values are, of course, not equal. If the differences of consecutive values of  were equal , the table would represent a linear function . Instead, the ratios of consecutive values of are equal:   Of course, is an exponential function it matches the form . This example shows that the property of constant ratios between consecutive outputs indicates that a function is exponential.    For every exponential function and equally spaced values of , the ratios of the consecutive values of are equal. The previous example illustrates this point, but it can also be seen from algebraic properties of exponential expressions. Take any exponential function . Consider a few equally spaced values for , denoted by , meaning that where is some constant number. The corresponding -values are , , and so on. The consecutive ratios between -values are: All the ratios are equal to , which is a constant number.   Note: If the values of are spaced by as in that is, the ratios give , the base of the exponential function. If the values are spaced by or any other distance, so that , the ratios between consecutive -values are not equal to !    Which of the functions given below are exponential? Give a formula for each function.  (a)                      (b)                      (c)                      (a) The values of are equally spaced, namely by . We have to check if all ratios between consecutive values of are the same: All ratios are the same. Since , the ratios give us the growth factor . With each increase in by , the current value of the function is multiplied by the constant factor of . The initial value is the value at , so . The table corresponds to the exponential function .  (b) The ratios between consecutive outputs are which are clearly not equal, so the function is not exponential. Observe that the values of the function start at when and then increase by for every unit increase in . This is precisely the definition of a linear function , so table (b) corresponds to .  (c) The ratios between consecutive outputs are which are equal, and the inputs are evenly spaced by , so the function is exponential. The growth factor is and so . The initial value is unknown. Because the value of the function at is known, set up an equation for using, for example, the point from the table. This gives the equation , and so . The function represented by the table (c) is .      Check if is an exponential function. If so, find the formula for .                        The values of are equally spaced by ; that is, . The ratios between consecutive output values are: These ratios are all equal, so is an exponential function.  The initial value is provided from the table as . This means . Now we need to find the growth factor . Is equal to ? No! At each step changes by units, so the current value of is multiplied by twice. To find , use any pair of values from the table to set up an equation. For example, using , then: Remember that has to be positive so rather than . The function is . Using , then . We can also rewrite as , which shows that the values of the function triple every two units of .      Modeling: The Population of Mozambique    The population of Mozambique https:\/\/www.worldometers.info\/world-population\/mozambique-population\/, accessed: 3\/10\/2020 between 2009 and 2014 is given below:    Year          Pop. in millions          Find a function that models Mozambique's population growth in the time period 2009-2014.    To simplify the task, denote by the number of years since 2009 and by the population at time in millions. The table then becomes:                      Populations often increase exponentially so it is reasonable to check if is exponential. To do so, check the ratios between consecutive outputs in the table: When rounded to three decimal places, the ratios are equal so can be reasonably approximated by an exponential function. Because the inputs are evenly spaced by , the corresponding growth factor would be . The initial value is immediately given in the table as . Therefore, the function that approximately models the population growth in Mozambique is   As the growth factor is , the annual percent growth rate is . The model is valid in the time period 2009-2014. If you examine the data given at worldometers.info website, the formula is valid for a longer time interval. The annual percent growth rate remains at approximately between 2005 and 2020.       Exponential Functions   For each of the following data tables, check if the data can possibly correspond to an exponential function or not. If yes, give a formula for the function in the form . Identify the initial value and the growth factor.                           possible exponential function; ; initial value: ; growth factor:                             possible exponential function; ; initial value: ; growth factor:                             not an exponential function                          possible exponential function; ; initial value: ; growth factor:                             not an exponential function      Exponential Functions   For each of the following data tables, check if the data can possibly correspond to an exponential function or not. If yes, give a formula for the function in the form . Give both the exact and the approximate value for the growth factor. Round off to at least three decimal places.                         possible exponential function;                             possible exponential function;       Finding a Function   For each of the following, find a function that corresponds to the data given in each table. Fill in the missing entries.                          ;                            ;        Barometric pressure https:\/\/en.wikipedia.org\/wiki\/Barometric_formula , accessed: 7\/10\/20 the pressure of the air depends on the altitude above sea level. Let be altitude above sea level measured in kilometers. Let be barometric pressure measured in mmHg millimeters of mercury. Here are readings of barometric pressure at different altitudes:    (km)         (mmHg)            Can you see from the data that the function is exponential?    Yes.      What is the barometric pressure, , at sea level?     mmHg      Find a formula for in the form . When calculating , round off to three decimal places.           The summit of Mount Everest is at meters above sea level. What is the barometric pressure at the top of Mount Everest?    approximately mmHg      "
},
{
  "id": "sec_5_3-2",
  "level": "2",
  "url": "sec_5_3.html#sec_5_3-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine whether a function given by a table of values is exponential.    Find the formula of an exponential function from a table of values.    Use real-world numerical data to construct an exponential model.    "
},
{
  "id": "example-ch5-table1",
  "level": "2",
  "url": "sec_5_3.html#example-ch5-table1",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the exponential function . For a few equally spaced values of , here are the values from the function:                      The values of are equally spaced; that is, the difference between two consecutive values of is constantly equal to : The differences of the corresponding -values are, of course, not equal. If the differences of consecutive values of  were equal , the table would represent a linear function . Instead, the ratios of consecutive values of are equal:   Of course, is an exponential function it matches the form . This example shows that the property of constant ratios between consecutive outputs indicates that a function is exponential.   "
},
{
  "id": "sec_5_3-3-6",
  "level": "2",
  "url": "sec_5_3.html#sec_5_3-3-6",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Which of the functions given below are exponential? Give a formula for each function.  (a)                      (b)                      (c)                      (a) The values of are equally spaced, namely by . We have to check if all ratios between consecutive values of are the same: All ratios are the same. Since , the ratios give us the growth factor . With each increase in by , the current value of the function is multiplied by the constant factor of . The initial value is the value at , so . The table corresponds to the exponential function .  (b) The ratios between consecutive outputs are which are clearly not equal, so the function is not exponential. Observe that the values of the function start at when and then increase by for every unit increase in . This is precisely the definition of a linear function , so table (b) corresponds to .  (c) The ratios between consecutive outputs are which are equal, and the inputs are evenly spaced by , so the function is exponential. The growth factor is and so . The initial value is unknown. Because the value of the function at is known, set up an equation for using, for example, the point from the table. This gives the equation , and so . The function represented by the table (c) is .   "
},
{
  "id": "sec_5_3-3-7",
  "level": "2",
  "url": "sec_5_3.html#sec_5_3-3-7",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Check if is an exponential function. If so, find the formula for .                        The values of are equally spaced by ; that is, . The ratios between consecutive output values are: These ratios are all equal, so is an exponential function.  The initial value is provided from the table as . This means . Now we need to find the growth factor . Is equal to ? No! At each step changes by units, so the current value of is multiplied by twice. To find , use any pair of values from the table to set up an equation. For example, using , then: Remember that has to be positive so rather than . The function is . Using , then . We can also rewrite as , which shows that the values of the function triple every two units of .   "
},
{
  "id": "sec_5_3-4-2",
  "level": "2",
  "url": "sec_5_3.html#sec_5_3-4-2",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  The population of Mozambique https:\/\/www.worldometers.info\/world-population\/mozambique-population\/, accessed: 3\/10\/2020 between 2009 and 2014 is given below:    Year          Pop. in millions          Find a function that models Mozambique's population growth in the time period 2009-2014.    To simplify the task, denote by the number of years since 2009 and by the population at time in millions. The table then becomes:                      Populations often increase exponentially so it is reasonable to check if is exponential. To do so, check the ratios between consecutive outputs in the table: When rounded to three decimal places, the ratios are equal so can be reasonably approximated by an exponential function. Because the inputs are evenly spaced by , the corresponding growth factor would be . The initial value is immediately given in the table as . Therefore, the function that approximately models the population growth in Mozambique is   As the growth factor is , the annual percent growth rate is . The model is valid in the time period 2009-2014. If you examine the data given at worldometers.info website, the formula is valid for a longer time interval. The annual percent growth rate remains at approximately between 2005 and 2020.   "
},
{
  "id": "exercise-5_3_1",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "                        possible exponential function; ; initial value: ; growth factor:    "
},
{
  "id": "exercise_5_3_2",
  "level": "2",
  "url": "sec_5_3.html#exercise_5_3_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "                        possible exponential function; ; initial value: ; growth factor:    "
},
{
  "id": "exercise_5_3_3",
  "level": "2",
  "url": "sec_5_3.html#exercise_5_3_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "                        not an exponential function   "
},
{
  "id": "exercise_5_3_4",
  "level": "2",
  "url": "sec_5_3.html#exercise_5_3_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "                      possible exponential function; ; initial value: ; growth factor:    "
},
{
  "id": "exercise-5_3_5",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "                        not an exponential function   "
},
{
  "id": "exercise-5_3_6",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "                      possible exponential function;    "
},
{
  "id": "exercise-5_3_7",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "                        possible exponential function;    "
},
{
  "id": "exercise-5_3_8",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "                       ;    "
},
{
  "id": "exercise-5_3_9",
  "level": "2",
  "url": "sec_5_3.html#exercise-5_3_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "                       ;    "
},
{
  "id": "exercise_5_3_10",
  "level": "2",
  "url": "sec_5_3.html#exercise_5_3_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Barometric pressure https:\/\/en.wikipedia.org\/wiki\/Barometric_formula , accessed: 7\/10\/20 the pressure of the air depends on the altitude above sea level. Let be altitude above sea level measured in kilometers. Let be barometric pressure measured in mmHg millimeters of mercury. Here are readings of barometric pressure at different altitudes:    (km)         (mmHg)            Can you see from the data that the function is exponential?    Yes.      What is the barometric pressure, , at sea level?     mmHg      Find a formula for in the form . When calculating , round off to three decimal places.           The summit of Mount Everest is at meters above sea level. What is the barometric pressure at the top of Mount Everest?    approximately mmHg    "
},
{
  "id": "sec_5_4",
  "level": "1",
  "url": "sec_5_4.html",
  "type": "Section",
  "number": "5.4",
  "title": "Doubling Time and Half-Life",
  "body": " Doubling Time and Half-Life    After completing this section, you should be able to do the following.     State the definitions of doubling time and half-life for exponential growth and decay.    Identify the doubling time or half-life of an exponential function written in terms of powers of or .    Rewrite an exponential function in the form to determine the factor by which a quantity changes over a given time period .      In this section we introduce two important concepts associated with exponential processes: the doubling time of a process of exponential growth and the half-life of a process of exponential decay.    The Doubling Time  In we looked at a population of E. coli bacteria that grows exponentially according to the formula where is measured in minutes and is the number of bacteria. We noticed that the population doubles every minutes: For every exponentially increasing function the time needed for the current value to double is constant, and it is called the doubling time .   Doubling Time   Let , , be an increasing exponential function. The time needed for the value to double is called the doubling time of the function .      Show algebraically that every increasing exponential quantity , , has a fixed doubling time; that is, it always takes the same amount of time for the quantity to double.    Let be the time after which the initial amount doubles. In other words, after time , the value is twice the initial value : Dividing both sides by , the time is such that After another units of time, the quantity doubles again and so In fact, no matter what time we start from, after units of time the quantity will double.    It is important to realize that only exponentially increasing quantities have a constant doubling time. Processes modeled by different functions do not, as illustrated below.    Show that the function does not have a fixed doubling time.    The initial value is . How much time does it take for the value to double? We need to find a positive number such that ; that is, to solve the equation A solution to this equation is ; that is, it takes units of time for the initial amount to double. How long does it take for the quantity to double again from to ? The solution to is .  So it took units of time for to double from to , but units of time after that to double again from to . The time needed for to double is not constant, and so does not have a fixed doubling time.      You deposit into a savings account that pays interest annually. Let be your balance after years. As we saw in Section 5.1, the formula for is How long will it take for your money to double?    The balance function is an increasing exponential function. To find its doubling time, set equal to twice its initial value and solve for . That is, Dividing both sides by results in This equation cannot be solved algebraically as the unknown, , is in the exponent. Solving such equations requires logarithms the topic of Chapter 6.  However, an approximate solution can be found by either graphing the function and then finding the point on the graph where , or by evaluating for a few suitable values of :                    This shows that it takes approximately years for your initial deposit to double to . That is, the doubling time is approximately years. After approximately another years, the balance doubles again, and so on. After years, your balance will be roughly .    If the base of an increasing exponential function is written in terms of powers of , the doubling time can be found algebraically without logarithms.    The value , in dollars, of an investment years after an initial amount of was invested is given by      How much will the investment be worth after , , and years? What pattern do you observe unfolding?    What is the doubling time of the investment?    Write the expression for in the form . Identify the growth factor and the annual percent growth rate.          The following gives the value of the investment after , , and years: Therefore, the value of the investment doubles every years.    As we saw in (a), the doubling time of is years.    To rewrite in the form , observe that Using a calculator, , rounded to three decimal places. Writing in the form , The growth factor is , and the annual percent growth rate is .       As the example above illustrates, if an exponential function is written in terms of powers of , identifying the doubling time is straightforward.    For an exponential function written in the form: the doubling time is . The growth factor is       The Half-Life  A decreasing exponential function , , doesn't have a doubling time it never doubles as it is decreasing. Instead, for an exponentially decaying quantity, the time needed for the quantity to be reduced by half is constant, and called the half-life . If we denote the half-life by , then after time the initial value is reduced by half. After another units of time it is halved again, and so on. Half-life is exceptionally important in pharmacology. The leaflets that come with medications always give the half-life the time needed for half of the medication to be eliminated from your body following a single dose.   Half-Life   Let , , be a decreasing exponential function. The time needed for the value to be reduced by half is called the half-life of the function .    Similarly, without knowledge of logarithms we cannot algebraically solve for the half-life for an exponential function unless the base of the function is expressed in terms of powers of .    Let be the amount of a medication in a patient's bloodstream, in mg, hours after a single dose of mg.     How much of the medication is left in the patient's bloodstream after hours? hours? hours? What pattern do you observe unfolding? What is the half-life of the medication?    Rewrite in the form for constants and . Give the growth factor and the hourly percent growth rate.          We calculate: Every hours the amount of the medication left in the bloodstream is cut in half. Hence, the half-life of the medication is hours.    The formula can be alternatively written as . Using , rounded to three decimal places, then The growth factor is . The hourly percent growth rate is as . We can also say that the hourly percent decay rate is .       As the example above illustrates, if an exponential function is written in terms of powers of , identifying the half-life is straightforward.    For an exponential function written in the form: the half-life is . The growth factor is       A patient takes a mg tablet of a common anti-heartburn medication Famotidine. The amount of the medication in the bloodstream, , in mg, hours after the dose, decays exponentially with half-life hours.     Find a formula for .    Find the growth factor and the percent decay rate.          The initial amount is and the half-life is hours. The formula for , in terms of powers of , is     To rewrite in the form , notice that: Hence, the growth factor (rounded to three decimal places), so . The percent growth rate is .         Additional Observations and Examples    Let be the population of a village, in the number of people, years after the village was founded. The population that was people initially triples every years.     Find a formula for .    Write in the form .          By letting , the population is multiplied by the factor of every year. This is not correct! To have the population multiplied by every years, we should instead use Observe that , , and so on. This indicates that the population triples every years, as desired.    We can rewrite as Or, by using , then        The previous example gives insight into the following result.    For an exponential function of the form then is the factor by which the quantity increases or decreases every units of time.      Find a formula for the value of an investment initially worth that grows every years.    A quantity grows by when it is multiplied by the factor of . Hence, is multiplied by every years. By the previous result, To get in the form , note that:        Finding the Doubling Time   For each exponential function, find the initial amount (in units of ) and the doubling time (in units of ).          initial amount: ; doubling time:            initial amount: ; doubling time:            initial amount: ; doubling time:            initial amount: ; doubling time:       Finding the Half-Life   For each exponential function, find the initial amount (in units of ) and the half-life (in units of ).          initial amount: ; half-life:            initial amount: ; half-life:            initial amount: ; half-life:            initial amount: ; half-life:       Doubling Time & Half-Life Formulas   For each of the following, write a formula for an exponential function in the form that describes the given scenario. Then convert the function to the form .     The population of a town begins with people at and doubles every years.           The population of a town begins with people at and triples every years.           The initial amount of mg of a radioactive element is halved every days.           The initial amount of mg of a radioactive element is cut by one-third every months.           Estimating Doubling Time & Half-Life   For each of the following, estimate the half-life or the doubling time whichever applies.                               doubling time:                                 half-life: approximately        The graph of an exponential function below shows the population of bacteria, , in a laboratory experiment minutes after the experiment began.        What is the initial amount, , of bacteria?     bacteria      Estimate the doubling time of the population.     minutes      Write a formula for in the form . Then rewrite the formula in the form . Round off to four decimal places. What is the percent growth rate?     ; growth rate:        The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is an exponential function and its graph is given below:        Estimate the amount of caffeine, , absorbed by the body from a cup of coffee.     mg      Estimate the half-life of caffeine.     hours      Write a formula for in the form . Rewrite the formula in the form . Round off to three decimal places. What is the percent growth rate?     ; growth rate:       "
},
{
  "id": "sec_5_4-2",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-2",
  "type": "Objectives",
  "number": "5.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definitions of doubling time and half-life for exponential growth and decay.    Identify the doubling time or half-life of an exponential function written in terms of powers of or .    Rewrite an exponential function in the form to determine the factor by which a quantity changes over a given time period .    "
},
{
  "id": "sec_5_4-4-3",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-3",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Doubling Time.",
  "body": " Doubling Time   Let , , be an increasing exponential function. The time needed for the value to double is called the doubling time of the function .   "
},
{
  "id": "sec_5_4-4-4",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-4",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Show algebraically that every increasing exponential quantity , , has a fixed doubling time; that is, it always takes the same amount of time for the quantity to double.    Let be the time after which the initial amount doubles. In other words, after time , the value is twice the initial value : Dividing both sides by , the time is such that After another units of time, the quantity doubles again and so In fact, no matter what time we start from, after units of time the quantity will double.   "
},
{
  "id": "sec_5_4-4-6",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-6",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Show that the function does not have a fixed doubling time.    The initial value is . How much time does it take for the value to double? We need to find a positive number such that ; that is, to solve the equation A solution to this equation is ; that is, it takes units of time for the initial amount to double. How long does it take for the quantity to double again from to ? The solution to is .  So it took units of time for to double from to , but units of time after that to double again from to . The time needed for to double is not constant, and so does not have a fixed doubling time.   "
},
{
  "id": "sec_5_4-4-7",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-7",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  You deposit into a savings account that pays interest annually. Let be your balance after years. As we saw in Section 5.1, the formula for is How long will it take for your money to double?    The balance function is an increasing exponential function. To find its doubling time, set equal to twice its initial value and solve for . That is, Dividing both sides by results in This equation cannot be solved algebraically as the unknown, , is in the exponent. Solving such equations requires logarithms the topic of Chapter 6.  However, an approximate solution can be found by either graphing the function and then finding the point on the graph where , or by evaluating for a few suitable values of :                    This shows that it takes approximately years for your initial deposit to double to . That is, the doubling time is approximately years. After approximately another years, the balance doubles again, and so on. After years, your balance will be roughly .   "
},
{
  "id": "sec_5_4-4-9",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-9",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  The value , in dollars, of an investment years after an initial amount of was invested is given by      How much will the investment be worth after , , and years? What pattern do you observe unfolding?    What is the doubling time of the investment?    Write the expression for in the form . Identify the growth factor and the annual percent growth rate.          The following gives the value of the investment after , , and years: Therefore, the value of the investment doubles every years.    As we saw in (a), the doubling time of is years.    To rewrite in the form , observe that Using a calculator, , rounded to three decimal places. Writing in the form , The growth factor is , and the annual percent growth rate is .      "
},
{
  "id": "sec_5_4-4-11",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-4-11",
  "type": "Result",
  "number": "5.4.6",
  "title": "",
  "body": "  For an exponential function written in the form: the doubling time is . The growth factor is    "
},
{
  "id": "sec_5_4-5-3",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-5-3",
  "type": "Definition",
  "number": "5.4.7",
  "title": "Half-Life.",
  "body": " Half-Life   Let , , be a decreasing exponential function. The time needed for the value to be reduced by half is called the half-life of the function .   "
},
{
  "id": "sec_5_4-5-5",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-5-5",
  "type": "Example",
  "number": "5.4.8",
  "title": "",
  "body": "  Let be the amount of a medication in a patient's bloodstream, in mg, hours after a single dose of mg.     How much of the medication is left in the patient's bloodstream after hours? hours? hours? What pattern do you observe unfolding? What is the half-life of the medication?    Rewrite in the form for constants and . Give the growth factor and the hourly percent growth rate.          We calculate: Every hours the amount of the medication left in the bloodstream is cut in half. Hence, the half-life of the medication is hours.    The formula can be alternatively written as . Using , rounded to three decimal places, then The growth factor is . The hourly percent growth rate is as . We can also say that the hourly percent decay rate is .      "
},
{
  "id": "sec_5_4-5-7",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-5-7",
  "type": "Result",
  "number": "5.4.9",
  "title": "",
  "body": "  For an exponential function written in the form: the half-life is . The growth factor is    "
},
{
  "id": "sec_5_4-5-8",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-5-8",
  "type": "Example",
  "number": "5.4.10",
  "title": "",
  "body": "  A patient takes a mg tablet of a common anti-heartburn medication Famotidine. The amount of the medication in the bloodstream, , in mg, hours after the dose, decays exponentially with half-life hours.     Find a formula for .    Find the growth factor and the percent decay rate.          The initial amount is and the half-life is hours. The formula for , in terms of powers of , is     To rewrite in the form , notice that: Hence, the growth factor (rounded to three decimal places), so . The percent growth rate is .      "
},
{
  "id": "sec_5_4-6-2",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-6-2",
  "type": "Example",
  "number": "5.4.11",
  "title": "",
  "body": "  Let be the population of a village, in the number of people, years after the village was founded. The population that was people initially triples every years.     Find a formula for .    Write in the form .          By letting , the population is multiplied by the factor of every year. This is not correct! To have the population multiplied by every years, we should instead use Observe that , , and so on. This indicates that the population triples every years, as desired.    We can rewrite as Or, by using , then       "
},
{
  "id": "sec_5_4-6-4",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-6-4",
  "type": "Result",
  "number": "5.4.12",
  "title": "",
  "body": "  For an exponential function of the form then is the factor by which the quantity increases or decreases every units of time.   "
},
{
  "id": "sec_5_4-6-5",
  "level": "2",
  "url": "sec_5_4.html#sec_5_4-6-5",
  "type": "Example",
  "number": "5.4.13",
  "title": "",
  "body": "  Find a formula for the value of an investment initially worth that grows every years.    A quantity grows by when it is multiplied by the factor of . Hence, is multiplied by every years. By the previous result, To get in the form , note that:    "
},
{
  "id": "exercise-5_4_1",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       initial amount: ; doubling time:    "
},
{
  "id": "exercise_5_4_2",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       initial amount: ; doubling time:    "
},
{
  "id": "exercise_5_4_3",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       initial amount: ; doubling time:    "
},
{
  "id": "exercise-5_4_4",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       initial amount: ; doubling time:    "
},
{
  "id": "exercise-5_4_5",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       initial amount: ; half-life:    "
},
{
  "id": "exercise_5_4_6",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       initial amount: ; half-life:    "
},
{
  "id": "exercise_5_4_7",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       initial amount: ; half-life:    "
},
{
  "id": "exercise-5_4_8",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       initial amount: ; half-life:    "
},
{
  "id": "exercise-5_4_9",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  The population of a town begins with people at and doubles every years.        "
},
{
  "id": "exercise_5_4_10",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  The population of a town begins with people at and triples every years.        "
},
{
  "id": "exercise_5_4_11",
  "level": "2",
  "url": "sec_5_4.html#exercise_5_4_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  The initial amount of mg of a radioactive element is halved every days.        "
},
{
  "id": "exercise-5_4_12",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The initial amount of mg of a radioactive element is cut by one-third every months.        "
},
{
  "id": "exercise-5_4_13",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "                            doubling time:    "
},
{
  "id": "exercise-5_4_14",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "                            half-life: approximately    "
},
{
  "id": "exercise-5_4_15",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The graph of an exponential function below shows the population of bacteria, , in a laboratory experiment minutes after the experiment began.        What is the initial amount, , of bacteria?     bacteria      Estimate the doubling time of the population.     minutes      Write a formula for in the form . Then rewrite the formula in the form . Round off to four decimal places. What is the percent growth rate?     ; growth rate:     "
},
{
  "id": "exercise-5_4_16",
  "level": "2",
  "url": "sec_5_4.html#exercise-5_4_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is an exponential function and its graph is given below:        Estimate the amount of caffeine, , absorbed by the body from a cup of coffee.     mg      Estimate the half-life of caffeine.     hours      Write a formula for in the form . Rewrite the formula in the form . Round off to three decimal places. What is the percent growth rate?     ; growth rate:     "
},
{
  "id": "sec_5_5",
  "level": "1",
  "url": "sec_5_5.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Natural Base e",
  "body": " The Natural Base e    After completing this section, you should be able to do the following.     Recognize the natural base and the natural exponential function .    Convert an exponential function between the standard form and the base- form .    Distinguish between the continuous growth rate and the percent growth rate of an exponential function.     A commonly used base in the context of exponential functions is the Euler constant . The constant is denoted by the letter and its approximate value is The constant is an irrational number which, much like , appears in various areas of mathematics. It is sufficient for you to remember that or even Your calculator will give you a better approximation of . A precise definition of is complicated, and will not be covered in this text.  We call the natural base and, when used as the base of an exponential function, we get the so-called natural exponential function . Since , the graph of a natural exponential function is increasing, just as any other exponential function with growth factor larger than :     In fact, so the graph of is between the graphs of and :     In most applications, especially in life sciences, people tend to rewrite all exponential functions in terms of the natural base . How can this be done? Suppose we have an exponential function where is any positive number. By the graph above, we can see that there exists a constant such that This means that one can rewrite any exponential function as   The graph indicates that when , the constant is positive; likewise when , the constant is negative.   Exponential Function in Terms of Base   Any exponential function can be written in the form where is the constant satisfying that . We have:     If , then .    If , then .    The constant is called the continuous growth rate .    We can convert from form to the form by setting the growth factor .        Remark: The constant in the formula is called the continuous growth rate or, when expressed as a percent, the continuous percent growth rate . The relevance of this terminology will become more clear if you go on to study calculus.  It is important to keep in mind the following facts.     The value of the constant depends on the units of years, days, hours etc. Hence, we will sometimes say the continuous annual growth rate  or the continuous daily growth rate  etc., to emphasize the units of unless the units of are clear from the context.    The values of the continuous percent growth rate and the percent growth rate that appear in the formula are different , although their values are often close .      Note: Any exponential in base- form, say , can easily be converted to standard form by taking . Going the other way around, that is, finding the exact value of for a given requires solving the following equation for : Since the unknown is in the exponent, the equation cannot be solved algebraically until Chapter 6 since it requires logarithms.    The value of investment, , is given by where is in years. Give the initial value and the continuous growth rate. Then, rewrite the function in the form and compare the percent growth rate and the continuous percent growth rate.    From the base- form, the continuous growth rate is and the initial value of the investment is . Notice that as . Hence, the growth factor is and the annual percent growth rate is . This shows that the continuous growth rate and the annual percent growth rate are close but not equal .      A patient treated for thyroid cancer is given an injection of 10 g of Iodine-131. Let be the amount of Iodine-131 left in the patient's body days after the injection. Assume that the continuous daily decay rate of Iodine-131 is .     Find a formula for .    Convert the formula to the form . Compare the daily percent growth rate and the continuous growth rate.          The continuous growth rate is given as . Hence, it will be easier to find a formula for in the form . The initial amount is , so     To convert to the form , take . Therefore, The daily percent growth rate is . Observe that the two rates, and , differ significantly.         Evaluating Expressions   For each of the following, use your calculator to evaluate the given expression. Round off your answer to three decimal places.                                                      Match each function below to its corresponding graph.           Graph A       Graph B       Graph C     Graph A is ; Graph B is ; Graph C is .     Identifying Exponential Functions   For each of the following, determine if the given exponential function is increasing or decreasing. For each function, identify its continuous growth rate.          increasing; continuous growth rate:            decreasing; continuous growth rate:            increasing; continuous growth rate:            decreasing; continuous growth rate:       Rewriting Exponential Functions   For each of the following, rewrite the given exponential function in the form . Round off the base to four decimal places.                                                      A common antidepressant Paxil has a continuous hourly growth rate of . A patient takes an initial dose of mg. Let be the amount of Paxil left in a patient's body from the initial dose hours later.     Write a formula for in terms of the natural base .           How much Paxil is left in the patient's body hours after the dose?    approximately mg       A radioactive isotope of Iodine, Iodine-123, is often used in medical imaging as a contrast. An initial amount of  g of Iodine-123 is administered to a patient. Let be the amount of Iodine-123, in g, remaining in the patient's body after hours. Given that the continuous hourly decay rate of Iodine-123 is , write a formula for . How much Iodine-123 is left after hours?     ; approximately  g     "
},
{
  "id": "sec_5_5-2",
  "level": "2",
  "url": "sec_5_5.html#sec_5_5-2",
  "type": "Objectives",
  "number": "5.5",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Recognize the natural base and the natural exponential function .    Convert an exponential function between the standard form and the base- form .    Distinguish between the continuous growth rate and the percent growth rate of an exponential function.    "
},
{
  "id": "sec_5_5-10",
  "level": "2",
  "url": "sec_5_5.html#sec_5_5-10",
  "type": "Result",
  "number": "5.5.1",
  "title": "Exponential Function in Terms of Base <span class=\"process-math\">\\(e\\)<\/span>.",
  "body": " Exponential Function in Terms of Base   Any exponential function can be written in the form where is the constant satisfying that . We have:     If , then .    If , then .    The constant is called the continuous growth rate .    We can convert from form to the form by setting the growth factor .      "
},
{
  "id": "sec_5_5-15",
  "level": "2",
  "url": "sec_5_5.html#sec_5_5-15",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": "  The value of investment, , is given by where is in years. Give the initial value and the continuous growth rate. Then, rewrite the function in the form and compare the percent growth rate and the continuous percent growth rate.    From the base- form, the continuous growth rate is and the initial value of the investment is . Notice that as . Hence, the growth factor is and the annual percent growth rate is . This shows that the continuous growth rate and the annual percent growth rate are close but not equal .   "
},
{
  "id": "sec_5_5-16",
  "level": "2",
  "url": "sec_5_5.html#sec_5_5-16",
  "type": "Example",
  "number": "5.5.3",
  "title": "",
  "body": "  A patient treated for thyroid cancer is given an injection of 10 g of Iodine-131. Let be the amount of Iodine-131 left in the patient's body days after the injection. Assume that the continuous daily decay rate of Iodine-131 is .     Find a formula for .    Convert the formula to the form . Compare the daily percent growth rate and the continuous growth rate.          The continuous growth rate is given as . Hence, it will be easier to find a formula for in the form . The initial amount is , so     To convert to the form , take . Therefore, The daily percent growth rate is . Observe that the two rates, and , differ significantly.      "
},
{
  "id": "exercise-5_5_1",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_1",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_2",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_3",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-5_5_4",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_5",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": "  Match each function below to its corresponding graph.           Graph A       Graph B       Graph C     Graph A is ; Graph B is ; Graph C is .   "
},
{
  "id": "exercise-5_5_6",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_6",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": "       increasing; continuous growth rate:    "
},
{
  "id": "exercise_5_5_7",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_7",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": "       decreasing; continuous growth rate:    "
},
{
  "id": "exercise_5_5_8",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_8",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": "       increasing; continuous growth rate:    "
},
{
  "id": "exercise-5_5_9",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_9",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": "       decreasing; continuous growth rate:    "
},
{
  "id": "exercise-5_5_10",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_10",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_11",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_11",
  "type": "Exercise",
  "number": "5.5.11",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_12",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_12",
  "type": "Exercise",
  "number": "5.5.12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-5_5_13",
  "level": "2",
  "url": "sec_5_5.html#exercise-5_5_13",
  "type": "Exercise",
  "number": "5.5.13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_5_5_14",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_14",
  "type": "Exercise",
  "number": "5.5.14",
  "title": "",
  "body": "  A common antidepressant Paxil has a continuous hourly growth rate of . A patient takes an initial dose of mg. Let be the amount of Paxil left in a patient's body from the initial dose hours later.     Write a formula for in terms of the natural base .           How much Paxil is left in the patient's body hours after the dose?    approximately mg    "
},
{
  "id": "exercise_5_5_15",
  "level": "2",
  "url": "sec_5_5.html#exercise_5_5_15",
  "type": "Exercise",
  "number": "5.5.15",
  "title": "",
  "body": "  A radioactive isotope of Iodine, Iodine-123, is often used in medical imaging as a contrast. An initial amount of  g of Iodine-123 is administered to a patient. Let be the amount of Iodine-123, in g, remaining in the patient's body after hours. Given that the continuous hourly decay rate of Iodine-123 is , write a formula for . How much Iodine-123 is left after hours?     ; approximately  g   "
},
{
  "id": "sec_6_1",
  "level": "1",
  "url": "sec_6_1.html",
  "type": "Section",
  "number": "6.1",
  "title": "What Are Logarithms?",
  "body": " What Are Logarithms?    After completing this section, you should be able to do the following.     State the definition of the logarithm base and rewrite an expression in logarithmic form as an equivalent expression in exponential form, and vice versa.    Evaluate logarithms, including the common logarithm and the natural logarithm, without a calculator when possible.    Use a calculator to approximate the value of a logarithm and identify the graphs and key properties of and .      When studying processes of exponential growth and decay in Chapter 5 we encountered equations of the type: where the unknown is in the exponent. To solve such equations algebraically, we need logarithms .   Logarithm Base   Let such that , be given. Then for every , the logarithm base of , denoted , is defined so that     The logarithm, is the exponent such that the base raised to this exponent is .  In other words, is equal to a number such that to that number is . The expressions are equivalent; they are a logarithmic and an exponential version of the same statement.  The base of the logarithm is , so we say is the logarithm base .    Compute the following:                               We have the logarithm base in this example. The value of is the exponent such that to this exponent equals , which is :     The logarithm base of , , is the exponent such that to this power equals . This exponent is : This example shows that the value or output of a logarithm can be negative, meanwhile the input value cannot be.    The logarithm base of is the exponent such that to that power equals . Because we can write then the logarithm is     The logarithm base of , , is the power of needed to obtain . That is,         Note: If the argument inside the logarithm is a more complicated expression rather than just a number or a variable, we use parentheses around it. Often we use parentheses even if the argument is just a number or a variable. In other words, and are two different ways to denote the same thing. However, and are not the same, as in one case is inside the logarithm and in the other case only is inside the logarithm. It would be more clear for us to write rather than , as the parentheses emphasize that is inside the logarithm and the addition of 3 is not.    Compute the following:                     We are looking for a number such that to that number is equal to : Would it be ? Definitely not as . There is no number such that to that number is as is always positive by properties of exponential functions.    We are asking: . Since , then .       The last example illustrates the following properties of logarithms which hold for any base :    If is negative or 0, is undefined as for any power .  as for any .      Compute .    We are looking for an exponent such that to this exponent equals : Notice so is too small, and so is too large. The exponent that we are looking for is somewhere between and . The graph of shows that such a number exists.     Clearly there is a number between and such that to that number is . That number is by definition . What's the simplest way to approximate it? Use your calculator! Most likely you have two buttons on your calculator related to logarithms: log and ln . log is the logarithm of base . We use our calculator and obtain:     While the logarithm base has some importance in the theory of music and other applications, the applications we will focus on rely heavily on the common logarithm and natural logarithm , which we will define below.  The logarithm of base is denoted by and called the common logarithm : The logarithm of base is denoted by and called the natural logarithm :   To evaluate and manipulate these two logarithms correctly, you have to remember what their bases are:     Evaluate the following expressions without a calculator.                                              The natural logarithm ln is the logarithm base . Since , we have .    First, simplify the expression inside the logarithm: Therefore,     This quantity is undefined. The natural logarithm, as any other logarithm, is defined for positive inputs only. There is no number such that , since is always positive.     as .    We have to raise to the power to get . Hence, .    Because , then .    Evaluate each term and then take the difference: and . Hence:          Use your calculator to find the approximate value of each of the following logarithms.                          Using the ln button of your calculator, , rounded to three decimal places. As with many logarithms, is an irrational number, so we can only have its decimal approximation. As a check, almost .    Using the log button of your calculator, , rounded to three decimal places. As a check, practically .    Using a calculator, . To double check, we find that , .         Graphs of Functions and  The common logarithm is defined for every positive input and so is the natural logarithm . We can consider the two logarithmic functions and with domains . The graphs of the common logarithm function and the natural logarithm function have a similar shape:     We see that both functions and are defined for all and not defined for . Both functions are at : and . Furthermore, both functions are positive for and negative for . We also notice that for positive inputs which are closer and closer to , outputs are getting more and more negative, and both graphs approach the -axis without ever crossing it. We say that the -axis is a vertical asymptote for and . Recall that exponential functions have a horizontal asymptote at the -axis. Finally, both functions are increasing.     Evaluating Logarithms   For each of the following, evaluate the given expression without a calculator. If the expression is undefined, say so.                      undefined           undefined                                                                                   undefined                                               undefined                       undefined                              Estimating Logarithms   For each of the following, use the graphs of and to give a rough estimate.           approximately            approximately            approximately            approximately       Logarithms on a Calculator   For each of the following, use your calculator to evaluate the given expression. Round off to four decimal places. For undefined expressions, state undefined .                                                     "
},
{
  "id": "sec_6_1-2",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of the logarithm base and rewrite an expression in logarithmic form as an equivalent expression in exponential form, and vice versa.    Evaluate logarithms, including the common logarithm and the natural logarithm, without a calculator when possible.    Use a calculator to approximate the value of a logarithm and identify the graphs and key properties of and .    "
},
{
  "id": "sec_6_1-3-2",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-2",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Logarithm Base <span class=\"process-math\">\\(b\\)<\/span>.",
  "body": " Logarithm Base   Let such that , be given. Then for every , the logarithm base of , denoted , is defined so that    "
},
{
  "id": "sec_6_1-3-6",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-6",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  Compute the following:                               We have the logarithm base in this example. The value of is the exponent such that to this exponent equals , which is :     The logarithm base of , , is the exponent such that to this power equals . This exponent is : This example shows that the value or output of a logarithm can be negative, meanwhile the input value cannot be.    The logarithm base of is the exponent such that to that power equals . Because we can write then the logarithm is     The logarithm base of , , is the power of needed to obtain . That is,       "
},
{
  "id": "sec_6_1-3-8",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-8",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  Compute the following:                     We are looking for a number such that to that number is equal to : Would it be ? Definitely not as . There is no number such that to that number is as is always positive by properties of exponential functions.    We are asking: . Since , then .      "
},
{
  "id": "sec_6_1-3-11",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-11",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": "  Compute .    We are looking for an exponent such that to this exponent equals : Notice so is too small, and so is too large. The exponent that we are looking for is somewhere between and . The graph of shows that such a number exists.     Clearly there is a number between and such that to that number is . That number is by definition . What's the simplest way to approximate it? Use your calculator! Most likely you have two buttons on your calculator related to logarithms: log and ln . log is the logarithm of base . We use our calculator and obtain:    "
},
{
  "id": "sec_6_1-3-15",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-15",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  Evaluate the following expressions without a calculator.                                              The natural logarithm ln is the logarithm base . Since , we have .    First, simplify the expression inside the logarithm: Therefore,     This quantity is undefined. The natural logarithm, as any other logarithm, is defined for positive inputs only. There is no number such that , since is always positive.     as .    We have to raise to the power to get . Hence, .    Because , then .    Evaluate each term and then take the difference: and . Hence:       "
},
{
  "id": "sec_6_1-3-16",
  "level": "2",
  "url": "sec_6_1.html#sec_6_1-3-16",
  "type": "Example",
  "number": "6.1.6",
  "title": "",
  "body": "  Use your calculator to find the approximate value of each of the following logarithms.                          Using the ln button of your calculator, , rounded to three decimal places. As with many logarithms, is an irrational number, so we can only have its decimal approximation. As a check, almost .    Using the log button of your calculator, , rounded to three decimal places. As a check, practically .    Using a calculator, . To double check, we find that , .      "
},
{
  "id": "exercise-6_1_1",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_2",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       undefined   "
},
{
  "id": "exercise_6_1_3",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       undefined   "
},
{
  "id": "exercise_6_1_4",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_5",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_6",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_7",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_8",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_9",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_10",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       undefined   "
},
{
  "id": "exercise_6_1_11",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_12",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_13",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_14",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       undefined   "
},
{
  "id": "exercise_6_1_15",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_16",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "       undefined   "
},
{
  "id": "exercise_6_1_17",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_1_18",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_1_19",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "       approximately    "
},
{
  "id": "exercise_6_1_20",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "       approximately    "
},
{
  "id": "exercise_6_1_21",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "       approximately    "
},
{
  "id": "exercise-6_1_22",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_22",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "       approximately    "
},
{
  "id": "exercise-6_1_23",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_23",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_24",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_24",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_1_25",
  "level": "2",
  "url": "sec_6_1.html#exercise_6_1_25",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_1_26",
  "level": "2",
  "url": "sec_6_1.html#exercise-6_1_26",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "           "
},
{
  "id": "sec_6_2",
  "level": "1",
  "url": "sec_6_2.html",
  "type": "Section",
  "number": "6.2",
  "title": "Properties of Logarithms, Solving Equations Using Logarithms",
  "body": " Properties of Logarithms, Solving Equations Using Logarithms    After completing this section, you should be able to do the following.     State and apply the algebraic properties of the common logarithm and the natural logarithm.    Solve exponential equations by taking the logarithm of both sides.    Condense and expand logarithmic expressions, and use the change of base formula to evaluate a logarithm of any base.      Algebraic properties of logarithms are what make them useful in applications. These properties are similar for all logarithms base . For the sake of clarity, though, we will list and practice separately the properties of the common logarithm and the properties of the natural logarithm.    Algebraic Properties of Logarithms  We begin with the common logarithm.   Properties of the Common Logarithm   For and positive numbers:      for any      for positive                for any        Properties follow from the definition of the logarithm base . For Property , justification requires explaining why the logarithm of a product equals a sum of logarithms. From the definition of , then for any number (or expression) , Notice that from properties of exponential expressions, Indeed, the sum of exponents corresponds to the product of the exponential expressions. From Property of the common logarithm, It follows that Therefore, Similarly, Properties of the logarithm follow from the algebraic properties of exponential expressions.  All logarithms have similar properties as those listed above for the common logarithm. In particular, similar properties hold for the natural logarithm.   Properties of the Natural Logarithm   For and positive numbers:      for any      for positive               for any          Solving Equations Using Logarithms   Property of both logarithms is especially important and makes logarithms useful for solving equations in which the unknown is in the exponent.    Solve the equation:     The unknown is in the exponent, so we apply a logarithm to both sides of the equation. Either the common logarithm or the natural logarithm will work equally well, but we use the common logarithm. Taking the logarithm of both sides of gives us an equivalent equation:  Note: We took the logarithm of each side; which is NOT to be interpreted as multiplying each side by . Similarly, we cannot multiply both sides of an equation by the radical . We can, however, take the radical of both sides.   Property of the common logarithm takes the exponent out of the logarithm: Note that and are just constants you can calculate their approximate values using your calculator. The equation is then times a constant is equal to another constant. Divide both sides of the equation by to get the answer: You can check for yourself that you will get the same answer if you choose to take the natural logarithm of both sides rather than the common logarithm. The exact answers may look different, but the decimal approximation will show they are in fact the same.      Solve for :     Before applying the logarithm to both sides, it is best to divide both sides by : That is, . Now, apply the logarithm to both sides and solve: Notice that we also found the doubling time of the function with this calculation.      Solve for :     After dividing both sides by , Since the base of the exponential expression is , it will be a bit easier to use the natural logarithm. Applying the natural logarithm to both sides gives There are two options at this time. The first is to use Property of the natural logarithm with and get: Or, use Property , which says in essence that for any number or expression , . Either way, and so Dividing both sides by , the exact and approximate solutions are       Solve for in the following equation. Give the exact answer as well as a decimal approximation.     The unknown appears in two exponential expressions. One approach is to combine those expressions into one by first dividing both sides of the equation by which will result in Now remember that the power of a quotient is the quotient of the corresponding powers: . Hence, the equation becomes: Now, apply the common logarithm to both sides: By Property , the left-hand side simplifies to the following: Divide both sides by the constant , yielding the answer:     What would happen if we didn't simplify the equation before applying the logarithm to both sides? Nothing much, except that the calculations would become a bit more complicated, since we would have This requires Property to expand the logarithms on both sides as in: With Property , the exponent can be pulled out and then Notice that , , , are all constants and can be grouped on one side of the equation, and all terms involving appear on the other side: Simplifying, the answer is Indeed, the difference of logarithms corresponds to the logarithm of a quotient by Property . Hence, we obtained the same answer as before, but getting there required more steps.    Rewrite the following expressions in terms of and , or state that this is not possible.                           Property  the logarithm of a quotient is the difference of logarithms to obtain     Before we can do anything else, we have to deal with the logarithm of a difference. There is no formula for the logarithm of a sum or a difference! This expression cannot be simplified.    Using the properties listed above,          Condense the following expression into one logarithm:     Using properties of the natural logarithm,       The Change of Base Formula for Logarithms  Even though many scientific and graphing calculators are only programmed to work with the common logarithm and the natural logarithm, you can calculate the value of any logarithm thanks to the following change of base formulas:     Use your calculator to find .    Either change of base formula can be utilized here. Using the first one would give us rounded to three decimal places. The answer is the same if we convert to the common logarithm:        Properties of Logarithms   For each of the following, use properties of logarithms to expand a given expression as much as possible and write it in terms of , and , if possible. Assume that , , and are positive.                                                          Cannot simplify.           Cannot simplify.                              Expanding Logarithms   For each of the following, use properties of logarithms to expand a given expression as much as possible and write it in terms of , and , if possible. Assume that , , and are positive.                                  Cannot simplify.                                                                  Simplifying Logarithms   For each of the following, combine the expression into one logarithm, if possible. Assume that , , and are positive.          Not possible.                                   Not possible.                       Not possible.      Solving Exponential Equations   For each of the following, solve a given equation for or for . Give the exact answer as well as its approximation rounded off to three decimal places.                                                                             Using the Change of Base Formula   For each of the following, rewrite a given logarithm in terms of the natural logarithm and calculate its value using your calculator. Round off to three decimal places.                             "
},
{
  "id": "sec_6_2-2",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-2",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State and apply the algebraic properties of the common logarithm and the natural logarithm.    Solve exponential equations by taking the logarithm of both sides.    Condense and expand logarithmic expressions, and use the change of base formula to evaluate a logarithm of any base.    "
},
{
  "id": "sec_6_2-4-3",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-4-3",
  "type": "Result",
  "number": "6.2.1",
  "title": "Properties of the Common Logarithm.",
  "body": " Properties of the Common Logarithm   For and positive numbers:      for any      for positive                for any       "
},
{
  "id": "sec_6_2-4-6",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-4-6",
  "type": "Result",
  "number": "6.2.2",
  "title": "Properties of the Natural Logarithm.",
  "body": " Properties of the Natural Logarithm   For and positive numbers:      for any      for positive               for any       "
},
{
  "id": "sec_6_2-5-3",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-3",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Solve the equation:     The unknown is in the exponent, so we apply a logarithm to both sides of the equation. Either the common logarithm or the natural logarithm will work equally well, but we use the common logarithm. Taking the logarithm of both sides of gives us an equivalent equation:  Note: We took the logarithm of each side; which is NOT to be interpreted as multiplying each side by . Similarly, we cannot multiply both sides of an equation by the radical . We can, however, take the radical of both sides.   Property of the common logarithm takes the exponent out of the logarithm: Note that and are just constants you can calculate their approximate values using your calculator. The equation is then times a constant is equal to another constant. Divide both sides of the equation by to get the answer: You can check for yourself that you will get the same answer if you choose to take the natural logarithm of both sides rather than the common logarithm. The exact answers may look different, but the decimal approximation will show they are in fact the same.   "
},
{
  "id": "sec_6_2-5-4",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-4",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  Solve for :     Before applying the logarithm to both sides, it is best to divide both sides by : That is, . Now, apply the logarithm to both sides and solve: Notice that we also found the doubling time of the function with this calculation.   "
},
{
  "id": "sec_6_2-5-5",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-5",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Solve for :     After dividing both sides by , Since the base of the exponential expression is , it will be a bit easier to use the natural logarithm. Applying the natural logarithm to both sides gives There are two options at this time. The first is to use Property of the natural logarithm with and get: Or, use Property , which says in essence that for any number or expression , . Either way, and so Dividing both sides by , the exact and approximate solutions are    "
},
{
  "id": "sec_6_2-5-6",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-6",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Solve for in the following equation. Give the exact answer as well as a decimal approximation.     The unknown appears in two exponential expressions. One approach is to combine those expressions into one by first dividing both sides of the equation by which will result in Now remember that the power of a quotient is the quotient of the corresponding powers: . Hence, the equation becomes: Now, apply the common logarithm to both sides: By Property , the left-hand side simplifies to the following: Divide both sides by the constant , yielding the answer:    "
},
{
  "id": "sec_6_2-5-8",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-8",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Rewrite the following expressions in terms of and , or state that this is not possible.                           Property  the logarithm of a quotient is the difference of logarithms to obtain     Before we can do anything else, we have to deal with the logarithm of a difference. There is no formula for the logarithm of a sum or a difference! This expression cannot be simplified.    Using the properties listed above,       "
},
{
  "id": "sec_6_2-5-9",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-5-9",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": "  Condense the following expression into one logarithm:     Using properties of the natural logarithm,    "
},
{
  "id": "sec_6_2-6-3",
  "level": "2",
  "url": "sec_6_2.html#sec_6_2-6-3",
  "type": "Example",
  "number": "6.2.9",
  "title": "",
  "body": "  Use your calculator to find .    Either change of base formula can be utilized here. Using the first one would give us rounded to three decimal places. The answer is the same if we convert to the common logarithm:    "
},
{
  "id": "exercise-6_2_1",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_2",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_3",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_4",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_5",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       Cannot simplify.   "
},
{
  "id": "exercise_6_2_6",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Cannot simplify.   "
},
{
  "id": "exercise_6_2_7",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_8",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_9",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_10",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_11",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       Cannot simplify.   "
},
{
  "id": "exercise_6_2_12",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_13",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_14",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_15",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_16",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_17",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "       Not possible.   "
},
{
  "id": "exercise_6_2_18",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_19",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_20",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "       Not possible.   "
},
{
  "id": "exercise_6_2_21",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_22",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_22",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "       Not possible.   "
},
{
  "id": "exercise-6_2_23",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_23",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_24",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_24",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_25",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_25",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_26",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_26",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_2_27",
  "level": "2",
  "url": "sec_6_2.html#exercise_6_2_27",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_28",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_28",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_29",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_29",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_2_30",
  "level": "2",
  "url": "sec_6_2.html#exercise-6_2_30",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": "           "
},
{
  "id": "sec_6_3",
  "level": "1",
  "url": "sec_6_3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Logarithms in Applications",
  "body": " Logarithms in Applications    After completing this section, you should be able to do the following.     Convert an exponential function between standard form and base- form .    Use logarithms to calculate the doubling time and the half-life of an exponentially growing or decaying quantity.    Apply logarithms to solve application problems involving exponential growth and decay, including pH calculations.      Logarithms appear in many applied problems. They are indispensable in the context of exponential growth and decay.    Converting Between and  In Chapter 5 we considered exponential functions in two forms: the standard form and the base- form . Recall that we called the continuous growth rate . In Section 5.5, it was shown that you can convert an exponential function given in base- form to standard form by simply taking :   To convert an exponential function from standard form to base- form, we have to find such that . If we have such a constant , we can easily rewrite in base- form: Therefore, we need the solution to the equation . Applying the natural logarithm to both sides gives , and then Property implies . Since , the solution is    Converting An Exponential Function To And From Base   Consider any arbitrary exponential function .    Using , then .  Using , then .  If , , so .  If , , so .      The last two bullet points follow from the properties of the natural logarithm function . For inputs between and , is negative. For inputs greater than , is positive. Recall the graph of :       Rewrite the following exponential functions in terms of the natural base:                     With the result above, we can rewrite in the form where . Therefore, and is positive as .    Letting , then Notice that is negative since the growth factor is less than .        Note: Whenever you calculate or the growth factor , do not round off too crudely. Take at least three or four decimal places. Using too few decimal places to approximate or may lead to significant errors in the values of an exponential function.    The common antianxiety medication Diazepam decays in a patient's body after a dose is taken. Suppose a patient takes a single dose of mg of Diazepam. The amount left after days is given by:      What is the daily percent growth rate?    Rewrite in the form and find the continuous daily growth rate.          The daily growth rate is given by , or . It is negative since is decreasing.    The continuous growth rate is or . Using this, then in terms of the natural base is          Calculating the Doubling Time and the Half-Life  With logarithms, we can calculate algebraically the doubling time and the half-life of exponentially increasing or decreasing quantities.    You deposit into a savings account that pays annually. Let denote your balance after years, which is described by      How long will it take for your money to double?    Suppose you deposit instead of . How long will it take for your money to double?          To find the doubling time we have to solve the following equation for : Divide both sides of the equation by : The unknown is in the exponent, so either the common or the natural logarithm must be applied to both sides. Using the natural logarithm (as is customary in most applied sciences) gives us the following: It will take approximately years for your money to double.    If the initial deposit is instead of , then . To find the doubling time of this function, solve the equation Dividing both sides by gives the familiar equation This is the same equation as in the second step in part 1, so the solution is the same as before: . The doubling time does not depend on the initial amount it depends only on the growth factor! That is, the initial amount is not needed to find the doubling time of an exponential function.         As we saw in , the amount of Diazepam, , in mg, left in a patient's system days after a mg dose is      Find the half-life of Diazepam.    How long will it take for the initial amount of Diazepam to be reduced to mg?          To find the half-life, solve the following equation for : Upon dividing by both sides by the initial value , Just as the doubling time, the half-life does not depend on the initial amount. Applying the natural logarithm to both sides of the equation yields the following: The half-life of Diazepam is approximately days it will take about days for the half of the initial dose to be eliminated from the body.    We have to find for which , so we have to solve the equation: Just like before, divide both sides by , apply the natural logarithm to both sides, and use properties of the natural logarithm to obtain: It will take about days for mg to be left in a patient's system from the initial dose of mg.  Does this answer make sense? Let's compare it to the half-life, which is days. This half-life means that mg will be reduced to mg after days and then the remaining mg will be reduced to mg after the next days. So, it seems reasonable that mg is left after days.  Of course, you can check your answer by substituting into :         In the previous example, notice that the answer in part 2 clearly depends on the initial amount mg, unlike the answer in part 1. If the initial dose is, say, mg, it will take much longer before only mg remain; however, the half-life is still the same!     During the 1986 Chernobyl disaster, radioactive Strontium-90 was released into the atmosphere https:\/\/semspub.epa.gov\/work\/HQ\/175430.pdf, accessed: 5\/24\/2020 . Strontium-90 contaminated the nearby region and accumulated in people's bones. (Incidentally, the isotope is often referred to as a bone seeker .) The half-life of Strontium-90 is years.     Find the percentage of the original amount of Strontium-90 absorbed that is still left in people's bones in 2020.    How many years will it take for of the original amount of Strontium-90 to be left?          Let be the amount of Strontium-90 remaining in an affected person's bones years after the disaster. Denote by the initial amount absorbed. The goal is to find a formula for in terms of the natural base: To find , we use the half-life and set up an equation for . At , half of is left; that is, : Divide both sides by so that Use the natural logarithm to solve for : Given this value of , a formula for is To answer the question, all that is left is to evaluate at , which corresponds to the year 2020. That is, In 2020, about of the original amount absorbed remains in people's bones. Note that the percentage of Strontium-90 left does not depend on the initial amount .    We are looking for such that . That is, for solutions to As before, divide both sides by , apply the natural logarithm and use properties of the logarithm to obtain Therefore, it will take approximately years before of the original amount remains.         The Acidity of a Liquid  In chemistry, the acidity of a liquid is measured on the scale http:\/\/chemistry.elmhurst.edu\/vchembook\/184ph.html, accessed: 5\/25\/2020 . The acidity depends on the hydrogen ion concentration in the liquid, denoted by and measured in (moles per liter). The is defined as: (The logarithm in the formula is the common logarithm.)    The hydrogen ion concentration of lemon juice is  . Find the of lemon juice.    According to the formula above, the of lemon juice is       The of gastric acid is . Find the hydrogen ion concentration in gastric acid.    To find the hydrogen ion concentration, solve the equation . Put another way, . By the definition of the common logarithm, this means and therefore  .       Rewriting Exponential Functions   For each of the following, rewrite a given exponential function in terms of the natural base; that is, in the form . Round off to four decimal places.                                                      If a bank offers an interest rate of with interest compounded continuously (rather than once a year), your balance after years is: where is your initial deposit, in dollars.     How long will it take for your money to double?    approximately years      How long will it take for your money to triple?    approximately years       A laboratory culture of Salmonella enterica starts with bacteria at and doubles every minutes. https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/ , accessed: 6\/26\/20 Let be the number of bacteria in the culture at time , in minutes.     Write a formula for in terms of the natural base .           How long will it take for to triple? Does the tripling time depend on the initial amount ?    approximately minutes; no       Bacterial population dynamics is not as simple as measuring the doubling time of a bacterium in the laboratory, under optimal growth conditions. A more challenging question is to find the doubling time of a bacterium in its natural environment, for example, in the gut. The doubling time of Salmonella enterica in the gut is hours https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/ , accessed: 6\/26\/20 . Let be an initial amount of Salmonella enterica in a patient's gut at . Let be the amount hours later.     Find a formula for in base- form.           How long will it take for the bacteria to reach of the initial amount?    approximately hours       Let be the amount of nicotine, in milligrams, in the bloodstream of a person after a cigarette is smoked. Time is measured in hours. As with most drugs, the process of elimination of nicotine from the body is a process of exponential decay. The half-life of nicotine is hours and the amount of nicotine absorbed from a cigarette is mg.     Find a formula in the form for the function .           How long will it take for the initial amount of nicotine to be reduced to mg?    approximately hours       Let be the amount of caffeine that remains in the person's body hours after finishing a cup of coffee. The amount of caffeine absorbed from a cup of coffee is mg. The continuous growth rate of caffeine in the body is .     Find a formula for in terms of the natural base.           Find the half-life of caffeine in the body. Round off your answer to two decimal places. Include units with your answer.    approximately hours      How long will it take for to be reduced to of the initial amount? Does the answer depend on the initial amount?    approximately hours; no      How long will it take for to be reduced to mg? Does the answer depend on the initial amount?    approximately hours; yes       The value of an antique chair, , years after it was purchased for increases by per year.     Write a formula for in the form .           When will the value reach ?    approximately years       The of orange juice is . Find the hydrogen ion concentration in orange juice.            The hydrogen ion concentration in tomato juice is moles per liter. Find the of tomato juice.    The pH is .     "
},
{
  "id": "sec_6_3-2",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Convert an exponential function between standard form and base- form .    Use logarithms to calculate the doubling time and the half-life of an exponentially growing or decaying quantity.    Apply logarithms to solve application problems involving exponential growth and decay, including pH calculations.    "
},
{
  "id": "sec_6_3-4-4",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-4-4",
  "type": "Result",
  "number": "6.3.1",
  "title": "Converting An Exponential Function To And From Base <span class=\"process-math\">\\(e\\)<\/span>.",
  "body": " Converting An Exponential Function To And From Base   Consider any arbitrary exponential function .    Using , then .  Using , then .  If , , so .  If , , so .     "
},
{
  "id": "sec_6_3-4-7",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-4-7",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "  Rewrite the following exponential functions in terms of the natural base:                     With the result above, we can rewrite in the form where . Therefore, and is positive as .    Letting , then Notice that is negative since the growth factor is less than .      "
},
{
  "id": "example-ch6-diazepam",
  "level": "2",
  "url": "sec_6_3.html#example-ch6-diazepam",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  The common antianxiety medication Diazepam decays in a patient's body after a dose is taken. Suppose a patient takes a single dose of mg of Diazepam. The amount left after days is given by:      What is the daily percent growth rate?    Rewrite in the form and find the continuous daily growth rate.          The daily growth rate is given by , or . It is negative since is decreasing.    The continuous growth rate is or . Using this, then in terms of the natural base is       "
},
{
  "id": "sec_6_3-5-3",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-5-3",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": "  You deposit into a savings account that pays annually. Let denote your balance after years, which is described by      How long will it take for your money to double?    Suppose you deposit instead of . How long will it take for your money to double?          To find the doubling time we have to solve the following equation for : Divide both sides of the equation by : The unknown is in the exponent, so either the common or the natural logarithm must be applied to both sides. Using the natural logarithm (as is customary in most applied sciences) gives us the following: It will take approximately years for your money to double.    If the initial deposit is instead of , then . To find the doubling time of this function, solve the equation Dividing both sides by gives the familiar equation This is the same equation as in the second step in part 1, so the solution is the same as before: . The doubling time does not depend on the initial amount it depends only on the growth factor! That is, the initial amount is not needed to find the doubling time of an exponential function.      "
},
{
  "id": "sec_6_3-5-4",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-5-4",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  As we saw in , the amount of Diazepam, , in mg, left in a patient's system days after a mg dose is      Find the half-life of Diazepam.    How long will it take for the initial amount of Diazepam to be reduced to mg?          To find the half-life, solve the following equation for : Upon dividing by both sides by the initial value , Just as the doubling time, the half-life does not depend on the initial amount. Applying the natural logarithm to both sides of the equation yields the following: The half-life of Diazepam is approximately days it will take about days for the half of the initial dose to be eliminated from the body.    We have to find for which , so we have to solve the equation: Just like before, divide both sides by , apply the natural logarithm to both sides, and use properties of the natural logarithm to obtain: It will take about days for mg to be left in a patient's system from the initial dose of mg.  Does this answer make sense? Let's compare it to the half-life, which is days. This half-life means that mg will be reduced to mg after days and then the remaining mg will be reduced to mg after the next days. So, it seems reasonable that mg is left after days.  Of course, you can check your answer by substituting into :       "
},
{
  "id": "sec_6_3-5-6",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-5-6",
  "type": "Example",
  "number": "6.3.6",
  "title": "",
  "body": "  During the 1986 Chernobyl disaster, radioactive Strontium-90 was released into the atmosphere https:\/\/semspub.epa.gov\/work\/HQ\/175430.pdf, accessed: 5\/24\/2020 . Strontium-90 contaminated the nearby region and accumulated in people's bones. (Incidentally, the isotope is often referred to as a bone seeker .) The half-life of Strontium-90 is years.     Find the percentage of the original amount of Strontium-90 absorbed that is still left in people's bones in 2020.    How many years will it take for of the original amount of Strontium-90 to be left?          Let be the amount of Strontium-90 remaining in an affected person's bones years after the disaster. Denote by the initial amount absorbed. The goal is to find a formula for in terms of the natural base: To find , we use the half-life and set up an equation for . At , half of is left; that is, : Divide both sides by so that Use the natural logarithm to solve for : Given this value of , a formula for is To answer the question, all that is left is to evaluate at , which corresponds to the year 2020. That is, In 2020, about of the original amount absorbed remains in people's bones. Note that the percentage of Strontium-90 left does not depend on the initial amount .    We are looking for such that . That is, for solutions to As before, divide both sides by , apply the natural logarithm and use properties of the logarithm to obtain Therefore, it will take approximately years before of the original amount remains.      "
},
{
  "id": "sec_6_3-6-3",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-6-3",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  The hydrogen ion concentration of lemon juice is  . Find the of lemon juice.    According to the formula above, the of lemon juice is    "
},
{
  "id": "sec_6_3-6-4",
  "level": "2",
  "url": "sec_6_3.html#sec_6_3-6-4",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  The of gastric acid is . Find the hydrogen ion concentration in gastric acid.    To find the hydrogen ion concentration, solve the equation . Put another way, . By the definition of the common logarithm, this means and therefore  .   "
},
{
  "id": "exercise-6_3_1",
  "level": "2",
  "url": "sec_6_3.html#exercise-6_3_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_3_2",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_3_3",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-6_3_4",
  "level": "2",
  "url": "sec_6_3.html#exercise-6_3_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_6_3_5",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  If a bank offers an interest rate of with interest compounded continuously (rather than once a year), your balance after years is: where is your initial deposit, in dollars.     How long will it take for your money to double?    approximately years      How long will it take for your money to triple?    approximately years    "
},
{
  "id": "exercise_6_3_6",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A laboratory culture of Salmonella enterica starts with bacteria at and doubles every minutes. https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/ , accessed: 6\/26\/20 Let be the number of bacteria in the culture at time , in minutes.     Write a formula for in terms of the natural base .           How long will it take for to triple? Does the tripling time depend on the initial amount ?    approximately minutes; no    "
},
{
  "id": "exercise_6_3_7",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Bacterial population dynamics is not as simple as measuring the doubling time of a bacterium in the laboratory, under optimal growth conditions. A more challenging question is to find the doubling time of a bacterium in its natural environment, for example, in the gut. The doubling time of Salmonella enterica in the gut is hours https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC6015860\/ , accessed: 6\/26\/20 . Let be an initial amount of Salmonella enterica in a patient's gut at . Let be the amount hours later.     Find a formula for in base- form.           How long will it take for the bacteria to reach of the initial amount?    approximately hours    "
},
{
  "id": "exercise_6_3_8",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Let be the amount of nicotine, in milligrams, in the bloodstream of a person after a cigarette is smoked. Time is measured in hours. As with most drugs, the process of elimination of nicotine from the body is a process of exponential decay. The half-life of nicotine is hours and the amount of nicotine absorbed from a cigarette is mg.     Find a formula in the form for the function .           How long will it take for the initial amount of nicotine to be reduced to mg?    approximately hours    "
},
{
  "id": "exercise_6_3_9",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Let be the amount of caffeine that remains in the person's body hours after finishing a cup of coffee. The amount of caffeine absorbed from a cup of coffee is mg. The continuous growth rate of caffeine in the body is .     Find a formula for in terms of the natural base.           Find the half-life of caffeine in the body. Round off your answer to two decimal places. Include units with your answer.    approximately hours      How long will it take for to be reduced to of the initial amount? Does the answer depend on the initial amount?    approximately hours; no      How long will it take for to be reduced to mg? Does the answer depend on the initial amount?    approximately hours; yes    "
},
{
  "id": "exercise_6_3_10",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  The value of an antique chair, , years after it was purchased for increases by per year.     Write a formula for in the form .           When will the value reach ?    approximately years    "
},
{
  "id": "exercise_6_3_11",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  The of orange juice is . Find the hydrogen ion concentration in orange juice.         "
},
{
  "id": "exercise_6_3_12",
  "level": "2",
  "url": "sec_6_3.html#exercise_6_3_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The hydrogen ion concentration in tomato juice is moles per liter. Find the of tomato juice.    The pH is .   "
},
{
  "id": "sec_7_1",
  "level": "1",
  "url": "sec_7_1.html",
  "type": "Section",
  "number": "7.1",
  "title": "Vertical and Horizontal Shifts",
  "body": " Vertical and Horizontal Shifts    After completing this section, you should be able to do the following.     Determine the effect of adding or subtracting a constant to the output of a function and identify the resulting vertical shift.    Determine the effect of adding or subtracting a constant to the input of a function and identify the resulting horizontal shift.    Combine vertical and horizontal shifts to describe or write the formula for a transformed function.      Vertical Shifts  What happens if we change the function by adding or subtracting a number from it? For instance, what would the graphs of and look like? In this case, the graph of is the graph of  shifted up one unit and the graph of is the graph of  shifted down 3 units .  In general, if we begin with the graph of a function , then the function can be given by the formula . That is, the -values of are the -values of adjusted by the addition of the number . Hence, the graph of is the graph of shifted either upward or downward depending upon the value of .       Vertical Shift   Given a function and a constant , is a vertical shift of the graph of . If is positive, then:    the graph of is the graph of shifted UP  units.  the graph of is the graph of shifted DOWN  units.        The graph of a function is given below. Plot and .       The graph of is the graph of shifted down 4 units while the graph of is the graph of shifted up 1.5 units. Hence, we have the following.         The total monthly cost to operate a company depends upon the fixed costs for facility rental and equipment as well as the number of units, , that the company produces that month. The table below shows this relationship for a typical month.                  Suppose the rent on the facility went up by per month. Create a table for the resulting total monthly cost function as a function of the number of units produced, .    The outputs in the original table give the original total monthly cost as a function of the number of units produced, . If the rent were to go up by per month, then the resulting total monthly cost function would be . This is a vertical shift of the original cost function , and values for it can be obtained by adding 200 to each of the outputs in the original table, as can be seen below.                      Horizontal Shifts  We saw that adding or subtracting a number from the output of a function results in a vertical shift. What happens if we add or subtract a number from the input of a function instead?  For instance, we know that would result in shifting the function up two units. But what if we added or subtracted a number under the square root instead that is, from the input of the function rather than the output?  To illustrate, we will consider the functions and . The graph of is the graph of shifted left two units while is the graph of shifted right 3 units.  To help explain why this is the case, notice that the formula is solved for and not . We can change this by squaring both sides of : If we were then to solve the formula for , we would square both sides of and then subtract 2:   Notice that the formula for the -values of involves subtracting  from the formula for the -values of the original function . This means that for each specific -value, the corresponding -value of is two units in the negative direction from that of the original function ; that is, two units to the left.       Horizontal Shifts   Given a function and a constant , is a horizontal shift of the graph of . If is positive, then    the graph of is the graph of shifted LEFT  units.  the graph of is the graph of shifted RIGHT  units.        In an effort to save on heating costs, the thermostat in a professor's home has been programmed to keep his house at 65 degrees while he is home from 4pm to 8am the following day and to drop the temperature to 55 degrees while he is at work from 8am to 4pm each day. This is illustrated in the graph below, where corresponds to hours past since midnight and corresponds to the thermostat setting.     Due to a schedule change requiring him to teach a night class, the professor needs to shift his entire work schedule later by four hours and hence adjust his thermostat setting accordingly. Sketch a graph reflecting this change.    Shifting his entire work schedule forward by 4 hours is equivalent to moving it forward in time by 4 hours. This corresponds to a horizontal shift to the right 4 units. This means that we must graph the corresponding horizontal shift .     Note that the original graph shows a thermostat setting of 55 degrees between times and , corresponding to a work day stretching from 8am to 4pm. The shifted graph shows a thermostat setting of 55 degrees between times and , corresponding to a work day stretching from 12pm to 8pm (pushed back 4 hours, as it was intended).      Consider the function given in the table below. Construct a table of values for .                    The function is a horizontal shift of ; its graph would be the graph of shifted to the left units. This means that to construct a table for , we should take the table for and subtract from each of the inputs while leaving the outputs unchanged.                      Combining Vertical and Horizontal Shifts  Shifting vertically and shifting horizontally are two illustrations of transformations of functions; they take an original function and transform (or change) it by shifting it in some way. Multiple transformations may be applied to an original function; for instance, both a vertical and a horizontal shift can be applied to an original function: The graph of the function is obtained by shifting the graph of down units and left units.    For each of the following, identify the function being transformed and describe the transformations being applied to it.                     The original function is . Since is being added on the end, the vertical shift is up units. Since is being subtracted from the input variable , the horizontal shift is right units.    The original function is . Since is being added on the end, the vertical shift is up units. Since is being added to the input variable , the horizontal shift is left unit.         Write the formula for the function obtained when      the graph of is shifted up unit and to the left units.    the graph of is shifted down units and to the right units.          To shift up unit, we add to the whole function and to shift to the left units we add to the input variable in the exponent. Hence, the new function will have formula .    To shift down units, we subtract from the whole function and to shift to the right units we subtract from the input variable under the cube root. Hence, the new function will have the formula .          Translating Functions   For each of the following, give the formula for the function satisfying the given condition.     The graph of is the graph of shifted down units.           The graph of is the graph of shifted up units.           The graph of is the graph of shifted right units.           The graph of is the graph of shifted left units.           The graph of is the graph of shifted up units and shifted right units.           The graph of is the graph of shifted down units and right units.           The graph of is the graph of shifted up units and right units.           The graph of is the graph of shifted down units and left units.           Identifying Transformations   For each of the following, identify the function being transformed and describe the transformations being applied to it.          The graph of is the graph of shifted left units.           The graph of is the graph of shifted down units.           The graph of is the graph of shifted right units and up units.           The graph of is the graph of shifted left unit and down units.      Sketching Graphs   Use the graph of shown below to sketch the graph of each of the following transformations of .                                                        Transformations done Numerically   Use the table of values of shown below to write the table of values for each of the following transformations of .                                                                                                                          The function gives the temperature (in degrees Fahrenheit) of the water in a spa minutes after the spa heater has been turned on.     Write the formula for a function that represents the temperature (in degrees Fahrenheit) of the water in the spa if the spa heater is turned on minutes earlier.           Write a formula for the function that represents the temperature (in degrees Fahrenheit) of the water in the spa if the temperature of the water in the spa were degrees warmer at the time that the heater was turned on.            The function gives the concentration (in nanograms per milliliter) of a certain medication in a patient's bloodstream minutes after a dose of the medication has been administered to a patient, assuming that the patient has nanograms per milliliter in their bloodstream at time . Write the formula for the function that supposes that at time the patient had nanograms per milliliter of the medication in their bloodstream.          "
},
{
  "id": "sec_7_1-2",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-2",
  "type": "Objectives",
  "number": "7.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine the effect of adding or subtracting a constant to the output of a function and identify the resulting vertical shift.    Determine the effect of adding or subtracting a constant to the input of a function and identify the resulting horizontal shift.    Combine vertical and horizontal shifts to describe or write the formula for a transformed function.    "
},
{
  "id": "fig_7_1_vert_shift",
  "level": "2",
  "url": "sec_7_1.html#fig_7_1_vert_shift",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_7_1-3-5",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-3-5",
  "type": "Definition",
  "number": "7.1.2",
  "title": "Vertical Shift.",
  "body": " Vertical Shift   Given a function and a constant , is a vertical shift of the graph of . If is positive, then:    the graph of is the graph of shifted UP  units.  the graph of is the graph of shifted DOWN  units.     "
},
{
  "id": "sec_7_1-3-6",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-3-6",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  The graph of a function is given below. Plot and .       The graph of is the graph of shifted down 4 units while the graph of is the graph of shifted up 1.5 units. Hence, we have the following.      "
},
{
  "id": "sec_7_1-3-7",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-3-7",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  The total monthly cost to operate a company depends upon the fixed costs for facility rental and equipment as well as the number of units, , that the company produces that month. The table below shows this relationship for a typical month.                  Suppose the rent on the facility went up by per month. Create a table for the resulting total monthly cost function as a function of the number of units produced, .    The outputs in the original table give the original total monthly cost as a function of the number of units produced, . If the rent were to go up by per month, then the resulting total monthly cost function would be . This is a vertical shift of the original cost function , and values for it can be obtained by adding 200 to each of the outputs in the original table, as can be seen below.                   "
},
{
  "id": "fig_7_1_hor_shift",
  "level": "2",
  "url": "sec_7_1.html#fig_7_1_hor_shift",
  "type": "Figure",
  "number": "7.1.5",
  "title": "",
  "body": "   "
},
{
  "id": "sec_7_1-4-8",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-4-8",
  "type": "Definition",
  "number": "7.1.6",
  "title": "Horizontal Shifts.",
  "body": " Horizontal Shifts   Given a function and a constant , is a horizontal shift of the graph of . If is positive, then    the graph of is the graph of shifted LEFT  units.  the graph of is the graph of shifted RIGHT  units.     "
},
{
  "id": "sec_7_1-4-9",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-4-9",
  "type": "Example",
  "number": "7.1.7",
  "title": "",
  "body": "  In an effort to save on heating costs, the thermostat in a professor's home has been programmed to keep his house at 65 degrees while he is home from 4pm to 8am the following day and to drop the temperature to 55 degrees while he is at work from 8am to 4pm each day. This is illustrated in the graph below, where corresponds to hours past since midnight and corresponds to the thermostat setting.     Due to a schedule change requiring him to teach a night class, the professor needs to shift his entire work schedule later by four hours and hence adjust his thermostat setting accordingly. Sketch a graph reflecting this change.    Shifting his entire work schedule forward by 4 hours is equivalent to moving it forward in time by 4 hours. This corresponds to a horizontal shift to the right 4 units. This means that we must graph the corresponding horizontal shift .     Note that the original graph shows a thermostat setting of 55 degrees between times and , corresponding to a work day stretching from 8am to 4pm. The shifted graph shows a thermostat setting of 55 degrees between times and , corresponding to a work day stretching from 12pm to 8pm (pushed back 4 hours, as it was intended).   "
},
{
  "id": "sec_7_1-4-10",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-4-10",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  Consider the function given in the table below. Construct a table of values for .                    The function is a horizontal shift of ; its graph would be the graph of shifted to the left units. This means that to construct a table for , we should take the table for and subtract from each of the inputs while leaving the outputs unchanged.                   "
},
{
  "id": "sec_7_1-5-3",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-5-3",
  "type": "Example",
  "number": "7.1.9",
  "title": "",
  "body": "  For each of the following, identify the function being transformed and describe the transformations being applied to it.                     The original function is . Since is being added on the end, the vertical shift is up units. Since is being subtracted from the input variable , the horizontal shift is right units.    The original function is . Since is being added on the end, the vertical shift is up units. Since is being added to the input variable , the horizontal shift is left unit.      "
},
{
  "id": "sec_7_1-5-4",
  "level": "2",
  "url": "sec_7_1.html#sec_7_1-5-4",
  "type": "Example",
  "number": "7.1.10",
  "title": "",
  "body": "  Write the formula for the function obtained when      the graph of is shifted up unit and to the left units.    the graph of is shifted down units and to the right units.          To shift up unit, we add to the whole function and to shift to the left units we add to the input variable in the exponent. Hence, the new function will have formula .    To shift down units, we subtract from the whole function and to shift to the right units we subtract from the input variable under the cube root. Hence, the new function will have the formula .      "
},
{
  "id": "exercise-7_1_1",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The graph of is the graph of shifted down units.        "
},
{
  "id": "exercise_7_1_2",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The graph of is the graph of shifted up units.        "
},
{
  "id": "exercise_7_1_3",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The graph of is the graph of shifted right units.        "
},
{
  "id": "exercise_7_1_4",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The graph of is the graph of shifted left units.        "
},
{
  "id": "exercise_7_1_5",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The graph of is the graph of shifted up units and shifted right units.        "
},
{
  "id": "exercise_7_1_6",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  The graph of is the graph of shifted down units and right units.        "
},
{
  "id": "exercise_7_1_7",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The graph of is the graph of shifted up units and right units.        "
},
{
  "id": "exercise-7_1_8",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The graph of is the graph of shifted down units and left units.        "
},
{
  "id": "exercise-7_1_9",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       The graph of is the graph of shifted left units.   "
},
{
  "id": "exercise_7_1_10",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       The graph of is the graph of shifted down units.   "
},
{
  "id": "exercise_7_1_11",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       The graph of is the graph of shifted right units and up units.   "
},
{
  "id": "exercise-7_1_12",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       The graph of is the graph of shifted left unit and down units.   "
},
{
  "id": "exercise-7_1_13",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_1_14",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_1_15",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-7_1_16",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-7_1_17",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise_7_1_18",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise_7_1_19",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise-7_1_20",
  "level": "2",
  "url": "sec_7_1.html#exercise-7_1_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise_7_1_21",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "  The function gives the temperature (in degrees Fahrenheit) of the water in a spa minutes after the spa heater has been turned on.     Write the formula for a function that represents the temperature (in degrees Fahrenheit) of the water in the spa if the spa heater is turned on minutes earlier.           Write a formula for the function that represents the temperature (in degrees Fahrenheit) of the water in the spa if the temperature of the water in the spa were degrees warmer at the time that the heater was turned on.         "
},
{
  "id": "exercise_7_1_22",
  "level": "2",
  "url": "sec_7_1.html#exercise_7_1_22",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "  The function gives the concentration (in nanograms per milliliter) of a certain medication in a patient's bloodstream minutes after a dose of the medication has been administered to a patient, assuming that the patient has nanograms per milliliter in their bloodstream at time . Write the formula for the function that supposes that at time the patient had nanograms per milliliter of the medication in their bloodstream.        "
},
{
  "id": "sec_7_2",
  "level": "1",
  "url": "sec_7_2.html",
  "type": "Section",
  "number": "7.2",
  "title": "Vertical and Horizontal Scaling",
  "body": " Vertical and Horizontal Scaling    After completing this section, you should be able to do the following.     Determine the effect of multiplying the output of a function by a constant and identify the resulting vertical scaling and any reflection.    Determine the effect of multiplying the input of a function by a constant and identify the resulting horizontal scaling and any reflection.    Identify, in order, the shifts, scalings, and reflections applied to a function written in the general form .      Vertical Scaling  Consider the function . What would happen if we multiply this function by a nonzero number? For instance, what would the graphs of and look like? In this case, the graph of is the graph of  stretched vertically by multiplying each of the original outputs of by and the graph of is the graph of  compressed vertically by dividing each of the original outputs of by (equivalently, we can think of this as multiplying the original outputs by ).  What if we were to multiply by a negative number? The graph of is the graph of  stretched vertically by multiplying each of the original outputs of by , but also reflected over the -axis .      In general, if we begin with the graph of a function , then the function can be given by the formula . That is, the -values of are the -values of adjusted by the multiplication of the number . Hence, the graph of is the graph of either stretched (if ) or compressed (if ) vertically, and additionally reflected over the -axis if is negative.   Vertical Scaling   Given a function and a constant , is a vertical scaling of the graph of and also a reflection of over the -axis if is negative. In either case:    the graph of is the graph of with its outputs multiplied by .        A table of values for a function is given below. Give the table of values for , whose graph is that of reflected over the -axis and compressed vertically by a factor of .                    A reflection over the -axis will change the sign of every output of , while vertical compression by a factor of means that every output must be divided by 10. We could think of as having the formula and the resulting table of values would be                      Horizontal Scaling  Vertical scaling results from multiplying all the outputs of a given function by the same number. We can also take an original function and multiply all of its inputs by the same number. Consider . The function is the graph of  reflected over the -axis while is the graph of  scaled horizontally by dividing each original input by (or, equivalently, multiplying each original input by ).       Horizontal Scaling   Given a function and a constant , is a horizontal scaling of the graph of and also a reflection of over the -axis if is negative. In either case    the graph of is the graph of with its inputs multiplied by .        The graph of a function is shown below. Write the formula for the function whose graph is that of stretched horizontally by a factor of and also graph .       In order to stretch by a factor of , we need to multiply each of its inputs by . To accomplish this, we must let the in the horizontal scaling formula be given by . Why? The function is the graph of scaled horizontally by multiplying each of its inputs by . Since we need to multiply each input by , we need , which implies that . So . The graph of is formed by taking each ordered pair on and leaving its -value the same but multiplying its -value by .         A certain medication metabolizes so that the concentration in the body hours after taking a 500 mg dose is modeled by the function . A 500 mg dose of a different medication follows the same pattern but metabolizes twice as fast. Use your knowledge of horizontal scaling to represent drug concentration curve of this different medication.    In order for the second medication to metabolize twice as fast as the first while following the same pattern, the graph of must be the graph of compressed horizontally by dividing each of the inputs of by 2 (or, equivalently, multiplying them by ). For instance, the concentration of the first medication 6 hours after a dose should be the same as the concentration of the second medication 3 hours after a dose. This corresponds to It can be verified that this formula makes sense by graphing the two curves, as shown.         Combining Shifts, Scaling, and Reflections  The transformations of functions introduced in this section can be combined with each other and with horizontal\/vertical shifting as described in the previous section. When identifying the transformations that have been applied to an original function, we work our way from the inside of the function out by looking at what is happening to the variable and in what order via order of operations. This is explained below.   Transformations of Functions in General   The graph of the transformation is the graph of with the following transformations applied in the listed order :   For a challenge, find a function such that applying a sequence of transformations in different orders produce different results!      Shifted horizontally according to .    Scaled horizontally according to with a reflection over the -axis if is negative.    Scaled vertically according to with a reflection over the -axis if is negative.    Shifted vertically according to .          Transforming Functions   For each of the following, give the formula for the function satisfying the given condition.     The graph of is the graph of stretched vertically by a factor of .           The graph of is the graph of compressed vertically by a factor of .           The graph of is the graph of stretched vertically by a factor of and reflected over the -axis.           The graph of is the graph of shifted to the right units and compressed vertically by a factor of .           The graph of is the graph of reflected over the -axis, compressed vertically by a factor of , and shifted up units.           The graph of is the graph of stretched horizontally by a factor of .           The graph of is the graph of compressed horizontally by a factor of .           The graph of is the graph of shifted to the right units, stretched horizontally by a factor of , reflected over the axis, stretched vertically by a factor of , and shifted up units.           Identifying Transformations   For each of the following, identify the function being transformed and describe the transformations being applied to it.          The graph of is the graph of shifted left units, scaled vertically by a factor of , and reflected over the -axis.           The graph of is the graph of shifted right units, compressed horizontally by a factor of , and shifted up units.           The graph of is the graph of compressed horizontally by a factor of , reflected over the -axis, compressed vertically by a factor of , and shifted down units.           The graph of is the graph of shifted left unit, compressed horizontally by a factor of , and shifted down units.      Sketching a Transformation   Use the graph of shown below to sketch the graph of each of the following transformations of .                                                                                Transformations Done Numerically   Use the table of values of shown below to write the table of values for each of the following transformations of .                                                                                                                         "
},
{
  "id": "sec_7_2-2",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-2",
  "type": "Objectives",
  "number": "7.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Determine the effect of multiplying the output of a function by a constant and identify the resulting vertical scaling and any reflection.    Determine the effect of multiplying the input of a function by a constant and identify the resulting horizontal scaling and any reflection.    Identify, in order, the shifts, scalings, and reflections applied to a function written in the general form .    "
},
{
  "id": "fig_7_2_vert_scal",
  "level": "2",
  "url": "sec_7_2.html#fig_7_2_vert_scal",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_7_2-3-6",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-3-6",
  "type": "Definition",
  "number": "7.2.2",
  "title": "Vertical Scaling.",
  "body": " Vertical Scaling   Given a function and a constant , is a vertical scaling of the graph of and also a reflection of over the -axis if is negative. In either case:    the graph of is the graph of with its outputs multiplied by .     "
},
{
  "id": "sec_7_2-3-7",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-3-7",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  A table of values for a function is given below. Give the table of values for , whose graph is that of reflected over the -axis and compressed vertically by a factor of .                    A reflection over the -axis will change the sign of every output of , while vertical compression by a factor of means that every output must be divided by 10. We could think of as having the formula and the resulting table of values would be                   "
},
{
  "id": "fig_7_2_hor_scal",
  "level": "2",
  "url": "sec_7_2.html#fig_7_2_hor_scal",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": "   "
},
{
  "id": "sec_7_2-4-4",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-4-4",
  "type": "Definition",
  "number": "7.2.5",
  "title": "Horizontal Scaling.",
  "body": " Horizontal Scaling   Given a function and a constant , is a horizontal scaling of the graph of and also a reflection of over the -axis if is negative. In either case    the graph of is the graph of with its inputs multiplied by .     "
},
{
  "id": "sec_7_2-4-5",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-4-5",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": "  The graph of a function is shown below. Write the formula for the function whose graph is that of stretched horizontally by a factor of and also graph .       In order to stretch by a factor of , we need to multiply each of its inputs by . To accomplish this, we must let the in the horizontal scaling formula be given by . Why? The function is the graph of scaled horizontally by multiplying each of its inputs by . Since we need to multiply each input by , we need , which implies that . So . The graph of is formed by taking each ordered pair on and leaving its -value the same but multiplying its -value by .      "
},
{
  "id": "sec_7_2-4-6",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-4-6",
  "type": "Example",
  "number": "7.2.7",
  "title": "",
  "body": "  A certain medication metabolizes so that the concentration in the body hours after taking a 500 mg dose is modeled by the function . A 500 mg dose of a different medication follows the same pattern but metabolizes twice as fast. Use your knowledge of horizontal scaling to represent drug concentration curve of this different medication.    In order for the second medication to metabolize twice as fast as the first while following the same pattern, the graph of must be the graph of compressed horizontally by dividing each of the inputs of by 2 (or, equivalently, multiplying them by ). For instance, the concentration of the first medication 6 hours after a dose should be the same as the concentration of the second medication 3 hours after a dose. This corresponds to It can be verified that this formula makes sense by graphing the two curves, as shown.      "
},
{
  "id": "sec_7_2-5-3",
  "level": "2",
  "url": "sec_7_2.html#sec_7_2-5-3",
  "type": "Result",
  "number": "7.2.8",
  "title": "Transformations of Functions in General.",
  "body": " Transformations of Functions in General   The graph of the transformation is the graph of with the following transformations applied in the listed order :   For a challenge, find a function such that applying a sequence of transformations in different orders produce different results!      Shifted horizontally according to .    Scaled horizontally according to with a reflection over the -axis if is negative.    Scaled vertically according to with a reflection over the -axis if is negative.    Shifted vertically according to .      "
},
{
  "id": "exercise-7_2_1",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The graph of is the graph of stretched vertically by a factor of .        "
},
{
  "id": "exercise_7_2_2",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The graph of is the graph of compressed vertically by a factor of .        "
},
{
  "id": "exercise_7_2_3",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The graph of is the graph of stretched vertically by a factor of and reflected over the -axis.        "
},
{
  "id": "exercise_7_2_4",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The graph of is the graph of shifted to the right units and compressed vertically by a factor of .        "
},
{
  "id": "exercise_7_2_5",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The graph of is the graph of reflected over the -axis, compressed vertically by a factor of , and shifted up units.        "
},
{
  "id": "exercise_7_2_6",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  The graph of is the graph of stretched horizontally by a factor of .        "
},
{
  "id": "exercise_7_2_7",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  The graph of is the graph of compressed horizontally by a factor of .        "
},
{
  "id": "exercise-7_2_8",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The graph of is the graph of shifted to the right units, stretched horizontally by a factor of , reflected over the axis, stretched vertically by a factor of , and shifted up units.        "
},
{
  "id": "exercise-7_2_9",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       The graph of is the graph of shifted left units, scaled vertically by a factor of , and reflected over the -axis.   "
},
{
  "id": "exercise_7_2_10",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       The graph of is the graph of shifted right units, compressed horizontally by a factor of , and shifted up units.   "
},
{
  "id": "exercise_7_2_11",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       The graph of is the graph of compressed horizontally by a factor of , reflected over the -axis, compressed vertically by a factor of , and shifted down units.   "
},
{
  "id": "exercise-7_2_12",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       The graph of is the graph of shifted left unit, compressed horizontally by a factor of , and shifted down units.   "
},
{
  "id": "exercise-7_2_13",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_2_14",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_2_15",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_2_16",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_2_17",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-7_2_18",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-7_2_19",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise_7_2_20",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise_7_2_21",
  "level": "2",
  "url": "sec_7_2.html#exercise_7_2_21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "                        "
},
{
  "id": "exercise-7_2_22",
  "level": "2",
  "url": "sec_7_2.html#exercise-7_2_22",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "                        "
},
{
  "id": "sec_7_3",
  "level": "1",
  "url": "sec_7_3.html",
  "type": "Section",
  "number": "7.3",
  "title": "Composing and Decomposing Functions",
  "body": " Composing and Decomposing Functions    After completing this section, you should be able to do the following.     State the definition of the composition of two functions and compute for given functions and .    Evaluate compositions of two or more functions and recognize that function composition is generally not commutative.    Decompose a complicated function into a composition of two or more simpler functions.     Suppose you wanted to convert 12000 inches to miles. The function takes an input in inches and yields an output in feet (because there are 12 inches in one foot). Similarly, the function takes an input in feet and yields an output in miles (because there are 5280 feet in a mile). We could thus convert 12000 inches to miles by first converting it to feet by computing and then taking 1000 feet and converting that to miles by calculating   Thus, we arrive at the conclusion that 12000 inches is approximately 0.189 miles.  What if we wanted a single function that could convert inches to miles, so that we only had to perform one calculation rather than two? Given two functions, it is possible to generate another function by composing one with the other. This can be done by substituting one function into the other.   Composition of Functions   Given two functions and , we denote the composition of with by and define We read the above as of of .  is defined for inputs such that is in the domain of and is in the domain of .  We often call the outside or the outer function of the composition ; we call the inside or the inner function of the composition .      Let and let . Find .    By definition, the function This means that we are taking the function and substituting into it. Thus, we have that     Observe that in the above example, , so this composite function in fact is the formula for converting an input in inches to miles.    Let , , and let . Find each of the following.                               We have that     We have that     Since we know from part (1), then     We have that         Note: Notice that the two functions and in the above example are different. The order in which you compose functions matters.   To compose functions is important, but it is often even more important to be able to decompose a complicated function into simpler functions; that is, represent a more complicated function as a composition of simpler functions.    Express each of the following as a composition of two functions and so that .                          To represent the function as a composition , think of the function as a sequence of operations. To obtain output from an input we perform the following operations: multiply by , subtract , and then raise to the power . To decompose the function, split this sequence of operations into two simpler chunks. Multiply by and subtract  that is the first group of operations which gives us our inner function . The next operation is raise to the power which gives us the outer function .  Does this work? We compute for this choice of and : This is equivalent to our original function , so we have chosen and appropriately, and we are done.    The sequence of operations performed on the input to get the corresponding output is: add and then take the square root of the result. Take the inner function which adds and the outer function which takes the square root. That is, take and . The given function is the composition :     The function represents the sequence of operations: take the square of the input, add , and then take the natural logarithm of the result. Hence, we can write the function as for and : which gives our original function .         Decompose the function into two simpler functions and .    The sequence of operations that performs on an input to obtain the output is: add 1, take the square root, take the reciprocal of the result. We group them as follows: add 1 and take the square root for the inner function and take the reciprocal for the outer function. In other words we take the inner function and the outer function . It works as:   Is it the only way to decompose ? No. Usually there are many ways to decompose a given function. For the function given above, take and . Those two functions work as well:       Decompose the function into two simpler functions and .    The sequence of operations for is: take the cube, subtract 2 and then take the natural exponential of the result. The following functions should work: , . Indeed:      Technically, you can always decompose a function into by choosing , for example. For reasons you might see in Calculus, this is not really that useful! Try to find more nontrivial ways to decompose a function.     Computing a Composition   For each of the following, find and .      and      ;        and      ;        and      ;        and      ;        and      ;        and      ;        and      ;        and      ;        and      ;        and      ;       Evaluating a Composition   For each of the following, find for the functions and given.      and             and             and             and            Decomposing a Function   For each of the following, express it as a composition of two functions and so that .           ;             ;             ;             ;             ;             ;             ;             ;       "
},
{
  "id": "sec_7_3-2",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-2",
  "type": "Objectives",
  "number": "7.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of the composition of two functions and compute for given functions and .    Evaluate compositions of two or more functions and recognize that function composition is generally not commutative.    Decompose a complicated function into a composition of two or more simpler functions.    "
},
{
  "id": "sec_7_3-6",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-6",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Composition of Functions.",
  "body": " Composition of Functions   Given two functions and , we denote the composition of with by and define We read the above as of of .  is defined for inputs such that is in the domain of and is in the domain of .  We often call the outside or the outer function of the composition ; we call the inside or the inner function of the composition .   "
},
{
  "id": "sec_7_3-7",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-7",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Let and let . Find .    By definition, the function This means that we are taking the function and substituting into it. Thus, we have that    "
},
{
  "id": "sec_7_3-9",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-9",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Let , , and let . Find each of the following.                               We have that     We have that     Since we know from part (1), then     We have that       "
},
{
  "id": "sec_7_3-12",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-12",
  "type": "Example",
  "number": "7.3.4",
  "title": "",
  "body": "  Express each of the following as a composition of two functions and so that .                          To represent the function as a composition , think of the function as a sequence of operations. To obtain output from an input we perform the following operations: multiply by , subtract , and then raise to the power . To decompose the function, split this sequence of operations into two simpler chunks. Multiply by and subtract  that is the first group of operations which gives us our inner function . The next operation is raise to the power which gives us the outer function .  Does this work? We compute for this choice of and : This is equivalent to our original function , so we have chosen and appropriately, and we are done.    The sequence of operations performed on the input to get the corresponding output is: add and then take the square root of the result. Take the inner function which adds and the outer function which takes the square root. That is, take and . The given function is the composition :     The function represents the sequence of operations: take the square of the input, add , and then take the natural logarithm of the result. Hence, we can write the function as for and : which gives our original function .      "
},
{
  "id": "sec_7_3-13",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-13",
  "type": "Example",
  "number": "7.3.5",
  "title": "",
  "body": "  Decompose the function into two simpler functions and .    The sequence of operations that performs on an input to obtain the output is: add 1, take the square root, take the reciprocal of the result. We group them as follows: add 1 and take the square root for the inner function and take the reciprocal for the outer function. In other words we take the inner function and the outer function . It works as:   Is it the only way to decompose ? No. Usually there are many ways to decompose a given function. For the function given above, take and . Those two functions work as well:    "
},
{
  "id": "sec_7_3-14",
  "level": "2",
  "url": "sec_7_3.html#sec_7_3-14",
  "type": "Example",
  "number": "7.3.6",
  "title": "",
  "body": "  Decompose the function into two simpler functions and .    The sequence of operations for is: take the cube, subtract 2 and then take the natural exponential of the result. The following functions should work: , . Indeed:    "
},
{
  "id": "exercise-7_3_1",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_1",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_2",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_2",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_3",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_3",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_4",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_4",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_5",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_5",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_6",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_6",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_7",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_7",
  "type": "Exercise",
  "number": "7.3.7",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_8",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_8",
  "type": "Exercise",
  "number": "7.3.8",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise_7_3_9",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_9",
  "type": "Exercise",
  "number": "7.3.9",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise-7_3_10",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_10",
  "type": "Exercise",
  "number": "7.3.10",
  "title": "",
  "body": "   and      ;    "
},
{
  "id": "exercise-7_3_11",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_11",
  "type": "Exercise",
  "number": "7.3.11",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_7_3_12",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_12",
  "type": "Exercise",
  "number": "7.3.12",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise_7_3_13",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_13",
  "type": "Exercise",
  "number": "7.3.13",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise-7_3_14",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_14",
  "type": "Exercise",
  "number": "7.3.14",
  "title": "",
  "body": "   and         "
},
{
  "id": "exercise-7_3_15",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_15",
  "type": "Exercise",
  "number": "7.3.15",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_16",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_16",
  "type": "Exercise",
  "number": "7.3.16",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_17",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_17",
  "type": "Exercise",
  "number": "7.3.17",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_18",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_18",
  "type": "Exercise",
  "number": "7.3.18",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_19",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_19",
  "type": "Exercise",
  "number": "7.3.19",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_20",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_20",
  "type": "Exercise",
  "number": "7.3.20",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise_7_3_21",
  "level": "2",
  "url": "sec_7_3.html#exercise_7_3_21",
  "type": "Exercise",
  "number": "7.3.21",
  "title": "",
  "body": "        ;    "
},
{
  "id": "exercise-7_3_22",
  "level": "2",
  "url": "sec_7_3.html#exercise-7_3_22",
  "type": "Exercise",
  "number": "7.3.22",
  "title": "",
  "body": "        ;    "
},
{
  "id": "sec_7_4",
  "level": "1",
  "url": "sec_7_4.html",
  "type": "Section",
  "number": "7.4",
  "title": "Inverse Functions",
  "body": " Inverse Functions    After completing this section, you should be able to do the following.     State the definition of an inverse function and verify whether two given functions are inverses of one another.    Find the inverse of a function algebraically, when it exists, by reversing the roles of the input and output variables.    Determine whether a function has an inverse function by checking whether the resulting equation defines a function.      In 1897, Amos Dolbear published the article The Cricket as a Thermometer. This paper included the formulation of what is now known as Dolbear's Law: a formula that states the relationship between the air temperature and the number of times that a cricket chirps in a given span of time. This law states that the air temperature in degrees Fahrenheit is a function of the number of times that a cricket chirps in 15 seconds; that is So, if a cricket chirps 20 times in 15 seconds, then the temperature must be given by   What if it was known that the temperature was ? How would we determine how many times a cricket would be expected to chirp in a 15-second time interval at this temperature? We could set and solve for : Thus at a temperature of , a cricket would be expected to chirp 30 times in a 15-second time interval.  In fact, if we wanted to know how many times a cricket would be expected to chirp in a 15-second time interval at any specific temperature , we could set and solve for : Now we have the number of times a cricket will chirp in a 15-second time interval written as a function of the air temperature: We have in fact found the inverse function of .  A function takes an input, does something to it, and produces a single output number. Given a specific output from a function, we may wonder what input resulted in this output. Informally, an inverse function can be thought of as a function's undo button (provided it exists). It takes the output the original function gave, does something to it, and the result is the input that we put in the original function to begin with.   The Inverse of a Function   An inverse function of a function is a function that satisfies both of the following conditions:    for all in the domain of  for all in the domain of      Each of the above bullet points describes the following behavior of an inverse: takes the input , does something to it, and produces an output. If we then put this output through the inverse function , it undoes the work done by the original function and takes us back to the initial input .    Show that and are inverse functions.    To show that and are inverse functions, we must verify that when the functions are composed in either order, the result is the input variable of the interior function in the composition. It can be seen that while so and are indeed inverses.      Finding Inverse Functions Algebraically  If the ordered pair is on the graph of the function , then the ordered pair is on the graph of its inverse. This gives us an idea of how to find an inverse function algebraically.   Finding the Inverse of a Function Algebraically   To find the inverse of a function :     Set .    Reverse the roles of and .    Solve the resulting equation for .    Verify that your result from Step 3 is a function. If it is, then this is the inverse function of . If it is not, then does not have an inverse function.         If possible, find the inverse of each function. If not possible, state this to be the case.                               To find the inverse, we write , reverse the roles of and , and then solve for : The equation is a linear function, so has an inverse function, and it is given by .     The equation is a transformation of the cubic function and so is itself a function. Hence, has an inverse function and it is given by .     Using a graphing calculator, it can be seen that passes the vertical line test and is therefore a function. The inverse of is .     The formula is not a function. Why? There are values of which result in two different outputs for ; for instance, results in . For the single input , there are two outputs, and . For this reason, does not have an inverse function.          Identifying Inverse Functions   For each of the following, find and for the pair of functions and given. Use your results to determine whether and are inverses of each other.      and     Not inverses.       and     Not inverses.       and     Inverses.       and     Not inverses.       and     Inverses.       and     Inverses.      Computing an Inverse Function   For each of the following, find the inverse of each function, if possible. If not possible, state this to be the case.                                              No inverse function.                                   No inverse function.                                                                               The function is used to convert an input in degrees Celsius to an output in degrees Fahrenheit. Find the inverse function, which is the formula used to convert an input in degrees Fahrenheit to an output in degrees Celsius.          "
},
{
  "id": "sec_7_4-2",
  "level": "2",
  "url": "sec_7_4.html#sec_7_4-2",
  "type": "Objectives",
  "number": "7.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of an inverse function and verify whether two given functions are inverses of one another.    Find the inverse of a function algebraically, when it exists, by reversing the roles of the input and output variables.    Determine whether a function has an inverse function by checking whether the resulting equation defines a function.    "
},
{
  "id": "sec_7_4-3-5",
  "level": "2",
  "url": "sec_7_4.html#sec_7_4-3-5",
  "type": "Definition",
  "number": "7.4.1",
  "title": "The Inverse of a Function.",
  "body": " The Inverse of a Function   An inverse function of a function is a function that satisfies both of the following conditions:    for all in the domain of  for all in the domain of     "
},
{
  "id": "sec_7_4-3-7",
  "level": "2",
  "url": "sec_7_4.html#sec_7_4-3-7",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  Show that and are inverse functions.    To show that and are inverse functions, we must verify that when the functions are composed in either order, the result is the input variable of the interior function in the composition. It can be seen that while so and are indeed inverses.   "
},
{
  "id": "sec_7_4-4-3",
  "level": "2",
  "url": "sec_7_4.html#sec_7_4-4-3",
  "type": "Result",
  "number": "7.4.3",
  "title": "Finding the Inverse of a Function Algebraically.",
  "body": " Finding the Inverse of a Function Algebraically   To find the inverse of a function :     Set .    Reverse the roles of and .    Solve the resulting equation for .    Verify that your result from Step 3 is a function. If it is, then this is the inverse function of . If it is not, then does not have an inverse function.      "
},
{
  "id": "sec_7_4-4-4",
  "level": "2",
  "url": "sec_7_4.html#sec_7_4-4-4",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  If possible, find the inverse of each function. If not possible, state this to be the case.                               To find the inverse, we write , reverse the roles of and , and then solve for : The equation is a linear function, so has an inverse function, and it is given by .     The equation is a transformation of the cubic function and so is itself a function. Hence, has an inverse function and it is given by .     Using a graphing calculator, it can be seen that passes the vertical line test and is therefore a function. The inverse of is .     The formula is not a function. Why? There are values of which result in two different outputs for ; for instance, results in . For the single input , there are two outputs, and . For this reason, does not have an inverse function.      "
},
{
  "id": "exercise-7_4_1",
  "level": "2",
  "url": "sec_7_4.html#exercise-7_4_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "   and     Not inverses.   "
},
{
  "id": "exercise_7_4_2",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   and     Not inverses.   "
},
{
  "id": "exercise_7_4_3",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "   and     Inverses.   "
},
{
  "id": "exercise_7_4_4",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "   and     Not inverses.   "
},
{
  "id": "exercise_7_4_5",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   and     Inverses.   "
},
{
  "id": "exercise-7_4_6",
  "level": "2",
  "url": "sec_7_4.html#exercise-7_4_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   and     Inverses.   "
},
{
  "id": "exercise-7_4_7",
  "level": "2",
  "url": "sec_7_4.html#exercise-7_4_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_8",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_9",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_10",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       No inverse function.   "
},
{
  "id": "exercise_7_4_11",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_12",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_13",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "       No inverse function.   "
},
{
  "id": "exercise_7_4_14",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_15",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_16",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_17",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_18",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-7_4_19",
  "level": "2",
  "url": "sec_7_4.html#exercise-7_4_19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_7_4_20",
  "level": "2",
  "url": "sec_7_4.html#exercise_7_4_20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  The function is used to convert an input in degrees Celsius to an output in degrees Fahrenheit. Find the inverse function, which is the formula used to convert an input in degrees Fahrenheit to an output in degrees Celsius.        "
},
{
  "id": "sec_8_1",
  "level": "1",
  "url": "sec_8_1.html",
  "type": "Section",
  "number": "8.1",
  "title": "Periodic Functions",
  "body": " Periodic Functions    After completing this section, you should be able to do the following.     State the definition of a periodic function and identify the period of a periodic process or its graph.    Determine the amplitude, equilibrium, and midline of a periodic function from its graph or from its maximum and minimum values.    Apply the concepts of period, amplitude, equilibrium, and midline to real-life periodic processes.     Many functions encountered in mathematics and in real-life applications display oscillatory, wave-like, or cyclical behavior; that is, the same cycle of a constant duration keeps repeating over and over again. Examples of this include the volume of the air in your lungs as you breathe in and out, the temperature of a room that is regulated by a thermostat, the height of the water in a harbor between the tides, and so on. In mathematics such cyclical functions are called periodic .    Each year a hare population, , in a national park changes with the seasons. The population is at its minimum of hares in January. In the summer, when the weather gets warm and the grass is green, the population grows in size to . By the following January, the population decreases again to hares. The same cycle repeats every year. Let be measured in months and correspond to January. The graph of the population function is as follows:       The behavior of this population function is cyclical the function is periodic. The time needed for one full cycle to be executed is months. We say the period of is months. Note that for every time the size of the population months later, at time , is exactly the same as the population at .    A precise definition of a periodic function is as follows.   Periodic Function   A nonconstant function is called periodic if a positive number exists such that for all in the domain of . The smallest such is called the period of . If is time, we can characterize the period as the shortest time needed for one full cycle of to be executed.    The definition says that adding the period to the input of the original function does not change the original output. In other words, the behavior of on the interval will be repeated on the interval , and then again on the interval , and so on. The function executes the same cycle on every interval of duration .  Besides the period, there are two other important numbers associated with a periodic function: the amplitude and the equilibrium . The latter is closely related to the concept of the midline .    Given a periodic function , let and be the largest and smallest possible values of , respectively. The amplitude is given by: The midpoint between and is called the equilibrium of a periodic function and is given by: The midline is the horizontal line through the point on the vertical axis; that is, the line with the equation: We say for short that the midline is the horizontal line through the equilibrium.    In the period is months. The maximum value of is and the minimum value is . Hence, the amplitude is The equilibrium is The midline is the horizontal line through ; that is, the line . The graph of above illustrates all three concepts.  We can characterize the amplitude, equilibrium, and midline in intuitive terms as follows:      If a periodic function attains its maximum once per cycle (that is, has one peak per cycle) then the period is the distance between consecutive peaks.  The equilibrium is the value midway between the maximum and minimum values.  The midline is the horizontal line through the equilibrium.  The amplitude is the vertical distance from the midline to a peak.        Find the period, amplitude, equilibrium, and midline of the function whose graph is given below.       At the function starts from the value . As increases, decreases all the way to . Then starts increasing, reaches again at , continues increasing to the value , and decreases back to at . After , the same cycle repeats between to : decreasing to , increasing to , increasing to , decreasing back to . The function executes the same cycle every units of .  Hence, is periodic with the period . To calculate the amplitude and the equilibrium, notice that and . Therefore, The midline is the horizontal line through the equilibrium, which has equation The function oscillates around the equilibrium , varying between units down and units up from the equilibrium; that is, with amplitude . It executes one full cycle over any interval of duration .      The temperature of a room, , in , is regulated by a thermostat. The thermostat triggers the heat to go on when the temperature drops to and shuts the heat at . Below is the graph of the temperature function , is measured in minutes.        Find the period, amplitude, equilibrium, and the midline.    Suppose that corresponds to 12 p.m. What is the temperature in the room at 12:45 p.m.?    Sketch the midline on the graph of the function.          The function reaches its peak once a cycle. The distance between two peaks is minutes, so the period is minutes. The maximum and minimum values of the temperature are and respectively. Therefore, The midline is the horizontal line through the equilibrium; that is, the line with the equation .    Because the period is , then for all values of . The graph of the function reveals that . Therefore, .    We found the midline to be , which is shown in red on the following graph.             Determine whether each function graphed below is a periodic function. For those that are periodic, approximate the amplitude, midline, and period.                                                : periodic with amplitude ; midline ; period .     : not periodic.     : periodic with amplitude ; midline ; period ;     : not periodic.     : not periodic.     : periodic with amplitude ; midline ; period .         Each day, the tide in a harbor continuously goes in and out, raising and lowering a boat anchored there. At low tide, the boat is only meters above the ocean floor. Six hours later, at peak high tide, the boat is meters above the ocean floor. Six hours after peak high tide, it is low tide again. Suppose the boat is at high tide at midnight.     Sketch and label a periodic function modeling the boat's distance above the ocean floor as a function of time hours since midnight.    Answers will vary; a correct sketch is periodic with the period, amplitude, and midline identified in part (b).      Identify the period, amplitude, and midline of the periodic function.    period: ; amplitude: ; midline:        You decide to ride the Ferris wheel at the local carnival. You are feet above the ground at the bottom of the Ferris wheel and feet above the ground at the top. It takes seconds for you to reach the maximum height from the minimum height and seconds to reach the minimum height from the maximum height. Suppose you are at the bottom of the ride at time seconds.     Sketch and label a periodic function modeling your height above the ground seconds into your Ferris wheel ride.           Identify the period, amplitude, and midline of the periodic function.    period: ; amplitude: ; midline:       "
},
{
  "id": "sec_8_1-2",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-2",
  "type": "Objectives",
  "number": "8.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of a periodic function and identify the period of a periodic process or its graph.    Determine the amplitude, equilibrium, and midline of a periodic function from its graph or from its maximum and minimum values.    Apply the concepts of period, amplitude, equilibrium, and midline to real-life periodic processes.    "
},
{
  "id": "example-ch8-hare",
  "level": "2",
  "url": "sec_8_1.html#example-ch8-hare",
  "type": "Example",
  "number": "8.1.1",
  "title": "",
  "body": "  Each year a hare population, , in a national park changes with the seasons. The population is at its minimum of hares in January. In the summer, when the weather gets warm and the grass is green, the population grows in size to . By the following January, the population decreases again to hares. The same cycle repeats every year. Let be measured in months and correspond to January. The graph of the population function is as follows:       The behavior of this population function is cyclical the function is periodic. The time needed for one full cycle to be executed is months. We say the period of is months. Note that for every time the size of the population months later, at time , is exactly the same as the population at .   "
},
{
  "id": "sec_8_1-6",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-6",
  "type": "Definition",
  "number": "8.1.2",
  "title": "Periodic Function.",
  "body": " Periodic Function   A nonconstant function is called periodic if a positive number exists such that for all in the domain of . The smallest such is called the period of . If is time, we can characterize the period as the shortest time needed for one full cycle of to be executed.   "
},
{
  "id": "sec_8_1-9",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-9",
  "type": "Result",
  "number": "8.1.3",
  "title": "",
  "body": "  Given a periodic function , let and be the largest and smallest possible values of , respectively. The amplitude is given by: The midpoint between and is called the equilibrium of a periodic function and is given by: The midline is the horizontal line through the point on the vertical axis; that is, the line with the equation: We say for short that the midline is the horizontal line through the equilibrium.   "
},
{
  "id": "sec_8_1-12",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-12",
  "type": "Result",
  "number": "8.1.4",
  "title": "",
  "body": "    If a periodic function attains its maximum once per cycle (that is, has one peak per cycle) then the period is the distance between consecutive peaks.  The equilibrium is the value midway between the maximum and minimum values.  The midline is the horizontal line through the equilibrium.  The amplitude is the vertical distance from the midline to a peak.     "
},
{
  "id": "sec_8_1-13",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-13",
  "type": "Example",
  "number": "8.1.5",
  "title": "",
  "body": "  Find the period, amplitude, equilibrium, and midline of the function whose graph is given below.       At the function starts from the value . As increases, decreases all the way to . Then starts increasing, reaches again at , continues increasing to the value , and decreases back to at . After , the same cycle repeats between to : decreasing to , increasing to , increasing to , decreasing back to . The function executes the same cycle every units of .  Hence, is periodic with the period . To calculate the amplitude and the equilibrium, notice that and . Therefore, The midline is the horizontal line through the equilibrium, which has equation The function oscillates around the equilibrium , varying between units down and units up from the equilibrium; that is, with amplitude . It executes one full cycle over any interval of duration .   "
},
{
  "id": "sec_8_1-14",
  "level": "2",
  "url": "sec_8_1.html#sec_8_1-14",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  The temperature of a room, , in , is regulated by a thermostat. The thermostat triggers the heat to go on when the temperature drops to and shuts the heat at . Below is the graph of the temperature function , is measured in minutes.        Find the period, amplitude, equilibrium, and the midline.    Suppose that corresponds to 12 p.m. What is the temperature in the room at 12:45 p.m.?    Sketch the midline on the graph of the function.          The function reaches its peak once a cycle. The distance between two peaks is minutes, so the period is minutes. The maximum and minimum values of the temperature are and respectively. Therefore, The midline is the horizontal line through the equilibrium; that is, the line with the equation .    Because the period is , then for all values of . The graph of the function reveals that . Therefore, .    We found the midline to be , which is shown in red on the following graph.         "
},
{
  "id": "exercise_8_1_1",
  "level": "2",
  "url": "sec_8_1.html#exercise_8_1_1",
  "type": "Exercise",
  "number": "8.1.1",
  "title": "",
  "body": "  Determine whether each function graphed below is a periodic function. For those that are periodic, approximate the amplitude, midline, and period.                                                : periodic with amplitude ; midline ; period .     : not periodic.     : periodic with amplitude ; midline ; period ;     : not periodic.     : not periodic.     : periodic with amplitude ; midline ; period .      "
},
{
  "id": "exercise_8_1_2",
  "level": "2",
  "url": "sec_8_1.html#exercise_8_1_2",
  "type": "Exercise",
  "number": "8.1.2",
  "title": "",
  "body": "  Each day, the tide in a harbor continuously goes in and out, raising and lowering a boat anchored there. At low tide, the boat is only meters above the ocean floor. Six hours later, at peak high tide, the boat is meters above the ocean floor. Six hours after peak high tide, it is low tide again. Suppose the boat is at high tide at midnight.     Sketch and label a periodic function modeling the boat's distance above the ocean floor as a function of time hours since midnight.    Answers will vary; a correct sketch is periodic with the period, amplitude, and midline identified in part (b).      Identify the period, amplitude, and midline of the periodic function.    period: ; amplitude: ; midline:     "
},
{
  "id": "exercise_8_1_3",
  "level": "2",
  "url": "sec_8_1.html#exercise_8_1_3",
  "type": "Exercise",
  "number": "8.1.3",
  "title": "",
  "body": "  You decide to ride the Ferris wheel at the local carnival. You are feet above the ground at the bottom of the Ferris wheel and feet above the ground at the top. It takes seconds for you to reach the maximum height from the minimum height and seconds to reach the minimum height from the maximum height. Suppose you are at the bottom of the ride at time seconds.     Sketch and label a periodic function modeling your height above the ground seconds into your Ferris wheel ride.           Identify the period, amplitude, and midline of the periodic function.    period: ; amplitude: ; midline:     "
},
{
  "id": "sec_8_2",
  "level": "1",
  "url": "sec_8_2.html",
  "type": "Section",
  "number": "8.2",
  "title": "Angles Using the Unit Circle, Radian Measure",
  "body": " Angles Using the Unit Circle, Radian Measure    After completing this section, you should be able to do the following.     Identify positive and negative angles in standard position and describe an angle in terms of its initial and terminal sides.    State the definition of radian measure and convert an angle between degrees and radians.    Determine the quadrant containing the terminal side of an angle given in radians and compute the arc length spanned by an angle on a circle of a given radius.      We are working toward defining the two important trigonometric functions and . These functions, referred to as the sine function and the cosine function respectively, are periodic functions which are commonly used in applied sciences to model periodic processes.  The first step is to define the trigonometric ratios and for any angle , positive or negative. We also have to learn how to measure angles in radians rather than in degrees. In this section we define positive and negative angles of any size and radian measure.  For a given angle, we designate one side as the initial side and the other as the terminal side . We imagine the angle being swept out starting from the initial side and ending at the terminal side, as shown below. When the rotation from the initial side to terminal side is counterclockwise, we say that the angle is positive; when the rotation is clockwise, we say that the angle is negative.    The angle , positive as rotation is counterclockwise.       The angle , negative as rotation is clockwise.       We say that an angle is in standard position if it is located on the -plane with the vertex at the origin and initial side aligned with the positive -axis. Again, counterclockwise rotations generate positive angles while clockwise rotations yield negative angles:    The angle in standard position       The angle in standard position       We can rotate around the origin as many times as we want and obtain angles greater than and smaller than :    The angle in standard position       The angle in standard position         Definition of Radian Measure  The radian measure of a positive angle is equal to the length of the arc spanned by the angle on the circle of radius centered at the vertex of the angle:     The radian measure of a negative angle is equal to minus the length of the arc spanned by the angle.  Recall that the unit circle on the -plane is the circle of radius centered at the origin . Here is the precise definition of one radian.   Radian Measure     An angle of 1 radian is the angle in standard position, in the counterclockwise direction, which spans the arc of length on the unit circle.  An angle of radian is the angle in standard position, in the clockwise direction, which spans the arc of length on the unit circle.    The radius and the arc must be measured in the same units of length.    The angle of radian spans the arc of length on the unit circle the length of the arc and the length of the radius are the same. Imagine picking up the radius of the unit circle like a yardstick and wrapping it over a piece of the circle to obtain the arc of the same length as the radius. If you measure the arc of length equal to twice the radius, the arc will correspond to the angle of radians, and so on:     The first thing we notice is that the angle of radian, denoted by rad, is a relatively large angle while the angle of is a very small angle. To understand why this is, let's look at the full angle of in terms of radians. The circumference of a circle of radius is . That means the circumference of the unit circle is simply . Therefore, the angle that spans the whole circle one complete counterclockwise revolution is the angle of radians, or . Hence, we have the following relationship between degrees and radians: This gives the following conversion formulas : Note that rad and 1 rad .    Convert the following angles from degrees to radians.                            We use conversion formulas:      rad.     rad.     rad.     rad.         Convert the following angles from radians to degrees.      rad     rad     rad     rad       We use conversion formulas:      rad .     rad .     rad .     rad .       Here is a list of some frequently used angles and their measure in degrees and in radians.    Degrees  Radians  Radians Approx.                                                      The figure below shows a few angles on the unit circle together with their radian measure. From now on, you should try to get used to radian measure and think about angles in terms of radians rather than degrees.          In which quadrant is the angle of radians? An angle of radians? (In other words, in which quadrants are the terminal sides of these angles?)    Refer to . The second quadrant includes angles between radians and radians. The angle of radians must lie in the second quadrant. The angle of radians is between and radians, so radians is in the fourth quadrant.    An angle of radians spans an arc of length on the unit circle. By similarity of circular sectors, the same angle of radians spans the arc of length on the circle of radius :     The length, , of the arc spanned in a circle of radius by an angle of radians is:     Find the arc length spanned by an angle of radians on the circle of radius 5 centimeters.    According to the formula above, centimeters. Remember: The units of radius and arc length are the same.       Converting to Radians   For each of the following, convert the angle from degrees to radians. Give both exact answers and, when appropriate, approximations to three decimal places. Also identify which quadrant each angle lies in.           radians; Quadrant I            radians; Quadrant IV            radians; Quadrant III            radians; Quadrant II      Computing to Degrees   For each of the following, convert the angle from radians to degrees. Give both exact answers and, when appropriate, approximations to three decimal places. Also identify which quadrant each angle lies in.      radians     ; Quadrant I       radians     ; Quadrant IV       radians     ; Quadrant II       radians     ; Quadrant III       What is the arc length spanned by the angle radians on the circle of radius inches?     inches      What is the arc length spanned by the angle on the circle of radius centimeters?     centimeters     "
},
{
  "id": "sec_8_2-2",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-2",
  "type": "Objectives",
  "number": "8.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Identify positive and negative angles in standard position and describe an angle in terms of its initial and terminal sides.    State the definition of radian measure and convert an angle between degrees and radians.    Determine the quadrant containing the terminal side of an angle given in radians and compute the arc length spanned by an angle on a circle of a given radius.    "
},
{
  "id": "fig_8_2_angle1",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle1",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": " The angle , positive as rotation is counterclockwise.     "
},
{
  "id": "fig_8_2_angle2",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle2",
  "type": "Figure",
  "number": "8.2.2",
  "title": "",
  "body": " The angle , negative as rotation is clockwise.     "
},
{
  "id": "fig_8_2_angle3",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle3",
  "type": "Figure",
  "number": "8.2.3",
  "title": "",
  "body": " The angle in standard position     "
},
{
  "id": "fig_8_2_angle4",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle4",
  "type": "Figure",
  "number": "8.2.4",
  "title": "",
  "body": " The angle in standard position     "
},
{
  "id": "fig_8_2_angle5",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle5",
  "type": "Figure",
  "number": "8.2.5",
  "title": "",
  "body": " The angle in standard position     "
},
{
  "id": "fig_8_2_angle6",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_angle6",
  "type": "Figure",
  "number": "8.2.6",
  "title": "",
  "body": " The angle in standard position     "
},
{
  "id": "sec_8_2-4-6",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-4-6",
  "type": "Definition",
  "number": "8.2.7",
  "title": "Radian Measure.",
  "body": " Radian Measure     An angle of 1 radian is the angle in standard position, in the counterclockwise direction, which spans the arc of length on the unit circle.  An angle of radian is the angle in standard position, in the clockwise direction, which spans the arc of length on the unit circle.    The radius and the arc must be measured in the same units of length.   "
},
{
  "id": "sec_8_2-4-10",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-4-10",
  "type": "Example",
  "number": "8.2.8",
  "title": "",
  "body": "  Convert the following angles from degrees to radians.                            We use conversion formulas:      rad.     rad.     rad.     rad.      "
},
{
  "id": "sec_8_2-4-11",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-4-11",
  "type": "Example",
  "number": "8.2.9",
  "title": "",
  "body": "  Convert the following angles from radians to degrees.      rad     rad     rad     rad       We use conversion formulas:      rad .     rad .     rad .     rad .      "
},
{
  "id": "fig_8_2_9",
  "level": "2",
  "url": "sec_8_2.html#fig_8_2_9",
  "type": "Figure",
  "number": "8.2.10",
  "title": "",
  "body": "     "
},
{
  "id": "sec_8_2-4-16",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-4-16",
  "type": "Example",
  "number": "8.2.11",
  "title": "",
  "body": "  In which quadrant is the angle of radians? An angle of radians? (In other words, in which quadrants are the terminal sides of these angles?)    Refer to . The second quadrant includes angles between radians and radians. The angle of radians must lie in the second quadrant. The angle of radians is between and radians, so radians is in the fourth quadrant.   "
},
{
  "id": "sec_8_2-4-20",
  "level": "2",
  "url": "sec_8_2.html#sec_8_2-4-20",
  "type": "Example",
  "number": "8.2.12",
  "title": "",
  "body": "  Find the arc length spanned by an angle of radians on the circle of radius 5 centimeters.    According to the formula above, centimeters. Remember: The units of radius and arc length are the same.   "
},
{
  "id": "exercise-8_2_1",
  "level": "2",
  "url": "sec_8_2.html#exercise-8_2_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        radians; Quadrant I   "
},
{
  "id": "exercise_8_2_2",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        radians; Quadrant IV   "
},
{
  "id": "exercise_8_2_3",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        radians; Quadrant III   "
},
{
  "id": "exercise-8_2_4",
  "level": "2",
  "url": "sec_8_2.html#exercise-8_2_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        radians; Quadrant II   "
},
{
  "id": "exercise-8_2_5",
  "level": "2",
  "url": "sec_8_2.html#exercise-8_2_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   radians     ; Quadrant I   "
},
{
  "id": "exercise_8_2_6",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   radians     ; Quadrant IV   "
},
{
  "id": "exercise_8_2_7",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   radians     ; Quadrant II   "
},
{
  "id": "exercise-8_2_8",
  "level": "2",
  "url": "sec_8_2.html#exercise-8_2_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   radians     ; Quadrant III   "
},
{
  "id": "exercise_8_2_9",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  What is the arc length spanned by the angle radians on the circle of radius inches?     inches   "
},
{
  "id": "exercise_8_2_10",
  "level": "2",
  "url": "sec_8_2.html#exercise_8_2_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  What is the arc length spanned by the angle on the circle of radius centimeters?     centimeters   "
},
{
  "id": "sec_8_3",
  "level": "1",
  "url": "sec_8_3.html",
  "type": "Section",
  "number": "8.3",
  "title": "Values of Sine and Cosine for Angles on the Unit Circle",
  "body": " Values of Sine and Cosine for Angles on the Unit Circle    After completing this section, you should be able to do the following.     State the definition of and in terms of the coordinates of a point on the unit circle.    Compute the sine and cosine of common angles on the unit circle, with and without a calculator.    Use the unit circle and symmetry to find exact values of sine and cosine for common angles.     For every angle we define the values and using the coordinates of the endpoint of the terminal side when is an angle in standard position on the unit circle. Take an angle in standard position. Let be the point where the terminal side of the angle intersects the unit circle:       Trigonometric Ratios and   Let be an angle in standard position on the -plane and let be the point of intersection of its terminal side with the unit circle. The values and are defined as:     The following identity holds for all angles :   Pythagorean Identity   For every angle ,     At this point, the angle can be measured in radians or in degrees, but we must always be aware and careful which measure we are using: and have completely different values. Indeed, according to the conversion formulas from the previous section, radian is approximately degrees which are very different.    Use your calculator to compare values of and .    Your calculator can give you values of , in degrees and radians, provided you set it in the right MODE . In radians, your calculator should give you On the other hand, when set to degrees, As you can see the values are very different.      Use the definition above to find values of , for , , , , radians.    Utilize , where the position of many angles in radians on the unit circle are shown. For each value of , find the corresponding point and determine values of the coordinates and . Recall that and .    The angle radians specifies the point . Hence, , .  The angle (equal to ) corresponds to , therefore and .  For , the corresponding point is and so and .  For , the point is and therefore and .  Observe that also corresponds to . Indeed, the angles and are coterminal. This means and .    As we increase beyond , the cycle of values for and repeats on the interval , and it keeps repeating on each interval of the length .    If you studied trigonometric ratios in the right triangle, you know the exact values of sine and cosine for a few special angles. Here they are, including the values of the angles in radians:    (degrees)  (radians)                                    We can use the values in the table and the positions of angles on the unit circle, to find sine and cosine of many other angles.    Find and .    We have to locate the terminal side of the angle and find the point of intersection of the terminal side with the unit circle. The terminal side of the angle is located in the second quadrant, and it is symmetric over the -axis to the terminal side of the angle :     The point of intersection of the terminal side of with the unit circle is as and . (See the table.) By symmetry, the point of intersection of the terminal side of with the unit circle is . Hence: and .      Evaluating Sine and Cosine   For each of the following, find the exact value without using a calculator.                                                                                                                             "
},
{
  "id": "sec_8_3-2",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-2",
  "type": "Objectives",
  "number": "8.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of and in terms of the coordinates of a point on the unit circle.    Compute the sine and cosine of common angles on the unit circle, with and without a calculator.    Use the unit circle and symmetry to find exact values of sine and cosine for common angles.    "
},
{
  "id": "fig_8_3_sin_cos",
  "level": "2",
  "url": "sec_8_3.html#fig_8_3_sin_cos",
  "type": "Figure",
  "number": "8.3.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec_8_3-5",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-5",
  "type": "Definition",
  "number": "8.3.2",
  "title": "Trigonometric Ratios <span class=\"process-math\">\\(\\sin(\\alpha)\\)<\/span> and <span class=\"process-math\">\\(\\cos(\\alpha)\\)<\/span>.",
  "body": " Trigonometric Ratios and   Let be an angle in standard position on the -plane and let be the point of intersection of its terminal side with the unit circle. The values and are defined as:    "
},
{
  "id": "sec_8_3-7",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-7",
  "type": "Result",
  "number": "8.3.3",
  "title": "Pythagorean Identity.",
  "body": " Pythagorean Identity   For every angle ,    "
},
{
  "id": "sec_8_3-9",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-9",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": "  Use your calculator to compare values of and .    Your calculator can give you values of , in degrees and radians, provided you set it in the right MODE . In radians, your calculator should give you On the other hand, when set to degrees, As you can see the values are very different.   "
},
{
  "id": "sec_8_3-10",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-10",
  "type": "Example",
  "number": "8.3.5",
  "title": "",
  "body": "  Use the definition above to find values of , for , , , , radians.    Utilize , where the position of many angles in radians on the unit circle are shown. For each value of , find the corresponding point and determine values of the coordinates and . Recall that and .    The angle radians specifies the point . Hence, , .  The angle (equal to ) corresponds to , therefore and .  For , the corresponding point is and so and .  For , the point is and therefore and .  Observe that also corresponds to . Indeed, the angles and are coterminal. This means and .    As we increase beyond , the cycle of values for and repeats on the interval , and it keeps repeating on each interval of the length .   "
},
{
  "id": "sec_8_3-14",
  "level": "2",
  "url": "sec_8_3.html#sec_8_3-14",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": "  Find and .    We have to locate the terminal side of the angle and find the point of intersection of the terminal side with the unit circle. The terminal side of the angle is located in the second quadrant, and it is symmetric over the -axis to the terminal side of the angle :     The point of intersection of the terminal side of with the unit circle is as and . (See the table.) By symmetry, the point of intersection of the terminal side of with the unit circle is . Hence: and .   "
},
{
  "id": "exercise-8_3_1",
  "level": "2",
  "url": "sec_8_3.html#exercise-8_3_1",
  "type": "Exercise",
  "number": "8.3.1",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_2",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_2",
  "type": "Exercise",
  "number": "8.3.2",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_3",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_3",
  "type": "Exercise",
  "number": "8.3.3",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_4",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_4",
  "type": "Exercise",
  "number": "8.3.4",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_5",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_5",
  "type": "Exercise",
  "number": "8.3.5",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_6",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_6",
  "type": "Exercise",
  "number": "8.3.6",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_7",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_7",
  "type": "Exercise",
  "number": "8.3.7",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_8",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_8",
  "type": "Exercise",
  "number": "8.3.8",
  "title": "",
  "body": "           "
},
{
  "id": "exercise_8_3_9",
  "level": "2",
  "url": "sec_8_3.html#exercise_8_3_9",
  "type": "Exercise",
  "number": "8.3.9",
  "title": "",
  "body": "           "
},
{
  "id": "exercise-8_3_10",
  "level": "2",
  "url": "sec_8_3.html#exercise-8_3_10",
  "type": "Exercise",
  "number": "8.3.10",
  "title": "",
  "body": "           "
},
{
  "id": "sec_8_4",
  "level": "1",
  "url": "sec_8_4.html",
  "type": "Section",
  "number": "8.4",
  "title": "Sine and Cosine Functions",
  "body": " Sine and Cosine Functions    After completing this section, you should be able to do the following.     State the definition of the sine and cosine functions and identify their period, amplitude, and midline from their graphs.    Determine the effect of vertical scaling and vertical shifting on the amplitude and midline of the sine and cosine functions.    Determine the effect of horizontal scaling on the period of the sine and cosine functions.      Finally, we are in a position to define the two important trigonometric functions and . We will use the trigonometric ratios and to define values of the functions at any given , although in applications the functions are often detached from their unit circle meaning. Here is the definition.   Sine and Cosine Functions   Let be a real number. Take the angle of  radians in standard position. The values of the sine and cosine functions at are defined as: where and are the trigonometric ratios of the angle as described in the last section.      Graphs of Sine and Cosine Functions  What is the graph of the sine function ? We know that for the angle of radians in standard position, is the coordinate of the point at which the terminal side intersects the unit circle, as shown in . We start from and examine how the coordinate of the point of intersection changes as increases.  At the terminal side of the angle 0 radians coincides with the initial side; the point of intersection is . Hence, and . Continuing to increase , then for an angle whose terminal side is in the first quadrant, the coordinate is between and , and it increases as increases. When the angle reaches , the terminal side is vertical, the point of intersection with the unit circle is ; the coordinate is . That is, . Look at the graph in . For between and the function increases from to . Past , decreases when increases until it hits at .  If we keep increasing past , the terminal side is in the second quadrant and the coordinate is now decreasing until it is at . Continuing to increase past , the terminal side is now in the third quadrant. The coordinate is now negative and is getting more and more negative until it hits at . Note how the graph of in reflects this behavior. When the terminal side of the angle is in the fourth quadrant the coordinate is getting less and less negative when increases until at the terminal side is aligned again with the positive -axis with . If we keep increasing past the same cycle of changes in repeats on the interval . Therefore, the values of repeat for . And so on.  To obtain the graph of the function , we follow changes in the -coordinate of the intersection point as the angle changes. We easily obtain the graph of given in .              As we see from the definition and from the graphs of the sine and cosine functions, both functions and are periodic with period : The amplitude of both functions is , the equilibrium is , and the midline is the -axis ( ). This can be verified by observing that Thus, the amplitude and equilibrium for sine and cosine are:   Before we leave the unit circle and the definition of the sine and cosine functions, we make a simple observation about their properties: Indeed, if angle changes sign, the coordinate of the intersection point of its terminal side with the unit circle changes sign while the coordinate stays the same.  You can use your graphing calculator to graph the sine and cosine functions, but you have to remember to set your calculator in radians and not in degrees. The values and were defined by interpreting as an angle in radians.    Transforming Sine and Cosine Functions Basic Ideas   It took a lot of work to define the sine and cosine functions. The good news is that once we have them, they are easy to use. All that we usually need to remember are the graphs of the functions and as given in and .  Speaking of graphs, notice that the function starts from its maximum value at , . The sine function on the other hand starts at from its equilibrium value, . These observations will be important in the next section when we try to match given periodic functions with a transformed sine or cosine function.  We used the unit circle and interpreted as an angle to define the sine and cosine functions. In applications, we will typically get away from this interpretation. The independent variable will most often be time, and we will use the sine and cosine functions as convenient periodic functions that are useful for modeling periodic processes. We will use the notation and where denotes the dependent variable and is no longer related to coordinates on the unit circle.  The sine and cosine functions, and , wouldn't be very useful for modeling real-life periodic processes if we couldn't transform them to change the period, amplitude, or midline. How many real-life periodic processes have the period of exactly , amplitude , and equilibrium ? Not many. Fortunately, we can easily change all three numbers by vertical scaling and shifting and horizontal scaling.    Changing the Amplitude  The amplitude of the functions and can be changed by vertical scaling.    Find the period, amplitude, and midline of each of the functions. Compare their graphs to the graph of .                  We learned in the previous chapter that multiplying the output by a constant corresponds to vertical scaling of the graph. Here are the graphs of the functions in parts 1 and 2 and the original function in one coordinate system:     The amplitude of both and is , the period is , and the midline is . Recall that vertical scaling changes the amplitude only. If we multiply by a negative constant, we additionally have the reflection of the scaled graph over the -axis.    Similar to the last example, the amplitude of can also be changed by vertical scaling.       Changing the Midline  Predictably, vertical shifting doesn't change the amplitude or the period it changes the equilibrium and the midline.    Find the midline for                  For part 1, the midline is .  For part 2, the midline is . Here are graphs of the functions in parts 1 and 2 as well as the cosine itself:         Changing the Period  How do we change the period of the sine and cosine function? We have to apply horizontal scaling.    Find the period of the following functions:                     Compare the graphs of and :     From the graph, it is evident that the function executes a full cycle from to . Hence, the period of is . The amplitude of the function is still and the midline .    The graph of clearly shows that the function executes one full cycle between and :     The period of is .       Suppose that we want a periodic function with a period . Indeed, the first periodic function considered in this chapter had period . Can we find such a function? Yes. Soon we will learn a systematic technique for doing this; for now, here is an example.    Consider the function . What is the period of the function?    The graph of the function is given below:     It appears that the function executes one full cycle between and , therefore the period is .    Now that we have seen how to manipulate the sine and cosine functions to change the period, amplitude, and midline, our next step is to combine these transformations to change all three quantities.    Consider the function: The graph of the function is:     What is the period, amplitude, and midline of the function ? What transformations have been applied to to obtain ?    Clearly we are looking at one cycle of a transformed sine function, so the period is . Since , , the amplitude is and the midline is .  We applied horizontal scaling by the factor of , vertical scaling by the factor of , and a vertical shift by .        Identifying Period, Amplitude, and Midline   For each of the following, use a graph to identify the period, amplitude, and midline of the given function. Identify what transformations have been applied to either or to obtain the given function.          period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of            period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of and reflected over the -axis           period ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of            period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of and stretched horizontally by a factor of            period: ; amplitude: ; midline: . is the graph of shifted up units           period: ; amplitude: ; midline: . is the graph of shifted down units           period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of and stretched horizontally by a factor of            period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of and shifted down units           period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of , stretched vertically by a factor of , and reflected over the -axis           period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of , stretched horizontally by a factor of , stretched vertically by a factor of , and shifted up units      "
},
{
  "id": "sec_8_4-2",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-2",
  "type": "Objectives",
  "number": "8.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the definition of the sine and cosine functions and identify their period, amplitude, and midline from their graphs.    Determine the effect of vertical scaling and vertical shifting on the amplitude and midline of the sine and cosine functions.    Determine the effect of horizontal scaling on the period of the sine and cosine functions.    "
},
{
  "id": "sec_8_4-3-2",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-3-2",
  "type": "Definition",
  "number": "8.4.1",
  "title": "Sine and Cosine Functions.",
  "body": " Sine and Cosine Functions   Let be a real number. Take the angle of  radians in standard position. The values of the sine and cosine functions at are defined as: where and are the trigonometric ratios of the angle as described in the last section.   "
},
{
  "id": "fig_8_4_1",
  "level": "2",
  "url": "sec_8_4.html#fig_8_4_1",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": "     "
},
{
  "id": "fig_8_4_2",
  "level": "2",
  "url": "sec_8_4.html#fig_8_4_2",
  "type": "Figure",
  "number": "8.4.3",
  "title": "",
  "body": "     "
},
{
  "id": "sec_8_4-5-3-3",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-5-3-3",
  "type": "Example",
  "number": "8.4.4",
  "title": "",
  "body": "  Find the period, amplitude, and midline of each of the functions. Compare their graphs to the graph of .                  We learned in the previous chapter that multiplying the output by a constant corresponds to vertical scaling of the graph. Here are the graphs of the functions in parts 1 and 2 and the original function in one coordinate system:     The amplitude of both and is , the period is , and the midline is . Recall that vertical scaling changes the amplitude only. If we multiply by a negative constant, we additionally have the reflection of the scaled graph over the -axis.   "
},
{
  "id": "sec_8_4-5-4-3",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-5-4-3",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": "  Find the midline for                  For part 1, the midline is .  For part 2, the midline is . Here are graphs of the functions in parts 1 and 2 as well as the cosine itself:      "
},
{
  "id": "sec_8_4-5-5-3",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-5-5-3",
  "type": "Example",
  "number": "8.4.6",
  "title": "",
  "body": "  Find the period of the following functions:                     Compare the graphs of and :     From the graph, it is evident that the function executes a full cycle from to . Hence, the period of is . The amplitude of the function is still and the midline .    The graph of clearly shows that the function executes one full cycle between and :     The period of is .      "
},
{
  "id": "sec_8_4-5-5-5",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-5-5-5",
  "type": "Example",
  "number": "8.4.7",
  "title": "",
  "body": "  Consider the function . What is the period of the function?    The graph of the function is given below:     It appears that the function executes one full cycle between and , therefore the period is .   "
},
{
  "id": "sec_8_4-5-5-7",
  "level": "2",
  "url": "sec_8_4.html#sec_8_4-5-5-7",
  "type": "Example",
  "number": "8.4.8",
  "title": "",
  "body": "  Consider the function: The graph of the function is:     What is the period, amplitude, and midline of the function ? What transformations have been applied to to obtain ?    Clearly we are looking at one cycle of a transformed sine function, so the period is . Since , , the amplitude is and the midline is .  We applied horizontal scaling by the factor of , vertical scaling by the factor of , and a vertical shift by .   "
},
{
  "id": "exercise-8_4_1",
  "level": "2",
  "url": "sec_8_4.html#exercise-8_4_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of    "
},
{
  "id": "exercise_8_4_2",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of and reflected over the -axis   "
},
{
  "id": "exercise_8_4_3",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       period ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of    "
},
{
  "id": "exercise_8_4_4",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of and stretched horizontally by a factor of    "
},
{
  "id": "exercise_8_4_5",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of shifted up units   "
},
{
  "id": "exercise_8_4_6",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of shifted down units   "
},
{
  "id": "exercise_8_4_7",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of and stretched horizontally by a factor of    "
},
{
  "id": "exercise_8_4_8",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of stretched vertically by a factor of and shifted down units   "
},
{
  "id": "exercise_8_4_9",
  "level": "2",
  "url": "sec_8_4.html#exercise_8_4_9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of , stretched vertically by a factor of , and reflected over the -axis   "
},
{
  "id": "exercise-8_4_10",
  "level": "2",
  "url": "sec_8_4.html#exercise-8_4_10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       period: ; amplitude: ; midline: . is the graph of compressed horizontally by a factor of , stretched horizontally by a factor of , stretched vertically by a factor of , and shifted up units   "
},
{
  "id": "sec_8_5",
  "level": "1",
  "url": "sec_8_5.html",
  "type": "Section",
  "number": "8.5",
  "title": "Families of Sine and Cosine Functions, Modeling",
  "body": " Families of Sine and Cosine Functions, Modeling    After completing this section, you should be able to do the following.     State the period, amplitude, and midline of a function in the family or in terms of the constants , , and .    Match a given periodic graph or verbal description with a formula in the sine or cosine family, including the sign of .    Use a transformed sine or cosine function to model a real-life periodic process.      The examples of transforming the sine and cosine functions in the last section are illuminating, but they do not give us a systematic and clear way of matching a transformed sine or cosine formula with a given periodic function a periodic function that might have arisen in real-life applications.  Here are specific rules for transforming the sine and cosine functions through vertical scaling and shifting and horizontal scaling. Note that we will not consider horizontal shifting in this section.   Transforming Sine and Cosine Functions   Let constants , , be given, . The functions are periodic with     Since constants , , are arbitrary and take all possible values giving us many functions, we have what is called a family of functions  and another family of functions  . The constants , , are often called parameters of these families of functions.  Here are some important observations which will make it easier to match a given periodic function with a formula or and find the right values for the parameters , , and .   Every function in the family has its maximum or minimum value at . Namely, it has a minimum value at if , and a maximum value at if .  Every function in the family has its equilibrium value at . If , the peak the maximum value comes first when we move toward the positive direction. Conversely, when , the minimum value comes first when we move toward the positive direction.   These are important observations. Suppose that we want to match a given periodic function with a formula in the family of sines or with a formula in the family of cosines . To decide which family to use, we will look at the value at . If this value is a minimum or a maximum of , we will look for a match in the family . If the value is at the equilibrium, we try to match with a function in the family . Also, after we find the amplitude, we will have to decide if the constant is positive or negative; that is, if we do or do not have the reflection over the -axis.    Find the period, amplitude, and midline of the following functions:                               This function has , , and . Therefore, the amplitude is , the midline is , and the period is .    This function has , , and . Therefore, the amplitude is , the midline is , and the period is .    For this function, , , and . So the amplitude is , the midline is , and the period is .    Here, , , and . Therefore, the amplitude is , the midline is , and the period is .         Each graph below contains one or two periods of a periodic function. For each of the functions, find a formula in the form or that represents the graph.          Note first that at , is at its maximum, . Hence, we will be looking for a formula for in the family of functions . To find values for the constants , and , we have to find the period, amplitude, and midline.  We see the same cycle repeating between and . This means the period of is and so From the graph, we know Therefore, the amplitude is , which implies . To determine if or , notice that is at its maximum at just as cosine is, meaning we do not have a reflection over the -axis. This tells us that . We now know that is of the form To find , note that the equilibrium of is and the midline is . Hence, and the final formula that corresponds to the graph is:            The shape of the graph looks like that of the sine function reflected over the -axis so we will look for a formula in the family . From the graph, the period is and therefore To find and , observe that This means the amplitude is , the equilibrium is , and the midline is . Hence, . Is or ? Since there is a reflection over the -axis, then and so the formula we are looking for is            At , is at its minimum, so we will be looking for a formula for in the family of functions . To find values for the constants , and , we have to find the period, amplitude, and midline.  The period of is by looking at its graph. Therefore, The graph of the function also reveals that Hence, the amplitude is and so . Since has its minimum at , whereas has its maximum at , then there is a reflection over the -axis and so .  Lastly, we need to find , which is given by . That is, and the midline is . The formula for is:            Because is not at a maximum or a minimum, the function must be in the family .  The period is , and so is given by To find and , observe that Hence, the amplitude is: Since there is no reflection over the -axis, .  The value of is found by computing So , the midline is , and therefore the formula for is        Modeling Periodic Processes  In this section we apply the skills of matching sine and cosine functions to modeling real-life periodic processes.    We revisit the first example of this chapter, , about a population of hares, , in a national park. The population follows a 12-month cycle. It is at its minimum of hares at which corresponds to January, and at its maximum of hares in July which corresponds to . Here again is the graph of :     Find a formula for the function .    We know already that the period of the function is , the amplitude is , and the midline is since and .  Because is at a minimum at , we look for a formula of the form with since there is a reflection about the -axis. Since is equal to the amplitude and is equal to the equilibrium, then The period is , which gives us Thus, the population of hares is modeled by the formula:   You can use your graphing calculator to graph the transformed cosine function to check that this is the function we were looking for.      An average-sized man takes seconds to breathe in and out when at rest. The volume of the air in his lungs changes as he breathes. The so-called functional residual capacity of the lungs https:\/\/en.wikipedia.org\/wiki\/Functional_residual_capacity, accessed: 6\/9\/2020 is about liters. That is the volume of air that is always present in the lungs. The typical volume of inspiration, the tidal volume, is about liters and so is the volume of expiration. Assume that at the man finished exhaling and is about to inhale. Let be the volume of air in his lungs, in liters, at time in seconds.     Sketch a rough graph of in the interval .    Find the period, amplitude, midline of . Find a possible formula for .          The graph of looks approximately as follows:     At , the man just exhaled and is about to inhale, so the volume in his lungs is at the functional residual capacity of liters. As increases, the man is inhaling and the volume of air in his lungs increases. The volume reaches its maximum of liters mid-cycle at seconds. Now the man begins exhaling and completes the cycle at when the volume is again liters. We are assuming here that inhaling takes the same time as exhaling, so the maximum volume happens exactly in the middle of the cycle at seconds. The same cycle repeats on every interval of the length seconds.   Note: Do not confuse liters, which is the minimum volume in the man's lungs, with seconds which is the time needed to inhale or to exhale.    The period the time needed for one full cycle to be executed is seconds. Because then the amplitude is , the equilibrium is , and the midline is .  To find a formula for , note that is at its minimum at . Hence, is of the form with . After finding the amplitude and midline, then we know and . Lastly, The formula of is given by            Find the amplitude, period, and midline of each of the following functions.          amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:        For each of the periodic functions graphed below, find a formula in the form or that represents the graph.                                                                              The average number of daylight hours that Kingston, Rhode Island experiences is a periodic function , where corresponds to the month of December. A graph modeling is given below.        Identify the amplitude, midline, and period for the periodic function modeling the average number of daylight hours in Kingston.    amplitude: ; midline: ; period:       Give a possible formula for the periodic function modeling the average number of daylight hours in Kingston.           What is the average number of daylight hours in Kingston during the month of March?     hours       The average number of daylight hours that Anchorage, Alaska experiences is a periodic function , where corresponds to the month of June. The graph of is given below.        Identify the amplitude, midline, and period for the periodic function modeling the average number of daylight hours in Anchorage.    amplitude: ; midline: ; period:       Give a possible formula for the periodic function modeling the average number of daylight hours in Anchorage.           What is the average number of daylight hours in Anchorage during the month of November?    approximately hours       The number of bird species in a Rhode Island preserve oscillates between a high of in June and a low of in December. Write a formula for the number of bird species, , as a function of the number of months since December. Your answer should be of the form or .           The volume of air in the lungs of a woman at rest at certain times is shown in the following table. Assuming that the maximum volume of air in her lungs occurs at time seconds and the minimum volume of air in her lungs occurs at time seconds, give the formula for a periodic function modeling the volume of air in the woman's lungs at any given time. Your answer should be of the form or .    time (seconds)         volume (liters)                  Each day, the tide in a harbor continuously goes in and out, raising and lowering a boat anchored there. At low tide, the boat is only meters above the ocean floor. Six hours later, at peak high tide, the boat is meters above the ocean floor. Six hours after peak high tide, it is low tide again. Suppose the boat is at high tide at midnight. Give a formula for a periodic function modeling the boat's distance above the ocean floor as a function of time hours since midnight. Your answer should be of the form or .           You decide to ride the Ferris wheel at the local carnival. You are feet above the ground at the bottom of the Ferris wheel and feet above the ground at the top. It takes seconds for you to reach the maximum height from the minimum height and seconds to reach the minimum height from the maximum height. Suppose you are at the bottom of the ride at time seconds. Give a formula for a periodic function modeling your height above the ground seconds into your Ferris wheel ride. Your answer should be of the form or .          "
},
{
  "id": "sec_8_5-2",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-2",
  "type": "Objectives",
  "number": "8.5",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     State the period, amplitude, and midline of a function in the family or in terms of the constants , , and .    Match a given periodic graph or verbal description with a formula in the sine or cosine family, including the sign of .    Use a transformed sine or cosine function to model a real-life periodic process.    "
},
{
  "id": "sec_8_5-3-3",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-3-3",
  "type": "Result",
  "number": "8.5.1",
  "title": "Transforming Sine and Cosine Functions.",
  "body": " Transforming Sine and Cosine Functions   Let constants , , be given, . The functions are periodic with    "
},
{
  "id": "sec_8_5-3-8",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-3-8",
  "type": "Example",
  "number": "8.5.2",
  "title": "",
  "body": "  Find the period, amplitude, and midline of the following functions:                               This function has , , and . Therefore, the amplitude is , the midline is , and the period is .    This function has , , and . Therefore, the amplitude is , the midline is , and the period is .    For this function, , , and . So the amplitude is , the midline is , and the period is .    Here, , , and . Therefore, the amplitude is , the midline is , and the period is .      "
},
{
  "id": "sec_8_5-3-9",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-3-9",
  "type": "Example",
  "number": "8.5.3",
  "title": "",
  "body": "  Each graph below contains one or two periods of a periodic function. For each of the functions, find a formula in the form or that represents the graph.          Note first that at , is at its maximum, . Hence, we will be looking for a formula for in the family of functions . To find values for the constants , and , we have to find the period, amplitude, and midline.  We see the same cycle repeating between and . This means the period of is and so From the graph, we know Therefore, the amplitude is , which implies . To determine if or , notice that is at its maximum at just as cosine is, meaning we do not have a reflection over the -axis. This tells us that . We now know that is of the form To find , note that the equilibrium of is and the midline is . Hence, and the final formula that corresponds to the graph is:            The shape of the graph looks like that of the sine function reflected over the -axis so we will look for a formula in the family . From the graph, the period is and therefore To find and , observe that This means the amplitude is , the equilibrium is , and the midline is . Hence, . Is or ? Since there is a reflection over the -axis, then and so the formula we are looking for is            At , is at its minimum, so we will be looking for a formula for in the family of functions . To find values for the constants , and , we have to find the period, amplitude, and midline.  The period of is by looking at its graph. Therefore, The graph of the function also reveals that Hence, the amplitude is and so . Since has its minimum at , whereas has its maximum at , then there is a reflection over the -axis and so .  Lastly, we need to find , which is given by . That is, and the midline is . The formula for is:            Because is not at a maximum or a minimum, the function must be in the family .  The period is , and so is given by To find and , observe that Hence, the amplitude is: Since there is no reflection over the -axis, .  The value of is found by computing So , the midline is , and therefore the formula for is     "
},
{
  "id": "sec_8_5-4-3",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-4-3",
  "type": "Example",
  "number": "8.5.4",
  "title": "",
  "body": "  We revisit the first example of this chapter, , about a population of hares, , in a national park. The population follows a 12-month cycle. It is at its minimum of hares at which corresponds to January, and at its maximum of hares in July which corresponds to . Here again is the graph of :     Find a formula for the function .    We know already that the period of the function is , the amplitude is , and the midline is since and .  Because is at a minimum at , we look for a formula of the form with since there is a reflection about the -axis. Since is equal to the amplitude and is equal to the equilibrium, then The period is , which gives us Thus, the population of hares is modeled by the formula:   You can use your graphing calculator to graph the transformed cosine function to check that this is the function we were looking for.   "
},
{
  "id": "sec_8_5-4-4",
  "level": "2",
  "url": "sec_8_5.html#sec_8_5-4-4",
  "type": "Example",
  "number": "8.5.5",
  "title": "",
  "body": "  An average-sized man takes seconds to breathe in and out when at rest. The volume of the air in his lungs changes as he breathes. The so-called functional residual capacity of the lungs https:\/\/en.wikipedia.org\/wiki\/Functional_residual_capacity, accessed: 6\/9\/2020 is about liters. That is the volume of air that is always present in the lungs. The typical volume of inspiration, the tidal volume, is about liters and so is the volume of expiration. Assume that at the man finished exhaling and is about to inhale. Let be the volume of air in his lungs, in liters, at time in seconds.     Sketch a rough graph of in the interval .    Find the period, amplitude, midline of . Find a possible formula for .          The graph of looks approximately as follows:     At , the man just exhaled and is about to inhale, so the volume in his lungs is at the functional residual capacity of liters. As increases, the man is inhaling and the volume of air in his lungs increases. The volume reaches its maximum of liters mid-cycle at seconds. Now the man begins exhaling and completes the cycle at when the volume is again liters. We are assuming here that inhaling takes the same time as exhaling, so the maximum volume happens exactly in the middle of the cycle at seconds. The same cycle repeats on every interval of the length seconds.   Note: Do not confuse liters, which is the minimum volume in the man's lungs, with seconds which is the time needed to inhale or to exhale.    The period the time needed for one full cycle to be executed is seconds. Because then the amplitude is , the equilibrium is , and the midline is .  To find a formula for , note that is at its minimum at . Hence, is of the form with . After finding the amplitude and midline, then we know and . Lastly, The formula of is given by       "
},
{
  "id": "exercise_8_5_1",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the amplitude, period, and midline of each of the following functions.          amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:            amplitude: ; period: ; midline:     "
},
{
  "id": "exercise_8_5_2",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  For each of the periodic functions graphed below, find a formula in the form or that represents the graph.                                                                           "
},
{
  "id": "exercise_8_5_3",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The average number of daylight hours that Kingston, Rhode Island experiences is a periodic function , where corresponds to the month of December. A graph modeling is given below.        Identify the amplitude, midline, and period for the periodic function modeling the average number of daylight hours in Kingston.    amplitude: ; midline: ; period:       Give a possible formula for the periodic function modeling the average number of daylight hours in Kingston.           What is the average number of daylight hours in Kingston during the month of March?     hours    "
},
{
  "id": "exercise_8_5_4",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The average number of daylight hours that Anchorage, Alaska experiences is a periodic function , where corresponds to the month of June. The graph of is given below.        Identify the amplitude, midline, and period for the periodic function modeling the average number of daylight hours in Anchorage.    amplitude: ; midline: ; period:       Give a possible formula for the periodic function modeling the average number of daylight hours in Anchorage.           What is the average number of daylight hours in Anchorage during the month of November?    approximately hours    "
},
{
  "id": "exercise_8_5_5",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  The number of bird species in a Rhode Island preserve oscillates between a high of in June and a low of in December. Write a formula for the number of bird species, , as a function of the number of months since December. Your answer should be of the form or .        "
},
{
  "id": "exercise_8_5_6",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  The volume of air in the lungs of a woman at rest at certain times is shown in the following table. Assuming that the maximum volume of air in her lungs occurs at time seconds and the minimum volume of air in her lungs occurs at time seconds, give the formula for a periodic function modeling the volume of air in the woman's lungs at any given time. Your answer should be of the form or .    time (seconds)         volume (liters)               "
},
{
  "id": "exercise_8_5_7",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Each day, the tide in a harbor continuously goes in and out, raising and lowering a boat anchored there. At low tide, the boat is only meters above the ocean floor. Six hours later, at peak high tide, the boat is meters above the ocean floor. Six hours after peak high tide, it is low tide again. Suppose the boat is at high tide at midnight. Give a formula for a periodic function modeling the boat's distance above the ocean floor as a function of time hours since midnight. Your answer should be of the form or .        "
},
{
  "id": "exercise_8_5_8",
  "level": "2",
  "url": "sec_8_5.html#exercise_8_5_8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  You decide to ride the Ferris wheel at the local carnival. You are feet above the ground at the bottom of the Ferris wheel and feet above the ground at the top. It takes seconds for you to reach the maximum height from the minimum height and seconds to reach the minimum height from the maximum height. Suppose you are at the bottom of the ride at time seconds. Give a formula for a periodic function modeling your height above the ground seconds into your Ferris wheel ride. Your answer should be of the form or .        "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
