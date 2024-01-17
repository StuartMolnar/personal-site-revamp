/**
 * Checks if the current device is a mobile device.
 * This function uses a combination of checking the window's orientation property
 * and the user agent string to infer if the device is mobile.
 * 
 * @returns {boolean} True if the device is a mobile device; otherwise, false.
 */
const isMobileDevice = (): boolean => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  
  export default isMobileDevice;
  