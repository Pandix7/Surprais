let currentPage = 0;

const pages = [
    {
        photos: ['img/image.png', 'img/image2.png', 'img/image3.png'],
        message: 'Gracias por ser esa persona que llena mi vida de felicidad.',
        character: 'img/denji.png',
        dialogue: 'You are special for me.'
    },
    {
        photos: ['img/image8.png', 'img/image10.png', 'img/image11.png'],
        message: 'Mi robloxiana favorita.',
        character: 'img/koi.png',
        dialogue: 'Tienes unos ojos preciosos.'
    },
    {
        photos: ['img/image4.png', 'img/image9.png', 'img/image13.png'],
        message: 'Te quiero más de lo que puedas imaginar.',
        character: 'img/take.png',
        dialogue: 'Regresaría en el tiempo como Takemichi para volver a conocerte.'
    },
    {
        photos: ['img/image15.png', 'img/image16.png', 'img/image17.png'],
        message: 'Cada que te sientas mal recuerda que estaré para ti.',
        character: 'img/Silent.png',
        dialogue: 'Me gusta mucho compartir tiempo contigo.'
    },
    {
        photos: ['img/image18.png', 'img/image19.png', 'img/image20.png'],
        message: 'Perdón si a veces no tengo tema de conversación, pero que me des de tu tiempo lo aprecio demasiado',
        character: 'img/wave.png',
        dialogue: 'Mi corazón está feliz cuando estas cerca.'
    },
    {
        photos: ['img/image23.png', 'img/image24.png', 'img/image25.png'],
        message: 'Este día aprendimos a nadar y descubrimos flores que son mariposas',
        character: 'img/david.png',
        dialogue: 'Fue una gran noche ksdj.'
    },
    {
        photos: ['img/image26.png', 'img/image27.png', 'img/image28.png'],
        message: 'Hoy descubrimos que la playa tiene nieve',
        character: 'img/oshi.png',
        dialogue: 'Trasnocharse una vez al año no hace daño.'
    },
    {
        photos: ['img/image29.png', 'img/image30.png', 'img/image31.png'],
        message: 'Ella bien feliz con su skin de Toga',
        character: 'img/ekko.png',
        dialogue: 'Te mereces todas las cosas lindas de este mundo.'
    }
];

function openAlbum() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('album').style.display = 'block';
    updatePage();
}

function updatePage() {
    const page = pages[currentPage];

    // Actualiza las fotos
    document.getElementById('photo1').style.backgroundImage = `url('${page.photos[0]}')`;
    document.getElementById('photo2').style.backgroundImage = `url('${page.photos[1]}')`;
    document.getElementById('photo3').style.backgroundImage = `url('${page.photos[2]}')`;
    
    // Actualiza el mensaje
    document.getElementById('message').textContent = page.message;

    // Actualiza el personaje
    const characterElement = document.getElementById('character');
    characterElement.innerHTML = `<img src="${page.character}" alt="Personaje" />`;
    characterElement.setAttribute('data-dialogue', page.dialogue);
}

function prevPage() {
    currentPage = (currentPage > 0) ? currentPage - 1 : pages.length - 1;
    updatePage();
}

function nextPage() {
    currentPage = (currentPage < pages.length - 1) ? currentPage + 1 : 0;
    updatePage();
}
