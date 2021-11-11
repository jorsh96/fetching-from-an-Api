function main(){
  const imageArray = ['woman1.jpeg', 'woman2.jpeg', 'woman3.jpeg', 'woman4.jpeg', 'woman5.jpeg', 'image5.jpeg', 'image3.jpeg', 'image2.jpeg', 'image1.jpeg', 'image.jpeg'];
  let row = document.querySelector('.row')

  document.addEventListener('DOMContentLoaded', () => {
    let output = ""
    return fetch('https://swapi.dev/api/people').then(response => response.json()).then(data => {
      data.results.forEach((item, index) => {
        output+=`
        <div class = "person">
          <img src = "./Project pictures/${imageArray[index]}" class = "image1" >
          <div class = "text">
            <h3 class="name__tag">${item.name}</h3>
            <div class="restOfdetails hidden">
              <h3>Gender: ${item.gender}</h3>
              <h3>Height: ${item.height}</h3>
            </div>
          </div>
        </div>
        `
      })
      row.innerHTML = output;
      let nameDiv = document.querySelectorAll('.name__tag')
      let restOfDetails = document.querySelectorAll('.restOfdetails');

      nameDiv.forEach((element, index) => element.addEventListener('click', (e) => restOfDetails[index].classList.toggle('hidden')))
    })
  })


}

main()
