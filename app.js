//<---------------search var button function------------------>
const inputFunction = () => {
    const searchText = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadData(data.data));
}

const loadData = (phones) => {
    const container = document.getElementById('container-phone');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card h-100">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">${phone.phone_name}</h3>
                            <p class="card-text">Brand: ${phone.brand}</p>
                            <button type="button" class="btn btn-primary btn-lg">Large button</button>
                        </div>
                    </div>
        
        `
        container.appendChild(div);
    });
}