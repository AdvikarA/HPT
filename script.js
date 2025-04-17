// Move shareScore to global scope, before the DOMContentLoaded event listener
window.shareScore = function() {
    const scoreText = document.getElementById('scoreDisplay').textContent;
    const score = scoreText.match(/\d+/)[0];
    const shareText = `My Harvard Purity score was: ${score}. Take the test:\nharvardpuritytest.com`;
    
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
      category: "Education",
      questions: [
        { text: "1. Taken Ec10?", info: "Harvard's introductory economics series. ~700 students enroll each year." },
        { text: "2. Taken CS50?", info: "Harvard's world famous introductory computer science course and its largest undergraduate class (~800 students per yr)." },
        { text: "3. Procrastinated your Expos essay?", info: "Expos: First-year writing course. Required for all, dreaded by many." },
        { text: "4. Taken a class just because it's a gem?", info: "Gem: Harvard's version of a 'blow-off class.' Athletes disproportionately enroll. Notable courses include 'Sleep' and 'Happiness.'" },
        { text: "5. Taken 5 classes in a semester?", info: "Every Harvard class is 4 credit hours, so most students take 4 classes a semester. The brave few enroll in 5." },
        { text: "6. Changed your concentration?", info: "Concentration: Harvard's preppy word for 'major.'" },
        { text: "7. Been a Lamonster for a night?", info: "Lamont Library: Harvard's 24-hour library. Spend too many hours inside and become a 'Lamonster.'" },
        { text: "8. Cried in a library?", info: "Common occurrence during midterm season and finals week." },
        { text: "9. Slept through a 9am?", info: "9ams: Harvard's earliest and most missed classes." },
        { text: "10. Used ChatGPT on an assignment?", info: "Even Harvard students are guilty of it…" },
        { text: "11. Passed a class without doing a single reading?" },
        { text: "12. Procrastinated an entire class until reading period?", info: "Reading period: the week between the end of classes and the start of finals. Time to review material, or in Bill Gates case, first open the textbook." },
        { text: "13. Sent / had some send you the attendance code for a class?" },
        { text: "14. Sent / received PSET answers?", info: "(We won't tell the Honor Council, promise)" },
        { text: "15. Sent to the Honor Council?", info: "The Honor Council manages cheating and plagiarism allegations." },
        { text: "16. Been ad-boarded?", info: "The Ad Board reviews severe academic and behavioral infractions. Once 'ad-boarded,' many students never return to campus." },
        { text: "17. Taken a gap semester?", info: "'Figuring out your career,' or something like that" }
      ]
    },
    {
      category: "Campus Culture",
      questions: [
        { text: "18. Given directions to a tourist?", info: "Millions visit campus each year" },
        { text: "19. Ignored a tourist trying to get your attention?", info: "They all want to see 'the Hogwarts dining hall'…" },
        { text: "20. Intentionally walked between the camera and the John Harvard Statue when a tourist is taking a picture?", info: "Harvard's most popular tourist trap sits in the middle of a campus walkway…" },
        { text: "21. Seen a wild turkey?", info: "Frequently spotted wandering campus" },
        { text: "22. Picked up a wild turkey?", info: "Bonus points if you still have 10 fingers" },
        { text: "23. Pet Remy?", info: "Remy the Campus Cat: one of Harvard's biggest purr-sonalities" },
        { text: "24. Pet Sasha?", info: "A black labrador retriever and everyone's favorite police dog" },
        { text: "25. Ridden a scooter through the Yard?", info: "Like every college campus, scooters everywhere. The Yard: the heart of Harvard's campus." },
        { text: "26. Been hit by a scooter?" },
        { text: "27. Talked to a homeless person in Harvard Square?" },
        { text: "28. Taken the T?", info: "Boston's subway system. Prone to loud screeching, delays, and unruly passengers." },
        { text: "29. Gone a month without leaving the Harvard Bubble?", info: "The Harvard Bubble: the imaginary boundary that traps Harvard students on campus" },
        { text: "30. Met a student whose last name is on a building?", info: "I wonder how they got in…" }
      ]
    },
    {
      category: "Dorm Life",
      questions: [
        { text: "31. Found a mouse/rat in your dorm?", info: "Certain dorms are notorious for rodents (Canday Hall, *cough cough*)" },
        { text: "32. Pulled someone else's laundry out of a washer/dryer?" },
        { text: "33. Had your laundry pulled out of a washer/dryer?" },
        { text: "34. Ranted on Sidechat?", info: "Anonymous, college version of Reddit. Same as YikYak." },
        { text: "35. Hooked up through Sidechat?", info: "Shooters shoot" },
        { text: "36. Spent a night in a dorm / house that wasn't yours?" },
        { text: "37. Experienced blocking group drama?", info: "Blocking group: the (up to) 7 other people that freshmen choose to live with for their sophomore year" }
      ]
    },
    {
      category: "School Spirit",
      questions: [
        { text: "38. Intentionally worn Harvard merch to Logan?", info: "Boston Logan International Airport — an impromptu networking hub" },
        { text: "39. Attended Harvard-Yale?", info: "Harvard-Yale: the one football game a year Harvard students actually attend" },
        { text: "40. Tailgated Harvard-Yale?", info: "The Most fun Harvard students have all year" },
        { text: "41. Missed Harvard-Yale after tailgating too hard?", info: "Students go all out for a once-a-year tradition" },
        { text: "42. Attended a varsity sports event besides Harvard-Yale?", info: "Low school spirit is an understatement" },
        { text: "43. Said 'small liberal arts school just outside of Boston'?", info: "Sometimes, actually saying 'Harvard' feels a little too cringe" },
        { text: "44. Dropped the 'H-bomb' for clout?", info: "Everyone has the same reaction, every time." },
        { text: "45. Been posted on the Khuranagram?", info: "Students' favorite dean, Rakesh Khurana, may spend more time posting than administrating." },
        { text: "46. Been in a housing day video?", info: "Housing day: when freshmen learn their housing fate for the next three years. Housing day videos: hype music videos published by all 12 houses the week leading up to the special day" },
        { text: "47. Attended Head of the Charles?", info: "400,000 spectators visit campus every year to watch rowing — the one sport Harvard's good at" },
        { text: "48. Swam in the Charles?", info: "The Charles River: full of rowers in the summer and ice in the winter" }
      ]
    },
    {
      category: "Extracurriculars",
      questions: [
        { text: "49. Comped a club just for its prestige?", info: "Comp: the tryout process for most clubs on campus. Takes anywhere from a few weeks to a full semester" },
        { text: "50. Comped a club just for the travel?", info: "Tokyo, Paris, Dubai… sound nice, anyone?" },
        { text: "51. Comped a club just for the merch?" },
        { text: "52. Comped a club just because it's a final club feeder?", info: "Final clubs: 'secret society' social clubs. Daddy's money required and invite-only." },
        { text: "53. Constantly shit on a club you got rejected from?", info: "The most selective clubs boast acceptances rates of 5%, leaving their failed 'campers' quite unhappy." }
      ]
    },
    {
      category: "Social Life",
      questions: [
        { text: "54. Attended Quinski?", info: "Ski-themed party hosted by Quinski House, an upperclassman residence" },
        { text: "55. Attended Glowell?", info: "Glow-stick-themed party hosted by Lowell House, an upperclassman residence" },
        { text: "56. Attended Mather Lather?", info: "Bubble-themed party hosted by Mather House, an upperclassman residence" },
        { text: "57. Attended Crimween or Crim Patty's?", info: "Two holiday parties hosted by The Harvard Crimson, the school newspaper" },
        { text: "58. Attended Crimson Jam or Yardfest?", info: "Blacking out's the only way to survive the headliner…" },
        { text: "59. Attended a frat party at another Boston-area school?", info: "MIT and BU are Harvard-student favorites" },
        { text: "60. Attended a final club party?", info: "Better be on the list…" },
        { text: "61. Gotten punched for a final club?", info: "Punching: the secretive, invite-only, four-round process that final clubs use to invite sophomores to their join their ranks" },
        { text: "62. Been inside all 8 final clubs?", info: "Porcellian, A.D., Delphic, Fly, Phoenix S.K., Owl, Fox, Spee" }
      ]
    },
    {
      category: "Food",
      questions: [
        { text: "63. Eaten at all 16 dhalls?", info: "All 12 upperclassmen houses + Annenberg, The Inn, Cronkite, and Hillel." },
        { text: "64. Complained about HUDS?", info: "Harvard University Dining Services is known for its dry grilled chicken — students' #1 campus complaint." },
        { text: "65. Befriended a HUDS worker?", info: "Despite the food, the workers are some of the nicest people on the planet." },
        { text: "66. Eaten in the Square because HUDS closed too early?", info: "HUDS hours — Breakfast: 7:30am to 10:30am. Lunch: 11:30am to 2:00pm. Dinner: 4:30pm to 7:30pm. Skip a meal and accidentally fast for 12 hours." },
        { text: "67. Received food poisoning from HUDS?", info: "Despite the dry chicken, students still manage to get sick" },
        { text: "68. Stolen a utensil, dish, or salt/pepper shaker from the dhall without return?" },
        { text: "69. Eaten Joe's while drunk?", info: "Joe's Pizza: a student-favorite spot in Harvard Square. Endlessly debated with Pinocchio's as the 'best.'" },
        { text: "70. Eaten Pinocchio's while drunk?", info: "The other half of the Joe's debate. Mark Zuckerberg's and Bill Gate's favorite pizza on campus." },
        { text: "71. Eaten Jefe's while drunk?", info: "El Jefe's: Boston's take on Chipotle. Endlessly debated with Felipe's as Harvard Square's best Mexican food." },
        { text: "72. Eaten Felipe's while drunk?", info: "Felipe's Taqueria: a standalone Harvard Square institution. Fierce rivals with El Jefe's." }
      ]
    },
    {
      category: "Activism",
      questions: [
        { text: "73. Protested on campus?", info: "National TV for a reason…" },
        { text: "74. Camped out in the Yard?", info: "Harvard loves to admit students for activism, then punish them for advocating at Harvard." },
        { text: "75. Tabled in the Science Center Plaza?", info: "From chill club events to political standoffs, the Science Center Plaza has it all. Science Center Plaza: a centrally-located outdoor space on campus" },
        { text: "76. Argued with someone tabling in the Science Center Plaza?" }
      ]
    },
    {
      category: "Intimacy",
      questions: [
        { text: "77. Dated another Harvard student?" },
        { text: "78. Hooked up with another Harvard student?" },
        { text: "79. Had a section crush?", info: "Sections: small breakout sessions that accompany large lecture class" },
        { text: "80. Hooked up with your section crush?" },
        { text: "81. Crushed on your CA/TF/professor?", info: "CA: course assistant (undergraduate) TF: teaching fellow (graduate)" },
        { text: "82. Attended office hours just because you found your CA/TF/professor attractive?" },
        { text: "83. Hooked up with your CA/TF/professor?" },
        { text: "84. Committed an act of entryway-cest?", info: "Entryways: the vertical pieces of a dorm that group students" },
        { text: "85. Committed an act of dorm-cest?", info: "Dorms: freshman residence halls" },
        { text: "86. Committed an act of blocking group-cest?", info: "Blocking group: the (up to) 7 other people that freshmen choose to live with for their sophomore year" },
        { text: "87. Committed an act of house-cest?", info: "Houses: the 12 upperclassmen residence halls" },
        { text: "88. Walk of shame to/from the Quad?" },
        { text: "89. Done Yardwork / been Yardworked?", info: "Yardwork: when an upperclassmen makes the rounds through the Yard. The Yard: home to freshman residence halls" },
        { text: "90. Engaged in sexually activity in a common room?" },
        { text: "91. Dated a student from another Boston-area school?" },
        { text: "92. Hooked up with student from another Boston-area school?", info: "MIT/Tufts/BU/BC/Wellesley/Northeastern/Wellesley/Berklee/UMass Boston/etc." },
        { text: "93. Slept with a Yalie?", info: "The ultimate sin." }
      ]
    },
    {
      category: "Crimson Cult",
      questions: [
        { text: "94. River run?", info: "The night before housing day, freshmen take a shot in each of the 9 river houses to appease the river gods' decision..." },
        { text: "95. Primal scream?", info: "The night before final exams, students strip naked and run a lap around Harvard Yard." },
        { text: "96. Partied in The Currier Ten Man?", info: "A ten-man suite in Currier House, equipped with an elevator and an in-suite bar." },
        { text: "97. Snorted cocaine in a final club?", info: "Final clubs connect their members with both white collar jobs and white powder parties." },
        { text: "98. Done hard drugs with the men's rowing team?", info: "Rumor has it…" },
        { text: "99. Sex in the stacks?", info: "With 57 miles of shelves and three underground floors, Widener Library is the Harvard's ultimate hookup spot." },
        { text: "100. Pissed on the John Harvard statue?", info: "Hey tourists, ever wonder why the foot's gold?" }
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
      const questionText = question.text;
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
