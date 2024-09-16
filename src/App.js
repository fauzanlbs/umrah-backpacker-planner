import React, { useState } from "react";
import { FileText, MapPin, Luggage, Info } from "lucide-react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checklist, setChecklist] = useState({
    passport: false,
    visa: false,
    vaccinations: false,
    tickets: false,
    accommodation: false,
    ihram: false,
    personalItems: false,
  });

  const steps = [
    { title: "Dokumen", icon: <FileText className="w-8 h-8" /> },
    { title: "Perjalanan", icon: <MapPin className="w-8 h-8" /> },
    { title: "Packing", icon: <Luggage className="w-8 h-8" /> },
    { title: "Panduan", icon: <Info className="w-8 h-8" /> },
  ];

  const handleChecklistChange = (item) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Dokumen yang Diperlukan:
            </h3>
            <div className="space-y-6">
              {[
                { key: "passport", label: "Paspor (minimal berlaku 6 bulan)" },
                { key: "visa", label: "Visa Umrah" },
                { key: "vaccinations", label: "Bukti Vaksinasi" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center space-x-4 p-4 bg-yellow-200 rounded-lg border-3 border-yellow-400 shadow-inner"
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => handleChecklistChange(item.key)}
                    className="form-checkbox h-6 w-6 text-purple-600 rounded-none"
                  />
                  <span className="text-purple-800 text-xl font-bold">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-8 p-6 bg-teal-200 border-3 border-teal-400 rounded-lg">
              <h4 className="font-extrabold text-2xl text-teal-800">
                Informasi Visa Umrah untuk WNI:
              </h4>
              <p className="mt-4 text-lg text-teal-700 font-semibold">
                Mulai 9 Oktober 2023, WNI dapat mengajukan visa umrah secara
                mandiri melalui platform online resmi Kementerian Haji dan Umrah
                Arab Saudi. Biaya visa umrah saat ini gratis. Proses pengajuan
                membutuhkan waktu sekitar 5 hari kerja.
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Perencanaan Perjalanan:
            </h3>
            <div className="space-y-6">
              {[
                {
                  key: "tickets",
                  label: "Tiket pesawat Jakarta - Jeddah/Madinah",
                },
                {
                  key: "accommodation",
                  label: "Akomodasi di Mekkah dan Madinah",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center space-x-4 p-4 bg-yellow-200 rounded-lg border-3 border-yellow-400 shadow-inner"
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => handleChecklistChange(item.key)}
                    className="form-checkbox h-6 w-6 text-purple-600 rounded-none"
                  />
                  <span className="text-purple-800 text-xl font-bold">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-8 p-6 bg-pink-200 border-3 border-pink-400 rounded-lg">
              <h4 className="font-extrabold text-2xl text-pink-800">
                Tips Backpacker:
              </h4>
              <ul className="list-disc list-inside text-lg mt-4 text-pink-700 space-y-2 font-semibold">
                <li>Cari penerbangan murah dengan transit</li>
                <li>Pilih hostel atau hotel budget dekat Masjidil Haram</li>
                <li>Gunakan transportasi umum seperti bus SAPTCO</li>
              </ul>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Packing List:
            </h3>
            <div className="space-y-6">
              {[
                { key: "ihram", label: "Pakaian Ihram (untuk pria)" },
                { key: "personalItems", label: "Perlengkapan pribadi" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center space-x-4 p-4 bg-yellow-200 rounded-lg border-3 border-yellow-400 shadow-inner"
                >
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={() => handleChecklistChange(item.key)}
                    className="form-checkbox h-6 w-6 text-purple-600 rounded-none"
                  />
                  <span className="text-purple-800 text-xl font-bold">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-8 p-6 bg-orange-200 border-3 border-orange-400 rounded-lg">
              <h4 className="font-extrabold text-2xl text-orange-800">
                Barang Penting:
              </h4>
              <ul className="grid grid-cols-2 gap-4 text-lg mt-4 text-orange-700 font-semibold">
                {[
                  "Tas ransel nyaman",
                  "Sandal mudah lepas",
                  "Botol minum isi ulang",
                  "Obat-obatan pribadi",
                  "Power bank",
                  "Masker & hand sanitizer",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-4 h-4 bg-orange-400 mr-3 inline-block"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-purple-700">
              Panduan Lokasi:
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Masjidil Haram, Mekkah",
                  description:
                    "Pusat ibadah utama untuk tawaf dan sai. Gunakan aplikasi peta untuk menemukan pintu masuk terdekat dari akomodasi Anda.",
                },
                {
                  title: "Masjid Nabawi, Madinah",
                  description:
                    "Kunjungi makam Nabi Muhammad SAW. Perhatikan waktu ziarah yang berbeda untuk pria dan wanita.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-cyan-200 rounded-lg border-3 border-cyan-400"
                >
                  <h4 className="font-extrabold text-2xl text-cyan-800 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-lg text-cyan-700 font-semibold">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-lime-200 border-3 border-lime-400 rounded-lg">
              <h4 className="font-extrabold text-2xl text-lime-800">
                Tips Transportasi:
              </h4>
              <ul className="list-disc list-inside text-lg mt-4 text-lime-700 space-y-2 font-semibold">
                <li>Gunakan bus SAPTCO untuk perjalanan Mekkah-Madinah</li>
                <li>
                  Di Mekkah, manfaatkan bus shuttle gratis ke Masjidil Haram
                </li>
                <li>
                  Aplikasi ride-hailing seperti Careem tersedia untuk perjalanan
                  singkat
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-16 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-6xl font-black text-center text-gray-300 mb-16 tracking-tight"
          style={{ textShadow: "3px 3px 0 #fff, 6px 6px 0 #e879f9" }}
        >
          Umrah Backpacker Planner
        </h1>
        <div className="bg-white shadow-xl rounded-2xl p-10 mb-12 border-6 border-purple-500">
          <div className="flex justify-between items-center mb-12">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  currentStep === index
                    ? "text-purple-600 scale-110"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <div
                  className={`p-4 rounded-full ${
                    currentStep === index
                      ? "bg-yellow-300 border-3 border-yellow-500"
                      : "bg-gray-200"
                  }`}
                >
                  {step.icon}
                </div>
                <span className="mt-3 text-base font-extrabold">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
          <div className="transition-all duration-300 ease-in-out">
            {renderStepContent()}
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            className={`px-8 py-4 rounded-lg text-xl font-extrabold transition-all duration-300 ${
              currentStep === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-400 text-white hover:bg-cyan-500 border-3 border-cyan-600"
            }`}
            disabled={currentStep === 0}
          >
            Sebelumnya
          </button>
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            className={`px-8 py-4 rounded-lg text-xl font-extrabold transition-all duration-300 ${
              currentStep === steps.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-pink-500 text-white hover:bg-pink-600 border-3 border-pink-700"
            }`}
            disabled={currentStep === steps.length - 1}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
