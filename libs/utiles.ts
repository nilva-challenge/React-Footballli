import axios from "axios";

export const axiosInstance = axios.create({})

export const getDate = (subtractDay?: number) => {
  let currentDate = new Date()
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  if (subtractDay)
    return `${year}-${month}-${parseInt(day) + subtractDay}`;

  return `${year}-${month}-${day}`;
}