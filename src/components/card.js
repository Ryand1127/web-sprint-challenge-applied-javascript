import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //new HTML elements
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  //new class
  div1.classList.add('card');
  div2.classList.add('headline');
  div3.classList.add('author');
  div4.classList.add('img-container');
  

  //text content
  div2.textContent = article.headline
  img.src = article.authorPhoto
  span.textContent = article.authorName


  //appending html
  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(img);
  div3.appendChild(span);

  //click event
  div1.addEventListener('click', console.log(article.headline));
  
  return div1
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

    //obtaining artices from the endpoint
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(rem => {
    //setting an array of object keys equal to topics
    const topics = (Object.keys(rem.data.articles))
    //going through index of the array and pushing to the first function
    topics.forEach(topic => {rem.data.articles[topic].forEach(data => {
        document.querySelector(selector).appendChild(Card(data));
      })
    })
    // .catch(error => console.log(error));
  })
  

}

export { Card, cardAppender }
