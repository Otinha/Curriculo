document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
      speed: 200,
      loop: true
    }).type('Web Developer', {delay: 500}).delete(13)
    .type('FullStack Developer', {delay: 500}).delete(19)
    .type('Software Engineer', {delay: 500}).delete(17)
    .go()
  })