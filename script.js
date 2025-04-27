// Move shareScore to global scope, before the DOMContentLoaded event listener
window.shareScore = function() {
  const scoreText = document.getElementById('scoreDisplay').textContent;
  const score = scoreText.match(/\d+/)[0];
  const shareText = `I got a ${score} on HPT. Take the test:\nharvardpuritytest.com`;
  
  // Copy to clipboard
  navigator.clipboard.writeText(shareText).then(() => {
      // Show popup
      const popup = document.createElement('div');
      popup.className = 'copy-popup';
      popup.textContent = 'Copied to clipboard!';
      document.body.appendChild(popup);
      
      // Show the popup
      setTimeout(() => popup.classList.add('show'), 10);
      
      // Remove the popup after 2 seconds
      setTimeout(() => {
          popup.classList.remove('show');
          setTimeout(() => popup.remove(), 300);
      }, 2000);
  }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy to clipboard');
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const questionData = [
    {
      category: "EDUCATION",
      questions: [
        { text: "1. Taken Ec10?", info: "Harvard’s introductory economics series. ~700 students enroll each year." },
        { text: "2. Taken CS50?", info: "Harvard’s world famous introductory computer science course (~800 students per yr)." },
        { text: "3. Procrastinated your Expos essay?", info: "Expos: First-year writing course. Required for all, dreaded by many." },
        { text: "4. Taken a class just because it’s a gem?", info: "Gem: Harvard’s version of a ‘blow-off class.’ Athletes disproportionately enroll. Notable courses include 'Sleep' and 'Happiness.'" },
        { text: "5. Taken 5 classes in a semester?", info: "Every Harvard class is 4 credit hours. Most take 4 a semester. The brave few enroll in 5." },
        { text: "6. Changed your concentration?", info: "Concentration: Harvard’s preppy word for 'major.'" },
        { text: "7. Been a Lamonster for a night?", info: "Lamont Library: Harvard’s 24-hour library. Spend too many hours inside and become a 'Lamonster.'" },
        { text: "8. Cried in a library?", info: "Common occurrence during midterm season and finals week." },
        { text: "9. Slept through a 9am?", info: "9ams: Harvard’s earliest and most missed classes." },
        { text: "10. Used ChatGPT on an assignment?", info: "Every Harvard student’s best friend" },
        { text: "11. Passed a class without doing a single reading?" },
        { text: "12. Procrastinated an entire class until reading period?", info: "Reading period: the week between the end of classes and the start of finals" },
        { text: "13. Sent / had some send you the attendance code for a class?" },
        { text: "14. Sent / received PSET answers?", info: "(We won’t tell the Honor Council, promise)" },
        { text: "15. Sent to the Honor Council?", info: "The Honor Council manages cheating and plagiarism allegations." },
        { text: "16. Been ad-boarded?", info: "The Ad Board reviews severe academic and behavioral infractions." },
        { text: "17. Taken a gap semester?", info: "Just 'finding your real passion'" }
      ]
    },
    {
      category: "LIVING & DINING",
      questions: [
        { text: "18. Found a mouse/rat in your dorm?", info: "(Canday Hall, *cough cough*)" },
        { text: "19. Pulled someone else’s laundry out / had your laundry pulled out of a washer / dryer?" },
        { text: "20. Experienced blocking group drama?", info: "Blocking group: the (up to) 7 other people that freshmen choose to live with for their sophomore year" },
        { text: "21. Spent a night in a dorm / house that wasn’t yours?", info: "Dorm: freshmen residence halls · House: upperclassmen residence halls" },
        { text: "22. Eaten at all 16 dhalls?", info: "All 12 upperclassmen houses + Annenberg, The Inn, Cronkite, and Hillel." },
        { text: "23. Complained about HUDS?", info: "Harvard University Dining Services is infamous for its dry grilled chicken." },
        { text: "24. Befriended a HUDS worker?", info: "Some of the nicest people on the planet." },
        { text: "25. Eaten in the Square because HUDS closed too early?", info: "Breakfast: 7:30am to 10:30am. Lunch: 11:30am to 2:00pm. Dinner: 4:30pm to 7:30pm. Skip a meal and accidentally fast for 16 hours." },
        { text: "26. Received food poisoning from HUDS?", info: "Despite the overcooked chicken, students still get sick" },
        { text: "27. Stolen a utensil, dish, or salt/pepper shaker from the dhall without return?" },
        { text: "28. Eaten Joe’s while drunk?", info: "Joe’s Pizza: a student-favorite spot in Harvard Square. Endlessly debated with Pinocchio’s as the best." },
        { text: "29. Eaten Pinocchio’s while drunk?", info: "Mark Zuckerberg’s and Bill Gate’s favorite pizza on campus." },
        { text: "30. Eaten Jefe’s while drunk?", info: "El Jefe’s: Boston’s take on Chipotle. Endlessly debated with Felipe’s as Harvard Square’s best Mexican." },
        { text: "31. Eaten Felipe’s while drunk?", info: "Felipe’s Taqueria: a standalone Harvard Square institution. Fierce rivals with El Jefe’s." }
      ]
    },
    {
      category: "EXTRACURRICULARS",
      questions: [
        { text: "32. Comped a club just for its prestige?", info: "Comp: the tryout process for most clubs on campus" },
        { text: "33. Comped a club just for the travel?", info: "Tokyo, Paris, Dubai… sound nice, anyone?" },
        { text: "34. Comped a club just for the merch?" },
        { text: "35. Comped a club just because it’s a final club feeder?", info: "Final clubs: 'secret society' social clubs. Daddy’s money required and invite-only." },
        { text: "36. Constantly shit on a club you got rejected from?", info: "Harvard’s most selective clubs boast acceptance rates of >5%" }
      ]
    },
    {
      category: "CAMPUS CULTURE",
      questions: [
        { text: "37. Given directions to a tourist?", info: "Millions visit each year" },
        { text: "38. Ignored a tourist trying to get your attention?", info: "Everyone wants to see 'the Hogwarts dining hall'..." },
        { text: "39. Intentionally walked between the camera and the John Harvard Statue while a tourist is taking a picture?", info: "John Harvard Statue: Harvard’s most popular tourist trap" },
        { text: "40. Seen a wild turkey?", info: "Harvard’s unofficial mascot" },
        { text: "41. Picked up a wild turkey?", info: "Bonus points if you still have 10 fingers" },
        { text: "42. Pet Remy?", info: "Remy the campus cat: one of Harvard’s biggest purr-sonalities" },
        { text: "43. Pet Sasha?", info: "A black labrador retriever police dog" },
        { text: "44. Ridden a scooter through the Yard?", info: "The Yard: the heart of Harvard’s campus." },
        { text: "45. Been hit by a scooter?" },
        { text: "46. Taken the T?", info: "Boston’s subway system. Famous for its loud screeches, delays, and unruly passengers." },
        { text: "47. Talked to a homeless person in Harvard Square?" },
        { text: "48. Met a student whose last name is on a building?", info: "I wonder how they got in..." },
        { text: "49. Gone a month without leaving the Harvard Bubble?", info: "The Harvard Bubble: the imaginary boundary that traps Harvard students on campus" },
        { text: "50. Protested on campus?", info: "All over national TV" },
        { text: "51. Camped out in the Yard?", info: "Harvard admits students for activism, then punishes advocacy at Harvard." },
        { text: "52. Tabled in the Science Center Plaza?", info: "Science Center Plaza: a centrally-located outdoor space on campus" },
        { text: "53. Argued with someone tabling in the Science Center Plaza?" },
        { text: "54. Ranted on Sidechat?", info: "Anonymous, college version of Reddit. Same as YikYak." },
        { text: "55. Hooked up through Sidechat?", info: "Shooters shoot" }
      ]
    },
    {
      category: "SCHOOL SPIRIT",
      questions: [
        { text: "56. Intentionally worn Harvard merch to Logan?", info: "Boston Logan International Airport — an impromptu networking hub" },
        { text: "57. Attended Harvard-Yale?", info: "Harvard-Yale: the only football game a year most students attend" },
        { text: "58. Tailgated Harvard-Yale?", info: "The most fun Harvard students have all year" },
        { text: "59. Missed Harvard-Yale after tailgating too hard?", info: "Students go all out for a once-a-year tradition" },
        { text: "60. Attended a varsity sports game besides Harvard-Yale?", info: "Low school spirit is an understatement" },
        { text: "61. Said 'small liberal arts school just outside of Boston'?", info: "Actually saying ‘Harvard’ feels a little too cringe" },
        { text: "62. Dropped the 'H-bomb' for clout?", info: "Instant aura." },
        { text: "63. Been posted on the Khuranagram?", info: "Students’ favorite dean, Rakesh Khurana, may spend more time posting than administrating." },
        { text: "64. Been in a housing day video?", info: "Hype music videos published by all 12 upperclassmen houses the week leading up to housing day" },
        { text: "65. Attended Head of the Charles?", info: "400,000 spectators visit campus every year to watch rowing — the one sport Harvard’s good at" },
        { text: "66. Swam in the Charles?", info: "The Charles River: full of rowers in the summer and ice in the winter" }
      ]
    },
    {
      category: "SOCIAL LIFE",
      questions: [
        { text: "67. Attended Quinski?", info: "Ski-themed party hosted by Quinski House, an upperclassman residence" },
        { text: "68. Attended Glowell?", info: "Glow-stick-themed party hosted by Lowell House, an upperclassman residence" },
        { text: "69. Attended Mather Lather?", info: "Foam-themed party hosted by Mather House, an upperclassman residence" },
        { text: "70. Attended Crimween or Crim Patty’s?", info: "Two holiday parties hosted by The Harvard Crimson" },
        { text: "71. Attended Crimson Jam or Yardfest?", info: "Blacking out’s the only way to enjoy the show" },
        { text: "72. Attended a frat party at another Boston-area school?", info: "MIT and BU are Harvard-student favorites" },
        { text: "73. Attended a final club party?", info: "Better be on the list…" },
        { text: "74. Gotten punched for a final club?", info: "Punching: the secretive, invite-only, four-round process that final clubs use to select sophomores" },
        { text: "75. Been inside all 8 final clubs?", info: "Porcellian, A.D., Delphic, Fly, Phoenix S.K., Owl, Fox, Spee" }
      ]
    },
    {
      category: "INTIMACY",
      questions: [
        { text: "76. Gone on a dhall date?" },
        { text: "77. Hooked up with another Harvard student?" },
        { text: "78. Been in a relationship with another Harvard student?" },
        { text: "79. Had a section crush?", info: "Sections: small breakout sessions that accompany large lecture class" },
        { text: "80. Hooked up with your section crush?" },
        { text: "81. Crushed on your CA/TF/professor?", info: "CA: course assistant (undergraduate) · TF: teaching fellow (graduate)" },
        { text: "82. Attended office hours just because you found your CA/TF/professor attractive?" },
        { text: "83. Hooked up with your CA/TF/professor?" },
        { text: "84. Committed an act of dorm-cest?", info: "Dorms: freshman residence halls" },
        { text: "85. Committed an act of entryway-cest?", info: "Entryways: the vertical pieces of a dorm that group students" },
        { text: "86. Committed an act of blocking group-cest?", info: "Blocking group: the (up to) 7 other people that freshmen choose to live with for their sophomore year" },
        { text: "87. Committed an act of house-cest?", info: "Houses: the 12 upperclassmen residence halls" },
        { text: "88. Engaged in sexual activity in a common room?" },
        { text: "89. Walk of shame to / from the Quad?" },
        { text: "90. Done Yardwork / been Yardworked?", info: "Yardwork: when an upperclassman makes the rounds through the Yard" },
        { text: "91. Hooked up with student from another Boston-area school?", info: "MIT/Tufts/BU/BC/Wellesley/Northeastern/Berklee/UMass Boston/etc." },
        { text: "92. Dated a student from another Boston-area school?" },
        { text: "93. Slept with a Yalie?", info: "The ultimate sin." }
      ]
    },
    {
      category: "Crimson Cult",
      questions: [
        { text: "94. River run?", info: "The night before housing day, freshmen take a shot in each of the 9 river houses to appease the river gods’ decision. For extra luck, students take additional shots in desired houses." },
        { text: "95. Primal scream?", info: "The night before final exams, students strip naked and run a lap around Harvard Yard." },
        { text: "96. Partied in the Currier Ten Man?", info: "A ten-man suite in Currier House, equipped with an elevator and an in-suite bar." },
        { text: "97. Snorted cocaine in a final club?", info: "Final clubs connect their members with both white collar jobs and white powder parties." },
        { text: "98. Done hard drugs with the men’s rowing team?", info: "Rumor has it…" },
        { text: "99. Sex in the stacks?", info: "With 57 miles of shelves and three underground floors, Widener Library is Harvard’s ultimate hookup spot." },
        { text: "100. Pissed on the John Harvard statue?", info: "Hey tourists, ever wonder why the foot’s gold?" }
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
      li.innerHTML = `
        <label>
          <input type="checkbox" id="q${qCounter}"> ${question.text} ${infoIcon}
        </label>
      `;
      questionList.appendChild(li);
      qCounter++;
    });
  });

  window.calculateScore = function () {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const score = 100 - checked;
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.display = 'block';
    scoreDisplay.textContent = `Your Purity Score: ${score}`;

    // After setting the score, show the share button
    document.getElementById('shareButton').style.display = 'inline-block';
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

    // remove old popups
    document.querySelectorAll(".popup").forEach(p => p.remove());

    // build new popup
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <span class="close-popup">×</span>
      <p>${icon.dataset.info}</p>
    `;

    // attach into the li
    const li = icon.closest("li");
    li.appendChild(popup);

    // **position** it next to the icon
    const iconLeft = icon.offsetLeft;
    const iconTop  = icon.offsetTop;
    const gap       = 6;
    popup.style.left = (iconLeft + icon.offsetWidth + gap) + "px";
    const offsetY = -40;              // tweak this value to taste
    popup.style.top = (iconTop + offsetY) + "px";
    
    // close handlers...
    popup.querySelector(".close-popup").addEventListener("click", () => popup.remove());
    setTimeout(() => {
      document.addEventListener("click", function outside(ev) {
        if (!popup.contains(ev.target) && ev.target !== icon) {
          popup.remove();
          document.removeEventListener("click", outside);
        }
      });
    }, 0);
  });
});
