const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let orderTrackerObj = {
  "nfo-hdfc-120734668": {
    strike: 1600,
    BasketMargin: 88678.86899999999,
    TotalMargin: 363774.7735,
    SellTotalMargin: 367793.67850000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:07:35",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.10370141035560332,
    RecalculatedBuyIRR: 0.09295350366201638,
    BuySideOrders: {
      230306101688579: {
        type: "CE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120734668-866",
        exchange_order_id: "2400000047515806",
        sentPrice: 48.35,
        finalPrice: 48.45,
      },
      230306101688545: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120734668-866",
        exchange_order_id: "2400000047513797",
        sentPrice: 9.3,
        finalPrice: 9.25,
      },
      230306101688612: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120734668-866",
        exchange_order_id: "2400000047518395",
        sentPrice: 1640.45,
        finalPrice: 1640.5,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:08:45",
    SellIRR: 0.5428342287066068,
    RecalculatedSellIRR: 0.5430522753225762,
    SellSideDaysRemaining: 23,
    NetPayOff: 105.44775000002687,
    SellSideOrders: {
      230306101694406: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000047834526",
        internalOrderid: "nfo-hdfc-120844265-816",
        sentPrice: 48.45,
        finalPrice: 48.4,
      },
      230306101694391: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000047833299",
        internalOrderid: "nfo-hdfc-120844265-816",
        sentPrice: 9.4,
        finalPrice: 9.4,
      },
      230306101694424: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000047835057",
        internalOrderid: "nfo-hdfc-120844265-816",
        sentPrice: 1639.35,
        finalPrice: 1639.3,
      },
    },
  },
  "nfo-hdfc-120735647": {
    strike: 1600,
    BasketMargin: 88678.86899999999,
    TotalMargin: 363774.7735,
    SellTotalMargin: 367793.67850000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:07:36",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.09295644544115689,
    RecalculatedBuyIRR: 0.08230664062197013,
    BuySideOrders: {
      230306101688667: {
        type: "CE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120735647-624",
        exchange_order_id: "2400000047522374",
        sentPrice: 48.35,
        finalPrice: 48.45,
      },
      230306101688640: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120735647-624",
        exchange_order_id: "2400000047520482",
        sentPrice: 9.3,
        finalPrice: 9.25,
      },
      230306101688696: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-120735647-624",
        exchange_order_id: "2400000047524555",
        sentPrice: 1640.35,
        finalPrice: 1640.4,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:10:04",
    SellIRR: 0.9390815220924709,
    RecalculatedSellIRR: 0.9394320904191242,
    SellSideDaysRemaining: 23,
    NetPayOff: 161.07887500000209,
    SellSideOrders: {
      230306101700941: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000048141655",
        internalOrderid: "nfo-hdfc-12100435-403",
        sentPrice: 47.6,
        finalPrice: 47.5,
      },
      230306101700910: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000048139163",
        internalOrderid: "nfo-hdfc-12100435-403",
        sentPrice: 9.35,
        finalPrice: 9.45,
      },
      230306101700969: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000048143120",
        internalOrderid: "nfo-hdfc-12100435-403",
        sentPrice: 1638.35,
        finalPrice: 1638.15,
      },
    },
  },
  "nfo-hdfc-121132571": {
    strike: 1600,
    BasketMargin: 88678.86899999999,
    TotalMargin: 363774.7735,
    SellTotalMargin: 367793.67850000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:11:33",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.10375269200619419,
    RecalculatedBuyIRR: 0.08236202535427406,
    BuySideOrders: {
      230306101713395: {
        type: "CE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121132571-874",
        exchange_order_id: "2400000048679176",
        sentPrice: 47.4,
        finalPrice: 47.5,
      },
      230306101713363: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121132571-874",
        exchange_order_id: "2400000048677755",
        sentPrice: 9.55,
        finalPrice: 9.45,
      },
      230306101713429: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121132571-874",
        exchange_order_id: "2400000048681183",
        sentPrice: 1639.25,
        finalPrice: 1639.25,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:56:00",
    SellIRR: 1.1862538382852756,
    RecalculatedSellIRR: 1.1862538382852756,
    SellSideDaysRemaining: 23,
    NetPayOff: 190.24124999997525,
    SellSideOrders: {
      230306101955545: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000061489603",
        internalOrderid: "nfo-hdfc-125559526-535",
        sentPrice: 45.2,
        finalPrice: 45.2,
      },
      230306101955461: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000061489077",
        internalOrderid: "nfo-hdfc-125559526-535",
        sentPrice: 10.3,
        finalPrice: 10.3,
      },
      230306101955633: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000061490180",
        internalOrderid: "nfo-hdfc-125559526-535",
        sentPrice: 1634.95,
        finalPrice: 1634.95,
      },
    },
  },
  "nfo-hdfc-121228675": {
    strike: 1610,
    BasketMargin: 90342.62,
    TotalMargin: 363499.498,
    SellTotalMargin: 367031.65400000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:12:29",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.0966388778177607,
    RecalculatedBuyIRR: 0.0966388778177607,
    BuySideOrders: {
      230306101719763: {
        type: "CE",
        status: "OPEN",
        internalOrderid: "nfo-hdfc-121228675-258",
        exchange_order_id: "2400000048972818",
        sentPrice: 40.5,
        finalPrice: 40.5,
      },
      230306101719719: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121228675-258",
        exchange_order_id: "2400000048971673",
        sentPrice: 11.8,
        finalPrice: 11.8,
      },
      230306101719799: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121228675-258",
        exchange_order_id: "2400000048974334",
        sentPrice: 1640.05,
        finalPrice: 1640.05,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:12:51",
    SellIRR: 0.5600563196792019,
    RecalculatedSellIRR: 0.24953425965788867,
    SellSideDaysRemaining: 23,
    NetPayOff: 55.155749999953,
    SellSideOrders: {
      230306101722087: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000049086523",
        internalOrderid: "nfo-hdfc-121250934-179",
        sentPrice: 41.2,
        finalPrice: 41.15,
      },
      230306101722057: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000049084902",
        internalOrderid: "nfo-hdfc-121250934-179",
        sentPrice: 11.6,
        finalPrice: 11.65,
      },
      230306101722117: {
        type: "FUT",
        status: "OPEN",
        exchange_order_id: "2400000049087594",
        internalOrderid: "nfo-hdfc-121250934-179",
        sentPrice: 1639.95,
        finalPrice: 1639.95,
      },
    },
  },
  "nfo-hdfc-121550961": {
    strike: 1610,
    BasketMargin: 90342.62,
    TotalMargin: 363499.498,
    SellTotalMargin: 367031.65400000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:15:51",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.09660859429822533,
    RecalculatedBuyIRR: 0.08612520970430482,
    BuySideOrders: {
      230306101739081: {
        type: "CE",
        status: "INCOMPLETE",
        internalOrderid: "nfo-hdfc-121550961-997",
        exchange_order_id: "2400000050000370",
        sentPrice: 41.2,
        finalPrice: 41.25,
      },
      230306101739057: {
        type: "PE",
        status: "REJECTED",
        internalOrderid: "nfo-hdfc-121550961-997",
        exchange_order_id: "2400000049998843",
        sentPrice: 11.55,
        finalPrice: 11.5,
      },
      230306101739119: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121550961-997",
        exchange_order_id: "2400000050001942",
        sentPrice: 1641,
        finalPrice: 1641,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:55:57",
    SellIRR: 0.5702340413677784,
    RecalculatedSellIRR: 0.5702340413677784,
    SellSideDaysRemaining: 23,
    NetPayOff: 1311.75349999997587,
    SellSideOrders: {
      230306101954797: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000061468617",
        internalOrderid: "nfo-hdfc-125557145-724",
        sentPrice: 38.1,
        finalPrice: 38.1,
      },
      230306101954706: {
        type: "PE",
        status: "INCOMPLETE",
        exchange_order_id: "2400000061467314",
        internalOrderid: "nfo-hdfc-125557145-724",
        sentPrice: 13.15,
        finalPrice: 13.15,
      },
      230306101954901: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000061471335",
        internalOrderid: "nfo-hdfc-125557145-724",
        sentPrice: 1635.2,
        finalPrice: 1635.2,
      },
    },
  },
  "nfo-hdfc-121551789": {
    strike: 1610,
    BasketMargin: 90342.62,
    TotalMargin: 363499.498,
    SellTotalMargin: 367031.65400000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:15:52",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.10718779464407513,
    RecalculatedBuyIRR: 0.09660964762487101,
    BuySideOrders: {
      230306101739159: {
        type: "CE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121551789-959",
        exchange_order_id: "2400000050003400",
        sentPrice: 41.2,
        finalPrice: 41.25,
      },
      230306101739136: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121551789-959",
        exchange_order_id: "2400000050002657",
        sentPrice: 11.55,
        finalPrice: 11.5,
      },
      230306101739199: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121551789-959",
        exchange_order_id: "2400000050004971",
        sentPrice: 1641.1,
        finalPrice: 1641.1,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:39:53",
    SellIRR: 0.5675703482082355,
    RecalculatedSellIRR: 0.40307188737290933,
    SellSideDaysRemaining: 23,
    NetPayOff: 83.8629999999531,
    SellSideOrders: {
      230306101883657: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000056903598",
        internalOrderid: "nfo-hdfc-123952392-261",
        sentPrice: 38.85,
        finalPrice: 38.8,
      },
      230306101883638: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000056902150",
        internalOrderid: "nfo-hdfc-123952392-261",
        sentPrice: 12.7,
        finalPrice: 12.7,
      },
      230306101883736: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000056906854",
        internalOrderid: "nfo-hdfc-123952392-261",
        sentPrice: 1636.5,
        finalPrice: 1636.5,
      },
    },
  },
  "nfo-hdfc-121955782": {
    strike: 1600,
    BasketMargin: 88678.86899999999,
    TotalMargin: 363774.7735,
    SellTotalMargin: 367793.67850000004,
    BuyBasketStatus: "COMPLETED",
    BuyOrderDate: "3/6/2023 12:19:56",
    BuySideDaysRemaining: 23,
    BuyIRR: 0.09300886384077911,
    RecalculatedBuyIRR: 0.10375134246048323,
    BuySideOrders: {
      230306101764622: {
        type: "CE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121955782-926",
        exchange_order_id: "2400000051321636",
        sentPrice: 47.95,
        finalPrice: 48.05,
      },
      230306101764595: {
        type: "PE",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121955782-926",
        exchange_order_id: "2400000051319637",
        sentPrice: 9.1,
        finalPrice: 9.05,
      },
      230306101764664: {
        type: "FUT",
        status: "COMPLETE",
        internalOrderid: "nfo-hdfc-121955782-926",
        exchange_order_id: "2400000051323925",
        sentPrice: 1640.15,
        finalPrice: 1640.4,
      },
    },
    SellBasketStatus: "COMPLETED",
    SellOrderDate: "3/6/2023 12:39:52",
    SellIRR: 0.5539411751946859,
    RecalculatedSellIRR: 0.7399328916028958,
    SellSideDaysRemaining: 23,
    NetPayOff: 134.66237500007634,
    SellSideOrders: {
      230306101883603: {
        type: "CE",
        status: "COMPLETE",
        exchange_order_id: "2400000056900383",
        internalOrderid: "nfo-hdfc-123951629-736",
        sentPrice: 46.1,
        finalPrice: 46.1,
      },
      230306101883580: {
        type: "PE",
        status: "COMPLETE",
        exchange_order_id: "2400000056899085",
        internalOrderid: "nfo-hdfc-123951629-736",
        sentPrice: 9.9,
        finalPrice: 9.9,
      },
      230306101883620: {
        type: "FUT",
        status: "COMPLETE",
        exchange_order_id: "2400000056901556",
        internalOrderid: "nfo-hdfc-123951629-736",
        sentPrice: 1636.6,
        finalPrice: 1636.55,
      },
    },
  },
};

