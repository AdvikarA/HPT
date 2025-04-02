document.addEventListener("DOMContentLoaded", function () {
    const questionData = [
      {
        category: "Education",
        questions: [
          { text: "Taken Ec10?", info: "Ec10 is Harvard's introductory economics course taught by renowned professors—it's practically a rite of passage." },
          { text: "Taken CS50?", info: "CS50 is the famous introductory computer science course known for its difficulty and David Malan's theatrical lectures." },
          { text: "Procrastinated your Expos essay?", info: "Expos essays are due before you know it—join the tradition of midnight writing marathons." },
          { text: "Taken a class just because it’s a gem?", info: "Gems are the golden geese of Harvard’s Q Guide—easy As, light work, and good vibes." },
          { text: "Taken 5 classes in a semester?", info: "Taking 5 classes: a power move or a fast track to burn-out. You decide." },
          { text: "Changed your concentration?" },
          { text: "Been a Lamonster for a night?" },
          { text: "Fallen asleep in a library?" },
          { text: "Had a mental breakdown in a library?" },
          { text: "Asked for a letter of recommendation at the last minute?" },
          { text: "Slept through a 9am?" },
          { text: "Used ChatGPT on an assignment?" },
          { text: "Finished a class without completing a single reading?" },
          { text: "Procrastinated an entire class until Reading Period?" },
          { text: "Sent/had someone send you the attendance code for a class?" },
          { text: "Sent / received PSET answers?" },
          { text: "Sent to the Honor Council / ad-boarded?" },
          { text: "Taken a gap semester?" }
        ]
      },
      {
        category: "Campus Culture",
        questions: [
          "Given directions to a tourist?",
          "Ignored a tourist trying to get your attention?",
          "Intentionally walked between the camera and the JH Statue when a tourist is taking a picture?",
          "Seen a wild turkey?",
          "Picked up a wild turkey?",
          "Pet Remi?",
          "Pet Sasha?",
          "Ridden a scooter through the Yard?",
          "Been hit by a scooter?",
          "Been quoted in The Crimson?"
        ]
      },
      {
        category: "Dorm life",
        questions: [
          "Found a mouse/rat in your dorm?",
          "Pulled someone else’s laundry out of a washer/dryer?",
          "Had your laundry pulled out of a washer/dryer?",
          "Ranted on Sidechat?",
          "Hooked up through Sidechat?",
          "Spent a night in a dorm/house that wasn’t yours?",
          "Experienced blocking group drama?"
        ]
      },
      {
        category: "School spirit",
        questions: [
          "Intentionally worn Harvard merch to Logan?",
          "Attended Harvard-Yale?",
          "Tailgated Harvard-Yale?",
          "Missed Harvard-Yale after tailgating too hard?",
          "Attended a varsity sports event besides Harvard-Yale?",
          "Said 'small liberal arts school just outside of Boston'?",
          "Dropped the 'H-bomb' for clout?",
          "Been posted on the Khuranagram?",
          "Been in a housing day video?",
          "Attended Heads of the Charles?",
          "Swam in the Charles?"
        ]
      },
      {
        category: "Extracurriculars",
        questions: [
          "Comped a club just for its prestige?",
          "Comped a club just for the travel?",
          "Comped a club just for the merch?",
          "Comped a club just because it’s a final club feeder?",
          "Lied during a comp interview?",
          "Constantly shit on a club you got rejected from?",
          "Missed class for an extracurricular?",
          "Been hazed for club initiation?"
        ]
      },
      {
        category: "Cambridge / Boston",
        questions: [
          "Taken the T?",
          "Spent an entire month in the Harvard Bubble?",
          "Attended a frat party at another Boston-area school?"
        ]
      },
      {
        category: "Food",
        questions: [
          "Eaten in the square because HUDS closed too early?",
          "Befriended a HUDS worker?",
          "Complained about HUDS?",
          "Received food poisoning from HUDS?",
          "Eaten at all 16 dhalls?",
          "Stolen a utensil, dish, or salt/pepper shaker from the dhall without returning?",
          "Eaten Joe’s while inebriated?",
          "Eaten Pinocchio’s while inebriated?",
          "Eaten Jefe’s while inebriated?",
          "Eaten Felipe’s while inebriated?"
        ]
      },
      {
        category: "Activism",
        questions: [
          "Protested on campus?",
          "Camped out in the Yard?",
          "Tabled in the Science Center Plaza?",
          "Argued with someone tabling in the Science Center Plaza?"
        ]
      },
      {
        category: "Social life",
        questions: [
          "Attended Quinski?",
          "Attended Glowell?",
          "Attended Mather Lather?",
          "Attended Crimween / Crim Patty’s?",
          "Attended a final club party?",
          "Gotten punched for a final club?",
          "Been inside all 8 final clubs?"
        ]
      },
      {
        category: "Sex",
        questions: [
          "Had a section crush?",
          "Hooked up with your section crush?",
          "Crushed on your CA/TF/professor?",
          "Hooked up with your CA/TF/professor?",
          "Attended office hours just because you found your CA/TF/professor attractive?",
          "Committed an act of entryway-cest?",
          "Committed an act of dorm-cest?",
          "Committed an act of blocking group-cest?",
          "Committed an act of house-cest?",
          "Walk of shame to/from the Quad?",
          "Done/been Yardwork/ed?",
          "Engaged in sexually activity in a common room?",
          "Hooked up with student from another Boston-area school?",
          "Slept with a Yalie?"
        ]
      },
      {
        category: "Romance",
        questions: [
          "Gone on a dhall date?",
          "Dated another Harvard student?",
          "Dated a student from another Boston-area school?"
        ]
      },
      {
        category: "Ultimate",
        questions: [
          "River run?",
          "Primal scream?",
          "Partied in a 10-man suite?",
          "Snorted cocaine in a final club?",
          "Done hard drugs with the men’s rowing team?",
          "Sex in the stacks?",
          "Pissed on the John Harvard statue?"
        ]
      }
    ];
  
    const questionList = document.getElementById('question-list');
  let qCounter = 1;

  questionData.forEach(group => {
    const header = document.createElement('div');
    header.className = 'category';
    header.textContent = group.category;
    questionList.appendChild(header);

    group.questions.forEach(question => {
      const li = document.createElement('li');
      const infoIcon = question.info
        ? `<sup><span class="info-icon" data-info="${question.info}">&#9432;</span></sup>`
        : '';
      const questionText = typeof question === 'string' ? question : question.text;
      li.innerHTML = `
        <label>
          <input type="checkbox" id="q${qCounter}"> ${questionText} ${infoIcon}
        </label>
      `;
      questionList.appendChild(li);
      qCounter++;
    });
  });

  window.calculateScore = function () {
    const total = qCounter - 1;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const score = total - checked;
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.display = 'block';
    scoreDisplay.textContent = `Your Purity Score: ${score}/${total}`;
  }

  window.resetForm = function () {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('scoreDisplay').style.display = 'none';
  }

  document.addEventListener("click", function (e) {
    const icon = e.target.closest(".info-icon");
    if (!icon) return;

    e.stopPropagation();
    e.preventDefault();

    document.querySelectorAll(".popup").forEach(p => p.remove());
    document.body.classList.add("scroll-lock");

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <span class="close-popup">×</span>
      <p>${icon.dataset.info}</p>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".close-popup").addEventListener("click", () => {
      popup.remove();
      document.body.classList.remove("scroll-lock");
    });

    const outsideClick = (e) => {
      if (!popup.contains(e.target) && e.target !== icon) {
        popup.remove();
        document.body.classList.remove("scroll-lock");
        document.removeEventListener("click", outsideClick);
      }
    };
    setTimeout(() => document.addEventListener("click", outsideClick), 0);
  });
});