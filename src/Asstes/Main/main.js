import'./main.css';
import pic1 from '../../images/pic-1.ad1ed7ee8284087fe9ee.jpg'
import pic2 from '../../images/pic-3.fa689b1037dbf69567a3.jpg'
import pic3 from '../../images/pic-2.0593bc2fd8a13cf8c19f.jpg'
function Main() {
    return (
        <main>
            <div className='container1 container'>
                <div className='images col-md-6 col-lg-6'>
                    <div className='col-md-6 col-lg-6'>
                        <i class="fa-regular fa-square"></i>
                        <img className='pic1' src={pic1}/>
                        <img className='pic2' src={pic2}/>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <img className='pic3' src={pic3}/>
                        <span className='A20'>
                            20
                            <h5>
                            Year Experience
                            </h5>
                        </span>
                    </div>
                </div>
                <div className='info col-md-6 col-lg-6'>
                    <div className='col-md-6 col-lg-6'>
                        <h4>About Us</h4>
                        <p>The Great Place Of Medical Hospital Center</p>
                        <h6>
                            We provide the special tips and advice’s 
                            of heath care treatment and high level of best technology 
                            involve in the our hospital.
                        </h6>
                    </div>
                    <div className='Emergency  col-md-6 col-lg-6'>
                        <div>
                            <div>
                                    <i class="fa-solid fa-truck-medical"></i>
                                    Emergency Help
                                </div>
                                <div>
                                    <i class="fa-solid fa-bed"></i>
                                    Qualified Doctors
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="fa-solid fa-kit-medical"></i>
                                Best Professionals
                            </div>
                            <div>
                                <i class="fa-solid fa-syringe"></i>
                                Medical Treatment
                            </div>
                        </div>
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </main>
    )
}
export default Main;