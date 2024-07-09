import { Match } from "../models/Match";

export class Scoreboard {
  private matches: Match[] = [];

  startMatch(homeTeam: string, awayTeam: string): number {
    const match = new Match(homeTeam, awayTeam);

    this.matches.push(match);
    return match.id;
  }

  updateScore(
    matchId: number,
    newHomeScore: number,
    newAwayScore: number
  ): void {
    const match = this.matches.find((match) => match.id === matchId);

    if (!match) {
      throw new Error("There is no match with that id");
    }

    match.homeScore = newHomeScore;
    match.awayScore = newAwayScore;
  }

  finishMatch(matchId: number): void {
    const match = this.matches.find((match) => match.id === matchId);

    if (!match) {
      throw new Error("There is no match with that id");
    }

    this.matches.splice(this.matches.indexOf(match), 1);
  }

  getSummary(): Match[] {
    return this.matches;
  }
}
