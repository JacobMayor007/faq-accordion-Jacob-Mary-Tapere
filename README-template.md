# Frontend Mentor - FAQ accordion solution

- Solution URL: [Add solution URL here](https://github.com/JacobMayor007/faq-accordion-Jacob-Mary-Tapere)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- jQuery

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

 <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320">
      <g clip-path="url(#a)">
        <path fill="#301534" d="M0 0h1440v320H0z" />
        <path stroke="#AD28EB" stroke-linecap="round" stroke-width="3"
          d="M-676-182C-454-10-396.863 71.888-197.5 143.5-99 178.882-36.919 170.726-4.751 170.108c104.487-2.01 204.609-43.237 298.633-85.495 38.354-17.238 75.882-36.189 112.063-57.63 23.903-14.165 58.87-33.913 64.721-64.42 2.32-12.102-16.369-12.24-23.771-9.789-13.511 4.474-25.95 16.544-36.056 25.669-19.131 17.273-37.062 35.948-53.235 56.031-33.728 41.883-68.034 100.247-34.158 152.014 17.287 26.415 43.94 45.693 72.112 59.127 56.182 26.791 119.205 38.742 180.778 44.146 164.438 14.432 328.964-3.461 483.004-63.622 79.76-31.148 158.55-70.539 224.23-126.245 48.56-41.186 102.8-96.548 110.66-162.9 10.93-92.187-94.04-136.062-169.29-148.418-61.41-10.084-123.75-4.164-184.07 9.588-78.262 17.84-149.006 47.67-214.241 94.384-130.002 93.093-234.95 228.413-272.466 385.827-15.64 65.625-16.648 138.21 5.493 202.551 21.452 62.338 69.196 110.576 124.048 144.923 65.117 40.774 137.161 62.14 212.839 73.21 100.474 14.696 202.817 12.233 303.027-2.997 176.17-26.772 352.73-88.431 505.18-181.077 103.22-62.725 199.3-134.15 280.06-224.425 17.7-19.793 31.81-40.875 43.74-64.521C2172.11-58.5 2095.5-145.528 2095.5-151" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h1440v320H0z" />
        </clipPath>
      </defs>
    </svg>
  </div>
  <div class="container">
    <div class="inside-container">
      <div>
        <h1><svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41">
          <path fill="#AD28EB"
            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z" />
        </svg> FAQs</h1>
      </div>
      <div class="questions">
        <p>
          What is Frontend Mentor, and how will it help me?
          <span class="question-one-icon">
          <svg class="question1 icons-plus-minus1 icon-plus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" 
          fill="none" viewBox="0 0 30 31">
            <path fill="#AD28EB"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 
              13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0
               0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
          </svg>
          <svg class="question1 icons-plus-minus1 icon-minus" 
          xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
            <path fill="#301534"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 
              3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
          </svg>
          </span>
        </p>
      </div>
      <div class="answers answer1">
        <p>
          Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.
        </p>
      </div>
      <div>
        <div class="questions">
          <p>
            Is Frontend Mentor free?
            <span class="question-two-icon">
            <svg class="question2 icons-plus-minus2 icon-plus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
              viewBox="0 0 30 31">
              <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 
                          13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0
                           0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
            </svg>
            <svg class="question2 icons-plus-minus2 icon-minus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
              viewBox="0 0 30 31">
              <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 
                          3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
            </svg>
            </span>
          </p>
        </div>
        <div class="answers answer2">
          <p>
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels.
          </p>
        </div>
      </div>
      <div>
        <div class="questions">
          <p>
            Can I use Frontend Mentor projects in my portfolio?
            <span class="question-three-icon">
              <svg class="question3 icons-plus-minus3 icons-plus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
                viewBox="0 0 30 31">
                <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 
                            13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0
                            0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
              </svg>
              <svg class="question3 icons-plus-minus3 icon-minus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
                viewBox="0 0 30 31">
                <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 
                            3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
              </svg>
            </span>
          </p>
        </div>
        <div class="answer3 answers">
          <p>
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!
          </p>
        </div>
      </div>
      <div>
        <div class="questions">
          <p>
            How can I get help if I'm stuck on a challenge?
            <span class="question-four-icon">
              <svg class="question4 icons-plus-minus4 icon-plus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
                viewBox="0 0 30 31">
                <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 
                            13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0
                            0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" />
              </svg>
              <svg class="question4 icons-plus-minus4 icon-minus" xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none"
                viewBox="0 0 30 31">
                <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 
                            3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" />
              </svg>
            </span>
          </p>
        </div>
        <div class="answer4 answers">
          <p>
            The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members.
          </p>
        </div>
      </div>
    </div>
    <div class="signs-icons">
      
    </div>
  </div>

```css
.body {
  background-color: hsl(0, 0%, 100%);
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
}
h1 {
  font-family: "Work Sans", sans-serif;
}

p {
  word-wrap: break-word;
  word-spacing: 5px;
  font-family: "Work Sans", sans-serif;
}

.inside-container {
  position: relative;
  height: 250px;
  width: 500px;
  word-wrap: break-word;
  padding: 25px 25px;
  background-color: hsl(275, 100%, 97%);
  border-radius: 20px;
  position: relative;
  bottom: 250px;
}

.answers {
  display: none;
}

.icon-minus {
  display: none;
}

.questions {
  color: hsl(292, 42%, 14%);
  font-weight: 700;
  position: relative;
  margin-top: 50px;
}

.answers {
  color: hsl(292, 16%, 49%);
}

.question-two-icon {
  position: absolute;
  right: -5px;
  top: -5px;
}

.question-one-icon {
  position: absolute;
  right: -5px;
  top: -5px;
}

.question-three-icon {
  position: absolute;
  right: -5px;
  top: -5px;
}

.question-four-icon {
  position: absolute;
  right: -5px;
  top: -5px;
}
```

```js
$(".question1").on("click", function () {
  $(".icons-plus-minus1").toggle(300);
  $(".answer1").slideToggle("slow");
  if ($(".inside-container").css("height") === "auto") {
    $(".inside-container").css({ height: "250px" });
  } else {
    $(".inside-container").css({ height: "auto" });
  }
});

$(".question2").on("click", function () {
  $(".icons-plus-minus2").toggle(300);
  $(".answer2").slideToggle("slow");
  if ($(".inside-container").css("height") === "auto") {
    $(".inside-container").css({ height: "250px" });
  } else {
    $(".inside-container").css({ height: "auto" });
  }
});

$(".question3").on("click", function () {
  $(".icons-plus-minus3").toggle(300);
  $(".answer3").slideToggle("slow");
  if ($(".inside-container").css("height") === "auto") {
    $(".inside-container").css({ height: "250px" });
  } else {
    $(".inside-container").css({ height: "auto" });
  }
});

$(".question4").on("click", function () {
  $(".icons-plus-minus4").toggle(300);
  $(".answer4").slideToggle("slow");
  if ($(".inside-container").css("height") === "auto") {
    $(".inside-container").css({ height: "250px" });
  } else {
    $(".inside-container").css({ height: "auto" });
  }
});

for (let i = 1; i <= 4; i++) {
  $(`.question${i}`).on("click", function () {
    $(`.icons-plus-minus${i}`).toggle(300);
    $(`.answer${i}`).slideToggle("slow");
    if ($(".inside-container").css("height") === "auto") {
      $(".inside-container").css({ height: "250px" });
    } else {
      $(".inside-container").css({ height: "auto" });
    }
  });
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- https://www.w3schools.com/ - This help me to get the proper coding of jquery, html, css, etc. That I needed to complete this challenge.
- https://stackoverflow.com/ - This help me also to get the advance coding of jQuery.
- https://www.udemy.com/ - This help me where to get started, from the beginning to the end.

## Author

- Website - https://github.com/JacobMayor007/faq-accordion-Jacob-Mary-Tapere
- Frontend Mentor - https://www.frontendmentor.io/profile/JacobMayor007
- Instagram - https://www.instagram.com/j_mayor_t/

## Acknowledgements

https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/ - Dr. Angela Yu have teach me more than my teachers, thanks to Dr. Angela Yu I have a little bit of knowledge about, JS, jQuery, Bootstrap, and etc.
