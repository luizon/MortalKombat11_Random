var character = ["ROBOCOP",
                "SHEEVA",
                "FUJIN",
                "SPAWN",
                "THE JOKER",
                "JADE",
                "ERRON BLACK",
                "KABAL",
                "KUNG LAO",
                "SUB-ZERO",
                "SCORPION",
                "CENTRION",
                "FROST",
                "BARAKA",
                "RAIDEN",
                "SHAO KAHN",
                "D'VORAH",
                "JAX BRIGGS",
                "GERAS",
                "KANO",
                "TERMINATOR T-800",
                "NIGHTWOLF",
                "CASSIE CAGE",
                "KOTAL KAHN",
                "SKARLET",
                "SONYA BLADE",
                "SHANG TSUNG",
                "JOHNNY CAGE",
                "NOOB SAIBOT",
                "KOLLECTOR",
                "KITANA",
                "JACQUI BRIGGS",
                "LIU KANG",
                "SINDEL"];
var h1_character;
var btn;
var img_thumbnail;
var root = "https://raw.githubusercontent.com/luizon/MortalKombat11_Random/master/"

var randomize = () => {
    let index = Math.floor(Math.random()*character.length);
    h1_character.innerHTML = character[index];
    img_thumbnail.alt = character[index] + " thumbnail.";
    img_thumbnail.src = root + index + ".png";
};

;(function() {
    h1_character = document.getElementById("h1_character");
    btn = document.getElementById("btn_randomize");
    img_thumbnail = document.getElementById("img_thumbnail");
    btn.onclick = randomize;
})();