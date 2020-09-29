document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#book-list ul');
    const forms = document.forms;

    //delete books
    list.addEventListener('click', (e) =>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
    //add books
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        //create elements
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        
         
        //add Text content
        bookName.textContent = value;
        deleteBtn.textContent = 'delete';

        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
        
         //append to DOM
         li.appendChild(bookName);
         li.appendChild(deleteBtn);
         list.appendChild(li);


      
    });
   
    //filter books
    const searchBar = forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) =>{
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach((book) =>{
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(e.target.value) != -1){
                book.style.display = 'block';
            } else{
                book.style.display = 'none';
            }
        });
    });
})