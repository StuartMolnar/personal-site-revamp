/**
    * Workaround to set the zoom level of the page.
 */
const resetZoom = (): void => {
    document.body.style.width = '5000px';
    setTimeout(() => {
      document.body.style.width = '';
    }, 100);
  };
  
  export default resetZoom;
  