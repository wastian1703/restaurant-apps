import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="breadcrumb">
      <ol>
        <li class="breadcrumb__item">Home</li>
        <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
        <li class="breadcrumb__item active">Favorite</li>
      </ol>
      <a href="#/" class="btn__back"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back</a>
    </div>
      <div id="restaurants" class="restaurants">  
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
