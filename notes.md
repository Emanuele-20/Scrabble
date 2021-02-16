## Approach
I can acces element inside a object in 2 ways:
 
 let values = {
... "a":1,
... "f":4
... }
1. values.a --> 1
2. values['a'] --> 1

I used this logic to approach each value inside the this.value properties.

## Sum elements inside array
 let result = array.**reduce**(function(a,b){
                return a + b;
            } ,0)
