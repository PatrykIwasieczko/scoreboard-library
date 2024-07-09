import { Match } from "../models/Match";

describe("Match", () => {
  test("should initialize with homeScore 0 and awayScore 0", () => {
    const match = new Match("Argentina", "Brazil");

    expect(match.homeScore).toEqual(0);
    expect(match.awayScore).toEqual(0);
  });

  test("should correctly update homeScore", () => {
    const match = new Match("Argentina", "Brazil");

    match.homeScore = 1;
    expect(match.homeScore).toEqual(1);

    expect(() => {
      match.homeScore = -1;
    }).toThrow("Score cannot be less than 0");
  });

  test("should correctly update awayScore", () => {
    const match = new Match("Argentina", "Brazil");
    match.awayScore = 1;
    expect(match.awayScore).toEqual(1);

    expect(() => {
      match.homeScore = -1;
    }).toThrow("Score cannot be less than 0");
  });
});
