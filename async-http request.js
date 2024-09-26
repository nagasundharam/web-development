



const getTodos = (resources,callback) =>  {
    return  new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        // console.log(request,request.readyState);
        if (request.readyState === 4 && request.status === 200 ){
            resolve(request.responseText);
        }
        else if (request.readyState === 4) {
            reject("you have some error");
        }

        });

        request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.send();


    })
}

getTodos('').then((data) => {
console.log(data);
console.log("problem 1 has resolved");
getTodos('')
})