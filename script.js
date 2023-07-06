(async function () {
    let movie = document.getElementById("movie");
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67e51170a1mshc515adaabac9158p1dccc9jsn467590858dcb',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        for (let i = 0; i < result.d.length; i++) {
            movie.innerHTML += `
                
        
                <div class="card">
                <img src="${result.d[i].i.imageUrl}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <p class="card-text">${result.d[i].l}</p>
                    <p class="card-text">
                    ${result.d[i].y}
        
                    <i class="bi bi-star-fill"></i>
        
                    </p>
                </div>
            </div>
                
              
            
                    `;
        }
    } catch (error) {
        console.error(error);
    }
})()









