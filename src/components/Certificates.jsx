import React from "react";
import i1 from '../img/certif/1.jpg';
import i2 from '../img/certif/2.jpg';
import i3 from '../img/certif/3.jpg';
import i4 from '../img/certif/4.jpg';
import i5 from '../img/certif/5.jpg';
import i6 from '../img/certif/6.jpg';
import i7 from '../img/certif/7.jpg';


const Certificates = () => {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i1} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Python Functions, Files, and Dictionaries</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: 14 mai 2022</h6>
                            </div>
                        </div>
                    </div>
               
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i2} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Data Collection and Processing with Python</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: 13 mai 2022</h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i3} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Introduction to Agile Development and Scrum</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date:18 mars 2023</h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i4} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Introduction to DevOps</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Mar 21, 2023 </h6>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i5} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Introduction to Cloud Computing</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: 18 mars 2023</h6>
                            </div>
                        </div>
                    </div>
              
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i6} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Advanced React</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: 20 février 2023</h6>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i7} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">DevOps, Cloud, and Agile Foundations</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: 18 mars 2023</h6>
                            </div>
                        </div>
                    </div>
                
                   
                    </div>
                </div>
           
        </>
    )
}
export default Certificates;
