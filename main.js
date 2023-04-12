let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6b4b51;">Futura Ingeniera Mecatrónica que disfruta de la programación.</span>')
  .pauseFor(100)
  .deleteChars(10)
  .start();
