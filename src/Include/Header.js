import "./css/Main.css";
import "./css/Responsive.css";
import "./css/Overall.css";

import $ from 'jquery';

function Header() {
    $(".toggle-password").on('click', function () {
        $(this).toggleClass("show");
        let input = $(this).parent().find(".password-field")
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
  return (
    <div>



      {/* <div className="modal fade " id="propertyCode-seller">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-body__title">Enter Property Code to sell </div>
                        <form action="#" className="modal-body__form">
                            <input type="text" placeholder="#1234456" />
                            <a href="property.php" className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade " id="propertyCode-buyer">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="modal-body__title">Enter Property Code to sell </div>
                        <form action="#" className="modal-body__form">
                            <input type="text" placeholder="#1234456" />
                            <a href="../buyer/property.php" className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="fingerPrint">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <button type="button" className="close" data-dismiss="modal">
                            <span> <i className='bx bx-x'></i></span>
                        </button>
                        <div className="modal-body__title mb-0">This Functionality is in Process</div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default Header;
