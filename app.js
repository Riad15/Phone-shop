//<---------------search var button function------------------>
const inputFunction = () => {
    const searchText = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadData(data.data));
    document.getElementById('search-box').value = '';
}

const loadData = (phonedata) => {
    const phones = phonedata.slice(0, 20);
    const container = document.getElementById('container-phone');
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card h-100">
                        <img class="w-50 mx-auto m-2" src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body ">
                            <h3 class="card-title">${phone.phone_name}</h3>
                            <p class="card-text">Brand: ${phone.brand}</p>
                        </div>
                        <div class="mx-auto mb-2">
                        <button onclick="product('${phone.slug}')" type="button" class="btn btn-primary btn-lg text-center ">details</button>
                        </div>
                    </div>
        
        `
        container.appendChild(div);
    });
}

const product = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => productDisplay(data.data));
}
const productDisplay = (information) => {
    console.log(information.others);
    const detailsContainer = document.getElementById('details-container');
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="d-flex justify-content-center mx-auto ">
                    <div class="m-4 w-25">
                        <img class="w-75 mx-auto m-1 " src="${information.image}" alt="...">
                    </div>
                    <div>
                
                        <table class="table table-bordered border-Dark m-4 w-75">
                            <tr>
                                <th>Ficherers</th>
                                <th>Sensor</th>
                                <th> Others </th>
                            </tr>
                            <tr>
                                <td>Storage: ${information.mainFeatures.storage} </td>
                                <td>${information.mainFeatures.sensors[0]} </td>
                                <td>${information.others ? information.others.WLAN : 'Not Available'} </td>
                            </tr>
                            <tr>
                                <td>Display Size: ${information.mainFeatures.displaySize} </td>
                                <td>${information.mainFeatures.sensors[1]}</td>
                                 <td>${information.others ? information.others.Bluetooth : 'Not Available'} </td>
                            </tr>
                            <tr>
                                <td>Chip Set: ${information.mainFeatures.chipSet} </td>
                                <td>${information.mainFeatures.sensors[2]}</td>
                                 <td>${information.others ? information.others.GPS : 'Not Available'} </td>
                            </tr>
                            <tr>
                                <td>Memory: ${information.mainFeatures.memory} </td>
                                <td>${information.mainFeatures.sensors[3]}</td>
                                 <td>${information.others ? information.others.NFC : 'Not Available'} </td>
                            </tr>
                             <tr>
                                <td>  </td>
                                <td>${information.mainFeatures.sensors[4]}</td>
                                <td>${information.others ? information.others.Radio : 'Not Available'} </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td>${information.mainFeatures.sensors[5]}</td>
                                <td>${information.others ? information.others.USB : 'Not Available'} </td>
                            </tr>
                            <tr>
                                <td> </td>
                                <td>${information.mainFeatures.sensors[6] ? information.mainFeatures.sensors[6] : 'Not Available'}</td>
                                  <td> </td>
                            </tr>
                        </table>
                    </div>
                
                </div>
    
    `
    detailsContainer.appendChild(div);
}