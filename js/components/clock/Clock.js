function Clock(selector) {
    
    const timeValues = [432, 9, 37, 39];
    const labelVaalues = ['Days', 'Hours', 'Minutes', 'Seconds'];
    let HTML = '';

    for (let i = 0; i < timeValues.length; i++) {
        HTML += `<div class="time">
                    <div class="value">${timeValues[i]}</div>
                    <div class="label">${labelVaalues[i]}</div>
                </div>`;
    }

    const DOM = document.querySelector(selector);
    DOM.innerHTML = HTML;
}

export { Clock }