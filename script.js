document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

document.querySelectorAll('.key').forEach(element => {
    element.addEventListener('click', () => {
        const clickedKey = element.getAttribute('data-key')
        playSound(clickedKey)
    })
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    /*if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }*/

    switch(sound) {
        case 'keyq':
            keyElement.classList.add('active_q');

            setTimeout(()=>{
                keyElement.classList.remove('active_q');
            }, 300);
        break;
        case 'keyw':
            keyElement.classList.add('active_w');

            setTimeout(()=>{
                keyElement.classList.remove('active_w');
            }, 300);
        break;
        case 'keye':
            keyElement.classList.add('active_e');

            setTimeout(()=>{
                keyElement.classList.remove('active_e');
            }, 300);
        break;
        case 'keya':
            keyElement.classList.add('active_a');

            setTimeout(()=>{
                keyElement.classList.remove('active_a');
            }, 300);
        break;
        case 'keys':
            keyElement.classList.add('active_s');

            setTimeout(()=>{
                keyElement.classList.remove('active_s');
            }, 300);
        break;
        case 'keyd':
            keyElement.classList.add('active_d');

            setTimeout(()=>{
                keyElement.classList.remove('active_d');
            }, 300);
        break;
        case 'keyz':
            keyElement.classList.add('active_z');

            setTimeout(()=>{
                keyElement.classList.remove('active_z');
            }, 300);
        break;
        case 'keyx':
            keyElement.classList.add('active_x');

            setTimeout(()=>{
                keyElement.classList.remove('active_x');
            }, 300);
        break;
        case 'keyc':
            keyElement.classList.add('active_c');

            setTimeout(()=>{
                keyElement.classList.remove('active_c');
            }, 300);
        break;
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}