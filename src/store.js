export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_people_data':
      const dataPeople = action.payload;
      return { ...store, people: [...dataPeople] }

    case 'set_planets_data':
      const dataPlaneta = action.payload;
      return { ...store, planets: [...dataPlaneta] }

    case 'set_vehicles_data':
      const dataVehicles = action.payload;
      return { ...store, vehicles: [...dataVehicles] }

    case 'add_to_favorite':
      const { uid, name, category, linkto } = action.payload;
      console.log("Leo ]]]]] add_to_favorite: category")
      console.log(action.payload)

      return {
        ...store,
        favorites: store.favorites.some(item => item.uid === uid && item.category===category) ? store.favorites : [...store.favorites, { uid: uid, name: name,category: category , linkto:linkto }]
      }

    case 'delete_from_favorite':
      const {uid:deleteUid, category: deletecategory } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(item => !(item.uid === deleteUid && item.category === deletecategory))
      }

    default:
      throw Error('Unknown action.');
  }
}