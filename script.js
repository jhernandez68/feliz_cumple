
document.getElementById('poem-button').addEventListener('click', function() {
    const poems = [
        { text: 'Tu amor brilla más que todas las estrellas del cielo.', author: 'Pablo Neruda' },
        { text: 'Eres mi luz en los días más oscuros.', author: 'Gustavo Adolfo Bécquer' },
        { text: 'Te amo no solo por lo que eres, sino por lo que soy cuando estoy contigo.', author: 'Elizabeth Barrett Browning' },
        { text: 'El amor es el ala veloz que Dios ha dado al alma para volar hasta el cielo.', author: 'Michelangelo Buonarroti' },
        { text: 'Eres el sueño más bonito que nunca quiero dejar de soñar.', author: 'William Shakespeare' }
    ];
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById('poem-container').innerHTML = `"${randomPoem.text}"<br><em>- ${randomPoem.author}</em>`;
});
