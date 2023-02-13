import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="breadcrumb">
      <ol>
        <li class="breadcrumb__item">Home</li>
        <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
        <li class="breadcrumb__item active">Detail</li>
        </ol>
        <a href="#/" class="btn__back"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back</a>
    </div>

      <restaurant-detail></restaurant-detail>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('restaurant-detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.value = restaurant;
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
