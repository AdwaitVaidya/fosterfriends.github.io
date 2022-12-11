import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';

export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const colour = variant === 'light' ? '#ffffff' : '#5048E5';

  return (
    
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="128.000000pt" height="80.000000pt" viewBox="0 0 128.000000 80.000000"
 preserveAspectRatio="xMidYMid meet" color="#ffffff">

<g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M493 719 c-27 -27 -14 -59 52 -129 58 -62 65 -73 65 -110 0 -32 -6
-48 -28 -70 -28 -27 -85 -50 -128 -50 -36 0 -90 28 -118 60 -32 38 -33 33 -5
-23 12 -23 49 -68 83 -99 l61 -57 -1 -85 0 -86 32 0 c32 0 32 1 39 59 8 72 30
110 87 148 29 20 42 35 40 49 -16 109 -17 105 14 102 72 -5 102 2 107 23 8 29
25 16 48 -37 18 -39 18 -46 5 -79 -8 -19 -22 -35 -31 -35 -24 0 -47 -64 -40
-113 6 -41 5 -42 -33 -58 -23 -10 -41 -25 -45 -38 -5 -20 -2 -21 98 -21 57 0
115 4 129 10 14 5 42 32 62 60 20 27 42 50 50 50 7 0 29 13 47 30 44 38 63
105 46 159 -15 47 -29 62 -29 31 0 -14 -5 -41 -10 -61 -18 -64 -80 -108 -80
-56 0 75 -161 204 -335 268 -62 23 -140 67 -132 75 2 2 19 -2 37 -10 40 -16
86 -5 95 25 9 26 -2 39 -33 39 -15 1 -45 8 -67 16 -65 25 -69 26 -82 13z"/>
<path d="M216 620 c-36 -39 -46 -56 -46 -84 0 -19 7 -42 16 -51 20 -19 64 -16
74 5 11 22 31 100 37 143 4 32 2 37 -15 37 -10 0 -40 -22 -66 -50z"/>
<path d="M456 591 c-3 -5 1 -14 8 -20 16 -13 32 2 21 19 -8 12 -22 13 -29 1z"/>
<path d="M376 563 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"/>
<path d="M472 490 c-47 -20 -35 -70 17 -70 39 0 64 21 59 51 -3 27 -36 35 -76
19z"/>
<path d="M800 390 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M730 370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M363 180 l2 -110 33 0 32 0 0 70 c0 77 -12 112 -46 135 l-24 15 3
-110z"/>
</g>
</svg>

  )


  // return (
  //   <svg
  //     width="42"
  //     height="42"
  //     viewBox="0 0 42 42"
  //     xmlns="http://www.w3.org/2000/svg"
  //     {...other}>
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z"
  //       fill={color}
  //     />
  //     <path
  //       opacity="0.7"
  //       d="M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z"
  //       fill={color}
  //     />
  //     <path
  //       opacity="0.4"
  //       d="M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z"
  //       fill={color}
  //     />
  //   </svg>
  // );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};
