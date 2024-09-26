// fetch api

// fetch('todos/luigi.json').then((response) => {
//   console.log('resolved',response);
//   return response.json(); 
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
// console.log('rejected',err);
// });

// async & await 
const getTodos = async () => {

    const response = await fetch('todos/luigis.json');
    
    if (response.status !== 200){
        throw new Error("can't fetch the data");

    }
    const  data = await response.json();
    return data ;

   
   
};
console.log(1)
console.log(2)
getTodos().then((data) => {
    console.log('resoved:',data)})
    .catch((err) => {
        console.log('rejected :',err.message)
    });
    

console.log(3);
console.log(4);



