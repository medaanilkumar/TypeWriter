const TypeWriter=function(txtElement,words,wait=3000){
    this.words=JSON.parse(words)
    this.txtElement=txtElement
    this.wait=parseInt(wait,10)
    this.content=''
    this.index=0
    this.type()
    this.isDeleting=false
}

TypeWriter.prototype.type=function(){
    currentIndex=this.index%this.words.length
    fullText=this.words[currentIndex]
    if(this.isDeleting){
        this.content=fullText.substring(0,this.content.length-1)
    }
    else{
        this.content=fullText.substring(0,this.content.length+1)
    }
    this.txtElement.innerHTML = `<span class="txt">${this.content}</span>`;

    if(!this.isDeleting && this.content===fullText){
        this.isDeleting=true
    }
   else if(this.isDeleting && this.content===''){
       this.isDeleting=false
       this.index++

   }
    console.log(this.content)
    
  
    setTimeout(()=>this.type(),500)
}

document.addEventListener('DOMContentLoaded',init)

function init(){
    txtElement=document.querySelector('.data')
    wait=txtElement.getAttribute('data-wait')
    words=txtElement.getAttribute('data-words')
    new TypeWriter(txtElement,words,wait)
}

