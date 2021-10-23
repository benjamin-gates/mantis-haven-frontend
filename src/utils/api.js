import CreateImage from "../admin/images/CreateImage";

require("dotenv").config();

const inDevelopment = process.env.NODE_ENV !== "production";

const API_BASE_URL =
  process.env[
    `REACT_APP_API_BASE_URL_${inDevelopment ? "DEVELOPMENT" : "PRODUCTION"}`
  ];

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the request.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieves all existing images
 * @returns {Promise<[reservation]>}
 *  a promise that resolves to a possibly empty array of images saved in the database.
 */
export async function listImages(signal) {
  const url = new URL(`${API_BASE_URL}/images`);

  return await fetchJson(url, { headers, signal }, []);
}

export async function createImage(image) {
  const url = new URL(`${API_BASE_URL}/images`);
  return await fetchJson(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ data: image }),
  });
}

export async function deleteImage(imageId){
  const url = new URL(`${API_BASE_URL}/images/${imageId}`);
  return await fetchJson(url, {
    method: "DELETE",
    headers,
  });
}

export async function editImage(imageId, image){
  const url = new URL(`${API_BASE_URL}/images/${imageId}`);
  return await fetchJson(url, {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: image })
  });
}


export async function listUpdates(signal) {
  const url = new URL(`${API_BASE_URL}/updates`);

  return await fetchJson(url, { headers, signal }, []);
}

export async function createUpdate(update){
  const url = new URL(`${API_BASE_URL}/updates`);
  return await fetchJson(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ data: update })
  });
}

export async function deleteUpdate(updateId){
  const url = new URL(`${API_BASE_URL}/updates/${updateId}`);
  return await fetchJson(url, {
    method: "DELETE",
    headers
  });
}

export async function editUpdate(updateId, update){
  const url = new URL(`${API_BASE_URL}/updates/${updateId}`);
  return await fetchJson(url, {
    method: "PUT",
    headers,
    body: JSON.stringify({data: update})
  });
}

export async function listProducts(signal){
  const url = new URL(`${API_BASE_URL}/products`);
  return await fetchJson(url, {headers, signal}, []);
}

export async function createProduct(product){
  const url = new URL(`${API_BASE_URL}/products`);
  return await fetchJson(url, {
    method: "POST",
    headers,
    body: JSON.stringify({data: product})
  });
}

export async function deleteProduct(productId){
  const url = new URL(`${API_BASE_URL}/products/${productId}`);
  return await fetchJson(url, {
    method: "DELETE",
    headers
  });
}