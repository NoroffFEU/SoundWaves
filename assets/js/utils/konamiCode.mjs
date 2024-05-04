// Secret code!
// Person press the following keys: ↑ ↑ ↓ ↓ ← → 
// Then redirect to the login page.

import { BASE_URL, URLs } from "./constants.mjs";

let pressed = [];
let secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export function initializeKonamiCode() {
    window.addEventListener('keyup', handleKeyPress);
}

function handleKeyPress(event) {
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('') === secretCode.join('')) {
        window.location.href = `${BASE_URL}${URLs.login}`;
    }
}