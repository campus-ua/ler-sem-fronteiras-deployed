import PictoView from "./PictoView";
// import LGPView from "../Vistas/LGPView";
// import AudioView from "../Vistas/AudioView";
import TextView from "../Vistas/TextView";

export default function BookViewer({ friendId, pageData, viewMode }) {
  switch (friendId) {
    case "luna":
      return <PictoView data={pageData} mode={viewMode} />;

    case "rafa":
      return <div>LGP VIEW (em construção)</div>;

    case "nema":
      return <div>AUDIO VIEW (em construção)</div>;

    case "bia":
    default:
      return <TextView data={pageData} mode={viewMode} />;
  }
}
