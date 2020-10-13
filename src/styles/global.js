import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  button {
    cursor: pointer;
  }

    /* Fontes
  ========================================================================= */

  @font-face {
      font-family: 'Rubik';
      src: url('../assets/fonts/Rubik-Medium.eot');
      src: url('../assets/fonts/Rubik-Medium.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Rubik-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Chewy';
      src: url('../assets/fonts/Chewy-Regular.eot');
      src: url('../assets/fonts/Chewy-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Chewy-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gochi Hand';
      src: url('../assets/fonts/GochiHand-Regular.eot');
      src: url('../assets/fonts/GochiHand-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/GochiHand-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Alegreya';
      src: url('../assets/fonts/Alegreya-Regular.eot');
      src: url('../assets/fonts/Alegreya-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Alegreya-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Baloo';
      src: url('../assets/fonts/Baloo-Regular.eot');
      src: url('../assets/fonts/Baloo-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Baloo-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Darker Grotesque';
      src: url('../assets/fonts/DarkerGrotesque-Medium.eot');
      src: url('../assets/fonts/DarkerGrotesque-Medium.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/DarkerGrotesque-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Fredericka the Great';
      src: url('../assets/fonts/FrederickatheGreat-Regular.eot');
      src: url('../assets/fonts/FrederickatheGreat-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/FrederickatheGreat-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Boogaloo';
      src: url('../assets/fonts/Boogaloo-Regular.eot');
      src: url('../assets/fonts/Boogaloo-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Boogaloo-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Poppins';
      src: url('../assets/fonts/Poppins-SemiBoldItalic.eot');
      src: url('../assets/fonts/Poppins-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Poppins-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
  }

  @font-face {
      font-family: 'Satisfy';
      src: url('../assets/fonts/Satisfy-Regular.eot');
      src: url('../assets/fonts/Satisfy-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Satisfy-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Spinnaker';
      src: url('../assets/fonts/Spinnaker-Regular.eot');
      src: url('../assets/fonts/Spinnaker-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Spinnaker-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Marcellus';
      src: url('../assets/fonts/Marcellus-Regular.eot');
      src: url('../assets/fonts/Marcellus-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Marcellus-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Pacifico';
      src: url('../assets/fonts/Pacifico-Regular.eot');
      src: url('../assets/fonts/Pacifico-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Pacifico-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Yanone Kaffeesatz';
      src: url('../assets/fonts/YanoneKaffeesatz-Regular.eot');
      src: url('../assets/fonts/YanoneKaffeesatz-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/YanoneKaffeesatz-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Caveat';
      src: url('../assets/fonts/Caveat-Regular.eot');
      src: url('../assets/fonts/Caveat-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Caveat-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Rancho';
      src: url('../assets/fonts/Rancho-Regular.eot');
      src: url('../assets/fonts/Rancho-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Rancho-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Paytone One';
      src: url('../assets/fonts/PaytoneOne-Regular.eot');
      src: url('../assets/fonts/PaytoneOne-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/PaytoneOne-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Days One';
      src: url('../assets/fonts/DaysOne-Regular.eot');
      src: url('../assets/fonts/DaysOne-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/DaysOne-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Arbutus Slab';
      src: url('../assets/fonts/ArbutusSlab-Regular.eot');
      src: url('../assets/fonts/ArbutusSlab-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/ArbutusSlab-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Italianno';
      src: url('../assets/fonts/Italianno-Regular.eot');
      src: url('../assets/fonts/Italianno-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Italianno-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Quicksand';
      src: url('../assets/fonts/Quicksand-Medium.eot');
      src: url('../assets/fonts/Quicksand-Medium.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Quicksand-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Quicksand';
      src: url('../assets/fonts/Quicksand-Bold.eot');
      src: url('../assets/fonts/Quicksand-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Quicksand-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Quicksand';
      src: url('../assets/fonts/Quicksand-Regular.eot');
      src: url('../assets/fonts/Quicksand-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Quicksand-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Quicksand';
      src: url('../assets/fonts/Quicksand-Light.eot');
      src: url('../assets/fonts/Quicksand-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Quicksand-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url('../assets/fonts/Montserrat-Regular.eot');
      src: url('../assets/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Montserrat-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url('../assets/fonts/Montserrat-Bold.eot');
      src: url('../assets/fonts/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Montserrat-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url('../assets/fonts/Montserrat-Light.eot');
      src: url('../assets/fonts/Montserrat-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Montserrat-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Nunito';
      src: url('../assets/fonts/Nunito-Bold.eot');
      src: url('../assets/fonts/Nunito-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Nunito-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Nunito';
      src: url('../assets/fonts/Nunito-Regular.eot');
      src: url('../assets/fonts/Nunito-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Nunito-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Nunito';
      src: url('../assets/fonts/Nunito-Light.eot');
      src: url('../assets/fonts/Nunito-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Nunito-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }


  @font-face {
      font-family: 'Comfortaa';
      src: url('../assets/fonts/Comfortaa-Light.eot');
      src: url('../assets/fonts/Comfortaa-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Comfortaa-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Comfortaa';
      src: url('../assets/fonts/Comfortaa-Bold.eot');
      src: url('../assets/fonts/Comfortaa-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Comfortaa-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Comfortaa';
      src: url('../assets/fonts/Comfortaa-Regular.eot');
      src: url('../assets/fonts/Comfortaa-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Comfortaa-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Open Sans';
      src: url('../assets/fonts/open-sans/OpenSans-Bold.eot');
      src: url('../assets/fonts/open-sans/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/open-sans/OpenSans-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Open Sans';
      src: url('../assets/fonts/open-sans/OpenSans-Light.eot');
      src: url('../assets/fonts/open-sans/OpenSans-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/open-sans/OpenSans-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Open Sans';
      src: url('../assets/fonts/open-sans/OpenSans.eot');
      src: url('../assets/fonts/open-sans/OpenSans.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/open-sans/OpenSans.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }


  @font-face {
      font-family: "open-sans";
      src: url('../assets/fonts/open-sans/OpenSans.eot');
      src: url('../assets/fonts/open-sans/OpenSans.eot?#iefix') format('embedded-opentype'),
          url("../assets/fonts/open-sans/OpenSans.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
  }




  @font-face {
      font-family: "letter-spacing: 0.3em;";
      src: url("../assets/fonts/open-sans/OpenSans-Bold.ttf") format("truetype");
      /* IE9 Compat Modes */
  }

  @font-face {
      font-family: 'Playfair Display';
      src: url('../assets/fonts/PlayfairDisplay-Bold.eot');
      src: url('../assets/fonts/PlayfairDisplay-Bold.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/PlayfairDisplay-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Playfair Display';
      src: url('../assets/fonts/PlayfairDisplay-Regular.eot');
      src: url('../assets/fonts/PlayfairDisplay-Regular.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Lato';
      src: url('../assets/fonts/Lato-Light.eot');
      src: url('../assets/fonts/Lato-Light.eot?#iefix') format('embedded-opentype'),
          url('../assets/fonts/Lato-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }
`;