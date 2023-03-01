const richtexts = document.querySelectorAll(".w-richtext");

richtexts.forEach((richtext) => {
  const elements = richtext.querySelectorAll("p");
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const startTimeRegex = /(t=|start=)(?:\d+)/g;

  elements.forEach(element => {
    const text = element.innerText;
    if (text) {
      const match = text.match(regex);
      const timeMatch = text.match(startTimeRegex);
      if (match && match[1].length == 11) {
        let url = "";
        if (timeMatch) {
          url = `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=1&start=${timeMatch[0].replace("t=", "")}`;
        } else {
          url = `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=1"`;
        }
        element.innerHTML = `<iframe width="100%" height="500px" src="${url}"></iframe>`
      }
    }
  })
})