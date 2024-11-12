import BusinessCardSlider from "./BusinessCardSlider";
import './business-card-slider.css';

export default function CheckOutTheseCustomers() {

  return (
    <div className="mb-4">
      <div className="custom-container ">
        <h1 className="poppins-bold title-2">
          Check Out These <span className="highlighted">Customers</span>
        </h1>
        <p className="poppins-regular description">
          Companies Big or small Love digital business. We have on boarded over
          25,000, teams including international banks , construction , companies
          , retail, roofing, plumbing, marketting agencies, hospital, and many
          more.
        </p>
      </div>
      <div className="custom-container ">
        <BusinessCardSlider />
      </div>
    </div>
  );
}
