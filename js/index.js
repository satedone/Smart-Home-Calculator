document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
      import('./btnjs.js'),
      import('./calc.js')
    ]).then(([btnjsModule, calcModule]) => {
    });
  });




