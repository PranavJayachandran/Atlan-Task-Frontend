import { IData } from "../interface/IData";

let data: IData[] = [
  {
    id: 1,
    heading:
      "Lorem, for id 1 ipsum dolor sit amet consectetur adipisicing elit.sdfdsfsdf sdfsdf",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus tempus nibh, eget convallis lacus dapibus vitae. Sed varius arcu ac commodo condimentum. Sed in justo in quam malesuada sollicitudin. Phasellus et facilisis lorem, vel ultricies neque. Aliquam erat turpis, bibendum non lacinia ornare, vulputate sed metus. Ut lacus felis, interdum ut velit at, tristique porttitor elit. Vivamus nunc turpis, porttitor eu condimentum vel, consequat eu odio. Vivamus dictum nisl sem, a varius purus bibendum bibendum. Aenean luctus ullamcorper ligula vitae tempor. Aliquam id nisl in eros posuere ultrices.

    Aliquam erat volutpat. Morbi pretium justo a massa maximus porta. Nam dictum volutpat tincidunt. Morbi commodo ex eget gravida feugiat. Suspendisse pellentesque suscipit justo, sed sagittis sapien iaculis sed. Vestibulum metus dui, venenatis ac elementum et, placerat non lorem. Cras ante tellus, ornare id arcu sit amet, egestas malesuada nibh. Aliquam quis pretium dolor, in malesuada quam. Fusce ut mattis diam. Vestibulum elementum urna felis, et tempus risus tempus non. Etiam tempor eleifend felis.
    
    Curabitur id convallis urna. Sed ac elit ullamcorper, condimentum lorem consequat, consequat leo. Mauris facilisis, enim ac aliquam rhoncus, mauris velit malesuada mauris, eu sollicitudin metus erat ut libero. Cras rutrum nisi quis massa ullamcorper finibus. Etiam a mollis velit, quis iaculis urna. Aenean porta tempus ex, eu efficitur dui porta in. Morbi at nulla libero. Etiam urna odio, lacinia sit amet neque vitae, eleifend tempus velit. Sed aliquet cursus ipsum, ac semper nulla gravida commodo. Ut a eros ipsum.
    
    Suspendisse potenti. Phasellus ultricies diam non nisl efficitur dictum. Fusce dignissim nibh at nisl volutpat egestas. Mauris dapibus diam eu elementum viverra. Pellentesque id eleifend mauris, vitae efficitur est. Aenean a velit eget justo tempor tincidunt vitae in mauris. Sed a imperdiet felis.
    
    Fusce quis porttitor velit, non hendrerit urna. Ut pellentesque ex vitae nisi volutpat, quis convallis dui bibendum. Curabitur tristique euismod libero a tincidunt. Donec mauris massa, condimentum vel est a, porta tincidunt nibh. Nulla in nisi hendrerit, volutpat tellus vitae, rutrum massa. Praesent iaculis tincidunt imperdiet. Nullam ultricies lobortis porttitor. Duis lobortis, justo et commodo hendrerit, quam ante aliquam lorem, eget rutrum ex felis nec dolor. Pellentesque imperdiet ante massa, ac blandit elit aliquet ut.`,
    name: "Dam Bro",
    date: "May 22, 2023",
    code: `# Program to generate a random number between 0 and 9
    
      # importing the random module
      import random
      
      print(random.randint(0,9))
      `,
    aboutTheAuthor:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis molestias sequi ex perspiciatis excepturi eligendi maiores eos culpa earum hic? Voluptatum sunt, id odio aspernatur excepturi aperiam ab minima autem.",
    category: "Text-To-Speech",
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
    category: "Video To Text",
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
    category: "Text-To-Speech",
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
    category: "Natural Language Processing",
  },
];

export const getData = () => {
  return data;
};
export const getFavouriteData = () => {
  return data.slice(2);
};

export const getDataById = (id: number) => {
  return data.filter((item) => item.id == id)[0];
};
