export default class Wakatime {
  private codingActivity: any;
  private langsActivity: any;
  /**
   * importAllData
   */
  public async importAllData() {
    let dataCode = await fetch(
      "https://wakatime.com/share/@Rok/2993ef66-a86f-47e2-9c72-3cce338ca433.json"
    );
    let dataLangs = await fetch(
      "https://wakatime.com/share/@Rok/52ca2157-ebb6-454f-8107-d037143740f8.json"
    );
    if (dataCode.ok && dataLangs.ok) {
      this.codingActivity = await dataCode.json() as CodingActivity;
      this.langsActivity = await dataLangs.json() as Language;
      return true;
    }
    console.log("Log codeActivity Error?: " + dataCode.status);
    console.log("Log langsActivity Error?: " + dataLangs.status);
    return false;
  }
}

type CodingActivity = {
  data: {
    best_day: {
      date: string;
      text: string;
      total_seconds: number;
    };
    grand_total: {
      daily_average: number;
      daily_average_including_other_language: number;
      human_readable_daily_average: string;
      human_readable_daily_average_including_other_language: string;
      human_readable_total: string;
      human_readable_total_including_other_language: string;
      total_seconds: number;
      total_seconds_including_other_language: number;
    };
    range: {
      start: string;
      end: string;
      range: string;
      days_including_holidays: number;
      days_minus_holidays: number;
      holidays: number;
    };
  };
};

type Language = {
  data: [
    {
      name: string;
      percent: number;
      color: string;
      decimal: number;
      digital: number;
      hours: number;
      minutes: number;
      text: string;
      total_seconds: number;
    }
  ];
};

