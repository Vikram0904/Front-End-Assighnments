
//Find the Most Frequent Element in an given array.
let arr = [40, 50, 30, 40, 50, 30, 30];
let n = arr.length;
var count = 0;
var count1 = 0;
var out;

for (var i = 0; i < n; i++) {
for (var j = 0; j < n; j++) {
    if (arr[i] == arr[j]) {
        ++count;//1
        if (count1 < count) {
        count1 = count;
        out = arr[i];
    }
    }
}
}
console.log(out);

//Output:
// 30