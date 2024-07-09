function postHeight(height = false) {
  if (window != void 0) {
    if (height) {
      window.parent.postMessage(
        {
          type: "height",
          message: parseInt(height) + 7,
          element_slug: window.location.href
        },
        "*"
      );
    } else {
      window.parent.postMessage(
        {
          type: "height",
          message: window.innerHeight + 7,
          element_slug: window.location.href
        },
        "*"
      );
    }
  }
}
export {
  postHeight as p
};
