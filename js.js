// let btn =document.querySelector('#new-quote');
// let quote=document.querySelector('.quote');
// let person=document.querySelector('.person');

// const quotes = [
//     {
//         quote: "frase del artista/autor/etc 10",
//         person: "nombre del autor de la frase 1"
        
//         },
//         {
//             quote: "frase del artista/autor/etc 20",
//             person: "nombre del autor de la frase 2"
            
//             },
//             {
//                 quote: "frase del artista/autor/etc 30",
//                 person: "nombre del autor de la frase 3"
                
//                 },
// ]
// btn.addEventListener('clik',() =>{
 
//     let random= Math.floor(Math.random()*quotes.length)
 
//      quote.innerText =quotes[random].quote
//     person.innerText=quotes[random].person
// })
// console.log(quotes)

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person'); 


const quotes = [
    
        {quote:"NUMERO 1",},
        {quote: "NUMERO 2",},
        {quote:"NUMERO 3",},
        {quote: "NUMERO 4",},
        {quote:" NUMERO 5",},
        {quote: "NUMERO 6",},
        {quote:" NUMERO 7",},
        {quote: "NUMERO 8",},
        {quote:" NUMERO 9",},
        {quote: "NUMERO 10",},
    

]

 btn.addEventListener('click', () => {

   let random = Math.floor(Math.random() * quotes.length)

   quote.innerText = quotes[random].quote;

//    person.innerText = quotes[random].person;



}) 

