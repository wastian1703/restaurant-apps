class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__hero-inner">
        <h1 aria-label="Selamat datang di website Makan-Makan Mari Makan">Makan-Makan <br>Mari Makan</h1>
        <p>
          Mari makan di restoran kami, Terdapat berbagai macam makanan.<br>
          Kami jamin makan disini anda akan ketagihan
        </p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
