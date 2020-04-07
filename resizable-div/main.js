window.addEventListener("DOMContentLoaded", () => {
  let dragbar = document.querySelector("#dragbar");
  let sticky = document.querySelector("#sticky");

  sticky.addEventListener("scroll", event => {
    let currentHeight = event.target.scrollTop + sticky.offsetHeight;
    dragbar.style.height = currentHeight + "px";
  });

  dragbar.addEventListener("mousedown", event => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
  });

  document.addEventListener("mouseup", event => {
    document.removeEventListener('mousemove', handleMouseMove);
  });

  const handleMouseMove = event => {
    let contentWidth = `${event.pageX}px`;
    let stickyWidth = `calc(100% - ${contentWidth})`;
    document.querySelector('#sticky').style.width = stickyWidth;
    document.querySelector('.content').style.width = contentWidth;
  };
});