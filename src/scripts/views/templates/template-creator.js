import CONFIG from '../../globals/config';

// const createRestaurantListTemplate = (restaurant) => `
//       `;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__inner-left">
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      alt="${restaurant.name}" />
  </div>
  <div class="restaurant__inner-right">
      <div class="restaurant__description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
   <div class="restaurant__information">
      <div class="restaurant__city">
        <h4>City</h4>
        <p>${restaurant.city}</p>
      </div>
      <div class="restaurant__address">
        <h4>Address</h4>
        <p>${restaurant.address} minutes</p>
      </div>
      <div class="restaurant__rating">
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
      </div>
    </div>
    <div class="restaurant__menus">
      <div class="restaurant__categories">
        <h4>Categories</h4>
        <p>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</p>
      </div>
      <div class="restaurant__foods">
        <h4>Foods</h4>
        <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
      <div class="restaurant__drinks">
        <h4>Drinks</h4>
        <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>
  </div>   
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  // createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
