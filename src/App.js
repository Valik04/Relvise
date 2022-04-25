import './index.scss';

function App() {
  return (
      <div>
          <div className="header">

          <div className="nav-bar">
              <div className="logo">
                  <b>Thrivetalk</b>
              </div>
              <div className="nav">
                  <li>Home</li>
                  <li>About  </li>
                  <li>Services </li>
                  <li>Blog</li>
              </div>
              <button>
                      CONTACT US
              </button>
          </div>


          <div className="header-info">
              <div className="logo">
                  <b>Thrivetalk</b>
              </div>

              <div className="content-header">
                  <b>HELPING YOU THRIVE IN ALL AREAS OF LIFE</b>
              </div>

              <div className="info">
                  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
              </div>


                  <button className='btn1'>WHO AM I </button>
                  <button className='btn2'>WHAT DO I DO </button>
          </div>
          </div>

          <div className="content">
              <div className="content-info">
              <h2>Why Thrive?</h2>
                  <div className='text'>
             <b>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?</b> 
              <p>Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
              </div>
          </div>
              <img src={process.env.PUBLIC_URL + "/images/1.png"} alt=""/>
          </div>


          <div className='about-us'>
              <h3>ABOUT US</h3>
              <span>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
                </span>
          </div>

          <div className="container">
              <p>WE CAN HELP YOU WITH</p>
          </div>

          <div className='cards'>
          <div className="card1">
              <div className='line'></div>
              <li><b>Weight Lifting</b></li>
          </div>
          <div className="card2">
              <div className='line'></div>
              <li><b>Running  & Spinning</b></li>
          </div>
          <div className="card3">
              <div className='line'></div>
              <li><b>Pumping Iron</b></li>
          </div>
          <div className="card4">
              <div className='line'></div>
              <li><b>Pumping Iron</b></li>
          </div>
      </div>
          <div className="card-block">

          </div>

          <div className='item-cards'>
              <div className="item-card1">
                  <div className='line'></div>
                  <li><b>Physical Health</b></li>
              </div>
              <div className="item-card2">
                  <div className='line'></div>
                  <li><b>Mental Health</b></li>
              </div>
              <div className="item-card3">
                  <div className='line'></div>
                  <li><b>Nutrition</b></li>
              </div>
              <div className="item-card4">
                  <div className='line'></div>
                  <li><b>Gymnastics</b></li>
              </div>
              <div className="item-card5">
                  <div className='line'></div>
                  <li><b>Crossfit</b></li>
              </div>
              <div className="item-card6">
                  <div className='line'></div>
                  <li><b>Aerobics</b></li>
              </div>
          </div>

          <div className='info-cards'>
              <div className="info-card">
                  <h3>Nutritional Plans</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
              <div className="info-card">
                  <h3>Weight Loss</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
              <div className="info-card">
                  <h3>Mental Peace</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
              <div className="info-card">
                  <h3>Home Training</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
              <div className="info-card">
                  <h3>Work/Life Balance</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
              <div className="info-card">
                  <h3>Cardio</h3>
                  <p>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p>
              </div>
          </div>

          <div className='item'>
              <img src={process.env.PUBLIC_URL + "/images/2.png"} alt=""/>
              <div className='item-block'>
                  <p>YOU SHOULD ALSO KNOW</p>
                  <h3>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.</h3>
                  <h5>GET HELP NOW</h5>
              </div>
          </div>

          <div className="contact-block">
              <div className="contact">
                  <p>CONTACT US</p>
                  <h2>Ready. Set. Smile</h2>
                  <h4>Take the free online assessment to see if you are a candidate and get started on your journey.</h4>
                  <h5>GET HELP NOW</h5>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/3.png"} alt=""/>
          </div>

          <div className='footer'>
              <img src={process.env.PUBLIC_URL + "/images/4.png"} alt=""/>

              <div className="footer-info">
                  <div className="footer-card1">
                      <h3>SOME INFO</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                  </div>

                  <div className="footer-card2">
                      <h3>SOME INFO</h3>
                      <p>Main Street 1, Olcott
                          Buffalo, United States
                          +555 283 784 333
                          </p>
                      <a href="/">office@enfold-health.com</a>
                  </div>

                  <div className="footer-card3">
                      <h3>OFFICE HOURS</h3>
                      <p>Mo-Fr: 8:00-19:00
                          Sa: 8:00-14:00
                          Su: closed
                      </p>
                  </div>
              </div>
          </div>

          <div className='footer-item'>
              <li><b>Copyright - ThriveTalk  2017</b> </li>
          </div>

</div>


  );
}

export default App;
