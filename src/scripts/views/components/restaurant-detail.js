import CONFIG from '../../globals/config';

class RestaurantDetail extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _templateRating() {
    const rate = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating), 10); i += 1) {
      rate.push('<i class="fa-solid fa-star"></i>');
    }
    return rate;
  }

  _render() {
    const {
      name,
      city,
      address,
      pictureId,
      rating,
      description,
      categories,
      menus,
      consumerReviews,
    } = this._data;

    this.innerHTML = `
      <div class="restaurant__inner-left">
    <h2 class="restaurant__name">${name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + pictureId}"
      alt="${name}" />
  </div>
  <div class="restaurant__inner-right">
      <div class="restaurant__description">
      <h3>Description</h3>
      <p>${description}</p>
    </div>
   <div class="restaurant__information">
      <div class="restaurant__location">
        <i class="fa-solid fa-location-dot"></i>
        <p class="detail-location">${address}, ${city}</p>
      </div>
    </div>
    <div class="restaurant__menus">
      <div class="restaurant__categories">
        <h4>Categories</h4>
        <p>${categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}</p>
      </div>
      <div class="restaurant__foods">
        <h4>Foods</h4>
        <ul>
          ${menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="restaurant__drinks">
        <h4>Drinks</h4>
        <p>${menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join('')}</p>
      </div>
    </div>
  </div>
  <div class="restaurant__form-container">
    <div class="restaurant__rating">
      <h4>Rating ${rating}</h4>
      ${this._templateRating().map((item) => item).join('')}
    </div>
    <div id="review-container">
        ${consumerReviews.map((review) => `
            <div class="review-container">
                <div class="review-photo-profile">
                    <img src="./images/user/default.jpg" alt="consumer photo profile">
                </div>
                <div class="review-body">
                    <h3 class="review-consumer-name">${review.name}</h3>
                    <p class="review-date-post">${review.date}</p>
                    <p class="review-content">${review.review}</p>
                </div>
            </div>
          `).join('')}
        </div>
        <div class="review-form-container">
            <h2>Make a Review</h2>
            <form class="review-form" id="review-form">
                <input type="hidden" name="id" value="${this._data.id}">
                <div class="review-form-element">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" autocomplete="off">
                </div>
                <div class="review-form-element">
                    <label for="review">Review</label>
                    <textarea name="review" id="review"></textarea>
                </div>
                <button type="submit" id="button-review">Add Review</button>
            </form>
        </div>
  </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
