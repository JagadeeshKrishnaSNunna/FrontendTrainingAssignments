class Dictionary{
    words=new Array();
    addWords(word){
        this.words.push(word);
    }
    removeWords(word){
        let index=this.words.indexOf(word)
        this.words.splice(index,1)
    }
    updateWord(initial,final){
        let index=this.words.indexOf(initial)
        this.words.splice(index,1,final)
    }
    display(){
        var ull=document.getElementById('ws')
        ull.innerHTML=''
        this.words.map(i=>{
            var l=document.createElement('li')
            l.textContent=i
            ull.appendChild(l)
        })
               
        // console.log(this.words)
    }
}
var dict=new Dictionary();
dict.display()

function add(){
    var val=document.getElementById('add').value
    dict.addWords(val)
    document.getElementById('add').value=''
    dict.display()
}
function remove(){
    var val=document.getElementById('remove').value
    dict.removeWords()
    document.getElementById('remove').value=''
    dict.display()                                      

}
function update(){
    var v1=document.getElementById('init').value
    var v2=document.getElementById('final').value
    dict.updateWord(v1,v2)
    document.getElementById('init').value=''
    document.getElementById('final').value=''
    dict.display()

}
