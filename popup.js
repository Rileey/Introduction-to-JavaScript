
 let submitNote = document.querySelector('.submit');
 let title = document.getElementById('box');
 let note = document.getElementById('box2');
 let link = document.getElementById('box3');
 let articles_holder = document.getElementById('articles');
 let displayForm = document.querySelector('#form');
 let count = document.getElementById('word');
 let removeForm = document.getElementById('form');
 let cancelButton = document.getElementById('cancel');
 let msg = document.querySelector('.msg');
 let userList = document.querySelector('.toparticle');

 function popup(){
     //displaying the form after clicking the button
    displayForm.style.display = "block";
    title.focus();  //gives focus to the title textbox
 }

 function cancel(){
     //undoes the display of the form that has poped up when used clicks the 'x' cancel button 
    removeForm.style.display = "none";

    //clearInputs();
    }    
    

displayForm.addEventListener('submit', wordCount);

 function wordCount(e){
     e.preventDefault();  
    let postTitle = title.value;
    let postContent = note.value;
    let postLink = link.value;
    let date = new Date();

    if (postTitle === '' || postContent === ''){
        msg.innerHTML = "Enter all fields please";
        seetTimeout(() => msg.remove(), 3000);
    } else {
        let article = document.createElement('article');
            article.id += 'article';
            article.innerHTML = `<section class="top-text-content">
            <h2 class="journal_title"><span class="date">${date.toLocaleDateString("en-GB")}:</span>${postTitle}</h2>
            <p>
                ${postContent}
            </p>
            </section>
            <div class="new-img-box">
            <img src="${postLink}" alt="">
            </div>`
            articles_holder.prepend(article);

            updateArticleCount();
        //let articletop = document.createElement('h2');
        //articletop.appendChild(document.createTextNode(`${postTitle}`));
        //let articlebottom = document.createElement('p');
        //articlebottom.appendChild(document.createTextNode(`${postContent}`));
        
        //userList.appendChild(articletop);
        //userList.appendChild(articlebottom);
        
        //clearfields
        postTitle = '';
        postContent = '';

        cancel();
    }
 }

 count.textContent = '2 notes.';

 function updateArticleCount() {
     let a = articles_holder.childElementCount;

     if (a === 0) {
         count.textContent = '0 notes.';
     } else {
         count.textContent = `${a} notes.`
     }
 }
