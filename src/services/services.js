import buildURl from "./ulr.services";

const getUrl = () => {
    return fetch(buildURl())
        .then(value => value.json())
}

export default getUrl;