// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
var marks = [60, 75, 59, 90, 81, 78];
var empty = 0;
function sum() {
    for (var i = 0; i < marks.length; i++) {
        empty += marks[i];
    }
    console.log("The average marks of the student is : ".concat(empty / marks.length));
}
sum();
