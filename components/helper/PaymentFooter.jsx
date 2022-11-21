import React from "react";
import {RiVisaFill} from "react-icons/ri"
import {FaCcMastercard} from "react-icons/fa"
import transfer from "../../public/assets/images/bank-transfer-svgrepo-com (1).svg"
import visa  from "../../public/assets/images/visa (1).svg"
import Image from "next/image";

function PaymentFooter() {
  return (
    <ul className="flex justify-center items-center gap-2">

      <li>
      <span className="text-white text-lg font-serif ">We Support:</span>
      </li>
      <li>
      <RiVisaFill color="#fff" size={24}/>
      </li>
      <li>
      <FaCcMastercard color="#fff" size={24}/>
      </li>
      <li >
      <Image
                  alt="/"
                  src={transfer}
                  width="24"
                  height="24"
                  color="#fff"
                />
      </li>
      <li >
      <Image
                  alt="/"
                  src={visa}
                  width="24"
                  height="24"
                  color="#fff"
                />
      </li>
    </ul>
  );
}

export default PaymentFooter;
