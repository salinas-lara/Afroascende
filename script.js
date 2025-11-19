// a merda do carrossel
    (function () {
      const slidesEl = document.getElementById('slides');
      const slides = Array.from(slidesEl.children);
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      const dotsContainer = document.getElementById('dots');
      let index = 0;
      const total = slides.length;

      // Cria indicadores (dots)
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full bg-white/60 hover:bg-white';
        dot.setAttribute('aria-label', 'Ir para slide ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
      const dots = Array.from(dotsContainer.children);

      function update() {
        slidesEl.style.transform = `translateX(-${index * 104}%)`;
        dots.forEach((d, i) => {
          d.classList.toggle('scale-125', i === index);
          d.classList.toggle('bg-white', i === index);
          d.classList.toggle('bg-white/60', i !== index);
        });
      }

      function next() { index = (index + 1) % total; update(); }
      function prev() { index = (index - 1 + total) % total; update(); }
      function goTo(i) { index = (i + total) % total; update(); }

      prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
      nextBtn.addEventListener('click', () => { next(); resetTimer(); });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { prev(); resetTimer(); }
        if (e.key === 'ArrowRight') { next(); resetTimer(); }
      });
      // Inicializa
      update();
      startTimer();
      // Ajuste responsivo: garante largura correta em redimensionamento
      window.addEventListener('resize', update);
    })();