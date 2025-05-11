function calculatePrice() {
    let basePrice = 100;

    const edu = document.getElementById("education").value;
    const networth = document.getElementById("networth").value;
    const caste = document.getElementById("caste").value;

    let skillsPrice = 0;
    if(document.getElementById("skills1").checked) skillsPrice += 10;
    if(document.getElementById("skills2").checked) skillsPrice += 20;
    if(document.getElementById("skills3").checked) skillsPrice += 15;
    if(document.getElementById("skills4").checked) skillsPrice += 10;

    const age = document.querySelector('input[name="age"]:checked').value;

    let reputationCoef = 1;
    let gossipsPrice = 0;
    if(document.getElementById("rep1").checked) reputationCoef *= 0.85;
    if(document.getElementById("rep2").checked) reputationCoef *= 0.9;
    if(document.getElementById("rep3").checked) gossipsPrice -= 20;

    let eduCoef = 1;
    if(edu == "bachelor") eduCoef *= 1.5
    else if(edu == "college") eduCoef *= 1.2
    else if(edu == "high_school") eduCoef *= 1.05
    else if(edu == "middle_school") eduCoef *= 0.9;

    let networthCoef = 1;
    if(networth == "upper_class") networthCoef *= 2
    else if(networth == "middle_class") networthCoef *= 1.5 
    else if(networth == "lower_class") networthCoef *= 1.2;

    let castePrice = 0;
    if(caste == "brahmin") castePrice += 100 
    else if(caste == "kshatriya") castePrice += 50
    else if(caste == "vaishya") castePrice += 20
    else if(caste == "shudra") castePrice += 10
    else if(caste == "varna") castePrice -= 50;

    let ageCoef = 1;
    if(age == "18-23") ageCoef = 1.5
    else if(age == "24-27") ageCoef = 1.2
    else if(age == "28+") ageCoef = 0.95;
    
    let finalPrice = basePrice * eduCoef * networthCoef * ageCoef * reputationCoef + skillsPrice + castePrice + gossipsPrice;

    document.getElementById("result").innerText = `Final price: $${finalPrice}`;
}

document.getElementById("submit").addEventListener("click", calculatePrice);