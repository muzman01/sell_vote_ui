import React, { useEffect,useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { BaseLayout } from "@components/ui/layout";
import { Card } from "@components/ui/order";
import {RightBar} from "@components/ui/common"
import axios from "axios";



const Containerhome = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const [coins, setCoins] = useState([]);
      const [coins1, setCoins1] = useState([]);
      const [coins2, setCoins2] = useState([]);
    
      useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/steem?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
          )
          .then(res => {
            setCoins(res.data.market_data.current_price.usd);
            console.log(res.data.market_data.current_price.usd);
          })
          .catch(error => console.log(error));
      }, []);
      useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/steem-dollars?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
          )
          .then(res => {
            setCoins1(res.data.market_data.current_price.usd);
            console.log(res.data.market_data.current_price.usd);
          })
          .catch(error => console.log(error));
      }, []);
      useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/binance-usd?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
          )
          .then(res => {
            setCoins2(res.data.market_data.current_price.usd);
            console.log(res.data.market_data.current_price.usd);
          })
          .catch(error => console.log(error));
      }, []);
    return (
       
          <div  data-aos="fade-right"  className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
          <div className="  px-8 py-1 ">
              <p className="text-gray-500 text-lg">
              Robinia swap
          </p>
              <p className="font-bold text-2xl transform -translate-y-2">
                 C??zdana Ba??lan
          </p>
          </div>
          <div  data-aos="fade-left"  className="flex   p-4 space-x-3">
          <Card title="BUSD" balance={1} icon={0} token={coins2}/>
              <Card title="SBD" balance={1} icon={1} token={coins1} />
              <Card title="STEEM" balance={1} icon={2} token={coins} />
              

          </div>
          <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                    <BaseLayout>

            <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                Anasayfa
            
            </div>

            </BaseLayout>
              <RightBar />
          </div>
      </div>
    )
}

export default Containerhome
