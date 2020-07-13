let randomButton = document.querySelector('#boss_button');
let result = document.querySelector('#boss');
let amount = document.getElementById("number_input");

let bosses = ['Captain Traunt - Desolations Edge' , 'Mouthpeice - Acsension Bluff' , 'Gigamind - Meridian Metroplex' , 
'Katagawa Ball - Skywell-27' , 'Katagawa Jr. - Atlas HQ' , 'Warden - The Anvil' , 'Geniviv - Voracious Canopy' , 
'Billy, The Annointed - Jakobs Estate' , 'Aurelia - Blackbarrel Cellars' ,'Chupacabratch - Athenas' , 'GraveWard - Floating Tomb' , 'Alzala - Jakobs Manner' , 
'El Dragon JR - Jakobs Manner' , 'Indo Tyrant - Floodmoor Basin' , 'The Unstoppable - Ambermire' , 'Maxotrillon - Eden-6' , 'Mother of Gragans - Eden 6' , 'Red Jabber - Eden 6' , 'Heckle and Hyde - Jakobs Manner' ,
'Psychobillies - Ambermire' , 'Chonk Stomp - Floodmoor Basin' , 'Jabbermogwai - Eden 6' , 'Sylestro and Atomic - Nekro' , 'Blinding Banshee - Nekro' , 'Swarm Host - Nekro' , 'Pen and Teller - Guts of Carnivora' ,
'Shiv - Pandora' , 'Troy - Pandora' , 'Tyreen - Destroyers Rift' , 'DumpTruck - Droughts' , 'Antalope - Devils Razor' , 'Madame Crawly' , 'Demoskag - Droughts' , 'Rakkman - Carnivora' , 'Road dog - SplinterLands', 
'Hot karl - Devils' , 'Phenoix - Splinterlands' , 'Sloth - Konrads Hold' , 'Princess Tarantella II - Splinterlands' , 'DJ Deadsk4G - Splinterlands' , 'CrushJaw - Cathedral' , 'ManVark - Konrads Hold' , 
'Killavolt - Electra City' , 'Rampager - Forgotten Basilisc' , 'One Punch - Electra City' , 'Borman Yates - Meridian Outskirts' , 'Force Troopers - Atlas HQ' , 'Handsome Jackie - Skywell-27' , 
'Urist McEnforcer - Electra City' , 'Baron Nogin' , 'Judge High Tower - Electra City' , 'Skrakk - Assension Bluff' ];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function myFunction() {
    let Input = document.getElementById("number_input").value;
    let randomItem = " ";
    if (Input > 20 || Input < 0 ){
        alert("That number is invalid, please try again!");
    }
    else if (Input < 20 || Input > 0){
        let h;
        count = 0;
        while (count < Input){
        count++;
        randomItem = bosses[Math.floor(Math.random()*bosses.length)];
        h = document.createElement("H1");
        let t = document.createTextNode(randomItem);
        h.style.cssText = "line-height: 15px; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font: size 20px; color: #ec3d26; text-shadow: 3px 3px 0 #000, -1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;";
        h.appendChild(t);
        document.body.appendChild(h);      
        console.log(randomItem);
        } 
    }
}

