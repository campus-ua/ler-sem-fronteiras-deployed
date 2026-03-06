import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { bookPages } from "../data/book";
import ProgressBar from "../components/BookReader/Comum/ProgressBar/ProgressBar";
import ViewModeSelector from "../components/BookReader/Comum/ViewModeSelector/ViewModeSelector";
import ReaderLayout from "../components/BookReader/Comum/ReaderLayout/ReaderLayout";
import BookViewer from "../components/BookReader/Vistas/BookViewer";
import CloseButton from "../components/BookReader/Comum/CloseButton/CloseButton";
import FriendButton from "../components/BookReader/Comum/FriendButton/FriendButton";

import nemaImg from "../assets/friend-button/nema.png";
import lunaImg from "../assets/friend-button/luna.png";
import rafaImg from "../assets/friend-button/rafa.png";
import biaImg from "../assets/friend-button/bia.png";

import "./Reader.css";

const friends = [
  { id: "nema", name: "NEMA", image: nemaImg },
  { id: "luna", name: "LUNA", image: lunaImg },
  { id: "rafa", name: "RAFA", image: rafaImg },
  { id: "bia", name: "BIA", image: biaImg },
];

export default function Reader() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [friendId, setFriendId] = useState(state?.friend || "luna");
  const [isFriendSelectorOpen, setIsFriendSelectorOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState("split");

  const pageData = bookPages[currentPage];

  const handlePrevious = () => {
    if (currentPage === 0) {
      navigate(-1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < bookPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  const handleClose = () => {
    navigate("/");
  };

  return (
    <main className="reader-page">
      <div className="reader-header">
        <div className="reader-header-inner">
          <ProgressBar current={currentPage} total={bookPages.length} />

          <div className="reader-header-right">
            <FriendButton
              friends={friends}
              currentFriend={friendId}
              isOpen={isFriendSelectorOpen}
              onToggle={() => setIsFriendSelectorOpen((v) => !v)}
              onSelect={(id) => {
                setFriendId(id);
                setIsFriendSelectorOpen(false);
              }}
            />

            <CloseButton onClick={handleClose} />
          </div>
        </div>
      </div>

      <ReaderLayout
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={true}
        canGoNext={currentPage < bookPages.length - 1}
      >
        <BookViewer
          friendId={friendId}
          pageData={pageData}
          viewMode={viewMode}
        />
      </ReaderLayout>

      <ViewModeSelector activeMode={viewMode} onChangeMode={setViewMode} />
    </main>
  );
}
