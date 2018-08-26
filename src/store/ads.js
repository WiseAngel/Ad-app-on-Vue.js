import * as firebase from 'firebase';

class Ad {
  constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
    loadAds(state, payload) {
      state.ads = payload;
    }
  },
  actions: {
    async createAd({commit, getters}, payload) {
      commit('clearError');
      commit('setLoading', true);

      const image = payload.image;

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo);
        const ad = await firebase.database().ref('ads').push(newAd);
        const imageExt = image.name.slice(image.name.lastIndexOf('.'));
        const fileData = await firebase.storage().ref(`ads/${ad.key}.${imageExt}`).put(image);
        const imageSrc = fileData.metadata.downloadURLs[0];

        await firebase.database().ref('ads').child(ad.key).update({
          imageSrc
        });

        commit('setLoading', true);
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc
        });

      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async fetchAds({commit}) {
      commit('clearError');
      commit('setLoading', true);

      const resultAds =[];

      try {
        const firebaseAdsValue = await firebase.database().ref('ads').once('value');
        const publishedAds = firebaseAdsValue.val();

        Object.keys(publishedAds).forEach(key => {
          const ad = publishedAds[key];
          resultAds.push(
            new Ad(
              ad.title,
              ad.description,
              ad.ownerId,
              ad.imageSrc,
              ad.promo,
              key
            )
          );
        });
        commit('loadAds', resultAds)
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => state.ads.find(ad => ad.id === adId);
    }
  }
}
