// Features object holding data for each feature articles
const featureDataList = [
    {
        featureNo: 1,
        imageSrc: "./images/movieglobe.png",
        altText: "movieglobe pic",
        title: "The Movie Location Globe",
        description: "Final project at Technigo. An interactive movie map for finding new movies and travel inspiration.",
        featureTags:  ["HTML5", "CSS", "React", "Redux", "Access Token", "Styled Components"],
        githubLink: "https://github.com/jonsjak/finalproject-front-jonas-vera",
        deployLink: "https://movie-globe.netlify.app/"
    },
    {
        featureNo: 2,
        imageSrc: "./images/happy-thoughts.png",
        altText: "chatbot pic",
        title: "Happy Thoughts!",
        description: "Twitterish message app for posting and liking happy thoughts to an API",
        featureTags: ["HTML5", "CSS", "React", "REST API"],
        githubLink: "https://github.com/jonsjak/project-happy-thoughts",
        deployLink: "https://eloquent-bunny-a273b7.netlify.app/"
    },
    {
        featureNo: 3,
        imageSrc: "./images/todo-app.png",
        altText: "Todo app",
        title: "Childish to-do-app",
        description: "A playful app for creating a task list, which uses Redux to keep track of state and pass tasks between unfinished and finished tasks.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/jonsjak/project-todos/tree/master",
        deployLink: "https://jonastodoapp.netlify.app/"
    },
    {
        featureNo: 4,
        imageSrc: "./images/space-maze.png",
        altText: "space maze starter page",
        title: "The Space Maze",
        description: "An animated game set in a fantastic space environment.",
        featureTags: ["HTML5", "CSS", "React", "Redux"],
        githubLink: "https://github.com/Technigo/project-labyrinth/pull/194",
        deployLink: "https://the-great-space-maze.netlify.app/"
    },
    {
        featureNo: 5,
        imageSrc: "./images/zombie-quiz.png",
        altText: "Zombie game pic",
        title: "Zombie Quiz Game",
        description: "Do you dare playing this post-apocalyptic Zombie game?",
        featureTags: ["HTML5", "CSS", "React"],
        githubLink: "https://github.com/jonsjak/project-redux-quiz",
        deployLink: "https://cute-pasca-d39626.netlify.app/"
    },
    {
        featureNo: 6,
        imageSrc: "./images/chatbot.jpg",
        altText: "chatbot pic",
        title: "Quiz Bot built in Javascript",
        description: "A Chat Bot letting you take a Sweden Trivia Quiz",
        featureTags: ["HTML5", "CSS", "Vanilla.js"],
        githubLink: "https://github.com/jonsjak/project-chatbot/commit/03caaf6153a20646dfb6d0eda11ff2fcb41ab94d",
        deployLink: "https://prismatic-cajeta-1efba0.netlify.app"
    },
    {
        featureNo: 7,
        imageSrc: "./images/weather-app.jpg",
        altText: "Weather App",
        title: "Weather App using API fetch",
        description: "App fetching weather data, altering imagery and textual content based on the forecast data",
        featureTags: ["HTML5", "CSS", "Vanilla.js", "API"],
        githubLink: "https://github.com/Technigo/project-weather-app/pull/265",
        deployLink: "https://cheery-pasca-c07ee4.netlify.app/"
    },
    {
        featureNo: 8,
        imageSrc: "./images/music-releases.jpg",
        altText: "Music release site",
        title: "Music release app built in React",
        description: "React single page application, fetching music releases from an API and using routes for maneuvering.",
        featureTags: ["HTML5", "CSS", "React", "SPA", "API"],
        githubLink: "https://github.com/Technigo/project-music-releases/pull/254",
        deployLink: "https://moonlit-paprenjak-b2f391.netlify.app/"
    },
    {
        featureNo: 9,
        imageSrc: "./images/ancient-times.jpg",
        altText: "Ancient Times News site",
        title: "The Ancient Times News Site",
        description: "Where it all started. A thematic news site landing page set in ancient times",
        featureTags: ["HTML5", "CSS"],
        githubLink: "https://github.com/jonsjak/project-news-site",
        deployLink: "https://the-ancient-times-news-site.netlify.app/"
    }
];

// skill lists
const codeSkills = [
    "HTML5", "CSS3", "Javascript ES6", "Styled components", "Github", "React", "Redux"
];

const moreSkills = [
   "Agile Methodology"
];

const upcomingSkills = [
  "TypeScript", "Kubernetes and/or Docker"
];

const toolboxSkills = [
    "Visual Studio Code", "Chrome DevTools", "Figma", "Postman", "Netlify", "MongoDB"
];

  // Renders innerHTML from the featureDataList
  const featureListGenerator = () => {
    const articleContainer = document.getElementById("articleContainer");

    featureDataList.forEach((feature) => {
        const featureArticle = document.createElement("article");
        featureArticle.className = "featureChild";
        
        //gets all tags for each article
        const techTags = feature.featureTags.map(tag => `<p class="tag">${tag}</p>`) 

        // Populates the innerHTML of featureArticle
        featureArticle.innerHTML = `
            <div class="image-container">
                <img class="feature-pic" src="${feature.imageSrc}" alt="${feature.altText}">
            </div>
            <div class="featureArt">
                <h2 class="newsHeader">${feature.title}</h2>
                <p class="newsTxt">${feature.description}</p>
                <div class="tags">
                    ${techTags}
                </div>

                <div class="button-container">
                    <a class="github-button" href="${feature.githubLink}">
                        <img class="github" src="/images/github-big-black.svg" alt="github logo">View the code 
                    </a>
                    <a class="live-demo" href="${feature.deployLink}" target="_blank">
                        <img class="globe-icon" src="/images/globe-big-black.svg" alt="globe logo">Live demo
                    </a>
                </div>                
            </div> 
        `;

        // Append featureArticle to the articleContainer
        articleContainer.appendChild(featureArticle);
    });
};
featureListGenerator();

// Render techStackList objects to innerHTML
const techStackListGenerator = () => {
    const codeList = document.getElementById("codeList");
    const toolboxList = document.getElementById("toolboxList");
    const moreList = document.getElementById("moreList");
    const upcomingList = document.getElementById("upcomingList");

    // Populate codeList
    codeSkills.forEach((code) => {
        const li = document.createElement("li");
        li.textContent = code;
        codeList.appendChild(li);
    });

    // Populate toolboxList
    toolboxSkills.forEach((toolbox) => {
        const li = document.createElement("li");
        li.textContent = toolbox;
        toolboxList.appendChild(li);
    });

    // Populate moreList
    moreSkills.forEach((more) => {
        const li = document.createElement("li");
        li.textContent = more;
        moreList.appendChild(li);
    });

    // Populate upcomingList
    upcomingSkills.forEach((upcoming) => {
        const li = document.createElement("li");
        li.textContent = upcoming;
        upcomingList.appendChild(li);
    });
};

techStackListGenerator();

// Scroll funcionality for down arrow
const scrollArrow = document.getElementById("scroll-button")

scrollArrow.addEventListener('click', () => {
    console.log("scrolling enabled");
    window.scrollTo({
        top: window.scrollY + 800,
        behavior: 'smooth'
      });;
  });

