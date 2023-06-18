import Alert from "../components/alert";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="mx-2 py-10 min-h-screen xl:mx-20 ">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
}
