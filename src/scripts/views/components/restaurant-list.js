import CONFIG from '../../globals/config';

class RestaurantList extends HTMLElement {
  set restaurants(data) {
    this._data = data;
    this.render();
  }

  render() {

  }

  _getTemplate() {
    const {
      id,
      name,
      city,
      pictureId,
      rating,
      description,
    } = this._data;
    return `
    <div class="restaurants__card">
        <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" class="restaurants__img-restaurants" alt="restoran ${name}">
        <div class="restaurants__city" >
          <p aria-label="Terletak di ${city}">${city}</p>
      </div>
      <div class="restaurants__inner">
        <p class="restaurants__rating">Rating ${rating} <i class="fa-solid fa-star" aria-label="Bintang"></i></p>
        <h3 class="restaurants__name" aria-label="Nama Restoran ${name}"><a href="/#/detail/${id}">${name}</a></h3>
        <p class="restaurants__desc" aria-label="Deskripsi Restoran ${description}">
          ${description}
        </p>
      </div>
    `;
  }
}
customElements.define('restaurant-list', RestaurantList);
