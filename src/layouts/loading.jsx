import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      className="container__main__content__listing"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <SyncLoader color="#36d7b7" size={10} />
      <div style={{ marginTop: 20 }}>Loading</div>
    </div>
  );
}
