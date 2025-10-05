var data=new Array();
function del(ele){
    var dataToDelete=ele.parentNode.previousElementSibling.innerHTML;
    var tr=ele.parentNode.parentNode;
    data=data.filter(d => d!==dataToDelete)
    tr.style.display='none' 
    console.log(data);
       
}
function add(){
var inp=document.getElementById("input").value
document.getElementById("input").value=""
if(data.includes(inp)){
    window.alert(inp+" already exist")
}else{
    data.push(inp)
    var newRow=document.createElement('tr')
    newRow.innerHTML=`
    <tr>
        <td>${inp}</td>
        <td><button onclick="del(this)">Delete</button></td>
    </tr>
    `
    document.getElementById("list").appendChild(newRow)
}
}
