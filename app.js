// json file's
const  provinces = "./json/provinces.json";
const cities = "./json/cities.json";
// provinces element
let provincesEle =  document.querySelector('#provinces');
// fetch data provinces.json
fetch(provinces)
    .then((response)=>response.json())
    .then((response)=>{
        response.forEach(res=>{
            // append child and give `<option data-code="${res.id}" value="${res.name}">${res.name}</option>`
            // using data code(id in provinces.json) for filter data
            provincesEle.innerHTML +=` <option data-code="${res.id}" value="${res.name}">${res.name}</option>`
        })
    })
    .catch((err)=>console.log(err) )

    // Event provinces for  show cities
document.querySelector('#provinces').addEventListener('click',function (e){

    // for show data set provinces
    const [option] = e.target.selectedOptions
    // reset cities onchange provinces
    document.querySelector('#city').innerHTML =""
    // fetch data cities.json
    fetch(cities)
        .then((response)=>response.json())
        .then((response)=>{
            response.forEach(res=>{
                // match province_id in cities.json and data-code(id in province.json) 
               if(res.province_id === parseInt(option.dataset.code)){
                   document.querySelector('#city').innerHTML +=` <option  value="${res.name}">${res.name}</option>`
               }
            })
        })
        .catch((err)=>console.log(err) )
})
// Write by SaeedTofigh(aquateam.ir)
// Thanks😍😍