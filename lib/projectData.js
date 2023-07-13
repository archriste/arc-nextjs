const frontEndProjectsData = [
  {
    id: 0,
    name: "React Calculator",
    img: "project-calculator.png",
    imgAlt: "A screenshot of the calculator app",
    description:
      "A simple but bulletproof calculator made with React that uses a regex to sanitize user input.",
    codepen: "https://codepen.io/archriste/full/yLReGNN",
    github: "https://gist.github.com/archriste/46ec0edb47f342394d22b72a760bc335",
  },
  {
    id: 1,
    name: "Markdown Previewer",
    img: "project-markdown.png",
    imgAlt: "A screenshot of the markdown previewer app",
    description:
      "A markdown previewer with input and output windows that can be maximized for easier viewing. Includes a tutorial.",
    codepen: "https://codepen.io/archriste/full/abRdGBy",
    github: "https://gist.github.com/archriste/7da0e50ac1bb78f1652e06c5221accdd",
  },
  {
    id: 2,
    name: "Quote Generator",
    img: "project-quote.png",
    imgAlt: "A screenshot of the quote generator app",
    description:
      "A random quote generator that generates a new color with each new quote and a share button.",
    codepen: "https://codepen.io/archriste/full/poZQMLN",
    github: "https://gist.github.com/archriste/80326f8b0eb55fc531c47b0ca3c33956",
  },
  {
    id: 3,
    name: "Productivity Clock",
    img: "project-timer.png",
    imgAlt: "A screenshot of the productivity clock app",
    description:
      "A no-frills pomodoro timer with customizable intervals and an alarm. I use it to stay productive while coding.",
    codepen: "https://codepen.io/archriste/full/NWOrWLB",
    github: "https://gist.github.com/archriste/6ca35b08f86288f0ec104a43295e1748",
  },
  {
    id: 4,
    name: "Drum Machine",
    img: "project-drums.png",
    imgAlt: "A screenshot of the drum machine app",
    description:
      "A drum machine with a variety of sounds, keyboard actuation, and a volume control. Recording feature coming soon!",
    codepen: "https://codepen.io/archriste/full/eYPJLrR",
    github: "https://gist.github.com/archriste/950d48d28517532dc5866a67ae263ab3",
  },
  {
    id: 5,
    name: "Invert Filter",
    img: "project-cursor.png",
    imgAlt: "A screenshot of the invert filter app",
    description:
      "A CSS demo of a color-inverting spot that follows the cursor. There are two backgrounds to choose from.",
    codepen: "https://codepen.io/archriste/full/yLqjBZb",
    github: "https://gist.github.com/archriste/65e6ab1d35ec27eb18509ef113c9f601",
  },
];

const visualizationProjectsData = [
  {
    id: 0,
    name: "Treemap Diagram",
    img: "project-treemap.png",
    imgAlt: "A screenshot of the treemap diagram",
    description: "A treemap diagram of the top 100 highest grossing movies divided and colored by genre.",
    codepen: "https://codepen.io/archriste/full/vYQxGBz",
    github: "https://gist.github.com/archriste/dc3e5cdd06e188175fb62d79a3340ce3",
  },
  {
    id: 1,
    name: "Choropleth Map",
    img: "project-choropleth.png",
    imgAlt: "A screenshot of the choropleth map",
    description:
      "A map of the United States showing the percentage of adults with a bachelor's degree or higher.",
    codepen: "https://codepen.io/archriste/full/yLQLrzL",
    github: "https://gist.github.com/archriste/df51f5842a23f8868f16b648bd7790fe",
  },
  {
    id: 2,
    name: "Heat Map",
    img: "project-heatmap.png",
    imgAlt: "A screenshot of the heat map",
    description:
      "A heat map of the monthly global land-surface temperature. The color of each data value is generated continuously.",
    codepen: "https://codepen.io/archriste/full/YzJmbzo",
    github: "https://gist.github.com/archriste/d4790b792333d2cbe104765e36939467",
  },
  {
    id: 3,
    name: "Doping at Alpe d'Huez",
    img: "project-scatterplot.png",
    imgAlt: "A screenshot of the scatterplot graph",
    description:
      "A scatterplot of the 35 fastest times up a famous Tour de France hillclimb... most alleged to be doped.",
    codepen: "https://codepen.io/archriste/full/XWxLeKO",
    github: "https://gist.github.com/archriste/13401bec1294ee9fa767fc309181b7f4",
  },
  {
    id: 4,
    name: "GDP Bar Chart",
    img: "project-barchart.png",
    imgAlt: "A screenshot of the bar chart",
    description:
      "A bar chart of the United States GDP each quarter from 1947 to 2015 with a tooltip for each bar.",
    codepen: "https://codepen.io/archriste/full/vYVPdKW",
    github: "https://gist.github.com/archriste/040ae8dc2e83421e7ffdc576b25e7cab",
  },
];

export function getVisualizationProjectsData() {
  return visualizationProjectsData;
}
export function getFrontEndProjectsData() {
  return frontEndProjectsData;
}
