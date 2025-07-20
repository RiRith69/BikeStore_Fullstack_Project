import React from "react";
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
  onSubmit,
  showQR,
  total,
  qrImage,
}) => {
  const banks = [
    { name: "ABA", img: ABAImg, qrImg: ABAQR, color: "border-sky-800 bg-sky-50" },
    { name: "KHQR", img: KHQRImg, qrImg: ACQR, color: "border-red-600 bg-red-50" },
    { name: "ACLEDA", img: ACLEDAImg, qrImg: ACQR, color: "border-oldGold-500 bg-oldGold-50" },
    { name: "WING", img: WINGImg, qrImg: ABAQR, color: "border-lime-600 bg-lime-50" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40" />

      {/* Modal Container */}
      <div className="relative z-50 bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fadeIn">
        {showQR ? (
          // QR Payment Screen
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Pay with {selectedBank}</h3>
              <button
                onClick={() => onCancel("showQR")}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gray-100 p-2 rounded-xl">
                <img
                  src={qrImage}
                  alt={`${selectedBank} QR`}
                  className="w-72 h-72 object-contain" 
                />
              </div>

              <a
                href={qrImage}
                download={`${selectedBank}_QR.png`}
                className="inline-block w-auto text-center py-2 px-4 bg-gray-100 text-teal-600 rounded-lg hover:bg-teal-400 hover:text-white transition-colors"
              >
                Download
              </a>
            </div>

            <div className="text-center bg-teal-50 p-3 rounded-xl">
              <p className="text-xl font-bold text-teal-600">${total.toFixed(2)}</p>
            </div>

            <button
              onClick={onSubmit}
              className="w-full py-3 rounded-xl bg-teal-400 text-white hover:bg-teal-600 transition-colors"
            >
              I’ve Completed Payment
            </button>

            <button
              onClick={() => onCancel("showQR")}
              className="text-sm text-blue-600 hover:underline text-center w-full"
            >
              Back to payment methods
            </button>
          </div>
        ) : (
          // Bank Selection & Agreement
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Choose Your Bank</h2>
              <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {banks.map((bank) => (
                <button
                  key={bank.name}
                  onClick={() => setSelectedBank(bank.name)}
                  className={`p-3 rounded-xl flex flex-col items-center border transition-all duration-200 ${
                    selectedBank === bank.name
                      ? `${bank.color} scale-[1.03] shadow-md`
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <img src={bank.img} alt={bank.name} className="h-8 mb-2" />
                  <span className="text-sm font-medium">{bank.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-start mb-6">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-5 w-5 mt-1 text-blue-600 rounded focus:ring-0"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                I agree to the <span className="underline text-blue-600">terms and conditions</span>
              </label>
            </div>

            <button
              onClick={() => {
                if (selectedBank && agreeToTerms) {
                  onSubmit();
                }
              }}
              disabled={!selectedBank || !agreeToTerms}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                !selectedBank || !agreeToTerms
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Continue to Pay
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OnlinePaymentModal;
