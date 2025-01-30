import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import { appstore_deeplink, playstore_deeplink } from "../const/const";
import appStoreIcon from "../images/downloadapp/app-store_831276 1.svg";
import playStoreIcon from "../images/downloadapp/playstore_300218 1.svg";
import Navbar1 from "./Navbar1";
const PetProfile = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [petsData, setPetsData] = useState([]);
  const [apiIsLoading, setApiIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressDuration, setProgressDuration] = useState(3000);
  const [remainingTime, setRemainingTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);
  const intervalStartTimeRef = useRef(null);
  const countRef = useRef(0);
  const { petid } = useParams();
  const currentPet = petsData[currentIndex];
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  const startProgress = (time = progressDuration) => {
    clearTimeout(intervalRef.current);
    intervalStartTimeRef.current = Date.now();
    intervalRef.current = setTimeout(() => {
      if (currentIndex === petsData.length - 1) return;
      setCurrentIndex((prevIndex) =>
        prevIndex === petsData.length - 1 ? 0 : prevIndex + 1
      );
      setShowNavbar(false);
    }, time);
  };
  const handleMouseEnter = () => {
    if (!intervalRef.current) return;
    const elapsedTime = Date.now() - intervalStartTimeRef.current;
    setRemainingTime(progressDuration - elapsedTime);
    clearTimeout(intervalRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const handleMouseLeave = () => {
    if (remainingTime) {
      startProgress(remainingTime);
    }
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleSideClick = (direction) => {
    clearTimeout(intervalRef.current);
    setShowNavbar(false);
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? petsData.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      countRef.current = countRef.current + 1;
      if (countRef.current > petsData.length - 1 && !isPopupVisible) {
        setShowPopup(true);
        setIsPopupVisible(true);
      }
      setCurrentIndex((prevIndex) =>
        prevIndex === petsData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPetsData(data?.data[0]?.stories ?? []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setApiIsLoading(false);
      }
    }
    function decodeHash(hash) {
      const base64Decoded = atob(hash);
      const utf8Decoder = new TextDecoder("utf-8");
      const decoded = utf8Decoder.decode(
        Uint8Array.from(base64Decoded, (c) => c.charCodeAt(0))
      );
      return decoded;
    }
    fetchData(
      `https://prod.thepawfectdate.com/api/v1/getstoryofpet?profileid=${decodeHash(
        petid
      )}&loggedinpet=${decodeHash(petid)}`
    );
  }, [petid]);
  useEffect(() => {
    if (currentPet?.videoUrl && videoRef?.current) {
      const duration = Math.round(videoRef.current.duration * 1000) || 3000;
      setProgressDuration(duration);
    } else {
      setProgressDuration(3000);
    }
    startProgress();
    return () => clearTimeout(intervalRef.current);
  }, [currentIndex, currentPet]);
  if (!petid) {
    navigate("/");
    return null;
  }
  return (
    <div className="bg-[#E8E8E8]">
      <div
        style={{
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
        }}
        className="relative w-full m:max-w-sm mx-auto overflow-hidden bg-[#fff] shadow-lg h-dvh xs:rounded-none md:rounded-[10px]"
      >
        {/* Navbar with transition */}
        <div
          className={`transition-transform duration-500 ease-in-out absolute top-0 left-0 right-0 z-30 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navbar1 />
        </div>
        {apiIsLoading && petsData.length === 1 ? (
          <div className="flex items-center justify-center h-full text-center text-[#030303]">
            <p>No story is available for this pet.</p>
          </div>
        ) : (
          <>
            {/* Progress Bar with transition */}
            <div
              className={`transition-all duration-500 ease-in-out absolute left-0 right-0 z-20 flex gap-1.5 p-3 ${
                showNavbar ? "top-[73px]" : "top-0"
              }`}
            >
              {petsData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index === currentIndex ? "bg-[#EE483E]" : "bg-[#E8E8E8]"
                  }`}
                  style={{
                    animation:
                      index === currentIndex
                        ? `progress ${progressDuration}ms linear`
                        : "none",
                  }}
                />
              ))}
            </div>
            {/* Video Controls with transition */}
            <div
              className={`absolute z-20 right-4 transition-all duration-500 ease-in-out ${
                showNavbar ? "top-[94px]" : "top-6"
              }`}
            >
              {currentPet?.type === "video" && (
                <button
                  onClick={toggleMute}
                  className="p-2 transition-colors rounded-full bg-[#000] backdrop-blur-sm"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              )}
              <button
                onClick={() => navigate("/")}
                className="p-2 ml-3 transition-colors rounded-full bg-[#000] backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            {/* Main Content */}
            <div
              className="relative h-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {currentPet?.type === "image" && currentPet.url ? (
                <img
                  src={currentPet.url}
                  className="object-cover w-full h-full md:object-cover"
                  alt={currentPet.url}
                />
              ) : currentPet?.type === "video" && currentPet?.url ? (
                <video
                  ref={videoRef}
                  src={currentPet?.url}
                  className="w-full h-full xs:object-cover md:object-cover"
                  autoPlay
                  muted={isMuted}
                />
              ) : null}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4">
                <div
                  onClick={() => handleSideClick("left")}
                  className="w-1/2 h-full cursor-pointer"
                />
                <div
                  onClick={() => handleSideClick("right")}
                  className="w-1/2 h-full cursor-pointer"
                />
              </div>
            </div>
          </>
        )}
        {/* Download App Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/75">
            <div className="relative p-6 bg-white rounded-md shadow-lg w-96">
              <button
                className="absolute p-2 text-gray-500 top-2 right-2 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                ✕
              </button>
              <h2 className="text-xl font-bold text-center">
                Download the App!
              </h2>
              <p className="mt-2 text-center text-gray-700">
                Enjoy exclusive features by downloading our app.
              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  className="flex items-center px-4 py-2 space-x-2 text-white bg-black rounded-md hover:bg-gray-800"
                  onClick={() => window.open(playstore_deeplink, "_blank")}
                >
                  <img
                    src={playStoreIcon}
                    alt="Play Store"
                    className="w-5 h-5"
                  />
                  <span>Play Store</span>
                </button>
                <button
                  className="flex items-center px-4 py-2 space-x-2 text-white bg-black rounded-md hover:bg-gray-800"
                  onClick={() => window.open(appstore_deeplink, "_blank")}
                >
                  <img src={appStoreIcon} alt="App Store" className="w-5 h-5" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PetProfile;
