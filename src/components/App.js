import React, {useState, useEffect} from 'react';

function App(){
    const url ="https://dog.ceo/api/breeds/image/random"
    const imageUrl="https://images.dog.ceo/breeds/bulldog-english/mami.jpg";
    const [animal, setAnimal] =useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((image) =>{
            setAnimal(image.message);
            setIsLoaded(true); 
            console.log(image)           
        })                      
    },[]);
   console.log(animal) ;
   
    if(!isLoaded) return <p>Loading...</p>
    return <img src= {animal} alt="A Random Dog"/>
        
       
}
export default App;
