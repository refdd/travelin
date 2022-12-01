import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    { 
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Charitable Giving
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Prices:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Nunc maximus, magna at ultricies elementum, risus turpis vulputate
          quam, vitae convallis ex tortor sed dolor..
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Notes:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Payment:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Transportation:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Tour Guides:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus .
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Travelling with Children:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. Fusce
          sed commodo purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <h2 className="text-[#17233e] text-xl font-Poppins  py-3 capitalize">
          Wheelchair Travellers:{" "}
        </h2>
      ),
      content: (
        <p className="text-[#777] text-lg font-Poppins capitalize ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus n Fusce sed commodo purus, at
          tempus turpis.
        </p>
      ),
    },
  ],
  styles: {
    // bgColor: 'white',
    rowTitleColor: "#17233e",
    titleTextSize: "48px",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  },
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};
function NotsPriceSection() {
  return (
    <div className="container mx-auto px-6 py-6">
      <Faq data={data} config={config} />
    </div>
  );
}

export default NotsPriceSection;
