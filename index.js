let errorMSG = $("#passwordError")
let ajaxCallError = $("#ajaxErrorAlert")
let orderTracked = null;

window.onload = async function() {
  // console.log("onload")
    let isVerified = VerifyUser()
    if(isVerified){
      $('#loginDiv').removeClass('d-flex').addClass('hideLogin')
      $('#homePageLoader').removeClass('hideHomeLoder').addClass('d-flex')
       await getTradingData()
        document.getElementById('HomeDiv').style.display = "block"
        // createTable()
    }else{
        $('#logoutButton').hide()
        $('#loginDiv').removeClass('hideLogin').addClass('d-flex')
        return
    }
  }


const createTable = (orderTrackerObj) => {
  $("#optionsTable").children(":not(:first-child)").empty();
  for(let key in orderTrackerObj){
    let buySideOrdes = orderTrackerObj[key]["BuySideOrders"]
    let sellSideOrdes = orderTrackerObj[key]["SellSideOrders"]
    let buyCE = {}
    let buyPE = {}
    let buyFUT = {}
    let sellCE = {}
    let sellPE = {}
    let sellFUT = {}
    for(let optionKey in buySideOrdes){
        if(buySideOrdes[optionKey]["type"] == "CE"){
            buyCE['price'] = buySideOrdes[optionKey]["finalPrice"]
            buyCE['status'] = buySideOrdes[optionKey]["status"]
        }else if(buySideOrdes[optionKey]["type"] == "PE"){
            buyPE['price'] = buySideOrdes[optionKey]["finalPrice"]
            buyPE['status'] = buySideOrdes[optionKey]["status"]
        }else if(buySideOrdes[optionKey]["type"] == "FUT"){
            buyFUT['price'] = buySideOrdes[optionKey]["finalPrice"]
            buyFUT['status'] = buySideOrdes[optionKey]["status"]
        }
    }
    for(let optionKey in sellSideOrdes){
        if(sellSideOrdes[optionKey]["type"] == "CE"){
            sellCE['price'] = sellSideOrdes[optionKey]["finalPrice"]
            sellCE['status'] = sellSideOrdes[optionKey]["status"]
        }else if(sellSideOrdes[optionKey]["type"] == "PE"){
            sellPE['price'] = sellSideOrdes[optionKey]["finalPrice"]
            sellPE['status'] = sellSideOrdes[optionKey]["status"]
        }else if(sellSideOrdes[optionKey]["type"] == "FUT"){
            sellFUT['price'] = sellSideOrdes[optionKey]["finalPrice"]
            sellFUT['status'] = sellSideOrdes[optionKey]["status"]
        }
    }
    let tRow = `<tr id='${key}' onclick="toggleModal(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">`
    if (buyCE['status'] == "COMPLETE") {
        tRow += `<td scope="col">${buyCE['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    } else {
        tRow += `<td scope="col">${buyCE['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    }
    if (buyPE['status'] == "COMPLETE") {
        tRow += `<td scope="col">${buyPE['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    } else {
        tRow += `<td scope="col">${buyPE['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    }
    if (buyFUT['status'] == "COMPLETE") {
        tRow += `<td scope="col">${buyFUT['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    } else {
        tRow += `<td scope="col">${buyFUT['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    }

    if(orderTrackerObj[key]["BuyBasketStatus"] == "COMPLETE"){
        tRow += `<td scope="col"><span class="border border-success p-1 rounded" style="color: #ffffff; background-color: #079907; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }else if(orderTrackerObj[key]["BuyBasketStatus"] == "INCOMPLETE" || orderTrackerObj[key]["BuyBasketStatus"] == "OPEN"){
        tRow += `<td scope="col"><span class="border border-warning p-1 rounded" style="color: #ffffff; background-color: #ffc107; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }else{
        tRow += `<td scope="col"><span class="border border-danger p-1 rounded" style="color: #ffffff; background-color: #dc3545; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }
    tRow += `<td scope="col">${parseFloat(orderTrackerObj[key]["RecalculatedBuyIRR"].toFixed(2))}</td>
    <td scope="col">${orderTrackerObj[key]["strike"]}</td>
    <td scope="col">${key}</td>`
if (sellCE['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellCE['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellCE['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if (sellPE['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellPE['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellPE['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if (sellFUT['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellFUT['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellFUT['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if(orderTrackerObj[key]["SellBasketStatus"] == "COMPLETE"){
    tRow += `<td scope="col"><span class="border border-success p-1 rounded" style="color: #ffffff; background-color: #079907; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}else if(orderTrackerObj[key]["SellBasketStatus"] == "INCOMPLETE" || orderTrackerObj[key]["SellBasketStatus"] == "OPEN"){
    tRow += `<td scope="col"><span class="border border-warning p-1 rounded" style="color: #ffffff; background-color: #ffc107; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}else{
    tRow += `<td scope="col"><span class="border border-danger p-1 rounded" style="color: #ffffff; background-color: #dc3545; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}
tRow += `<td scope="col">${parseFloat(orderTrackerObj[key]["RecalculatedSellIRR"].toFixed(2))}</td>
<td scope="col">${orderTrackerObj[key]["NetPayOff"]}</td>
</tr>`
$("#optionsTable").append(tRow)
  }
}


const toggleModal = (e) =>{
    $("#ModalCommanTable").empty()
    $("#buyContainer").empty()
    $("#sellContainer").empty()
    $("#buyTable").empty()
    $("#sellTable").empty()

    document.getElementById("modalLoader").style.display = "block"
    document.getElementById("modalTable").style.display = "none"
    setTimeout(() => {
        document.getElementById("modalLoader").style.display = "none"
        document.getElementById("modalTable").style.display = "block"
    }, 1000);
    console.log(orderTracked[e.id])
    let selectedData = orderTracked[e.id]
    let tComm =`<tr><td>Order Tag</td><td>${e.id}</td></tr><tr><td>Strike</td><td>${selectedData["strike"]}</td></tr><tr><td>Net Pay Off</td><td>${selectedData["NetPayOff"]}</td></tr>`
    $("#ModalCommanTable").append(tComm)
    let buyDiv = `<div class="row p-1"><div id="textCenter" class="col">Basket Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['BasketMargin'].toFixed(2))}
    </div></div><div class="row p-1"><div id="textCenter" class="col">Buy Total Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['BuyTotalMargin'].toFixed(2))}
    </div></div><div class="row p-1"><div id="textCenter" class="col">Buy Basket Status :</div><div id="textCenter" class="col">${selectedData['BuyBasketStatus']}</div>
  </div><div class="row p-1"><div id="textCenter" class="col">Buy Order Date :</div><div id="textCenter" class="col">${selectedData['BuyOrderDate']}</div></div><div class="row p-1">
<div id="textCenter" class="col">IRR :</div><div id="textCenter" class="col">${parseFloat(selectedData['RecalculatedBuyIRR'].toFixed(2))}</div></div><div class="row p-1">
<div id="textCenter" class="col">Remaining Days :</div><div id="textCenter" class="col">${selectedData['BuySideDaysRemaining']}</div></div>`
  $("#buyContainer").append(buyDiv)

  let sellDiv = `<div class="row p-1"><div id="textCenter" class="col">Sell Total Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['SellTotalMargin'].toFixed(2))}
  </div></div><div class="row p-1"><div id="textCenter" class="col">Sell Basket Status :
  </div><div id="textCenter" class="col">${selectedData['SellBasketStatus']}</div></div><div class="row p-1"><div id="textCenter" class="col">Sell Order Date :</div>
  <div id="textCenter" class="col">${selectedData['SellOrderDate']}</div></div><div class="row p-1"><div id="textCenter" class="col">IRR :</div><div id="textCenter" class="col">
    ${parseFloat(selectedData['RecalculatedSellIRR'].toFixed(2))}</div></div><div class="row p-1"><div id="textCenter" class="col-sm">Remaining Days :</div>
  <div id="textCenter" class="col">${selectedData['SellSideDaysRemaining']}</div></div><div class="row p-1"><div id="textCenter" class="col"></div><div id="textCenter" class="col">
 </div></div>`
$("#sellContainer").append(sellDiv)

let buySideOrders =selectedData['BuySideOrders']
let sellSideOrders =selectedData['SellSideOrders']
let buyTR = null
for(let buyoption in buySideOrders){
    buyTR += `<tr><td>${buySideOrders[buyoption]["type"]}</td><td>${buySideOrders[buyoption]["status"]}</td><td>${buySideOrders[buyoption]["internal_order_id"]}</td><td>${buySideOrders[buyoption]["sentPrice"]}</td><td>${buySideOrders[buyoption]["finalPrice"]}</td></tr>`
}
$("#buyTable").append(buyTR)
let sellTR = null
for(let selloption in sellSideOrders){
    sellTR  += `<tr><td>${sellSideOrders[selloption]["type"]}</td><td>${sellSideOrders[selloption]["status"]}</td><td>${sellSideOrders[selloption]["internal_order_id"]}</td><td>${sellSideOrders[selloption]["sentPrice"]}</td><td>${sellSideOrders[selloption]["finalPrice"]}</td></tr>`
}
$("#sellTable").append(sellTR)
}
const form = document.getElementById('login');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission behavior
    Login();
  });

const Login = async () => {
    let password = document.getElementById('optionLoginPass').value
    if(password === "master"){
      $('#HomeDiv').removeClass('hideLogin').addClass('d-flex')
      $('#homePageLoader').removeClass('hideHomeLoder').addClass('d-flex')
        await getTradingData()
        $('#logoutButton').show()
        document.getElementById('HomeDiv').style.display = "none"
        $('#loginDiv').removeClass('d-flex').addClass('hideLogin')
        // createTable()
        const loginTime = new Date();
        const expirationTime = loginTime.getTime() + 86400000;
        localStorage.setItem('session', expirationTime);
    }else{
      errorMSG.show()
      setTimeout(() => {
        errorMSG.hide()
      },3000)
    }
    password.value = ""
}

const Logout = () => {
    // document.getElementById('HomeDiv').style.display = "none!important"
    $("#HomeDiv").removeClass('d-flex').addClass('hideLogin')
    $('#loginDiv').removeClass('hideLogin').addClass('d-flex')
    $('#logoutButton').hide()
    localStorage.removeItem("session");
}


const VerifyUser = () => {
    var currentTime = new Date().getTime();
    const expiryTime = localStorage.getItem("session");
    if (currentTime < expiryTime) {
        return true
    }else{
        return false
    }
}


const getTradingData = async () => {
  $.ajax({
    url: 'http://localhost:3000/getTradedData',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      orderTracked = data
      $('#homePageLoader').removeClass('d-flex').addClass('hideHomeLoder')
      createTable(data)
    },
    error: function(xhr, status, error) {
      $('#homePageLoader').show()
      ajaxCallError.show()
      setTimeout(() => {
        ajaxCallError.hide()
      },3000)
      console.error('There was a problem with the AJAX request:', status, error);
    }
  });
}

// {
//   "nfo-hdfc-095008224": {
//     strike: 1660,
//     BasketMargin: 88794.214,
//     BuyTotalMargin: 88794.214,
//     SellTotalMargin: 88794.214,
//     BuyBasketStatus: "COMPLETE",
//     SellBasketStatus: "COMPLETE",
//     BuyOrderDate: "2/16/2023 4:12:54 PM",
//     SellOrderDate: "2/17/2023 4:12:54 PM",
//     BuyIRR: 0.08832521057,
//     SellIRR: 4.055076522,
//     RecalculatedBuyIRR: 0.08832521,
//     RecalculatedSellIRR: 4.08832521,
//     BuySideDaysRemaining: 8,
//     SellSideDaysRemaining: 7,
//     NetPayOff: 652.54,
//     BuySideOrders: {
//       230216203630170: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 7,
//         finalPrice: 7,
//       },
//       230216203630171: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 65,
//         finalPrice: 65,
//       },
//       230216203630172: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1674,
//         finalPrice: 1674,
//       },
//     },
//     SellSideOrders: {
//       230216203630174: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 8,
//         finalPrice: 8,
//       },
//       230216203630175: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 64,
//         finalPrice: 64,
//       },
//       230216203630176: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1673,
//         finalPrice: 1673,
//       },
//     },
//   },
//   "nfo-hdfc-095008228": {
//     strike: 1660,
//     BasketMargin: 88794.214,
//     BuyTotalMargin: 88794.214,
//     SellTotalMargin: 88794.214,
//     BuyBasketStatus: "COMPLETE",
//     SellBasketStatus: "COMPLETE",
//     BuyOrderDate: "2/16/2023 4:12:54 PM",
//     SellOrderDate: "2/17/2023 4:12:54 PM",
//     BuyIRR: 0.08832521057,
//     SellIRR: 4.055076522,
//     RecalculatedBuyIRR: 0.08832521,
//     RecalculatedSellIRR: 4.08832521,
//     BuySideDaysRemaining: 8,
//     SellSideDaysRemaining: 7,
//     NetPayOff: 652.54,
//     BuySideOrders: {
//       230216203630170: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 7,
//         finalPrice: 7,
//       },
//       230216203630171: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 65,
//         finalPrice: 65,
//       },
//       230216203630172: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1674,
//         finalPrice: 1674,
//       },
//     },
//     SellSideOrders: {
//       230216203630174: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 8,
//         finalPrice: 8,
//       },
//       230216203630175: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 64,
//         finalPrice: 64,
//       },
//       230216203630176: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1673,
//         finalPrice: 1673,
//       },
//     },
//   },
//   "nfo-hdfc-095008227": {
//     strike: 1660,
//     BasketMargin: 88794.214,
//     BuyTotalMargin: 88794.214,
//     SellTotalMargin: 88794.214,
//     BuyBasketStatus: "COMPLETE",
//     SellBasketStatus: "COMPLETE",
//     BuyOrderDate: "2/16/2023 4:12:54 PM",
//     SellOrderDate: "2/17/2023 4:12:54 PM",
//     BuyIRR: 0.08832521057,
//     SellIRR: 4.055076522,
//     RecalculatedBuyIRR: 0.08832521,
//     RecalculatedSellIRR: 4.08832521,
//     BuySideDaysRemaining: 8,
//     SellSideDaysRemaining: 7,
//     NetPayOff: 652.54,
//     BuySideOrders: {
//       230216203630170: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 7,
//         finalPrice: 7,
//       },
//       230216203630171: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 65,
//         finalPrice: 65,
//       },
//       230216203630172: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1674,
//         finalPrice: 1674,
//       },
//     },
//     SellSideOrders: {
//       230216203630174: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 8,
//         finalPrice: 8,
//       },
//       230216203630175: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 64,
//         finalPrice: 64,
//       },
//       230216203630176: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1673,
//         finalPrice: 1673,
//       },
//     },
//   },
//   "nfo-hdfc-095008226": {
//     strike: 1660,
//     BasketMargin: 88794.214,
//     BuyTotalMargin: 88794.214,
//     SellTotalMargin: 88794.214,
//     BuyBasketStatus: "COMPLETE",
//     SellBasketStatus: "COMPLETE",
//     BuyOrderDate: "2/16/2023 4:12:54 PM",
//     SellOrderDate: "2/17/2023 4:12:54 PM",
//     BuyIRR: 0.08832521057,
//     SellIRR: 4.055076522,
//     RecalculatedBuyIRR: 0.08832521,
//     RecalculatedSellIRR: 4.08832521,
//     BuySideDaysRemaining: 8,
//     SellSideDaysRemaining: 7,
//     NetPayOff: 652.54,
//     BuySideOrders: {
//       230216203630170: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 7,
//         finalPrice: 7,
//       },
//       230216203630171: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 65,
//         finalPrice: 65,
//       },
//       230216203630172: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1674,
//         finalPrice: 1674,
//       },
//     },
//     SellSideOrders: {
//       230216203630174: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 8,
//         finalPrice: 8,
//       },
//       230216203630175: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 64,
//         finalPrice: 64,
//       },
//       230216203630176: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1673,
//         finalPrice: 1673,
//       },
//     },
//   },
//   "nfo-hdfc-095008225": {
//     strike: 1660,
//     BasketMargin: 88794.214,
//     BuyTotalMargin: 88794.214,
//     SellTotalMargin: 88794.214,
//     BuyBasketStatus: "COMPLETE",
//     SellBasketStatus: "COMPLETE",
//     BuyOrderDate: "2/16/2023 4:12:54 PM",
//     SellOrderDate: "2/17/2023 4:12:54 PM",
//     BuyIRR: 0.08832521057,
//     SellIRR: 4.055076522,
//     RecalculatedBuyIRR: 0.08832521,
//     RecalculatedSellIRR: 4.08832521,
//     BuySideDaysRemaining: 8,
//     SellSideDaysRemaining: 7,
//     NetPayOff: 652.54,
//     BuySideOrders: {
//       230216203630170: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 7,
//         finalPrice: 7,
//       },
//       230216203630171: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 65,
//         finalPrice: 65,
//       },
//       230216203630172: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1674,
//         finalPrice: 1674,
//       },
//     },
//     SellSideOrders: {
//       230216203630174: {
//         type: "CE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 8,
//         finalPrice: 8,
//       },
//       230216203630175: {
//         type: "PE",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 64,
//         finalPrice: 64,
//       },
//       230216203630176: {
//         type: "FUT",
//         status: "COMPLETE",
//         internal_order_id: "nfo-hdfc-095008224-212",
//         sentPrice: 1673,
//         finalPrice: 1673,
//       },
//     },
//   },
// };