//end of static Order Object...

app.get("/getTradedData", (req, res) => {
  res.send(orderTrackerObj);
});

app.get("/getBuyBotsAccMargin", (req, res) => {
  res.send(["353.73838383"]);
});

app.post("/modifyOrderTracker", (req, res) => {
  try {
    let data = req.body;
    let oldOrder = null;
    //Check's if the order is buySideOrder and has the orderid in the object this is to check whether the order is form buy or not
    if (
      orderTrackerObj[data.tag]["BuySideOrders"].hasOwnProperty(
        data.old_order_id
      )
    ) {
      oldOrder = orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id];
      let newbuyorder = {
        type: oldOrder.type,
        status: data.new_order_status,
        exchange_order_id: data.exchange_order_id,
        internalOrderid: oldOrder.internalOrderid,
        sentPrice: oldOrder.sentPrice,
        finalPrice: Number(parseFloat(data.average_price).toFixed(2)),
      };
      //check's if the older status is rejected if true then it create a new order object and delete the older version of it..
      if (oldOrder["status"] == "REJECTED") {
        orderTrackerObj[data.tag]["BuySideOrders"][Number(data.new_order_id)] =
          newbuyorder;
        delete orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id];
        console.log("Updated");
        console.log(
          orderTrackerObj[data.tag]["BuySideOrders"][Number(data.new_order_id)]
        );
        return res.send({ status: "Success", data: data });
      } else {// Status is not rejected the change the values of status, exchange_order_id and finalPrice
        orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id][
          "status"
        ] = data.new_order_status;
        orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id][
          "exchange_order_id"
        ] = data.exchange_order_id;
        orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id][
          "finalPrice"
        ] = Number(parseFloat(data.average_price).toFixed(2));
        console.log("Updated");
        console.log(
          orderTrackerObj[data.tag]["BuySideOrders"][data.old_order_id]
        );
        return res.send({ status: "Success", data: data });
      }
    } else if (
      orderTrackerObj[data.tag]["SellSideOrders"].hasOwnProperty(
        data.old_order_id
      )
    ) {
      //check whether the order is form sell or not
      oldOrder = orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id];
      let newsellorder = {
        type: oldOrder.type,
        status: data.new_order_status,
        exchange_order_id: data.exchange_order_id,
        internalOrderid: oldOrder.internalOrderid,
        sentPrice: oldOrder.sentPrice,
        finalPrice: Number(parseFloat(data.average_price).toFixed(2)),
      };

      //check's if the older status is rejected if true then it create a new order object and delete the older version of it..
      if (oldOrder["status"] == "REJECTED") {
        orderTrackerObj[data.tag]["SellSideOrders"][Number(data.new_order_id)] =
          newsellorder;
        delete orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id];
        console.log("Updated!!");
        console.log(
          orderTrackerObj[data.tag]["SellSideOrders"][Number(data.new_order_id)]
        );
        return res.send({ status: "Success", data: data });
      } else { // Status is not rejected the change the values of status, exchange_order_id and finalPrice
        orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id][
          "status"
        ] = data.new_order_status;
        orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id][
          "exchange_order_id"
        ] = data.exchange_order_id;
        orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id][
          "finalPrice"
        ] = Number(parseFloat(data.average_price).toFixed(2));
        console.log("Updated!!");
        console.log(
          orderTrackerObj[data.tag]["SellSideOrders"][data.old_order_id]
        );
        return res.send({ status: "Success", data: data });
      }
    }
  } catch (err) {
    return res.status(500).send({ error: err });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
