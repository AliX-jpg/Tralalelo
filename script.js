document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    console.log('Canvas initialized successfully!');
});