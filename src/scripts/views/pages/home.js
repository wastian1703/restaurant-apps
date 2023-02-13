import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <app-hero></app-hero>
      <div id="restaurants" class="restaurants">
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listOfRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
