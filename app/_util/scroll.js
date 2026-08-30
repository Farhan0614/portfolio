export const handleScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate position, taking the 80px fixed navbar height into account
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
