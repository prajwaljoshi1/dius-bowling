# Dius Bowling

by [Stanle Sun]

## Test submission

Please unzip the folder and then execute the following to evaluate my solution:

### 1.To try the solution  you'll need to install dependencies by running:

```
npm install
```
### 2.To run all automation test case 
       
```
npm test
```

Expected Unit Test Result are as below: 
```
BowlingGame
    ✓ should handle gutter game => score :0 
    ✓ should handle all ones => score :20 
    ✓ should handle all twos => score :40
    ✓ should handle one spare  => score :16
    ✓ should handle two spares => score :31
    ✓ should handle one strike => score :24
    ✓ should handle two strike => score :46
    ✓ should handle two spares + three strikes => score :70
    ✓ should handle Spare in the last frame, get extra game's score => score :14
    ✓ should handle 10 strike + two gutter balls => score :270
    ✓ should handle a perfect game (12 strike) => score :270

  11 passing (28ms)


```


### 3.To start Command Line input mode

```
npm run 
```

Please enter the knocked down pins number for 21 balls. System will calculate the final result for you.
#####If you have strike in first try at one frame, please put 0 in next ball.
#####If you don have spike or spare in last frame ( No.[19] ball, No.[20] ball) , please put 0 at No.[21] ball.  

```
 Number of Pins Knocked Down at No [1] bowling ball :2
 Number of Pins Knocked Down at No [2] bowling ball :0
 Number of Pins Knocked Down at No [3] bowling ball :10

 
...
 Number of Pins Knocked Down at No [17] bowling ball :5
 Number of Pins Knocked Down at No [18] bowling ball :9
 Number of Pins Knocked Down at No [19] bowling ball :0 
 Number of Pins Knocked Down at No [20] bowling ball :1
 Number of Pins Knocked Down at No [21] bowling ball :0
final score=69



```