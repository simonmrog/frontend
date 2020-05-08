renderer = {
  createElement: Element => {
    return new Element();
  },
  render: (element, domElement) => {
    domElement.innerHTML = element.template;
    element.render();
  }
};
