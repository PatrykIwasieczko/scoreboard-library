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

  set homeScore(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be less than 0");
    }

    this._homeScore = newScore;
  }

  set awayScore(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be less than 0");
    }

    this._awayScore = newScore;
  }
}
