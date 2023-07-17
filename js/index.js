document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
      import('./btnjs.js'),
      import('./calc.js'),
      import('./telegram.js')
    ]).then(([btnjsModule, calcModule, telegramModule]) => {
    });
  });




