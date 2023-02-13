import { openDB } from 'idb';
import CONFIG from '../globals/config';
import '../views/components/search-bar';
import { createRestaurantListTemplate } from '../views/templates/template-creator';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class SearchRestaurantIdb {
  static async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  }

  static async onButtonSearchClicked() {
    const searchElement = document.querySelector('search-bar');

    try {
      const result = await this.getAllRestaurants(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }

    const renderResult = results => {
      createRestaurantListTemplate.apply = results;
    };
  };

  static async searchRestaurants(query) {
    return (await this.getAllRestaurants()).filter((restaurant) => {
      const lowerCaseRestaurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = lowerCaseRestaurantName.replace(/\s/g, '');

      const lowerCaseQuery = query.toLowerCase();
      const jammedQuery = lowerCaseQuery.replace(/\s/g, '');

      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  }
}

export default SearchRestaurantIdb;
