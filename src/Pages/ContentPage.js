import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';

const ContentPage = ({ searchData }) => {
  const [products, setProducts] = useState(null);
  const [getFilterData, setGetFilterData] = useState([]);
  const [imgData, setImgData] = useState([
    "https://5.imimg.com/data5/SELLER/Default/2023/1/UN/DP/DZ/2665132/water-purification-plant-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/3/292988318/TY/DO/MM/3454475/water-purification-machine-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/10/352328247/EY/NF/UT/3983863/water-purification-plants-500x500.jpg",
    "https://4.imimg.com/data4/OM/FM/MY-6694769/water-purification-plant-500x500.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/6/QB/YP/ES/90547/reverse-osmosis-plants-125x125.jpg",
    "https://3.imimg.com/data3/XC/KC/GLADMIN-132266/commercial-reverse-osmosis-system-125x125.jpg",
    "https://3.imimg.com/data3/DB/VL/GLADMIN-132268/industrial-reverse-osmosis-plant-125x125.jpg",
    "https://3.imimg.com/data3/FN/RS/MY-2/reverse-osmosis-equipment1-125x125.jpg",
    "https://3.imimg.com/data3/KB/VR/GLADMIN-20902/membrane-housing-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2021/4/ZE/UG/WU/85365/fiberglass-housing-125x125.jpg",
    "https://3.imimg.com/data3/LS/RA/MY-2/reverse-osmosis-plant-controller-125x125.jpg",
    "https://4.imimg.com/data4/SY/DR/GLADMIN-179929/dialysis-ro-plant-125x125.jpg",
    "https://4.imimg.com/data4/AL/II/GLADMIN-180692/atmospheric-water-generators-125x125.jpg",
    "https://4.imimg.com/data4/TF/UX/GLADMIN-181574/frp-ro-plant-125x125.jpg",
    "https://4.imimg.com/data4/QT/WJ/GLADMIN-181573/ss-ro-plant-125x125.jpg",
    "https://4.imimg.com/data4/AC/SY/GLADMIN-185736/ro-machines-125x125.jpg",
    "https://4.imimg.com/data4/YY/YY/GLADMIN-/dialysis-water-plant-125x125.jpg",
    "https://5.imimg.com/data5/SS/SS/GLADMIN-/data5-ur-cn-my-35271819-solar-water-treatment-plant-500x500-125x125.jpg",
    "https://3.imimg.com/data3/QV/EH/GLADMIN-78834/fresh-water-generator-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/4/LE/BJ/FZ/90177/reverse-osmosis-systems-125x125.png",
    "https://4.imimg.com/data4/PJ/UM/GLADMIN-181262/industrial-ro-system-125x125.jpg",
    "https://5.imimg.com/data5/BG/IW/GLADMIN-2/aquagaurd-water-purification-plants-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/6/VE/BD/YN/81953/enagic-kangen-water-machine-125x125.jpg",
    "https://5.imimg.com/data5/DP/PV/GLADMIN-2/abs-reverse-osmosis-plants-125x125.jpg",
    "https://5.imimg.com/data5/PS/SR/GLADMIN-2/aguapuro-reverse-osmosis-plants-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/6/OL/DB/AQ/90547/water-purification-plants-125x125.jpg",
    "https://5.imimg.com/data5/PA/NP/GLADMIN-2/seawaterfiltrationsystem-125x125.jpg",
    "https://3.imimg.com/data3/TH/NG/GLADMIN-/blog-wp-content-uploads-2011-05-v2r-electrolysis-machine-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/1/UV/NY/WM/86648/hydrogen-water-generator-bottle-125x125.jpg",
    "https://5.imimg.com/data5/GLADMIN/Default/2022/4/ZY/GL/BK/90177/purified-water-generation-system-125x125.jpg",
    "https://3.imimg.com/data3/OJ/ND/GLADMIN-45668/advanced-oxidation-system-125x125.jpg",
    "https://3.imimg.com/data3/AD/EB/GLADMIN-146529/pharmaceutical-water-system-125x125.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/12/YF/DO/EO/27367254/500-lph-frp-ro-plant-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/334600288/OQ/PE/ER/6053963/automatic-water-purification-plants-500x500.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/7/326535710/ZQ/ZN/HX/14596354/water-purification-system-500x500.png",
    "https://3.imimg.com/data3/UW/PM/MY-2/demineralisation-plant1-125x125.jpg",
    "https://3.imimg.com/data3/EO/JQ/GLADMIN-39430/water-purifying-equipment-125x125.jpg",
    "https://3.imimg.com/data3/YO/FC/GLADMIN-177441/ultrapure-water-purification-system-125x125.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/4/CI/ZZ/PS/3164057/water-purification-plants-500x500.png",
    "https://5.imimg.com/data5/ANDROID/Default/2023/6/320155879/NL/UU/KA/118254764/product-jpeg-500x500.jpg"
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://suggest.imimg.com/suggest/suggester.php?tag=defcon&limit=10&type=product&catid=94&mcatid=3359&v=405'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products) {
      const recommendedData = products["product"].slice(0,40);
      const filterProductsData = searchData
        ? recommendedData.data.filter((item) =>
          item.label.toLowerCase().includes(searchData.toLowerCase())
        )
        : recommendedData;
      setGetFilterData(filterProductsData);
    }
  }, [searchData, products]);

  return (
    <div style={{ paddingTop: '10px' }}>
      <Panel header="Dress related products for you">
        <div style={{ width: "100%", marginLeft: "5px" }} className="grid">
          {getFilterData.length > 0 ? (
            getFilterData.map((item) => (
              <div className="col-2" key={item.ID}>
                <Card className="cardProducts" style={{ cursor: 'pointer', height: '280px', width: '200px' }}>
                  <img
                    height="100px"
                    alt="Product"
                    src={imgData[getFilterData.indexOf(item)]}
                    // onError={(e) => {
                    //   e.target.src = 'url_of_placeholder_image_or_fallback_image.jpg'; // Replace with your placeholder image URL
                    // }}
                  />
                  <div className="item-name" style={{ fontSize: '14px', paddingTop: '10px' }}>
                    {item.label}
                  </div>
                  <div  className="anchorGetBestPriceBtn">
                    Get Best Price
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <div>No matching products found.</div>
          )}
        </div>
      </Panel>
    </div>
  );
};

export default ContentPage;
