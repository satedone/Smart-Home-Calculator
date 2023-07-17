document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
      import('./calc.js'),
      import('./telegram.js')
    ]).then(([calcModule, telegramModule]) => {
    });
  });




