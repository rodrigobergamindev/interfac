import {createGlobalStyle} from 'styled-components';



export const GlobalStyle = createGlobalStyle `

@keyframes scaleZ {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  
  80% {
    transform: scale(1.07);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}


@keyframes translateX {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  
  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}


@-webkit-keyframes bounceInDown {
            0% {
               opacity: 0;
               -webkit-transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               -webkit-transform: translateY(30px);
            }
            80% {
               -webkit-transform: translateY(-10px);
            }
            100% { 
               -webkit-transform: translateY(0);
            }
         }
         
         @keyframes bounceInDown {
            0% {
               opacity: 0;
               transform: translateY(-2000px);
            }
            60% {
               opacity: 1;
               transform: translateY(30px);
            }
            80% {
               transform: translateY(-10px);
            }
            100% {
               transform: translateY(0);
            }
         }

         @keyframes bounceInRight {
            0% {
               opacity: 0;
               transform: translateX(-2000px);
            }
            60% {
               opacity: 1;
               transform: translateX(30px);
            }
            80% {
               transform: translateX(-10px);
            }
            100% {
               transform: translateX(0);
            }
         }

    :root {
        --primary: #130f40;
        --secondary: #FFFFFF;
        --sub:#333;
        --grey-100: #a3a3a3;
    }
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: var(--secondary);
        
        
    }
    html {
        
        
        @media(max-width:1080px) {
            font-size: 93.75%;
        }
        @media(max-width:720px) {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }

    .iconFloat {
        position:fixed;
        bottom: 3rem;
        right: 3rem;

        width: 5rem;
        height: 5rem;
        filter: brightness(110%);
        background-color: var(--secondary);
        box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 2px rgba(0,0,0,0.23);
        border-radius: 50%;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-out;
            transform: translateY(-10%);
        }

        @media only screen and (max-width: 900px) {
  
            width: 3rem;
            height: 3rem;
            bottom: 1.5rem;
            right: 1.5rem;
  }
    }

    .react-carousel {
        display: auto;
        @media only screen and (max-width: 900px) {
            display: none;
        }

    }

    .mobile {
        display: none;
        @media only screen and (max-width: 900px) {
            display: flex;
        }
    }


    .react-modal-overlay {
        background:rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right:0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content:center;
        z-index: 999999;


        @media only screen and (max-width: 900px) {
             align-items: center;
             justify-content:flex-start;
           
        }


    }

    .react-modal-content {
        width: 100%;
        max-width: 700px;
        background: var(--secondary);
        position: relative;
        border-radius: 0.24rem;
        padding: 3rem;
        z-index: 999999;

    }




`
