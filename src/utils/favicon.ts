const createFavicon = (dark: boolean): string => `<svg width="41" height="39" fill="${dark ? '#fff': '#000'}" viewBox="0 0 41 39" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.3549 1.50105C31.3549 0.671804 32.0251 0 32.8523 0H37.3411C38.1683 0 38.8385 0.671804 38.8385 1.50105V4.58922C38.8385 5.41846 38.1683 6.09027 37.3411 6.09027H32.8523C32.0251 6.09027 31.3549 5.41846 31.3549 4.58922V1.50105ZM31.3549 10.8449C31.3549 10.0157 32.0251 9.34388 32.8523 9.34388H37.3411C38.1683 9.34388 38.8385 10.0157 38.8385 10.8449V13.9331C38.8385 14.7623 38.1683 15.4341 37.3411 15.4341H32.8523C32.0251 15.4341 31.3549 14.7623 31.3549 13.9331V10.8449ZM21.2946 1.50105C21.2946 0.671804 21.9648 0 22.792 0H27.2808C28.108 0 28.7781 0.671804 28.7781 1.50105V4.58922C28.7781 5.41846 28.108 6.09027 27.2808 6.09027H22.792C21.9648 6.09027 21.2946 5.41846 21.2946 4.58922V1.50105ZM20.9033 10.8449C20.9033 10.0157 21.5735 9.34388 22.4007 9.34388H26.8894C27.7167 9.34388 28.3868 10.0157 28.3868 10.8449V13.9331C28.3868 14.7623 27.7167 15.4341 26.8894 15.4341H22.4007C21.5735 15.4341 20.9033 14.7623 20.9033 13.9331V10.8449ZM20.9033 20.1595C20.9033 19.3302 21.5735 18.6584 22.4007 18.6584H26.8894C27.7167 18.6584 28.3868 19.3302 28.3868 20.1595V23.2476C28.3868 24.0769 27.7167 24.7487 26.8894 24.7487H22.4007C21.5735 24.7487 20.9033 24.0769 20.9033 23.2476V20.1595ZM10.4516 10.8449C10.4516 10.0157 11.1218 9.34388 11.949 9.34388H16.4378C17.265 9.34388 17.9352 10.0157 17.9352 10.8449V13.9331C17.9352 14.7623 17.265 15.4341 16.4378 15.4341H11.949C11.1218 15.4341 10.4516 14.7623 10.4516 13.9331V10.8449ZM7.48352 23.247C7.48352 24.0762 6.81337 24.748 5.98615 24.748H1.49737C0.670156 24.748 0 24.0762 0 23.247V20.1588C0 19.3295 0.670156 18.6577 1.49737 18.6577H5.98615C6.81337 18.6577 7.48352 19.3295 7.48352 20.1588V23.247ZM7.48352 13.9324C7.48352 14.7617 6.81337 15.4335 5.98615 15.4335H1.49737C0.670156 15.4335 0 14.7617 0 13.9324V10.8443C0 10.015 0.670156 9.34321 1.49737 9.34321H5.98615C6.81337 9.34321 7.48352 10.015 7.48352 10.8443V13.9324ZM10.4516 23.247V20.1588C10.4516 19.3295 11.1218 18.6577 11.949 18.6577H16.4378C17.265 18.6577 17.9352 19.3295 17.9352 20.1588V23.247C17.9352 24.0762 17.265 24.748 16.4378 24.748H11.949C11.1218 24.748 10.4516 24.0762 10.4516 23.247ZM27.2049 36.7431L25.8014 38.3048C25.0267 39.1674 23.701 39.2368 22.8406 38.4596L21.2826 37.0526L16.6208 32.843C15.7603 32.0665 15.6911 30.7375 16.4664 29.8749C17.2411 29.0123 18.5667 28.9429 19.4272 29.7195L23.7589 33.6309C23.9406 33.795 24.2208 33.7777 24.3812 33.5935L37.3238 18.7178C38.0938 17.8332 39.4367 17.7518 40.3072 18.5377C41.1577 19.3055 41.2363 20.6158 40.4842 21.4804L27.2056 36.7424L27.2049 36.7431Z"/>
  </svg>
  `

const getFaviconURL = (dark: boolean): string => {
  const blob = new Blob([createFavicon(dark)], {
    type: 'image/svg+xml'
  })
  return window.URL.createObjectURL(blob)
}


export default getFaviconURL