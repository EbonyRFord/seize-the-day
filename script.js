
$(function () {

  const currentDate = dayjs().format('MMMM DD, YYYY');
  document.getElementById('current-date').textContent = currentDate;


  const saveButtons = document.querySelectorAll(".saveBtn");

  saveButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      const textInput = button.parentElement.querySelector(".description").value;
      const timeBlockId = button.parentElement.id;


      localStorage.setItem(timeBlockId, textInput);
    });
  });


  const currentTime = dayjs();

  const timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach((timeBlock) => {
    const hour = parseInt(timeBlock.id.split("-")[1]);

    if (hour < currentTime.hour()) {
      timeBlock.classList.add("past");
    } else if (hour === currentTime.hour()) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });

});

