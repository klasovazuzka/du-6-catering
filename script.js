
function justFood(numPeople) {
    const pricePerPerson = 400; // Cena za osobu v Kč
    const totalPrice = numPeople * pricePerPerson;
    return `Catering od Just Food pro ${numPeople} lidí za ${totalPrice} Kč.`;
}

function yourMama(numPeople) {
    const pricePerPerson = 650; // Cena za osobu v Kč
    const totalPrice = numPeople * pricePerPerson;
    return `Catering od Your Mama pro ${numPeople} lidí za ${totalPrice} Kč.`;
}

function flavourHaven(numPeople) {
    const pricePerPerson = 850; // Cena za osobu v Kč
    const totalPrice = numPeople * pricePerPerson;
    return `Catering od Flavour Haven pro ${numPeople} lidí za ${totalPrice} Kč.`;
}

document.body.innerHTML += `<p>${justFood(200)}</p>` + `<p>${flavourHaven(500)}</p>` + `<p>${yourMama(350)}</p>`;


function createEvent(eventName, numPeople, cateringFunction) {
    const cateringDetails = cateringFunction(numPeople);
    return `Událost ${eventName} s ${cateringDetails}`;
}


document.body.innerHTML += `<p>${createEvent("Předání medailí za zásluhy", 200 ,justFood)}</p>` + 
                           `<p>${createEvent("Svatební hostina", 350, yourMama)}</p>` + 
                           `<p>${createEvent("Cena filmové akademie", 500, flavourHaven)}</p>`;