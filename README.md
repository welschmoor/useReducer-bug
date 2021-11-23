Hory Shet

My filter method had a mistake inside the reducer function. Because of that console logs ABOVE the error 
logged wrong data. I can't believe it's possible but it is since the filter method should not have affected data
in ANY way. 

The ID property that was sent using the payload of the useReducers dispatch method suddently changed into false
id: 20993102931 turned into id: false. The reason for this was an error inside filter method condition which btw
did not show up in console.

The error was NOT caught by linter or console. Pretty scary! I wrote =! instead of != and that's all it took.
I have no idea why .filter() affects data sent from one component to another since I am logging data before it reaches
filter method and the data is changed `\_(x_X)_/`