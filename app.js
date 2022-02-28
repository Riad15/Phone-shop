//<---------------search var button function------------------>
const inputFunction = () => {
    const searchText = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data[0]));
}