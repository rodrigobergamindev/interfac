import styled from 'styled-components';




export const Header = styled.header`

       
       margin-top: 6.7rem;
       width: 100%;
       display: flex;
       flex-direction: column;
       justify-content:center;
       align-items: center;
       background-image: -webkit-linear-gradient( -28deg, var(--primary) 0%, var(--primary) 30%, var(--secondary) 30%, var(--secondary) 30%);
        background-image: linear-gradient( -90deg, var(--primary) 0%, var(--primary) 70%, var(--secondary) 70%, var(--secondary) 70%);

      .container {
          width: 100%;
          max-width: 1120px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 2rem;
          
          margin-top: 6rem;
          .about {
              max-width: 450px;
          }

        .description {

            
            h2 {
                color: var(--secondary);
                font-weight: 600;
                font-size: 3rem;
            }

            h3 {
                font-size: 2rem;
                color: var(--secondary);
                font-weight: 300;


                strong {
                    font-weight: 600;
                }

            }
            p {
                color: var(--secondary);
                font-weight: 300;
                margin-top: 3rem;
                text-align:justify;
            }


        .metrics {
            display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          justify-items: center;
          width: 100%;
          margin-top: 2rem;
          gap: 2rem;

          .cardMetric {
              display: flex;
              flex-direction: column;
              align-items: center;
              height: 200px;
              text-align:center;

            h4 {
              font-size: 2rem;
              font-weight:600;
              color: var(--secondary);
              strong {
                  color: #25D366;
              }
             
          }

          span{
              color: var(--secondary);
              font-size: 1rem;

          }

          img {
              width: 60px;
          }

          }



        }
        }
      }
   



`



export const Container = styled.section`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    
       
`

