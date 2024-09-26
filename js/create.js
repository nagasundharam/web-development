

const form = document.querySelector('form');

const createPost = async (e)=> {
    e.preventDefault();

    const doc = {
        title: form.title.value,
        body:form.body.value,
        likes: 0,

    }
    const options = {
        method:"POST",
        headers : {
            "content-Type":"application/json",
            Accept:"application/json"
           
        },
        body: JSON.stringify(doc)

    }
    const some = await fetch('http://localhost:3000/posts',options);

    window.location.replace('/Users/nagas/json-server/index.html');


}

form.addEventListener('submit',createPost);