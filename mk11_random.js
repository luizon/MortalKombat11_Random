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

var randomize = () => {
    let index = Math.floor(Math.random()*character.length);
    h1_character.innerHTML = character[index];
};

;(function() {
    h1_character = document.createElement("h1");
    h1_character.innerHTML = "<i>Press the button</i>";
    btn = document.createElement("button");
    btn.innerHTML = "randomize";
    btn.onclick = randomize;

    document.body.append(h1_character);
    document.body.append(btn);
})();
