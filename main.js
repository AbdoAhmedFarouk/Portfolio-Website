let liLinks = document.querySelectorAll(".nav li a");
liLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    liLinks.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let servicesBtn = document.querySelectorAll(".services .more");
servicesBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parentDiv = btn.parentElement;
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
    <div class="pop-txt">
    <i class="fa-solid fa-xmark"></i>
    <div class="info-txt">
      <h2>${parentDiv.children[1].textContent}</h2>
      <p>
        Services with more than 1 year of experience. Providing
        quality work to clients and companies.
      </p>
    </div>
    <div class="more-info">
      <p>
        <i class="fa-regular fa-circle-check"></i> I develope the user
        interface
      </p>
      <p>
        <i class="fa-regular fa-circle-check"></i> Web page
        development
      </p>
      <p>
        <i class="fa-regular fa-circle-check"></i> I create ux element
        interactions
      </p>
      <p>
        <i class="fa-regular fa-circle-check"></i> I position your
        company brand
      </p>
      <p>
        <i class="fa-regular fa-circle-check"></i> Design and mockups
        of products for companies
      </p>
    </div>
  </div>
    `;
    document.querySelector(".services").append(overlay);
  });
});

let workSpans = document.querySelectorAll(".sec-names span"),
  imgsBoxes = document.querySelectorAll(".imgs-container .img-box");
workSpans.forEach((span) => {
  span.addEventListener("click", () => {
    workSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    imgsBoxes.forEach((box) => {
      box.classList.add("none");
      if (span.dataset.target === box.dataset.target) {
        setTimeout(() => {
          box.classList.remove("none");
        }, 50);
      } else if (span.dataset.target === "all") {
        box.classList.remove("none");
      }
    });
  });
});

let imgSpan = document.querySelectorAll(".img-box span"),
  imgs = document.querySelectorAll(".img-box img");
imgSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    let parentDiv = e.target.parentElement;
    let imgSrc = parentDiv.children[0].src;
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
    <div class="pop-up">
      <i class="fa-solid fa-xmark"></i>
      <img src="${imgSrc}" alt="" />
      <div class="txt">
        <p>Featured-Brand Design</p>
        <h2>Design for technology & services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere rem minima odit aperiam earum numquam impedit.
        </p>
        <p>Created - 4 Dec 2020</p>
        <p>Technologies - Html Css</p>
        <p>Role - Frontend</p>
        <p>View - <span>www.domain.com</span></p>
      </div>
    </div>
    `;
    document.querySelector(".work").append(overlay);
  });
});
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".fa-xmark")) {
    document.querySelector(".overlay").remove();
  }
});

let skillRow = document.querySelectorAll(".skills-row"),
  arrow = document.querySelector(".fa-chevron-down"),
  prog = document.querySelectorAll(".skills-prog .prog");
skillRow.forEach((row) => {
  row.addEventListener("click", () => {
    skillRow.forEach((row) => {
      row.children[1].classList.remove("active");
    });
    row.children[1].classList.add("active");
    prog.forEach((prog) => {
      prog.classList.add("none");
      if (row.children[1].dataset.target === prog.dataset.target) {
        prog.classList.remove("none");
      }
    });
  });
});

let inputs = document.querySelectorAll(".input");
inputs.forEach((inp) => {
  inp.addEventListener("focus", (e) => {
    let parent = e.target.parentNode;
    parent.classList.add("focus");
  });
  inp.addEventListener("blur", (e) => {
    let parent = e.target.parentNode;
    if (e.target.value == "") {
      parent.classList.remove("focus");
    }
  });
});

let goupBtn = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 200
    ? goupBtn.classList.add("active")
    : goupBtn.classList.remove("active");
};
goupBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let theBtn = document.querySelector(
      "." + e.target.getAttribute("href").slice(1)
    );
    theBtn.scrollIntoView({
      behavior: "smooth",
    });
  });
});
