import React, { useState } from "react";
import ABAImg from "./ABA.png";
import KHQRImg from "./KHQR.png";
import ACLEDAImg from "./Acleda.png";
import WINGImg from "./Wing.png";
import ABAQR from "./ABAQR.png";
import ACQR from "./ACQR.png";

const OnlinePaymentModal = ({
  products,
  selectedBank,
  setSelectedBank,
  agreeToTerms,
  setAgreeToTerms,
  onCancel,
  showQR, // 👈 New prop
  total, // 👈 New prop
  qrImage, // 👈 New prop (based on selected bank)
}) => {
  const banks = [
    { name: "ABA", img: ABAImg, qrImg: ABAQR, activeClass: "border-sky-700 bg-sky-100" },
    { name: "KHQR", img: KHQRImg, qrImg: ACQR, activeClass: "border-red-500 bg-red-50" },
    { name: "ACLEDA", img: ACLEDAImg, qrImg: ACQR, activeClass: "border-yellow-600 bg-yellow-50" },
    { name: "WING", img: WINGImg, qrImg: ABAQR, activeClass: "border-lime-600 bg-lime-100" }
  ];

  if (showQR) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-center space-y-4 shadow-lg">
          <h3 className="text-lg font-semibold">Scan to Pay via {selectedBank}</h3>
          <img
            src={qrImage}
            alt={`${selectedBank} QR`}
            className="w-60 mx-auto border rounded-lg"
          />
          <p className="text-md font-semibold text-pink-600">Total: ${total.toFixed(2)}</p>
          <p className="text-gray-600 text-sm">
            Please complete the payment and notify the shop with a screenshot or transaction ID.
          </p>
          <a
            href={qrImage}
            download={`${selectedBank}-payment-qr.png`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Download QR
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Payment</h2>

        <div className="space-y-3 mb-4">
          {banks.map((bank) => (
            <button
              key={bank.name}
              onClick={() => setSelectedBank(bank.name)}
              className={`w-full p-3 border rounded-xl flex items-center justify-between ${
                selectedBank === bank.name ? bank.activeClass : ""
              }`}
            >
              <img src={bank.img} alt={bank.name} className="h-6" />
              <span>Scan to pay with {bank.name}</span>
            </button>
          ))}
        </div>

        <p className="text-sm text-red-600 font-semibold mb-2">
          ឯកសារ៖ អ្នកត្រូវបង់ប្រាក់តាមរយៈ QR CODE ដោយជ្រើសរើសធនាគារ និងពិនិត្យព័ត៌មានឲ្យត្រឹមត្រូវ
        </p>

        <h3 className="font-bold mb-1">TERMS & CONDITIONS</h3>
        <label className="text-sm flex items-start gap-2 mb-4">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mt-1"
          />
          <span>
            ឯកភាពជាមួយលក្ខខណ្ឌការជាវទំនិញ និងមិនមានការបង់ប្រាក់ ឬ សងប្រាក់វិញ ទេ<br />
            <i>I agree to all orders and there is no cancellation or refund</i>
          </span>
        </label>

        <div className="flex justify-between items-center">
          <span className="font-bold text-pink-600">Total: ${total.toFixed(2)}</span>
          <div className="space-x-2">
            <button
              onClick={onCancel}
              className="bg-gray-200 px-4 py-1 rounded-xl hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => onCancel("showQR")}
              disabled={!agreeToTerms || !selectedBank}
              className={`px-4 py-1 rounded-xl ${
                !agreeToTerms || !selectedBank
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePaymentModal;