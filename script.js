window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');
  
    // Espera 3 segundos, luego desvanece el splash y muestra el contenido
    setTimeout(() => {
      splash.classList.add('fade-out');
  
      // Espera a que termine la transición (1s), luego oculta splash y muestra contenido
      setTimeout(() => {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Reactiva scroll
      }, 1000); // Espera el fade-out
    }, 2800);
});

const videoID = "kDLA8Uk1tWg"; // Reemplazá con tu video ID
  let iframeInjected = false;

  function createIframe() {
    if (iframeInjected) return;
    iframeInjected = true;

    // Borramos cualquier iframe viejo que haya quedado
    const oldIframe = document.getElementById("yt-bgm");
    if (oldIframe) oldIframe.remove();

    const iframe = document.createElement("iframe");
    iframe.id = "yt-bgm";
    iframe.width = "0";
    iframe.height = "0";
    iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}&controls=0`;
    iframe.allow = "autoplay";
    iframe.style.display = "none";

    document.body.appendChild(iframe);
  }

  // Eventos que se disparan en la primera interacción
  const events = ["click", "keydown", "mousemove", "touchstart"];

  events.forEach(event => {
    document.addEventListener(event, createIframe, { once: true });
  });