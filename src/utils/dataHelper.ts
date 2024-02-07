import { IData } from "../interface/IData";

const fetchData = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let response = await fetch("https://atlanmockbackend.vercel.app/data", requestOptions);
  let result = await response.json();
  return result;
};
export const getData = async () => {
  let item = localStorage.getItem("atlanData");
  if (item != null) return JSON.parse(item);
  let data = await fetchData();
  localStorage.setItem("atlanData", JSON.stringify(data));
  return data;
};
export const getFavouriteData = async () => {
  let item = localStorage.getItem("atlanData");
  if (item != null) return JSON.parse(item).slice(2);
  let data = await fetchData();
  localStorage.setItem("atlanData", JSON.stringify(data));
  return data.slice(2);
};

export const getDataById = async (id: number) => {
  let item = localStorage.getItem("atlanData");
  let data = [];
  if (item != null) data = JSON.parse(item);
  else {
    data = await fetchData();
    localStorage.setItem("atlanData", JSON.stringify(data));
  }
  return data.filter((item: IData) => item.id == id)[0];
};
const getDate = (): string => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;
  return formattedDate;
};
export const addEntry = (
  title: string,
  description: string,
  codeSample: string,
  author: string,
  aboutTheAuthor: string,
  selectedOption: string
) => {
  let localData = localStorage.getItem("atlanData");
  if (localData != null) {
    let item = JSON.parse(localData);
    item.push({
      id: item.length + 1,
      title,
      description,
      codeSample,
      name: author,
      aboutTheAuthor,
      category: selectedOption,
      date: getDate(),
    });
    localStorage.setItem("atlanData", JSON.stringify(item));
  }
};
