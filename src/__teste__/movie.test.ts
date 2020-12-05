// describe('testing index file', () => {
//   test('Test Project', () => {
//     expect(1+1).toBe(2);
//   });
// });

import express from "express"; // import express
import serverRoutes from "./../routes"; //import file we are testing
import request from "supertest"; // supertest is a framework that allows to easily test web apis
// const app = express(); //an instance of an express app, a 'fake' express app
// app.use("/states", serverRoutes); //routes

import app from './../server';

describe("testing-server-routes", () => {
  it("GET /movie/:id - success", async () => {
    const { body } = await request(app).get("/movie/5"); //uses the request function that calls on express app instance
    expect(body).toEqual(
      {
        "adult": false,
        "backdrop_path": "/u0zMKKpEdDWpOKmFW2sLbKKICJH.jpg",
        "belongs_to_collection": null,
        "budget": 4000000,
        "genres": [
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 35,
            "name": "Comedy"
          }
        ],
        "homepage": "",
        "id": 5,
        "imdb_id": "tt0113101",
        "original_language": "en",
        "original_title": "Four Rooms",
        "overview": "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
        "popularity": 15.095,
        "poster_path": "/xhU6hPDnk4s8iWWKoq4oEmNI600.jpg",
        "production_companies": [
          {
            "id": 14,
            "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
            "name": "Miramax",
            "origin_country": "US"
          },
          {
            "id": 59,
            "logo_path": "/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
            "name": "A Band Apart",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "1995-12-09",
        "revenue": 4257354,
        "runtime": 98,
        "spoken_languages": [
          {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
          }
        ],
        "status": "Released",
        "tagline": "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
        "title": "Four Rooms",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 1804
      },
    );
  });
});