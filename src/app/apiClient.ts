import { LemmyHttp } from 'lemmy-js-client';

const baseUrl = process.env.LEMMY_BACKEND;

if (!baseUrl) {
  throw new Error('Ensure LEMMY_BACKEND is configured in .env.local!');
}

export const apiClient = new LemmyHttp(baseUrl, { fetchFunction: fetch });
