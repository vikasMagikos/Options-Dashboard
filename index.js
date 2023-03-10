let errorMSG = $("#passwordError")
let ajaxCallError = $("#ajaxErrorAlert")
let totalNetPayOff = $('#totalNetpayoff')
let totalNetPayOffNav = $('#totalnet')
let orderIdModal = $('#internalordermodal')
let orderTracked = null;

window.onload = async function() {
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
    let sellSideOrdes = null
    if("SellSideOrders" in orderTrackerObj[key]){
        sellSideOrdes = orderTrackerObj[key]["SellSideOrders"]
    }
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
    if(sellSideOrdes){
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
    }
    let tRow = `<tr id='${key}' onclick="toggleModal(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">`
    if (buyFUT['status'] == "COMPLETE") {
        tRow += `<td scope="col">${buyFUT['price']}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    } else {
        tRow += `<td scope="col">${buyFUT['price']}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
    }
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

    if(orderTrackerObj[key]["BuyBasketStatus"] == "COMPLETED"){
        tRow += `<td scope="col"><span class="border border-success p-1 rounded" style="color: #ffffff; background-color: #079907; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }else if(orderTrackerObj[key]["BuyBasketStatus"] == "INCOMPLETE" || orderTrackerObj[key]["BuyBasketStatus"] == "OPEN"){
        tRow += `<td scope="col"><span class="border border-warning p-1 rounded" style="color: #ffffff; background-color: #ffc107; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }else{
        tRow += `<td scope="col"><span class="border border-danger p-1 rounded" style="color: #ffffff; background-color: #dc3545; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["BuyBasketStatus"]}</span></td>`
    }
    tRow += `<td scope="col">${parseFloat(orderTrackerObj[key]["RecalculatedBuyIRR"].toFixed(2))}</td>
    <td scope="col">${orderTrackerObj[key]["strike"]}</td>
    <td scope="col">${key}</td>`
if (sellFUT['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellFUT.hasOwnProperty('price') ? parseFloat(sellFUT["price"].toFixed(2)) : '--'}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellFUT.hasOwnProperty('price') ? parseFloat(sellFUT["price"].toFixed(2)) : '--'}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if (sellCE['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellCE.hasOwnProperty('price') ? parseFloat(sellCE["price"].toFixed(2)) : '--'}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellCE.hasOwnProperty('price') ? parseFloat(sellCE["price"].toFixed(2)) : '--'}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if (sellPE['status'] == "COMPLETE") {
    tRow += `<td scope="col">${sellPE.hasOwnProperty('price') ? parseFloat(sellPE["price"].toFixed(2)) : '--'}<hr style="color: #079907;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
} else {
    tRow += `<td scope="col">${sellPE.hasOwnProperty('price') ? parseFloat(sellPE["price"].toFixed(2)) : '--'}<hr style="color: #dc3545;margin-top: 0rem;width: 50%;border-width: 3px 0 0 0;border-radius: 2px;"></td>`
}
if(orderTrackerObj[key]["SellBasketStatus"] == "COMPLETED"){
    tRow += `<td scope="col"><span class="border border-success p-1 rounded" style="color: #ffffff; background-color: #079907; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}else if(orderTrackerObj[key]["SellBasketStatus"] == "INCOMPLETE" || orderTrackerObj[key]["SellBasketStatus"] == "OPEN"){
    tRow += `<td scope="col"><span class="border border-warning p-1 rounded" style="color: #ffffff; background-color: #ffc107; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}else if(orderTrackerObj[key]["SellBasketStatus"] == undefined){
    tRow += `<td scope="col"><span  style="color: #000; font-size: 10px;">${"--"}</span></td>`
}
else{
    tRow += `<td scope="col"><span class="border border-danger p-1 rounded" style="color: #ffffff; background-color: #dc3545; font-size: 10px;text-shadow: 0px 0px 1px;box-shadow: 0px 0px 2px;">${orderTrackerObj[key]["SellBasketStatus"]}</span></td>`
}
tRow += `<td scope="col">${orderTrackerObj[key].hasOwnProperty('RecalculatedSellIRR') ? parseFloat(orderTrackerObj[key]["RecalculatedSellIRR"].toFixed(2)) : '--'}</td>
<td scope="col">${orderTrackerObj[key].hasOwnProperty('NetPayOff') ? parseFloat(orderTrackerObj[key]["NetPayOff"].toFixed(2)) : '--'}</td>
</tr>`
$("#optionsTable").append(tRow)
  }
  let sum = 0
    for (const key in orderTrackerObj) {
        if(orderTrackerObj[key].hasOwnProperty("NetPayOff")){
            if(orderTrackerObj[key]["SellBasketStatus"] === "COMPLETED" && orderTrackerObj[key]["BuyBasketStatus"] === "COMPLETED"){
                if (typeof orderTrackerObj[key]["NetPayOff"] === 'number') {
                    sum += orderTrackerObj[key]["NetPayOff"];
                  } else if (typeof orderTrackerObj[key]["NetPayOff"] === 'string') {
                    const numValue = Number(orderTrackerObj[key]["NetPayOff"]);
                    if (!isNaN(numValue)) {
                      sum += numValue;
                    }
                }
            }
        }
    }
    sum = parseFloat(sum.toFixed(2))
    totalNetPayOff.html(sum)
    totalNetPayOffNav.html(sum)
}

let selectedData = null
let selectedTag = null

const toggleModal = (e) =>{
    selectedTag = null
    selectedData = null
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
    selectedTag = e.id
    selectedData = orderTracked[selectedTag]
    let tComm =`<tr><td>Order Tag</td><td>${e.id}</td></tr><tr><td>Strike</td><td>${selectedData["strike"]}</td></tr><tr><td>Net Pay Off</td><td>${selectedData.hasOwnProperty('NetPayOff') ? parseFloat(selectedData["NetPayOff"].toFixed(2)) : '--'}</td></tr>`
    $("#ModalCommanTable").append(tComm)
    let buyDiv = `<div class="row p-1"><div id="textCenter" class="col">Buy Basket Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['BasketMargin'].toFixed(2))}
    </div></div><div class="row p-1"><div id="textCenter" class="col">Buy Total Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['TotalMargin'].toFixed(2))}
    </div></div><div class="row p-1"><div id="textCenter" class="col">Buy Basket Status :</div><div id="textCenter" class="col">${selectedData['BuyBasketStatus']}</div>
  </div><div class="row p-1"><div id="textCenter" class="col">Buy Order Date :</div><div id="textCenter" class="col">${selectedData['BuyOrderDate']}</div>
  </div><div class="row p-1">
  <div id="textCenter" class="col">IRR :</div><div id="textCenter" class="col">${parseFloat(selectedData['BuyIRR'].toFixed(2))}</div></div></div><div class="row p-1">
  <div id="textCenter" class="col">Recalculated IRR :</div><div id="textCenter" class="col">${parseFloat(selectedData['RecalculatedBuyIRR'].toFixed(2))}</div></div><div class="row p-1">
