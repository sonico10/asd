function importData() {
    let text;
    let person = prompt("Please enter your text:", "");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        convert(person)
    }
}

let name, cr, xp, type, init, senses, perception, hp, eac, kac, fort, ref, will, dr, immunities, speed, melee, ranged, offensive_abb, str, dex, con, int, wis, cha, skills, lang, other_abb;


function convert(text) {
    let data = text.split("\n");
    console.log(data);
    //1-3 mindig ugyan az
    name = data[0].split('CR')[0];
    cr = parseInt(data[0].split('CR')[1]);
    xp = parseInt(data[1].split(' ')[1].replace(',', ''));
    type = data[2];
    init = data[3].split(';')[0]
    senses = data[3].split(';')[1]
    perception = data[3].split(';')[2]
        //Defense
    hp = data[5].split(' ')[1];
    eac = data[6].split(';')[0].split(' ')[1];
    kac = data[6].split(';')[1].split(' ')[1];

    //Offense
    //Statistics
    //Description


}

let butt = document.querySelector('button');
butt.addEventListener('click', importData);