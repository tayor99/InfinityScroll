const container = document.querySelector('.container');

const data = [
  {
    body: `./images/Model3.jfif`,
  },
  {
    body: `./images/ModelS.jfif`,
  },
  {
    body: `./images/ModelX.jfif`,
  },
  {
    body: `./images/ModelY.jfif`,
  },
  {
    body: `./images/SolarPanels.jfif`,
  },
  {
    body: `./images/SolarRoof.jfif`,
  },
];
const continous = () => {
  data.forEach((item) => {
    const div1 = document.createElement('div');
    div1.className = 'text';
    const image = document.createElement('img');
    image.src = item.body;
    div1.appendChild(image);
    console.log(div1);
    container.appendChild(div1);
  });
};

window.addEventListener('DOMContentLoaded', continous);

window.addEventListener('scroll', () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    continous();
  }
});
