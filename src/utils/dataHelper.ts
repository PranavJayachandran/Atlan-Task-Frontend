import { IData } from "../interface/IData";

let data: IData[] = [
  {
    id: 1,
    heading:
      "Lorem, for id 1 ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        commodi soluta quasi quisquam unde, minima excepturi eligendi ex
        voluptate, consequuntur provident aliquid alias neque, reprehenderit
        tenetur iure sapiente omnis architecto!`,
    name: "Dam Bro",
    date: "May 22, 2023",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module
      import random
      
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.",
  },
  {
    id: 2,
    heading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        commodi soluta quasi quisquam unde, minima excepturi eligendi ex
        voluptate, consequuntur provident aliquid alias neque, reprehenderit
        tenetur iure sapiente omnis architecto!`,
    name: "Dam Bro",
    date: "May 22, 2023",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module
      import random
      
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.",
  },
  {
    id: 3,
    heading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        commodi soluta quasi quisquam unde, minima excepturi eligendi ex
        voluptate, consequuntur provident aliquid alias neque, reprehenderit
        tenetur iure sapiente omnis architecto!`,
    name: "Dam Bro",
    date: "May 22, 2023",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module
      import random
      
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.",
  },
  {
    id: 4,
    heading:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        commodi soluta quasi quisquam unde, minima excepturi eligendi ex
        voluptate, consequuntur provident aliquid alias neque, reprehenderit
        tenetur iure sapiente omnis architecto!`,
    name: "Dam Bro",
    date: "May 22, 2023",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module
      import random
      
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.",
  },
];

export const getData = () => {
  return data;
};

export const getDataById = (id: number) => {
  return data.filter((item) => item.id == id)[0];
};
