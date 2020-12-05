import MovieController from "./../cotrollers/Service";

const movieController = new MovieController;

describe('testing index file', () => {
  test('3', () => {
    expect(movieController.index).toBe(10);
  });
});