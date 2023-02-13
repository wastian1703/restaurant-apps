class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchQuery');
  }

  render() {
    this.innerHTML = `
      <div id="searchContainer" class="search__container">
        <input placeholder="Search restaurants" id="searchQuery" type="search">
        <button id="searchButton" type="submit">Search</button>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
