//Assingment 2 
//Question 1 
//function createAdditionFunction(numberToAdd) {
  //return function(number) {
    //  return number + numberToAdd;
    //}
  //}
  //let add5 = createAdditionFunction(5); 
  //let result1 = add5(10);
  //let result2 = add5(20); 
 // console.log(result1); 
  //console.log(result2); 



//Question 2 

 // function searchArray(arr, value) {
  //  if (arr.length === 0) {
  //    return false;
  //  }
  //  if (arr[0] === value) {
  //    return true; 
   // } else {
  //    return searchArray(arr.slice(1), value);
 //   }
 // }
 // let arr = [1, 2, 3, 4, 5];
 // console.log(searchArray(arr, 3)); 
 // console.log(searchArray(arr, 6)); 
  
  
//Question 3 
//function addParagraphToDocument(text) {
  //  const newParagraph = document.createElement('p');
   // newParagraph.textContent = text;
   // document.body.appendChild(newParagraph);
// }



//Question 4 

//function addListItemToUnorderedList(text) {
  //  let newListItem = document.createElement('li');
    //newListItem.textContent = text;
 //   let unorderedList = document.querySelector('ul');
   // unorderedList.appendChild(newListItem);
  //  let outputDiv = document.createElement('div');
   // outputDiv.textContent = 'New list item added: ' + text;
   // document.body.appendChild(outputDiv);
 // }


//Question 5 
//function changeBackgroundColor(element, color) {
 //   if (element instanceof HTMLElement) {
   //   element.style.backgroundColor = color;
 //   } else {
     // console.error('Please provide a valid HTML element.');
   // }
 // }
  
//Question 6

//function saveToLocalStorage(key, obj) {
  //  const objString = JSON.stringify(obj);
    //localStorage.setItem(key, objString);
  //}
  
//Question 7 
//function getFromLocalStorage(key) {
    //let objString = localStorage.getItem(key);
  //  let obj = JSON.parse(objString);
  //  return obj;
//  }

//Question 8 

//function saveAndRetrieveFromLocalStorage(obj) {
    //for (let prop in obj) {
  //    if (obj.hasOwnProperty(prop)) {
      //  localStorage.setItem(prop, JSON.stringify(obj[prop]));
    //  }
  //  }
    //let retrievedObj = {};
  //  for (let prop in obj) {
     // if (obj.hasOwnProperty(prop)) {
      //  retrievedObj[prop] = JSON.parse(localStorage.getItem(prop));
    //  }
  //  }
   // return retrievedObj;
 // }
  