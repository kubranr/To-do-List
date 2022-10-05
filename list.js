//Kapatma butonu oluşturma ve tüm listeye ekleme
let myNodeList = document.getElementsByTagName('li')
let i;
for (i=0; i < myNodeList.length; i++) {
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myNodeList[i].appendChild(span)
}

//Kapatma butonuna tıklayınca listeden kaldırma
let close = document.getElementsByClassName('close')
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

// Listeye tıklayınca 'yapıldı' işareti
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// 'Ekle' butonuna tıklayınca yeni liste elemanının eklenmesi
function newElement() {
    let li = document.createElement('li')
    let inputValue = document.getElementById('myInput').value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === '') {
        alert("Boş bırakılamaz!!")
    } else {
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById("myInput").value = ""

    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}




