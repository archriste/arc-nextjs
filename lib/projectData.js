const frontEndProjectsData = [
        {
            id: 0,
            name: 'React Calculator',
            img: 'project-calculator.png',
            imgAlt: 'A screenshot of the calculator app',
            description: 'A simple but bulletproof calculator made with React that uses a regex to sanitize user input.',
            codepen: 'https://codepen.io/archriste/full/yLReGNN',
            github: ''
        },
        {
            id: 1,
            name: 'Markdown Previewer',
            img: 'project-markdown.png',
            imgAlt: 'A screenshot of the markdown previewer app',
            description: 'A markdown previewer with input and output windows that can be maximized for easier viewing. Includes a tutorial.',
            codepen: 'https://codepen.io/archriste/full/abRdGBy',
            github: ''
        },
        {
            id: 2,
            name: 'Quote Generator',
            img: 'project-quote.png',
            imgAlt: 'A screenshot of the quote generator app',
            description: 'A random quote generator that generates a new color with each new quote and a share button.',
            codepen: 'https://codepen.io/archriste/full/poZQMLN',
            github: ''
        },
        {
            id: 3,
            name: 'Productivity Clock',
            img: 'project-timer.png',
            imgAlt: 'A screenshot of the productivity clock app',
            description: 'A no-frills pomodoro timer with customizable intervals and an alarm. I use it to stay productive while coding.',
            codepen: 'https://codepen.io/archriste/full/NWOrWLB',
            github: ''
        },
        {
            id: 4,
            name: 'Drum Machine',
            img: 'project-drums.png',
            imgAlt: 'A screenshot of the drum machine app',
            description: 'A drum machine with a variety of sounds, keyboard actuation, and a volume control. Recording feature coming soon!',
            codepen: 'https://codepen.io/archriste/full/eYPJLrR',
            github: ''
        },
        {
            id: 5,
            name: 'Invert Filter',
            img: 'project-cursor.png',
            imgAlt: 'A screenshot of the invert filter app',
            description: 'A CSS demo of a color-inverting spot that follows the cursor. There are two backgrounds to choose from.',
            codepen: 'https://codepen.io/archriste/full/yLqjBZb',
            github: ''
        },
    ]

    const visualizationProjectsData = [
        {
            id: 0,
            name: 'Choropleth Map',
            img: 'project-choropleth.png',
            imgAlt: 'A screenshot of the choropleth map',
            description: 'A map of the United States showing the percentage of adults with a bachelor\'s degree or higher.',
            codepen: 'https://codepen.io/archriste/full/yLQLrzL',
            github: ''
        },
        {
            id: 1,
            name: 'Heat Map',
            img: 'project-heatmap.png',
            imgAlt: 'A screenshot of the heat map',
            description: 'A heat map of the monthly global land-surface temperature. The color of each data value is generated continuously.',
            codepen: 'https://codepen.io/archriste/full/YzJmbzo',
            github: ''
        },
        {
            id: 2,
            name: 'Doping at Alpe d\'Huez',
            img: 'project-scatterplot.png',
            imgAlt: 'A screenshot of the scatterplot graph',
            description: 'A scatterplot of the 35 fastest times up a famous Tour de France hillclimb... most alleged to be doped.',
            codepen: 'https://codepen.io/archriste/full/XWxLeKO',
            github: ''
        },
        {
            id: 3,
            name: 'GDP Bar Chart',
            img: 'project-barchart.png',
            imgAlt: 'A screenshot of the bar chart',
            description: 'A bar chart of the United States GDP each quarter from 1947 to 2015 with a tooltip for each bar.',
            codepen: 'https://codepen.io/archriste/full/vYVPdKW',
            github: ''
        },
    ]

    export function getVisualizationProjectsData() {
        return visualizationProjectsData;
    }
    export function getFrontEndProjectsData() {
        return frontEndProjectsData;
    };