import { type } from "os";


export const dataCode = async () => {
    let dataCode = await fetch(
      "https://wakatime.com/share/@Rok/2993ef66-a86f-47e2-9c72-3cce338ca433.json"
    );
    return await dataCode.json() as CodingActivity;
}

export const dataLang = async () => {
  let dataLangs = await fetch(
    "https://wakatime.com/share/@Rok/806292a7-f5f9-4337-9d33-1f10139b2404.json"
  );
    return await dataLangs.json() as Language;
}

export type CodingActivity = {
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

export type Language = {
  data: [
    LangProps
  ];
};


export type LangProps = {
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