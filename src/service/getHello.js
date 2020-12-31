export const getHello = () => {
  
  return fetch('http://facebook.github.io/react-native/movies.json', {})
      .then(res => {
          return res.json()
      });
}