function fetchJsonData(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network not ok")
          }
          resolve(response.json());
        }
        ).catch((error) => {
          // Handle network errors or JSON parsing errors here
          reject(`Fetch error: ${error}`);
        });
    }
    )
  }

  export default fetchJsonData;