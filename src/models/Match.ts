export class Match {
  private _homeScore = 0;
  private _awayScore = 0;
  private homeTeam;
  private awayTeam;
  private _startedTimestamp: string;
  private _id;

  constructor(homeTeam: string, awayTeam: string) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this._id = crypto.randomUUID();
    this._startedTimestamp = new Date().toISOString();
  }

  get homeScore(): number {
    return this._homeScore;
  }

  get awayScore(): number {
    return this._awayScore;
  }

  get startedTimestamp(): string {
    return this._startedTimestamp;
  }

  get id(): string {
    return this._id;
  }

  private updateScore(newScore: number, home: boolean) {
    if (!Number.isInteger(newScore)) {
      throw new Error("Score must be an integer");
    }

    if (newScore < 0) {
      throw new Error("Score cannot be less than 0");
    }

    if (home) {
      this._homeScore = newScore;
    } else {
      this._awayScore = newScore;
    }
  }

  set homeScore(newScore: number) {
    this.updateScore(newScore, true);
  }

  set awayScore(newScore: number) {
    this.updateScore(newScore, false);
  }
}
