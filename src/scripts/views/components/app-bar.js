class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar__button">
      <button id="togglerButton" type="button" aria-expanded="false" aria-label="Navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <div class="app-bar__brand">
      <a href="/">
        <img src="./images/logo.png" alt="Logo Makan-Makan" class="app-bar__img-logo">
        Makan Makan
      </a>
    </div>
    <nav id="navigationDrawer" class="app-bar__nav">
      <ul>
        <li><a href="/" aria-label="Beranda">Home</a></li>
        <li><a href="#/favorite" aria-label="Favorite">Favorite</a>
        </li>
        <li><a href="https://github.com/wastian1703" target="_blank" rel="noopener" aria-label="Tentang Kami">About
            Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
