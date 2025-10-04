var data=new Array();

function add(){
    // console.log("ol")
var inp=document.getElementById("input").value
document.getElementById("input").value=""
if(data.includes(inp)){
    window.alert("User already exist")
}else{
    data.push(inp)
    var newRow=document.createElement('tr')
    newRow.innerHTML=`
    <tr><td>${inp}</td></tr>
    `
    document.getElementById("list").appendChild(newRow)
}
}
