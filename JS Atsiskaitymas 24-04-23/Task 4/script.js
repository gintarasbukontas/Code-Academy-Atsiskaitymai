/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

async function getCars() {
  const response = await fetch("./cars.json");
  const cars = await response.json();
  return cars;
}

async function showCars() {
  const cars = await getCars();
  console.log(cars);

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    output.append(carCard);
    carCard.classList.add("carCard");

    const carBrand = document.createElement("p");
    carCard.append(carBrand);
    carBrand.textContent = car.brand;
    carBrand.classList.add("carBrand");

    const carModels = document.createElement("p");
    carCard.append(carModels);
    carModels.textContent = `Models: ${[...car.models]}`;
    carModels.classList.add("carModels");
  });
}

window.onload = function () {
  showCars();
};
