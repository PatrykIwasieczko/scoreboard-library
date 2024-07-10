import { Scoreboard } from "../controllers/Scoreboard";

describe("Scoreboard", () => {
  const mockedId = "test";

  test("should correctly return scoreboard summary", async () => {
    const scoreboard = new Scoreboard();

    jest
      .spyOn(Date.prototype, "toISOString")
      .mockReturnValue("2024-07-07T20:00:00.000Z");
    const argBraMatchId = scoreboard.startMatch("Argentina", "Brazil");
    scoreboard.updateScore(argBraMatchId, 2, 1);

    jest
      .spyOn(Date.prototype, "toISOString")
      .mockReturnValue("2024-07-07T20:10:00.000Z");
    const spaFraMatchId = scoreboard.startMatch("Spain", "France");
    scoreboard.updateScore(spaFraMatchId, 5, 1);

    jest
      .spyOn(Date.prototype, "toISOString")
      .mockReturnValue("2024-07-07T20:20:00.000Z");
    const engNetMatchId = scoreboard.startMatch("England", "Netherlands");
    scoreboard.updateScore(engNetMatchId, 0, 1);

    jest
      .spyOn(Date.prototype, "toISOString")
      .mockReturnValue("2024-07-07T20:30:00.000Z");
    const polGerMatchId = scoreboard.startMatch("Poland", "Germany");
    scoreboard.updateScore(polGerMatchId, 3, 3);

    // Scoreboard should look like that
    // Poland 3:3 Germany
    // Spain 5:1 France
    // Argentina 2:1 Brazil
    // England 0:1 Netherlands

    expect(scoreboard.getSummary().length).toEqual(4);
    expect(scoreboard.getSummary()[0].id).toEqual(polGerMatchId);
    expect(scoreboard.getSummary()[1].id).toEqual(spaFraMatchId);
    expect(scoreboard.getSummary()[2].id).toEqual(argBraMatchId);
    expect(scoreboard.getSummary()[3].id).toEqual(engNetMatchId);
  });

  test("should start a match and add it to scoreboard", () => {
    const scoreboard = new Scoreboard();

    const matchId = scoreboard.startMatch("Argentina", "Brazil");
    expect(typeof matchId).toBe("string");

    expect(scoreboard.getSummary().length).toEqual(1);
  });

  test("should correctly update match score", () => {
    const scoreboard = new Scoreboard();

    const matchId = scoreboard.startMatch("Argentina", "Brazil");

    expect(() => {
      scoreboard.updateScore(mockedId, 1, 0);
    }).toThrow("There is no match with that id");

    scoreboard.updateScore(matchId, 1, 0);
    expect(scoreboard.getSummary()[0].homeScore).toBe(1);
    expect(scoreboard.getSummary()[0].awayScore).toBe(0);
  });

  test("should correctly finish match", () => {
    const scoreboard = new Scoreboard();

    const matchId = scoreboard.startMatch("Argentina", "Brazil");
    scoreboard.startMatch("Spain", "France");
    expect(scoreboard.getSummary().length).toEqual(2);

    expect(() => {
      scoreboard.finishMatch(mockedId);
    }).toThrow("There is no match with that id");

    scoreboard.finishMatch(matchId);
    expect(scoreboard.getSummary().length).toEqual(1);
    expect(
      scoreboard.getSummary().find((match) => match.id === matchId)
    ).toBeUndefined();
  });
});
