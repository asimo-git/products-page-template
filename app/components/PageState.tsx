import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function PageState() {
  const { status, error } = useSelector((state: RootState) => state.products);

  if (status === "failed") {
    return (
      <div className="m-4">
        <p>An error has occurred: {error}</p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="m-4">
        <div className="loader"></div>
      </div>
    );
  }

  return null;
}
