// Love Adventure Interactive JavaScript

const gameText = document.getElementById("game-text");
const choicesContainer = document.getElementById("choices");

// Function to display text and buttons
function displayScene(text, choices) {
    gameText.textContent = text;
    choicesContainer.innerHTML = "";
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = choice.action;
        choicesContainer.appendChild(button);
    });
}

// The game logic
function startGame() {
    displayScene(
        "Your eyes open to a shaded wood. The sky hangs heavy above you, thick fog shrouding your path forward. You feel something in your hand. Looking down, you see it is an amulet bearing a single blue eye. The amulet is faintly warm, and hums quietly to some ancient tune of love and loss. The moment your eyes met with the amulet, the fog cleared, and two paths were revealed to you, one to the left, and the other right. From the left, you hear the sound of running water, and a distant howl, and from the right, you hear the crackle of fire, but no light is shown through the dark.",
        [
            { text: "Go left", action: leftPath },
            { text: "Go right", action: rightPath },
        ]
    );
}

function leftPath() {
    displayScene(
        "You disregard the fire, and move towards the sound of water. You hope that the water might quench your thirst, and perhaps the howling wolf might provide you a companion in this shaded wood. As you walk down the path, you find that the road seems to fade into the trees, as any and all previous direction fused with the treeline. The amulets hum intensifies. Looking down, you see the eye begin to glow. The eye beckons you forward, deeper into the trees. Looking back, you see that you might still turn back down the path. The moment your eyes met with the amulet, the fog cleared, and two paths were revealed to you, one to the left, and the other right. From the left, you hear the sound of running water, and a distant howl, and from the right, you hear the crackle of fire, but no light is shown through the dark.",
        [
            { text: "Listen to the amulet", action: stayWoman },
            { text: "Turn back", action: turnBack }
        ]
    );
}

function rightPath() {
    displayScene(
        "You take the rightward path, hoping the crackle of fire will ease the cold that has chilled your aching bones. Down the path, you hear a chant, as the amulet shakes with excitement. Looking down, you see the eye has shifted from blue to green, and the soft hum of love and loss had joined with the distant chant. Following the chant, light bled into the path, with the projections of a man's shadow dancing about a great fire. The eye chanted louder, as the dancing intensified. At the end of the path, you see the source of the chant: a man dressed in an aged jerkin, with loose fitting sleaves hanging out each side of the leather piece, the sleaves ending in rough metal gauntlets. At the man's side was a sword, which swung loosely as the man danced.Looking up, the man's face erupt with pleasure, as he held his hand out, welcoming you to the dance.",
        [
            { text: "Join the dance", action: stayMan },
            { text: "Reject the dance", action: rejectDance }
        ]
    );
}

function turnBack() {
    displayScene(
        "You turn back, hoping to find your way to the start of the path. Yet as you step deeper down the road, you find that the path has changed. The previous directions are gone, and you can barely make out which way is forward, and which way is backward. All the while, the amulet cries out, refusing to relent, until eventually it shatters, and you are left cold and alone. You wonder silently if you made the right choice, or if you had made a horrible mistake for turning back. Yet despite the amulet vanishing, you have a sense that it will return, and you will have another opportunity to try again.",
        [
            { text: "Restart the game", action: startGame }
        ]
    );
}


function rejectDance() {
    displayScene(
        "You reject the man's offer; he is a stranger to you, and you can't trust that he won't throw you into the fire. You turn back and run into the woods, hoping to return from where you came. To your shock, however, the path is gone, and the fog has returned. Turning around, you find that the fire too is gone. When you try to use the amulet to clear the path, you find that it has begun to tremble, and then shatters in your hand. You are now alone. You cry silently, as you fall to the ground. You worry that you have made a horrible mistake, but know that you would never find your way back to the fire without the light or the amulet. But you know its not over, there will be another chance to find the fire, or perhaps the flowing water down the path from so long ago. The amulet would return, you were sure. One day it would guide you out of the woods, but for now, you sit, and wait.",
        [
            { text: "Restart the game", action: startGame }
        ]
    );
}

