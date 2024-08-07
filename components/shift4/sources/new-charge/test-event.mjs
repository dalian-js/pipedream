export default {
  "id": "event_1234567890",
  "created": 1234567890,
  "objectType": "event",
  "type": "CHARGE_SUCCEEDED",
  "data": {
    "id": "char_1234567890",
    "created": 1234567890,
    "objectType": "charge",
    "amount": 2000,
    "amountRefunded": 0,
    "currency": "USD",
    "card": {
      "id": "card_1234567890",
      "created": 1234567890,
      "objectType": "card",
      "first6": "401200",
      "last4": "0007",
      "fingerprint": "BMophBO0Q123564mrty2VT",
      "expMonth": "07",
      "expYear": "2027",
      "cardholderName": "",
      "customerId": "cust_1234567890",
      "brand": "Visa",
      "type": "Credit Card",
      "country": "CH",
      "addressLine1": "",
      "addressLine2": "",
      "addressCity": "",
      "addressState": "",
      "addressZip": "",
      "addressCountry": "",
      "issuer": "SHIFT4 TEST"
    },
    "customerId": "cust_1234567890",
    "captured": true,
    "refunded": false,
    "disputed": false,
    "avsCheck": {
      "result": "unavailable"
    },
    "status": "successful",
    "clientObjectId": "client_char_1234567890"
  },
  "log": "log_1234567890"
}