
import React from 'react';
import stateOf from '../../assets/state-of-art.jpg';
import hospitalBed from '../../assets/hospital-bed.svg';


function Dashboard(){
    return(
        <>
<section className="pspace">
<div className="container">
<div className="grid2">
<div>
<h2 className="ch2 mb2">State-of-the-art diagnostic and imaging services</h2>
<p className="mb2">GKNM Multispeciality Hospital in Coimbatore was established in 1952 by the Kuppuswamy Naidu Charitable Trust to care for Women and Children. Since then this institution has grown to encompass the entire spectrum of multi specialties of healthcare under one roof. Being the most renowned, trusted and the best hospital in Coimbatore, we take utmost care in treating the people with the most advanced technologies that help people to recover quickly.</p>
<div className="btn-fl mt40"><div><a href="#" className="cbtn">Read More</a></div><div><a href="#" className="bbtn">Locate Us</a></div></div>

<div>
<div><img src={hospitalBed} alt="Hospital Bed" /></div>
<div>
<div>
<p className="fbold count plus" data-count="43">20</p>
<p>Departments</p>
</div>
</div>
</div>
</div>

<div>
<img src={stateOf} alt="GKNMH Centre" />

</div>

</div>
</div>
</section>

        </>
    )
}
export default Dashboard;

