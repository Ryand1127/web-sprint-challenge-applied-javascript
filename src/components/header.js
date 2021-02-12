
//Raw HTML Element Variable


const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerContainer = document.querySelector('.header-container');

  //Creating HTML elements
  const header1 = document.createElement('div');
  const date1 = document.createElement('span');
  const h1 = document.createElement('h1');
  const temp1 = document.createElement('span');

  //Setting New HTML Classes
  header1.classList.add('header');
  date1.classList.add('date');
  temp1.classList.add('temp');

  //Setting text content
  date1.textContent = `${date}`;
  h1.textContent = `${title}`;
  temp1.textContent = `${temp}`;
  
  //appending elements
  headerContainer.appendChild(header1);
  header1.appendChild(date1);
  header1.appendChild(h1);
  header1.appendChild(temp1);

  return header1
}

const headerAppender = (selector) => {
  // TASK 2C
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector);
  headerContainer.append(Header('Ryan is Attractive', '2/12/2021', 'Ryan Dill' ));
  

}

export { Header, headerAppender }
console.log(headerAppender);