let array = [
    ["Harry", 18, "Male", "B.Com"],
    ["Sunny", 19, "Male", "BCA"],
    ["Sarah", 18, "Female", "BCA"],
    ["Tom", 17,"Male", "B.A"]
];

// console.log(a);

document.write("<table border='1px'>");
for(let a = 0; a < array.length; a++){
    document.write("<tr>");
    for(let b = 0; b < array.length; b++){
        document.write("<td>" + array[a][b] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
