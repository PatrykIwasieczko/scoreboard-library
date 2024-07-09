import { Scoreboard } from "../controllers/Scoreboard";

describe("Scoreboard", () => {
  test("should start a match and add it to scoreboard", () => {
    const scoreboard = new Scoreboard();

    const matchId = scoreboard.startMatch("Argentina", "Brazil");
    expect(typeof matchId).toBe("number");

    expect(scoreboard.getSummary().length).toEqual(1);
  });

  test("should correctly update match score", () => {
    const scoreboard = new Scoreboard();

    const matchId = scoreboard.startMatch("Argentina", "Brazil");

    expect(() => {
      scoreboard.updateScore(Math.random(), 1, 0);
    }).toThrow("There is no match with that id");

    scoreboard.updateScore(matchId, 1, 0);
    expect(scoreboard.getSummary()[0].homeScore).toBe(1);
    expect(scoreboard.getSummary()[0].awayScore).toBe(0);
  });
});
