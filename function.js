
const texts = [

    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light - Plato                         ",

    "Computer programs are the most complex things that humans make. ― Douglas C., JavaScript: The Good Parts                         ",

    "There is no coming to consciousness without pain. -Carl Jung                         ",

    "Sometimes people don't want to hear the truth because they don't want their illusions destroyed. -Nietzche                         ",

    "Be alone, that is the secret of invention; be alone, that is when ideas are born. -Tesla                          ",

    "I never did anything worth doing by accident, nor did any any of my inventions come by accident; they came by work. -Plato                          ",

    "It is during our darkest moments that we must focus to see the light. - Aristotle                          ",

    "There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time. -Napoleon                           ",

    " Our life is made by the death of others - Leonardo da Vinci                          ",

    "I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of his brain unfolding to success -Tesla                          ",

    "God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us – Niccolo Machiavelli                         ",
    "The unexamined life is not worth living – Socrates                         ",
    "Good character is not formed in a week or a month. It is created little by little, day by day. Protracted and patient effort is needed. - Heraclitus                         ",



];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";




(function type(){

    if (count === texts.length || count > texts.length){
        count = 0;
    }


    currentText =texts[count];
    letter = currentText.slice(0,++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count += Math.floor(Math.random() *4)+1;
        index = 0;
    }
    setTimeout(type,90);

})();
