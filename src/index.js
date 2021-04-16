console.log('%c HI', 'color: firebrick')

const init = () => {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"  //~challenge 1
    const imageContainer = document.getElementById("dog-image-container");
    
    fetch(imgUrl)
    .then(resp => { 
        // console.log(resp);
        return resp.json()
    }) 
    .then(data => { 
        // console.log(data);
        data.message.forEach(element => {
            const newPic = document.createElement("img");
            newPic.src = element;
            imageContainer.appendChild(newPic);
        })
    })
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' //~challenge 2 & 4
    const breedListCont = document.getElementById("dog-breeds");

    fetch(breedUrl)
    .then(response => response.json())  
    .then(data => {
        const objData = data.message
        // data.message.slice(0,1); //? Why no work?
        // console.log('log', data.message);
        for (const element in objData) {
            // console.log(element, 'element');
            const newList = document.createElement('li');
            newList.innerHTML = element;
            breedListCont.appendChild(newList);
        }
    })
    

    breedListCont.addEventListener('click', e => {    //~challenge 3
        e.target.style.color = 'red';
    })
    
    const breedDropDown = document.querySelector("#breed-dropdown");  
        breedDropDown.addEventListener('click', e => {   //~challenge 4
            // console.log(breedDropDown.value, "letters");
            console.log(breedListCont, "list container")
            
            
            
            //* get array out of dog list;  compare first letter against breeddropdown.value

            
        })
}
    

    //* hold on to breedlist, create breedlist array, filter array, get rid of everything and remake it with the right letter
    
init();
// document.addEventListener('DOMContentLoaded', init);

