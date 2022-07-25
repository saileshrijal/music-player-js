var amrit = new Audio('Musics/amrit.mp3');
var phool = new Audio('Musics/phool.mp3')


// window.onload = ()=>{
//     console.log('asdf')
// }
// phool.play();

var playpauseBtn = document.getElementsByClassName('playpauseBtn');
console.log(playpauseBtn);

const playMusic = (musicUrl) => {
    musicUrl.play();
}

const pauseAllMusic = () => {
    amrit.pause();
    phool.pause();
}

document.querySelectorAll('.playpauseBtn').forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('bi-play-fill')) {
            document.querySelectorAll('.playpauseBtn').forEach(element => {
                element.classList.remove('bi-pause-fill')
                element.classList.add('bi-play-fill')
                pauseAllMusic();

            });
            item.classList.add('bi-pause-fill');
            item.classList.remove('bi-play-fill');
            playMusic(amrit);
            if (index == 0) {
                pauseAllMusic();
                playMusic(amrit);
            }
            if (index == 1) {
                pauseAllMusic();
                playMusic(phool);
            }
        }

        else {
            item.classList.remove('bi-pause-fill');
            item.classList.add('bi-play-fill');
            pauseAllMusic();
        }
    })
})





