// src/lib/sanityImage.js
import imageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // Adjust the path to your Sanity client setup

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
