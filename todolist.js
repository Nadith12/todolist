let List = []

document.getElementById('button').onclick = function () {
  const inputElement = document.querySelector('.input');
  const inputValue = inputElement.value.trim();

  List.push (inputValue);
  
  toDoList();
}

function toDoList () {
  let elementHTML = '';

  for (let i = 0; i < List.length; i++) {
    const Listvalue = List[i]
    const html =
      `<p>
        ${Listvalue} 
        <button onclick = 'deleteElement(${i});'>Delete</button>
      </p>`

    elementHTML += html;
  }

  document.querySelector('.div').innerHTML = elementHTML;

}

function deleteElement (i) {
  List.splice(i,1);
  toDoList();
}