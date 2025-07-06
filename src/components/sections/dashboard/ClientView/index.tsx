import { useParams } from "react-router";

export function ClientView() {
  const { clientId } = useParams();

  console.log("Client ID:", clientId);

  return <h1>ClientView</h1>;
}
