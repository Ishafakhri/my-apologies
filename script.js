const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YEAYY THANK YOUUU SO MUCHH 😘";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajY0bnl2eXU2cDg3ZmhiMzR3dGZmZHV6eWs5MjFlcGUweXlyNWJ5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lck9f0L8jPjRtkigYy/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
  question.style.display = "none"; // Hide the question text
});