function stayWoman() {
    displayScene(
        "You walk deeper into the shaded woods. The distant howl grows closer, as it becomes clear it is not a wolf, but the wind, the trees above and the grass below are swept into a frenzy by the storm that peppers your head with rain. The amulet conitnues to hum, its intensity increasing the deeper you step into the woods. Before long, the hidden path leads to a clearing. Sat in the clearing is a woman, dressed in a fine silk dress, colored with a swirling pattern of lavendar and crimson. In her hands is a book, bound in etched leather, and faintly gilded. As you enter the clearing, the wind and rain cease, and you are overcome with warmth and comfort. The woman closes the book, and peers up at you, and begins to speak: 'The road was cold, and long, but now you're home. I'm sorry the amulet couldn't tell you more, but I could only do so much to lead you here. I'm sure you're curious if you made the right choices, and I can assure you, no choice could have been incorrect. All the same, I'm glad your choices lead you to me, after all this time.' The woman steps towards you, the colors on her dress spiralling and shifting as she walked.She held her arms out, embracing you against her chest. Your weary eyes close as you feel her heart beat. It beats faster, as she rubs your back. As she releases you, you look into her eyes, and see they match the eye on your amulet, which has ceased its hum, and now only faintly vibrates in your hand. The woman takes the amulet, and places it around your neck, the eye changing from hers, to yours. As the eye shifts, a warmth radiates outward, binding you and the eye together. The woman spoke once more:'You don't have to stay if you don't want to. The amulet is yours now, and will keep you safe no matter what. But if you choose to, my woods shall always welcome you, and you will always be loved by my side.' You may now choose to stay with the woman, and embrace the warmth of the clearing, or return to the cold of the woods, guided by the amulet. Whether you leave the clearing with the amulet, or stay with the woman, you know that the warmth will never leave you, and you will always remain inside the woman's thoughts, and in her heart. You are loved, no matter what choice you make.",
        [
            { text: "Restart the game", action: startGame }
        ]
    );
}

function stayMan() {
    displayScene(
        "You grab the man by the hand, and are swung around towards the fire. Just before falling into the pit of flame, the man grabs you at the waist, and pulls you in. Your eyes meet his, and you realize the amulet and he share the same eye. You feel his warmth against you, as your heart skips a beat. His chin is coated in stubble. He places his index finger and thumb above and below your chin, holding you close as he pulls your face towards his lips. As you kiss him, you feel your body melt into his, as your heart sings to the stars above. He pulls back, spins you once again, his feet like a swordsman, each step careful, yet wild. Before long, his chanting stops, as he breathes heavily. He drops his sword from his side, and sits by the fire, and begins to speak: 'I haven't had a dancing partner in ages; thanks for that. I was wondering if you might make it here. The amulet probably wanted you to go the other way, but I'm glad you ended up with me. Let me see it real quick.' The man takes the amulet. He then rubs it softly with his war-worn hands, and returns it to you. The eye now matches yours, instead of his. He speaks:'For you. A little thing to keep you safe if you go back into the woods. Not that you have to leave. You're welcome to stay. I'd like that, in fact. But, you never have to stay. If you do choose to leave, the amulet will keep you warm just as well as my fire would. Of course if you stay, we could have a little more fun than just dancing.' The man smiles, and looks coy. You are intrigued by the man; his words an invitation of what is to come if you do choose to stay. Yet as you hold the amulet close against your chest, you know that it will keep you safe, even if the man isn't there to fight for you. Nothing in the woods could harm you so long as you had the amulet to clear the way. And you know that you would always be welcomed back into the man's arms once you grew tired of the woods. No matter what you choose, you know you will be loved, and you will be happy.",
        [
            { text: "Restart the game", action: startGame }
        ]
    );
}

// Start the game
startGame();