<div id="textCenter" class="col">Remaining Days :</div><div id="textCenter" class="col">${selectedData['BuySideDaysRemaining']}</div></div>`  
$("#buyContainer").append(buyDiv)

  let sellDiv = `<div class="row p-1"><div id="textCenter" class="col">Sell Total Margin :</div><div id="textCenter" class="col">${parseFloat(selectedData['SellTotalMargin'].toFixed(2))}
  </div></div><div class="row p-1"><div id="textCenter" class="col">Sell Basket Status :
  </div><div id="textCenter" class="col"> ${selectedData.hasOwnProperty('SellBasketStatus') ? selectedData["SellBasketStatus"] : '--'}</div></div><div class="row p-1"><div id="textCenter" class="col">Sell Order Date :</div>
  <div id="textCenter" class="col">${selectedData.hasOwnProperty('SellOrderDate') ? selectedData["SellOrderDate"] : '--'}</div></div>
  <div class="row p-1"><div id="textCenter" class="col">IRR :</div><div id="textCenter" class="col">
  ${selectedData.hasOwnProperty('SellIRR') ? parseFloat(selectedData["SellIRR"].toFixed(2)) : '--'}</div></div>
  <div class="row p-1"><div id="textCenter" class="col">Recalculated IRR :</div><div id="textCenter" class="col">
  ${selectedData.hasOwnProperty('RecalculatedSellIRR') ? parseFloat(selectedData["RecalculatedSellIRR"].toFixed(2)) : '--'}</div></div><div class="row p-1"><div id="textCenter" class="col-sm">Remaining Days :</div>
  <div id="textCenter" class="col">${selectedData.hasOwnProperty('SellSideDaysRemaining') ? parseFloat(selectedData["SellSideDaysRemaining"].toFixed(2)) : '--'}</div></div><div class="row p-1"><div id="textCenter" class="col"></div><div id="textCenter" class="col">
 </div></div>`
$("#sellContainer").append(sellDiv)

let buySideOrders =selectedData['BuySideOrders']
let sellSideOrders =selectedData['SellSideOrders']
let buyTR = null
let buyCounter = 0
for(let buyoption in buySideOrders){
    // buyCounter = buyCounter+1
    // let incompleteId = "buy"+buyCounter
    buyTR += `<tr ${buySideOrders[buyoption]["status"] == "INCOMPLETE" ? `onclick=onEdit(${buyoption})` : ''}><td>${buySideOrders[buyoption]["type"]}</td><td ${buySideOrders[buyoption]["status"] == "INCOMPLETE" ? `id=${buyoption}` : ''} >${buySideOrders[buyoption]["status"]}</td><td>${buySideOrders[buyoption]["internalOrderid"]}</td><td>${buySideOrders[buyoption]["sentPrice"]}</td><td>${buySideOrders[buyoption]["finalPrice"]}</td></tr>`
}
$("#buyTable").append(buyTR)
let sellTR = null

if(sellSideOrders){
let sellCounter = 0
for(let selloption in sellSideOrders){
    // sellCounter = sellCounter+1
    // let incompleteId = "sell"+sellCounter
    sellTR  += `<tr ${sellSideOrders[selloption]["status"] == "INCOMPLETE" ? `onclick=onEdit(${selloption})` : ''}><td>${sellSideOrders[selloption]["type"]}</td><td ${sellSideOrders[selloption]["status"] == "INCOMPLETE" ? `id=${selloption}` : ''} >${sellSideOrders[selloption]["status"]}</td><td>${sellSideOrders[selloption]["internalOrderid"]}</td><td>${sellSideOrders[selloption]["sentPrice"]}</td><td>${sellSideOrders[selloption]["finalPrice"]}</td></tr>`
}
}else{
        sellTR  += `<tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr><tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr><tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>`
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
    url: 'http://options.supersimplecloud.in/getOrderTracker',
    // url: 'http://localhost:3000/getTradedData',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      orderTracked = data
      $('#homePageLoader').removeClass('d-flex').addClass('hideHomeLoder')
      createTable(data)
    },
    error: function(xhr, status, error) {
        $('#homePageLoader').removeClass('d-flex').addClass('hideHomeLoder')
      ajaxCallError.show()
      setTimeout(() => {
        ajaxCallError.hide()
      },3000)
      console.error('There was a problem with the AJAX request:', status, error);
    }
  });
}

const onEdit = (elm) => {
$("#averagePriceError").html("")
$("#exchangeOrderIdErrror").html("")
$("#averagePrice").val("");
$("#exchangeOrderId").val("");
let instTag = $("#instrument")
instTag.html(selectedTag)
for(let selectedDataKey in selectedData){
    if(selectedData[selectedDataKey].hasOwnProperty(elm)){
        if(selectedDataKey === "BuySideOrders"){
            $("#basketOrder").html("Buy Side Orders")
            $("#ordertype").html(selectedData[selectedDataKey][elm]["type"])
            $("#orderSentPrice").html(parseFloat(selectedData[selectedDataKey][elm]["sentPrice"].toFixed(2)))
        }else if(selectedDataKey === "SellSideOrders"){
            $("#basketOrder").html("Sell Side Orders")
            $("#ordertype").html(selectedData[selectedDataKey][elm]["type"])
            $("#orderSentPrice").html(parseFloat(selectedData[selectedDataKey][elm]["sentPrice"].toFixed(2)))
        }
    }
}
orderIdModal.click()
}

const markasComplete = () => {
    let averagePriceError = $("#averagePriceError")
    let exchangeOrderIdErrror = $("#exchangeOrderIdErrror")
    averagePriceError.html("")
    exchangeOrderIdErrror.html("")
    let averagePrice = $("#averagePrice").val();
    let exchangeID = $("#exchangeOrderId").val();

    if(averagePrice == "" && exchangeID == "") {
        averagePriceError.html("Required field can not be empty")
        exchangeOrderIdErrror.html("Required field can not be empty")
        averagePriceError.show()
        exchangeOrderIdErrror.show()
        return;
    }
    if(exchangeID == "") {
        exchangeOrderIdErrror.html("Required field can not be empty")
        exchangeOrderIdErrror.show()
        return;
    }
    if(averagePrice == "") {
        averagePriceError.html("Required field can not be empty")
        averagePriceError.show()
        return;
    }
    if (!validateNumberInput(averagePrice)) {
        averagePriceError.html("Average Price  is invalid.")
        averagePriceError.show()
        return;
      }
    $('#updateOrder').prop("disabled",true)
    $.ajax({
        type: "post",
        url: 'http://options.supersimplecloud.in/modifyOrderTracker',
        // url: "http://localhost:3000/modifyOrderTracker",
        contentType: 'application/json',
        data: JSON.stringify({
            'avgPrice': averagePrice,
            'exchangeId': exchangeID,
            'operation': "update"
        }),
        success: function (response) {
        $('#updateOrder').prop("disabled",false)
        $('#onSuccess').show()
        setTimeout(() => {
            $('#closeUpdateOrder').trigger("click")
            location.reload();
          }, 2000);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $('#updateOrder').prop("disabled",false)
            $('#onFailure').show()
            console.log("Error occurred in getBuyBotsData: ",textStatus);
        }
    });
}


function validateNumberInput(input) {
    var regex = /^\d*\.?\d+$/;
    return regex.test(input);
  }