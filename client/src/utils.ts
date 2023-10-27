export async function request<TResponse>(url: string): Promise<TResponse> {
  const response = await fetch(url);
  const data = await response.json();
  return data as TResponse;
}

export const formatDate = (days: number) => {
  const now = new Date(Date.now());
  now.setDate(now.getDate() + days);
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const dateMapper = (formattedDate: string, i: number) => {
  if (i === 0) return "دیروز";
  if (i === 1) return "امروز";
  if (i === 2) return "فردا";
  if (i > 2) {
    const decon = formattedDate.split("-");
    const d = new Date(+decon[0], +decon[1] - 1, +decon[2]);
    const weekDay = d.toLocaleDateString("IR", { weekday: "long" });
    return dayMapper(weekDay);
  }
};

const dayMapper = (day: string) => {
  switch (day) {
    case "Saturday":
      return "شنبه";
    case "Sunday":
      return "یکشنبه";
    case "Monday":
      return "دوشنبه";
    case "Tuesday":
      return "سه شنبه";
    case "Wednesday":
      return "چهارشنبه";
    case "Thursday":
      return "پنج شنبه";
    case "Friday":
      return "جمعه";
    default:
      break;
  }
};
